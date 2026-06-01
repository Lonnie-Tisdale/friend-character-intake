# Friend Character Schema

Schema version: `friend_descriptor_intake.v2`

This schema stores project-agnostic character descriptor data. It is designed to describe a real person in a way that can later be reviewed, fictionalized, and imported into many different K Street projects.

## Top-Level Shape

Every v2 record is a JSON object with these top-level sections:

- `schema_version`
- `metadata`
- `consent`
- `identity`
- `character_core`
- `appearance`
- `voice_and_behavior`
- `personality`
- `narrative_design`
- `generated`
- `privacy`

The canonical schema file is `schema/friend_descriptor_schema.json`.

## Sections

### `metadata`

Stores tool and record bookkeeping.

- `created_at` - ISO timestamp for initial creation
- `updated_at` - ISO timestamp for latest export or edit
- `source` - intake source, usually `K Street Character Descriptor Intake Tool`
- `record_id` - optional stable local identifier
- `imported_from_schema_version` - set when importing older records

### `consent`

Captures use permissions before descriptors are reused.

- `permission_to_store`
- `permission_to_use_as_fictional_character`
- `permission_to_use_for_art_prompts`
- `permission_to_reuse_across_projects`
- `permission_to_contact_for_clarification`
- `permission_notes`

Do not treat a descriptor as approved for broad project use until consent and review status are checked.

### `identity`

Stores basic identity and presentation fields.

- `display_name`
- `optional_contact`
- `in_world_name_or_nickname`
- `pronouns`
- `current_location_or_usual_setting`
- `age_range`

Contact data is private and should not be committed to a public repo.

### `character_core`

Stores the most important reusable characterization data.

- `one_sentence_summary`
- `primary_social_energy`
- `secondary_social_energy`
- `core_motivations`

`core_motivations` is an array because motivations are easier to search, filter, and reuse when separated.

### `appearance`

Stores visual and art-prompt context.

- `visual_descriptors`
- `clothing_style_props`
- `default_expression`
- `movement_body_language`
- `source_image_notes`

This section should be descriptive without exposing private photos in public files.

### `voice_and_behavior`

Stores dialogue, simulation, and behavior cues.

- `voice_speech_rhythm`
- `signature_behaviors`
- `communication_style`
- `behavior_under_pressure`
- `how_they_help_friends_allies`
- `recurring_habits`

### `personality`

Stores strengths, limitations, and boundaries.

- `personality_traits`
- `custom_traits`
- `strengths`
- `flaws`
- `temptations`
- `boundaries`

Boundaries are private review data. They are included so future adaptations can avoid portrayals the person did not approve.

### `narrative_design`

Stores game, fiction, and system-facing adaptation hints.

- `character_tags`
- `suggested_class_role`
- `mechanics_hooks`
- `potential_party_roles`
- `comedic_exaggeration_level`
- `growth_arc`

Allowed `comedic_exaggeration_level` values are:

- `none`
- `grounded`
- `heightened`
- `cartoonish`
- `mythic`

### `generated`

Stores generated helper text.

- `character_summary`

This should be treated as derived text that can be regenerated from the structured fields.

### `privacy`

Stores review and publication flags.

- `contains_private_contact_info`
- `contains_boundaries`
- `public_repo_safe`
- `review_status`

Allowed `review_status` values are:

- `raw`
- `reviewed`
- `approved_for_use`

## Compatibility

The static form imports v2 records directly. It also maps reasonable v1-style flat records into the v2 structure, including common keys such as `display_name`, `name`, `nickname`, `pronouns`, `summary`, `visual_descriptors`, `traits`, `strengths`, `flaws`, `boundaries`, `tags`, and `mechanics_hooks`.

Unknown imported fields are preserved under `_legacy_unmapped` so reviewers can manually migrate anything that did not map cleanly.

