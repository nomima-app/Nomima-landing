/* ===========================================================================
   kg3d.js — the app's glowy 3D knowledge graph, in raw three.js.

   • Glossy glass-marble orbs (MeshPhysical clearcoat + env reflections +
     emissive glow), lit by a shadow-casting key light and three MOVING coloured
     fill lights, so shading, reflections and shadows shift the whole way down.
   • Wireframe "brain" hub that spins + breathes; spider-web links with
     travelling neon synapse pulses.
   • Camera flies AROUND (yaw) and UP/DOWN (pitch) — but EASES so it SLOWS to a
     near-stop while a block is in focus (letting you read the matching tags),
     then sweeps on during the hand-off.
   • The active block's tags glow hot + come forward; everything else dims.

   API:  setView(flow)  → camera fly-over + focus slowdown, driven by scroll
         setStep(step)  → light up the orbs + pulses that match the active block
   ========================================================================== */
import * as THREE from "https://esm.sh/three@0.160.0";
import { RoomEnvironment } from "https://esm.sh/three@0.160.0/examples/jsm/environments/RoomEnvironment.js";
import { forceSimulation, forceManyBody, forceLink, forceCenter, forceRadial } from "https://esm.sh/d3-force-3d@3.0.5";

// Exact Nomima KG palette (src/theme/themes/buildTheme.ts → ENTITY_PALETTE.dark).
const COLOR = {
  person: "#60A5FA", team: "#22D3EE", company: "#C084FC", location: "#34D399",
  product: "#FB7185", project: "#FB923C", idea: "#FBBF24", topic: "#A3E635",
  status: "#E879F9", date: "#8FC2FF", note: "#8FC2FF", mention: "#8FC2FF",
};
const ACCENT = "#5b6cff";
const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());
const smoothstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function softTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d");
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, "rgba(255,255,255,1)");
  gr.addColorStop(0.13, "rgba(255,255,255,0.72)");
  gr.addColorStop(0.40, "rgba(255,255,255,0.13)");
  gr.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// A dark nebula sky with soft coloured blooms — gives the scene background light
// (so it's not pure black) AND something for the glass orbs to refract/reflect.
function nebulaTexture() {
  const c = document.createElement("canvas"); c.width = 1024; c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#05060d"; g.fillRect(0, 0, 1024, 512);
  const blooms = [
    [200, 150, 380, "rgba(78,96,225,0.62)"],   // indigo
    [820, 360, 440, "rgba(38,165,220,0.48)"],  // cyan
    [560, 90, 320, "rgba(165,66,198,0.42)"],   // magenta
    [430, 430, 360, "rgba(44,135,168,0.38)"],  // teal
    [930, 110, 260, "rgba(132,100,228,0.42)"], // violet
  ];
  blooms.forEach(([x, y, r, col]) => {
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, col); gr.addColorStop(1, "rgba(5,6,13,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 1024, 512);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.mapping = THREE.EquirectangularReflectionMapping;
  return t;
}

function create(container, opts) {
  if (!container) return null;
  const NODES = opts.nodes, LINKS = opts.links || [], hubId = opts.hubId;
  while (container.firstChild) container.removeChild(container.firstChild);
  const W = () => container.clientWidth || 1, H = () => container.clientHeight || 1;

  // ── Renderer (transparent, shadows, tone-mapped) ───────────────────────────
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(W(), H());
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  renderer.domElement.style.display = "block";

  const scene = new THREE.Scene();
  // NOTE: no scene.background — the canvas stays transparent so the page's own
  // homepage background (dark shell + .glow orbs) shows through, unchanged.
  const camera = new THREE.PerspectiveCamera(46, W() / H(), 1, 6000);
  const R = 920;                        // pulled back — the globe sits further away
  camera.position.set(0, 0, R);

  // ── Lights: a shadow key + 3 moving coloured fills ─────────────────────────
  scene.add(new THREE.AmbientLight(0x223052, 0.55));
  const key = new THREE.DirectionalLight(0xfff2e0, 2.3);
  key.position.set(220, 300, 260); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 10; key.shadow.camera.far = 1800;
  key.shadow.camera.left = -340; key.shadow.camera.right = 340;
  key.shadow.camera.top = 340; key.shadow.camera.bottom = -340;
  key.shadow.bias = -0.0009; key.shadow.radius = 4;
  scene.add(key);
  const fillA = new THREE.DirectionalLight(0x6b78ff, 1.3); fillA.position.set(-280, 60, 180); scene.add(fillA);
  const fillB = new THREE.DirectionalLight(0x22d3ee, 0.9); fillB.position.set(200, -240, -120); scene.add(fillB);
  const fillC = new THREE.DirectionalLight(0xff5fa2, 0.8); fillC.position.set(-140, 180, -280); scene.add(fillC);
  try {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  } catch (e) { /* env optional */ }

  const soft = softTexture();
  const graph = new THREE.Group(); scene.add(graph);

  // ── Force-directed 3D layout (settled once) ────────────────────────────────
  const sim = forceSimulation(NODES, 3)
    .force("charge", forceManyBody().strength(-72))
    .force("link", forceLink(LINKS).id(d => d.id).distance(36).strength(0.62))
    .force("center", forceCenter(0, 0, 0))
    .force("radial", forceRadial(140, 0, 0, 0).strength(0.05))
    .stop();
  const hubNode = NODES.find(n => n.id === hubId);
  if (hubNode) { hubNode.fx = 0; hubNode.fy = 0; hubNode.fz = 0; }
  for (let i = 0; i < 300; i++) sim.tick();
  let maxR = 1; NODES.forEach(n => { maxR = Math.max(maxR, Math.hypot(n.x, n.y, n.z)); });
  const SCALE = 195 / maxR;
  const posOf = new Map();
  NODES.forEach(n => posOf.set(n.id, new THREE.Vector3(n.x * SCALE, n.y * SCALE, n.z * SCALE)));

  // Per-step centroid of the matching tag-nodes — the camera frames this when a
  // block is in focus (graph turns so these nodes face the viewer + zoom in).
  const stepCentroid = new Map();
  for (let s = 1; s <= (opts.totalSteps || 11); s++) {
    const ns = NODES.filter(n => n.step === s && n.id !== hubId);
    if (!ns.length) continue;
    const c = new THREE.Vector3(); ns.forEach(n => c.add(posOf.get(n.id))); c.multiplyScalar(1 / ns.length);
    stepCentroid.set(s, c);
  }

  // ── Vibrant glass-marble orbs (dielectric so the hue stays pure) + glow halo ─
  const sphereGeo = new THREE.SphereGeometry(1, 26, 26);
  const orbs = [];
  const orbById = new Map();
  NODES.forEach(n => {
    if (n.id === hubId) return;
    const col = new THREE.Color(COLOR[n.kind] || COLOR.mention);
    const r = 5.6 + Math.sqrt(n.weight || 4) * 2.7;
    // metalness 0 keeps the exact KG hue (metal tints reflections grey); a strong
    // emissive of the same colour makes it glow vividly; clearcoat gives the glass sheen.
    const mat = new THREE.MeshPhysicalMaterial({
      color: col, metalness: 0.0, roughness: 0.16,
      clearcoat: 1.0, clearcoatRoughness: 0.12,
      emissive: col, emissiveIntensity: 0.45,
      envMapIntensity: 1.3, transparent: true, opacity: 1,
    });
    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.position.copy(posOf.get(n.id)); mesh.scale.setScalar(r);
    mesh.castShadow = true; mesh.receiveShadow = true;
    graph.add(mesh);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft, color: col, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false }));
    halo.position.copy(mesh.position); halo.scale.setScalar(r * 2.2);
    graph.add(halo);
    // _rev: 0 = not yet revealed, 1 = shown. Nodes pop in as you scroll to their step.
    const orb = { data: n, mesh, halo, baseR: r, col, hl: 0, rev: 0, revT: 0 };
    orbs.push(orb); orbById.set(n.id, orb);
  });

  // ── Hub: wireframe brain + glossy core, breathing ──────────────────────────
  const hubR = 17;
  const hub = new THREE.Group();
  const brain = new THREE.Mesh(
    new THREE.IcosahedronGeometry(hubR * 1.2, 1),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT), wireframe: true, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  const hubCore = new THREE.Mesh(sphereGeo, new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xcdd9ff), metalness: 0.4, roughness: 0.08, clearcoat: 1,
    emissive: new THREE.Color(0x8aa0ff), emissiveIntensity: 0.5, envMapIntensity: 2.6,
  }));
  hubCore.scale.setScalar(hubR); hubCore.castShadow = true;
  const hubHalo = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft, color: new THREE.Color(0x9fb4ff), transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
  hubHalo.scale.setScalar(hubR * 5);
  hub.add(brain, hubCore, hubHalo);
  if (hubNode) hub.position.copy(posOf.get(hubId));
  graph.add(hub);

  // ── Spider-web links + travelling synapse pulses ───────────────────────────
  const linkPos = new Float32Array(LINKS.length * 6);
  LINKS.forEach((l, i) => {
    const s = posOf.get(typeof l.source === "object" ? l.source.id : l.source);
    const t = posOf.get(typeof l.target === "object" ? l.target.id : l.target);
    l._s = s; l._t = t; l._off = (i * 0.173) % 1; l._hl = 0;
    if (s && t) linkPos.set([s.x, s.y, s.z, t.x, t.y, t.z], i * 6);
  });
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linkPos, 3));
  const lineCol = new Float32Array(LINKS.length * 6);   // per-vertex colour → reveal via brightness
  lineGeo.setAttribute("color", new THREE.BufferAttribute(lineCol, 3));
  const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending }));
  graph.add(lines);

  const pCount = LINKS.length;
  const pPos = new Float32Array(pCount * 3), pCol = new Float32Array(pCount * 3);
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
  const pulses = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 7, map: soft, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  graph.add(pulses);

  // faint starfield for depth
  const starN = 130, starPos = new Float32Array(starN * 3);
  for (let i = 0; i < starN; i++) {
    const rr = 420 + Math.random() * 520, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    starPos.set([rr * Math.sin(ph) * Math.cos(th), rr * Math.sin(ph) * Math.sin(th), rr * Math.cos(ph)], i * 3);
  }
  const starGeo = new THREE.BufferGeometry(); starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 2, map: soft, color: new THREE.Color(0x8fa6ff), transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending })));

  // ── Animation loop ─────────────────────────────────────────────────────────
  const STEP_YAW = 0.44;                 // radians the camera sweeps per block
  const IDENT = new THREE.Quaternion();
  let curYaw = 0, tgtYaw = 0, curPitch = 0.16, tgtPitch = 0.16, idle = 0, settle = 0, last = now();
  let panY = 0, curPanY = 0, targetCentroid = stepCentroid.get(1) || null;
  const accent = new THREE.Color(ACCENT), white = new THREE.Color(0xffffff), tmp = new THREE.Vector3();
  const camDir = new THREE.Vector3(), cdir = new THREE.Vector3(), qTo = new THREE.Quaternion(), qTarget = new THREE.Quaternion();
  const eid = (x) => (x == null ? "" : typeof x === "object" ? String(x.id ?? "") : String(x)); // link endpoint → node id

  function frame() {
    raf = requestAnimationFrame(frame);
    const t = now(), dt = Math.min(64, t - last); last = t; const ts = t * 0.001;

    // idle drift slows to a crawl while a block is in focus (settle≈1)
    idle += dt * 0.00009 * (1 - 0.9 * settle);
    curYaw += (tgtYaw - curYaw) * 0.05;
    curPitch += (tgtPitch - curPitch) * 0.05;
    curPanY += (panY - curPanY) * 0.05;

    // ZOOM: big swing — globe RECEDES far while a block is in focus (block is the
    // hero) and rushes FORWARD close during the transitions as it sweeps past.
    const Rz = R * (0.66 + 0.62 * settle);
    const yaw = curYaw + idle, pit = curPitch;
    camera.position.set(Rz * Math.cos(pit) * Math.sin(yaw), Rz * Math.sin(pit) + curPanY, Rz * Math.cos(pit) * Math.cos(yaw));
    camera.lookAt(0, curPanY * 0.35, 0);     // PAN: shift the framing vertically

    // FOCUS: turn the whole graph so the matching tag-nodes face the camera
    qTarget.copy(IDENT);
    if (targetCentroid && targetCentroid.length() > 14 && settle > 0.02) {
      camDir.copy(camera.position).normalize();
      cdir.copy(targetCentroid).normalize();
      qTo.setFromUnitVectors(cdir, camDir);
      qTarget.copy(IDENT).slerp(qTo, settle * 0.9);
    }
    graph.quaternion.slerp(qTarget, 0.06);

    // Moving coloured lights → shading + shadows shift continuously, and the whole
    // rig brightens + swings WIDER during the transitions (when the globe is forward).
    const move = 1 - settle;                               // 0 at focus, 1 mid-transition
    const la = ts * 0.4 + curYaw * 0.5;
    const sweep = 1 + move * 0.5;
    fillA.position.set(Math.cos(la) * 300 * sweep, 80 + Math.sin(ts * 0.5) * 120, Math.sin(la) * 300 * sweep);
    fillB.position.set(Math.cos(la + 2.2) * 280 * sweep, -180 + Math.cos(ts * 0.6) * 100, Math.sin(la + 2.2) * 280 * sweep);
    fillC.position.set(Math.cos(-la + 4) * 260, 160, Math.sin(-la + 4) * 260);
    fillA.intensity = 1.0 + 0.6 * move + 0.3 * Math.sin(ts * 0.7);
    fillB.intensity = 0.7 + 0.5 * move;
    key.intensity = 1.9 + 0.9 * move;                      // brighter as the globe comes forward
    key.position.set(Math.cos(ts * 0.18) * 260, 300, Math.sin(ts * 0.18) * 260);

    // Orbs: reveal on scroll (pop in), matching nodes GLOW, others DIM while in focus
    orbs.forEach(o => {
      o.rev += (o.revT - o.rev) * 0.10;                // progressive reveal as you scroll
      o.hl += ((o.target ? 1 : 0) - o.hl) * 0.08;
      const other = 1 - o.hl, rev = o.rev;
      const shown = rev > 0.02;
      o.mesh.visible = shown; o.halo.visible = shown;
      if (!shown) return;
      // vivid emissive (the pure hue glows); matching nodes blaze brighter
      o.mesh.material.emissiveIntensity = 0.5 * (1 - 0.5 * settle * other) + o.hl * 2.0 * (1 + settle * 0.7);
      o.mesh.material.opacity = (1 - 0.46 * settle * other) * rev;
      const s = o.baseR * (1 + o.hl * 0.34) * (0.45 + 0.55 * rev); o.mesh.scale.setScalar(s);
      o.halo.scale.setScalar(o.baseR * (1.7 + o.hl * (2.4 + settle * 1.4)) * (0.5 + 0.5 * rev));
      o.halo.material.opacity = (0.1 * (1 - 0.5 * settle * other) + o.hl * (0.42 + settle * 0.26)) * rev;
    });

    brain.rotation.y += 0.005 * (1 - 0.7 * settle); brain.rotation.x += 0.0026;
    hub.scale.setScalar(1 + 0.06 * Math.sin(ts * 1.3));
    hubHalo.material.opacity = (0.38 + 0.12 * Math.sin(ts * 1.6)) * (1 - 0.5 * settle);

    for (let i = 0; i < pCount; i++) {
      const l = LINKS[i]; if (!l._s || !l._t) continue;
      l._hl += ((l._active ? 1 : 0) - l._hl) * 0.08;
      // a link is shown only once BOTH its nodes are revealed (hub counts as shown)
      const so = orbById.get(eid(l.source)), to = orbById.get(eid(l.target));
      const rl = Math.min(so ? so.rev : 1, to ? to.rev : 1);
      // travelling pulse
      const frac = (ts * 0.15 + l._off) % 1;
      tmp.copy(l._s).lerp(l._t, frac);
      pPos[i * 3] = tmp.x; pPos[i * 3 + 1] = tmp.y; pPos[i * 3 + 2] = tmp.z;
      const c = l._hl > 0.5 ? white : accent, k = ((0.2 - settle * 0.14) + l._hl * (0.8 + settle * 0.3)) * rl;
      pCol[i * 3] = c.r * k; pCol[i * 3 + 1] = c.g * k; pCol[i * 3 + 2] = c.b * k;
      // faint web line — brightness via vertex colour, faded back at focus, gated by reveal
      const la2 = ((0.10 + l._hl * 0.5) * (1 - 0.55 * settle)) * rl;
      for (let v = 0; v < 6; v += 3) { lineCol[i * 6 + v] = accent.r * la2; lineCol[i * 6 + v + 1] = accent.g * la2; lineCol[i * 6 + v + 2] = accent.b * la2; }
    }
    pGeo.attributes.position.needsUpdate = true;
    pGeo.attributes.color.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }
  let raf = requestAnimationFrame(frame);

  return {
    setStep(step) {
      targetCentroid = stepCentroid.get(step) || null;
      orbs.forEach(o => {
        o.target = o.data.step === step;        // glow when this block is up
        o.revT = o.data.step <= step ? 1 : 0;   // revealed once you've scrolled to its step
      });
      LINKS.forEach(l => {
        const ss = typeof l.source === "object" ? l.source.id : l.source;
        const tt = typeof l.target === "object" ? l.target.id : l.target;
        const sn = NODES.find(n => n.id === ss), tn = NODES.find(n => n.id === tt);
        l._active = (sn && sn.step === step) || (tn && tn.step === step);
      });
    },
    setView(flow) {
      // `flow` is already dwell-eased by the page (slow near each block, fast between),
      // so drive the camera straight from it — no extra re-easing here.
      flow = flow || 0;
      tgtYaw = flow * STEP_YAW;                          // dwells when flow dwells
      tgtPitch = 0.16 + 0.42 * Math.sin(flow * 0.8);     // rise above / dip below
      panY = Math.sin(flow * 0.55) * 64;                 // vertical pan of the framing
      const f = flow - Math.floor(flow), d = Math.min(f, 1 - f);
      settle = 1 - smoothstep(0.02, 0.32, d);            // ≈1 while a block is in focus
    },
    resize() {
      const w = W(), h = H(); if (!w || !h) return;
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
    },
  };
}

window.HeroKG3D = { create };
