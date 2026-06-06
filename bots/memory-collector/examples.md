# Memory Collector Examples

This file gives one Discord-style memory transcript and the generated review-ready `change_request` JSON. The example is intentionally conservative: it treats the memory as community lore, keeps it reviewer-only, and produces a draft for review rather than a direct profile write.

## Example Discord Memory Transcript

```text
User:
/memory Tommy always ate ramen in Fullerton.

Memory Collector:
That is a good tiny-character-detail kind of memory. Before I draft it, was that:
- a real memory you personally saw
- an inside joke the group repeats
- a story element for a project
- something else?

User:
Inside joke, mostly HTF. People said it because he was always around Fullerton and ramen somehow became the bit.

Memory Collector:
Got it. I will draft it as HTF community lore / joke_meme, not as biography or fact. Should it stay reviewer-only for now?

User:
Yeah, reviewer-only.

Memory Collector:
Drafting it for review. Nothing is canon, factual, public, or applied until a reviewer approves it in the database workflow.
```

## Generated Example Change Request JSON

```json
{
  "change_id": "chg_memory_20260606_tommy_ramen_fullerton",
  "type": "add_story",
  "operation": "append",
  "target_path": "narrative_engine.story_provenance",
  "proposed_by": "discord:example_user",
  "status": "reviewer_pending",
  "submitted_at": "2026-06-06T17:15:00.000Z",
  "summary": "Add Tommy/Fullerton ramen bit as HTF community lore.",
  "visibility": "reviewer_only",
  "payload_notes": "Conversation-derived draft. User classified this as an inside joke, not biography or fact.",
  "payload": {
    "story_id_title": "story_tommy_ramen_fullerton",
    "summary": "Tommy is associated in HTF group lore with always eating ramen in Fullerton.",
    "who_told_it": "discord:example_user",
    "source_type": "community_lore",
    "confidence_canon": "Raw",
    "witnesses": [],
    "related_people": [
      "Tommy"
    ],
    "related_locations": [
      "Fullerton"
    ],
    "related_events": [],
    "notes": "Inside joke; do not treat as factual diet, location history, or biography without reviewer verification.",
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

## Review Notes

- The draft uses `status: "reviewer_pending"`, not `approved` or `applied`.
- The draft targets `narrative_engine.story_provenance`, which the review dashboard can apply through its existing change path whitelist.
- The draft uses `operation: "append"`, which is allowed for that path.
- The structured payload includes `story_id_title`, the stable identifier required by the review dashboard for story provenance payloads.
- The change and payload both preserve `context_id`, `information_type`, `reality_status`, and `perspective`.
- The classification is conservative: `joke_meme` + `lore` + `community`, with `visibility: "reviewer_only"`.
- The bot does not write canonical profile fields. A reviewer must import the draft and approve/apply it in the database workflow.

