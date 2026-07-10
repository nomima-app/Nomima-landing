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

_The `getting-started` "interface at a glance" visual is a hand-built annotated
SVG diagram — no capture needed. Everything else above is a real screenshot/clip._
