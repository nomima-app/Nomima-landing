/* Nomima User Guide — single source of truth for guide navigation.
   ON EVERY RELEASE: bump GUIDE_VERSION + GUIDE_UPDATED, and add/adjust PAGES
   if features changed. The sidebar, prev/next pager, and footer stamp on
   every page are generated from this file — edit nothing else for nav. */

const GUIDE_VERSION = "1.23.0";
const GUIDE_UPDATED = "26 July 2026";

const PAGES = [
  { section: "Start here" },
  { file: "index.html",            title: "Guide home" },
  { file: "getting-started.html",  title: "Getting started" },

  { section: "Writing" },
  { file: "blocks.html",           title: "Blocks" },
  { file: "advanced-blocks.html",  title: "Advanced blocks" },
  { file: "capture-and-reading.html", title: "Capture & reading" },
  { file: "references-and-citations.html", title: "References & citations" },
  { file: "smart-tags.html",       title: "Mentions & hashtags" },
  { file: "dates-and-reminders.html", title: "Dates & reminders" },
  { file: "tracking.html",         title: "Complete & incomplete" },

  { section: "Finding & seeing" },
  { file: "smart-views.html",      title: "Smart Views & Home" },
  { file: "knowledge-graph.html",  title: "Knowledge Graph" },
  { file: "insights.html",         title: "Insights" },

  { section: "AI & integrations" },
  { file: "ai-models.html",        title: "AI models" },
  { file: "summon.html",           title: "Summon assistant" },
  { file: "mcp.html",              title: "MCP server" },

  { section: "Everything else" },
  { file: "sharing-and-data.html", title: "Import, export & publishing" },
  { file: "menu-bar-and-tray.html", title: "Menu bar & tray" },
  { file: "power-tools.html",      title: "Paste, templates & shortcuts" },
  { file: "settings-privacy.html", title: "Settings & privacy" },
];

const SHOTS = [
  "index/app-overview.png",
  "getting-started/install-dmg.png",
  "getting-started/welcome-notebook.png",
  "getting-started/new-notebook.png",
  "getting-started/task-list.png",
  "getting-started/mention-menu.gif",
  "getting-started/date-reminder.png",
  "getting-started/cover-graph-connect.gif",
  "getting-started/command-palette.png",
  "blocks/slash-menu.png",
  "blocks/text-basics.png",
  "blocks/task-list.png",
  "blocks/callout-types.png",
  "blocks/toggle-list.png",
  "blocks/columns.png",
  "blocks/carousel.gif",
  "blocks/database.png",
  "blocks/code-block.png",
  "blocks/embed-video.png",
  "advanced-blocks/authored-database.png",
  "advanced-blocks/entity-table.png",
  "advanced-blocks/query-table-bound.png",
  "advanced-blocks/dashboard-grid.png",
  "advanced-blocks/widget-editor.png",
  "advanced-blocks/kanban-drag-to-done.gif",
  "advanced-blocks/gantt-edit-mode.png",
  "advanced-blocks/mermaid-live.png",
  "advanced-blocks/drawing-canvas.png",
  "advanced-blocks/github-repo-card.png",
  "capture-and-reading/file-brain-toggle.png",
  "capture-and-reading/bookmark-card.png",
  "capture-and-reading/inline-reader.png",
  "capture-and-reading/pop-out-window.png",
  "capture-and-reading/video-pip-float.gif",
  "capture-and-reading/native-float-over-app.png",
  "capture-and-reading/native-float-handback.gif",
  "references/reader-highlight-cite.png",
  "references/citation-block.png",
  "references/references-library.png",
  "references/smart-add.png",
  "references/connectors-settings.png",
  "references/highlight-categories.png",
  "references/github-block.png",
  "smart-tags/formed-pills.png",
  "smart-tags/create-type-menu.png",
  "smart-tags/custom-type-editor.png",
  "smart-tags/entity-card.png",
  "smart-tags/entity-detail-page.png",
  "smart-tags/relation-field-how-it-reads.png",
  "smart-tags/entity-card-relationships-grouped.png",
  "dates-and-reminders/date-pill-forming.gif",
  "dates-and-reminders/reminder-countdown.png",
  "dates-and-reminders/reminder-controls.png",
  "dates-and-reminders/alerts-lens.png",
  "tracking/complete-tag-on-block.png",
  "tracking/section-cascade-down.png",
  "tracking/tasklist-rollup-up.png",
  "smart-views/lens-switcher.png",
  "smart-views/entities-directory.png",
  "smart-views/tag-card.png",
  "smart-views/dates-agenda.png",
  "smart-views/files-lens.png",
  "smart-views/stats-dashboard.png",
  "smart-views/widget-editor.png",
  "knowledge-graph/graph-view.png",
  "knowledge-graph/cluster-by-legend.png",
  "knowledge-graph/entity-panel.png",
  "knowledge-graph/cover-graph.png",
  "ai-models/local-provider-no-key.png",
  "ai-models/provider-picker-two-pane.png",
  "summon/glowing-button-dock.png",
  "summon/live-write-into-editor.gif",
  "summon/deep-research-chip.png",
  "summon/composer-smart-tags.png",
  "summon/assign-flow.png",
  "summon/tasks-view.png",
  "summon/capabilities-two-pane.png",
  "mcp/vault-server-panel.png",
  "mcp/context7-capability.png",
  "sharing-and-data/export-dialog.png",
  "sharing-and-data/import-entry-settings.png",
  "sharing-and-data/publish-dialog.png",
  "sharing-and-data/published-page.png",
  "sharing-and-data/publish-menu-label.png",
  "sharing-and-data/view-count-eye.png",
  "sharing-and-data/publish-analytics.png",
  "menu-bar/tray-popup.png",
  "menu-bar/tray-icon-badge.png",
  "menu-bar/app-menu.png",
  "menu-bar/about-window.png",
  "power-tools/smartcopy-paste.png",
  "power-tools/templates-picker.png",
  "power-tools/version-history.png",
  "power-tools/comment-scrollbar.png",
  "power-tools/entity-view.png",
  "power-tools/command-palette.png",
  "settings-privacy/connectors-panel.png",
  "settings-privacy/highlights-panel.png",
  "settings-privacy/theme-gallery-scene.png",
  "advanced-blocks/widget-smart-tag-type.png",
  "advanced-blocks/github-repo-tabs.png",
  "references/reference-tags.png",
  "references/collections.png",
  "references/saved-searches.png",
  "references/citation-styles.png",
  "references/bibliography.png",
  "references/library-search.png",
  "insights/kpi-strip.png",
  "insights/calendar-heatmap.png",
];

(function () {
  const here = (location.pathname.split("/").pop() || "index.html");

  /* Sidebar */
  const side = document.getElementById("docs-sidebar");
  if (side) {
    let html = "";
    for (const p of PAGES) {
      if (p.section) { html += `<h4>${p.section}</h4>`; continue; }
      const active = p.file === here ? " class=\"active\"" : "";
      const pro = p.pro ? ` <span class="pro-badge">Pro</span>` : "";
      html += `<a href="${p.file}"${active}>${p.title}${pro}</a>`;
    }
    side.innerHTML = html;
  }

  /* Prev / next pager */
  const pager = document.getElementById("docs-pager");
  if (pager) {
    const flat = PAGES.filter(p => p.file);
    const i = flat.findIndex(p => p.file === here);
    let html = "";
    if (i > 0) {
      const prev = flat[i - 1];
      html += `<a class="pager-prev" href="${prev.file}"><span class="pager-dir">← Previous</span><span class="pager-title">${prev.title}</span></a>`;
    }
    if (i >= 0 && i < flat.length - 1) {
      const next = flat[i + 1];
      html += `<a class="pager-next" href="${next.file}"><span class="pager-dir">Next →</span><span class="pager-title">${next.title}</span></a>`;
    }
    pager.innerHTML = html;
  }

  /* Footer stamp */
  const foot = document.getElementById("docs-foot");
  if (foot) {
    foot.innerHTML =
      `<span>Written for Nomima v${GUIDE_VERSION} · last updated ${GUIDE_UPDATED}</span>` +
      `<span><a href="../index.html">nomima.io</a> · <a href="../contact.html">Something wrong or missing? Tell us</a></span>`;
  }

  /* Lightbox — click any figure image to zoom it full-screen. Delegated so it
     works for images added later; no-ops on pages that only have slots. */
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt="" />';
  const boxImg = box.querySelector("img");
  document.body.appendChild(box);
  const closeBox = () => box.classList.remove("open");
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".figure-img");
    if (img) { boxImg.src = img.currentSrc || img.src; boxImg.alt = img.alt || ""; box.classList.add("open"); }
  });
  box.addEventListener("click", closeBox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });

  /* Capture-reference badges: stamp every placeholder with its global number
     (#NNN, matches CAPTURE-CHECKLIST.md) and its target filename, so captured
     screenshots can be named to match. Skips real images. */
  document.querySelectorAll(".figure-slot[data-shot]").forEach((slot) => {
    const shot = slot.getAttribute("data-shot");
    const idx = (typeof SHOTS !== "undefined") ? SHOTS.indexOf(shot) : -1;
    const num = idx >= 0 ? String(idx + 1).padStart(3, "0") : "—";
    const ref = document.createElement("span");
    ref.className = "figure-slot-ref";
    ref.innerHTML = '<span class="ref-num">#' + num + '</span><code>' + shot + '</code>';
    slot.insertBefore(ref, slot.firstChild);
  });
})();
