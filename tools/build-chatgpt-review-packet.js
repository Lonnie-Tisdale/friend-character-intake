const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const root = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const reviewHtml = fs.readFileSync(path.join(root, "review.html"), "utf8");
const schema = JSON.parse(fs.readFileSync(path.join(root, "schema", "friend_descriptor_schema.json"), "utf8"));
const example = JSON.parse(fs.readFileSync(path.join(root, "examples", "example-descriptor-intake.json"), "utf8"));

function currentCommit() {
  try {
    return childProcess.execSync("git rev-parse --short HEAD", { cwd: root, encoding: "utf8" }).trim();
  } catch {
    return "uncommitted";
  }
}

function extractFormModel() {
  const start = indexHtml.indexOf("const ASSET_TYPES");
  const end = indexHtml.indexOf("const flatFields");
  if (start === -1 || end === -1) throw new Error("Could not locate form model in index.html.");
  const source = indexHtml.slice(start, end);
  return Function(`${source}\nreturn { FIELD_SECTIONS, SIMPLE_FIELD_IDS, SIMPLE_SECTION_IDS, ASSET_TYPES, ENTITY_TYPES, ENTITY_SUBTYPES, CONSENT_BASES, MINOR_STATUSES, RELATIONSHIP_VISIBILITY, RELATIONSHIP_TYPES };`)();
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fieldSummary(field) {
  return {
    id: field.id,
    label: field.label,
    type: field.type,
    help: field.tip || "",
    placeholder: field.placeholder || "",
    options: field.options || undefined,
    format: field.format || undefined
  };
}

function sectionSummary(section) {
  return {
    id: section.id,
    title: section.title,
    note: section.note,
    fields: section.fields.map(fieldSummary)
  };
}

function mdValue(value) {
  if (value === undefined || value === null || value === "") return "_Not provided._";
  if (Array.isArray(value)) return value.length ? value.map(item => `- ${typeof item === "object" ? JSON.stringify(item) : item}`).join("\n") : "_None._";
  if (typeof value === "object") return `\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\``;
  return String(value);
}

function sectionMarkdown(section) {
  const lines = [`## ${section.title}`, "", section.note || ""];
  section.fields.forEach(field => {
    lines.push("", `### ${field.label}`, `Field ID: \`${field.id}\``, `Type: \`${field.type}\``);
    if (field.tip) lines.push(`Why it exists: ${field.tip}`);
    if (field.placeholder) lines.push("", "Example / placeholder:", "", "```text", field.placeholder, "```");
    if (field.options) lines.push("", "Options:", mdValue(field.options));
    if (field.format) lines.push("", `Row format: \`${field.format}\``);
  });
  return lines.join("\n");
}

function schemaSummary(schemaObject) {
  return {
    schema_id: schemaObject.$id || schemaObject.title || schemaObject.schema_id,
    title: schemaObject.title,
    description: schemaObject.description,
    required: schemaObject.required || [],
    top_level_properties: Object.keys(schemaObject.properties || {}),
    defs: Object.keys(schemaObject.$defs || {})
  };
}

function buildPacket() {
  const model = extractFormModel();
  const commit = currentCommit();
  const generatedAt = new Date().toISOString();
  const publicBase = "https://lonnie-tisdale.github.io/friend-character-intake";
  const sections = model.FIELD_SECTIONS.map(sectionSummary);
  const simpleFields = new Set(model.SIMPLE_FIELD_IDS);
  const simpleSections = sections
    .filter(section => model.SIMPLE_SECTION_IDS.has(section.id))
    .map(section => ({
      ...section,
      fields: section.fields.filter(field => simpleFields.has(field.id))
    }))
    .filter(section => section.fields.length);

  const packet = {
    packet_schema: "chatgpt_review_packet.v1",
    generated_at: generatedAt,
    commit,
    purpose: "Portable context for AI systems that cannot browse the live GitHub Pages app.",
    public_links: {
      intake_form: `${publicBase}/index.html?cachebust=${commit}`,
      review_dashboard: `${publicBase}/review.html?cachebust=${commit}`,
      markdown_packet: `${publicBase}/exports/chatgpt-review-packet.md?cachebust=${commit}`,
      json_packet: `${publicBase}/exports/chatgpt-review-packet.json?cachebust=${commit}`
    },
    review_prompt: [
      "You are reviewing a static, local-first universal profile intake and review system.",
      "Do not assume you can browse the live URL. Use this packet as the source of truth.",
      "Evaluate whether the language is clear for nontechnical users and whether the schema remains powerful enough for advanced canon, asset, graph, AI, game, and export workflows.",
      "Flag corporate/HR/personality-test/fantasy-only language, privacy risks, confusing required fields, missing consent guardrails, and any gaps for reviewing real people, fictional characters, NPCs, historical figures, AI agents, family members, partners, children, collaborators, and pets."
    ].join(" "),
    app_summary: {
      title: "Universal Profile Intake + Review System",
      intake_page_visible_text: stripHtml(indexHtml).slice(0, 8000),
      review_page_visible_text: stripHtml(reviewHtml).slice(0, 5000),
      modes: ["Simple Intake", "Advanced Canon", "Agent Export"],
      preserved_workflows: [
        "static GitHub Pages compatible form",
        "Formspree submission endpoint",
        "live JSON preview",
        "JSON import and v1/v2/v3 migration",
        "Markdown/JSON/agent exports",
        "asset library",
        "knowledge graph foundation",
        "local-first review dashboard",
        "Raw -> Reviewed -> Approved review states"
      ]
    },
    schema_summary: schemaSummary(schema),
    simple_intake_sections: simpleSections,
    all_form_sections: sections,
    controlled_vocabularies: {
      asset_types: model.ASSET_TYPES,
      entity_types: model.ENTITY_TYPES,
      entity_subtypes: model.ENTITY_SUBTYPES,
      consent_bases: model.CONSENT_BASES,
      minor_statuses: model.MINOR_STATUSES,
      relationship_visibility: model.RELATIONSHIP_VISIBILITY,
      relationship_types: model.RELATIONSHIP_TYPES
    },
    sample_profile: example
  };

  return packet;
}

function buildMarkdown(packet) {
  const lines = [
    "# ChatGPT Review Packet",
    "",
    "This file is the workaround for AI systems that cannot open or inspect the live GitHub Pages app from a URL alone. Upload this Markdown file to ChatGPT, Claude, Gemini, or another AI system, or paste the relevant sections directly into the chat.",
    "",
    "## Direct Review Prompt",
    "",
    packet.review_prompt,
    "",
    "## Public Links",
    "",
    `- Intake form: ${packet.public_links.intake_form}`,
    `- Review dashboard: ${packet.public_links.review_dashboard}`,
    `- Markdown packet: ${packet.public_links.markdown_packet}`,
    `- JSON packet: ${packet.public_links.json_packet}`,
    "",
    "## App Summary",
    "",
    mdValue(packet.app_summary),
    "",
    "## Schema Summary",
    "",
    mdValue(packet.schema_summary),
    "",
    "## Simple Intake Mode",
    "",
    packet.simple_intake_sections.map(sectionMarkdown).join("\n\n"),
    "",
    "## Full Form Sections",
    "",
    packet.all_form_sections.map(sectionMarkdown).join("\n\n"),
    "",
    "## Controlled Vocabularies",
    "",
    mdValue(packet.controlled_vocabularies),
    "",
    "## Sample Profile JSON",
    "",
    "```json",
    JSON.stringify(packet.sample_profile, null, 2),
    "```"
  ];
  return lines.join("\n");
}

const packet = buildPacket();
const outDir = path.join(root, "exports");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "chatgpt-review-packet.json"), `${JSON.stringify(packet, null, 2)}\n`);
fs.writeFileSync(path.join(outDir, "chatgpt-review-packet.md"), `${buildMarkdown(packet)}\n`);
console.log(`Wrote exports/chatgpt-review-packet.md and exports/chatgpt-review-packet.json for ${packet.commit}`);
