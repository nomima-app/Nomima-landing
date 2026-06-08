/* ===========================================================================
   smartdashes.js — the Nomima SmartDashes rail, replicated from the app's
   SmartScrollbar (src/components/notebook/SmartScrollbar.tsx).

   A dense faint "ruler" of ticks runs the full height; coloured dashes (one per
   pill/block, in scroll order) sit on top. Hovering the rail magnifies ticks AND
   dashes with the exact dock-style proximity curve the editor uses
   — smooth(1 - dist/RADIUS), a cubic smoothstep — and shows a tooltip with the
   element's Nomima type + value. A white "you are here" bar tracks scroll.

   Each page calls SmartDashes.create({ rail, here, tip, dashes }) with its own
   dash list, then drives setProgress(frac) + lightUpTo(step) from its scroll
   handler. ICONS below is a superset covering both pills and editor blocks.
   ========================================================================== */
(function () {
  const ICONS = {
    // Smart-Tag / pill icons
    person:    '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    company:   '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01"/>',
    topic:     '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    flag:      '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    calendar:  '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    team:      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    clock:     '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M5 3 2 6M22 6l-3-3"/>',
    // Editor-block icons
    callout:   '<path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9.2 18 8a6 6 0 0 0-12 0c0 1.2.3 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    tasklist:  '<rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8M13 12h8M13 18h8"/>',
    kanban:    '<rect x="3" y="3" width="6" height="14" rx="1"/><rect x="10.5" y="3" width="6" height="9" rx="1"/><rect x="18" y="3" width="3" height="6" rx="1"/>',
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    table:     '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>',
    section:   '<path d="m9 6 3 3 3-3"/><path d="M5 13h14M5 17h14"/>',
    gantt:     '<path d="M8 6h10M6 12h12M10 18h8"/><path d="M3 4v16"/>',
  };

  // Cubic smoothstep — the exact easing the editor's SmartScrollbar magnifier uses.
  const smooth = (t) => { const x = Math.min(1, Math.max(0, t)); return x * x * (3 - 2 * x); };
  // Constants mirror SmartScrollbar.tsx 1:1 so the dock magnification reads identically:
  // MAG_RADIUS 80px falloff · entity dash 18→34px · tick 10→16px (+6 only) · the
  // tooltip only fires while the cursor is over the rightmost W_MAX dash column.
  const MAG_RADIUS = 80, TICK_GAP = 9;
  const W_REST = 18, W_MAX = 34, TW_REST = 10, TW_MAX = 16;
  const TICK_OP_REST = 0.12, TICK_OP_GAIN = 0.10;

  function create(opts) {
    const rail = document.getElementById(opts.rail);
    const here = document.getElementById(opts.here);
    const tip  = document.getElementById(opts.tip);
    const DASHES = opts.dashes || [];
    if (!rail || !here || !tip) return null;

    const dashEls = DASHES.map((d) => {
      const el = document.createElement('div');
      el.className = 'sd-dash';
      el.style.top = (d.frac * 100) + '%';
      el.style.background = d.color;
      el.style.color = d.color;
      el.style.zIndex = '1';
      rail.appendChild(el);
      return el;
    });
    here.style.zIndex = '2';

    // Dense backdrop ruler — faint ticks every TICK_GAP px (rebuilt on resize).
    let tickEls = [];
    function buildTicks() {
      tickEls.forEach((t) => t.remove());
      tickEls = [];
      const n = Math.floor(rail.clientHeight / TICK_GAP);
      for (let i = 1; i < n; i++) {
        const t = document.createElement('div');
        t.className = 'sd-tick';
        t.style.top = (i * TICK_GAP) + 'px';
        rail.appendChild(t);
        tickEls.push(t);
      }
    }

    function showTip(d, cy) {
      const ico = tip.querySelector('.ico');
      ico.style.color = d.color;
      ico.style.background = 'color-mix(in srgb, ' + d.color + ' 16%, transparent)';
      ico.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[d.icon] || '') + '</svg>';
      tip.querySelector('.ty').textContent = d.ty;
      tip.querySelector('.vl').textContent = d.vl;
      tip.style.top = cy + 'px';
      tip.classList.add('on');
    }

    // Magnify ticks + dashes by proximity to the cursor, dock-style. `cursorX`
    // gates the tooltip to the dash column (rightmost W_MAX px) exactly like the
    // app — it hides the moment the pointer drifts left off the dashes.
    function applyMag(cursorY, cursorX) {
      const rect = rail.getBoundingClientRect();
      // While the cursor is on the rail the magnification must TRACK INSTANTLY
      // (no width/opacity easing) — that snap is what gives the dock its weight.
      // On leave we drop the class so everything eases back over the CSS duration.
      rail.classList.toggle('is-hovering', cursorY != null);
      tickEls.forEach((t, i) => {
        const cy = rect.top + (i + 1) * TICK_GAP;
        const magT = cursorY == null ? 0 : smooth(1 - Math.abs(cy - cursorY) / MAG_RADIUS);
        t.style.width = (TW_REST + magT * (TW_MAX - TW_REST)) + 'px';
        t.style.opacity = TICK_OP_REST + magT * TICK_OP_GAIN;
      });
      let best = null, bestDist = Infinity;
      dashEls.forEach((el, i) => {
        const cy = rect.top + DASHES[i].frac * rect.height;
        const dist = cursorY == null ? Infinity : Math.abs(cy - cursorY);
        const magT = cursorY == null ? 0 : smooth(1 - dist / MAG_RADIUS);
        el.style.width = (W_REST + magT * (W_MAX - W_REST)) + 'px';
        // Glow only the dash directly under the cursor, like the app's focus ring.
        el.classList.toggle('focus', cursorY != null && dist < 7);
        if (dist < bestDist) { bestDist = dist; best = { d: DASHES[i], cy }; }
      });
      const overColumn = cursorX == null || cursorX >= rect.right - W_MAX;
      if (cursorY != null && overColumn && best && bestDist < MAG_RADIUS) showTip(best.d, best.cy);
      else tip.classList.remove('on');
    }

    let raf = 0, lastY = null, lastX = null;
    function onMove(cursorY, cursorX) { lastY = cursorY; lastX = cursorX; if (!raf) raf = requestAnimationFrame(() => { raf = 0; applyMag(lastY, lastX); }); }
    rail.addEventListener('mousemove', (e) => onMove(e.clientY, e.clientX));
    rail.addEventListener('mouseleave', () => onMove(null, null));

    // Click the rail (or a specific tag dash) to scroll to that point — like the app.
    rail.style.cursor = 'pointer';
    rail.addEventListener('click', (e) => {
      const r = rail.getBoundingClientRect();
      const frac = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      if (opts.onSeek) opts.onSeek(frac);
    });
    dashEls.forEach((el, i) => {
      el.style.cursor = 'pointer';
      el.style.pointerEvents = 'auto';
      el.addEventListener('click', (e) => { e.stopPropagation(); if (opts.onSeek) opts.onSeek(DASHES[i].frac); });
    });

    buildTicks();
    applyMag(null);

    return {
      buildTicks,
      applyMag,                                   // exposed for offscreen tests (rAF never fires hidden)
      setProgress: (frac) => { here.style.top = (Math.min(1, Math.max(0, frac)) * rail.clientHeight) + 'px'; },
      lightUpTo: (step) => dashEls.forEach((el, i) => el.classList.toggle('lit', step >= DASHES[i].step)),
    };
  }

  window.SmartDashes = { create };
})();
