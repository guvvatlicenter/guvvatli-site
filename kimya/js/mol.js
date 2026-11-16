/* Molekul quruluşu: yastı quruluş formulu (SVG) və fırlanan kürə-çubuq modeli (canvas). Guvvatli Center */
(() => {
const MOL = (window.KORG || {}).mol || {};
const CW = {C: .68, H: .73, O: .78, N: .76, S: .64, Cl: .98, Br: 1.1, Na: 1.32, I: .32, F: .6};

/* ---------- yastı quruluş formulu ---------- */
function svg(id, o) {
  const m = MOL[id]; if (!m) return ''; o = o || {};
  const A = m.a2, B = m.b2, S = 36, fs = 15, pad = 3.2, vh = fs * .6, skel = m.lay === 's';
  const nb = A.map(() => []); B.forEach(([i, j]) => { nb[i].push(j); nb[j].push(i); });
  const P = A.map(a => [a[2] * S, a[3] * S]);
  const L = A.map((a, i) => {
    const sym = a[0], h = a[1];
    if (sym === 'C' && (a[4] || skel) && nb[i].length) return null;
    const lone = nb[i].length === 1, right = lone && A[nb[i][0]][2] > a[2] + .3, first = m.lay === 't' && sym === 'C' && h === 1 && nb[i].length > 1 && nb[i].every(j => A[j][2] > a[2] - .3), rev = right && (sym !== 'C' || m.lay !== 't') || first;
    const hs = h ? (h > 1 ? [['H'], [String(h), 1]] : [['H']]) : [];
    let parts, ci;                                           // ci: təpəyə düşən simvolun sırası
    const toks = sym.match(/[A-Z][a-z]?|\d+|[()]/g) || [sym];
    if (sym === 'NO2') { parts = rev ? [['O'], ['2', 1], ['N']] : [['N'], ['O'], ['2', 1]]; ci = rev ? 2 : 0; }
    else if (toks.length > 1) { parts = toks.map(t => /\d/.test(t) ? [t, 1] : [t]); ci = sym[0] === '(' ? -1 : 0; }
    else if (rev) { parts = hs.concat([[sym]]); ci = hs.length; }
    else { parts = [[sym]].concat(hs); ci = 0; }
    const w = parts.map(p => (p[1] ? (p[0].length > 1 ? .36 * p[0].length + .08 : .47) : p[0] === '(' || p[0] === ')' ? .34 : CW[p[0]] || .72) * fs); let before = 0; for (let k = 0; k < ci; k++) before += w[k];
    const tot = w.reduce((s, v) => s + v, 0), x0 = ci < 0 ? P[i][0] - tot / 2 : P[i][0] - before - w[ci] / 2;
    return {parts, w, x0, x1: x0 + tot, y: P[i][1], sym: sym === 'NO2' ? 'N' : toks.length > 1 ? 'C' : sym};
  });
  const exit = (i, dx, dy) => {
    const l = L[i]; if (!l) return 0; const cx = P[i][0], le = cx - l.x0 + pad, ri = l.x1 - cx + pad;
    return Math.min(dx > 1e-6 ? ri / dx : dx < -1e-6 ? le / -dx : 1e9, Math.abs(dy) > 1e-6 ? (vh + 1.5) / Math.abs(dy) : 1e9);
  };
  const ring = A.map((a, i) => a[4] ? i : -1).filter(i => i >= 0), rc = ring.length ? [ring.reduce((s, i) => s + P[i][0], 0) / ring.length, ring.reduce((s, i) => s + P[i][1], 0) / ring.length] : null;
  let lines = '', minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  const ext = (x, y) => { minx = Math.min(minx, x); maxx = Math.max(maxx, x); miny = Math.min(miny, y); maxy = Math.max(maxy, y); };
  const ln = (x1, y1, x2, y2) => { lines += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>'; };
  B.forEach(([i, j, ord]) => {
    const p = P[i], q = P[j], len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1, dx = (q[0] - p[0]) / len, dy = (q[1] - p[1]) / len;
    const t0 = exit(i, dx, dy), t1 = exit(j, -dx, -dy); if (t0 + t1 >= len - 2) return;
    const x1 = p[0] + dx * t0, y1 = p[1] + dy * t0, x2 = q[0] - dx * t1, y2 = q[1] - dy * t1, nx = -dy, ny = dx;
    if (ord === 1) ln(x1, y1, x2, y2);
    else if (ord === 2 && A[i][4] && A[j][4] && rc) {         // halqada ikinci xətt içəri tərəfdə çəkilir
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, sgn = (rc[0] - mx) * nx + (rc[1] - my) * ny > 0 ? 1 : -1, k = 4.4 * sgn, sh = len * .13;
      ln(x1, y1, x2, y2); ln(x1 + nx * k + dx * sh, y1 + ny * k + dy * sh, x2 + nx * k - dx * sh, y2 + ny * k - dy * sh);
    } else if (ord === 2) { ln(x1 + nx * 2.4, y1 + ny * 2.4, x2 + nx * 2.4, y2 + ny * 2.4); ln(x1 - nx * 2.4, y1 - ny * 2.4, x2 - nx * 2.4, y2 - ny * 2.4); }
    else { ln(x1, y1, x2, y2); ln(x1 + nx * 4, y1 + ny * 4, x2 + nx * 4, y2 + ny * 4); ln(x1 - nx * 4, y1 - ny * 4, x2 - nx * 4, y2 - ny * 4); }
  });
  let txt = '';
  L.forEach(l => { if (!l) return; let x = l.x0, t = '';
    l.parts.forEach((p, k) => { t += p[1] ? '<tspan x="' + x.toFixed(1) + '" dy="' + (fs * .28).toFixed(1) + '" font-size="' + (fs * .7).toFixed(1) + '">' + p[0] + '</tspan>' : '<tspan x="' + x.toFixed(1) + '"' + (k && l.parts[k - 1][1] ? ' dy="' + (-fs * .28).toFixed(1) + '"' : '') + '>' + p[0] + '</tspan>'; x += l.w[k]; });
    txt += '<text class="a' + l.sym + '" y="' + (l.y + fs * .35).toFixed(1) + '">' + t + '</text>'; ext(l.x0, l.y - vh); ext(l.x1, l.y + vh + 2); });
  P.forEach(p => ext(p[0], p[1]));
  const mg = 9, vx = minx - mg, vy = miny - mg, vw = maxx - minx + mg * 2, vhh = maxy - miny + mg * 2, sc = o.scale || 1;
  return '<svg class="m2" viewBox="' + vx.toFixed(1) + ' ' + vy.toFixed(1) + ' ' + vw.toFixed(1) + ' ' + vhh.toFixed(1) + '" style="width:' + Math.round(vw * sc) + 'px" data-w="' + Math.round(vw) + '" role="img" aria-label="' + (m.n || m.f) + ' quruluş formulu">' +
    '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">' + lines + '</g><g font-size="' + fs + '" font-weight="600">' + txt + '</g></svg>';
}

/* ---------- fırlanan model ---------- */
const AT = {C: ['#7d878d', '#2c3338', .40], H: ['#ffffff', '#b9c4c9', .25], O: ['#ff7a70', '#b3241c', .37], N: ['#86a8ff', '#2444b8', .38], Cl: ['#8cf09f', '#1f8a3c', .46], Br: ['#e08a5e', '#7d2f14', .5], Na: ['#cdaaff', '#6a3fc2', .56], S: ['#ffe36a', '#b58a00', .46]};
const ATN = {C: 'karbon', H: 'hidrogen', O: 'oksigen', N: 'azot', Cl: 'xlor', Br: 'brom', Na: 'natrium', S: 'kükürd'};
function view(cv, id) {
  const m = MOL[id]; if (!m || !m.a3) return {stop() {}, atoms: []};
  const A = m.a3, B = m.b3, g = cv.getContext('2d'); let W = 0, H = 0, D = 1, raf = 0, live = true, yaw = .6, pit = -.35, vy = .35, drag = null, last = 0, zoom = 1;
  let rad = 0; A.forEach(a => { rad = Math.max(rad, Math.hypot(a[1], a[2], a[3]) + .55); });
  const size = () => { const r = cv.getBoundingClientRect(); D = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.max(1, W * D); cv.height = Math.max(1, H * D); };
  size();
  function draw(ms) {
    if (!live) return; const dt = Math.min(.05, (ms - last) / 1000 || 0); last = ms; if (!drag) yaw += vy * dt;
    if (!W) size(); g.setTransform(D, 0, 0, D, 0, 0); g.clearRect(0, 0, W, H);
    const cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(pit), sp = Math.sin(pit), sc = Math.min(W, H) * .47 / rad * zoom, cam = rad * 3.4;
    const T = A.map(a => { const x = a[1] * cyw + a[3] * syw, z0 = -a[1] * syw + a[3] * cyw, y = a[2] * cp - z0 * sp, z = a[2] * sp + z0 * cp, k = cam / (cam - z); return [W / 2 + x * sc * k, H / 2 - y * sc * k, z, k]; });
    const items = A.map((a, i) => ({z: T[i][2], a: i}));
    B.forEach(b => items.push({z: (T[b[0]][2] + T[b[1]][2]) / 2 - .01, b}));
    items.sort((p, q) => p.z - q.z);
    for (const it of items) {
      if (it.b) { const p = T[it.b[0]], q = T[it.b[1]], k = (p[3] + q[3]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len, n = it.b[2], w = sc * k * (n > 1 ? .085 : .12), off = sc * k * .13;
        const sh = Math.max(0, Math.min(1, (it.z + rad) / (2 * rad))); g.strokeStyle = 'rgba(' + Math.round(120 + 90 * sh) + ',' + Math.round(132 + 90 * sh) + ',' + Math.round(138 + 90 * sh) + ',1)'; g.lineWidth = Math.max(1.2, w); g.lineCap = 'round';
        for (let s = 0; s < n; s++) { const o = (s - (n - 1) / 2) * off; g.beginPath(); g.moveTo(p[0] + nx * o, p[1] + ny * o); g.lineTo(q[0] + nx * o, q[1] + ny * o); g.stroke(); } }
      else { const p = T[it.a], c = AT[A[it.a][0]] || AT.C, r = Math.max(2, c[2] * sc * p[3]), gr = g.createRadialGradient(p[0] - r * .35, p[1] - r * .38, r * .08, p[0], p[1], r); gr.addColorStop(0, c[0]); gr.addColorStop(1, c[1]); g.fillStyle = gr; g.beginPath(); g.arc(p[0], p[1], r, 0, 6.2832); g.fill(); }
    }
    raf = requestAnimationFrame(draw);
  }
  const pt = e => [e.clientX, e.clientY];
  const down = e => { drag = pt(e); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); }, move = e => { if (!drag) return; const p = pt(e); yaw += (p[0] - drag[0]) * .012; pit = Math.max(-1.45, Math.min(1.45, pit + (p[1] - drag[1]) * .012)); drag = p; }, up = () => { drag = null; };
  cv.addEventListener('pointerdown', down); cv.addEventListener('pointermove', move); cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  raf = requestAnimationFrame(draw);
  return {stop() { live = false; cancelAnimationFrame(raf); cv.removeEventListener('pointerdown', down); cv.removeEventListener('pointermove', move); cv.removeEventListener('pointerup', up); cv.removeEventListener('pointercancel', up); }, size,
    frame(y, p) { yaw = y; pit = p; vy = 0; }, atoms: [...new Set(A.map(a => a[0]))]};
}
window.KMOL = {svg, view, AT, ATN};
})();
