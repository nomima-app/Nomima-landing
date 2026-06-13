# User Guide maintenance

The guide in this folder (`docs/`) is part of every Nomima release. **A release is not done until the guide matches the app.** This file is the process.

## How the guide is wired

- `docs.js` is the **single source of truth** for navigation, the prev/next pager, and the version stamp shown in every page footer. Pages contain only their own content plus empty `#docs-sidebar`, `#docs-pager`, `#docs-foot` containers.
- `docs.css` is the shared stylesheet (tokens mirror the landing site).
- Pages are plain HTML — no build step, same as the rest of the site.

## Release checklist (run for every app release)

1. **Bump the stamp** in `docs.js`: set `GUIDE_VERSION` to the app version (keep it equal to the `version` in the app's `tauri.conf.json` / `latest.json`) and `GUIDE_UPDATED` to the release date.
2. **Walk the release's merged PRs / changelog.** For each user-visible change, update the matching page (map below). Ask: would a screenshot from the new build contradict the page?
3. **New feature with no home?** Add a page: copy any existing page's shell, then register it in the `PAGES` array in `docs.js` (that adds it to every sidebar and the pager automatically).
4. **Removed/renamed feature?** Delete or rewrite the section — stale docs are worse than missing docs.
5. **Pro gating changed?** Update the Free vs Pro table in `settings-privacy.html`, the `pro: true` flags in `docs.js`, and any `pro-box` callouts on affected pages.
6. **Click through locally** (`python3 serve.py` or any static server): sidebar highlights, pager links, and footer stamp on a few pages.
7. Ship the guide update in the **same PR** (or release branch) as the `latest.json` bump, so the live site and the live app can never disagree.

## Feature → page map

| App area | Page |
|---|---|
| Install, first run, vault location, UI tour | `getting-started.html` |
| Slash menu, any block type | `blocks.html` |
| @/# pills, suggestion menu, tag types, entity cards/attributes | `smart-tags.html` |
| Date detection, date pills, reminders, notifications/bell | `dates-and-reminders.html` |
| #complete, checkboxes, progress, container completion | `tracking.html` |
| Lenses, tag cards, Dates/Files/Tasks/Alerts lenses, Home, Smart Scrollbar, ⌘K | `smart-views.html` |
| Graph view, cover graph, entity panel, re-index | `knowledge-graph.html` |
| Providers, keys, frontier models, what uses AI | `ai-models.html` |
| Summon FAB/dock, tools, chat/note, agent permissions | `summon.html` |
| MCP enable/connect/tools/log | `mcp.html` |
| SmartCopy paste, templates, comments, PDF export, keyboard | `power-tools.html` |
| Settings panels, privacy/network list, Free vs Pro, licensing | `settings-privacy.html` |

## Writing rules

- Speak to the user, not the codebase: UI labels and behaviors, never component or command names.
- State keyboard shortcuts with `<kbd>` and exact UI labels in **bold**.
- Mark Pro-only features with the `pro-badge` chip and, where the page is wholly Pro, a `pro-box` at the top.
- Never promise behavior you haven't seen in the running build for this release.
