# User Guide — screenshot & clip capture checklist

Every visual slot in the guide, by page. Each renders as a labelled placeholder
(dashed = screenshot · pink = short clip) stating exactly what to capture — open the
page and read its **Set up / In frame** label.

**To drop an image in:** save it to `docs/img/<data-shot>` and replace the
`<div class="figure-slot" …>…</div>` with `<img class="figure-img" src="img/<data-shot>" alt="…" loading="lazy" />`,
keeping any surrounding `<figure>`/`<figcaption>`. PNG stills; muted looped `.webp`/`.mp4` for motion.

**99 slots total** — 91 screenshots · 8 short clips — across 18 pages.

## Guide home
`index.html` — 1 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `index/app-overview.png` | Screenshot | Nomima at a glance. |

## Getting started
`getting-started.html` — 8 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `getting-started/install-dmg.png` | Screenshot | Install. |
| `getting-started/welcome-notebook.png` | Screenshot | The Welcome notebook. |
| `getting-started/new-notebook.png` | Screenshot | New notebook. |
| `getting-started/task-list.png` | Screenshot | A task list. |
| `getting-started/mention-menu.gif` | Short clip | The @ menu. |
| `getting-started/date-reminder.png` | Screenshot | A date pill + reminder. |
| `getting-started/cover-graph-connect.gif` | Short clip | Nodes connect. |
| `getting-started/command-palette.png` | Screenshot | ⌘K palette. |

## Blocks
`blocks.html` — 10 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `blocks/slash-menu.png` | Screenshot | The “/” menu. |
| `blocks/text-basics.png` | Screenshot | The text hierarchy in one note. |
| `blocks/task-list.png` | Screenshot | A Task List card. |
| `blocks/callout-types.png` | Screenshot | A Callout with the type picker open. |
| `blocks/toggle-list.png` | Screenshot | A Toggle List, expanded. |
| `blocks/columns.png` | Screenshot | A three-column layout. |
| `blocks/carousel.gif` | Short clip | Building a Carousel by tabbing. |
| `blocks/database.png` | Screenshot | The Database block. |
| `blocks/code-block.png` | Screenshot | A syntax-highlighted Code Block. |
| `blocks/embed-video.png` | Screenshot | An embedded video and a bookmark card. |

## Advanced blocks
`advanced-blocks.html` — 10 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `advanced-blocks/authored-database.png` | Screenshot | Authored database with typed columns. |
| `advanced-blocks/entity-table.png` | Screenshot | An entity table of a type. |
| `advanced-blocks/query-table-bound.png` | Screenshot | Query table bound to a pill. |
| `advanced-blocks/dashboard-grid.png` | Screenshot | Dashboard with a few widgets added. |
| `advanced-blocks/widget-editor.png` | Screenshot | Configuring a widget. |
| `advanced-blocks/kanban-drag-to-done.gif` | Short clip | Dragging a card to Done adds #complete. |
| `advanced-blocks/gantt-edit-mode.png` | Screenshot | Gantt in Edit mode with assignees. |
| `advanced-blocks/mermaid-live.png` | Screenshot | Mermaid source next to its rendered diagram. |
| `advanced-blocks/drawing-canvas.png` | Screenshot | The drawing canvas with a quick sketch. |
| `advanced-blocks/github-repo-card.png` | Screenshot | A GitHub repo status card. |

## Capture & reading
`capture-and-reading.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `capture-and-reading/file-brain-toggle.png` | Screenshot | A file pill with its brain toggle. |
| `capture-and-reading/bookmark-card.png` | Screenshot | A finished bookmark card. |
| `capture-and-reading/inline-reader.png` | Screenshot | The in-app reader. |
| `capture-and-reading/pop-out-window.png` | Screenshot | The pop-out live web-view window. |
| `capture-and-reading/video-pip-float.gif` | Short clip | Video that follows you. |
| `capture-and-reading/native-float-over-app.png` | Screenshot | The native floating mini-player over another app. |
| `capture-and-reading/native-float-handback.gif` | Short clip | Handoff and back, no double audio. |

## References & citations
`references-and-citations.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `references/reader-highlight-cite.png` | Screenshot | Highlighting in the reader. |
| `references/citation-block.png` | Screenshot | A citation block in a note. |
| `references/references-library.png` | Screenshot | The References library. |
| `references/smart-add.png` | Screenshot | Add by link, DOI or ID. |
| `references/connectors-settings.png` | Screenshot | The Connectors panel. |
| `references/highlight-categories.png` | Screenshot | The Highlights category editor. |
| `references/github-block.png` | Screenshot | A GitHub repo status card. |

## Mentions & hashtags
`smart-tags.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `smart-tags/formed-pills.png` | Screenshot | Formed pills in a note. |
| `smart-tags/create-type-menu.png` | Screenshot | The @ menu with Create-new type rows. |
| `smart-tags/custom-type-editor.png` | Screenshot | The Smart Tag Types editor. |
| `smart-tags/entity-card.png` | Screenshot | An entity card. |
| `smart-tags/entity-detail-page.png` | Screenshot | The full Entity view. |
| `smart-tags/relation-field-how-it-reads.png` | Screenshot | The “How it reads” editor. |
| `smart-tags/entity-card-relationships-grouped.png` | Screenshot | Grouped relationships on a card. |

## Dates & reminders
`dates-and-reminders.html` — 4 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `dates-and-reminders/date-pill-forming.gif` | Short clip | A date pill forms as you type. |
| `dates-and-reminders/reminder-countdown.png` | Screenshot | An armed reminder counting down. |
| `dates-and-reminders/reminder-controls.png` | Screenshot | The Done and Snooze controls. |
| `dates-and-reminders/alerts-lens.png` | Screenshot | The Alerts lens. |

## Complete & incomplete
`tracking.html` — 3 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `tracking/complete-tag-on-block.png` | Screenshot |  |
| `tracking/section-cascade-down.png` | Screenshot | Section header completes its subtree. |
| `tracking/tasklist-rollup-up.png` | Screenshot | Task list rolls up from its rows. |

## Smart Views & Home
`smart-views.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `smart-views/lens-switcher.png` | Screenshot | The lens switcher. |
| `smart-views/entities-directory.png` | Screenshot | The Entities directory. |
| `smart-views/tag-card.png` | Screenshot | A tag card. |
| `smart-views/dates-agenda.png` | Screenshot | The Dates agenda. |
| `smart-views/files-lens.png` | Screenshot | The Files lens. |
| `smart-views/stats-dashboard.png` | Screenshot | The Stats dashboard. |
| `smart-views/widget-editor.png` | Screenshot | The widget builder. |

## Knowledge Graph
`knowledge-graph.html` — 4 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `knowledge-graph/graph-view.png` | Screenshot | The graph. |
| `knowledge-graph/cluster-by-legend.png` | Screenshot | Clustering by type. |
| `knowledge-graph/entity-panel.png` | Screenshot | A selected node’s connections. |
| `knowledge-graph/cover-graph.png` | Screenshot | The in-note cover graph. |

## AI models
`ai-models.html` — 2 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `ai-models/local-provider-no-key.png` | Screenshot | A local provider needs no key. |
| `ai-models/provider-picker-two-pane.png` | Screenshot | The two-pane provider picker. |

## Summon assistant
`summon.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `summon/glowing-button-dock.png` | Screenshot | The Summon button and dock. |
| `summon/live-write-into-editor.gif` | Short clip | Writing live into the editor. |
| `summon/deep-research-chip.png` | Screenshot | Arming Deep Research. |
| `summon/composer-smart-tags.png` | Screenshot | Smart Tags in the composer. |
| `summon/assign-flow.png` | Screenshot | Assigning a task. |
| `summon/tasks-view.png` | Screenshot | The Summon Tasks view. |
| `summon/capabilities-two-pane.png` | Screenshot | The Capabilities two-pane. |

## MCP server
`mcp.html` — 2 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `mcp/vault-server-panel.png` | Screenshot | The inbound Vault MCP server panel. |
| `mcp/context7-capability.png` | Screenshot | The “Look up library docs” outbound capability. |

## Import, export & publishing
`sharing-and-data.html` — 7 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `sharing-and-data/export-dialog.png` | Screenshot | The export dialog. |
| `sharing-and-data/import-entry-settings.png` | Screenshot | Import in Settings. |
| `sharing-and-data/publish-dialog.png` | Screenshot | The publish dialog (published state). |
| `sharing-and-data/published-page.png` | Screenshot | The published page. |
| `sharing-and-data/publish-menu-label.png` | Screenshot | The publish menu label. |
| `sharing-and-data/view-count-eye.png` | Screenshot | The view-count eye. |
| `sharing-and-data/publish-analytics.png` | Screenshot | Views &amp; visitors. |

## Menu bar & tray
`menu-bar-and-tray.html` — 4 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `menu-bar/tray-popup.png` | Screenshot | The tray popup. |
| `menu-bar/tray-icon-badge.png` | Screenshot | The tray icon with an update badge. |
| `menu-bar/app-menu.png` | Screenshot | The Nomima app menu. |
| `menu-bar/about-window.png` | Screenshot | The About window. |

## Paste, templates & shortcuts
`power-tools.html` — 6 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `power-tools/smartcopy-paste.png` | Screenshot | A SmartCopy paste result. |
| `power-tools/templates-picker.png` | Screenshot | The template picker. |
| `power-tools/version-history.png` | Screenshot | The version-history slider. |
| `power-tools/comment-scrollbar.png` | Screenshot | Comments on the Smart Scrollbar. |
| `power-tools/entity-view.png` | Screenshot | The expanded Entity view. |
| `power-tools/command-palette.png` | Screenshot | The command palette. |

## Settings & privacy
`settings-privacy.html` — 3 slot(s)

| `data-shot` | Kind | What to capture |
|---|---|---|
| `settings-privacy/connectors-panel.png` | Screenshot | The Connectors panel. |
| `settings-privacy/highlights-panel.png` | Screenshot | The Highlights panel. |
| `settings-privacy/theme-gallery-scene.png` | Screenshot | The Appearance theme gallery. |
