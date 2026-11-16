/* Kimya laboratoriyası: reaksiya səhnəsi (stəkan, sınaq şüşəsi, qaz bankası). Guvvatli Center */
window.KLAB = (() => {
const hex = h => { h = (h || '#ffffff').replace('#', ''); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
const rgba = (c, a) => 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + Math.max(0, Math.min(1, a)).toFixed(3) + ')';
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t, ss = p => { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); };
const rnd = (a, b) => a + Math.random() * (b - a), WHITE = [255, 255, 255], TAU = 6.2832;
const prog = (f, t) => ss((t - f.t0) / (f.d || 1)), on = (f, t) => t >= f.t0 && t <= (f.t1 === undefined ? f.t0 + (f.d || 0) : f.t1);

function create(cv) {
  const g = cv.getContext('2d'); let W = 300, H = 200, D = 1, v = null, t = 0, last = 0, raf = 0, P = [], S = {}, L = {}, dur = 0, ended = false, onEnd = null, sr = 7, visible = true;
  const rs = () => { sr = (sr * 16807) % 2147483647; return sr / 2147483647; };
  function size() { const r = cv.getBoundingClientRect(); if (!r.width) return; D = Math.min(window.devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.round(W * D); cv.height = Math.round(H * D); if (v) { layout(); if (!raf) draw(); } }

  /* ---------- yerləşmə ---------- */
  function layout() {
    const U = Math.min(W / 2.45, H / 1.74) * (v.sc === 'wet' && v.heat ? .8 : 1), by = H * .87, cx = W * .5; L = {U, by, cx};
    if (v.sc === 'wet') {
      const ves = v.ves || 'beaker', lift = v.heat ? U * .5 : ves === 'tube' ? U * .12 : 0, yB = by - lift - 3;
      let bw = U * .98, bh = U * 1.02; if (ves === 'tube') { bw = U * .42; bh = U * 1.2; } else if (ves === 'flask') { bw = U * 1.04; bh = U * 1.14; } else if (ves === 'dish') { bw = U * 1.2; bh = U * .34; }
      Object.assign(L, {ves, yB, yT: yB - bh, bw, bh});
    } else if (v.sc === 'jar') { const bw = U * .92, bh = U * 1.3, yB = by - (v.burner && v.jar ? U * .42 : 0) - 3; Object.assign(L, {ves: 'jar', yB, yT: yB - bh, bw, bh, sx: cx, sy: yB - bh * .5}); if (!v.jar) { L.sy = by - U * .92; } }
    else { const len = U * 1.32, tw = U * .2, ang = -.5, px = cx - U * .18, py = by - U * .62; Object.assign(L, {len, tw, ang, px, py}); if (v.open) { L.px = cx; L.py = by - 6; } }
  }
  function hw(y) {
    const {ves, yB, yT, bw, bh} = L, r = bw * .09;
    if (ves === 'tube') { const R = bw / 2, c = yB - R; return y > c ? Math.sqrt(Math.max(0, R * R - (y - c) * (y - c))) : R; }
    if (ves === 'flask') { const nw = bw * .16, yN = yT + bh * .28, yW = yB - r; if (y < yN) return nw; if (y < yW) return nw + (bw / 2 - nw) * (y - yN) / (yW - yN); return bw / 2 - (r - Math.sqrt(Math.max(0, r * r - (y - yW) * (y - yW)))); }
    if (ves === 'dish') { const k = (y - yT) / bh; return bw / 2 * Math.sqrt(Math.max(0, 1 - k * k * k * k)); }
    const yW = yB - r; return y > yW ? bw / 2 - (r - Math.sqrt(Math.max(0, r * r - (y - yW) * (y - yW)))) : bw / 2;
  }
  function vpath(y0, y1, inset) { const n = 36, cx = L.cx, k = inset || 0; g.beginPath(); for (let i = 0; i <= n; i++) { const y = lerp(y0, y1, i / n); g[i ? 'lineTo' : 'moveTo'](cx - Math.max(0, hw(y) - k), y); } for (let i = n; i >= 0; i--) { const y = lerp(y0, y1, i / n); g.lineTo(cx + Math.max(0, hw(y) - k), y); } g.closePath(); }
  const yLiq = () => L.yB - (L.bh - 6) * S.lvl;

  /* ---------- başlanğıc ---------- */
  function play(vis, cb) {
    v = JSON.parse(JSON.stringify(vis)); t = 0; P = []; ended = false; onEnd = cb || null; sr = 11; layout();
    const fx = v.fx || []; fx.forEach(f => { f._a = 0; f._done = 0; });
    dur = Math.max(4, ...fx.map(f => (f.t1 === undefined ? f.t0 + (f.d || .6) : f.t1))) + 1.4;
    S = {lvl: 0, turb: 0, sed: 0, shake: 0, flash: 0, flashC: WHITE};
    if (v.sc === 'wet') {
      const a = v.add || {t: 'none'}; S.lvl0 = v.lvl || (L.ves === 'dish' ? .62 : L.ves === 'tube' ? .4 : L.ves === 'flask' ? .34 : .5); S.lvl = S.lvl0;
      S.sol = a.t === 'solid' ? mkSolid(a) : null; S.base = v.base ? mkSolid(v.base, 1) : null;
      if (v.ppt0) { S.p0 = {c: hex(v.ppt0[0]), tex: v.ppt0[1], amt: v.ppt0[2]}; for (let i = 0; i < 46; i++) pptSpawn(S.p0, true); }
      S.foamB = Array.from({length: 240}, (_, i) => ({u: i / 240, x: rs() * 2 - 1, r: .5 + rs(), s: rs()}));
      S.drops = Array.from({length: 26}, () => ({x: rs(), y: rs(), r: .4 + rs() * .8}));
    } else if (v.sc === 'jar') { S.smp = v.smp ? {shape: v.smp[0], c: hex(v.smp[1])} : null; S.drops = Array.from({length: 34}, () => ({x: rs(), y: rs(), r: .4 + rs() * .8})); S.pcs = Array.from({length: 16}, () => [rs(), rs(), rs()]); }
    else { S.mix = (v.mix || ['#999999']).map(hex); S.spk = Array.from({length: 90}, () => [rs(), rs(), rs()]); S.drops = Array.from({length: 14}, () => ({x: rs(), y: rs(), r: .4 + rs() * .8})); S.foamB = Array.from({length: 120}, (_, i) => ({u: i / 120, x: rs() * 2 - 1, r: .5 + rs(), s: rs()})); }
    last = performance.now(); if (!raf && visible) raf = requestAnimationFrame(loop); step(0); draw();
  }
  function mkSolid(a, pre) {
    const n = a.n || (a.shape === 'granule' ? 3 : a.shape === 'crystal' ? 4 : 1), U = L.U;
    return {shape: a.shape, c: hex(a.c), float: !!a.float, pre: !!pre, n, x: 0, wx: 0, ph: rs() * 9, pcs: Array.from({length: Math.max(n, 6)}, () => [rs(), rs(), rs(), rs()]),
      tree: Array.from({length: 70}, () => ({u: rs(), a: -1.57 + (rs() - .5) * 2.6, l: .4 + rs(), d: rs(), b: rs() - .5})), sz: U * (a.shape === 'ball' ? .085 : .1)};
  }

  /* ---------- hissəciklər ---------- */
  function spawnBub(x, y, sz) { if (P.length < 900) P.push({k: 'bub', x, y, r: rnd(1.2, 3.4) * sz * L.U / 150, vy: -rnd(40, 95) * L.U / 150, ph: rnd(0, 9), life: 0}); }
  function pptSpawn(p, anywhere) {
    const yL = yLiq(), y = anywhere ? rnd(yL + 6, L.yB - 8) : rnd(yL + 4, yL + (L.yB - yL) * .5), h = hw(y) - 5; if (h < 3) return;
    const tex = p.tex, big = tex === 'gel' ? rnd(5, 11) : tex === 'curdy' ? rnd(2.6, 6) : tex === 'flake' ? rnd(1.6, 3.4) : rnd(.8, 1.9);
    P.push({k: 'ppt', x: L.cx + rnd(-h, h), y, r: big * L.U / 150, vy: (tex === 'gel' ? rnd(3, 9) : tex === 'curdy' ? rnd(7, 18) : tex === 'flake' ? rnd(14, 34) : rnd(5, 14)) * L.U / 150, c: p.c, tex, ph: rnd(0, 9), hold: anywhere ? 1 : 0, life: 0});
  }
  function smokeAt(x, y, c, a, big) { if (P.length < 900) P.push({k: 'smoke', x: x + rnd(-6, 6), y, vx: rnd(-10, 10), vy: -rnd(22, 52) * L.U / 150, r: rnd(6, 13) * (big || 1) * L.U / 150, c, a, life: 0, max: rnd(1.8, 3.4)}); }
  function sparkAt(x, y, c, pw) { if (P.length < 900) { const an = rnd(-2.9, -.25), sp = rnd(120, 420) * (pw || 1) * L.U / 150; P.push({k: 'spark', x, y, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, c, life: 0, max: rnd(.35, 1), br: Math.random() < .12}); } }
  function anchor(at) {
    const U = L.U;
    if (v.sc === 'wet') { const yL = yLiq(), s = S.sol; if (at === 'solid' && s) return {x: L.cx + s.wx, y: s.float ? yL - s.sz * .6 : L.yB - s.sz * 1.4, w: s.sz}; if (at === 'surf') return {x: L.cx, y: yL - S.layerH, w: hw(yL) * .7}; if (at === 'mid') return {x: L.cx, y: (yL + L.yB) / 2, w: U * .2}; return {x: L.cx, y: Math.min(L.yT, yL - S.foamH) - 2, w: hw(L.yT + 2) * .7}; }
    if (v.sc === 'jar') { if (at === 'mid' || !S.smp) return {x: L.cx, y: L.jar ? L.sy : L.sy, w: U * .14}; if (at === 'top') return {x: L.sx, y: L.sy - U * .12, w: U * .1}; const hang = v.jar && (S.smp.shape === 'ribbon' || S.smp.shape === 'wire'); return {x: L.sx, y: L.sy + (hang ? U * .3 : -U * .03), w: U * .09}; }
    if (v.open) return {x: L.px, y: L.py - U * (.16 + .3 * (S.foam || 0)), w: U * .12};
    const m = tubePt(at === 'mouth' ? 1.02 : .12, 0); return {x: m.x, y: m.y, w: U * .08};
  }
  const tubePt = (u, off) => { const c = Math.cos(L.ang), s = Math.sin(L.ang), bx = L.px - L.len * .22 * c, byy = L.py - L.len * .22 * s; return {x: bx + u * L.len * c - off * s, y: byy + u * L.len * s + off * c}; };

  /* ---------- addım ---------- */
  function step(dt) {
    const fx = v.fx || [], U = L.U; S.flash = Math.max(0, S.flash - dt * 2.2); S.shake = Math.max(0, S.shake - dt * 2.6);
    S.foam = 0; S.layerH = 0; S.foamH = 0;
    if (v.sc === 'wet') {
      const a = v.add || {t: 'none'}; S.lvl = S.lvl0 + (a.t === 'pour' ? .15 * ss((t - .5) / 1.2) : 0);
      const s = S.sol; if (s) { s.drop = ss((t - .25) / .9); s.scale = 1; s.coat = 0; }
    }
    for (const f of fx) {
      if (f.k === 'foam') { S.foam = Math.max(S.foam, prog(f, t)); S.foamC = hex(f.c); S.foamMax = f.h; }
      if (f.k === 'layer') { S.layerH = prog(f, t) * f.h * (L.bh || 0) * .5; S.layerC = hex(f.c); S.layerA = f.a; }
      if (f.k === 'dis' && S.sol) S.sol.scale = lerp(1, f.to, prog(f, t));
      if (f.k === 'coat' && S.sol) { S.sol.coat = prog(f, t); S.sol.coatC = hex(f.c); S.sol.treeOn = f.tree; }
      if (f.k === 'flash' && t >= f.t0 && !f._done) { f._done = 1; S.flash = f.pw || 1; S.flashC = hex(f.c); S.shake = f.pw || 1; }
      if (f.k === 'skate' && S.sol && on(f, t)) { const s = S.sol, lim = hw(yLiq()) - s.sz * 1.2; s.ph += dt * 2.2 * f.v; s.wx = clamp(Math.sin(s.ph * 1.3) * .62 + Math.sin(s.ph * 2.9 + 1) * .38, -1, 1) * lim; if (Math.random() < .5) P.push({k: 'ink', x: L.cx + s.wx, y: yLiq() + rnd(3, 14), r: rnd(4, 9), life: 0, max: rnd(1.2, 2.4)}); }
      if (f.k === 'bub' && on(f, t) && v.sc === 'wet') { f._a += f.r * dt; while (f._a > 1) { f._a--; let x, y; const yL = yLiq();
        if (f.src === 'solid' && S.sol) { const s = S.sol; if (s.float) { x = L.cx + s.wx + rnd(-s.sz, s.sz); y = yL + rnd(2, 8); } else { const w = Math.min(hw(L.yB - 10) - 6, s.sz * (s.n > 1 ? 2.6 : 1.6)); x = L.cx + s.x + rnd(-w, w); y = L.yB - rnd(4, s.sz * 2.2 * s.scale + 6); } }
        else if (f.src === 'tip') { x = L.cx - hw(L.yT + 4) * .46 + rnd(-3, 3); y = yL + (L.yB - yL) * .72; }
        else if (f.src === 'el1' || f.src === 'el2') { x = L.cx + (f.src === 'el1' ? -1 : 1) * L.bw * .22 + rnd(-5, 5); y = rnd(yL + 14, L.yB - 16); }
        else { y = rnd(L.yB - 14, L.yB - 4); x = L.cx + rnd(-1, 1) * Math.max(2, hw(y) - 6); }
        spawnBub(x, y, f.sz); } }
      if (f.k === 'ppt' && v.sc === 'wet') { const p = prog(f, t); if (t >= f.t0) { S.pp = S.pp || {c: hex(f.c), tex: f.tex, amt: f.amt}; S.pp.c = S.pp.c2 || hex(f.c); S.pp.p = p; if (p < 1) { f._a += (f.tex === 'fine' ? 120 : f.tex === 'gel' ? 16 : 34) * f.amt * dt; while (f._a > 1) { f._a--; pptSpawn(S.pp); } } } }
      if (f.k === 'pptcol' && S.pp) { S.pp.c2 = mix(S.pp.c, hex(f.to), prog(f, t)); for (const q of P) if (q.k === 'ppt') q.c = S.pp.c2; }
      if (f.k === 'pptoff' && t >= f.t0) { const p = prog(f, t); S.p0off = p; for (const q of P) if (q.k === 'ppt' && q.hold) q.fade = p; }
      if ((f.k === 'smoke' || f.k === 'sparks') && on(f, t)) { const A = anchor(f.at), n = f.k === 'smoke' ? f.amt * 16 : f.r; f._a += n * dt; while (f._a > 1) { f._a--; if (f.k === 'smoke') smokeAt(A.x + rnd(-A.w, A.w), A.y, hex(f.c), f.steam ? .1 : .2, f.steam ? 1 : 1.2); else sparkAt(A.x + rnd(-A.w, A.w) * .5, A.y, hex(f.c), v.sc === 'tube' ? 1.2 : 1); } }
    }
    // hissəciklər
    const yL = v.sc === 'wet' ? yLiq() : 0, sedTop = v.sc === 'wet' ? L.yB - sedH() : 0;
    for (let i = P.length - 1; i >= 0; i--) { const p = P[i]; p.life += dt;
      if (p.k === 'bub') { p.y += p.vy * dt; p.x += Math.sin(p.life * 7 + p.ph) * 14 * dt; const lim = hw(p.y) - p.r - 2; p.x = clamp(p.x, L.cx - lim, L.cx + lim); if (p.y < yL - S.layerH + p.r) P.splice(i, 1); }
      else if (p.k === 'ppt') { if (!p.hold || p.fade) p.y += p.vy * dt * (p.hold ? .2 : 1); else p.y += Math.sin(p.life * .8 + p.ph) * 3 * dt; p.x += Math.sin(p.life * 1.4 + p.ph) * 5 * dt; const lim = hw(p.y) - p.r - 2; p.x = clamp(p.x, L.cx - lim, L.cx + lim); if ((!p.hold && p.y > sedTop - p.r) || (p.fade >= 1)) P.splice(i, 1); }
      else if (p.k === 'ink') { p.r += 18 * dt; if (p.life > p.max) P.splice(i, 1); }
      else if (p.k === 'smoke') { p.x += p.vx * dt; p.y += p.vy * dt; p.r += 13 * dt * L.U / 150; p.vx *= .985; if (p.life > p.max) P.splice(i, 1); }
      else if (p.k === 'spark') { p.vy += 520 * dt * L.U / 150; p.px = p.x; p.py = p.y; p.x += p.vx * dt; p.y += p.vy * dt; if (p.br && p.life > p.max * .5) { p.br = 0; for (let k = 0; k < 3; k++) P.push({k: 'spark', x: p.x, y: p.y, vx: p.vx * .4 + rnd(-90, 90), vy: p.vy * .4 + rnd(-90, 60), c: p.c, life: 0, max: rnd(.2, .45)}); } if (p.life > p.max || p.y > L.by) P.splice(i, 1); }
    }
    if (!ended && t > dur) { ended = true; onEnd && onEnd(); }
  }
  const sedH = () => { let h = 0; if (S.pp) h += ss(S.pp.p * 1.15 - .15) * S.pp.amt * (L.yB - yLiq()) * .2; return h; };
  function liqColor() {
    let c = v.liq ? hex(v.liq[0]) : [150, 205, 235], a = v.liq ? v.liq[1] : .17; const ad = v.add || {};
    if (ad.t === 'pour' && ad.c) { const p = ss((t - .6) / 1.3) * .35; c = mix(c, hex(ad.c), v.liq ? p : p * 2.2); a = lerp(a, Math.max(a, ad.a * .6), p * 2); }
    for (const f of v.fx || []) if (f.k === 'col' && t >= f.t0) { const p = prog(f, t), to = f.a ? hex(f.to) : [150, 205, 235]; c = mix(c, to, p); a = lerp(a, f.a || .17, p); }
    return [c, a];
  }

  /* ---------- çəkiliş ---------- */
  function bg() {
    const U = L.U; g.clearRect(0, 0, W, H);
    const sp = g.createRadialGradient(L.cx, L.by - U * .9, U * .1, L.cx, L.by - U * .6, Math.max(W, H) * .75); sp.addColorStop(0, 'rgba(60,96,84,.55)'); sp.addColorStop(.45, 'rgba(22,40,38,.35)'); sp.addColorStop(1, 'rgba(10,16,18,0)'); g.fillStyle = sp; g.fillRect(0, 0, W, H);
    const b = g.createLinearGradient(0, L.by, 0, H); b.addColorStop(0, 'rgba(255,255,255,.085)'); b.addColorStop(.12, 'rgba(255,255,255,.035)'); b.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = b; g.fillRect(0, L.by, W, H - L.by);
  }
  function shadow(x, w) { const s = g.createRadialGradient(x, L.by + 3, 2, x, L.by + 3, w); s.addColorStop(0, 'rgba(0,0,0,.42)'); s.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = s; g.save(); g.translate(0, L.by + 3); g.scale(1, .16); g.translate(0, -(L.by + 3)); g.fillRect(x - w, L.by + 3 - w, w * 2, w * 2); g.restore(); }
  function flameAt(x, y, sz, col, seed) {
    const U = L.U, c = hex(col); g.save(); g.globalCompositeOperation = 'lighter';
    const gl = g.createRadialGradient(x, y - sz * U * .16, 1, x, y - sz * U * .16, sz * U * .7); gl.addColorStop(0, rgba(c, .32)); gl.addColorStop(1, rgba(c, 0)); g.fillStyle = gl; g.fillRect(x - sz * U, y - sz * U, sz * U * 2, sz * U * 2);
    [[1, c, .34], [.7, mix(c, WHITE, .45), .5], [.4, mix(c, WHITE, .85), .75]].forEach(([k, cc, a], i) => {
      const fl = Math.sin(t * 13 + seed + i * 2) * .1 + Math.sin(t * 23.7 + seed * 2 + i) * .07, w = sz * U * .115 * k * (1 + fl * .5), h = sz * U * .5 * k * (1 + fl), sw = Math.sin(t * 6 + seed + i) * w * .5;
      g.beginPath(); g.moveTo(x - w, y); g.bezierCurveTo(x - w * 1.25, y - h * .45, x - w * .2 + sw, y - h * .7, x + sw, y - h); g.bezierCurveTo(x + w * .2 + sw, y - h * .7, x + w * 1.25, y - h * .45, x + w, y); g.bezierCurveTo(x + w * .6, y + w * .5, x - w * .6, y + w * .5, x - w, y); g.fillStyle = rgba(cc, a); g.fill();
    });
    g.restore();
  }
  function glowAt(x, y, sz, col) { const U = L.U, c = hex(col), r = sz * U * .55 * (1 + Math.sin(t * 9) * .06); g.save(); g.globalCompositeOperation = 'lighter'; const gr = g.createRadialGradient(x, y, 1, x, y, r); gr.addColorStop(0, rgba(mix(c, WHITE, .5), .7)); gr.addColorStop(.3, rgba(c, .35)); gr.addColorStop(1, rgba(c, 0)); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
  function burner(x, yTop) {
    const U = L.U, w = U * .3, h = U * .2, y = L.by - 3;
    g.fillStyle = 'rgba(210,228,235,.2)'; g.strokeStyle = 'rgba(235,245,250,.5)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - w * .22, y - h); g.quadraticCurveTo(x - w * .6, y - h * .9, x - w * .5, y - h * .25); g.quadraticCurveTo(x - w * .5, y, x - w * .3, y); g.lineTo(x + w * .3, y); g.quadraticCurveTo(x + w * .5, y, x + w * .5, y - h * .25); g.quadraticCurveTo(x + w * .6, y - h * .9, x + w * .22, y - h); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = 'rgba(120,170,255,.22)'; g.beginPath(); g.ellipse(x, y - h * .32, w * .42, h * .28, 0, 0, TAU); g.fill();
    g.fillStyle = '#8f979c'; g.fillRect(x - w * .13, y - h * 1.22, w * .26, h * .26); g.fillStyle = '#e9e4d2'; g.fillRect(x - w * .04, y - h * 1.42, w * .08, h * .22);
    flameAt(x, y - h * 1.36, Math.min(.75, (y - h * 1.36 - yTop) / (U * .42) * .95 + .12), '#4f8dff', 3);
  }
  function stand(xr, yc) { const U = L.U, x = xr - U * .2; g.fillStyle = '#2b3438'; g.fillRect(x - U * .32, L.by - 9, U * .5, 9); g.fillStyle = '#59646a'; g.fillRect(x - 3, yc - U * .3, 6, L.by - yc + U * .3 - 6); g.fillStyle = '#7b868c'; g.fillRect(x - 6, yc - 5, xr - x + 10, 10); g.fillStyle = '#4a5459'; g.fillRect(x - 9, yc - 9, 18, 18); }
  function drawSolid(s, bx, byy, sub) {
    const U = L.U, sc = s.scale === undefined ? 1 : s.scale, z = s.sz * (.35 + .65 * sc), c = s.c, hi = mix(c, WHITE, .45), lo = mix(c, [0, 0, 0], .45), cc = s.coat ? mix(c, s.coatC, s.coat) : c;
    if (sc <= .02) return;
    const body = (col) => { const gr = g.createLinearGradient(bx - z, byy - z * 2, bx + z, byy); gr.addColorStop(0, rgba(mix(col, WHITE, .4), 1)); gr.addColorStop(.5, rgba(col, 1)); gr.addColorStop(1, rgba(mix(col, [0, 0, 0], .4), 1)); return gr; };
    g.save();
    if (s.shape === 'ball' || s.shape === 'drop') { const r = z * (s.shape === 'drop' ? 1.5 : 1), ky = s.shape === 'drop' ? .55 : 1; g.translate(bx, byy - r * ky); g.scale(1, ky); const gr = g.createRadialGradient(-r * .35, -r * .4, r * .1, 0, 0, r); gr.addColorStop(0, rgba(mix(cc, WHITE, .75), 1)); gr.addColorStop(.6, rgba(cc, 1)); gr.addColorStop(1, rgba(mix(cc, [0, 0, 0], .45), 1)); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, r, 0, TAU); g.fill(); }
    else if (s.shape === 'ribbon' || s.shape === 'plate' || s.shape === 'nail' || s.shape === 'wire') {
      const len = U * (s.shape === 'nail' ? .62 : .72) * (s.shape === 'wire' ? 1 : (.5 + .5 * sc)), an = s.shape === 'wire' ? 0 : -.36; g.translate(bx + (s.shape === 'wire' ? 0 : U * .16), byy); g.rotate(an);
      if (s.shape === 'wire') { g.strokeStyle = rgba(cc, 1); g.lineWidth = Math.max(2, U * .022); g.lineCap = 'round'; g.beginPath(); const top = -(byy - (L.yT || byy - U) + U * .12); g.moveTo(U * .1, top); g.lineTo(0, top + U * .1); for (let i = 0; i <= 60; i++) { const k = i / 60, y = top + U * .1 + k * (-top - U * .14); g.lineTo(Math.sin(k * 30) * U * .055 * Math.min(1, k * 6), y); } g.stroke(); g.strokeStyle = rgba(mix(cc, WHITE, .5), .5); g.lineWidth = 1; g.stroke(); }
      else { const wd = s.shape === 'plate' ? U * .2 : s.shape === 'nail' ? U * .034 : U * .07; g.fillStyle = body(cc); g.beginPath(); if (s.shape === 'nail') { g.moveTo(-wd, 0); g.lineTo(0, U * .05); g.lineTo(wd, 0); g.lineTo(wd, -len); g.lineTo(wd * 2.6, -len); g.lineTo(wd * 2.6, -len - wd * 1.3); g.lineTo(-wd * 2.6, -len - wd * 1.3); g.lineTo(-wd * 2.6, -len); g.lineTo(-wd, -len); } else g.rect(-wd, -len, wd * 2, len); g.closePath(); g.fill(); g.fillStyle = rgba(WHITE, .16); g.fillRect(-wd * .6, -len, wd * .35, len); }
    }
    else if (s.shape === 'heap' || s.shape === 'gel') { const w = z * (s.shape === 'gel' ? 3.2 : 3.6), h = z * (s.shape === 'gel' ? 1.5 : 1.25); g.fillStyle = body(cc); g.beginPath(); g.moveTo(bx - w, byy); g.bezierCurveTo(bx - w * .7, byy - h * .5, bx - w * .3, byy - h * 1.1, bx, byy - h); g.bezierCurveTo(bx + w * .35, byy - h * 1.05, bx + w * .7, byy - h * .45, bx + w, byy); g.closePath(); g.fill(); if (s.shape === 'heap') { g.fillStyle = rgba(hi, .35); for (let i = 0; i < 14; i++) { const p = s.pcs[i % s.pcs.length], k = (i + .5) / 14 * 2 - 1; g.fillRect(bx + k * w * .8, byy - h * (1 - k * k) * (.3 + p[0] * .6), 1.6, 1.6); } } }
    else { const n = s.n; for (let i = 0; i < n; i++) { const p = s.pcs[i], ox = (n > 1 ? (i - (n - 1) / 2) * z * 1.9 : 0) + (p[0] - .5) * z * .5, r = z * (s.shape === 'chunk' ? 1.25 : s.shape === 'crystal' ? .6 : .95) * (.8 + p[1] * .4), k = s.shape === 'crystal' ? 5 : 7; g.fillStyle = body(cc); g.beginPath(); for (let j = 0; j < k; j++) { const an = j / k * TAU + p[2] * 2, rr = r * (.72 + ((p[3] * 97 + j * 31) % 10) / 34); g[j ? 'lineTo' : 'moveTo'](bx + ox + Math.cos(an) * rr, byy - r * .8 + Math.sin(an) * rr * .78); } g.closePath(); g.fill(); g.fillStyle = rgba(WHITE, .14); g.beginPath(); g.arc(bx + ox - r * .25, byy - r * 1.05, r * .28, 0, TAU); g.fill(); } }
    g.restore();
    if (s.coat && s.treeOn) { g.save(); g.strokeStyle = rgba(s.coatC, .95); g.lineCap = 'round'; const top = s.shape === 'wire' ? L.yT + U * .1 : byy - U * .5, span = byy - top; for (const b of s.tree) { const p = clamp((s.coat - b.d * .7) / .3, 0, 1); if (p <= 0) continue; const y0 = byy - b.u * span, x0 = bx + (s.shape === 'wire' ? Math.sin((1 - b.u) * 30) * U * .055 : (s.shape === 'granule' || s.shape === 'chunk' ? b.b * z * 3 : U * .16 - (byy - y0) * .37)), len = b.l * U * .09 * p; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x0, y0); const x1 = x0 + Math.cos(b.a) * len, y1 = y0 + Math.sin(b.a) * len * .8; g.lineTo(x1, y1); g.lineTo(x1 + Math.cos(b.a + .8) * len * .5, y1 + Math.sin(b.a + .8) * len * .4); g.moveTo(x1, y1); g.lineTo(x1 + Math.cos(b.a - .7) * len * .45, y1 + Math.sin(b.a - .7) * len * .4); g.stroke(); if (p > .6) { g.fillStyle = rgba(WHITE, .8 * Math.abs(Math.sin(t * 3 + b.d * 20))); g.fillRect(x1 - 1, y1 - 1, 2, 2); } } g.restore(); }
  }
  function particles(kinds) {
    for (const p of P) { if (!kinds.includes(p.k)) continue;
      if (p.k === 'bub') { g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 1; g.fillStyle = 'rgba(255,255,255,.14)'; g.beginPath(); g.arc(p.x, p.y, p.r, 0, TAU); g.fill(); g.stroke(); g.fillStyle = 'rgba(255,255,255,.8)'; g.fillRect(p.x - p.r * .45, p.y - p.r * .5, Math.max(1, p.r * .3), Math.max(1, p.r * .3)); }
      else if (p.k === 'ppt') { const a = (p.tex === 'gel' ? .5 : .92) * Math.min(1, p.life * 2.5) * (1 - (p.fade || 0)); if (p.tex === 'flake') { g.fillStyle = rgba(mix(p.c, WHITE, .5 + .5 * Math.sin(p.life * 9 + p.ph)), a); g.save(); g.translate(p.x, p.y); g.rotate(p.life * 3 + p.ph); g.fillRect(-p.r, -p.r * .35, p.r * 2, p.r * .7); g.restore(); } else { g.fillStyle = rgba(p.c, a); g.beginPath(); g.arc(p.x, p.y, p.r, 0, TAU); if (p.tex !== 'fine') g.arc(p.x + p.r * .8, p.y + p.r * .3, p.r * .7, 0, TAU); g.fill(); } }
      else if (p.k === 'ink') { const a = .34 * (1 - p.life / p.max), c = S.inkC || [232, 62, 140]; const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); gr.addColorStop(0, rgba(c, a)); gr.addColorStop(1, rgba(c, 0)); g.fillStyle = gr; g.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2); }
      else if (p.k === 'smoke') { const k = p.life / p.max, a = p.a * Math.sin(Math.min(1, k * 1.2) * 3.1416); const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); gr.addColorStop(0, rgba(p.c, a)); gr.addColorStop(1, rgba(p.c, 0)); g.fillStyle = gr; g.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2); }
      else if (p.k === 'spark') { g.save(); g.globalCompositeOperation = 'lighter'; g.strokeStyle = rgba(p.c, 1 - p.life / p.max); g.lineWidth = 1.6; g.beginPath(); g.moveTo(p.px === undefined ? p.x : p.px, p.py === undefined ? p.y : p.py); g.lineTo(p.x, p.y); g.stroke(); g.restore(); }
    }
  }
  function fxAbove() {
    for (const f of v.fx || []) { if (!on(f, t)) continue; const A = anchor(f.at); const fade = Math.min(1, (t - f.t0) * 3, ((f.t1 || 99) - t) * 2.2);
      if (f.k === 'flame') { if (f.at === 'surf') for (let i = -2; i <= 2; i++) flameAt(A.x + i * A.w * .42, A.y, f.sz * fade * (1 - Math.abs(i) * .16), f.c, i * 3.1 + 5); else flameAt(A.x, A.y, f.sz * fade, f.c, 1); }
      if (f.k === 'glow') glowAt(A.x, A.y, f.sz * fade, f.c);
    }
  }
  function foam(x, y0, wAt, top) {
    if (!S.foam) return; const U = L.U, Hf = S.foamMax * (L.bh || U) * .95 * S.foam, c = S.foamC, dark = c[0] + c[1] + c[2] < 150; S.foamH = Hf;
    const wd = y => { const out = Math.max(0, top - y); return dark ? Math.max(6, wAt(Math.max(y, top)) * (.78 - out / U * .12) - 4) : wAt(Math.max(y, top)) * (1 + out / U * 1.1) - 4; };
    g.fillStyle = rgba(mix(c, dark ? [40, 34, 30] : [225, 228, 222], .3), dark ? 1 : .9); { const k = dark ? 1 : .9, yt = y0 - Hf, wt = Math.max(2, wd(yt) * k), ry = Math.min(wt * .6, Hf * .75); g.beginPath(); g.moveTo(x - wd(y0) * k, y0 + 2);
      for (let u = 0; u <= 1.001; u += .1) g.lineTo(x - Math.max(2, wd(y0 - u * Hf) * k), y0 - u * Hf); g.ellipse(x, yt, wt, ry, 0, Math.PI, TAU);
      for (let u = 1; u >= -.001; u -= .1) g.lineTo(x + Math.max(2, wd(y0 - u * Hf) * k), y0 - u * Hf); g.lineTo(x + wd(y0) * k, y0 + 2); g.closePath(); g.fill(); }
    for (const b of S.foamB) { if (b.u > S.foam) continue; const y = y0 - b.u / S.foam * Hf, out = Math.max(0, top - y), w = wd(y), sag = !dark && out > U * .12 ? Math.abs(b.x) * b.x * b.x * out * .5 : 0, r = (dark ? 5 : 6.5) * b.r * U / 150 * (.8 + S.foam * .5);
      const xx = x + b.x * w, yy = y + Math.abs(sag); g.fillStyle = rgba(mix(c, dark ? [70, 60, 50] : [210, 215, 210], b.s * .35), dark ? 1 : .93); g.beginPath(); g.arc(xx, yy, r, 0, TAU); g.fill(); if (!dark) { g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = .8; g.beginPath(); g.arc(xx, yy, r * .8, 3.6, 5.2); g.stroke(); } }
  }
  function tools() {
    const U = L.U, a = v.add || {t: 'none'}, yL = yLiq();
    if (a.t === 'pour' && t < 2.3) { const k = ss((t - .1) / .5) * (1 - ss((t - 1.7) / .5)), px = L.cx + hw(L.yT) * .55 + U * .34, py = L.yT - U * .26, c = a.c ? hex(a.c) : [205, 232, 244]; g.save(); g.globalAlpha = k; g.translate(px, py); g.rotate(-1.05 - .35 * ss((t - .4) / .6));
      g.fillStyle = 'rgba(255,255,255,.05)'; g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = 1.5; const tw = U * .11, tl = U * .55; g.beginPath(); g.moveTo(-tw, -tl); g.lineTo(-tw, 0); g.arc(0, 0, tw, 3.1416, 0, true); g.lineTo(tw, -tl); g.fill(); g.stroke(); g.fillStyle = rgba(c, a.c ? Math.max(.4, a.a) : .16); g.beginPath(); g.moveTo(-tw + 1.5, -tl * .55 * (1 - ss((t - .6) / 1.1))); g.lineTo(-tw + 1.5, 0); g.arc(0, 0, tw - 1.5, 3.1416, 0, true); g.lineTo(tw - 1.5, -tl * .8); g.closePath(); g.fill(); g.restore();
      if (t > .55 && t < 1.75) { const sx = px - U * .43, sy = py - U * .08; g.strokeStyle = rgba(c, a.c ? .85 : .5); g.lineWidth = U * .03; g.lineCap = 'round'; g.beginPath(); g.moveTo(sx, sy); g.quadraticCurveTo(sx - U * .1, sy + U * .05, sx - U * .13, yL); g.stroke(); if (Math.random() < .6) spawnBub(sx - U * .13 + rnd(-6, 6), yL + rnd(6, 26), .8); } }
    if (a.t === 'drops' && t < 2.2) { const px = L.cx + U * .05, py = L.yT - U * .34, c = hex(a.c), k = ss(t / .3) * (1 - ss((t - 1.8) / .4)); g.save(); g.globalAlpha = k; g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = 1.5; g.fillStyle = rgba(c, .7); g.beginPath(); g.moveTo(px - U * .025, py - U * .3); g.lineTo(px - U * .025, py); g.lineTo(px, py + U * .07); g.lineTo(px + U * .025, py); g.lineTo(px + U * .025, py - U * .3); g.stroke(); g.fillRect(px - U * .018, py - U * .2, U * .036, U * .2); g.fillStyle = '#c2553a'; g.beginPath(); g.ellipse(px, py - U * .36, U * .05, U * .075, 0, 0, TAU); g.fill(); g.restore();
      for (let i = 0; i < 3; i++) { const td = t - .5 - i * .4; if (td > 0 && td < .45) { const y = lerp(py + U * .08, yL, (td / .45) ** 2); g.fillStyle = rgba(c, .95); g.beginPath(); g.arc(px, y, U * .02, 0, TAU); g.fill(); } } }
    if (a.t === 'gas') { const x0 = L.cx - hw(L.yT + 4) * .46, yE = yL + (L.yB - yL) * .72; g.strokeStyle = 'rgba(235,245,250,.55)'; g.lineWidth = U * .034; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(x0 - U * .75, L.yT - U * .32); g.lineTo(x0 - U * .1, L.yT - U * .32); g.quadraticCurveTo(x0, L.yT - U * .32, x0, L.yT - U * .22); g.lineTo(x0, yE); g.stroke(); g.strokeStyle = a.c ? rgba(hex(a.c), .55) : 'rgba(16,22,26,.55)'; g.lineWidth = U * .016; g.stroke(); }
    if (v.elec) { [-1, 1].forEach(sg => { const x = L.cx + sg * L.bw * .22, y0 = L.yT - U * .16, y1 = L.yB - U * .12; g.fillStyle = '#2c3034'; g.fillRect(x - U * .028, y0, U * .056, y1 - y0); let ec = null; for (const f of v.fx) if (f.k === 'ecoat' && sg < 0) ec = [hex(f.c), prog(f, t)]; if (ec) { g.fillStyle = rgba(ec[0], ec[1]); g.fillRect(x - U * .034, yL + 4, U * .068, y1 - yL - 4); } g.strokeStyle = sg < 0 ? '#5f6b70' : '#b8482e'; g.lineWidth = 2; g.beginPath(); const lx = x + sg * U * .62, ly = Math.max(U * .12, y0 - U * .12); g.moveTo(x, y0); g.bezierCurveTo(x, y0 - U * .2, lx, ly + U * .3, lx, ly + U * .07); g.stroke(); g.fillStyle = sg < 0 ? '#3a454a' : '#C6F26B'; g.beginPath(); g.arc(lx, ly, U * .075, 0, TAU); g.fill(); g.fillStyle = sg < 0 ? '#fff' : '#10161A'; g.font = '700 ' + (U * .11 | 0) + 'px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(sg < 0 ? '−' : '+', lx, ly + 1); }); }
  }
  function drawWet() {
    const U = L.U, yL = yLiq(), [lc, la] = liqColor(), s = S.sol, cxv = L.cx; S.inkC = null; for (const f of v.fx) if (f.k === 'col' && f.a) { S.inkC = hex(f.to); break; }
    shadow(cxv, L.bw * .75);
    if (v.heat) { const py = L.yB + 4; if (L.ves === 'tube') stand(cxv - L.bw * .5, L.yT + L.bh * .2); else { g.strokeStyle = '#59646a'; g.lineWidth = 4; g.lineCap = 'round'; g.beginPath(); g.moveTo(cxv - L.bw * .56, py); g.lineTo(cxv - L.bw * .7, L.by - 3); g.moveTo(cxv + L.bw * .56, py); g.lineTo(cxv + L.bw * .7, L.by - 3); g.stroke(); g.fillStyle = '#6d787e'; g.fillRect(cxv - L.bw * .6, py - 1, L.bw * 1.2, 5); } burner(cxv, L.yB); }
    else if (L.ves === 'tube') stand(cxv - L.bw * .5, L.yT + L.bh * .2);
    else if (L.ves === 'dish') { g.fillStyle = '#6d787e'; g.fillRect(cxv - L.bw * .2, L.yB, L.bw * .4, L.by - L.yB - 3); }
    vpath(L.yT, L.yB); g.fillStyle = L.ves === 'dish' ? 'rgba(236,236,230,.9)' : 'rgba(255,255,255,.04)'; g.fill();
    if (S.base) drawSolid(Object.assign(S.base, {scale: 1 - S.foam * .8}), cxv, L.yB - 3);
    if (s && !s.float) { const fall = lerp(L.yT - U * .5, L.yB - 3, s.drop); if (s.shape === 'wire' || s.shape === 'ribbon' || s.shape === 'plate' || s.shape === 'nail') { g.save(); g.globalAlpha = s.drop; drawSolid(s, cxv + s.x, L.yB - 3); g.restore(); } else drawSolid(s, cxv + s.x, fall); }
    g.save(); vpath(yL - S.layerH, L.yB, 1.5); g.clip();
    const gr = g.createLinearGradient(0, yL, 0, L.yB); gr.addColorStop(0, rgba(mix(lc, WHITE, .12), la * .82)); gr.addColorStop(1, rgba(mix(lc, [0, 0, 0], .22), Math.min(1, la * 1.2))); g.fillStyle = gr; g.fillRect(cxv - L.bw, yL, L.bw * 2, L.yB - yL + 2);
    if (S.layerH) { g.fillStyle = rgba(S.layerC, S.layerA); g.fillRect(cxv - L.bw, yL - S.layerH, L.bw * 2, S.layerH); g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(cxv - L.bw, yL - 1, L.bw * 2, 1.5); }
    particles(['ink']);
    if (S.p0) { const k = 1 - (S.p0off || 0); g.fillStyle = rgba(S.p0.c, .28 * k); g.fillRect(cxv - L.bw, yL, L.bw * 2, L.yB - yL); }
    if (S.pp) { const p = S.pp.p, tb = Math.sin(Math.min(1, p * 1.3) * 1.57) * (1 - .55 * ss((p - .55) / .45)) * (S.pp.tex === 'fine' ? .62 : .4) * S.pp.amt; g.fillStyle = rgba(S.pp.c, tb); g.fillRect(cxv - L.bw, yL, L.bw * 2, L.yB - yL); const h = sedH(); if (h > .5) { g.fillStyle = rgba(mix(S.pp.c, [0, 0, 0], .08), .97); g.beginPath(); g.moveTo(cxv - L.bw, L.yB + 2); for (let i = 0; i <= 24; i++) { const x = cxv - L.bw * .6 + i / 24 * L.bw * 1.2; g.lineTo(x, L.yB - h * (.75 + .25 * Math.sin(i * 1.7) * Math.cos(i * .6))); } g.lineTo(cxv + L.bw, L.yB + 2); g.closePath(); g.fill(); } }
    particles(['ppt', 'bub']);
    for (const f of v.fx) if (f.k === 'mirror' && t >= f.t0) { const p = prog(f, t), m = g.createLinearGradient(cxv - L.bw / 2, 0, cxv + L.bw / 2, 0); [[0, '#6f777c'], [.18, '#f4f7f8'], [.36, '#aab2b7'], [.58, '#eef2f3'], [.8, '#8d969b'], [1, '#dfe4e6']].forEach(([o, c]) => m.addColorStop(o, c)); g.globalAlpha = p * .93; g.fillStyle = m; g.fillRect(cxv - L.bw, yL, L.bw * 2, L.yB - yL + 2); g.globalAlpha = 1; }
    g.restore();
    if (s && s.float) drawSolid(s, cxv + s.wx, lerp(L.yT - U * .5, yL + s.sz * .5 * (s.scale === undefined ? 1 : .35 + .65 * s.scale), s.drop));
    if (L.ves !== 'dish') { g.fillStyle = 'rgba(255,255,255,.2)'; g.beginPath(); g.ellipse(cxv, yL - S.layerH, Math.max(2, hw(yL) - 2), Math.max(1.5, U * .012), 0, 0, TAU); g.fill(); }
    tools();
    // şüşə
    if (L.ves !== 'dish') { g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = Math.max(1.5, U * .014); g.lineJoin = 'round'; g.beginPath(); const n = 36; for (let i = 0; i <= n; i++) { const y = lerp(L.yT, L.yB, i / n); g[i ? 'lineTo' : 'moveTo'](cxv - hw(y), y); } for (let i = n; i >= 0; i--) { const y = lerp(L.yT, L.yB, i / n); g.lineTo(cxv + hw(y), y); } g.stroke();
      const hT = hw(L.yT); g.beginPath(); g.moveTo(cxv - hT - U * .035, L.yT - 2); g.lineTo(cxv - hT, L.yT + 3); g.moveTo(cxv + hT + U * .035, L.yT - 2); g.lineTo(cxv + hT, L.yT + 3); g.stroke();
      g.save(); vpath(L.yT + 4, L.yB - 4, 3); g.clip(); const sh = g.createLinearGradient(cxv - L.bw / 2, 0, cxv + L.bw / 2, 0); sh.addColorStop(0, 'rgba(255,255,255,0)'); sh.addColorStop(.1, 'rgba(255,255,255,.2)'); sh.addColorStop(.2, 'rgba(255,255,255,.03)'); sh.addColorStop(.86, 'rgba(255,255,255,0)'); sh.addColorStop(.93, 'rgba(255,255,255,.12)'); sh.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = sh; g.fillRect(cxv - L.bw, L.yT, L.bw * 2, L.bh); g.restore(); }
    foam(cxv, yL - S.layerH, y => hw(y), L.yT);
    fxAbove(); particles(['smoke', 'spark']);
  }
  function gasTint(c, a, y0, y1) { if (a <= .001) return; g.fillStyle = rgba(c, a); g.fillRect(L.cx - L.bw, y0, L.bw * 2, y1 - y0); }
  function drawJar() {
    const U = L.U, cxv = L.cx, fx = v.fx || [];
    if (v.jar) { shadow(cxv, L.bw * .75); if (v.burner) { burner(cxv, L.yB); g.fillStyle = '#6d787e'; g.fillRect(cxv - L.bw * .62, L.yB + 2, L.bw * 1.24, 5); g.strokeStyle = '#59646a'; g.lineWidth = 4; g.beginPath(); g.moveTo(cxv - L.bw * .58, L.yB + 6); g.lineTo(cxv - L.bw * .72, L.by - 3); g.moveTo(cxv + L.bw * .58, L.yB + 6); g.lineTo(cxv + L.bw * .72, L.by - 3); g.stroke(); }
      vpath(L.yT, L.yB); g.fillStyle = 'rgba(255,255,255,.035)'; g.fill(); g.save(); vpath(L.yT + 2, L.yB, 1.5); g.clip();
      let c1 = v.gas ? hex(v.gas.c) : WHITE, a1 = v.gas ? v.gas.a : 0, c2 = v.gas2 ? hex(v.gas2.c) : c1, a2 = v.gas2 ? v.gas2.a : a1; const mx = v.gas2 ? ss(t / 2.2) : 1; let ca = mix(c1, c2, mx * .5), aa = lerp(a1, (a1 + a2) / 2, mx), cb = mix(c2, c1, mx * .5), ab = lerp(a2, (a1 + a2) / 2, mx);
      for (const f of fx) if (f.k === 'gasfill' && t >= f.t0) { const p = prog(f, t); ca = mix(ca, hex(f.c), p); cb = mix(cb, hex(f.c), p); aa = lerp(aa, f.a, p); ab = lerp(ab, f.a, p); }
      const mid = (L.yT + L.yB) / 2; const gg = g.createLinearGradient(0, L.yT, 0, L.yB); gg.addColorStop(0, rgba(cb, ab)); gg.addColorStop(.42, rgba(cb, ab)); gg.addColorStop(.58, rgba(ca, aa)); gg.addColorStop(1, rgba(ca, aa * 1.15)); g.fillStyle = gg; g.fillRect(cxv - L.bw, L.yT, L.bw * 2, L.bh);
      for (const f of fx) { if (f.k === 'dep' && t >= f.t0) { const p = prog(f, t), c = hex(f.c); g.fillStyle = rgba(c, .9 * p); g.beginPath(); g.moveTo(cxv - L.bw, L.yB + 2); for (let i = 0; i <= 20; i++) g.lineTo(cxv - L.bw * .5 + i / 20 * L.bw, L.yB - U * .05 * p * (.6 + .4 * Math.sin(i * 2.1))); g.lineTo(cxv + L.bw, L.yB + 2); g.fill(); const wg = g.createLinearGradient(0, L.yT, 0, L.yB); wg.addColorStop(0, rgba(c, 0)); wg.addColorStop(1, rgba(c, .3 * p)); g.fillStyle = wg; g.fillRect(cxv - L.bw / 2, L.yT, L.bw * .12, L.bh); g.fillRect(cxv + L.bw / 2 - L.bw * .12, L.yT, L.bw * .12, L.bh); }
        if (f.k === 'drops' && t >= f.t0) { const p = ss((t - f.t0) / 3); S.drops.forEach((d, i) => { if (i / S.drops.length > p) return; const x = cxv + (d.x < .5 ? -1 : 1) * L.bw * (.3 + d.x * .17) * (d.x < .5 ? 1.2 : .62), y = L.yT + L.bh * (.12 + d.y * .7), r = d.r * U * .016; g.fillStyle = 'rgba(210,235,250,.5)'; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); g.fillStyle = 'rgba(255,255,255,.85)'; g.fillRect(x - r * .4, y - r * .5, 1.2, 1.2); }); } }
      particles(['smoke']); g.restore(); }
    else if (v.burner) burner(L.sx, L.sy + U * .04);
    // qaşıq / tutqac və nümunə
    const s = S.smp, sx = L.sx, sy = L.sy;
    if (s) { let c = s.c; for (const f of fx) if (f.k === 'scol' && t >= f.t0) c = mix(c, hex(f.to), prog(f, t));
      if (s.shape === 'jet') { g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = U * .034; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(sx - U * 1.05, sy + U * .3); g.lineTo(sx - U * .12, sy + U * .3); g.quadraticCurveTo(sx, sy + U * .3, sx, sy + U * .18); g.lineTo(sx, sy - U * .02); g.stroke(); g.strokeStyle = 'rgba(16,22,26,.6)'; g.lineWidth = U * .014; g.stroke(); }
      else { g.strokeStyle = '#7b868c'; g.lineWidth = Math.max(2, U * .02); g.lineCap = 'round'; g.beginPath(); if (v.jar) { g.moveTo(sx, L.yT - U * .2); g.lineTo(sx, sy + U * .02); } else { g.moveTo(sx + U * .85, sy - U * .5); g.lineTo(sx + U * .06, sy); } g.stroke();
        if (v.jar) { g.fillStyle = '#59646a'; g.beginPath(); g.moveTo(sx - U * .1, sy - U * .01); g.quadraticCurveTo(sx, sy + U * .1, sx + U * .1, sy - U * .01); g.closePath(); g.fill(); }
        g.save(); const so = {shape: s.shape === 'wool' ? 'heap' : s.shape === 'granule' ? 'chunk' : s.shape, c, n: 1, pcs: S.pcs, sz: U * .06, scale: 1, tree: []};
        if (s.shape === 'ribbon' || s.shape === 'wire' || s.shape === 'wool' || s.shape === 'plate') { g.strokeStyle = rgba(c, 1); g.lineWidth = s.shape === 'plate' ? U * .05 : Math.max(2, U * .022); g.lineCap = 'round'; g.beginPath(); if (s.shape === 'wool') { for (let i = 0; i < 16; i++) { const p = S.pcs[i]; g.moveTo(sx + (p[0] - .5) * U * .16, sy - p[1] * U * .12); g.quadraticCurveTo(sx + (p[2] - .5) * U * .3, sy - U * .1, sx + (p[1] - .5) * U * .18, sy - p[0] * U * .16); } g.lineWidth = 1.4; } else { g.moveTo(sx, sy); for (let i = 1; i <= 20; i++) g.lineTo(sx + Math.sin(i * .9) * U * (s.shape === 'wire' ? .04 : .012), sy + i / 20 * U * .34 * (v.jar ? 1 : -1) * (s.shape === 'plate' ? .6 : 1)); } g.stroke(); }
        else drawSolid(so, sx, sy + (v.jar ? U * .02 : U * .05));
        g.restore(); } }
    if (v.jar) { g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = Math.max(1.5, U * .014); g.beginPath(); g.moveTo(cxv - L.bw / 2, L.yT); const n = 30; for (let i = 0; i <= n; i++) { const y = lerp(L.yT, L.yB, i / n); g.lineTo(cxv - hw(y), y); } for (let i = n; i >= 0; i--) { const y = lerp(L.yT, L.yB, i / n); g.lineTo(cxv + hw(y), y); } g.stroke();
      g.fillStyle = 'rgba(220,235,242,.28)'; g.fillRect(cxv - L.bw * .62, L.yT - U * .035, L.bw * 1.24, U * .035);
      g.save(); vpath(L.yT + 4, L.yB - 4, 3); g.clip(); const sh = g.createLinearGradient(cxv - L.bw / 2, 0, cxv + L.bw / 2, 0); sh.addColorStop(0, 'rgba(255,255,255,0)'); sh.addColorStop(.1, 'rgba(255,255,255,.2)'); sh.addColorStop(.2, 'rgba(255,255,255,.03)'); sh.addColorStop(.9, 'rgba(255,255,255,0)'); sh.addColorStop(.95, 'rgba(255,255,255,.12)'); sh.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = sh; g.fillRect(cxv - L.bw, L.yT, L.bw * 2, L.bh); g.restore(); }
    if (v.spark !== undefined && t > v.spark && t < v.spark + .35) { g.save(); g.globalCompositeOperation = 'lighter'; g.strokeStyle = 'rgba(190,220,255,.95)'; g.lineWidth = 2; g.beginPath(); let x = cxv - U * .16, y = L.sy; g.moveTo(x, y); for (let i = 0; i < 7; i++) { x += U * .046; g.lineTo(x, y + rnd(-U * .05, U * .05)); } g.stroke(); g.restore(); }
    if (v.lamp !== undefined && t > v.lamp) { const k = Math.min(1, (t - v.lamp) * 3) * (1 - ss((t - v.lamp - 1.2) / 1.2)); g.save(); g.globalCompositeOperation = 'lighter'; const lx = cxv + L.bw * 1.25, lg = g.createLinearGradient(lx, 0, cxv - L.bw * .5, 0); lg.addColorStop(0, 'rgba(255,246,200,' + (.34 * k) + ')'); lg.addColorStop(1, 'rgba(255,246,200,0)'); g.fillStyle = lg; g.beginPath(); g.moveTo(lx, L.sy - U * .05); g.lineTo(cxv - L.bw * .5, L.sy - L.bh * .42); g.lineTo(cxv - L.bw * .5, L.sy + L.bh * .42); g.lineTo(lx, L.sy + U * .05); g.fill(); const lr = g.createRadialGradient(lx, L.sy, 1, lx, L.sy, U * .22); lr.addColorStop(0, 'rgba(255,250,220,' + k + ')'); lr.addColorStop(1, 'rgba(255,246,200,0)'); g.fillStyle = lr; g.fillRect(lx - U * .22, L.sy - U * .22, U * .44, U * .44); g.restore(); }
    fxAbove(); if (!v.jar) particles(['smoke']); particles(['spark']);
  }
  function drawTube() {
    const U = L.U, fx = v.fx || []; let cols = S.mix.slice(), shr = 1, gasT = null, subT = null;
    for (const f of fx) { if (f.k === 'scol' && t >= f.t0) { const p = prog(f, t), to = hex(f.to); cols = cols.map(c => mix(c, to, p)); } if (f.k === 'tdis' && t >= f.t0) shr = 1 - prog(f, t) * .85; if (f.k === 'tgas' && t >= f.t0) gasT = [hex(f.c), f.a * prog(f, t)]; if (f.k === 'sub' && t >= f.t0) subT = [hex(f.c), prog(f, t)]; if (f.k === 'foam') { S.foam = prog(f, t); S.foamC = hex(f.c); S.foamMax = f.h; } }
    if (v.open) { // açıq havada: lövhə üzərində topa
      shadow(L.px, U * .7); g.fillStyle = '#3a4449'; g.fillRect(L.px - U * .62, L.py, U * 1.24, 7);
      const k = 1 + (S.foam || 0) * 2.4, w = U * .26 * (1 + (S.foam || 0) * 1.3), h = U * .15 * k; const gr = g.createLinearGradient(L.px - w, L.py - h, L.px + w, L.py); gr.addColorStop(0, rgba(mix(cols[0], WHITE, .25), 1)); gr.addColorStop(1, rgba(mix(cols[0], [0, 0, 0], .4), 1)); g.fillStyle = gr; g.beginPath(); g.moveTo(L.px - w, L.py); g.bezierCurveTo(L.px - w * .6, L.py - h * .4, L.px - w * .25, L.py - h * 1.05, L.px, L.py - h); g.bezierCurveTo(L.px + w * .25, L.py - h * 1.05, L.px + w * .6, L.py - h * .4, L.px + w, L.py); g.closePath(); g.fill();
      g.fillStyle = 'rgba(255,255,255,.14)'; S.spk.slice(0, 40).forEach(p => { const kx = p[0] * 2 - 1; g.fillRect(L.px + kx * w * .8, L.py - h * (1 - kx * kx) * p[1] * .9 - 1, 1.6, 1.6); });
      fxAbove(); particles(['smoke', 'spark']); return; }
    const B = tubePt(0, 0), M = tubePt(1, 0); shadow(L.px, U * .6);
    stand(L.px + U * .1, tubePt(.72, 0).y);
    if (!v.noburner) burner(tubePt(.1, 0).x, tubePt(.1, L.tw * .5).y);
    g.save(); g.translate(B.x, B.y); g.rotate(L.ang); const len = L.len, r = L.tw / 2;
    const path = () => { g.beginPath(); g.moveTo(len, -r); g.lineTo(r, -r); g.arc(r, 0, r, -1.5708, 1.5708, true); g.lineTo(len, r); };
    path(); g.fillStyle = 'rgba(255,255,255,.04)'; g.fill();
    g.save(); path(); g.closePath(); g.clip();
    if (gasT) { g.fillStyle = rgba(gasT[0], gasT[1]); g.fillRect(0, -r, len, r * 2); }
    const fill = len * .3 * shr; g.fillStyle = rgba(cols[0], 1); g.beginPath(); g.moveTo(0, -r); g.lineTo(fill * .55, -r); g.quadraticCurveTo(fill * .8, 0, fill * 1.15, r); g.lineTo(0, r); g.closePath(); g.fill();
    S.spk.forEach((p, i) => { const x = p[0] * fill * .9, y = (p[1] * 2 - 1) * r * .9; if (x > fill * .55 + (y + r) / (2 * r) * fill * .55) return; g.fillStyle = rgba(i % 2 && cols[1] ? cols[1] : mix(cols[0], i % 3 ? [0, 0, 0] : WHITE, .22), 1); g.fillRect(x, y, 2 + p[2] * 2, 2 + p[2] * 2); });
    for (const f of fx) if (f.k === 'glow' && on(f, t) && f.at !== 'mouth') { const c = hex(f.c), sp = Math.min(1, (t - f.t0) / 2.2), k = Math.min(1, ((f.t1 || 99) - t) * 1.5); g.globalCompositeOperation = 'lighter'; const gg = g.createRadialGradient(fill * .2, r * .4, 1, fill * .3, 0, fill * (.5 + sp * .9)); gg.addColorStop(0, rgba(mix(c, WHITE, .5), .85 * k)); gg.addColorStop(.6, rgba(c, .5 * k)); gg.addColorStop(1, rgba(c, 0)); g.fillStyle = gg; g.fillRect(0, -r, fill * 1.6, r * 2); g.globalCompositeOperation = 'source-over'; }
    if (subT) { const sg = g.createLinearGradient(len * .5, 0, len * .86, 0); sg.addColorStop(0, rgba(subT[0], 0)); sg.addColorStop(.5, rgba(subT[0], .85 * subT[1])); sg.addColorStop(1, rgba(subT[0], 0)); g.fillStyle = sg; g.fillRect(len * .5, -r, len * .36, r * .5); g.fillRect(len * .5, r * .5, len * .36, r * .5); }
    for (const f of fx) if (f.k === 'drops' && t >= f.t0) { const p = ss((t - f.t0) / 3); S.drops.forEach((d, i) => { if (i / S.drops.length > p) return; const x = len * (.62 + d.x * .32), y = (d.y > .5 ? 1 : -1) * r * (.55 + d.y * .3), rr = d.r * U * .014; g.fillStyle = 'rgba(210,235,250,.6)'; g.beginPath(); g.arc(x, y, rr, 0, TAU); g.fill(); }); }
    g.restore();
    g.strokeStyle = 'rgba(235,245,250,.62)'; g.lineWidth = Math.max(1.5, U * .014); path(); g.stroke(); g.beginPath(); g.moveTo(len, -r - 3); g.lineTo(len, -r + 2); g.moveTo(len, r + 3); g.lineTo(len, r - 2); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.14)'; g.fillRect(r, -r * .72, len - r * 1.4, r * .22);
    if (v.gasin) { g.strokeStyle = 'rgba(235,245,250,.55)'; g.lineWidth = U * .03; g.lineCap = 'round'; g.beginPath(); g.moveTo(len * 1.35, 0); g.lineTo(len * .5, 0); g.stroke(); g.strokeStyle = 'rgba(16,22,26,.6)'; g.lineWidth = U * .012; g.stroke(); }
    g.restore();
    if (v.drop !== undefined) { const m = tubePt(1, 0), td = t - v.drop; if (t < v.drop + 1) { g.save(); g.globalAlpha = ss(t / .4) * (1 - ss((t - v.drop - .5) / .5)); g.strokeStyle = 'rgba(235,245,250,.6)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(m.x - U * .025, m.y - U * .7); g.lineTo(m.x - U * .025, m.y - U * .38); g.lineTo(m.x, m.y - U * .3); g.lineTo(m.x + U * .025, m.y - U * .38); g.lineTo(m.x + U * .025, m.y - U * .7); g.stroke(); g.fillStyle = '#c2553a'; g.beginPath(); g.ellipse(m.x, m.y - U * .76, U * .05, U * .075, 0, 0, TAU); g.fill(); g.restore(); } if (td > 0 && td < .4) { g.fillStyle = 'rgba(190,225,245,.95)'; g.beginPath(); g.arc(m.x, lerp(m.y - U * .28, m.y, (td / .4) ** 2), U * .02, 0, TAU); g.fill(); } }
    fxAbove(); particles(['smoke', 'spark']);
  }
  function draw() {
    if (!v) return; g.setTransform(D, 0, 0, D, 0, 0); bg(); g.save();
    if (S.shake > 0) g.translate(rnd(-1, 1) * S.shake * 7, rnd(-1, 1) * S.shake * 5);
    if (v.sc === 'wet') drawWet(); else if (v.sc === 'jar') drawJar(); else drawTube();
    g.restore();
    if (S.flash > 0) { g.fillStyle = rgba(S.flashC, Math.min(.92, S.flash * .85)); g.fillRect(0, 0, W, H); }
  }
  function loop(ms) {
    raf = 0; const dt = Math.min(.05, (ms - last) / 1000); last = ms; if (!v) return; t += dt; step(dt); draw();
    if (visible && (t < dur + 2.5 || P.length)) raf = requestAnimationFrame(loop);
  }
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && v && !raf && t < dur + 2.5) { last = performance.now(); raf = requestAnimationFrame(loop); } }).observe(cv);
  size();
  return {play, size, get t() { return t; }, get dur() { return dur; }, seek(tt) { const d = 1 / 30; while (t < tt) { t += d; step(d); } draw(); }};
}
return {create};
})();
