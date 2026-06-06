/* ===========================================================================
   Nomima landing — hero knowledge graph.
   A faithful port of the app's Knowledge Graph view
   (src/components/notebook/KnowledgeGraphCanvas.tsx): the SAME engine
   (force-graph / d3-force, 2D canvas), the SAME drawing — glowing typed nodes
   with their lucide icon, curved directional edges with animated particles,
   zoom-stable labels — and the SAME interactions: drag-pan, node-drag, hover
   highlight, click-to-focus with neighbour dimming, ⌘/Ctrl+wheel zoom + toolbar.
   Loaded as an ES module via the import map in index.html.
   =========================================================================== */
import * as FGmod from "force-graph";
const ForceGraph = FGmod.default || FGmod.ForceGraph || FGmod;

/* ── Entity palette + lucide icons: copied from the app so hues/icons match ── */
const COLOR = {
  person: "#60A5FA", team: "#22D3EE", company: "#C084FC", location: "#34D399",
  product: "#FB7185", project: "#FB923C", idea: "#FBBF24", topic: "#A3E635",
  status: "#E879F9", file: "#8aa9d6", mention: "#8FC2FF", tag: "#FBBF24",
  date: "#8FC2FF", reference: "#8FC2FF", note: "#8FC2FF",
};
const ACCENT = "#5b6cff"; // typed-edge / particle accent

const ICON_SVG = {
  notebook: "<path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20'/>",
  tag: "<line x1='4' x2='20' y1='9' y2='9'/><line x1='4' x2='20' y1='15' y2='15'/><line x1='10' x2='8' y1='3' y2='21'/><line x1='16' x2='14' y1='3' y2='21'/>",
  mention: "<circle cx='12' cy='12' r='4'/><path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'/>",
  person: "<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/>",
  team: "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>",
  company: "<rect width='16' height='20' x='4' y='2' rx='2'/><path d='M9 22v-4h6v4'/><path d='M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01'/>",
  project: "<rect width='20' height='14' x='2' y='7' rx='2' ry='2'/><path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/>",
  idea: "<path d='M9 18h6'/><path d='M10 22h4'/><path d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'/>",
  topic: "<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/><path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/>",
  reference: "<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/>",
};

const iconCache = new Map();
function getIconImage(key, color) {
  const inner = ICON_SVG[key];
  if (!inner) return null;
  const ck = key + "|" + color;
  let img = iconCache.get(ck);
  if (img) return img.complete && img.naturalWidth > 0 ? img : null;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${color}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'>${inner}</svg>`;
  img = new Image();
  img.src = "data:image/svg+xml," + encodeURIComponent(svg);
  iconCache.set(ck, img);
  return null;
}
function withAlpha(color, alpha) {
  const a = Math.max(0, Math.min(1, alpha));
  if (color[0] === "#") {
    let h = color.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${a})`;
  }
  return color;
}

/* ── Sample graph: notebooks + entities, like the global KG view ───────────── */
const NODES = [
  { id: "plan",   name: "Q3 Launch Plan", kind: "note",    weight: 9 },
  { id: "beta",   name: "Beta Notes",     kind: "note",    weight: 5 },
  { id: "review", name: "Design Review",  kind: "note",    weight: 5 },
  { id: "sarah",  name: "Sarah",          kind: "person",  weight: 6 },
  { id: "marcus", name: "Marcus",         kind: "person",  weight: 4 },
  { id: "team",   name: "Design Team",    kind: "team",    weight: 5 },
  { id: "acme",   name: "Acme",           kind: "company", weight: 5 },
  { id: "road",   name: "Roadmap",        kind: "project", weight: 6 },
  { id: "launch", name: "Launch",         kind: "project", weight: 4 },
  { id: "q3",     name: "Q3-Goals",       kind: "idea",    weight: 4 },
  { id: "onb",    name: "Onboarding",     kind: "topic",   weight: 4 },
];
const LINKS = [
  // typed relations (curved, arrowed, labelled — like the app's typed edges)
  { source: "sarah", target: "team", rel: "leads", typed: true },
  { source: "acme",  target: "road", rel: "sponsors", typed: true },
  { source: "marcus", target: "acme", rel: "works at", typed: true },
  // notebook ↔ entity mentions (thin, untyped)
  { source: "plan", target: "sarah" }, { source: "plan", target: "team" },
  { source: "plan", target: "acme" },  { source: "plan", target: "road" },
  { source: "plan", target: "launch" }, { source: "plan", target: "q3" },
  { source: "beta", target: "sarah" }, { source: "beta", target: "acme" },
  { source: "beta", target: "onb" },   { source: "review", target: "team" },
  { source: "review", target: "marcus" }, { source: "review", target: "onb" },
  { source: "road", target: "q3" },    { source: "launch", target: "onb" },
];

let mounted = false, Graph = null;
let hover = null, selected = null, neighbors = new Set();

const colorOf = (n) => (n.kind === "note" ? COLOR.note : COLOR[n.kind] || COLOR.mention);
const nodeRadius = (n) => 3.5 + Math.min(8, Math.sqrt((n.weight ?? 1) + 1) * 1.5);
const endpointId = (e) => (e == null ? "" : typeof e === "object" ? String(e.id ?? "") : String(e));
const isActive = (l) => selected != null && (endpointId(l.source) === selected || endpointId(l.target) === selected);

function drawNode(node, ctx, scale) {
  if (node.x == null || node.y == null) return;
  const dim = selected != null && !neighbors.has(String(node.id));
  const hovered = hover === node.id || selected === node.id;
  const r = nodeRadius(node), col = colorOf(node), a = dim ? 0.25 : 1;

  const halo = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2.4);
  halo.addColorStop(0, withAlpha(col, (hovered ? 0.5 : 0.22) * a));
  halo.addColorStop(1, withAlpha(col, 0));
  ctx.fillStyle = halo;
  ctx.beginPath(); ctx.arc(node.x, node.y, r * 2.4, 0, Math.PI * 2); ctx.fill();

  ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
  ctx.fillStyle = withAlpha(col, 0.18 * a); ctx.fill();
  ctx.lineWidth = (hovered ? 1.8 : 1.1) / scale;
  ctx.strokeStyle = withAlpha(col, (hovered ? 0.95 : 0.62) * a); ctx.stroke();

  const img = getIconImage(node.kind === "note" ? "reference" : node.kind, col);
  if (img) {
    const s = r * 1.35;
    ctx.globalAlpha = a; ctx.drawImage(img, node.x - s / 2, node.y - s / 2, s, s); ctx.globalAlpha = 1;
  }

  if (node.name && (scale > 1.0 || hovered)) {
    const fs = 11 / scale;
    ctx.font = `${fs}px Inter, system-ui, sans-serif`;
    ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillStyle = `rgba(255,255,255,${hovered ? 0.96 : 0.6 * a})`;
    ctx.fillText(node.name, node.x + r + 3 / scale, node.y);
  }
}
function drawPointer(node, color, ctx) {
  if (node.x == null) return;
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(node.x, node.y, nodeRadius(node) + 2, 0, Math.PI * 2); ctx.fill();
}
function linkColor(l) {
  const active = isActive(l);
  if (l.typed) return withAlpha(ACCENT, selected != null ? (active ? 0.75 : 0.06) : 0.34);
  return `rgba(255,255,255,${selected != null ? (active ? 0.3 : 0.03) : 0.1})`;
}
function labelLink(l, ctx, scale) {
  if (!l.typed || !l.rel) return;
  const active = isActive(l);
  if (!active && scale < 1.6) return;
  const s = l.source, t = l.target;
  if (s.x == null || t.x == null) return;
  const mx = (s.x + t.x) / 2, my = (s.y + t.y) / 2, fs = 9 / scale;
  ctx.font = `${fs}px Inter, system-ui, sans-serif`;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const w = ctx.measureText(l.rel).width;
  ctx.fillStyle = `rgba(0,0,0,${active ? 0.5 : 0.32})`;
  ctx.fillRect(mx - w / 2 - 3 / scale, my - 6.5 / scale, w + 6 / scale, 13 / scale);
  ctx.fillStyle = `rgba(255,255,255,${active ? 0.95 : 0.7})`;
  ctx.fillText(l.rel, mx, my);
}

function setSelected(id) {
  selected = id;
  const nb = new Set();
  if (id) {
    nb.add(id);
    for (const e of LINKS) {
      if (e.source === id || (e.source && e.source.id === id)) nb.add(endpointId(e.target));
      else if (e.target === id || (e.target && e.target.id === id)) nb.add(endpointId(e.source));
    }
  }
  neighbors = nb;
}

const clamp = (z) => Math.max(0.15, Math.min(8, z));

function mount() {
  const el = document.getElementById("kg");
  if (mounted || !el || !el.clientWidth) return;
  try {
    mounted = true;
    Graph = ForceGraph()(el)
      .width(el.clientWidth).height(el.clientHeight)
      .backgroundColor("rgba(0,0,0,0)")
      .minZoom(0.15).maxZoom(8)
      .nodeRelSize(4)
      .nodeLabel(() => "")
      .nodeCanvasObjectMode(() => "replace")
      .nodeCanvasObject(drawNode)
      .nodePointerAreaPaint(drawPointer)
      .linkColor(linkColor)
      .linkWidth((l) => (isActive(l) ? 2 : l.typed ? 1 : 0.6))
      .linkCurvature((l) => (l.typed ? 0.12 : 0.05))
      .linkDirectionalArrowLength((l) => (l.typed ? 3.2 : 0))
      .linkDirectionalArrowRelPos(0.92)
      .linkDirectionalArrowColor(linkColor)
      .linkDirectionalParticles((l) => (isActive(l) ? 4 : l.typed ? 2 : 0))
      .linkDirectionalParticleWidth(2)
      .linkDirectionalParticleColor(() => ACCENT)
      .linkCanvasObjectMode(() => "after")
      .linkCanvasObject(labelLink)
      .enableNodeDrag(true)
      .enableZoomInteraction(false) // gate zoom behind ⌘/Ctrl so the page scrolls
      .cooldownTime(12000)
      .onNodeHover((n) => { hover = n ? String(n.id) : null; el.style.cursor = n ? "pointer" : "grab"; })
      .onNodeClick((n) => setSelected(selected === String(n.id) ? null : String(n.id)))
      .onBackgroundClick(() => setSelected(null))
      .graphData({ nodes: NODES.map((n) => ({ ...n })), links: LINKS.map((l) => ({ ...l })) });

    Graph.d3Force("charge").strength(-160);
    Graph.d3Force("link").distance((l) => (l.typed ? 64 : 48));
    Graph.onEngineStop(() => Graph.zoomToFit(500, 48));

    // ⌘/Ctrl + wheel zooms; plain wheel scrolls the page (like the app's note cover).
    el.addEventListener("wheel", (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      Graph.zoom(clamp(Graph.zoom() * (e.deltaY < 0 ? 1.15 : 1 / 1.15)), 120);
    }, { passive: false });

    const ro = new ResizeObserver(() => Graph.width(el.clientWidth).height(el.clientHeight));
    ro.observe(el);

    window.NomimaKG = {
      mount,
      zoomBy: (f) => Graph.zoom(clamp(Graph.zoom() * f), 240),
      reset: () => Graph.zoomToFit(420, 48),
    };
  } catch (err) {
    mounted = false;
    const stage = el.closest(".kg-stage");
    if (stage) stage.style.display = "none";
    console.warn("[kg] graph failed to mount:", err);
  }
}

window.NomimaKG = { mount, zoomBy() {}, reset() {} };
const target = document.getElementById("kg");
if (target) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting) && target.clientWidth) { io.disconnect(); mount(); }
  });
  io.observe(target);
}
mount();
