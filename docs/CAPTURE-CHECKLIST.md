# User Guide — screenshot & GIF capture checklist

The v1.17 guide overhaul added **visual slots** throughout. Until a real image is
dropped in, each renders as a labelled placeholder (dashed = screenshot, pink =
short clip) that also states exactly what to capture. This file is the shot list.

## How to drop an image in

1. Capture the shot on a real build (clean vault, the Welcome notebook is ideal).
2. Save it under `docs/img/<folder>/<name>` matching the `data-shot` path below
   (create `docs/img/…` — it's just static assets).
3. In the page, replace the placeholder `<div class="figure-slot" …>…</div>` with:
   ```html
   <img class="figure-img" src="img/<folder>/<name>" alt="<short description>" loading="lazy" />
   ```
   Keep the surrounding `<figure class="guide-figure">` and its `<figcaption>`.
   Clicking the image opens a full-screen lightbox automatically.

**Format tips:** PNG for stills; for motion prefer a muted looped `.webp`/`.mp4`
over a heavy `.gif` (swap the extension in both the file and the `src`). Target
~1600px wide (retina), keep each clip 3–6s.

---

## Priority A — the flagship demos (capture these first)

| Slot (`data-shot`) | Page | What it shows |
|---|---|---|
| `capture-and-reading/video-pip-float.gif` | Capture & reading | **The whole video story in one clip:** a YouTube block playing inline → scroll away → it pops to the corner picture-in-picture → leave the app → it becomes the native floating mini-player over another app. This is Nomima's single most impressive moment. |
| `getting-started/cover-graph-connect.gif` | Getting started | The note cover graph updating **live** as `@Sara` and `#launch` pills are typed — nodes appear and wire together. |
| `getting-started/mention-menu.gif` | Getting started | Typing `@Sa`, the suggestion menu appearing, and a `@Sara` pill forming on accept (Tab). |

## Priority B — core walkthrough stills

| Slot | Page | What it shows |
|---|---|---|
| `getting-started/new-notebook.png` | Getting started | The sidebar new-notebook button + a fresh titled page, caret in the body. |
| `getting-started/task-list.png` | Getting started | A titled task list with one item checked. |
| `getting-started/date-reminder.png` | Getting started | A `tomorrow 3pm` date pill with its reminder countdown row. |
| `getting-started/command-palette.png` | Getting started | ⌘K palette open with mixed results — a note, a @mention, a date, a command. |
| `blocks/slash-menu.png` | Blocks | The `/` menu open in the editor, filtered as the user types. |
| `knowledge-graph/graph-view.png` | Knowledge Graph | The full graph: glowing type-colored nodes, the legend, a selected node's connections. |

## Priority C — capture & reading stills

| Slot | Page | What it shows |
|---|---|---|
| `capture-and-reading/file-brain-toggle.png` | Capture & reading | A file pill/row with its "brain" knowledge toggle. |
| `capture-and-reading/bookmark-card.png` | Capture & reading | A bookmark card showing the brain, Read, and Pop-out buttons. |
| `capture-and-reading/inline-reader.png` | Capture & reading | The clean in-app reader with a structured article (headings, links). |
| `capture-and-reading/pop-out-window.png` | Capture & reading | The floating live web-view window over the app. |

---

---

## Priority D — deep reference pages (Track B)

Every slot below carries an in-page label in the form **"Set up: … / In frame: …"** —
open the page, read the placeholder, and shoot exactly that.

### Advanced blocks (`advanced-blocks.html`)
| Slot | Shows |
|---|---|
| `advanced-blocks/authored-database.png` | An authored `/table` with typed columns and cell pills. |
| `advanced-blocks/query-table-bound.png` | A `/query-table` filtered to a pill (e.g. #launch) with its filter bar + matching rows. |
| `advanced-blocks/dashboard-grid.png` | A dashboard block with several widgets laid out. |
| `advanced-blocks/widget-editor.png` | The widget config (metric + chart type picker). |
| `advanced-blocks/kanban-drag-to-done.gif` | **Clip:** dragging a card into the Done column → it marks complete. |
| `advanced-blocks/gantt-edit-mode.png` | A Gantt block in edit mode (name/start/end/assignee fields). |
| `advanced-blocks/mermaid-live.png` | A Mermaid block with source + rendered diagram side by side. |
| `advanced-blocks/drawing-canvas.png` | The drawing/whiteboard block with a simple sketch. |

### Entity relationships (`smart-tags.html`)
| Slot | Shows |
|---|---|
| `smart-tags/relation-field-how-it-reads.png` | The "How it reads" relation editor (verb chips, Links-to, container checkbox). |
| `smart-tags/entity-card-relationships-grouped.png` | An entity card's Relationships section, incl. a muted inherited row. |

### Import, export & publishing (`sharing-and-data.html`)
| Slot | Shows |
|---|---|
| `sharing-and-data/export-dialog.png` | The export format dialog (Markdown/HTML/JSON). |
| `sharing-and-data/import-entry-settings.png` | The Import row in Settings. |
| `sharing-and-data/publish-dialog.png` | The publish dialog in published state (link + view-code fields). |
| `sharing-and-data/published-page.png` | The live read.nomima.io reader page for a published note. |

---

## Priority E — coverage-census fills (menu bar, float, completion, agents, stats)

| Slot | Page | Shows |
|---|---|---|
| `menu-bar/tray-popup.png` | Menu bar & tray | The open menu-bar popup — footprint RAM/CPU graphs, status chips, overdue + recent lists. |
| `menu-bar/tray-icon-badge.png` | Menu bar & tray | The tray icon in the macOS menu bar, with the update badge. |
| `menu-bar/about-window.png` | Menu bar & tray | The native About Nomima window. |
| `capture-and-reading/native-float-over-app.png` | Capture & reading | The floating mini-player sitting on top of another app (browser/editor behind it). |
| `capture-and-reading/native-float-handback.gif` | Capture & reading | **Clip:** hand-off out to the float, then Back-to-note re-docking inline, no double audio. |
| `tracking/section-cascade-down.png` | Complete & incomplete | A Section marked `#complete` greying its whole subtree. |
| `tracking/tasklist-rollup-up.png` | Complete & incomplete | A task list rolled up to 5/5 with the title auto-stamped `#complete`. |
| `summon/assign-flow.png` | Summon | The `/assign` form + the resulting agent-task pill. |
| `summon/tasks-view.png` | Summon | The Summon Tasks view with mixed statuses (incl. a Needs-Approval card). |
| `smart-views/stats-dashboard.png` | Smart Views | The Stats dashboard — the default four-column bento grid. |
| `smart-views/widget-editor.png` | Smart Views | The widget builder with a live preview. |
| `sharing-and-data/publish-analytics.png` | Import/export & publishing | The Views & visitors panel for a published note. |

---

_The `getting-started` "interface at a glance" visual is a hand-built annotated
SVG diagram — no capture needed. Everything else above is a real screenshot/clip.
**39 slots total.**_
