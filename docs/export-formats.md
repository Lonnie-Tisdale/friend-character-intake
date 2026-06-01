# Export Formats

The static app can export the v3 profile in several forms:

- `profile.full.json` - complete source-of-truth JSON
- `profile.compact.json` - empty fields removed for compact transfer
- `profile.ai-context.md` - LLM-ready context for ChatGPT, Claude, Gemini, and agent memory systems
- `profile.art-prompt.md` - image-generation prompt notes
- `profile.dialogue-prompt.md` - dialogue-generation prompt notes
- `profile.game-design.md` - mechanics and game-facing summary
- `profile.relationships.json` - relationship graph entries only
- `profile.assets.json` - asset records only
- `profile.asset-manifest.json` - portable asset manifest and primary asset IDs
- `profile.visual-reference.md` - artist/image-generator reference sheet
- `profile.art-reference.md` - art prompt and style-guide reference
- `profile.sprite-reference.md` - sprite/pixel/token reference
- `graph.full.json` - full v4 foundation graph export with the v3 person profile embedded as `person_profile`
- `graph.people.json` - person nodes from the graph
- `graph.relationships.json` - first-class relationship entities
- `graph.organizations.json` - organization entities
- `graph.locations.json` - location entities
- `graph.events.json` - event entities
- `graph.assets.json` - asset entities derived from the Asset Library
- `graph.projects.json` - project entities

`Download All` creates a zip containing all export formats plus the current schema.

For submissions, the Formspree payload includes full JSON, compact JSON, graph full JSON, Markdown profile, AI context, game design summary, art prompt, and dialogue prompt.

Graph exports are read-only snapshots by convention. Edit the source form or canonical JSON, then export a new graph snapshot.
