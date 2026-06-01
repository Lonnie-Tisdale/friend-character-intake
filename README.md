# HTF / K Street Character Database

A static, project-agnostic, group-centric profile database for collecting structured descriptors from real people so they can be adapted into consistent fictional and game characters across HTF, K Street, and future shared projects.

The current person profile schema is `kstreet_person_profile.v3` version `3.0.0`. The app also includes the additive `kstreet_knowledge_graph.v4_foundation` layer for graph-aware people, relationships, organizations, locations, events, assets, projects, factions, story objects, and concepts.

## What This Is For

This tool prioritizes the parts of a person that make a character recognizable and reusable: motivation, behavior, decision-making, strengths, flaws, communication style, social energy, boundaries, habits, and visual cues.

The public prompts and sample values are intentionally written in the voice of the circle: hacker houses, startup chaos, burner/road-trip stories, Discord communities, parkour history, crypto conferences, AI projects, internet weirdness, and long-running friend lore. Avoid turning the form into HR, corporate bio, personality-test, or fantasy-only language when adding new fields.

It can support:

- Character bibles
- Dialogue generation
- NPC simulation
- Character art prompts
- Game design
- Narrative systems
- Future project imports

## Files

- `index.html` - static profile form, live JSON preview, import/export, sharing, compatibility checks, generated summaries, and Formspree submission
- `review.html` - private/local-first review dashboard for Raw -> Reviewed -> Approved descriptor workflow
- `schema/friend_descriptor_schema.json` - versioned JSON Schema
- `docs/friend-character-schema.md` - schema field guide
- `docs/person-profile-schema-v3.md` - canonical v3 person profile schema guide
- `docs/export-formats.md` - export file descriptions
- `docs/import-migration.md` - import, validation, and migration notes
- `docs/asset-library-schema.md` - asset library object and asset metadata schema
- `docs/asset-management-guide.md` - static asset management workflow
- `docs/visual-reference-workflow.md` - artist/image/sprite reference workflow
- `docs/knowledge-graph-v4-foundation.md` - v4 entity framework, graph links, timeline, and graph exports
- `docs/workflow.md` - recommended HTF / K Street cloud-drive workflow
- `examples/example-descriptor-intake.json` - safe example record

## Privacy Rule

Public repositories and public form deployments should contain only the tool code, schema, docs, and approved examples. Real submitted descriptors, source images, contact info, and boundaries should remain private in the HTF / K Street cloud drive unless explicitly approved.

## Use

Open `index.html` in a browser. No server or backend is required.

Use the buttons at the top of the form to:

- Submit the descriptor to a configured intake endpoint
- Switch between Simple Intake, Advanced Canon, and Agent Export modes
- Save a draft locally in the current browser and load it later
- Generate a character summary, AI context, art prompt, dialogue prompt, NPC summary, and relationship summary
- Manage a canonical asset library with gallery/table views, uploads-to-metadata, filters, bulk tagging/editing/delete, preview, and visual reference generation
- Build a static Knowledge Graph with entity rows, relationship entities, graph links, a node browser, relationship browser, entity inspector, search/filter controls, timeline view, and SVG network view
- Generate graph-aware Character Context, Relationship Summary, Organization Summary, Project Summary, Timeline Summary, Lore Summary, and AI Agent Context
- Copy one bundled agent-ready context package for AI/game/dev workflows
- Generate AI context
- Copy JSON or Markdown
- Share a portable JSON snapshot
- Copy AI context for ChatGPT, Claude, Gemini, or similar systems
- Publish JSON and Markdown snapshots
- Copy a GitHub Pages share link
- Export ChatGPT-ready Markdown
- Download a full sharing package containing `character.json`, `character.md`, and `schema.json`
- Export graph snapshots as `graph.full.json`, `graph.people.json`, `graph.relationships.json`, `graph.organizations.json`, `graph.locations.json`, `graph.events.json`, `graph.assets.json`, and `graph.projects.json`
- Export the current record as JSON
- Import an older or current JSON record
- Reset the form

Reviewer workflow:

1. Open `review.html`.
2. Import downloaded Formspree/profile JSON files.
3. Select each submission and set status to `raw`, `reviewed`, or `approved`.
4. Add reviewer notes, confidence level, canon level, and consent status.
5. Download review JSON/Markdown or an approved package.
6. Store exported packages in the private HTF / K Street cloud drive, not the public repo.

The JSON preview updates live as fields change. The app warns before closing when there are unsaved changes.

## Easiest Public Submission Setup

For a public link that anyone can open and submit from a browser, use:

```text
GitHub Pages + Formspree
```

GitHub Pages hosts the static form. Formspree receives submissions and emails/stores them for review. This avoids exposing `localhost` and avoids building a custom backend.

Recommended setup:

1. Create a Formspree form at `https://formspree.io/`.
2. Copy the endpoint URL. It will look like:

```text
https://formspree.io/f/your-form-id
```

3. Open `index.html`.
4. Find this line near the top of the script:

```js
const SUBMISSION_ENDPOINT = "";
```

5. Paste the endpoint:

```js
const SUBMISSION_ENDPOINT = "https://formspree.io/f/your-form-id";
```

6. Publish the repo with GitHub Pages.
7. Share the GitHub Pages URL with contributors.

This copy is configured to submit to:

```text
https://formspree.io/f/xredwazb
```

Users can fill out the form and click `Submit Descriptor`. If the submission endpoint is missing or fails, the tool downloads a backup package instead.

The submission payload includes:

- `schema_version`
- `submitted_at`
- display name and in-world name
- optional contact
- full JSON
- compact JSON
- ChatGPT-ready Markdown profile
- AI context Markdown
- game design summary
- art prompt
- dialogue prompt

## Schema 3.0.0 Sections

The interface has three modes:

- `Simple Intake` - default member-facing mode with only essential identity, bio, vibe, visual, voice, relationship, consent, project, and source-image fields.
- `Advanced Canon` - full v3 person schema plus asset library and Knowledge Graph editing.
- `Agent Export` - grouped JSON, Markdown, AI, game, art, asset, and graph export tools.

The form is organized into collapsible sections:

- Identity
- Appearance
- Asset Library
- Knowledge Graph
- Personality
- Motivation
- Decision-Making
- Social Model
- Relationship Graph
- Knowledge Domains
- Humor And Voice
- Conflict And Stress
- Signature Behaviors
- Narrative Engine
- Game Mechanics
- AI Generation
- Project Usage
- Source Notes
- Generated Content
- Export / Import

## Knowledge Graph v4 Foundation

Every profile now exports a top-level `entity` object and a `knowledge_graph` object. The v3 person profile remains intact; the graph layer wraps that profile as an entity with shared fields:

- `entity_id`
- `entity_type`
- `display_name`
- `created_at`
- `updated_at`
- `tags`
- `notes`
- `relationships`

Supported entity types are `person`, `relationship`, `organization`, `location`, `event`, `asset`, `story_object`, `project`, `faction`, and `concept`.

Existing v3 exports automatically become `entity_type: "person"` on import. Unknown fields are still preserved under `extensions`.

Recent UX/schema additions include `identity.short_bio`, `social_model.relationship_to_group_network` for group/project/community relationship context, `project_usage.project_relevance_notes`, per-asset `linked_entity_id` / `linked_project`, and relationship metadata for confidence, canon, and consent.

## Migration

The app imports `3.0.0` records directly and attempts to migrate `2.0.0`, `friend_descriptor_intake.v2`, and v1-style flat records. Missing graph fields default safely. Full graph exports containing `person_profile` can also be imported; the person profile is restored and graph rows are rehydrated where possible. Unknown imported fields are preserved under `extensions`.

## Sharing With ChatGPT and Other AI Systems

Do not try to expose `localhost` or `127.0.0.1` externally. External AI systems cannot access your local browser server.

Some AI chats also cannot browse or inspect a GitHub Pages URL, even when the URL is public. For those cases, use the generated review packet:

- `exports/chatgpt-review-packet.md` - upload this file to ChatGPT/Claude/Gemini or paste sections directly into the chat
- `exports/chatgpt-review-packet.json` - machine-readable packet containing the form model, schema summary, controlled vocabularies, and sample profile

Regenerate the packet after form/schema changes:

```bash
node tools/build-chatgpt-review-packet.js
```

Instead, use portable snapshots:

- `Share Character` copies a self-contained JSON snapshot to the clipboard.
- `Copy AI Context` copies Markdown optimized for pasting directly into ChatGPT, Claude, Gemini, or another LLM.
- `Export for ChatGPT` downloads a Markdown file headed `# Character Profile` with all descriptor data.
- `Download Everything` downloads a zip with `character.json`, `character.md`, and `schema.json`.

Snapshots are read-only by convention: each snapshot includes `snapshot_kind`, `snapshot_created_at`, and `read_only_snapshot: true`. Treat generated snapshots as frozen exports. Make edits in the form or source descriptor, then publish a new snapshot.

## Publish Snapshot

`Publish Snapshot` creates:

- `character-{timestamp}.json`
- `character-{timestamp}.md`

The preferred location is:

```text
exports/
```

For GitHub Pages, enable the GitHub Pages compatible option and publish to:

```text
docs/exports/
```

or:

```text
public/exports/
```

Because this is a static browser tool with no backend, it cannot silently write files to your repo. In browsers that support the File System Access API, the tool will ask you to choose the project folder and then write the snapshot files into the selected export folder. In other browsers, it downloads the snapshot files; place them in the matching folder manually before committing.

## GitHub Pages Links

Enter your GitHub Pages base URL in the sharing section, for example:

```text
https://owner.github.io/friend-character-intake
```

Then use `Publish Snapshot` or `Copy Share Link` to generate a URL like:

```text
https://owner.github.io/friend-character-intake/exports/character-20260601T120000Z.json
```

After committing and pushing the exported file to the GitHub Pages folder, that URL can be pasted directly into ChatGPT or another AI system for analysis.
