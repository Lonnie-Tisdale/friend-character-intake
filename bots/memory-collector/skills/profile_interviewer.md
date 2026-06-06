# Skill: Profile Interviewer

Use this skill when a user starts `/profile` or wants to build a draft profile through conversation instead of filling out the static form.

## Goal

Interview users naturally and produce draft profile initialization data or granular change requests compatible with `kstreet_person_profile.v3` and the Living Identity Graph.

The output is not an approved profile. It is a review packet or a set of draft change requests.

## Interview Style

Ask one focused question at a time. Follow the user's energy. If they tell a story, capture the story first and come back to missing profile basics later.

Prefer prompts like:

- "What do people in the group usually call you?"
- "What is a detail friends would recognize instantly?"
- "What is one story people repeat about you?"
- "What is a project or context this profile should care about?"
- "Are there any uses you do not want this material used for?"

Avoid turning the conversation into a long checklist.

## First-Pass Sections

Collect only what is needed for a useful draft:

- display name or alias
- profile classification
- entity subtype
- context
- short bio or recognizable vibe
- current obsession or project relevance
- story/lore examples
- voice/humor notes
- relationship-to-group context
- consent and restrictions
- unresolved questions

## Safe Defaults

For a real person or likely real person:

```json
{
  "identity.profile_classification": "Real Person",
  "identity.entity_subtype": "real_person",
  "consent.relationship_visibility": "reviewer_only",
  "project_usage.canon_truth_status": "unknown",
  "visibility": "reviewer_only"
}
```

For project/story material:

```json
{
  "identity.profile_classification": "Fictionalized Person",
  "project_usage.canon_truth_status": "unknown",
  "visibility": "project_only"
}
```

Do not assume consent. Ask directly before drafting permissions:

```text
What is okay to store for review, and what should stay out entirely?
```

## Commands

### `/profile start`

Start a new interview thread. Establish whether the subject is:

- self
- another real person
- fictionalized version of a real person
- NPC/fictional character
- organization
- location
- event
- concept
- AI agent

If the subject is another real person, stay conservative and mark the draft as needing owner review.

### `/profile add`

Add a new detail to the current interview. Route through `memory_collector` when the detail is a story, memory, trait, or lore item.

### `/profile summarize`

Return:

- what has been captured
- what is still uncertain
- proposed change requests
- consent/review warnings

### `/profile draft`

Emit review-ready JSON-compatible draft data. If a current canonical profile exists, emit `governance.change_requests`. If no profile exists, emit a draft intake packet with `governance.change_requests` for living-record items.

## Draft Initialization Packet

Use this high-level shape when no canonical profile exists yet:

```json
{
  "packet_type": "memory_collector.profile_draft.v1",
  "source": "discord",
  "subject": {
    "display_name": "",
    "profile_classification": "",
    "entity_subtype": "",
    "context_id": "other"
  },
  "consent_review": {
    "permission_to_store": "unknown",
    "restricted_uses": [],
    "review_notes": "Needs human review before canonical profile creation."
  },
  "draft_identity_fields": {},
  "governance": {
    "claim_requests": [],
    "change_requests": [],
    "relationship_approvals": []
  },
  "source_notes": {
    "unresolved_questions": []
  }
}
```

## Profile Change Requests

For existing profiles, propose stable identity changes only as `field_update` or `correction` with `status: "needs_owner_review"` or `status: "reviewer_pending"`.

Examples of stable identity paths:

- `identity.display_name`
- `identity.profile_classification`
- `identity.entity_subtype`
- `entity.entity_id`
- `governance.profile_owner`

Examples of living-record paths:

- `narrative_engine.story_provenance`
- `knowledge_graph.events`
- `knowledge_graph.relationship_entities`
- `relationship_graph`
- `project_usage.project_specific_notes`
- `source_notes.unresolved_questions`

Prefer living-record additions over stable identity replacements.

## Interview Closure

Close each interview with a review reminder:

```text
I drafted this for review. Nothing is canon, factual, public, or applied until a reviewer approves it in the database workflow.
```

