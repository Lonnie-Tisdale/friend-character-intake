# Profile Ownership And Long-Term Evolution

This document defines the additive living-record layer for the Universal Profile Intake + Review System. It keeps the project static, local-first, GitHub Pages compatible, and JSON portable while allowing profiles to grow over time.

## Architecture Recommendation

Keep the current profile JSON as the canonical portable record. Add ownership, claims, change requests, relationship approvals, version history, and audit events under `governance`, plus a compact `profile_evolution` index that tells tools which paths are stable identity and which paths are living history.

Do not introduce a database yet. The workflow remains:

1. A profile is exported as JSON.
2. A contributor imports the current JSON into `index.html`.
3. They add a claim request or change request instead of replacing the entire profile.
4. A reviewer imports the JSON into `review.html`.
5. The reviewer approves, rejects, or marks changes as needing owner/bilateral approval.
6. The approved JSON becomes the next canonical profile file in the private archive.

This is intentionally append-only where possible. The final profile can still contain the merged/current state, but every meaningful change should also leave a version and audit event.

## Schema Changes

New optional top-level object:

- `profile_evolution.model_version`
- `profile_evolution.stable_identity_paths`
- `profile_evolution.living_record_paths`
- `profile_evolution.pending_changes`
- `profile_evolution.applied_versions`
- `profile_evolution.audit_events`

Expanded `governance` object:

- `profile_owner`
- `owner_contact`
- `review_owner`
- `editors`
- `reviewers`
- `permission_rules`
- `claim_status`
- `claim_requests`
- `change_requests`
- `relationship_approvals`
- `version_history`
- `audit_trail`
- existing approval, lifecycle, retention, and export fields

Change requests are intentionally granular:

- `type`: field update, story, event, relationship, asset, project participation, visibility, consent, ownership, correction, archive request
- `operation`: add, replace, append, remove, merge
- `target_path`: where the change applies, such as `narrative_engine.story_provenance`
- `summary`, `visibility`, and `payload_notes`
- `payload_json` or `payload` - structured data that a reviewer can apply safely
- reviewer state: status, reviewer, reviewed date

Relationship entries now support visibility and approval metadata. Relationship details involving multiple real people should default to `private` or `reviewer_only` until the reviewer confirms consent. Exportable relationship entries should usually require bilateral approval.

## UI / UX Changes

`index.html` now exposes living-record controls in Governance:

- profile owner and owner contact
- editors and reviewers
- permission rules
- claim requests
- change requests
- relationship approvals
- version history
- audit trail

The intended UX is not "fill the whole form again." For existing profiles, import the current JSON, add one or more rows to `change_requests`, then export the updated JSON for review.

`review.html` now surfaces:

- pending change count
- claim status
- pending changes queue
- ownership claim warnings
- bilateral relationship approval warnings
- individual approve, reject, and apply/approve controls for pending changes
- claim approve, reject, and needs-verification controls

## Review Workflow Changes

Review states stay local-first:

- raw
- reviewed
- approved

Within a profile, each change request can have its own state:

- submitted
- needs owner review
- needs bilateral approval
- reviewer pending
- approved
- rejected
- applied
- withdrawn

Reviewer notes should be written both to the review envelope and, when approving/rejecting changes, to `governance.audit_trail`.

Applied changes use a conservative whitelist of target paths. Reviewers can apply story provenance, events, relationships, timeline entries, graph links, assets, project participation, project-specific notes, and unresolved source questions. Sensitive owner contact, claim history, audit history, and governance internals are not mutable through arbitrary change request paths.

## Relationship Governance

Use these defaults:

- private: visible only to the profile owner or trusted archive maintainers
- reviewer_only: visible in review packets, excluded from public/project exports
- project_only: visible to approved projects, not public
- exportable: allowed in portable exports

For relationships involving two real people:

- require both parties to approve before `exportable`
- allow reviewer-only storage when one party reports the relationship but export is not approved
- summarize sensitive dynamics instead of exporting detailed private history
- record unresolved approvals in `governance.relationship_approvals`

Project-scoped and public/exportable packages should not be created while relationship approvals for those scopes are unresolved.

## Stable Identity Vs Living History

Treat these as stable identity data:

- `profile_id`
- `entity.entity_id`
- `identity.display_name`
- `identity.profile_classification`
- `identity.entity_subtype`
- durable consent basis and owner information

Treat these as living record data:

- stories and provenance
- events and timeline entries
- relationships
- assets
- project participation
- truth/canon status
- source notes
- generated summaries

Stable identity changes should be rare and reviewed. Living history can grow through append-style change requests.

## Migration Plan

No breaking migration is required.

1. Existing v3 JSON remains valid.
2. On import, missing governance/evolution fields default to empty rows.
3. Reviewers can set `profile_owner`, `review_owner`, and a first `version_history` row during the next review.
4. Existing `governance.approval_history` and `governance.change_log` remain supported.
5. Future exports carry both old governance logs and the new living-record layer.

Recommended first migration row:

```text
1.0.0 | migration date | reviewer | migrated existing v3 profile into living-record governance | migration | yes
```

## Concrete Implementation Plan

1. Add schema support for ownership, claims, change requests, versions, audit trail, relationship approvals, and `profile_evolution`.
2. Add Governance UI fields to the intake form for claim/update submission.
3. Preserve new fields through import/export and generated review packets.
4. Update the review dashboard to show pending changes and unresolved ownership/relationship approvals.
5. Add reviewer approve/reject controls for queued changes.
6. Use the full JSON/review package for private review, project-scoped JSON for approved project imports, and public/exportable JSON for public-safe material only.
7. Add optional helper buttons later: "Suggest Story," "Suggest Relationship," "Claim Profile," and "Create Version Row."
8. Only consider a backend after the JSON/archive workflow becomes too hard to manage by hand.
