# K Street Descriptor Workflow

This tool is intentionally separate from any one game, story, or project. Keep the intake process universal first, then copy approved project-specific imports into individual project folders.

## Recommended Cloud Drive Structure

```text
K Street Character Descriptor Tool/
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
    West Coast Crypto Cruise/
    Future Project Name/
```

## Review Dashboard Workflow

Use `review.html` for a non-database review pass:

1. Download JSON submissions from Formspree or email.
2. Open the review dashboard from the public GitHub Pages site or local repo.
3. Import one or more JSON files.
4. Review consent, source image notes, project approvals, and private fields.
5. Mark each record as `raw`, `reviewed`, or `approved`.
6. Export the review JSON/Markdown or approved package.
7. Store exports in the private drive:

```text
Submitted Descriptors/
  Raw/
  Reviewed/
  Approved for Use/
```

The review dashboard stores its working queue only in the current browser when you click `Save Review Queue Locally`. It does not write to GitHub, Formspree, or a backend.

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
