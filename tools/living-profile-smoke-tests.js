const fs = require("fs");
const path = require("path");
const vm = require("vm");

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

function extract(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  if (start === -1 || end === -1) throw new Error(`Could not extract ${startMarker}`);
  return source.slice(start, end);
}

function browserLogic() {
  const sandbox = {
    console,
    CONTEXT_REGISTRY: [
      { context_id: "global", aliases: ["general", "real_world", "real-world"] },
      { context_id: "en", aliases: ["epic_of_gnosis", "epic of gnosis", "eog"] },
      { context_id: "htf", aliases: ["hometown_friends", "hometown friends"] },
      { context_id: "oregon_fail", aliases: ["wccc", "west_coast_crypto_cruise", "west coast crypto cruise", "west coast crypto-cruise"] },
      { context_id: "shawniverse", aliases: [] },
      { context_id: "sketchpad_survivors", aliases: ["sketchpad survivors"] },
      { context_id: "little_dust_devil", aliases: ["little dust devil"] },
      { context_id: "hi_orbit_games", aliases: ["hi orbit games", "hi-orbit"] },
      { context_id: "k_st_engineering", aliases: ["k st engineering", "kst_engineering", "kst"] },
      { context_id: "future_projects", aliases: ["future"] },
      { context_id: "other", aliases: ["unknown", "not_sure", "not sure"] }
    ],
    EXPORT_POLICIES: {
      public_default: { export_policy_id: "public_default", target_context_id: "global", export_type: "public", include_contexts: ["global"], require_reviewed: false, require_complete_relationship_approval: true, deny_missing_context: true, deny_missing_reality_status: true, deny_missing_perspective: true, include_private_fields: false, include_audit_history: false, include_claim_requests: false },
      project_default: { export_policy_id: "project_default", target_context_id: "global", export_type: "project", include_contexts: ["global"], require_reviewed: false, require_complete_relationship_approval: true, deny_missing_context: true, deny_missing_reality_status: true, deny_missing_perspective: true, include_private_fields: false, include_audit_history: false, include_claim_requests: false },
      ai_agent_default: { export_policy_id: "ai_agent_default", target_context_id: "global", export_type: "ai_agent", include_contexts: ["global"], require_reviewed: false, require_complete_relationship_approval: true, deny_missing_context: true, deny_missing_reality_status: true, deny_missing_perspective: true, include_private_fields: false, include_audit_history: false, include_claim_requests: false },
      oregon_fail_default: { export_policy_id: "oregon_fail_default", target_context_id: "oregon_fail", export_type: "project", include_contexts: ["oregon_fail", "global"], require_reviewed: false, require_complete_relationship_approval: true, deny_missing_context: true, deny_missing_reality_status: true, deny_missing_perspective: true, include_private_fields: false, include_audit_history: false, include_claim_requests: false }
    },
    nowIso: () => "2026-06-06T00:00:00.000Z",
    buildProfile: () => { throw new Error("buildProfile should not be called in tests"); },
    downloadText: () => {},
    markdownProfile: () => "",
    makeZip: () => "",
    setStatus: () => {}
  };
  vm.createContext(sandbox);
  vm.runInContext(extract(indexHtml, "function contextKey", "function updatePreview"), sandbox);
  vm.runInContext(extract(reviewHtml, "const TERMINAL_CHANGE_STATUSES", "function reviewClaim"), sandbox);
  return sandbox;
}

function run() {
  assert(schema.required.includes("governance"), "schema must require governance");
  assert(schema.required.includes("profile_evolution"), "schema must require profile_evolution");
  assert(schema.$defs.governance.required.includes("audit_trail"), "governance must require audit trail");
  assert(schema.$defs.profile_evolution.required.includes("audit_events"), "profile_evolution must require audit events");
  assert(schema.properties.epistemic_metadata, "schema should expose profile-level epistemic metadata");
  assert(schema.$defs.relationship.properties.relationship_id, "relationship rows must support stable relationship_id");
  assert(schema.$defs.relationship.properties.reality_status, "relationship rows must support reality_status");
  assert(schema.$defs.change_request.properties.perspective, "change requests must support perspective");
  assert(indexHtml.includes("How should this information be understood?"), "form should expose plain-language reality status");

  const logic = browserLogic();
  assert(logic.normalizeContextId("wccc").context_id === "oregon_fail", "wccc should normalize to oregon_fail");
  assert(logic.normalizeContextId("west_coast_crypto_cruise").context_id === "oregon_fail", "west_coast_crypto_cruise should normalize to oregon_fail");
  assert(logic.normalizeContextId("mystery_context").context_id === "other", "unknown context should normalize to other");
  assert(logic.duplicateContextAliases().length === 0, "context registry should not contain duplicate aliases");

  const exportFixture = clone(example);
  exportFixture.epistemic_metadata = {
    context_id: "wccc",
    information_type: "character",
    reality_status: "fictional",
    perspective: "project_author"
  };
  exportFixture.project_usage = { ...(exportFixture.project_usage || {}), ...exportFixture.epistemic_metadata };
  exportFixture.consent.relationship_visibility = "exportable";
  exportFixture.relationship_graph.push({
    relationship_id: "rel_no_approval",
    related_person: "Private Person",
    relationship_type: "friend",
    visibility: "exportable",
    notes: "must not export without bilateral approval"
  });
  exportFixture.relationship_graph.push({
    relationship_id: "rel_public_ok",
    related_person: "Public Alias",
    relationship_type: "collaborator",
    visibility: "exportable",
    context_id: "west_coast_crypto_cruise",
    information_type: "relationship",
    reality_status: "fictional",
    perspective: "project_author",
    notes: "approved public-safe relationship"
  });
  exportFixture.relationship_graph.push({
    relationship_id: "rel_htf_wrong_context",
    related_person: "HTF Joke",
    relationship_type: "fictionalized_as",
    visibility: "exportable",
    context_id: "htf",
    information_type: "joke_meme",
    reality_status: "parody",
    perspective: "community",
    notes: "must not leave in Oregon Fail export"
  });
  exportFixture.narrative_engine.story_provenance.push({
    story_id_title: "story_global_ok",
    context_id: "global",
    information_type: "biography",
    reality_status: "factual",
    perspective: "self_report",
    notes: "global record allowed by Oregon Fail policy"
  });
  exportFixture.narrative_engine.story_provenance.push({
    story_id_title: "story_htf_parody",
    context_id: "htf",
    information_type: "joke_meme",
    reality_status: "parody",
    perspective: "community",
    notes: "must not export as Oregon Fail canon"
  });
  exportFixture.knowledge_graph.organizations.push({
    entity_id: "org_private",
    organization_name: "Private Org",
    notes: "must not export because it has no explicit public visibility"
  });
  exportFixture.knowledge_graph.relationship_entities.push({
    relationship_id: "rel_public_ok",
    person_a: "person_example",
    person_b: "person_public_alias",
    relationship_type: "collaborator",
    requested_visibility: "exportable",
    context_id: "oregon_fail",
    information_type: "relationship",
    reality_status: "fictional",
    perspective: "project_author",
    relationship_notes: "public-safe only"
  });
  exportFixture.governance.relationship_approvals = [
    {
      relationship_id: "rel_public_ok",
      person_a: "person_example",
      person_b: "person_public_alias",
      requested_visibility: "exportable",
      person_a_approval: "approved",
      person_b_approval: "approved",
      reviewer_status: "approved"
    }
  ];
  const oregonExport = logic.scopedProfile("project", exportFixture, "oregon_fail_default");
  assert(!oregonExport.blocked, "Oregon Fail policy should export complete approved Oregon Fail records");
  assert(oregonExport.export_policy_id === "oregon_fail_default", "export should include export_policy_id");
  assert(oregonExport.target_context_id === "oregon_fail", "export should include target_context_id");
  assert(oregonExport.export_type === "project", "export should include export_type");
  assert(oregonExport.excluded_counts, "export should include excluded_counts");
  assert(oregonExport.epistemic_metadata.context_id === "oregon_fail", "WCCC profile context should normalize before export filtering");
  assert(oregonExport.epistemic_metadata.normalized_from === "wccc", "normalized_from should preserve the original alias");
  assert(oregonExport.relationship_graph.some(row => row.relationship_id === "rel_public_ok"), "Oregon Fail export should include approved Oregon Fail relationships");
  assert(!oregonExport.relationship_graph.some(row => row.relationship_id === "rel_htf_wrong_context"), "Oregon Fail export should exclude HTF parody");
  assert(oregonExport.narrative_engine.story_provenance.some(row => row.story_id_title === "story_global_ok"), "Oregon Fail export should include allowed global records");
  assert(!oregonExport.narrative_engine.story_provenance.some(row => row.story_id_title === "story_htf_parody"), "Oregon Fail export should exclude HTF parody story provenance");
  assert(oregonExport.excluded_counts.wrong_context > 0, "wrong-context exclusions should be counted");
  assert(!("profile_owner" in oregonExport.governance), "project export must not expose profile owner");

  const publicExport = logic.scopedProfile("public", { ...clone(exportFixture), epistemic_metadata: { context_id: "global", information_type: "biography", reality_status: "factual", perspective: "self_report" }, project_usage: { context_id: "global", information_type: "biography", reality_status: "factual", perspective: "self_report" } });
  assert(!publicExport.blocked, "public export should allow complete global metadata");
  assert(publicExport.export_policy_id === "public_default", "public export should include policy id");
  assert(publicExport.knowledge_graph.organizations.length === 0, "public export must deny unclassified graph objects");

  assert(logic.scopedProfile("project", { ...clone(exportFixture), epistemic_metadata: { information_type: "character", reality_status: "fictional", perspective: "project_author" } }, "oregon_fail_default").blocked, "missing context should block export");
  assert(logic.scopedProfile("project", { ...clone(exportFixture), epistemic_metadata: { context_id: "oregon_fail", information_type: "character", perspective: "project_author" } }, "oregon_fail_default").blocked, "missing reality_status should block export");
  assert(logic.scopedProfile("ai_agent", { ...clone(exportFixture), epistemic_metadata: { context_id: "oregon_fail", information_type: "character", reality_status: "fictional" } }).blocked, "missing perspective should block AI export");
  assert(logic.scopedProfile("project", { ...clone(exportFixture), epistemic_metadata: { context_id: "unknown_new_project", information_type: "character", reality_status: "fictional", perspective: "project_author" } }, "oregon_fail_default").blocked, "unknown context should block export by default");

  const blockedFixture = clone(exportFixture);
  blockedFixture.governance.relationship_approvals.push({
    relationship_id: "rel_pending",
    requested_visibility: "exportable",
    person_a_approval: "approved",
    person_b_approval: "pending",
    reviewer_status: "needs_bilateral_approval"
  });
  const relationshipBlocked = logic.scopedProfile("project", blockedFixture, "oregon_fail_default");
  assert(relationshipBlocked.blocked && relationshipBlocked.excluded_counts.unapproved_relationship > 0, "pending bilateral approval should block scoped export");

  const mutationProfile = clone(example);
  mutationProfile.profile_evolution.applied_change_ids = [];
  mutationProfile.governance.version_history = [{ version: "1.0.7", source_change_id: "initial_review" }];
  mutationProfile.narrative_engine.story_provenance = [{ story_id_title: "story_keep", notes: "keep" }];
  const record = { reviewer: "test reviewer", profile: mutationProfile };

  assert(logic.nextVersion(mutationProfile) === "1.0.8", "nextVersion must use highest existing version");

  assertThrows(() => logic.applyChangeRequest({
    change_id: "remove_all",
    operation: "remove",
    target_path: "narrative_engine.story_provenance",
    status: "reviewer_pending",
    payload_json: "{}"
  }, record), "empty remove should be rejected");

  assertThrows(() => logic.applyChangeRequest({
    change_id: "bad_payload",
    operation: "append",
    target_path: "knowledge_graph.events",
    status: "reviewer_pending",
    payload_json: "{\"title\":\"missing stable id\"}"
  }, record), "malformed event payload should be rejected");

  assertThrows(() => logic.applyChangeRequest({
    change_id: "unreviewed_promotion",
    operation: "append",
    target_path: "narrative_engine.story_provenance",
    proposed_by: "tester",
    status: "reviewer_pending",
    previous_reality_status: "parody",
    reality_status: "factual",
    previous_information_type: "joke_meme",
    information_type: "biography",
    payload_json: "{\"story_id_title\":\"story_promoted\",\"notes\":\"tries to promote parody\",\"reality_status\":\"factual\",\"information_type\":\"biography\"}"
  }, record), "category promotion should require reviewer reason");

  const validChange = {
    change_id: "story_add_safe",
    operation: "append",
    target_path: "narrative_engine.story_provenance",
    status: "reviewer_pending",
    payload_json: "{\"story_id_title\":\"story_new\",\"notes\":\"safe\"}"
  };
  logic.applyChangeRequest(validChange, record, "approved test fixture");
  assert(mutationProfile.narrative_engine.story_provenance.some(row => row.story_id_title === "story_new"), "valid append should apply");
  assert(mutationProfile.profile_evolution.applied_change_ids.includes("story_add_safe"), "applied change id should be tracked");
  assertThrows(() => logic.applyChangeRequest({ ...validChange, status: "reviewer_pending" }, record), "duplicate application should be rejected");

  logic.applyChangeRequest({
    change_id: "reviewed_promotion",
    operation: "append",
    target_path: "narrative_engine.story_provenance",
    proposed_by: "tester",
    status: "reviewer_pending",
    previous_reality_status: "parody",
    reality_status: "factual",
    previous_information_type: "joke_meme",
    information_type: "biography",
    payload_json: "{\"story_id_title\":\"story_reclassified\",\"notes\":\"reviewed promotion\",\"reality_status\":\"factual\",\"information_type\":\"biography\",\"context_id\":\"global\",\"perspective\":\"reviewer_observation\"}"
  }, record, "Reviewer verified this separately from the joke source.");
  assert(mutationProfile.narrative_engine.story_provenance.some(row => row.story_id_title === "story_reclassified"), "reviewed category promotion should apply");

  assert(packet.schema_summary.top_level_properties.includes("governance"), "review packet should preserve governance");
  assert(packet.schema_summary.top_level_properties.includes("profile_evolution"), "review packet should preserve profile_evolution");

  console.log("living profile smoke tests ok");
}

function assertThrows(fn, message) {
  let threw = false;
  try {
    fn();
  } catch {
    threw = true;
  }
  assert(threw, message);
}

run();
