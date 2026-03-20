Create a desktop web app UI for an internal channel-based shortform video production system called “AI Mixologist”.

Important:
This is not a public SaaS product. It is an internal production tool.
Focus on clean workspace UX, clear information hierarchy, and practical layout.
Do not overdesign it like a flashy marketing site.
Use a modern professional product UI with a left sidebar navigation and workspace layout.
Do not focus on exact typography, spacing, button sizes, or branding details. Focus on layout structure, panel relationships, and screen flow.

The app should include these screens:

1. Login
2. Channel Select
3. Channel Dashboard
4. Ideation
5. Idea Archive
6. Script Generator
7. Script Binder
8. Persona
9. Storyboard
10. Video Build
11. Caption Field

Overall product concept:
This is a channel-based shortform content production studio.
A user selects a channel, then moves through a production pipeline:
Ideation → Idea Archive → Script → Persona → Storyboard → Video Build → Caption Field.
The left sidebar should persist after entering a channel workspace.

Global layout after channel selection:
- Left sidebar navigation
- Main content area on the right
- Desktop-first layout
- Workspace-style UI, not mobile UI
- Clean product interface
- The app name is “AI Mixologist”
- “AI Mixologist” is the product name, not the channel name

Sidebar navigation items:
- Dashboard
- Ideation
- Idea Archive
- Script Binder
- Persona
- Storyboard
- Video Build
- Caption Field

SCREEN 1 — LOGIN
A simple login page for an internal tool.
Minimal centered layout.
Include:
- App name: AI Mixologist
- Email input
- Password input
- Login button
Keep it simple and clean.

SCREEN 2 — CHANNEL SELECT
This is the first screen after login.
Purpose: choose which channel to work on, or create a new one.
Assume only 1 to 3 channels in the prototype, so no search/filter is needed.
Layout:
- Page title
- Short instruction text like “Select a channel profile”
- 1 to 3 channel cards displayed prominently
- A separate “Create New Channel” action below the cards, not as another card
Important:
This is not a dashboard and not a management screen.
It is only a channel entry screen.
Each channel card should contain:
- Channel name
- Optional short one-line description

SCREEN 3 — CHANNEL DASHBOARD
After selecting a channel, enter the main workspace.
The dashboard is a control panel for the selected channel.
Layout:
- Top page header showing app context and current channel
- A full-width production status row
- Below that, a two-column row:
  left = Channel Bible summary
  right = Style Guide summary
- A Recent Work section below

Dashboard details:

Header:
- Show AI Mixologist as app name/context
- Show current channel name clearly
- Optional small channel description

Production Status:
Show simple high-level metric cards, across one full row.
Use wording like:
- Idea Archive
- Script Binder
- Finished Videos
These are simple status cards, not detailed analytics charts.
Icons are welcome.

Channel Bible panel:
- This should not look like raw dataset fields
- It should look like a human-readable identity summary of the channel
- It describes the channel’s content identity, tone, structure, and purpose
- Include an edit access button for future editing

Style Guide panel:
The Style Guide should be summarized here, not fully exposed.
Show only:
- Script Style
- Persona Style
- Visual Style
- Voice Style
Do NOT show Caption Style here.
Include an edit access button for future editing.

Recent Work:
A simple list of recent actions, such as:
- generated storyboard
- created script
- generated ideas

Important:
Style Guide and Channel Bible should be accessible for editing from the dashboard, but detailed edit screens do not need to be designed now.
Only show clear entry points for future editing.

Style Guide internal structure for the product:
- Script Style
- Persona Style
- Visual Style
- Voice Style
- Caption Style
Caption Style exists in the system but should not be displayed in the dashboard summary.

SCREEN 4 — IDEATION
Purpose: generate 5 topic ideas at a time.
This is not a prompt engineering screen.
It is a lightweight AI idea generation tool.

Layout:
- Top ideation input area
- Below that, generated topic results

Top area:
- A simple input field for optional direction hints
- This field is not a full prompt box
- User can type short guidance such as topic direction or theme
- Input is optional
- Buttons:
  - “아이디어 생성” / Idea Generate
  - “다시 생성” / Regenerate

Generated results area:
- Section title: “생성된 주제”
- Show 5 generated topic cards
- Each card includes:
  - Topic title
  - 2 to 3 short key points
  - Save / Keep action
  - Discard action
Interaction:
- When kept or discarded, the card should visually fade, blur, or disappear
- The screen should feel interactive and lightweight

SCREEN 5 — IDEA ARCHIVE
Purpose: store approved topics from Ideation.
This is a topic management screen, not a detailed editing screen.

Layout:
- Page title
- Optional search bar
- Vertical list or card list of saved topics
- A “Generate Script” button

Interaction rules:
- No checkboxes
- Single selection only
- Clicking a row/card activates it
- Only one topic can be selected at a time
- When a topic is selected, the “Generate Script” button becomes active

Each archived topic row/card should include:
- Topic title
- Short key point summary

Clicking Generate Script opens the Script Generator screen, not immediate script output.

SCREEN 6 — SCRIPT GENERATOR
Purpose: confirm selected topic and generate 3 script versions.

Layout:
- Show selected topic clearly
- Show key points summary
- A clear generate button

After generation:
- Show 3 script version cards: A, B, C
- Only one version can be selected
- User can:
  - choose one version and send it to Script Binder
  - regenerate all 3 versions
Do not allow selecting multiple scripts at once.

SCREEN 7 — SCRIPT BINDER
Purpose: archive and review generated scripts.

Important UX:
Scripts can be long, so the main list should stay compact.
Initial view should show small cards or compact rows.
When a script is clicked, it expands or opens a full preview panel.

Layout:
- Script list in a comfortable vertical layout
- Each script card should include:
  - Script title
  - Hook line
  - Small script preview snippet
  - Created date
- Clicking a script opens full script preview
- The full script preview includes:
  - full script text
  - edit button
  - next step button

Interaction:
- The default mode is preview mode
- Editing is optional
- User can either edit or move on directly to Persona

SCREEN 8 — PERSONA
Purpose: this tab handles persona selection, narration direction, and TTS generation.
This is not just a settings screen.
It is a performance direction workspace.

Important concept:
There can be multiple personas in the system.
For the current version, one video uses only one persona.
A persona includes both character appearance and voice.
Character and voice are bundled together.
If the user wants to change the voice attached to a persona or the appearance attached to a persona, that belongs to a future reset/settings workflow, not here.

Layout:
Two-column split layout.

Left panel:
Persona library and selection.
Show multiple persona cards.
Each card includes:
- character image
- persona name
- short voice style description
- sample play button
One persona can be selected for the current video.
Also include a future-facing reset/settings access button for persona reset.

Right panel:
Script direction and TTS workspace.

This panel must show:
- script broken into line-by-line rows
- AI-suggested narration direction labels
- examples of narration direction:
  - strong hook
  - calm delivery
  - slight emphasis
  - caution emphasis
- If consecutive lines use the same direction, do not repeat the direction label every time
- Direction labels should be editable inline
- Script lines themselves should also be editable inline, because the user may want to slightly adjust the script here

Right panel flow:
- user reviews line-by-line direction
- edits direction if needed
- edits script lines if needed
- generates TTS
- listens to generated result
- can regenerate
- can move to storyboard

Include controls such as:
- TTS generate
- regenerate
- audio preview after generation

SCREEN 9 — STORYBOARD
Purpose: create and manage image-based storyboard cuts before video generation.
Important:
Cuts already exist before image generation.
The script has already been split into lines earlier.
Storyboard should show the cut list even before any images are generated.
This is not a video timeline editor.
This is a cut list + image generation management screen.

Layout:
- Top control bar
- Vertical cut list
- Next step action

Top control bar:
- Storyboard title
- show total cut count
- “Generate All Images” button
- “Regenerate All Images” button
- optional style guide reference access

Main area:
A vertical list of storyboard cuts.
Each cut row should contain:
- cut number
- image area on the left
- script/cut text on the right
- scene type selector
- generate/regenerate button

Scene type selector:
Only two modes:
- character shot
- reference/information shot
AI chooses one by default, but the user can switch it.
Because the current system uses only one persona per video, if a cut is marked as a character shot, it should use the currently selected persona automatically.

Image states:
- before generation: placeholder / image pending
- generating
- generated image

Important:
Cuts must be visible even before image generation.
This is critical.

SCREEN 10 — VIDEO BUILD
Purpose: convert each generated storyboard image into video clips, then preview the assembled result.
Do not expose underlying timing logic.
The system automatically chooses the best usable segment from each generated clip and aligns it to the TTS timing.
The UI should not show raw duration or selected segment details.
The user does not need to manually trim.

Layout:
Two-column layout.

Left side:
Video preview player.
This is a preview of the assembled sequence.
It can be a virtual preview rather than a final rendered file.
Include:
- video preview window
- play / pause
- current playback feel
- preview of the edited sequence

Right side:
Vertical cut list.
Each cut includes:
- cut number
- video thumbnail or preview state
- script line
- video generation state
- regenerate button

Important interactions:
- Clicking a cut on the right jumps the preview on the left to that cut
- The currently playing cut in the preview should be highlighted in the cut list on the right
- User can regenerate only a specific cut’s video if they do not like it

Keep the UI simple.
Do not expose:
- original video duration
- selected internal segment
- trim controls
- manual in/out point controls

This tab is for:
- generate
- preview
- selective regenerate

SCREEN 11 — CAPTION FIELD
Purpose: final subtitle style application and final preview.
This is not a timeline-based subtitle editor.
This is a subtitle-style-driven finalization screen.

Layout:
Two-column layout.

Left side:
Final video preview with subtitles visible in real time.
Changes on the right should reflect in the preview.

Right side:
Subtitle settings panel.

Settings blocks:
1. Subtitle On/Off
2. Spoken subtitle style
3. Highlight word style
4. Opening title subtitle settings

Detailed requirements:

Subtitle On/Off:
- user can enable or disable subtitles completely

Spoken subtitle style:
Allow settings for:
- font
- size
- color
- position
- alignment
- max line count
- subtitle background

Position options can include:
- bottom center
- center
- top

Alignment:
- centered
- left aligned

Max line count:
- 1 line
- 2 lines

Subtitle background:
- none
- semi-transparent box
- shadow

Highlight word style:
Separate from normal spoken subtitle style.
Allow:
- font
- size
- color

Opening title subtitle:
- option to enable or disable opening title subtitle
- input field for title text
- title style should be separate from spoken subtitle style
- title style should also be separate from highlight word style
Allow:
- font
- size
- color

Title section spoken subtitle handling:
Provide an option:
- hide spoken subtitle during title section
- show both title and spoken subtitle during title section

Bottom of this screen:
- Final Render button
- Download button

Important style guidance for the whole product:
- professional internal creative tool
- clean desktop product UI
- workspace-focused
- modern panels and cards
- clear hierarchy
- subtle product polish
- not overly decorative
- not a consumer social media app
- not a flashy AI toy
- should feel like a serious internal production studio

Important interaction summary:
- After channel selection, all pages should share the left sidebar navigation
- Dashboard should feel like a workspace home
- Production tabs should feel sequential and connected
- Compact card/list UIs where content can become long
- Use visual selection states clearly
- Keep automation logic hidden where appropriate
- Favor preview, review, and selective regenerate workflows
- Persona is selected per video, and only one persona is active per video in this version
- Storyboard cuts are visible before image generation
- Video Build uses preview + cut list
- Caption Field is style-driven, not timeline-driven

Generate all screens as part of one coherent desktop product system with consistent layout logic and consistent component language.