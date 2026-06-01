# K Street Knowledge Graph v4 Foundation

The v4 foundation layer turns the v3 person profile into a graph-aware record without replacing the v3 profile. A current profile still exports as `schema_id: kstreet_person_profile.v3` and `schema_version: 3.0.0`; the graph layer appears in `entity` and `knowledge_graph`.

## Shared Entity Shape

Every graph record uses the same core fields:

- `entity_id` - stable human-editable ID such as `person_lonnie`, `org_kstreet`, or `project_oregon_fail`
- `entity_type` - one of `person`, `relationship`, `organization`, `location`, `event`, `asset`, `story_object`, `project`, `faction`, or `concept`
- `display_name` - readable name for browsers, exports, and AI summaries
- `created_at` and `updated_at` - timestamps or known dates
- `tags` - searchable tags
- `notes` - human review notes
- `relationships` - graph links using `target_entity_id`, `relationship_type`, `strength`, and `notes`

## Person Profiles

The active v3 profile becomes the root `person` node. Its v3 fields remain unchanged for compatibility, while `knowledge_graph.root_entity_id` points at the graph entity ID.

When importing older v3 or v2 records, the app creates a person entity from the display name/in-world name and leaves graph rows empty unless graph data already exists.

## First-Class Relationships

Relationship entities are separate from simple links. Use them when the relationship itself needs history or simulation detail:

- `relationship_id`
- `person_a`
- `person_b`
- `relationship_type`
- `trust_level`
- `conflict_level`
- `history_level`
- `influence_level`
- `communication_frequency`
- `relationship_health`
- `running_dynamic`
- `inside_jokes`
- `shared_history`
- `relationship_notes`
- `confidence_level`
- `canon_level`
- `consent_status`

Recommended relationship types:

- `friend`
- `family`
- `collaborator`
- `mentor`
- `rival`
- `ex`
- `project_member`
- `location_association`
- `event_participant`
- `organization_member`
- `inspiration_source`
- `fictionalized_as`

## Entity Rows

The Knowledge Graph section includes rows for linked entities, relationship entities, organizations, factions, locations, events, story objects, projects, concepts, and manual timeline entries. Asset entities are derived from the Asset Library so visual/audio/document references can participate in graph exports.

## Timeline

Timeline exports combine:

- manual `timeline_entries`
- event dates
- project markers
- relationship milestones

Use manual timeline rows for moves, milestones, project phases, or important relationship beats that are not represented by an event row.

## Browser Views

The static page includes:

- graph search
- entity type filtering
- node/entity browser
- relationship browser
- entity inspector
- timeline view
- simple SVG network view

No backend or database is required. The graph is built from the current form state and exported as JSON.

## Graph Exports

The export buttons and download package include:

- `graph.full.json`
- `graph.people.json`
- `graph.relationships.json`
- `graph.organizations.json`
- `graph.locations.json`
- `graph.events.json`
- `graph.assets.json`
- `graph.projects.json`

`graph.full.json` contains the v3 person profile plus the full `knowledge_graph` object. The smaller files are read-only slices for AI import, project import, and review workflows.

## AI Outputs

The generator buttons produce graph-aware Markdown for:

- Character Context
- Relationship Summary
- Organization Summary
- Project Summary
- Timeline Summary
- Lore Summary
- AI Agent Context

These outputs are optimized for ChatGPT, Claude, Gemini, and local agent systems that need stable entity IDs and relationship context.
