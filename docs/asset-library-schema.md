# Asset Library Schema

The v3 profile includes a top-level `asset_library` section. It is the canonical hub for visual, audio, document, art, sprite, model, and historical reference assets associated with a person profile.

## Shape

```json
{
  "asset_library": {
    "primary_reference_asset_id": "",
    "primary_portrait_asset_id": "",
    "primary_sprite_asset_id": "",
    "primary_model_asset_id": "",
    "assets": [],
    "asset_groups": [],
    "style_guides": []
  }
}
```

The app also supports quick-link IDs for primary face, body, outfit, token, and voice references.

## Asset Object

Each asset includes:

- `asset_id`
- `asset_type`
- `title`
- `description`
- `file_name`
- `file_extension`
- `file_size`
- `url`
- `local_path`
- `thumbnail_url`
- `date_added`
- `last_modified`
- `source`
- `creator`
- `copyright_holder`
- `license_type`
- `consent_status`
- `canon_level`
- `tags`
- `associated_projects`
- `use_cases`
- `do_not_use_for`
- `notes`

## Supported Asset Types

`reference_photo`, `portrait`, `character_art`, `sprite`, `sprite_sheet`, `pixel_art`, `token`, `concept_art`, `ui_graphic`, `logo`, `symbol`, `icon`, `animation`, `video`, `voice_reference`, `audio_clip`, `music_reference`, `document`, `pdf`, `3d_model`, `texture`, `moodboard`, `screenshot`, `historical_reference`, `other`.

## Canon Levels

`primary_reference`, `secondary_reference`, `historical_reference`, `current_reference`, `legacy_reference`, `semi_canon`, `canon`, `noncanon`, `prototype`, `deprecated`.

## Consent Status

`approved`, `limited_use`, `private_only`, `internal_only`, `do_not_use`, `unknown`.

## Static Storage Rule

The GitHub Pages app stores asset metadata, references, URLs, and paths. It does not upload or persist binary files by itself. Real files should live in private cloud storage, GitHub-hosted assets, a CDN, or a future asset pipeline. The profile can reference those locations without needing a schema redesign.

