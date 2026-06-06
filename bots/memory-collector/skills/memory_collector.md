# Skill: Memory Collector

Use this skill when a Discord user shares a memory, story, moment, behavior, trait, quote, group bit, or project anecdote and expects the bot to turn it into reviewable Living Identity Graph material.

## Goal

Convert conversational input into one or more draft change requests while preserving uncertainty, provenance, visibility, and review state.

## Intake Loop

1. Acknowledge the useful piece of memory.
2. Identify likely entities:
   - people
   - relationships
   - locations
   - events
   - projects
   - story objects
   - concepts
3. Ask only the next useful clarifying question.
4. Classify conservatively.
5. Produce draft change requests, not profile writes.

## Clarifying Questions

Ask classification questions when a statement is ambiguous:

```text
Was that:
- a real memory
- an inside joke
- a story element
- something else?
```

Ask source/provenance questions:

```text
Did you personally see this, hear it from someone else, or is it something the group repeats?
```

Ask scope questions:

```text
Which context should this live under: HTF, Oregon Fail/WCCC, K-St Engineering, another project, or not sure?
```

Ask privacy questions:

```text
Should this stay private/reviewer-only for now, or is a public-safe project summary okay?
```

## Default Classification Table

| User signal | information_type | reality_status | perspective | visibility |
| --- | --- | --- | --- | --- |
| "I remember..." | `experience` | `subjective` | `self_report` | `reviewer_only` |
| "Everyone says..." | `lore` | `community_perception` | `community` | `reviewer_only` |
| "It became a bit..." | `joke_meme` | `lore` | `community` | `reviewer_only` |
| "In the game/story..." | `character` | `fictional` | `project_author` | `project_only` |
| "I think maybe..." | `observation` | `speculative` | `third_party` | `private` |
| "Actually, that's wrong..." | `correction` | `unknown` | `self_report` or `third_party` | `reviewer_only` |

Do not use `biography`, `psychology`, `factual`, `Canon`, or `exportable` as defaults.

## Target Paths

Prefer review-dashboard-applicable target paths:

- `narrative_engine.story_provenance` for stories, memories, recurring jokes, lore summaries
- `knowledge_graph.events` for event-like memories
- `knowledge_graph.timeline` for dated or ordered milestones
- `knowledge_graph.links` for simple entity associations
- `knowledge_graph.relationship_entities` for relationship histories or dynamics
- `relationship_graph` for person-centric relationship summaries
- `asset_library.assets` for reference images/audio/documents
- `knowledge_graph.projects` for project participation
- `project_usage.project_specific_notes` for project-specific relevance
- `source_notes.unresolved_questions` for items that need reviewer follow-up

## Draft Story Payload

Use this shape for `target_path: "narrative_engine.story_provenance"`:

```json
{
  "story_id_title": "story_short_slug",
  "summary": "Public-safe summary of the memory or lore.",
  "who_told_it": "discord:display_name_or_user_id",
  "source_type": "self_report | community_lore | second_hand | project_author | unknown",
  "confidence_canon": "Raw",
  "witnesses": [],
  "related_people": [],
  "related_locations": [],
  "related_events": [],
  "notes": "Reviewer-facing notes and unresolved uncertainty.",
  "context_id": "other",
  "information_type": "lore",
  "reality_status": "unknown",
  "perspective": "unknown"
}
```

## Example

User:

```text
Tommy always ate ramen in Fullerton.
```

Bot:

```text
That is a good tiny-character-detail kind of memory. Was that a real memory you personally saw, an inside joke the group repeats, a story element for a project, or something else?
```

If the user says "inside joke, mostly HTF":

```json
{
  "change_id": "chg_memory_20260606_tommy_ramen_fullerton",
  "type": "add_story",
  "operation": "append",
  "target_path": "narrative_engine.story_provenance",
  "proposed_by": "discord:user",
  "status": "reviewer_pending",
  "submitted_at": "2026-06-06T00:00:00.000Z",
  "summary": "Add Tommy/Fullerton ramen bit as HTF community lore.",
  "visibility": "reviewer_only",
  "payload_notes": "Classified from user clarification as an inside joke, not biography.",
  "payload": {
    "story_id_title": "story_tommy_ramen_fullerton",
    "summary": "Tommy is associated in group lore with always eating ramen in Fullerton.",
    "who_told_it": "discord:user",
    "source_type": "community_lore",
    "confidence_canon": "Raw",
    "witnesses": [],
    "related_people": ["Tommy"],
    "related_locations": ["Fullerton"],
    "notes": "Inside joke; do not treat as factual diet/biography without reviewer verification.",
    "context_id": "htf",
    "information_type": "joke_meme",
    "reality_status": "lore",
    "perspective": "community"
  },
  "context_id": "htf",
  "information_type": "joke_meme",
  "reality_status": "lore",
  "perspective": "community"
}
```

## Completion Criteria

A memory capture is complete when:

- the draft has a target path
- the payload is JSON-compatible
- all four epistemic fields are present on the change and payload
- visibility is conservative
- unresolved questions are explicit
- the user understands it is a draft for review

