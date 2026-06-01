# Visual Reference Workflow

The Asset Library supports visual reference generation for artists, image models, sprite pipelines, and future 3D workflows.

## Generate Visual Reference Sheet

Use `Generate Visual Reference Sheet` to create an editable Markdown-style summary containing:

- appearance
- clothing
- posture and body language
- default expression
- motifs and symbols
- primary assets
- associated asset metadata

The generated text is stored in `asset_library` as `visual_reference_sheet` through the form field and can be exported.

## Art Reference

`profile.art-reference.md` combines:

- `ai_generation.art_prompt_summary`
- appearance prompt notes
- negative prompt notes
- style guides
- approved art/reference assets

## Sprite Reference

`profile.sprite-reference.md` combines:

- silhouette
- outfit
- expression
- sprite, sprite sheet, pixel art, and token assets
- do-not-use notes

## Future Compatibility

The schema is designed to support:

- local files
- GitHub-hosted assets
- CDN assets
- cloud storage
- image generation pipelines
- sprite pipelines
- animation pipelines
- 3D model pipelines

without changing the v3 top-level asset structure.

