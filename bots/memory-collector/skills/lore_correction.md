# Skill: Lore Correction

Use this skill when a user invokes `/correct`, disputes an existing story, wants a reclassification, or says a profile/lore entry is wrong, too factual, too public, missing context, or unsafe.

## Goal

Draft a correction change request. Do not delete or rewrite canonical data directly.

Corrections should preserve the old claim, the proposed replacement or removal, the reason, and whether the correction changes `information_type` or `reality_status`.

## Correction Types

- factual correction
- privacy/visibility correction
- context correction
- relationship correction
- attribution/source correction
- reclassification from fact to lore/joke/fiction/parody/unknown
- reclassification request from lore to factual, requiring stricter review
- removal/archive request

## Default Behavior

If the correction reduces certainty or visibility, draft it as safe and reviewer-pending:

- `reality_status`: `unknown`, `subjective`, `community_perception`, `lore`, `fictional`, or `parody`
- `information_type`: `correction`, `lore`, `joke_meme`, `observation`, or `other`
- `visibility`: `private` or `reviewer_only`
- `status`: `reviewer_pending`

If the correction promotes certainty, draft it as requiring review:

- fact promotion requires explicit reviewer reason
- canon promotion requires reviewer action
- the proposer should not be the sole approver
- include `reclassification_review_required: true`

## Clarifying Questions

Ask:

```text
What should change: the content, the classification, the visibility, the source/attribution, or whether it exists at all?
```

If the user says something was false:

```text
Do you want this marked as unknown/lore, replaced with a corrected summary, or removed from project exports while reviewers investigate?
```

If the correction involves another real person:

```text
Does this involve a relationship or private detail about another real person? If yes, I will keep the draft reviewer-only and mark approval unresolved.
```

## Draft Correction Shape

```json
{
  "change_id": "chg_correct_YYYYMMDD_shortslug",
  "type": "correction",
  "operation": "replace",
  "target_path": "source_notes.unresolved_questions",
  "proposed_by": "discord:user",
  "status": "reviewer_pending",
  "submitted_at": "ISO-8601 timestamp",
  "summary": "Correction request summary.",
  "visibility": "reviewer_only",
  "payload_notes": "Correction drafted from Discord conversation.",
  "payload": "Reviewer should verify: ...",
  "context_id": "other",
  "information_type": "correction",
  "reality_status": "unknown",
  "perspective": "self_report"
}
```

Use `operation: "append"` with `target_path: "source_notes.unresolved_questions"` when the correction needs reviewer investigation.

Use `operation: "remove"` only when the user clearly identifies a removable payload and the reviewer can match it by stable identifier. Removal drafts must still go through review.

## Reclassification Fields

When changing category, include:

```json
{
  "previous_reality_status": "factual",
  "reality_status": "lore",
  "previous_information_type": "biography",
  "information_type": "joke_meme",
  "reclassification_review_required": true
}
```

The bot may draft this. Only reviewers approve it.

## Example

User:

```text
The ramen thing should not be treated as real. It was just a bit.
```

Bot draft:

```json
{
  "change_id": "chg_correct_20260606_ramen_bit",
  "type": "correction",
  "operation": "append",
  "target_path": "source_notes.unresolved_questions",
  "proposed_by": "discord:user",
  "status": "reviewer_pending",
  "submitted_at": "2026-06-06T00:00:00.000Z",
  "summary": "Review whether the ramen detail should be reclassified as an inside joke rather than biography.",
  "visibility": "reviewer_only",
  "payload_notes": "User says the existing framing is too factual.",
  "payload": "Reclassify ramen/Fullerton detail as joke_meme/lore if reviewer confirms.",
  "context_id": "htf",
  "information_type": "correction",
  "reality_status": "unknown",
  "perspective": "third_party",
  "previous_reality_status": "factual",
  "previous_information_type": "biography",
  "reclassification_review_required": true
}
```

## Completion Criteria

A correction is complete when:

- the disputed item is identified well enough for a reviewer
- the requested change is clear
- classification metadata is present
- promotions are flagged for stricter review
- relationship/privacy issues remain restricted

