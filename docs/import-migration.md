# Import And Migration

The app imports:

- `kstreet_person_profile.v3`
- `kstreet.person_profile` / `2.0.0`
- `friend_descriptor_intake.v2`
- older flat v1-style records where fields can be recognized
- `graph.full.json` snapshots that contain a `person_profile`

## Migration Rules

- Never destroy unknown fields.
- Preserve unknown fields under `extensions`.
- Preserve existing imported `extensions` content and merge newly discovered unknown top-level fields into it.
- Missing v3 fields default to empty strings, empty arrays, first select option, or unchecked booleans.
- Consent fields are mapped forward when possible.
- Older `character_core`, `voice_and_behavior`, `narrative_design`, and `generated` fields are migrated into v3 sections.
- v3 person records without graph data automatically become `entity_type: person`.
- Existing `entity` and `knowledge_graph` data is rehydrated into the Knowledge Graph form rows when possible.
- Full graph snapshots restore the embedded `person_profile` first, then rebuild graph rows from `knowledge_graph`.

## Knowledge Graph Compatibility

The v4 foundation graph layer is additive. It does not change the v3 profile identity:

```json
{
  "schema_id": "kstreet_person_profile.v3",
  "schema_version": "3.0.0",
  "entity": {
    "entity_type": "person"
  },
  "knowledge_graph": {
    "graph_schema_version": "4.0.0-foundation"
  }
}
```

Unknown graph fields are preserved through the existing `extensions` behavior unless they are part of the known `entity` or `knowledge_graph` structures.

## Validation

The app provides a lightweight static validation pass. It checks required practical fields such as display name and core consent flags. The canonical machine-readable schema lives at:

```text
schema/friend_descriptor_schema.json
```

Because the app is static and GitHub Pages compatible, validation is intentionally client-side and does not require a backend.
