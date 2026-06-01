# Asset Management Guide

Use the Asset Library section to track every reference material connected to a person profile:

- real photographs
- character art
- portraits
- sprites and pixel art
- tokens
- 3D models
- voice references
- videos
- documents and PDFs
- logos, symbols, and mood boards
- generated AI assets
- historical reference materials

## Upload Workflow

The static app supports drag-and-drop and multi-select uploads for metadata capture. Because GitHub Pages has no backend, uploaded binaries are not stored in the profile JSON. The app records file name, extension, size, type guess, date, and temporary thumbnail when available.

After upload:

1. Store the actual file in a private cloud folder, GitHub asset folder, CDN, or local source archive.
2. Add the stable `url` or `local_path` to the asset row.
3. Set `consent_status`.
4. Set `canon_level`.
5. Add tags, associated projects, and use cases.

## Bulk Tools

The asset manager can search and filter by type, canon level, project, tag, creator, date, and consent status. Bulk actions apply to the filtered set:

- add a tag
- set consent/canon values
- delete metadata rows

Deleting metadata rows does not delete source files.

## Privacy

Keep private photos, voice samples, and documents out of the public repo unless explicitly approved. The public profile should contain only approved metadata and public-safe URLs.

