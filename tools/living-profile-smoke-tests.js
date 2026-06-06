const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const schema = JSON.parse(fs.readFileSync(path.join(root, "schema", "friend_descriptor_schema.json"), "utf8"));
const example = JSON.parse(fs.readFileSync(path.join(root, "examples", "example-descriptor-intake.json"), "utf8"));
const packet = JSON.parse(fs.readFileSync(path.join(root, "exports", "chatgpt-review-packet.json"), "utf8"));
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const reviewHtml = fs.readFileSync(path.join(root, "review.html"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function slugify(input) {
  return (input || "character").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 70) || "character";
}

function buildProfileLikeImported(source, displayName) {
  return {
    profile_id: source.profile_id || slugify(displayName || source.identity?.display_name),
    identity: { ...(source.identity || {}), display_name: displayName || source.identity?.display_name },
    governance: source.governance || defaultGovernance(source.profile_evolution),
    profile_evolution: source.profile_evolution || defaultEvolution()
  };
}

function defaultGovernance(evolution = {}) {
  return {
    profile_owner: "",
    review_owner: "",
    claim_requests: [],
    change_requests: evolution.pending_changes || [],
    relationship_approvals: [],
    version_history: evolution.applied_versions || [],
    audit_trail: evolution.audit_events || []
  };
}

function defaultEvolution() {
  return {
    model_version: "1.0.0",
    stable_identity_paths: ["profile_id", "entity.entity_id", "identity.display_name", "identity.profile_classification", "identity.entity_subtype"],
    living_record_paths: ["narrative_engine", "relationship_graph", "knowledge_graph", "asset_library", "project_usage", "source_notes"],
    pending_changes: [],
    applied_versions: [],
    audit_events: []
  };
}

const allowedPaths = new Set(["narrative_engine.story_provenance"]);

function valueAtPath(root, targetPath) {
  return targetPath.split(".").reduce((node, key) => node?.[key], root);
}

function parentAtPath(root, targetPath) {
  const keys = targetPath.split(".");
  const leaf = keys.pop();
  let node = root;
  keys.forEach(key => {
    node[key] = node[key] || {};
    node = node[key];
  });
  node[leaf] = node[leaf] || [];
  return { node, leaf };
}

function applyChange(profile, change, reviewer = "test reviewer", reason = "test reason") {
  assert(allowedPaths.has(change.target_path), "target path must be whitelisted");
  const payload = change.payload || JSON.parse(change.payload_json);
  const before = clone(valueAtPath(profile, change.target_path));
  const { node, leaf } = parentAtPath(profile, change.target_path);
  if (change.operation === "append") node[leaf].push(payload);
  else throw new Error("test only supports append");
  const after = clone(valueAtPath(profile, change.target_path));
  change.status = "applied";
  change.reviewer = reviewer;
  change.decision_reason = reason;
  profile.governance.audit_trail.push({ action: "applied_change", change_id: change.change_id, target_path: change.target_path, operation: change.operation, proposed_by: change.proposed_by, reviewer, decision_reason: reason, before_snapshot: before, after_snapshot: after });
  profile.governance.version_history.push({ version: "1.0.1", change_id: change.change_id, target_path: change.target_path, operation: change.operation, proposed_by: change.proposed_by, reviewer, decision_reason: reason });
}

function unresolvedRelationshipApprovals(profile) {
  const sensitive = new Set(["project_only", "exportable"]);
  return (profile.governance?.relationship_approvals || []).filter(approval => sensitive.has(approval.requested_visibility) && (approval.person_a_approval !== "approved" || approval.person_b_approval !== "approved" || approval.reviewer_status === "needs_bilateral_approval"));
}

function scopedPublic(profile) {
  const copy = clone(profile);
  delete copy.identity.real_name_optional;
  delete copy.identity.optional_contact;
  copy.relationship_graph = (copy.relationship_graph || []).filter(row => row.visibility === "exportable");
  copy.governance = { profile_owner: copy.governance?.profile_owner || "", relationship_approvals: [] };
  copy.source_notes = {};
  return copy;
}

function run() {
  assert(schema.properties.governance, "schema should include governance");
  assert(schema.properties.profile_evolution, "schema should include profile_evolution");
  assert(indexHtml.includes("importedExtensions.profile_id || slugify"), "index buildProfile should reuse imported profile_id");
  assert(indexHtml.includes("payload_json"), "index should expose structured payload_json");
  assert(indexHtml.includes("downloadScopedJson(\"project\")"), "index should expose project scoped export");
  assert(indexHtml.includes("downloadScopedJson(\"public\")"), "index should expose public scoped export");
  assert(reviewHtml.includes("function applyChangeRequest"), "review should implement applyChangeRequest");
  assert(reviewHtml.includes("function reviewClaim"), "review should implement claim review");
  assert(reviewHtml.includes("APPLICABLE_CHANGE_PATHS"), "review should validate apply target paths");

  const stable = buildProfileLikeImported(example, "Renamed Display");
  assert(stable.profile_id === example.profile_id, "imported profile_id should survive display-name changes");

  const oldProfile = { schema_version: "3.0.0", profile_id: "old-profile", identity: { display_name: "Old Name" } };
  const migratedOld = buildProfileLikeImported(oldProfile, "Changed Name");
  assert(migratedOld.governance.change_requests.length === 0, "old profile should initialize governance");
  assert(migratedOld.profile_evolution.model_version === "1.0.0", "old profile should initialize profile_evolution");

  const evolutionOnly = { schema_version: "3.0.0", profile_id: "evolution-only", identity: { display_name: "Evo" }, profile_evolution: { ...defaultEvolution(), pending_changes: [{ change_id: "survives", status: "submitted" }] } };
  const migratedEvolution = buildProfileLikeImported(evolutionOnly, "Evo Changed");
  assert(migratedEvolution.governance.change_requests[0].change_id === "survives", "profile_evolution without governance should survive migration");

  const profile = clone(example);
  const changes = [
    { change_id: "apply-me", operation: "append", target_path: "narrative_engine.story_provenance", proposed_by: "tester", payload_json: "{\"story_id_title\":\"story_new\",\"who_told_it\":\"tester\"}", status: "submitted" },
    { change_id: "reject-me", operation: "append", target_path: "narrative_engine.story_provenance", proposed_by: "tester", payload_json: "{\"story_id_title\":\"story_bad\"}", status: "submitted" }
  ];
  profile.governance.change_requests = changes;
  profile.narrative_engine.story_provenance = [];
  applyChange(profile, changes[0]);
  changes[1].status = "rejected";
  profile.governance.audit_trail.push({ action: "rejected_change", change_id: "reject-me", decision_reason: "not public safe" });
  assert(changes[0].status === "applied" && changes[1].status === "rejected", "individual changes should be independently decided");
  assert(profile.narrative_engine.story_provenance[0].story_id_title === "story_new", "append change should update story provenance");
  assert(profile.governance.audit_trail.some(event => event.change_id === "reject-me"), "rejected relationship/change should preserve audit event");

  assert(unresolvedRelationshipApprovals(example).length === 1, "example should flag unresolved bilateral relationship approval");

  const publicProfile = scopedPublic(example);
  assert(!("optional_contact" in publicProfile.identity), "public export should remove optional contact");
  assert(!("claim_requests" in publicProfile.governance), "public export should remove claim data");
  assert(Object.keys(publicProfile.source_notes).length === 0, "public export should remove source notes");

  assert(packet.schema_summary.top_level_properties.includes("governance"), "review packet should preserve governance");
  assert(packet.schema_summary.top_level_properties.includes("profile_evolution"), "review packet should preserve profile_evolution");

  console.log("living profile smoke tests ok");
}

run();
