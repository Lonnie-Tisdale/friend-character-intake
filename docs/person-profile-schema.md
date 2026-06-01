# K Street Person Profile Schema

Current schema: `kstreet.person_profile` version `2.0.0`

This schema turns the Friend Character Intake app into a durable database format for person-inspired fictional and game characters. It is meant to travel across K Street projects without being tied to one game.

## Design Principle

The profile separates:

- appearance
- personality
- behavior
- motivation
- relationships
- narrative function
- game mechanics
- AI prompting metadata

Do not collapse these into one vague notes field. Separate fields make profiles searchable, reusable, easier to migrate, and safer for AI generation.

## Top-Level Sections

- `schema_version` - currently `2.0.0`
- `schema_name` - currently `kstreet.person_profile`
- `metadata` - timestamps, source, record ID, migration source
- `consent` - storage, fictionalization, art prompt, reuse, and contact permissions
- `identity` - display name, nickname, pronouns, age range, setting, contact
- `appearance` - visual descriptors, clothes, expression, body language, image notes, art prompt summary
- `personality` - traits, strengths, flaws, habits, temptations
- `motivation_values` - ranked values, custom values, core motivation, optimization target, compromises, temptations, becoming
- `decision_making` - decision style, pressure behavior, blind spot, failure, recovery, risk tolerance, planning horizon
- `social_relationship_model` - group role, friendship style, trust factors, disagreement, relationship graph placeholders
- `knowledge_domains` - repeatable expertise entries
- `humor_communication` - humor, mode, phrases, vocabulary, topics, quotes, dialogue prompt
- `conflict_stress_response` - challenge response, stress signals, triggers, repair, boundaries
- `signature_behaviors` - repeatable behavior/context/comedy/mechanics entries
- `narrative_engine` - quest, fear, conflict, arc, shadow, best self, jokes, motifs, themes
- `game_mechanics` - roles, abilities, weaknesses, status effects, triggers, traversal, support, comedy mechanics
- `ai_generation_metadata` - canonical descriptions, behavioral prompt, misrepresentation guardrails, tags, project flags
- `exports` - supported export formats
- `privacy` - private data flags and review status
- `extensions` - unknown imported fields preserved during migration

## Repeatable Entry Formats In The UI

The static form uses pipe-separated rows for repeatable structured data.

Knowledge domains:

```text
domain name | expertise level | confidence | notes
Parkour | expert | high confidence | founder-level historical knowledge
```

Signature behaviors:

```text
behavior | context | comedic exaggeration potential | game-use notes
Opens twenty browser tabs | when fact-checking | high | can trigger Research Spiral mechanic
```

Relationship graph preparation:

```text
related person | relationship type | trust 1-10 | conflict 1-10 | history 1-10 | influence 1-10 | notes
Alex | mentor | 8 | 2 | 7 | 6 | old collaborator
```

## Migration Notes

The app imports current `2.0.0` records directly.

It also migrates older `friend_descriptor_intake.v2` and flat v1-style records where possible. Known legacy fields are mapped into the new sections. Missing new fields default to safe empty strings, empty arrays, first select options, or unchecked booleans.

Unknown imported fields are never destroyed. They are preserved under:

```json
{
  "extensions": {
    "legacy_field_name": "legacy value"
  }
}
```

## Export Formats

The app can export:

- full JSON
- compact JSON
- Markdown profile
- AI context Markdown
- game design summary
- art prompt
- dialogue prompt
- a zip package containing all formats and the schema

## Example Profile

```json
{
  "schema_version": "2.0.0",
  "schema_name": "kstreet.person_profile",
  "identity": {
    "display_name": "Example Person",
    "in_world_name_or_nickname": "The Compass",
    "pronouns": "they/them"
  },
  "motivation_values": {
    "ranked_core_values": ["Friendship", "Truth", "Curiosity"],
    "core_motivation": "Make confusing situations survivable for the people they love."
  },
  "game_mechanics": {
    "suggested_class_role": "Planner / Support Lead",
    "party_roles": ["support", "tactician"]
  },
  "extensions": {}
}
```

## Intended Use

Use this schema as the canonical source profile. Project-specific imports should copy or transform approved profiles into project folders rather than editing the raw source submission.

Recommended project flags include:

- Oregon Fail
- West Coast Crypto Cruise
- HTF Coder
- Empirical Neoshamanism
- Tao of Parkour
- Generic NPC system
