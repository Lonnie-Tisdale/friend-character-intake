# HTF / K Street Person Profile v3

Canonical schema:

```text
schema_version: 3.0.0
schema_id: kstreet_person_profile.v3
```

This is the shared source-of-truth profile format for HTF, K Street, and future group projects, including AI dialogue systems, NPC generation, relationship simulations, art prompts, narrative systems, game design, and agent memory systems.

## Philosophy

Appearance is intentionally a small part of the schema. The durable profile is mainly about values, thinking, decisions, conflict, relationships, knowledge, motivation, voice, and behavior.

Prompt labels, placeholders, and sample values should sound native to the actual circle: hacker houses, startup chaos, burner and road-trip stories, Discord communities, parkour communities, crypto conferences, AI projects, internet weirdos, and long-running friend lore. Avoid corporate bios, HR phrasing, generic personality-test language, and fantasy-only examples.

## Top-Level Structure

- `schema_version`
- `schema_id`
- `profile_id`
- `created_at`
- `updated_at`
- `entity`
- `consent`
- `identity`
- `appearance`
- `asset_library`
- `knowledge_graph`
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

`entity` and `knowledge_graph` are the additive v4 foundation layer. They make the v3 person profile usable inside the shared HTF / K Street Knowledge Graph while preserving v3 compatibility. See `docs/knowledge-graph-v4-foundation.md`.

UX-facing additions that remain JSON-portable:

- `identity.short_bio` - friendly intake bio for nontechnical submitters
- `identity.three_word_vibe` - quick recognizable vibe phrase
- `identity.animal_affinity` - optional mascot/totem/group-bit field
- `identity.current_obsession` - current topic eating the person's browser tabs
- `appearance.signature_item` - one prop that makes the person instantly recognizable
- `personality.character_archetype` - group-chat archetype such as Roadtrip Bard or Terminal Wizard
- `personality.signature_ability` - the thing friends always joke they can do
- `humor_and_voice.battle_intro_quote` and `humor_and_voice.battle_victory_quote` - heightened game lines that still sound like the real person
- `narrative_engine.legendary_story` and `narrative_engine.most_chaotic_moment` - public-safe lore people retell
- `social_model.relationship_to_group_network` - plain-language group/project/community relationship context
- `project_usage.project_relevance_notes` - why the profile matters to projects
- `asset_library.assets[].linked_entity_id`
- `asset_library.assets[].linked_project`
- `knowledge_graph.relationship_entities[].confidence_level`
- `knowledge_graph.relationship_entities[].canon_level`
- `knowledge_graph.relationship_entities[].consent_status`

See `docs/asset-library-schema.md` for the asset library object, asset types, canon levels, consent status values, groups, and style guides.

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
