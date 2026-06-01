# K Street Person Profile Database

A static, project-agnostic profile database for collecting structured descriptors from real people so they can be adapted into consistent fictional and game characters across K Street projects.

The current schema is `kstreet.person_profile` version `2.0.0`.

## What This Is For

This tool prioritizes the parts of a person that make a character recognizable and reusable: motivation, behavior, decision-making, strengths, flaws, communication style, social energy, boundaries, habits, and visual cues.

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
- `schema/friend_descriptor_schema.json` - versioned JSON Schema
- `docs/friend-character-schema.md` - schema field guide
- `docs/person-profile-schema.md` - `2.0.0` person profile schema guide, migration notes, and export instructions
- `docs/workflow.md` - recommended K Street cloud-drive workflow
- `examples/example-descriptor-intake.json` - safe example record

## Privacy Rule

Public repositories and public form deployments should contain only the tool code, schema, docs, and approved examples. Real submitted descriptors, source images, contact info, and boundaries should remain private in the K Street cloud drive unless explicitly approved.

## Use

Open `index.html` in a browser. No server or backend is required.

Use the buttons at the top of the form to:

- Submit the descriptor to a configured intake endpoint
- Generate a summary from fields
- Generate AI context
- Copy JSON or Markdown
- Share a portable JSON snapshot
- Copy AI context for ChatGPT, Claude, Gemini, or similar systems
- Publish JSON and Markdown snapshots
- Copy a GitHub Pages share link
- Export ChatGPT-ready Markdown
- Download a full sharing package containing `character.json`, `character.md`, and `schema.json`
- Export the current record as JSON
- Import an older or current JSON record
- Reset the form

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

## Schema 2.0.0 Sections

The form is organized into collapsible sections:

- Identity
- Appearance
- Personality
- Motivation & Values
- Decision-Making
- Social & Relationship Model
- Knowledge Domains
- Humor & Communication
- Conflict & Stress Response
- Signature Behaviors
- Narrative Engine
- Game Mechanics
- AI Generation Metadata
- Export / Import

## Migration

The app imports `2.0.0` records directly and attempts to migrate older `friend_descriptor_intake.v2` and v1-style flat records. Missing new fields default safely. Unknown imported fields are preserved under `extensions`.

## Sharing With ChatGPT and Other AI Systems

Do not try to expose `localhost` or `127.0.0.1` externally. External AI systems cannot access your local browser server.

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
