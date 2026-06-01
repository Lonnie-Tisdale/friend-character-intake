# Legacy Character Intake Schema

The old friend-facing intake schema and the intermediate 2.0 person profile schema have been superseded by the shared HTF / K Street profile schema:

```text
kstreet_person_profile.v3 3.0.0
```

Use `docs/person-profile-schema-v3.md` as the canonical schema documentation.

## Compatibility

The static app still imports older `friend_descriptor_intake.v2` and v1-style flat records where possible. Legacy fields are migrated into the new profile sections:

- identity
- appearance
- personality
- motivation and values
- social model
- communication
- narrative engine
- game mechanics
- AI generation metadata

Missing new fields default safely. Unknown legacy fields are preserved under `extensions` so imports do not destroy data.
