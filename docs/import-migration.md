# Import And Migration

The app imports:

- `kstreet_person_profile.v3`
- `kstreet.person_profile` / `2.0.0`
- `friend_descriptor_intake.v2`
- older flat v1-style records where fields can be recognized

## Migration Rules

- Never destroy unknown fields.
- Preserve unknown fields under `extensions`.
- Preserve existing imported `extensions` content and merge newly discovered unknown top-level fields into it.
- Missing v3 fields default to empty strings, empty arrays, first select option, or unchecked booleans.
- Consent fields are mapped forward when possible.
- Older `character_core`, `voice_and_behavior`, `narrative_design`, and `generated` fields are migrated into v3 sections.

## Validation

The app provides a lightweight static validation pass. It checks required practical fields such as display name and core consent flags. The canonical machine-readable schema lives at:

```text
schema/friend_descriptor_schema.json
```

Because the app is static and GitHub Pages compatible, validation is intentionally client-side and does not require a backend.
