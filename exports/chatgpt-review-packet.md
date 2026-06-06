# ChatGPT Review Packet

This file is the workaround for AI systems that cannot open or inspect the live GitHub Pages app from a URL alone. Upload this Markdown file to ChatGPT, Claude, Gemini, or another AI system, or paste the relevant sections directly into the chat.

## Direct Review Prompt

You are reviewing a static, local-first universal profile intake and review system. Do not assume you can browse the live URL. Use this packet as the source of truth. Evaluate whether the language is clear for nontechnical users and whether the schema remains powerful enough for advanced canon, asset, graph, AI, game, and export workflows. Flag corporate/HR/personality-test/fantasy-only language, privacy risks, confusing required fields, missing consent guardrails, and any gaps for reviewing real people, fictional characters, NPCs, historical figures, AI agents, family members, partners, children, collaborators, and pets.

## Public Links

- Intake form: https://lonnie-tisdale.github.io/friend-character-intake/index.html?cachebust=5eb2894
- Review dashboard: https://lonnie-tisdale.github.io/friend-character-intake/review.html?cachebust=5eb2894
- Markdown packet: https://lonnie-tisdale.github.io/friend-character-intake/exports/chatgpt-review-packet.md?cachebust=5eb2894
- JSON packet: https://lonnie-tisdale.github.io/friend-character-intake/exports/chatgpt-review-packet.json?cachebust=5eb2894

## App Summary

```json
{
  "title": "Universal Profile Intake + Review System",
  "intake_page_visible_text": "HTF / K Street Character Database HTF / K Street Character Database This shared profile system turns real group lore into consistent characters, dialogue, art prompts, NPCs, relationship maps, and project memory across HTF, K Street, West Coast Crypto Cruise, and future weird ambitious builds. Person schema 3.0.0 with Knowledge Graph v4 foundation. MODE Simple Intake Advanced Canon Agent Export Save Locally Load Locally Review Submissions Sections Simple Member Intake Fill in what feels easy. The point is to capture what makes you recognizable in the group lore: your vibe, voice, obsessions, road-trip energy, Discord behavior, questionable superpowers, and how you show up when a plan gets weird. What will this be used for? Approved answers may help create consistent characters, dialogue, art prompts, NPC behavior, project memory, and relationship maps for shared HTF / K Street projects. Consent fields decide what can be stored, fictionalized, simulated, or reused. Easy path: add your display name, three-word vibe, current obsession, legendary story, visual description, voice style, group/project context, and consent choices. Then click Submit Descriptor . If you want to share a reference photo, describe where the reviewer can find it or send it privately. Public repos should not contain real private images unless explicitly approved. Advanced Canon Editing Full person schema, asset/reference metadata, canon controls, source notes, timeline entries, and graph-aware entity linking for HTF / K Street maintainers and collaborators. Agent Export Console Generate clean JSON, Markdown, visual references, graph files, and one bundled context block for ChatGPT, Claude, Gemini, local agents, game tools, and project imports. Submit Descriptor Generate Character Summary Copy Shareable Profile Generate AI Context Generate Art Prompt Generate Dialogue Prompt Generate NPC Summary Generate Relationship Summary Generate Visual Reference Sheet Generate Character Context Generate Organization Summary Generate Project Summary Generate Timeline Summary Generate Lore Summary Generate AI Agent Context Import JSON Reset Asset Library Manager Drag files here or choose files to add asset metadata Choose Asset Files Asset search Filter by type All types Filter by canon All canon levels Filter by consent All consent statuses Filter by project Filter by tag Filter by creator Filter by date Gallery View Table View Bulk Tag All Filtered Bulk Set Consent/Canon Bulk Delete Filtered Select an asset to preview metadata. Knowledge Graph Graph search Entity type filter All entity types Network View Timeline View Entity Explorer Select a node or relationship to inspect it. Agent Export / Import Profile JSON Profile JSON Compact JSON Copy JSON Markdown And Agent Context Markdown Profile AI Context Copy Markdown Copy All Agent Context Game, Art, Dialogue Game Design Summary Art Prompt Dialogue Prompt NPC Summary Relationship Summary Visual Reference Sheet Art Reference Pack Sprite Reference Assets And Graph Relationships JSON Assets JSON Asset Manifest Graph JSON Graph People Graph Relationships Graph Organizations Graph Locations Graph Events Graph Assets Graph Projects Validation, Sharing, Import Download Everything Validate JSON Copy Share Link Import JSON Search fields Schema version Migration report GitHub Pages base URL Latest share link Submission status Live JSON Preview Completeness: 0% Ready.",
  "review_page_visible_text": "Profile Review Dashboard Profile Review Dashboard Private review workflow for moving profiles from Raw to Reviewed to Approved for Use. Static, local-first, JSON/Markdown portable. Open Intake Form Import JSON Files Save Review Queue Locally Load Local Queue Clear Queue Profiles Import downloaded Formspree/profile JSON files. Consent first, privacy second, canon/project approval third. Drag JSON profiles here All statuses Raw Reviewed Approved Review Checklist Confirm consent before any real person becomes reusable canon. Keep optional contact, real names, boundaries, and private source image notes private. Confirm which projects can use the profile and how visible the adaptation can be. Add reviewer notes, confidence, canon level, and final status. Export Raw, Reviewed, or Approved packages into the private project archive. Ready. Selected Profile Select a profile from the left. Nothing here writes to GitHub or a server.",
  "modes": [
    "Simple Intake",
    "Advanced Canon",
    "Agent Export"
  ],
  "preserved_workflows": [
    "static GitHub Pages compatible form",
    "Formspree submission endpoint",
    "live JSON preview",
    "JSON import and v1/v2/v3 migration",
    "Markdown/JSON/agent exports",
    "asset library",
    "knowledge graph foundation",
    "local-first review dashboard",
    "Raw -> Reviewed -> Approved review states"
  ]
}
```

## Schema Summary

```json
{
  "schema_id": "https://kstreet.local/schemas/kstreet_person_profile.v3.json",
  "title": "HTF / K Street Person Profile v3",
  "description": "Canonical source-of-truth profile schema for HTF / K Street people and shared characters across narrative, game, AI, relationship, and memory systems.",
  "required": [
    "schema_version",
    "schema_id",
    "profile_id",
    "created_at",
    "updated_at",
    "consent",
    "identity",
    "appearance",
    "asset_library",
    "personality",
    "motivation",
    "decision_making",
    "social_model",
    "relationship_graph",
    "knowledge_domains",
    "humor_and_voice",
    "conflict_and_stress",
    "signature_behaviors",
    "narrative_engine",
    "game_mechanics",
    "ai_generation",
    "project_usage",
    "source_notes",
    "generated_content",
    "extensions"
  ],
  "top_level_properties": [
    "schema_version",
    "schema_id",
    "profile_id",
    "created_at",
    "updated_at",
    "entity",
    "consent",
    "identity",
    "appearance",
    "asset_library",
    "knowledge_graph",
    "personality",
    "motivation",
    "decision_making",
    "social_model",
    "relationship_graph",
    "knowledge_domains",
    "humor_and_voice",
    "conflict_and_stress",
    "signature_behaviors",
    "narrative_engine",
    "game_mechanics",
    "ai_generation",
    "project_usage",
    "source_notes",
    "specialized_profiles",
    "governance",
    "generated_content",
    "extensions"
  ],
  "defs": [
    "object",
    "graph_link",
    "graph_entity",
    "relationship_entity",
    "organization_entity",
    "faction_entity",
    "location_entity",
    "event_entity",
    "story_object_entity",
    "project_entity",
    "concept_entity",
    "timeline_entry",
    "relationship",
    "knowledge_domain",
    "signature_behavior",
    "asset",
    "asset_group",
    "style_guide"
  ]
}
```

## Simple Intake Mode

## Consent

Plain consent controls. These decide what can be stored, adapted, exported, simulated, or kept private.

### Okay to save this profile
Field ID: `permission_to_store`
Type: `boolean`

### Okay to fictionalize me
Field ID: `permission_to_fictionalize`
Type: `boolean`

### Okay to generate AI-written dialogue that imitates how I communicate
Field ID: `permission_for_ai_dialogue`
Type: `boolean`

### Okay to use visual notes for art prompts
Field ID: `permission_for_art_generation`
Type: `boolean`

### Okay to reuse across approved projects
Field ID: `permission_for_cross_project_reuse`
Type: `boolean`

### Okay to store information about friendships, collaborations, and social connections
Field ID: `permission_for_relationship_simulation`
Type: `boolean`

### Why is this profile allowed to exist?
Field ID: `consent_basis`
Type: `select`

Options:
- self_submitted
- guardian_submitted
- public_domain_person
- historical_record
- estate_permission
- community_documentation
- fictional_creation
- organization_authorized
- unknown

### Minor / child status
Field ID: `minor_status`
Type: `select`

Options:
- not_minor
- minor
- unknown

### Guardian approval required
Field ID: `guardian_consent_required`
Type: `boolean`

### Guardian approval confirmed
Field ID: `guardian_consent_confirmed`
Type: `boolean`

### Consent source
Field ID: `consent_source`
Type: `text`

Example / placeholder:

```text
self-submitted form, guardian email, public-domain source, estate approval
```

### Consent date
Field ID: `consent_date`
Type: `text`

Example / placeholder:

```text
2026-06-05
```

### Consent method
Field ID: `consent_method`
Type: `text`

Example / placeholder:

```text
public form checkbox, written message, signed release, reviewer note
```

### Relationship details visibility
Field ID: `relationship_visibility`
Type: `select`

Options:
- private
- reviewer_only
- project_only
- exportable

### Do not use this profile for
Field ID: `restricted_uses`
Type: `list`

Example / placeholder:

```text
romance
dating_sim
advertising
political_content
training_data
public_release
commercial_use
```

### Consent notes / edge cases
Field ID: `consent_notes`
Type: `textarea`

Example / placeholder:

```text
Okay for fictionalized project use; keep real names, family details, and private relationship data out of public exports.
```

## Identity

The public-safe handle, vibe, obsessions, and table-intro version of the person.

### What should we call you?
Field ID: `display_name`
Type: `text`

Example / placeholder:

```text
Maya / @packetghost / whatever people actually call me
```

### What kind of profile is this?
Field ID: `entity_subtype`
Type: `select`

Options:
- real_person
- fictional_character
- npc
- ai_agent
- organization
- pet
- historical_figure
- deceased_person
- public_figure
- family_member
- partner_spouse
- child_minor
- collaborator
- other

### Best way to ask follow-up questions
Field ID: `optional_contact`
Type: `text`

Example / placeholder:

```text
Discord handle, Signal, email, or 'ask me in the group chat'
```

### Optional nickname, codename, or fictional version
Field ID: `in_world_name`
Type: `text`

Example / placeholder:

```text
Terminal Wizard, Roadtrip Bard, Meme Archaeologist
```

### Two-sentence lore intro
Field ID: `short_bio`
Type: `textarea`

Example / placeholder:

```text
I fix weird problems, ask too many questions, and somehow become useful during chaos. I am usually holding coffee and three unfinished ideas.
```

### Three words that describe you
Field ID: `three_word_vibe`
Type: `text`

Example / placeholder:

```text
Chaotic, creative, caffeinated
```

### Animal you identify with
Field ID: `animal_affinity`
Type: `text`

Example / placeholder:

```text
Crow, raccoon, wolf, octopus, coyote, house cat, honey badger, pigeon of destiny
```

### Current obsession
Field ID: `current_obsession`
Type: `textarea`

Example / placeholder:

```text
Local AI models, parkour history, retro RPG design, Bitcoin self-custody, urban exploration, weird internet archaeology
```

### Pronouns or how people should refer to you
Field ID: `pronouns`
Type: `text`

Example / placeholder:

```text
they/them, he/him, she/her, name only, no preference
```

### Current base / usual orbit
Field ID: `current_location`
Type: `text`

Example / placeholder:

```text
San Diego, Austin, the road, airport lounges, wherever the group chat sends me
```

## Appearance

Visual anchors for art, prose, sprites, and memory. Think recognizability, not biometric paperwork.

### Default outfit
Field ID: `everyday_clothing`
Type: `textarea`

Example / placeholder:

```text
black hoodie, conference badge, trail shoes, cargo pants, jacket with too many pockets
```

### Signature item if we only draw one prop
Field ID: `signature_item`
Type: `text`

Example / placeholder:

```text
Coffee thermos, camera, notebook, hardware wallet, multi-tool, suspiciously heavy backpack
```

### Default expression
Field ID: `default_expression`
Type: `text`

Example / placeholder:

```text
half amused, half concerned, already debugging the situation
```

### Movement / body language
Field ID: `movement_body_language`
Type: `textarea`

Example / placeholder:

```text
paces while thinking, perches on furniture wrong, talks with hands, moves like the floor is optional
```

### Visual description for artists / AI
Field ID: `image_prompt_notes`
Type: `textarea`

Example / placeholder:

```text
modern internet nomad, parkour-adjacent posture, travel-worn clothes, bright eyes, late-night build energy
```

## Personality

Vibe, useful chaos, recurring patterns, and the things the group already knows are true.

### Primary social energy
Field ID: `primary_social_energy`
Type: `select`

Options:
- Warm Stabilizer
- Thoughtful Mentor
- Curious Guide
- Practical Fixer
- Chaotic Instigator
- Deadpan Commentator
- Magnetic Performer
- Quiet Observer
- Community Builder
- Explorer
- Storyteller
- Scholar
- Philosopher
- Connector
- Visionary
- Trusted Advisor
- Trickster Sage
- Reluctant Leader
- Investigator
- Catalyst

### Secondary social energy
Field ID: `secondary_social_energy`
Type: `select`

Options:
- Warm Stabilizer
- Thoughtful Mentor
- Curious Guide
- Practical Fixer
- Chaotic Instigator
- Deadpan Commentator
- Magnetic Performer
- Quiet Observer
- Community Builder
- Explorer
- Storyteller
- Scholar
- Philosopher
- Connector
- Visionary
- Trusted Advisor
- Trickster Sage
- Reluctant Leader
- Investigator
- Catalyst

### Vibe tags
Field ID: `personality_traits`
Type: `list`

Example / placeholder:

```text
curious
stubborn
reliable
chaotic
creative
caffeinated
quiet
analytical
dangerous
```

### Oddly specific traits
Field ID: `custom_traits`
Type: `list`

Example / placeholder:

```text
can smell bad incentives
answers Discord at impossible hours
keeps receipts in the spiritual sense
```

### What do people always come to you for?
Field ID: `strengths`
Type: `list`

Example / placeholder:

```text
fixing servers at 2 AM
finding cheap flights
talking people off ledges
remembering obscure lore
turning chaos into a plan
```

### Failure modes / recurring bugs
Field ID: `flaws`
Type: `list`

Example / placeholder:

```text
overcommits to the bit
forgets sleep is load-bearing
buys the top
turns every problem into a research spiral
```

### Character archetype
Field ID: `character_archetype`
Type: `text`

Example / placeholder:

```text
Accelerator Ghost, Terminal Wizard, Logistics Goblin, Chaos Engineer, ZK Monk, Meme Archaeologist, Burnout Prophet, Startup Necromancer, Desert Mystic, Roadtrip Bard, Vibe Cartographer, Parkour Historian
```

### Signature ability
Field ID: `signature_ability`
Type: `textarea`

Example / placeholder:

```text
Can find WiFi anywhere. Knows somebody who knows somebody. Solves impossible problems at 3 AM. Generates ideas faster than consequences.
```

## Social Model

How the profile bonds, disagrees, cares, and fits into groups.

### Friendship style
Field ID: `friendship_style`
Type: `select`

Options:
- Protector
- Teacher
- Teammate
- Entertainer
- Problem Solver
- Listener
- Challenger
- Nurturer

### How you connect to the circle / projects / scenes
Field ID: `relationship_to_group_network`
Type: `textarea`

Example / placeholder:

```text
HTF / K Street friend, Discord regular, WCCC contributor, parkour-adjacent chaos witness, conference hallway ally.
```

### How people know you care
Field ID: `how_they_show_care`
Type: `textarea`

Example / placeholder:

```text
Makes the plan easier, remembers who needed a ride, checks on basics, sends the useful link at exactly the right time.
```

## Humor And Voice

How they sound in the group chat, on a road trip, during a build sprint, and after the plan has obviously gone sideways.

### Voice rhythm
Field ID: `voice_rhythm`
Type: `textarea`

Example / placeholder:

```text
starts with 'okay so' then builds a whole theory; pauses for the bit; gets very precise when stakes rise
```

### Typical phrases
Field ID: `typical_phrases`
Type: `list`

Example / placeholder:

```text
This seems like a bad idea. Let's do it.
I have concerns, but not enough concerns.
We're already committed.
Nobody learns from success.
```

### Topics you can talk about for hours
Field ID: `topics_they_bring_up`
Type: `list`

Example / placeholder:

```text
Parkour
AI agents
Crypto
Philosophy
Street photography
UFO lore
Fitness
History
Startups
Open source software
Dreams
Human behavior
```

### Representative quotes
Field ID: `example_quotes`
Type: `list`

Example / placeholder:

```text
How hard could it possibly be?
That went better than expected.
Let's never do that again.
See? Completely under control.
```

### Battle intro quote
Field ID: `battle_intro_quote`
Type: `textarea`

Example / placeholder:

```text
This seems like a bad idea. Let's do it.
I have concerns, but not enough concerns.
We're already committed.
```

### Victory quote
Field ID: `battle_victory_quote`
Type: `textarea`

Example / placeholder:

```text
Nobody learns from success.
That went better than expected.
Let's never do that again.
```

### Dialogue should do this
Field ID: `dialogue_dos`
Type: `list`

Example / placeholder:

```text
sound like a real friend
include practical weirdness
know the lore
keep the humor human
```

### Dialogue should avoid this
Field ID: `dialogue_donts`
Type: `list`

Example / placeholder:

```text
do not make them a tech bro caricature
do not turn every line into a pitch
do not make private lore public
```

## Project Usage

Where this profile can show up: cruise NPC, Discord lore, art prompts, internal memory, game systems, or future chaos.

### Where can this be used?
Field ID: `approved_projects`
Type: `list`

Example / placeholder:

```text
HTF
K Street
West Coast Crypto Cruise
Shared Person Database
AI Dialogue Agent
Art Generation
Group Memory
Private Review
Future Weird Project
```

### Why do you belong in the database?
Field ID: `project_relevance_notes`
Type: `textarea`

Example / placeholder:

```text
Good for cruise NPC energy, group memory, social cameos, late-night dialogue, and support-character writing.
```

### Canon level
Field ID: `canon_level`
Type: `select`

Options:
- Raw
- Semi Canon
- Canon
- Parody Only
- Private Reference Only

## Source Notes

Source provenance and review information.

### Reference photos / source images
Field ID: `source_images`
Type: `list`

Example / placeholder:

```text
Source Images/Packet Ghost/approved-conference-reference.jpg
```

## Generated Content

Editable generated outputs. Buttons at the top can fill these from the structured fields.

### Character summary
Field ID: `character_summary`
Type: `textarea`

### AI context
Field ID: `ai_context_output`
Type: `textarea`

## Full Form Sections

## Consent

Plain consent controls. These decide what can be stored, adapted, exported, simulated, or kept private.

### Okay to save this profile
Field ID: `permission_to_store`
Type: `boolean`

### Okay to fictionalize me
Field ID: `permission_to_fictionalize`
Type: `boolean`

### Okay to generate AI-written dialogue that imitates how I communicate
Field ID: `permission_for_ai_dialogue`
Type: `boolean`

### Okay to use visual notes for art prompts
Field ID: `permission_for_art_generation`
Type: `boolean`

### Okay to reuse across approved projects
Field ID: `permission_for_cross_project_reuse`
Type: `boolean`

### Okay to store information about friendships, collaborations, and social connections
Field ID: `permission_for_relationship_simulation`
Type: `boolean`

### Okay to ask me follow-up questions
Field ID: `contact_for_questions`
Type: `boolean`

### Why is this profile allowed to exist?
Field ID: `consent_basis`
Type: `select`

Options:
- self_submitted
- guardian_submitted
- public_domain_person
- historical_record
- estate_permission
- community_documentation
- fictional_creation
- organization_authorized
- unknown

### Minor / child status
Field ID: `minor_status`
Type: `select`

Options:
- not_minor
- minor
- unknown

### Guardian approval required
Field ID: `guardian_consent_required`
Type: `boolean`

### Guardian approval confirmed
Field ID: `guardian_consent_confirmed`
Type: `boolean`

### Consent source
Field ID: `consent_source`
Type: `text`

Example / placeholder:

```text
self-submitted form, guardian email, public-domain source, estate approval
```

### Consent date
Field ID: `consent_date`
Type: `text`

Example / placeholder:

```text
2026-06-05
```

### Consent method
Field ID: `consent_method`
Type: `text`

Example / placeholder:

```text
public form checkbox, written message, signed release, reviewer note
```

### Removal / withdrawal requested
Field ID: `withdrawal_requested`
Type: `boolean`

### Removal request date
Field ID: `withdrawal_date`
Type: `text`

Example / placeholder:

```text
2026-06-05
```

### Relationship details visibility
Field ID: `relationship_visibility`
Type: `select`

Options:
- private
- reviewer_only
- project_only
- exportable

### Do not use this profile for
Field ID: `restricted_uses`
Type: `list`

Example / placeholder:

```text
romance
dating_sim
advertising
political_content
training_data
public_release
commercial_use
```

### Stuff that should stay out of canon
Field ID: `sensitive_topics_to_avoid`
Type: `list`

Example / placeholder:

```text
family details
medical specifics
old drama
anything involving actual legal trouble
```

### Consent notes / edge cases
Field ID: `consent_notes`
Type: `textarea`

Example / placeholder:

```text
Okay for fictionalized project use; keep real names, family details, and private relationship data out of public exports.
```

## Identity

The public-safe handle, vibe, obsessions, and table-intro version of the person.

### What should we call you?
Field ID: `display_name`
Type: `text`

Example / placeholder:

```text
Maya / @packetghost / whatever people actually call me
```

### What kind of profile is this?
Field ID: `entity_subtype`
Type: `select`

Options:
- real_person
- fictional_character
- npc
- ai_agent
- organization
- pet
- historical_figure
- deceased_person
- public_figure
- family_member
- partner_spouse
- child_minor
- collaborator
- other

### Real name, only if you want it stored
Field ID: `real_name_optional`
Type: `text`

Example / placeholder:

```text
Full legal name optional, usually not needed
```

### Best way to ask follow-up questions
Field ID: `optional_contact`
Type: `text`

Example / placeholder:

```text
Discord handle, Signal, email, or 'ask me in the group chat'
```

### Optional nickname, codename, or fictional version
Field ID: `in_world_name`
Type: `text`

Example / placeholder:

```text
Terminal Wizard, Roadtrip Bard, Meme Archaeologist
```

### Two-sentence lore intro
Field ID: `short_bio`
Type: `textarea`

Example / placeholder:

```text
I fix weird problems, ask too many questions, and somehow become useful during chaos. I am usually holding coffee and three unfinished ideas.
```

### Three words that describe you
Field ID: `three_word_vibe`
Type: `text`

Example / placeholder:

```text
Chaotic, creative, caffeinated
```

### Animal you identify with
Field ID: `animal_affinity`
Type: `text`

Example / placeholder:

```text
Crow, raccoon, wolf, octopus, coyote, house cat, honey badger, pigeon of destiny
```

### Current obsession
Field ID: `current_obsession`
Type: `textarea`

Example / placeholder:

```text
Local AI models, parkour history, retro RPG design, Bitcoin self-custody, urban exploration, weird internet archaeology
```

### Nicknames / handles / aliases
Field ID: `nicknames`
Type: `list`

Example / placeholder:

```text
Packet Ghost
WiFi Oracle
that one guy from the Austin house
```

### Pronouns or how people should refer to you
Field ID: `pronouns`
Type: `text`

Example / placeholder:

```text
they/them, he/him, she/her, name only, no preference
```

### Approx age range, if useful
Field ID: `age_range`
Type: `text`

Example / placeholder:

```text
20s, 30s, old enough to have seen multiple crypto cycles
```

### Current base / usual orbit
Field ID: `current_location`
Type: `text`

Example / placeholder:

```text
San Diego, Austin, the road, airport lounges, wherever the group chat sends me
```

### Where did your lore start?
Field ID: `origin_location`
Type: `text`

Example / placeholder:

```text
Parkour forums, hacker houses, desert builds, Midwest LAN parties
```

### Communities / scenes
Field ID: `communities`
Type: `list`

Example / placeholder:

```text
HTF
K Street
Parkour community
local AI Discord
burner camp
crypto conference hallway track
```

### Project roles people actually ask you to play
Field ID: `roles`
Type: `list`

Example / placeholder:

```text
Community Builder
Lore Keeper
Developer
Event Instigator
Professional Bad Influence
Spreadsheet Wizard
Meme Curator
Fixer
```

### Work / craft / hustle
Field ID: `professions`
Type: `list`

Example / placeholder:

```text
developer
artist
founder
coach
researcher
organizer
full-time side quest
```

### Search tags / vibe tags
Field ID: `identity_tags`
Type: `list`

Example / placeholder:

```text
internet-weirdo
parkour
AI-agents
startup-chaos
roadtrip-certified
```

## Appearance

Visual anchors for art, prose, sprites, and memory. Think recognizability, not biometric paperwork.

### General silhouette / build
Field ID: `height_build`
Type: `text`

Example / placeholder:

```text
compact parkour build, tall conference cryptid, small but impossible to lose in a crowd
```

### Hair / head silhouette
Field ID: `hair`
Type: `text`

Example / placeholder:

```text
messy travel hair, shaved sides, beanie most of the time, looks like they cut it during a sprint
```

### Eyes / attention style
Field ID: `eyes`
Type: `text`

Example / placeholder:

```text
alert, sleep-deprived, always scanning for exits, outlets, or the bit
```

### Recognizable face details
Field ID: `face_features`
Type: `textarea`

Example / placeholder:

```text
expressive eyebrows, too-aware resting face, looks like they just read the room and the room failed QA
```

### Skin tone
Field ID: `skin_tone`
Type: `text`

### Recognizable marks / recurring visual bits
Field ID: `distinguishing_marks`
Type: `textarea`

Example / placeholder:

```text
glasses, chipped black nail polish, old conference wristband, tattoo people keep asking about
```

### Sprite silhouette
Field ID: `silhouette`
Type: `textarea`

Example / placeholder:

```text
hoodie + backpack + forward lean, looks ready to climb a wall or fix a router
```

### Default outfit
Field ID: `everyday_clothing`
Type: `textarea`

Example / placeholder:

```text
black hoodie, conference badge, trail shoes, cargo pants, jacket with too many pockets
```

### Iconic outfit / legendary fit
Field ID: `iconic_outfit`
Type: `textarea`

Example / placeholder:

```text
sun-faded camp shirt, beat-up sneakers, sunglasses at night, backpack that has seen things
```

### Accessories / visual tells
Field ID: `accessories`
Type: `textarea`

Example / placeholder:

```text
camera, pocket notebook, enamel pin, hardware wallet, carabiner, old lanyard
```

### Signature item
Field ID: `carried_items`
Type: `textarea`

Example / placeholder:

```text
half-charged laptop, coffee thermos, sketchbook, multi-tool, phone with 200 open tabs, backpack containing an unknown dimension
```

### Signature item if we only draw one prop
Field ID: `signature_item`
Type: `text`

Example / placeholder:

```text
Coffee thermos, camera, notebook, hardware wallet, multi-tool, suspiciously heavy backpack
```

### Default expression
Field ID: `default_expression`
Type: `text`

Example / placeholder:

```text
half amused, half concerned, already debugging the situation
```

### Movement / body language
Field ID: `movement_body_language`
Type: `textarea`

Example / placeholder:

```text
paces while thinking, perches on furniture wrong, talks with hands, moves like the floor is optional
```

### Visual description for artists / AI
Field ID: `image_prompt_notes`
Type: `textarea`

Example / placeholder:

```text
modern internet nomad, parkour-adjacent posture, travel-worn clothes, bright eyes, late-night build energy
```

### What art should avoid
Field ID: `negative_image_prompt_notes`
Type: `textarea`

Example / placeholder:

```text
Do not turn them into a corporate mascot, quest-hero cosplay, villain caricature, or generic influencer.
```

## Asset Library

Canonical visual, audio, document, model, and reference asset hub for this profile. Static mode stores metadata and links, not private binary files.

### Primary reference asset ID
Field ID: `primary_reference_asset_id`
Type: `text`

Example / placeholder:

```text
asset_20260601_reference_photo
```

### Primary portrait asset ID
Field ID: `primary_portrait_asset_id`
Type: `text`

Example / placeholder:

```text
asset_20260601_portrait
```

### Primary sprite asset ID
Field ID: `primary_sprite_asset_id`
Type: `text`

Example / placeholder:

```text
asset_20260601_sprite
```

### Primary model asset ID
Field ID: `primary_model_asset_id`
Type: `text`

Example / placeholder:

```text
asset_20260601_model
```

### Primary face reference asset ID
Field ID: `primary_face_reference_asset_id`
Type: `text`

### Primary body reference asset ID
Field ID: `primary_body_reference_asset_id`
Type: `text`

### Primary outfit reference asset ID
Field ID: `primary_outfit_reference_asset_id`
Type: `text`

### Primary token asset ID
Field ID: `primary_token_asset_id`
Type: `text`

### Primary voice reference asset ID
Field ID: `primary_voice_reference_asset_id`
Type: `text`

### Assets
Field ID: `asset_entries`
Type: `rows`

Example / placeholder:

```text
asset_001 | reference_photo | WCCC hallway face reference | approved current face photo from crypto conference chaos | person_packetghost | West Coast Crypto Cruise | hallway.jpg | jpg | 2.4 MB | https://... | Source Images/Packet Ghost/hallway.jpg | https://... | 2026-06-01 | 2026-06-01 | self-submitted | Packet Ghost | Packet Ghost | private | approved | primary_reference | face,current,conference,late-night | West Coast Crypto Cruise,HTF,K Street | portrait_generation,art_generation | public ads,dating sim without consent | private source image; okay for internal art refs
```

Row format: `asset_id | asset_type | title | description | person/entity linked | project linked | file_name | file_extension | file_size | url | local_path | thumbnail_url | date_added | last_modified | source | creator | copyright_holder | license_type | consent_status | canon_level | tags comma-list | associated_projects comma-list | use_cases comma-list | do_not_use_for comma-list | notes`

### Asset groups
Field ID: `asset_group_entries`
Type: `rows`

Example / placeholder:

```text
group_face | Face References | approved photos where they look like themselves | asset_001,asset_002 | face,current,not-corporate | use for portraits, tokens, and vibe checks
```

Row format: `group_id | group_name | description | asset_ids comma-list | tags comma-list | notes`

### Style guides
Field ID: `style_guide_entries`
Type: `rows`

Example / placeholder:

```text
Roadtrip RPG Style | readable indie game interpretation | asset_003 | strong silhouette, travel-worn outfit, expressive idle pose | avoid polished resume headshot energy
```

Row format: `guide_name | description | asset_ids comma-list | prompt_notes | negative_prompt_notes`

### Visual reference sheet
Field ID: `visual_reference_sheet`
Type: `textarea`

## Knowledge Graph

v4 foundation fields. The current person profile becomes one graph node, and these rows add linked entities, relationships, events, projects, lore, and concepts.

### Entity ID
Field ID: `entity_id`
Type: `text`

Example / placeholder:

```text
person_packetghost
```

### Entity type
Field ID: `entity_type`
Type: `select`

Options:
- person
- relationship
- organization
- location
- event
- asset
- story_object
- project
- faction
- concept

### Graph tags
Field ID: `graph_tags`
Type: `list`

Example / placeholder:

```text
person
htf
k-street
wccc
parkour
ai-agents
roadtrip-lore
```

### Graph notes
Field ID: `graph_notes`
Type: `textarea`

Example / placeholder:

```text
Root node for a real friend profile that can become WCCC NPC context, group lore, and future project memory.
```

### Graph links
Field ID: `graph_link_entries`
Type: `rows`

Example / placeholder:

```text
org_htf_kstreet | organization_member | 8 | long-running friend/project circle
project_wccc | project_member | 6 | approved for light cruise NPC energy
loc_conference_hallway | location_association | 7 | usually found where the best hallway track is happening
```

Row format: `target entity id | relationship type | strength 1-10 | notes`

### Linked entities
Field ID: `graph_entity_entries`
Type: `rows`

Example / placeholder:

```text
org_htf_kstreet | organization | HTF / K Street | 2026-01-01 | 2026-06-01 | friend-circle,projects | equal circle of builders, artists, researchers, instigators
loc_conference_hallway | location | Crypto Conference Hallway Track |  |  | conference,roadtrip | where half the real plot happens
```

Row format: `entity_id | entity_type | display_name | created_at | updated_at | tags comma-list | notes`

### Relationship entities
Field ID: `relationship_entity_entries`
Type: `rows`

Example / placeholder:

```text
rel_packetghost_crew | person_packetghost | person_crew | friend | 8 | 2 | 7 | 6 | frequent | healthy | starts projects from jokes | airport floor lore | Discord-to-road-trip friendship | public-safe relationship summary only | high | semi_canon | approved
```

Row format: `relationship_id | person_a | person_b | relationship_type | trust level | conflict level | history level | influence level | communication frequency | relationship health | running dynamic | inside jokes | shared history | relationship notes | confidence level | canon level | consent status`

### Organization entities
Field ID: `organization_entity_entries`
Type: `rows`

Example / placeholder:

```text
org_htf_kstreet | HTF / K Street | 2026-01-01 | strange capable circle building games, AI tools, events, and lore | person_packetghost,person_crew | member,lore_keeper,fixer | project_wccc,project_profile_database | loc_hacker_house,loc_conference_hallway | asset_logo | grew through Discord threads, road trips, late nights, and poor timing | active
```

Row format: `entity_id | organization name | founding date | description | members comma-list | roles comma-list | projects comma-list | associated locations comma-list | assets comma-list | history | status`

### Faction entities
Field ID: `faction_entity_entries`
Type: `rows`

Example / placeholder:

```text
faction_hallway_track | Hallway Track Diplomats | informal conference crew that finds the real conversation | person_packetghost,person_crew | connector,scout | project_wccc | loc_conference_hallway | asset_badge | turn chance encounters into useful lore | active
```

Row format: `entity_id | faction name | description | members comma-list | roles comma-list | projects comma-list | associated locations comma-list | assets comma-list | goals | status`

### Location entities
Field ID: `location_entity_entries`
Type: `rows`

Example / placeholder:

```text
loc_hacker_house_kitchen | Hacker House Kitchen | real_world | 3 AM planning table, half-cleaned whiteboard, someone's laptop fan screaming | person_packetghost | event_midnight_build | org_htf_kstreet | asset_reference_photo |  | hacker-house,build-sprint
```

Row format: `entity_id | display name | location type | description | associated people comma-list | associated events comma-list | associated organizations comma-list | associated assets comma-list | coordinates optional | tags comma-list`

### Event entities
Field ID: `event_entity_entries`
Type: `rows`

Example / placeholder:

```text
event_midnight_build | Midnight Build Sprint | 2026-06-01 | person_packetghost,person_crew | org_htf_kstreet | loc_hacker_house_kitchen | asset_reference_photo | story_startup_from_joke | prototype worked badly enough to continue | approximate date; public-safe
```

Row format: `entity_id | title | event date | participants comma-list | organizations comma-list | locations comma-list | assets comma-list | stories comma-list | outcomes | notes`

### Story object entities
Field ID: `story_object_entries`
Type: `rows`

Example / placeholder:

```text
story_startup_from_joke | Started A Business From A Discord Joke | side project escaped containment and became group lore | person_packetghost,person_crew | event_midnight_build | loc_hacker_house_kitchen | person_crew |  | high | semi_canon
```

Row format: `entity_id | title | summary | participants comma-list | related events comma-list | related locations comma-list | related people comma-list | related assets comma-list | importance | canonical status`

### Project entities
Field ID: `project_entity_entries`
Type: `rows`

Example / placeholder:

```text
project_wccc | West Coast Crypto Cruise | game/narrative project about crypto conference chaos, friendship, and weird competence | person_packetghost,person_crew | org_htf_kstreet | asset_logo,asset_reference_photo | person_crew | event_midnight_build | active | https://github.com/htf-kstreet/friend-character-intake
```

Row format: `entity_id | project name | description | contributors comma-list | organizations comma-list | assets comma-list | related people comma-list | related events comma-list | status | repository links comma-list`

### Concept entities
Field ID: `concept_entity_entries`
Type: `rows`

Example / placeholder:

```text
concept_hallway_track_lore | Hallway Track Lore | the real story that happens between official agenda items | conference friendships, rumors, jokes, and useful accidents | person_packetghost | project_wccc | story_startup_from_joke | asset_badge
```

Row format: `entity_id | concept name | definition | summary | related people comma-list | related projects comma-list | related stories comma-list | related assets comma-list`

### Timeline entries
Field ID: `timeline_entries`
Type: `rows`

Example / placeholder:

```text
2026-06-01 | event_midnight_build | milestone | The joke became a build | Discord bit turned into an actual project plan | person_packetghost,org_htf_kstreet,project_wccc
```

Row format: `date | entity_id | timeline type | title | summary | related entities comma-list`

### Character context
Field ID: `character_context_output`
Type: `textarea`

### Organization summary
Field ID: `organization_summary_output`
Type: `textarea`

### Project summary
Field ID: `project_summary_output`
Type: `textarea`

### Timeline summary
Field ID: `timeline_summary`
Type: `textarea`

### Lore summary
Field ID: `lore_summary`
Type: `textarea`

### AI agent context
Field ID: `ai_agent_context`
Type: `textarea`

## Personality

Vibe, useful chaos, recurring patterns, and the things the group already knows are true.

### Fast descriptive shortcuts note
Field ID: `classification_note`
Type: `textarea`

Example / placeholder:

```text
These tags are descriptive shortcuts for writing and search, not psychological assessments or diagnoses.
```

### Primary social energy
Field ID: `primary_social_energy`
Type: `select`

Options:
- Warm Stabilizer
- Thoughtful Mentor
- Curious Guide
- Practical Fixer
- Chaotic Instigator
- Deadpan Commentator
- Magnetic Performer
- Quiet Observer
- Community Builder
- Explorer
- Storyteller
- Scholar
- Philosopher
- Connector
- Visionary
- Trusted Advisor
- Trickster Sage
- Reluctant Leader
- Investigator
- Catalyst

### Secondary social energy
Field ID: `secondary_social_energy`
Type: `select`

Options:
- Warm Stabilizer
- Thoughtful Mentor
- Curious Guide
- Practical Fixer
- Chaotic Instigator
- Deadpan Commentator
- Magnetic Performer
- Quiet Observer
- Community Builder
- Explorer
- Storyteller
- Scholar
- Philosopher
- Connector
- Visionary
- Trusted Advisor
- Trickster Sage
- Reluctant Leader
- Investigator
- Catalyst

### Vibe tags
Field ID: `personality_traits`
Type: `list`

Example / placeholder:

```text
curious
stubborn
reliable
chaotic
creative
caffeinated
quiet
analytical
dangerous
```

### Oddly specific traits
Field ID: `custom_traits`
Type: `list`

Example / placeholder:

```text
can smell bad incentives
answers Discord at impossible hours
keeps receipts in the spiritual sense
```

### What do people always come to you for?
Field ID: `strengths`
Type: `list`

Example / placeholder:

```text
fixing servers at 2 AM
finding cheap flights
talking people off ledges
remembering obscure lore
turning chaos into a plan
```

### Failure modes / recurring bugs
Field ID: `flaws`
Type: `list`

Example / placeholder:

```text
overcommits to the bit
forgets sleep is load-bearing
buys the top
turns every problem into a research spiral
```

### Character archetype
Field ID: `character_archetype`
Type: `text`

Example / placeholder:

```text
Accelerator Ghost, Terminal Wizard, Logistics Goblin, Chaos Engineer, ZK Monk, Meme Archaeologist, Burnout Prophet, Startup Necromancer, Desert Mystic, Roadtrip Bard, Vibe Cartographer, Parkour Historian
```

### Signature ability
Field ID: `signature_ability`
Type: `textarea`

Example / placeholder:

```text
Can find WiFi anywhere. Knows somebody who knows somebody. Solves impossible problems at 3 AM. Generates ideas faster than consequences.
```

### Baseline emotional weather
Field ID: `temperament`
Type: `textarea`

Example / placeholder:

```text
sleep-deprived optimism with a suspicious amount of competence
```

### Biggest contradiction
Field ID: `biggest_contradiction`
Type: `textarea`

Example / placeholder:

```text
Wants a stable life but keeps joining side quests that become companies.
```

## Motivation

What the person optimizes for, protects, refuses, and is trying to become.

### What actually matters to you?
Field ID: `ranked_values`
Type: `list`

Example / placeholder:

```text
friendship
freedom
curiosity
building real things
not leaving people stranded
truth even when annoying
```

### What keeps pulling you forward?
Field ID: `core_motivation`
Type: `textarea`

Example / placeholder:

```text
Make confusing situations survivable for the people they love.
```

### What they optimize for
Field ID: `what_they_optimize_for`
Type: `textarea`

Example / placeholder:

```text
Good signal, good people, enough battery, enough runway, nobody stranded at the wrong airport.
```

### What they refuse to compromise
Field ID: `what_they_refuse_to_compromise`
Type: `textarea`

Example / placeholder:

```text
They will not betray a vulnerable ally for convenience.
```

### What tempts them
Field ID: `what_tempts_them`
Type: `textarea`

Example / placeholder:

```text
Being needed, being right, having the answer first.
```

### What they are trying to become
Field ID: `what_they_are_trying_to_become`
Type: `textarea`

Example / placeholder:

```text
Someone who trusts others enough to share the load.
```

### Greatest need
Field ID: `greatest_need`
Type: `textarea`

Example / placeholder:

```text
Permission to not be useful every second.
```

### Greatest fear
Field ID: `greatest_fear`
Type: `textarea`

Example / placeholder:

```text
Being useless when people are counting on them.
```

### Moral center
Field ID: `moral_center`
Type: `textarea`

Example / placeholder:

```text
Do not abandon people just because the plan got inconvenient.
```

### Shadow desire
Field ID: `shadow_desire`
Type: `textarea`

Example / placeholder:

```text
To control the room so no one can fail.
```

## Decision-Making

How the profile chooses, fails, recovers, and handles risk.

### How you choose a path
Field ID: `decision_style`
Type: `select`

Options:
- Research First
- Intuition First
- Consensus Seeking
- Decisive
- Cautious
- Trial And Error
- Expert Guided
- Emotion Driven
- Principle Driven
- Opportunistic

### Risk appetite
Field ID: `risk_tolerance`
Type: `select`

Options:
- Low
- Medium
- High
- Variable

### How far ahead are you thinking?
Field ID: `planning_horizon`
Type: `select`

Options:
- Immediate
- Short Term
- Long Term
- Legacy

### What happens when the plan catches fire?
Field ID: `under_pressure_behavior`
Type: `textarea`

Example / placeholder:

```text
Gets quieter, prioritizes essentials, delegates cleanly, checks who has water and who has the keys.
```

### Common blind spot
Field ID: `common_blind_spot`
Type: `textarea`

Example / placeholder:

```text
Assumes everyone wants a solved problem more than emotional processing.
```

### Failure mode
Field ID: `failure_mode`
Type: `textarea`

Example / placeholder:

```text
Takes over and becomes terse.
```

### Recovery pattern
Field ID: `recovery_pattern`
Type: `textarea`

Example / placeholder:

```text
Apologizes with a concrete repair plan and revised boundaries.
```

### What makes them act
Field ID: `what_makes_them_act`
Type: `textarea`

Example / placeholder:

```text
A friend is at risk and no one owns the next step.
```

### What makes them freeze
Field ID: `what_makes_them_freeze`
Type: `textarea`

Example / placeholder:

```text
Competing needs where every option hurts someone.
```

## Social Model

How the profile bonds, disagrees, cares, and fits into groups.

### Role you fall into when people gather
Field ID: `group_role`
Type: `select`

Options:
- Leader
- Glue
- Wildcard
- Strategist
- Mediator
- Scout
- Mentor
- Fixer
- Instigator
- Observer
- Protector
- Entertainer
- Analyst

### Friendship style
Field ID: `friendship_style`
Type: `select`

Options:
- Protector
- Teacher
- Teammate
- Entertainer
- Problem Solver
- Listener
- Challenger
- Nurturer

### How you connect to the circle / projects / scenes
Field ID: `relationship_to_group_network`
Type: `textarea`

Example / placeholder:

```text
HTF / K Street friend, Discord regular, WCCC contributor, parkour-adjacent chaos witness, conference hallway ally.
```

### How people know you care
Field ID: `how_they_show_care`
Type: `textarea`

Example / placeholder:

```text
Makes the plan easier, remembers who needed a ride, checks on basics, sends the useful link at exactly the right time.
```

### How they receive care
Field ID: `how_they_receive_care`
Type: `textarea`

Example / placeholder:

```text
Responds to concrete help and honest presence.
```

### How they ask for help
Field ID: `how_they_ask_for_help`
Type: `textarea`

Example / placeholder:

```text
Frames it as a logistical need before naming feelings.
```

### Trust builders
Field ID: `trust_builders`
Type: `list`

Example / placeholder:

```text
follow-through
honest constraints
shared effort
```

### Trust breakers
Field ID: `trust_breakers`
Type: `list`

Example / placeholder:

```text
performative loyalty
needless secrecy
```

### Disagreement style
Field ID: `disagreement_style`
Type: `textarea`

Example / placeholder:

```text
Starts with reasons, then asks what outcome matters most.
```

### Apology style
Field ID: `apology_style`
Type: `textarea`

Example / placeholder:

```text
Direct apology plus changed process.
```

### Boundary style
Field ID: `boundary_style`
Type: `textarea`

Example / placeholder:

```text
Calm, firm, specific, with little appetite for debate.
```

### Loyalty triggers
Field ID: `loyalty_triggers`
Type: `list`

Example / placeholder:

```text
shared work
protecting someone vulnerable
```

### Betrayal triggers
Field ID: `betrayal_triggers`
Type: `list`

Example / placeholder:

```text
needless secrecy
using someone as a tool
```

## Relationship Graph

Repeatable relationship entries for future graph and simulation systems.

### Relationship entries
Field ID: `relationship_entries`
Type: `rows`

Example / placeholder:

```text
Kai | collaborator | 8 | 2 | 7 | 6 | loyal chaos | starts projects from jokes | old Discord-to-road-trip friend
```

Row format: `related person | relationship type | trust 1-10 | conflict 1-10 | history 1-10 | influence 1-10 | emotional tone | running dynamic | notes`

## Knowledge Domains

Repeatable expertise entries for dialogue, quest logic, and AI hallucination guardrails.

### Knowledge domains
Field ID: `knowledge_domain_entries`
Type: `rows`

Example / placeholder:

```text
Parkour | Expert | High | yes | founder-level historical knowledge | deep history | can explain origins and tradeoffs
```

Row format: `domain | expertise level | confidence level | lived experience | public authority | notes | dialogue use`

## Humor And Voice

How they sound in the group chat, on a road trip, during a build sprint, and after the plan has obviously gone sideways.

### How you communicate
Field ID: `communication_modes`
Type: `list`

Example / placeholder:

```text
voice memo philosopher
Discord essayist
dry one-liner sniper
whiteboard goblin
calm crisis operator
```

### Humor types
Field ID: `humor_types`
Type: `list`

Example / placeholder:

```text
deadpan
meme-literate
absurdist
founder gallows humor
accidental prophecy
```

### Voice rhythm
Field ID: `voice_rhythm`
Type: `textarea`

Example / placeholder:

```text
starts with 'okay so' then builds a whole theory; pauses for the bit; gets very precise when stakes rise
```

### Typical phrases
Field ID: `typical_phrases`
Type: `list`

Example / placeholder:

```text
This seems like a bad idea. Let's do it.
I have concerns, but not enough concerns.
We're already committed.
Nobody learns from success.
```

### Vocabulary / recurring words
Field ID: `vocabulary`
Type: `list`

Example / placeholder:

```text
vibes
constraints
signal
rugged
side quest
load-bearing
canonical
cursed but useful
```

### Topics you can talk about for hours
Field ID: `topics_they_bring_up`
Type: `list`

Example / placeholder:

```text
Parkour
AI agents
Crypto
Philosophy
Street photography
UFO lore
Fitness
History
Startups
Open source software
Dreams
Human behavior
```

### Topics to avoid or handle carefully
Field ID: `topics_they_avoid`
Type: `list`

Example / placeholder:

```text
private family details
medical specifics
real money amounts
old drama that is not public lore
```

### Representative quotes
Field ID: `example_quotes`
Type: `list`

Example / placeholder:

```text
How hard could it possibly be?
That went better than expected.
Let's never do that again.
See? Completely under control.
```

### Battle intro quote
Field ID: `battle_intro_quote`
Type: `textarea`

Example / placeholder:

```text
This seems like a bad idea. Let's do it.
I have concerns, but not enough concerns.
We're already committed.
```

### Victory quote
Field ID: `battle_victory_quote`
Type: `textarea`

Example / placeholder:

```text
Nobody learns from success.
That went better than expected.
Let's never do that again.
```

### Dialogue should do this
Field ID: `dialogue_dos`
Type: `list`

Example / placeholder:

```text
sound like a real friend
include practical weirdness
know the lore
keep the humor human
```

### Dialogue should avoid this
Field ID: `dialogue_donts`
Type: `list`

Example / placeholder:

```text
do not make them a tech bro caricature
do not turn every line into a pitch
do not make private lore public
```

## Conflict And Stress

How pressure changes behavior and what restores trust.

### When challenged, you usually...
Field ID: `when_challenged`
Type: `list`

Example / placeholder:

```text
research until the room gets tired
debate the premise
take control of logistics
make a joke to lower the voltage
```

### How friends can tell you are stressed
Field ID: `stress_signals`
Type: `list`

Example / placeholder:

```text
shorter sentences
less eye contact
more lists
starts cleaning the kitchen
opens the same tab six times
```

### What makes it worse
Field ID: `escalation_triggers`
Type: `list`

Example / placeholder:

```text
bad-faith arguments
avoidable risk to friends
people pretending there is no problem
last-minute mystery plans
```

### What helps you come back down
Field ID: `deescalation_methods`
Type: `list`

Example / placeholder:

```text
clear facts
food
a concrete next step
someone taking one task off the board
five minutes outside
```

### What you are good at when things get tense
Field ID: `conflict_strengths`
Type: `list`

Example / placeholder:

```text
separates facts from panic
names the real decision
protects the quiet person in the room
```

### Conflict weaknesses
Field ID: `conflict_weaknesses`
Type: `list`

Example / placeholder:

```text
can become terse
may over-control
```

### How you repair after a bad moment
Field ID: `repair_pattern`
Type: `textarea`

Example / placeholder:

```text
Direct apology, changed process, and a follow-up message after everyone has slept.
```

### How your voice changes under stress
Field ID: `pressure_dialogue_style`
Type: `textarea`

Example / placeholder:

```text
Shorter, more procedural, fewer jokes, more 'okay, first we solve the immediate problem.'
```

## Signature Behaviors

Repeatable behavior entries for recognition, comedy, and mechanics.

### Signature behaviors
Field ID: `signature_behavior_entries`
Type: `rows`

Example / placeholder:

```text
Opens twenty browser tabs | when fact-checking a Discord argument | Common | High | can trigger Research Spiral mechanic | mutters source comparisons
Finds the afterparty | conference hallway chaos | Sometimes | Medium | unlocks hidden social route | says 'I think I know a guy'
```

Row format: `behavior | context | frequency | comedic exaggeration potential | game-use notes | dialogue-use notes`

## Narrative Engine

The lore layer: stories people retell, chaos patterns, running bits, and what changes over time.

### What are you usually chasing?
Field ID: `personal_quest`
Type: `textarea`

Example / placeholder:

```text
Build something that probably should not work, make it useful, then accidentally turn it into a community.
```

### Growth arc
Field ID: `growth_arc`
Type: `textarea`

Example / placeholder:

```text
Learns to stop treating burnout as proof of commitment.
```

### Legendary story people tell about you
Field ID: `legendary_story`
Type: `textarea`

Example / placeholder:

```text
Accidentally slept through a conference and still made the keynote. Drove across three states for a single taco recommendation. Started a business from a Discord joke.
```

### Most chaotic moment
Field ID: `most_chaotic_moment`
Type: `textarea`

Example / placeholder:

```text
Missed a flight and accidentally joined a startup. Lost a wallet, found a friend. Ended up at Burning Man with 24 hours notice.
```

### Recurring internal conflict
Field ID: `recurring_internal_conflict`
Type: `textarea`

Example / placeholder:

```text
Wants peace but keeps volunteering for impossible projects because the group needs someone with a spreadsheet and a car.
```

### Shadow version
Field ID: `shadow_version`
Type: `textarea`

Example / placeholder:

```text
Becomes a sleep-deprived chaos engine who mistakes urgency for meaning.
```

### Best-self version
Field ID: `best_self_version`
Type: `textarea`

Example / placeholder:

```text
A grounded builder who can hold ambition, friendship, and rest at the same time.
```

### Running joke
Field ID: `running_joke`
Type: `textarea`

Example / placeholder:

```text
Always says they are leaving in ten minutes, then becomes load-bearing to the next three-hour conversation.
```

### Symbols / motifs
Field ID: `symbolic_motifs`
Type: `list`

Example / placeholder:

```text
gas station coffee
conference badge
open tabs
rooftop at sunrise
dusty road
half-built prototype
```

### Themes
Field ID: `character_themes`
Type: `list`

Example / placeholder:

```text
friendship under stress
ambition without permission
community as survival tech
making meaning from chaos
```

### Dramatic question
Field ID: `dramatic_question`
Type: `textarea`

Example / placeholder:

```text
Can you build impossible things without becoming impossible to live with?
```

### What actually changes them?
Field ID: `what_changes_them`
Type: `textarea`

Example / placeholder:

```text
A friend calling them out with love, a project failing honestly, a road trip that creates enough silence to think.
```

### What never changes?
Field ID: `what_never_changes`
Type: `textarea`

Example / placeholder:

```text
They will always notice the person quietly falling out of the group orbit.
```

### Role in the group story
Field ID: `role_in_group_story`
Type: `textarea`

Example / placeholder:

```text
The one who knows the lore, finds the workaround, and somehow has the charger.
```

### Scene where you shine
Field ID: `ideal_scene`
Type: `textarea`

Example / placeholder:

```text
3 AM kitchen table after the conference, everyone tired, the plan broken, and suddenly they make it make sense.
```

### Scene that breaks your brain
Field ID: `nightmare_scene`
Type: `textarea`

Example / placeholder:

```text
A high-stakes group decision with bad WiFi, no clear owner, and three people pretending they are fine.
```

## Game Mechanics

How this person turns into mechanics, abilities, NPC behavior, and party utility without sanding off the real-world weirdness.

### Project role / character role
Field ID: `suggested_class_role`
Type: `text`

Example / placeholder:

```text
Community Builder, Organizer, Lore Keeper, Artist, Developer, Historian, Researcher, Event Instigator, Professional Bad Influence, Spreadsheet Wizard, Meme Curator, Fixer
```

### Potential party roles
Field ID: `potential_party_roles`
Type: `list`

Example / placeholder:

```text
organizer
researcher
hype engine
chaos dampener
road captain
lore keeper
bad idea validator
```

### Passive abilities
Field ID: `passive_abilities`
Type: `list`

Example / placeholder:

```text
can find WiFi anywhere
knows somebody who knows somebody
spots the weird incentive
remembers obscure lore
```

### Active abilities
Field ID: `active_abilities`
Type: `list`

Example / placeholder:

```text
turns panic into a checklist
makes a Discord thread useful
finds cheap flights
turns a joke into a prototype
```

### Traversal abilities
Field ID: `traversal_abilities`
Type: `list`

Example / placeholder:

```text
can sleep in airports
navigates cities by vibes and coffee shops
finds the back entrance
climbs the thing safely
```

### Support abilities
Field ID: `support_abilities`
Type: `list`

Example / placeholder:

```text
talks people off ledges
feeds the team
keeps the group chat alive
reminds people water exists
```

### Social abilities
Field ID: `social_abilities`
Type: `list`

Example / placeholder:

```text
befriends the venue staff
reads the room
finds the afterparty
knows when the bit has gone too far
```

### Research abilities
Field ID: `research_abilities`
Type: `list`

Example / placeholder:

```text
weird internet archaeology
source triangulation
AI agent prototyping
crypto wallet debugging
parkour history recall
```

### Weaknesses / exploit conditions
Field ID: `weaknesses`
Type: `list`

Example / placeholder:

```text
low battery
bad coffee
no sleep
ambiguous plans
someone says 'quick call'
```

### Status effects
Field ID: `status_effects`
Type: `list`

Example / placeholder:

```text
Caffeinated
Rugged
In Flow
Overclocked
Airport Mode
Research Spiral
Conference Brain
```

### Special dialogue triggers
Field ID: `special_dialogue_triggers`
Type: `list`

Example / placeholder:

```text
someone says 'how hard could it be?'
a wallet is missing
a plan has no owner
someone opens a 40-tab research stack
```

### Failure / comedy mechanics
Field ID: `failure_comedy_mechanics`
Type: `list`

Example / placeholder:

```text
generates ideas faster than consequences
gets on the wrong bus but finds better lore
forgets the charger but has three adapters
```

### Power curve
Field ID: `power_curve`
Type: `textarea`

Example / placeholder:

```text
Starts as a useful weirdo, becomes the person everyone quietly routes impossible problems through.
```

### Balance notes
Field ID: `balance_notes`
Type: `textarea`

Example / placeholder:

```text
Strong improvisation should cost sleep, battery, social credit, or snacks.
```

## AI Generation

Prompt-ready summaries, guardrails, and tags so agents do not sand the weird edges off.

### One-line character read
Field ID: `canonical_short_description`
Type: `textarea`

Example / placeholder:

```text
Sleep-deprived builder with road-trip instincts, Discord lore, and the suspicious ability to make bad plans useful.
```

### Longer AI context summary
Field ID: `canonical_long_description`
Type: `textarea`

Example / placeholder:

```text
A capable internet friend shaped by hacker houses, parkour culture, startup chaos, and late-night conversations; funny under pressure, useful in emergencies, allergic to fake certainty.
```

### Art prompt summary
Field ID: `art_prompt_summary`
Type: `textarea`

Example / placeholder:

```text
modern hacker-house roadtrip character, conference badge, travel-worn hoodie, bright tired eyes, backpack full of impossible tools
```

### Behavioral prompt summary
Field ID: `behavioral_prompt_summary`
Type: `textarea`

Example / placeholder:

```text
Protect the group, follow the weird lead, ask practical questions, keep the humor sharp, and remember that friendship is part logistics.
```

### Dialogue prompt summary
Field ID: `dialogue_prompt_summary`
Type: `textarea`

Example / placeholder:

```text
Write like a real group-chat regular: specific, funny, tired, capable, slightly too online, never generic.
```

### Game design summary
Field ID: `game_design_summary`
Type: `textarea`

Example / placeholder:

```text
Support/chaos utility character who converts bad plans into survivable adventures and unlocks hidden social routes.
```

### Do-not-misrepresent list
Field ID: `do_not_misrepresent`
Type: `list`

Example / placeholder:

```text
Do not make them cruel
Do not make them a generic tech bro
Do not reveal private contact information
Do not flatten the weirdness into productivity-speak
```

### Sensitive topics
Field ID: `sensitive_topics`
Type: `list`

Example / placeholder:

```text
family details
medical specifics
real finances
old drama
private relationships
```

### Safe exaggerations
Field ID: `safe_exaggerations`
Type: `list`

Example / placeholder:

```text
opens too many research tabs
can find WiFi anywhere
has a plan for snacks
knows somebody who knows somebody
```

### Unsafe exaggerations
Field ID: `unsafe_exaggerations`
Type: `list`

Example / placeholder:

```text
cruelty
actual paranoia
real legal trouble
private financial losses
```

### Prompt tags
Field ID: `prompt_tags`
Type: `list`

Example / placeholder:

```text
hacker-house
roadtrip
AI-agents
crypto-conference
parkour-lore
deadpan
```

### Negative prompt tags
Field ID: `negative_prompt_tags`
Type: `list`

Example / placeholder:

```text
corporate stock photo
resume headshot
quest hero cosplay
generic cyberpunk villain
```

## Project Usage

Where this profile can show up: cruise NPC, Discord lore, art prompts, internal memory, game systems, or future chaos.

### Where can this be used?
Field ID: `approved_projects`
Type: `list`

Example / placeholder:

```text
HTF
K Street
West Coast Crypto Cruise
Shared Person Database
AI Dialogue Agent
Art Generation
Group Memory
Private Review
Future Weird Project
```

### Why do you belong in the database?
Field ID: `project_relevance_notes`
Type: `textarea`

Example / placeholder:

```text
Good for cruise NPC energy, group memory, social cameos, late-night dialogue, and support-character writing.
```

### Project-specific notes / boundaries
Field ID: `project_specific_notes`
Type: `textarea`

Example / placeholder:

```text
Okay as a background NPC on West Coast Crypto Cruise; ask before making me a main character or romance subplot.
```

### Canon level
Field ID: `canon_level`
Type: `select`

Options:
- Raw
- Semi Canon
- Canon
- Parody Only
- Private Reference Only

## Source Notes

Source provenance and review information.

### Reference photos / source images
Field ID: `source_images`
Type: `list`

Example / placeholder:

```text
Source Images/Packet Ghost/approved-conference-reference.jpg
```

### Source conversations
Field ID: `source_interviews`
Type: `list`

Example / placeholder:

```text
2026-06 intake form
voice memo after the road trip
Discord thread that should probably be summarized
```

### Source notes
Field ID: `source_notes`
Type: `textarea`

Example / placeholder:

```text
Self-submitted form plus later lore review; private images stay in the cloud drive, not the public repo.
```

### Contributors
Field ID: `contributors`
Type: `list`

Example / placeholder:

```text
self-submitted
```

### Reviewers
Field ID: `reviewers`
Type: `list`

Example / placeholder:

```text
HTF / K Street reviewer
```

### Last reviewed
Field ID: `last_reviewed`
Type: `text`

Example / placeholder:

```text
2026-06-01
```

### Accuracy confidence
Field ID: `accuracy_confidence`
Type: `select`

Options:
- Low
- Medium
- High
- Unreviewed

### Questions for later
Field ID: `unresolved_questions`
Type: `list`

Example / placeholder:

```text
Confirm art prompt permission
Ask if the legendary taco story is public-safe
Check whether WCCC can use this as an NPC cameo
```

## Specialized Profile Types

Optional fields for AI agents, historical figures, pets, public figures, deceased people, organizations, and other profiles that are not a living friend filling out their own form.

### AI agent capabilities
Field ID: `agent_capabilities`
Type: `list`

Example / placeholder:

```text
summarize project memory
answer lore questions
generate NPC dialogue
triage source notes
```

### AI agent limitations
Field ID: `agent_limitations`
Type: `list`

Example / placeholder:

```text
cannot claim to be the real person
cannot invent consent
cannot expose private source notes
```

### AI agent memory scope
Field ID: `agent_memory_scope`
Type: `textarea`

Example / placeholder:

```text
May use approved profile fields, approved project notes, and public-safe relationship summaries only.
```

### AI agent tool access
Field ID: `agent_tool_access`
Type: `list`

Example / placeholder:

```text
read approved profile JSON
search project archive
export markdown summaries
```

### AI agent operating instructions
Field ID: `agent_operating_instructions`
Type: `textarea`

Example / placeholder:

```text
Be useful, cautious with private data, cite source notes when uncertain, and respect restricted uses.
```

### Historical sources
Field ID: `historical_sources`
Type: `list`

Example / placeholder:

```text
public archive link
book citation
interview transcript
family-approved notes
```

### Historical confidence
Field ID: `historical_confidence`
Type: `select`

Options:
- Unreviewed
- Low
- Medium
- High
- Contested

### Contested claims
Field ID: `contested_claims`
Type: `list`

Example / placeholder:

```text
birth date disputed
story appears in one source only
family accounts disagree
```

### Scholarly / source consensus
Field ID: `scholarly_consensus`
Type: `textarea`

Example / placeholder:

```text
Most reliable sources agree on the broad timeline, but details of the event are contested.
```

### Species
Field ID: `species`
Type: `text`

Example / placeholder:

```text
dog, cat, parrot, horse
```

### Breed / type
Field ID: `breed`
Type: `text`

Example / placeholder:

```text
mutt, orange tabby, border collie mix
```

### Handler / caretaker relationship
Field ID: `handler_relationship`
Type: `textarea`

Example / placeholder:

```text
Submitted by caretaker; use only family-approved photos and light fictionalization.
```

### Behavioral traits
Field ID: `behavioral_traits`
Type: `list`

Example / placeholder:

```text
steals socks
guards the door
knows who needs comfort
hates skateboards
```

### Care requirements
Field ID: `care_requirements`
Type: `list`

Example / placeholder:

```text
do not depict unsafe food
avoid medical details unless approved
ask caretaker before public use
```

## Governance And Lifecycle

Ownership, review history, retention, and export permissions for serious long-term profile management.

### Profile owner
Field ID: `profile_owner`
Type: `text`

Example / placeholder:

```text
self, guardian, project archive, estate, public-source reviewer
```

### Review owner
Field ID: `review_owner`
Type: `text`

Example / placeholder:

```text
trusted reviewer / project archivist
```

### Approval history
Field ID: `approval_history_entries`
Type: `rows`

Example / placeholder:

```text
2026-06-05 | reviewer_name | reviewed | consent checked; relationship details reviewer-only
```

Row format: `date | reviewer | status | notes`

### Change log
Field ID: `change_log_entries`
Type: `rows`

Example / placeholder:

```text
2026-06-05 | reviewer_name | added restricted uses | privacy hardening
```

Row format: `date | editor | change summary | reason`

### Retention policy
Field ID: `retention_policy`
Type: `textarea`

Example / placeholder:

```text
Keep while approved project use is active; re-review yearly or when consent changes.
```

### Expiration / re-review date
Field ID: `expiration_date`
Type: `text`

Example / placeholder:

```text
2027-06-05
```

### Archive status
Field ID: `archive_status`
Type: `select`

Options:
- active
- needs_review
- archived
- withdrawn
- do_not_use

### Export permissions
Field ID: `export_permissions`
Type: `list`

Example / placeholder:

```text
markdown_profile allowed
agent_context reviewer_only
relationship_graph private
```

### Allowed export targets
Field ID: `allowed_export_targets`
Type: `list`

Example / placeholder:

```text
private project archive
approved game build
review packet
local AI workspace
```

## Generated Content

Editable generated outputs. Buttons at the top can fill these from the structured fields.

### Character summary
Field ID: `character_summary`
Type: `textarea`

### AI context
Field ID: `ai_context_output`
Type: `textarea`

### Art prompt
Field ID: `art_prompt_output`
Type: `textarea`

### Dialogue prompt
Field ID: `dialogue_prompt_output`
Type: `textarea`

### NPC summary
Field ID: `npc_summary`
Type: `textarea`

### Relationship summary
Field ID: `relationship_summary`
Type: `textarea`

## Controlled Vocabularies

```json
{
  "asset_types": [
    "reference_photo",
    "portrait",
    "full_body",
    "sprite",
    "background",
    "voice_sample",
    "document",
    "model_3d",
    "logo_symbol",
    "moodboard",
    "character_art",
    "sprite_sheet",
    "pixel_art",
    "token",
    "concept_art",
    "ui_graphic",
    "logo",
    "symbol",
    "icon",
    "animation",
    "video",
    "voice_reference",
    "audio_clip",
    "music_reference",
    "pdf",
    "3d_model",
    "texture",
    "screenshot",
    "historical_reference",
    "other"
  ],
  "entity_types": [
    "person",
    "relationship",
    "organization",
    "location",
    "event",
    "asset",
    "story_object",
    "project",
    "faction",
    "concept"
  ],
  "entity_subtypes": [
    "real_person",
    "fictional_character",
    "npc",
    "ai_agent",
    "organization",
    "pet",
    "historical_figure",
    "deceased_person",
    "public_figure",
    "family_member",
    "partner_spouse",
    "child_minor",
    "collaborator",
    "other"
  ],
  "consent_bases": [
    "self_submitted",
    "guardian_submitted",
    "public_domain_person",
    "historical_record",
    "estate_permission",
    "community_documentation",
    "fictional_creation",
    "organization_authorized",
    "unknown"
  ],
  "minor_statuses": [
    "not_minor",
    "minor",
    "unknown"
  ],
  "relationship_visibility": [
    "private",
    "reviewer_only",
    "project_only",
    "exportable"
  ],
  "relationship_types": [
    "friend",
    "family",
    "collaborator",
    "mentor",
    "rival",
    "ex",
    "project_member",
    "location_association",
    "event_participant",
    "organization_member",
    "inspiration_source",
    "fictionalized_as"
  ]
}
```

## Sample Profile JSON

```json
{
  "schema_version": "3.0.0",
  "schema_id": "kstreet_person_profile.v3",
  "profile_id": "example-person",
  "created_at": "2026-06-01T00:00:00.000Z",
  "updated_at": "2026-06-01T00:00:00.000Z",
  "entity": {
    "entity_id": "person_example",
    "entity_type": "person",
    "entity_subtype": "real_person",
    "display_name": "Packet Ghost",
    "created_at": "2026-06-01T00:00:00.000Z",
    "updated_at": "2026-06-01T00:00:00.000Z",
    "tags": [
      "sample",
      "person",
      "htf",
      "k-street",
      "wccc"
    ],
    "notes": "Fictional sample root person entity with HTF / K Street / WCCC flavor.",
    "relationships": [
      {
        "target_entity_id": "org_shared_group",
        "relationship_type": "associated_with",
        "strength": "7",
        "notes": "Sample graph link for a friend-circle profile."
      }
    ]
  },
  "consent": {
    "permission_to_store": true,
    "permission_to_fictionalize": true,
    "permission_for_ai_dialogue": true,
    "permission_for_art_generation": false,
    "permission_for_cross_project_reuse": true,
    "permission_for_relationship_simulation": true,
    "contact_for_questions": false,
    "consent_basis": "fictional_creation",
    "minor_status": "not_minor",
    "guardian_consent_required": false,
    "guardian_consent_confirmed": false,
    "consent_source": "sample self-submission",
    "consent_date": "2026-06-01",
    "consent_method": "example JSON record",
    "withdrawal_requested": false,
    "withdrawal_date": "",
    "relationship_visibility": "reviewer_only",
    "restricted_uses": [
      "romance",
      "dating_sim",
      "public ads",
      "training_data"
    ],
    "sensitive_topics_to_avoid": [
      "private family details"
    ],
    "consent_notes": "Sample record only. Do not treat as a real submission. Keep private contact, real names, source images, and boundaries out of public exports unless explicitly approved."
  },
  "identity": {
    "display_name": "Packet Ghost",
    "entity_subtype": "real_person",
    "real_name_optional": "",
    "optional_contact": "",
    "in_world_name": "Packet Ghost",
    "short_bio": "A sleep-deprived internet friend who fixes weird problems, finds the useful room at conferences, and turns Discord jokes into actual project plans.",
    "three_word_vibe": "Chaotic, creative, caffeinated",
    "animal_affinity": "Crow with a laptop bag",
    "current_obsession": "Local AI models, Bitcoin self-custody, retro RPG design, parkour history, and weird internet archaeology.",
    "nicknames": [
      "Packet Ghost",
      "WiFi Oracle"
    ],
    "pronouns": "they/them",
    "age_range": "30s",
    "current_location": "Usually between the group chat, a hacker house kitchen, and the crypto conference hallway track",
    "origin_location": "Parkour forums and long road trips",
    "communities": [
      "HTF",
      "K Street",
      "West Coast Crypto Cruise",
      "parkour community",
      "local AI Discord"
    ],
    "roles": [
      "lore keeper",
      "developer",
      "event instigator",
      "meme curator",
      "fixer"
    ],
    "professions": [
      "developer",
      "researcher",
      "full-time side quest"
    ],
    "identity_tags": [
      "hacker-house",
      "roadtrip",
      "ai-agents",
      "crypto-conference",
      "parkour-lore"
    ]
  },
  "appearance": {
    "height_build": "medium height, parkour-adjacent posture, hard to lose in a crowd",
    "hair": "messy travel hair, usually under a beanie by day three",
    "eyes": "alert, sleep-deprived, always scanning for outlets, exits, and the bit",
    "face_features": "expressive eyebrows, too-aware resting face, looks like they just read the room and the room failed QA",
    "skin_tone": "",
    "distinguishing_marks": "old conference wristband, scuffed shoes, hoodie with mystery pockets",
    "silhouette": "hoodie, backpack, forward lean, looks ready to climb a wall or fix a router",
    "everyday_clothing": "black hoodie, conference badge, trail shoes, cargo pants, jacket with too many pockets",
    "iconic_outfit": "sun-faded camp shirt, beat-up sneakers, sunglasses at night, backpack that has seen things",
    "accessories": "camera, pocket notebook, hardware wallet, carabiner, old lanyard",
    "carried_items": "half-charged laptop, coffee thermos, phone with 200 open tabs, multi-tool",
    "signature_item": "Backpack containing an unknown dimension",
    "default_expression": "half amused, half concerned, already debugging the situation",
    "movement_body_language": "paces while thinking, perches on furniture wrong, talks with hands, moves like the floor is optional",
    "image_prompt_notes": "modern internet nomad, hacker-house roadtrip energy, conference badge, travel-worn hoodie, bright tired eyes",
    "negative_image_prompt_notes": "avoid corporate mascot, resume headshot, generic tech bro, quest hero cosplay, or villain caricature"
  },
  "asset_library": {
    "primary_reference_asset_id": "asset_example_face_reference",
    "primary_portrait_asset_id": "asset_example_portrait",
    "primary_sprite_asset_id": "asset_example_sprite",
    "primary_model_asset_id": "",
    "primary_face_reference_asset_id": "asset_example_face_reference",
    "primary_body_reference_asset_id": "",
    "primary_outfit_reference_asset_id": "",
    "primary_token_asset_id": "",
    "primary_voice_reference_asset_id": "",
    "assets": [
      {
        "asset_id": "asset_example_face_reference",
        "asset_type": "reference_photo",
        "title": "WCCC Hallway Face Reference",
        "description": "Approved private face reference metadata from conference hallway chaos.",
        "linked_entity_id": "person_example",
        "linked_project": "West Coast Crypto Cruise",
        "file_name": "packet-ghost-hallway-reference.jpg",
        "file_extension": "jpg",
        "file_size": "sample metadata only",
        "url": "",
        "local_path": "Source Images/Packet Ghost/packet-ghost-hallway-reference.jpg",
        "thumbnail_url": "",
        "date_added": "2026-06-01",
        "last_modified": "2026-06-01",
        "source": "sample self-submission",
        "creator": "Packet Ghost",
        "copyright_holder": "Packet Ghost",
        "license_type": "private",
        "consent_status": "private_only",
        "canon_level": "primary_reference",
        "tags": [
          "face",
          "current",
          "portrait",
          "conference",
          "late-night"
        ],
        "associated_projects": [
          "West Coast Crypto Cruise",
          "HTF",
          "K Street"
        ],
        "use_cases": [
          "portrait_generation",
          "art_generation"
        ],
        "do_not_use_for": [
          "public ads",
          "romance subplot without consent"
        ],
        "notes": "Sample metadata only; no real image included. Private source files stay outside the public repo."
      }
    ],
    "asset_groups": [
      {
        "group_id": "group_example_face",
        "group_name": "Packet Ghost Face References",
        "description": "Approved references where the person looks like themselves, not a stock photo.",
        "asset_ids": [
          "asset_example_face_reference"
        ],
        "tags": [
          "face"
        ],
        "notes": "Private source files stay outside the public repo."
      }
    ],
    "style_guides": [
      {
        "guide_name": "Retro JRPG Style",
        "description": "Readable roadtrip RPG interpretation.",
        "asset_ids": [
          "asset_example_sprite"
        ],
        "prompt_notes": "Readable silhouette, expressive idle pose, travel-worn outfit, useful chaos.",
        "negative_prompt_notes": "Avoid polished resume headshot energy."
      }
    ]
  },
  "knowledge_graph": {
    "graph_schema_version": "4.0.0-foundation",
    "graph_id": "person_example_graph",
    "root_entity_id": "person_example",
    "entities": [
      {
        "entity_id": "person_example",
        "entity_type": "person",
        "entity_subtype": "real_person",
        "display_name": "Packet Ghost",
        "created_at": "2026-06-01T00:00:00.000Z",
        "updated_at": "2026-06-01T00:00:00.000Z",
        "tags": [
          "sample",
          "person",
          "htf",
          "k-street",
          "wccc"
        ],
        "notes": "Fictional sample root person entity with group-culture examples.",
        "relationships": [
          {
            "target_entity_id": "org_shared_group",
            "relationship_type": "associated_with",
            "strength": "7",
            "notes": "Sample graph link."
          }
        ],
        "profile_ref": "current_profile"
      },
      {
        "entity_id": "org_shared_group",
        "entity_type": "organization",
        "display_name": "HTF / K Street",
        "created_at": "2026-06-01",
        "updated_at": "2026-06-01",
        "tags": [
          "friend-circle",
          "projects",
          "organization"
        ],
        "notes": "Sample organization node for the shared circle.",
        "relationships": []
      },
      {
        "entity_id": "asset_example_face_reference",
        "entity_type": "asset",
        "display_name": "WCCC Hallway Face Reference",
        "created_at": "2026-06-01",
        "updated_at": "2026-06-01",
        "tags": [
          "face",
          "current",
          "portrait",
          "conference"
        ],
        "notes": "Sample metadata only; no real image included.",
        "relationships": [
          {
            "target_entity_id": "person_example",
            "relationship_type": "asset_of",
            "strength": "7",
            "notes": "portrait_generation, art_generation"
          }
        ],
        "asset_ref": "asset_example_face_reference"
      }
    ],
    "relationship_entities": [
      {
        "relationship_id": "rel_example_friend",
        "person_a": "person_example",
        "person_b": "person_friend",
        "relationship_type": "friend",
        "trust_level": "8",
        "conflict_level": "2",
        "history_level": "5",
        "influence_level": "6",
        "communication_frequency": "regular",
        "relationship_health": "healthy",
        "running_dynamic": "practical support plus dry humor plus mutually bad ideas",
        "inside_jokes": "airport floor lore; 'we're already committed'",
        "shared_history": "Discord-to-road-trip friendship with several projects that escaped containment",
        "relationship_notes": "Sample public-safe relationship entity.",
        "confidence_level": "high",
        "canon_level": "example_only",
        "consent_status": "approved"
      }
    ],
    "organizations": [
      {
        "entity_id": "org_shared_group",
        "organization_name": "HTF / K Street",
        "founding_date": "2026-01-01",
        "description": "Strange capable circle building games, AI tools, events, and lore.",
        "members": [
          "person_example"
        ],
        "roles": [
          "developer",
          "lore keeper",
          "fixer"
        ],
        "projects": [
          "project_wccc"
        ],
        "associated_locations": [
          "loc_hacker_house_kitchen"
        ],
        "assets": [
          "asset_example_face_reference"
        ],
        "history": "Grew through Discord threads, road trips, late-night builds, and occasional poor decisions.",
        "status": "active"
      }
    ],
    "factions": [],
    "locations": [
      {
        "entity_id": "loc_hacker_house_kitchen",
        "display_name": "Hacker House Kitchen",
        "location_type": "real_world",
        "description": "3 AM planning table, half-cleaned whiteboard, someone's laptop fan screaming.",
        "associated_people": [
          "person_example"
        ],
        "associated_events": [
          "event_midnight_build"
        ],
        "associated_organizations": [
          "org_shared_group"
        ],
        "associated_assets": [],
        "coordinates_optional": "",
        "tags": [
          "hacker-house",
          "build-sprint"
        ]
      }
    ],
    "events": [
      {
        "entity_id": "event_midnight_build",
        "title": "Midnight Build Sprint",
        "event_date": "2026-06-01",
        "participants": [
          "person_example"
        ],
        "organizations": [
          "org_shared_group"
        ],
        "locations": [
          "loc_hacker_house_kitchen"
        ],
        "assets": [],
        "stories": [
          "story_startup_from_joke"
        ],
        "outcomes": "Prototype worked badly enough to continue.",
        "notes": "Approximate date; public-safe sample event."
      }
    ],
    "assets": [],
    "story_objects": [
      {
        "entity_id": "story_startup_from_joke",
        "title": "Started A Business From A Discord Joke",
        "summary": "A side project escaped containment and became group lore.",
        "participants": [
          "person_example"
        ],
        "related_events": [
          "event_midnight_build"
        ],
        "related_locations": [
          "loc_hacker_house_kitchen"
        ],
        "related_people": [
          "person_example"
        ],
        "related_assets": [],
        "importance": "high",
        "canonical_status": "semi_canon"
      }
    ],
    "projects": [
      {
        "entity_id": "project_wccc",
        "project_name": "West Coast Crypto Cruise",
        "description": "Game/narrative project about crypto conference chaos, friendship, and weird competence.",
        "contributors": [
          "person_example"
        ],
        "organizations": [
          "org_shared_group"
        ],
        "assets": [],
        "related_people": [
          "person_example"
        ],
        "related_events": [
          "event_midnight_build"
        ],
        "status": "active",
        "repository_links": []
      }
    ],
    "concepts": [
      {
        "entity_id": "concept_practical_care",
        "concept_name": "Hallway Track Lore",
        "definition": "The real story that happens between official agenda items.",
        "summary": "Conference friendships, rumors, jokes, and useful accidents.",
        "related_people": [
          "person_example"
        ],
        "related_projects": [
          "project_wccc"
        ],
        "related_stories": [
          "story_startup_from_joke"
        ],
        "related_assets": []
      }
    ],
    "links": [
      {
        "target_entity_id": "org_shared_group",
        "relationship_type": "associated_with",
        "strength": "7",
        "notes": "Sample graph link."
      }
    ],
    "timeline": [
      {
        "date": "2026-06-01",
        "entity_id": "event_midnight_build",
        "type": "event",
        "title": "The joke became a build",
        "notes": "Discord bit turned into an actual project plan.",
        "related_entities": [
          "person_example",
          "org_shared_group"
        ]
      }
    ],
    "generated": {
      "timeline_summary": "",
      "lore_summary": "",
      "ai_agent_context": ""
    }
  },
  "personality": {
    "classification_note": "These tags are descriptive shortcuts for writing and search, not psychological assessments or diagnoses.",
    "primary_social_energy": "Chaotic Instigator",
    "secondary_social_energy": "Deadpan Commentator",
    "personality_traits": [
      "curious",
      "stubborn",
      "reliable",
      "chaotic",
      "caffeinated"
    ],
    "custom_traits": [
      "can smell bad incentives",
      "answers Discord at impossible hours",
      "keeps receipts in the spiritual sense"
    ],
    "strengths": [
      "fixing servers at 2 AM",
      "finding cheap flights",
      "talking people off ledges",
      "remembering obscure lore"
    ],
    "flaws": [
      "overcommits to the bit",
      "forgets sleep is load-bearing",
      "buys the top",
      "turns every problem into a research spiral"
    ],
    "character_archetype": "Terminal Wizard / Roadtrip Bard",
    "signature_ability": "Can find WiFi anywhere and somehow always knows somebody who knows somebody.",
    "temperament": "sleep-deprived optimism with a suspicious amount of competence",
    "biggest_contradiction": "wants a stable life but keeps joining side quests that become companies"
  },
  "motivation": {
    "core_motivation": "Make confusing situations survivable for the people they love.",
    "ranked_values": [
      "Friendship",
      "Freedom",
      "Curiosity",
      "Building real things"
    ],
    "what_they_optimize_for": "good signal, good people, enough battery, enough runway, nobody stranded at the wrong airport",
    "what_they_refuse_to_compromise": "will not betray a vulnerable ally for convenience",
    "what_tempts_them": "being needed, being right, having the answer first",
    "what_they_are_trying_to_become": "someone who trusts others enough to share the load",
    "greatest_need": "permission to not be useful every second",
    "greatest_fear": "being useless when people are counting on them",
    "moral_center": "care is practical, but people are never merely problems",
    "shadow_desire": "to control the room so no one can fail"
  },
  "decision_making": {
    "decision_style": "Research First",
    "risk_tolerance": "Variable",
    "planning_horizon": "Long Term",
    "under_pressure_behavior": "gets quieter, prioritizes essentials, delegates cleanly, checks who has water and who has the keys",
    "common_blind_spot": "assumes people want solved problems more than emotional processing",
    "failure_mode": "takes over and becomes terse",
    "recovery_pattern": "apologizes with a concrete repair plan",
    "what_makes_them_act": "a friend is at risk and no one owns the next step",
    "what_makes_them_freeze": "competing needs where every option hurts someone"
  },
  "social_model": {
    "group_role": "Fixer",
    "friendship_style": "Problem Solver",
    "relationship_to_group_network": "Sample-safe HTF / K Street friend, Discord regular, and WCCC-ready background NPC energy.",
    "how_they_show_care": "makes the plan easier, remembers who needed a ride, sends the useful link at exactly the right time",
    "how_they_receive_care": "responds to concrete help and honest presence",
    "how_they_ask_for_help": "frames it as a logistical need first",
    "trust_builders": [
      "follow-through",
      "honest constraints"
    ],
    "trust_breakers": [
      "performative loyalty",
      "needless secrecy"
    ],
    "disagreement_style": "starts with reasons, then asks what outcome matters most",
    "apology_style": "direct apology plus changed process",
    "boundary_style": "calm, firm, specific",
    "loyalty_triggers": [
      "shared work",
      "protecting someone vulnerable"
    ],
    "betrayal_triggers": [
      "using someone as a tool"
    ]
  },
  "relationship_graph": [],
  "knowledge_domains": [
    {
      "domain": "Weird Internet Archaeology",
      "expertise_level": "Advanced",
      "confidence_level": "High",
      "lived_experience": "yes",
      "public_authority": "informal",
      "notes": "finds the old post, dead repo, or Discord lore everyone half-remembers",
      "dialogue_use": "can explain why the cursed old thing still matters"
    }
  ],
  "humor_and_voice": {
    "communication_modes": [
      "Discord essayist",
      "dry one-liner sniper",
      "voice memo philosopher"
    ],
    "humor_types": [
      "deadpan",
      "meme-literate",
      "absurdist",
      "founder gallows humor"
    ],
    "voice_rhythm": "starts with 'okay so' then builds a whole theory; pauses for the bit; gets very precise when stakes rise",
    "typical_phrases": [
      "This seems like a bad idea. Let's do it.",
      "I have concerns, but not enough concerns.",
      "We're already committed."
    ],
    "vocabulary": [
      "vibes",
      "constraints",
      "signal",
      "rugged",
      "side quest",
      "load-bearing",
      "canonical",
      "cursed but useful"
    ],
    "topics_they_bring_up": [
      "Parkour",
      "AI agents",
      "Crypto",
      "Philosophy",
      "Street photography",
      "UFO lore",
      "Startups",
      "Open source software"
    ],
    "topics_they_avoid": [
      "private family details"
    ],
    "example_quotes": [
      "How hard could it possibly be?",
      "That went better than expected.",
      "Let's never do that again."
    ],
    "battle_intro_quote": "This seems like a bad idea. Let's do it.",
    "battle_victory_quote": "See? Completely under control.",
    "dialogue_dos": [
      "sound like a real friend",
      "include practical weirdness",
      "know the lore"
    ],
    "dialogue_donts": [
      "do not make them a tech bro caricature",
      "do not turn every line into a pitch",
      "do not make private lore public"
    ]
  },
  "conflict_and_stress": {
    "when_challenged": [
      "research until the room gets tired",
      "debate the premise",
      "take control of logistics",
      "make a joke to lower the voltage"
    ],
    "stress_signals": [
      "shorter sentences",
      "more lists",
      "starts cleaning the kitchen",
      "opens the same tab six times"
    ],
    "escalation_triggers": [
      "bad-faith arguments",
      "avoidable risk to friends",
      "last-minute mystery plans"
    ],
    "deescalation_methods": [
      "clear facts",
      "food",
      "a concrete next step",
      "five minutes outside"
    ],
    "conflict_strengths": [
      "separates facts from panic",
      "names the real decision",
      "protects the quiet person in the room"
    ],
    "conflict_weaknesses": [
      "can become terse",
      "may over-control"
    ],
    "repair_pattern": "direct apology, changed process, and a follow-up message after everyone has slept",
    "pressure_dialogue_style": "shorter, more procedural, fewer jokes, more 'okay, first we solve the immediate problem'"
  },
  "signature_behaviors": [
    {
      "behavior": "opens twenty browser tabs",
      "context": "fact-checking a Discord argument",
      "frequency": "Common",
      "comedic_exaggeration_potential": "Medium",
      "game_use_notes": "can trigger Research Spiral mechanic",
      "dialogue_use_notes": "mutters source comparisons"
    }
  ],
  "narrative_engine": {
    "personal_quest": "build something that probably should not work, make it useful, then accidentally turn it into a community",
    "growth_arc": "learns to stop treating burnout as proof of commitment",
    "legendary_story": "Accidentally slept through a conference and still made the keynote. Later drove across three states for a single taco recommendation.",
    "most_chaotic_moment": "Missed a flight and accidentally joined a startup.",
    "recurring_internal_conflict": "wants peace but keeps volunteering for impossible projects because the group needs someone with a spreadsheet and a car",
    "shadow_version": "sleep-deprived chaos engine who mistakes urgency for meaning",
    "best_self_version": "grounded builder who can hold ambition, friendship, and rest at the same time",
    "running_joke": "always says they are leaving in ten minutes, then becomes load-bearing to the next three-hour conversation",
    "symbolic_motifs": [
      "gas station coffee",
      "conference badge",
      "open tabs",
      "rooftop at sunrise",
      "dusty road"
    ],
    "character_themes": [
      "friendship under stress",
      "ambition without permission",
      "community as survival tech",
      "making meaning from chaos"
    ],
    "dramatic_question": "can you build impossible things without becoming impossible to live with?",
    "what_changes_them": "a friend calling them out with love, a project failing honestly, a road trip that creates enough silence to think",
    "what_never_changes": "they will always notice the person quietly falling out of the group orbit",
    "role_in_group_story": "the one who knows the lore, finds the workaround, and somehow has the charger",
    "ideal_scene": "3 AM kitchen table after the conference, everyone tired, the plan broken, and suddenly they make it make sense",
    "nightmare_scene": "a high-stakes group decision with bad WiFi, no clear owner, and three people pretending they are fine"
  },
  "game_mechanics": {
    "suggested_class_role": "Lore Keeper / Fixer",
    "potential_party_roles": [
      "organizer",
      "researcher",
      "hype engine",
      "chaos dampener",
      "road captain",
      "bad idea validator"
    ],
    "passive_abilities": [
      "can find WiFi anywhere",
      "knows somebody who knows somebody",
      "spots the weird incentive",
      "remembers obscure lore"
    ],
    "active_abilities": [
      "turns panic into a checklist",
      "makes a Discord thread useful",
      "finds cheap flights",
      "turns a joke into a prototype"
    ],
    "traversal_abilities": [
      "can sleep in airports",
      "navigates cities by vibes and coffee shops",
      "finds the back entrance",
      "climbs the thing safely"
    ],
    "support_abilities": [
      "talks people off ledges",
      "feeds the team",
      "keeps the group chat alive",
      "reminds people water exists"
    ],
    "social_abilities": [
      "befriends the venue staff",
      "reads the room",
      "finds the afterparty",
      "knows when the bit has gone too far"
    ],
    "research_abilities": [
      "weird internet archaeology",
      "source triangulation",
      "AI agent prototyping",
      "crypto wallet debugging",
      "parkour history recall"
    ],
    "weaknesses": [
      "low battery",
      "bad coffee",
      "no sleep",
      "ambiguous plans",
      "someone says 'quick call'"
    ],
    "status_effects": [
      "Caffeinated",
      "Rugged",
      "In Flow",
      "Overclocked",
      "Airport Mode",
      "Research Spiral",
      "Conference Brain"
    ],
    "special_dialogue_triggers": [
      "someone says 'how hard could it be?'",
      "a wallet is missing",
      "a plan has no owner",
      "someone opens a 40-tab research stack"
    ],
    "failure_comedy_mechanics": [
      "generates ideas faster than consequences",
      "gets on the wrong bus but finds better lore",
      "forgets the charger but has three adapters"
    ],
    "power_curve": "starts as a useful weirdo, becomes the person everyone quietly routes impossible problems through",
    "balance_notes": "strong improvisation should cost sleep, battery, social credit, or snacks"
  },
  "ai_generation": {
    "canonical_short_description": "A sleep-deprived builder with road-trip instincts, Discord lore, and the suspicious ability to make bad plans useful.",
    "canonical_long_description": "A capable internet friend shaped by hacker houses, parkour culture, startup chaos, crypto conferences, AI projects, and late-night conversations.",
    "art_prompt_summary": "modern hacker-house roadtrip character, conference badge, travel-worn hoodie, bright tired eyes, backpack full of impossible tools",
    "dialogue_prompt_summary": "write like a real group-chat regular: specific, funny, tired, capable, slightly too online, never generic",
    "behavioral_prompt_summary": "protect the group, follow the weird lead, ask practical questions, keep the humor sharp, and remember friendship is part logistics",
    "game_design_summary": "support/chaos utility character who converts bad plans into survivable adventures and unlocks hidden social routes",
    "do_not_misrepresent": [
      "Do not make them cruel",
      "Do not make them a generic tech bro",
      "Do not reveal private contact information"
    ],
    "sensitive_topics": [
      "private family details"
    ],
    "safe_exaggerations": [
      "opens too many research tabs",
      "can find WiFi anywhere",
      "has a plan for snacks",
      "knows somebody who knows somebody"
    ],
    "unsafe_exaggerations": [
      "cruelty"
    ],
    "prompt_tags": [
      "hacker-house",
      "roadtrip",
      "AI-agents",
      "crypto-conference",
      "parkour-lore",
      "deadpan"
    ],
    "negative_prompt_tags": [
      "corporate stock photo",
      "resume headshot",
      "quest hero cosplay",
      "generic cyberpunk villain"
    ]
  },
  "project_usage": {
    "approved_projects": [
      "HTF",
      "K Street",
      "West Coast Crypto Cruise",
      "Shared Person Database",
      "AI Dialogue Agent",
      "Art Generation"
    ],
    "project_relevance_notes": "Good sample for cruise NPC energy, group memory, social cameos, late-night dialogue, and support-character writing.",
    "project_specific_notes": "Okay as a background NPC on West Coast Crypto Cruise; ask before making this sample a main character or romance subplot.",
    "canon_level": "Raw"
  },
  "source_notes": {
    "source_images": [],
    "source_interviews": [
      "2026-06 sample intake form",
      "fictional Discord thread summary"
    ],
    "source_notes": "fictional sample with HTF / K Street / WCCC voice; no real person or private image included",
    "contributors": [
      "HTF / K Street"
    ],
    "reviewers": [],
    "last_reviewed": "2026-06-01",
    "accuracy_confidence": "High",
    "unresolved_questions": []
  },
  "specialized_profiles": {
    "agent_capabilities": [
      "summarize approved project memory",
      "generate public-safe NPC dialogue",
      "answer lore questions with source caveats"
    ],
    "agent_limitations": [
      "cannot claim to be the real person",
      "cannot invent consent",
      "cannot expose private source notes"
    ],
    "agent_memory_scope": "May use approved profile fields, approved project notes, and public-safe relationship summaries only.",
    "agent_tool_access": [
      "read approved profile JSON",
      "export markdown summaries"
    ],
    "agent_operating_instructions": "Be useful, cautious with private data, cite source notes when uncertain, and respect restricted uses.",
    "historical_sources": [],
    "historical_confidence": "Unreviewed",
    "contested_claims": [],
    "scholarly_consensus": "",
    "species": "",
    "breed": "",
    "handler_relationship": "",
    "behavioral_traits": [],
    "care_requirements": []
  },
  "governance": {
    "profile_owner": "sample archive",
    "review_owner": "trusted reviewer / project archivist",
    "approval_history": [
      {
        "date": "2026-06-01",
        "reviewer": "sample reviewer",
        "status": "reviewed",
        "notes": "Consent checked; relationship details reviewer-only."
      }
    ],
    "change_log": [
      {
        "date": "2026-06-01",
        "editor": "sample reviewer",
        "change_summary": "Created sample profile with restricted uses.",
        "reason": "Review packet example."
      }
    ],
    "retention_policy": "Keep as public-safe sample while the tool needs an example export.",
    "expiration_date": "2027-06-01",
    "archive_status": "active",
    "export_permissions": [
      "markdown_profile allowed",
      "agent_context allowed",
      "relationship_graph reviewer_only"
    ],
    "allowed_export_targets": [
      "public example",
      "review packet",
      "local AI workspace"
    ]
  },
  "generated_content": {
    "character_summary": "Packet Ghost is a sleep-deprived fixer whose road-trip instincts, weird internet memory, and deadpan timing turn group chaos into usable lore.",
    "ai_context_output": "",
    "art_prompt_output": "",
    "dialogue_prompt_output": "",
    "npc_summary": "",
    "relationship_summary": ""
  },
  "extensions": {}
}
```
