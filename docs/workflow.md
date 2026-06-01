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

