# Legacy Friend Character Schema

The old Friend Character Intake schema has been superseded by:

```text
kstreet.person_profile 2.0.0
```

Use `docs/person-profile-schema.md` as the canonical schema documentation.

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
