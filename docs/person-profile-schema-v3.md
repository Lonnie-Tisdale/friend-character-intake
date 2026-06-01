# K Street Person Profile v3

Canonical schema:

```text
schema_version: 3.0.0
schema_id: kstreet_person_profile.v3
```

This is the source-of-truth profile format for K Street projects, including Oregon Fail, West Coast Crypto Cruise, HTF Coder, Empirical Neoshamanism, Tao Of Parkour, AI dialogue systems, NPC generation, relationship simulations, art prompts, narrative systems, and agent memory systems.

## Philosophy

Appearance is intentionally a small part of the schema. The durable profile is mainly about values, thinking, decisions, conflict, relationships, knowledge, motivation, voice, and behavior.

## Top-Level Structure

- `schema_version`
- `schema_id`
- `profile_id`
- `created_at`
- `updated_at`
- `consent`
- `identity`
- `appearance`
- `personality`
- `motivation`
- `decision_making`
- `social_model`
- `relationship_graph`
- `knowledge_domains`
- `humor_and_voice`
- `conflict_and_stress`
- `signature_behaviors`
- `narrative_engine`
- `game_mechanics`
- `ai_generation`
- `project_usage`
- `source_notes`
- `generated_content`
- `extensions`

Unknown imported fields must be preserved under `extensions`.

## Repeatable Entries

Relationship graph rows become objects with:

- `related_person`
- `relationship_type`
- `trust_level`
- `conflict_level`
- `history_level`
- `influence_level`
- `emotional_tone`
- `running_dynamic`
- `notes`

Knowledge domains become objects with:

- `domain`
- `expertise_level`
- `confidence_level`
- `lived_experience`
- `public_authority`
- `notes`
- `dialogue_use`

Signature behaviors become objects with:

- `behavior`
- `context`
- `frequency`
- `comedic_exaggeration_potential`
- `game_use_notes`
- `dialogue_use_notes`

## Canon Levels

- `Raw`
- `Semi Canon`
- `Canon`
- `Parody Only`
- `Private Reference Only`

## Default Value List

Truth, Friendship, Freedom, Curiosity, Mastery, Security, Family, Status, Creativity, Justice, Service, Discovery, Legacy, Belonging, Stability, Beauty, Power, Peace, Autonomy, Loyalty.

