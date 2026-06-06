# HTF / K Street Descriptor Workflow

This tool is intentionally separate from any one game, story, or project. Keep the intake process universal first, then copy approved project-specific imports into individual project folders.

## Recommended Cloud Drive Structure

```text
HTF - K Street Character Descriptor Tool/
  README - Start Here
  Public Form Link.txt
  Blank Form Export Example.json
  Schema Docs/
  Submitted Descriptors/
    Raw/
    Reviewed/
    Approved for Use/
  Source Images/
    Person Name/
  Project Imports/
    Shared Character Database/
    Future Project Name/
```

## Review Dashboard Workflow

Use `review.html` for a non-database review pass:

1. Download JSON submissions from Formspree or email.
2. Open the review dashboard from the public GitHub Pages site or local repo.
3. Import one or more JSON files.
4. Review consent, source image notes, project approvals, and private fields.
5. Review unresolved ownership claims, pending profile changes, relationship approvals, and visibility controls.
6. Approve, reject, apply, or hold individual pending changes for owner/bilateral review.
7. Mark each record as `raw`, `reviewed`, or `approved`.
8. Export the review JSON/Markdown or approved package.
9. Store exports in the private drive:

```text
Submitted Descriptors/
  Raw/
  Reviewed/
  Approved for Use/
```

The review dashboard stores its working queue only in the current browser when you click `Save Review Queue Locally`. It does not write to GitHub, Formspree, or a backend.

## Living Profile Update Workflow

Existing profiles should not be resubmitted from scratch when one detail changes.

1. Start from the latest approved profile JSON.
2. Import it into `index.html`.
3. Add one or more `governance.change_requests` rows, such as a new story, event, relationship, asset, project participation note, visibility change, or correction.
4. If claiming ownership, add a `governance.claim_requests` row with a verification method and evidence summary.
5. If adding a relationship involving another real person, add a `governance.relationship_approvals` row and keep visibility restricted until approval is resolved.
6. Export the updated JSON and send it to review.
7. Reviewers approve, reject, or apply pending changes locally in `review.html`, then export the next canonical profile package.
8. Use project-scoped or public/exportable packages only after visibility and relationship approval warnings are clear.

## Recommended Workflow

1. Publish or share the static `index.html` form.
2. Ask contributors to fill the form and export JSON.
3. Store new submissions in `Submitted Descriptors/Raw/`.
4. Review consent, contact info, boundaries, and source image notes.
5. Move checked records to `Submitted Descriptors/Reviewed/`.
6. Move only approved records to `Submitted Descriptors/Approved for Use/`.
7. Create project-specific transformed copies in `Project Imports/[Project Name]/`.

## Privacy Guidance

The public repo or public form host should contain only:

- Tool code
- Schema files
- Documentation
- Blank or fictional examples

Keep these private unless explicitly approved:

- Real submitted descriptors
- Source images
- Contact information
- Boundary notes
- Raw or reviewed intake files

## Project Imports

Project imports should be copies or transformations of approved descriptors, not the original raw records. This lets a project add project-specific fields while preserving a clean universal source record.

For each project import, keep a note of:

- Original descriptor filename
- Schema version
- Date imported
- What fields were transformed or omitted
- Whether boundaries were checked before use
