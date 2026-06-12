/* Nomima User Guide — single source of truth for guide navigation.
   ON EVERY RELEASE: bump GUIDE_VERSION + GUIDE_UPDATED, and add/adjust PAGES
   if features changed. The sidebar, prev/next pager, and footer stamp on
   every page are generated from this file — edit nothing else for nav. */

const GUIDE_VERSION = "1.9.0";
const GUIDE_UPDATED = "June 11, 2026";

const PAGES = [
  { section: "Start here" },
  { file: "index.html",            title: "Guide home" },
  { file: "getting-started.html",  title: "Getting started" },

  { section: "Writing" },
  { file: "blocks.html",           title: "Blocks" },
  { file: "smart-tags.html",       title: "Mentions & hashtags" },
  { file: "dates-and-reminders.html", title: "Dates & reminders" },
  { file: "tracking.html",         title: "Complete & incomplete" },

  { section: "Finding & seeing" },
  { file: "smart-views.html",      title: "Smart Views & Home" },
  { file: "knowledge-graph.html",  title: "Knowledge Graph" },

  { section: "AI & integrations" },
  { file: "ai-models.html",        title: "AI models" },
  { file: "summon.html",           title: "Summon assistant" },
  { file: "mcp.html",              title: "MCP server" },

  { section: "Everything else" },
  { file: "power-tools.html",      title: "Paste, templates & shortcuts" },
  { file: "settings-privacy.html", title: "Settings & privacy" },
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
      `<span><a href="../index.html">nomima.app</a> · <a href="../contact.html">Something wrong or missing? Tell us</a></span>`;
  }
})();
