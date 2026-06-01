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

`Download All` creates a zip containing all export formats plus the current schema.

For submissions, the Formspree payload includes full JSON, compact JSON, Markdown profile, AI context, game design summary, art prompt, and dialogue prompt.
