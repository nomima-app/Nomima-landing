/* ===========================================================================
   kgbg.js — the LIVING knowledge-graph GLOBE behind each hero page.

   Three modes:
   • growth  (index.html) — nodes appear step by step, cluster drifts in corner
   • sphere  (blocks.html) — dense globe (50+ pre-seeded nodes) arranged on a
     3D sphere with depth-cueing: front nodes big+bright, back nodes dim+small.
     The sphere rotates continuously and the scroll-driven camera sweeps the globe.
     Current-step nodes + their edges glow to match what's in the active block.
   ========================================================================== */
import * as FGmod from "force-graph";
const ForceGraph = FGmod.default || FGmod.ForceGraph || FGmod;
const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());
const TAU = Math.PI * 2;

const COLOR = {
  person: "#60A5FA", team: "#22D3EE", company: "#C084FC", location: "#34D399",
  product: "#FB7185", project: "#FB923C", idea: "#FBBF24", topic: "#A3E635",
  status: "#E879F9", date: "#2DD4BF", note: "#8FC2FF", mention: "#8FC2FF",
};
const ACCENT = "#5b6cff";
const ICON_SVG = {
  reference: "<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/>",
  person: "<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/>",
  team: "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>",
  company: "<rect width='16' height='20' x='4' y='2' rx='2'/><path d='M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01'/>",
  project: "<rect width='20' height='14' x='2' y='7' rx='2'/><path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/>",
  idea: "<path d='M9 18h6'/><path d='M10 22h4'/><path d='M15 14c.2-1 .7-1.7 1.5-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5'/>",
  topic: "<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/><path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/>",
  status: "<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'/><line x1='4' x2='4' y1='22' y2='15'/>",
  date: "<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>",
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
const colorOf = (n) => COLOR[n.kind] || COLOR.mention;
const baseRadius = (n) => 2.8 + Math.min(6, Math.sqrt((n.weight ?? 1) + 1) * 1.2);

// ── 3D sphere projection ─────────────────────────────────────────────────────
// Projects a unit-sphere point (phi=polar, theta=azimuth) to 2D screen coords.
// rotY = yaw (rotation around vertical axis), tiltX = pitch.
// Returns screen-space {sx, sy} and depth (-1=back, +1=front).
function projectSphere(phi, theta, rotY, tiltX, R) {
  // Unit-sphere position
  let x = Math.sin(phi) * Math.cos(theta + rotY);
  let y = Math.cos(phi);
  let z = Math.sin(phi) * Math.sin(theta + rotY);
  // Tilt (rotate around X axis)
  const cy = Math.cos(tiltX), sy = Math.sin(tiltX);
  const ty = y * cy - z * sy;
  const tz = y * sy + z * cy;
  return { sx: x * R, sy: ty * R, depth: tz };
}

// Golden-ratio spiral: distributes N points evenly on a unit sphere.
function sphereDistrib(N) {
  const pts = [];
  const gold = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const t = i / Math.max(1, N - 1);
    const phi = Math.acos(1 - 2 * t);      // polar: 0 (north) → π (south)
    const theta = gold * i;                  // azimuth: golden spiral
    pts.push({ phi, theta });
  }
  return pts;
}

function drawNode(node, ctx, scale) {
  if (node.x == null || node.y == null) return;
  const front = node._front == null ? 1 : node._front; // 0=back, 1=front
  const rev   = node._rev   == null ? 1 : node._rev;   // 0=hidden, 1=revealed
  const ea = front * rev;
  if (ea < 0.04) return;

  const r = baseRadius(node) * (0.38 + front * 0.78) * rev;
  const col = colorOf(node);

  // Highlighted glow (current-step match)
  if (node._highlight) {
    const pulse = 0.5 + 0.5 * Math.sin(now() * 0.005);
    const pr = r * (3.4 + pulse * 1.8);
    const pg = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pr);
    pg.addColorStop(0, withAlpha(col, 0.55 * front));
    pg.addColorStop(1, withAlpha(col, 0));
    ctx.fillStyle = pg; ctx.beginPath(); ctx.arc(node.x, node.y, pr, 0, TAU); ctx.fill();
  }

  // Ambient glow — EVERY revealed front node reads as a luminous orb (not just the
  // highlighted ones). A soft breathing pulse keeps the globe alive; front nodes
  // glow brightest, back-of-globe nodes stay dim for depth.
  const breathe = 0.85 + 0.15 * Math.sin(now() * 0.0016 + (node._phi || 0) * 3);
  const glowR = r * (2.6 + front * 0.9) * breathe;
  const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
  glow.addColorStop(0, withAlpha(col, (node._highlight ? 0.5 : 0.34) * ea));
  glow.addColorStop(0.5, withAlpha(col, (node._highlight ? 0.24 : 0.14) * ea));
  glow.addColorStop(1, withAlpha(col, 0));
  ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(node.x, node.y, glowR, 0, TAU); ctx.fill();

  // Core node — a brighter lit centre so the orb has a hot core
  ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, TAU);
  ctx.fillStyle = withAlpha(col, (0.22 + front * 0.16) * ea); ctx.fill();
  ctx.lineWidth = (node._highlight ? 1.5 : 1.0) / scale;
  ctx.strokeStyle = withAlpha(col, (node._highlight ? 0.95 : 0.7) * ea); ctx.stroke();

  // Icon (only on front-facing nodes)
  if (front > 0.45 && rev > 0.6) {
    const img = getIconImage(node.kind === "note" ? "reference" : node.kind, col);
    if (img) { const s = r * 1.3; ctx.globalAlpha = Math.min(1, ea); ctx.drawImage(img, node.x - s / 2, node.y - s / 2, s, s); ctx.globalAlpha = 1; }
  }
  // Label (only front-facing)
  if (node.name && front > 0.6 && scale > 0.5 && rev > 0.7) {
    const fs = 9.5 / scale;
    ctx.font = `${fs}px Inter, system-ui, sans-serif`;
    ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillStyle = `rgba(255,255,255,${0.55 * ea})`;
    ctx.fillText(node.name, node.x + r + 2 / scale, node.y);
  }
}

function create(container, opts) {
  if (!ForceGraph || !container) return null;
  const hubId = opts.hubId;
  const NODES = opts.nodes, LINKS = opts.links || [];
  const sphere = !!opts.sphere;   // dense globe mode for blocks page
  const SPHERE_R = opts.sphereR || 210;  // sphere radius in graph units
  const TILT = opts.tilt != null ? opts.tilt : 0.3;  // camera tilt (radians)
  const GROWTH_R = opts.growthR || 92;   // growth-mode globe radius (smaller corner globe)
  const GROWTH_TILT = 0.42;              // tilt so the growth globe reads as 3D

  // Assign sphere positions using golden-ratio spiral to ALL non-hub nodes
  const sats = NODES.filter(n => n.id !== hubId);
  const coords = sphereDistrib(sats.length);
  sats.forEach((n, i) => {
    n._phi = coords[i].phi;
    n._theta = coords[i].theta;
    n._front = sphere ? 0.5 : null;  // null → drawNode defaults front=1 (always full for growth mode)
    n._rev   = sphere ? 1 : 0;       // sphere: all visible from start; growth: revealed by step
    n._highlight = false;
  });

  const eid = (x) => (x == null ? "" : typeof x === "object" ? String(x.id ?? "") : String(x));
  let highlightSet = new Set();

  const hlLinkColor = (l) => {
    const isHl = highlightSet.size && (highlightSet.has(eid(l.source)) || highlightSet.has(eid(l.target)));
    return isHl ? withAlpha(ACCENT, 0.78) : (l.typed ? withAlpha(ACCENT, 0.22) : "rgba(255,255,255,0.07)");
  };
  const hlParticles = (l) => {
    const isHl = highlightSet.size && (highlightSet.has(eid(l.source)) || highlightSet.has(eid(l.target)));
    // Always run a little flow on typed links so the web reads as alive (not only
    // the highlighted ones); highlighted links get a denser, faster stream.
    return isHl ? 5 : (l.typed ? 2 : 0);
  };

  const Graph = ForceGraph()(container)
    .width(container.clientWidth || 1).height(container.clientHeight || 1)
    .backgroundColor("rgba(0,0,0,0)")
    .nodeRelSize(4)
    .nodeCanvasObjectMode(() => "replace")
    .nodeCanvasObject(drawNode)
    .linkColor(hlLinkColor)
    .linkWidth(l => { const h = highlightSet.size && (highlightSet.has(eid(l.source)) || highlightSet.has(eid(l.target))); return h ? 1.6 : (l.typed ? 0.8 : 0.4); })
    .linkCurvature(l => l.typed ? 0.14 : 0.04)
    .linkDirectionalParticles(hlParticles)
    .linkDirectionalParticleWidth(2)
    .linkDirectionalParticleSpeed(l => (highlightSet.size && (highlightSet.has(eid(l.source)) || highlightSet.has(eid(l.target)))) ? 0.009 : 0.004)
    .linkDirectionalParticleColor(() => ACCENT)
    .enableNodeDrag(false).enableZoomInteraction(false).enablePanInteraction(false)
    .graphData(sphere
      ? { nodes: NODES, links: LINKS }          // sphere: all pre-loaded
      : { nodes: NODES.filter(n => n.id === hubId), links: [] }  // growth: hub only
    );

  Graph.d3Force("charge", null); Graph.d3Force("link", null); Graph.d3Force("center", null);
  Graph.d3AlphaDecay(0).d3AlphaMin(0).cooldownTime(Infinity);

  function reframe() {
    if (!container.clientWidth) return;
    Graph.centerAt(0, 0);
    Graph.zoom(sphere ? 1.6 : 1.8);
  }
  setTimeout(reframe, 80);
  if ("ResizeObserver" in window) {
    new ResizeObserver(() => { if (container.clientWidth) { Graph.width(container.clientWidth).height(container.clientHeight); reframe(); } }).observe(container);
  }

  const hub = NODES.find(n => n.id === hubId);
  if (hub) { hub._rev = 1; hub._front = 1; }

  // Growth-mode state (reversible: grows on scroll-down, shrinks on scroll-up)
  let liveN = sphere ? [...NODES] : (hub ? [hub] : []);
  let liveL = sphere ? [...LINKS] : [];
  const shownN = new Set(liveN.map(n => n.id));
  let curRevealStep = sphere ? 0 : -1;
  const stepOf = (id) => { const n = NODES.find(x => x.id === id); return n ? (n.step || 0) : 0; };

  let rot = 0, idle = 0, kick = 0, scrollRot = 0, tScrollRot = 0, clusterCenterY = 0, last = now(), tScale = 0.85, tOpacity = 0.42, cScale = 0.82, cOpacity = 0.36;

  Graph.onRenderFramePre(() => {
    const t = now(), dt = Math.min(64, t - last); last = t;
    if (hub) { hub.fx = Math.sin(t * 0.00038) * 4; hub.fy = Math.cos(t * 0.00044) * 3; hub._rev = 1; hub._front = 1; }
    const cx = hub ? hub.fx : 0, cy = hub ? hub.fy : 0;
    const rotTotal = rot + idle;

    if (sphere) {
      idle += dt * 0.00007;  // gentle auto-rotation between scroll events
      sats.forEach(n => {
        if (n._rev < 0.98) n._rev = Math.min(1, (n._rev || 0) + dt * 0.004);
        const { sx, sy, depth } = projectSphere(n._phi, n._theta, rotTotal, TILT, SPHERE_R);
        n.fx = cx + sx;
        n.fy = cy + sy;
        n._front = Math.max(0, (depth + 1) / 2);
        n._highlight = highlightSet.has(n.id);
      });
      // Container is handled externally (bg3d wrapper) — don't touch it here
    } else {
      // Growth mode (index page): the nodes sit on a SPINNING 3D globe — each
      // revealed node takes its golden-spiral slot on a sphere; depth-cueing
      // (front big+bright, back small+faint) + continuous rotation = a turning globe.
      // `kick` decays a per-step rotation nudge so the globe visibly turns whenever
      // a new block reveals — that, plus a livelier base spin, keeps it active.
      rot += dt * 0.00060 + kick * dt * 0.0020;   // continuous spin + a stronger fly on each block reveal…
      scrollRot += (tScrollRot - scrollRot) * Math.min(1, dt * 0.006);  // …+ scroll sweeps the POV around the globe
      kick *= Math.pow(0.0025, dt / 1000);   // ease the kick out over ~0.5s
      const camRot = rot + scrollRot;
      // Pass 1: project every satellite, accumulate the vertical centroid. The golden
      // spiral + tilt makes the first few revealed nodes hang below the hub, so the
      // graph's visual centre drifts low. We recentre on the cluster's OWN centre so
      // it stays on the same horizontal line as the section card / blocks.
      let sumSy = 0, nSat = 0;
      liveN.forEach(n => {
        n._rev = Math.min(1, (n._rev || 0) + dt * 0.0045);
        if (n.id === hubId) return;
        const pr = projectSphere(n._phi, n._theta, camRot, GROWTH_TILT, GROWTH_R);
        n._sx = pr.sx; n._sy = pr.sy; n._depth = pr.depth;
        sumSy += pr.sy; nSat++;
      });
      const targetCenterY = nSat ? -sumSy / nSat : 0;
      clusterCenterY += (targetCenterY - clusterCenterY) * Math.min(1, dt * 0.004); // lerp so reveals don't jump
      // Pass 2: place nodes, shifted up by the cluster centroid → visually centred.
      liveN.forEach(n => {
        if (n.id === hubId) { n.fx = cx; n.fy = cy + clusterCenterY; n._front = 1; return; }
        n.fx = cx + n._sx;
        n.fy = cy + n._sy + clusterCenterY;
        n._front = (n._depth + 1) / 2;  // 0 = back of globe (faint), 1 = front (bright)
        n._highlight = highlightSet.has(n.id);   // the active block's nodes glow/pulse
      });
      cScale += (tScale - cScale) * 0.06; cOpacity += (tOpacity - cOpacity) * 0.06;
      const dx = Math.sin(t * 0.00015) * 30, dy = Math.cos(t * 0.000205) * 12;  // gentler vertical bob → stays centred
      container.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(${cScale.toFixed(3)})`;
      container.style.opacity = cOpacity.toFixed(3);
    }
  });

  function setStep(step, eased) {
    if (sphere) {
      // Scroll-driven rotation: camera sweeps around the globe
      rot = -(eased || 0) * TAU;
      highlightSet = new Set(NODES.filter(n => n.step === step).map(n => n.id));
      return;
    }
    // Growth mode: reveal nodes whose step <= current (REVERSIBLE — rebuild the live
    // set whenever the step changes, so scrolling back up shrinks the graph again).
    if (step !== curRevealStep) {
      curRevealStep = step;
      const want = NODES.filter(n => n.id === hubId || (n.step || 0) <= step);
      const wantIds = new Set(want.map(n => n.id));
      const grew = want.length > liveN.length;
      want.forEach(n => { if (n.id !== hubId && !shownN.has(n.id)) { n._rev = 0; n._added = now(); } }); // new → animate in
      shownN.clear(); want.forEach(n => shownN.add(n.id));
      if (grew) kick = Math.min(1.4, kick + 1);   // visible turn of the globe as a block reveals
      liveN = want;
      liveL = LINKS.filter(l => {
        const s = l.source?.id ?? l.source, t = l.target?.id ?? l.target;
        const ls = l.step ?? Math.min(stepOf(s), stepOf(t));
        return ls <= step && wantIds.has(s) && wantIds.has(t);
      });
      Graph.graphData({ nodes: liveN, links: liveL });
    }
    // Camera PANS to a distinct angle per step and SETTLES there — the lerp in the
    // render loop eases between angles, so each scroll turns the POV around the globe
    // and then focuses as the block lands. The current step's nodes are highlighted so
    // they brighten/pulse when their block is on screen.
    highlightSet = new Set(NODES.filter((n) => (n.step || 0) === step).map((n) => n.id));
    tScrollRot = step * 0.62;   // each block sweeps the camera further around the globe
    if (eased != null) { tOpacity = 0.4 + 0.55 * eased; tScale = 0.85 + 0.18 * eased; }
  }

  return {
    setStep,
    buildTicks() {},
    nodeCount() { return liveN.length; },   // live nodes currently in the graph (grows with setStep)
    resize() { if (container.clientWidth) { Graph.width(container.clientWidth).height(container.clientHeight); reframe(); } },
  };
}

window.HeroKG = { create };
