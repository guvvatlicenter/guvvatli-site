/* Xəzərin dibi: dərinlik mühərriki. Guvvatli Center */
(() => {
const XZ = window.XZ || {stops: [], profile: []};
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MAXD = XZ.max || 1025;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const nf = (v, d = 0) => { const [a, b] = Math.abs(v).toFixed(d).split('.'); return (v < 0 ? '−' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (b ? ',' + b : ''); };

/* ---------- smooth scroll ---------- */
let lenis = null;
if (window.Lenis && !RM) { try { lenis = new Lenis({lerp: .12, wheelMultiplier: 1}); } catch (e) { lenis = null; } }
const scrollTo = (y, opt = {}) => {
  y = Math.max(0, y);
  if (lenis) lenis.scrollTo(y, Object.assign({duration: .5, easing: t => 1 - Math.pow(1 - t, 3), force: true}, opt));
  else window.scrollTo({top: y, behavior: opt.immediate || RM ? 'auto' : 'smooth'});
};

/* ---------- depth <-> document position ---------- */
let A = [], H = innerHeight, W = innerWidth, yWater = 0, yBed = 0, yEnd = 0, yDive = 0;
const dive = $('#dive'), wl = $('#waterline'), bed = $('#seabed');
function measure() {
  H = innerHeight; W = innerWidth;
  const sy = window.scrollY;
  yWater = wl.getBoundingClientRect().top + sy; yDive = dive.getBoundingClientRect().top + sy;
  const pts = [{y: yWater, d: 0}];
  $$('.stop[data-d]').forEach(el => {
    const d = +el.dataset.d; if (!(d > 0)) return;
    const r = el.getBoundingClientRect();
    pts.push({y: r.top + sy + Math.min(r.height / 2, H * .5), d});
  });
  const br = bed.getBoundingClientRect();
  yBed = br.top + sy + br.height * .55; yEnd = $('#end').getBoundingClientRect().top + sy;
  pts.push({y: yBed, d: MAXD});
  pts.sort((a, b) => a.y - b.y);
  A = [pts[0]];
  for (const p of pts.slice(1)) { const q = A[A.length - 1]; if (p.y > q.y + 1 && p.d > q.d) A.push(p); }
  XZ.stops.forEach(s => { const el = document.getElementById('s-' + s.id); if (el) { const r = el.getBoundingClientRect(); s.y = r.top + sy + Math.min(r.height / 2, H * .5); s.el = el; } });
  window.XZlife && window.XZlife.measure();
}
function depthAt(y) {
  if (y <= A[0].y) return (y - A[0].y) / 60;           // suyun üstü: mənfi
  const n = A.length;
  if (y >= A[n - 1].y) return MAXD;
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (A[m].y <= y) lo = m; else hi = m; }
  const a = A[lo], b = A[hi];
  return a.d + (b.d - a.d) * (y - a.y) / (b.y - a.y);
}
function yAt(d) {
  if (d <= 0) return A[0].y;
  const n = A.length;
  if (d >= MAXD) return A[n - 1].y;
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (A[m].d <= d) lo = m; else hi = m; }
  const a = A[lo], b = A[hi];
  return a.y + (b.y - a.y) * (d - a.d) / (b.d - a.d);
}

/* ---------- physics (approximate, see page note) ---------- */
const pw = (T, d) => { for (let i = 1; i < T.length; i++) if (d <= T[i][0]) { const a = T[i - 1], b = T[i]; return a[1] + (b[1] - a[1]) * (d - a[0]) / (b[0] - a[0]); } return T[T.length - 1][1]; };
const TEMP = [[0, 26], [12, 25.4], [22, 23], [32, 16], [45, 11.5], [60, 9.6], [100, 8], [200, 7], [300, 6.5], [600, 6.1], [1025, 5.9]];
const OXY = [[0, 9.2], [50, 8.2], [100, 7.2], [200, 6], [400, 3], [600, .6], [700, .3], [1025, .1]];
const pressure = d => 1 + 1011 * 9.81 * d / 101325;
const light = d => 100 * Math.exp(-0.1535 * d);
const PROF = XZ.profile || [];
const kmAt = d => { for (let i = 0; i < PROF.length; i++) if (PROF[i][1] >= d) { if (!i) return 0; const a = PROF[i - 1], b = PROF[i]; return a[0] + (b[0] - a[0]) * (d - a[1]) / Math.max(.001, b[1] - a[1]); } return PROF.length ? PROF[PROF.length - 1][0] : 0; };

/* ---------- colours: real Caspian water (blue-green where lit, fading to black) ---------- */
const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const RAMP = [[0, '#2F9CC6'], [1.5, '#268EBA'], [5, '#1D7CA8'], [12, '#166890'], [25, '#115375'], [45, '#0C3D5A'], [80, '#082B43'], [140, '#051C2F'], [260, '#03121F'], [500, '#020A13'], [1025, '#010509']].map(([d, c]) => [d, hex(c)]);
function waterCol(d) {
  if (d <= 0) return RAMP[0][1];
  for (let i = 1; i < RAMP.length; i++) if (d <= RAMP[i][0]) { const a = RAMP[i - 1], b = RAMP[i], t = (d - a[0]) / (b[0] - a[0]); return [0, 1, 2].map(k => Math.round(lerp(a[1][k], b[1][k], t))); }
  return RAMP[RAMP.length - 1][1];
}
const rgb = (c, a = 1) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
const vis = d => Math.exp(-Math.max(0, d) / 45);          // gözə görünən işıq (şəkil üçün yumşaldılmış)

/* ---------- sea canvas ---------- */
const cv = $('#sea'), cx = cv.getContext('2d');
let DPR = 1;
function sizeSea() { DPR = Math.min(devicePixelRatio || 1, W < 800 ? 1.5 : 1.25); cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); }
const rnd = (a, b) => a + Math.random() * (b - a);
// bulanıqlıq: təkrarlanan (kənarları birləşən) duman toxuması
function makeMurk(size, col, lo, span) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'), im = g.createImageData(size, size), d = im.data;
  const layers = [[3, .46], [6, .28], [12, .16], [24, .1]], grids = layers.map(([n]) => Float32Array.from({length: n * n}, Math.random));
  const sm = t => t * t * (3 - 2 * t);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let v = 0;
    for (let li = 0; li < layers.length; li++) {
      const n = layers[li][0], G = grids[li], gx = x / size * n, gy = y / size * n, x0 = Math.floor(gx), y0 = Math.floor(gy), fx = sm(gx - x0), fy = sm(gy - y0);
      const a = G[(y0 % n) * n + (x0 % n)], b = G[(y0 % n) * n + ((x0 + 1) % n)], c2 = G[((y0 + 1) % n) * n + (x0 % n)], e = G[((y0 + 1) % n) * n + ((x0 + 1) % n)];
      v += layers[li][1] * (a + (b - a) * fx + (c2 - a) * fy + (a - b - c2 + e) * fx * fy);
    }
    v = clamp((v - lo) / span, 0, 1); v = v * v * (3 - 2 * v);
    const i = (y * size + x) * 4; d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = Math.round(v * 255);
  }
  g.putImageData(im, 0, 0); return c;
}
const MURK_L = makeMurk(192, [206, 236, 244], .34, .42), MURK_D = makeMurk(192, [2, 18, 32], .4, .4);
const DOT = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(228,244,248,1)'); r.addColorStop(.35, 'rgba(228,244,248,.5)'); r.addColorStop(1, 'rgba(228,244,248,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return c; })();
// duman, işıq və qaranlıq kiçik kətanda (1/4 ölçüdə) qurulur, sonra böyüdülür: həm yumşaq görünür, həm də yüngül işləyir
const fc = document.createElement('canvas'), fx = fc.getContext('2d'), FQ = 4;
const PAT_L = fx.createPattern(MURK_L, 'repeat'), PAT_D = fx.createPattern(MURK_D, 'repeat');
function tile(pat, size, ox, oy, top) {                   // toxumanı tikişsiz təkrarla
  const w = fc.width, h = fc.height, k = size / 192;
  ox = ((ox % size) + size) % size; oy = ((oy % size) + size) % size;
  fx.setTransform(k, 0, 0, k, ox, oy); fx.fillStyle = pat;
  fx.fillRect(-ox / k, (top - oy) / k, w / k, (h - top) / k);
  fx.setTransform(1, 0, 0, 1, 0, 0);
}
let P = [], B = [];
function seed() {
  const k = RM ? 0 : clamp(W * H / 900000, .45, 1.5);
  P = [];
  for (let i = 0; i < Math.round(120 * k); i++) P.push({x: Math.random(), y: Math.random(), z: rnd(.25, .9), r: rnd(.6, 1.9), a: rnd(.18, .7), p: rnd(0, 6.28), k: 0});
  for (let i = 0; i < Math.round(38 * k); i++) P.push({x: Math.random(), y: Math.random(), z: rnd(.8, 1.25), r: rnd(3, 7.5), a: rnd(.1, .3), p: rnd(0, 6.28), k: 1});
  for (let i = 0; i < Math.round(10 * k); i++) P.push({x: Math.random(), y: Math.random(), z: rnd(1.3, 1.9), r: rnd(16, 40), a: rnd(.035, .085), p: rnd(0, 6.28), k: 2});
  B = [];
}
const rc = document.createElement('canvas'), rx = rc.getContext('2d');
const SUNX = .68;
const RAYS = Array.from({length: 9}, (_, i) => ({o: (i - 4) / 4 * .52 + rnd(-.04, .04), w: rnd(.03, .075), s: rnd(.4, 1), p: rnd(0, 6.28)}));
let lastSy = window.scrollY, vel = 0, mx = .5, my = .5, lastSeaT = 0;
addEventListener('pointermove', e => { mx = e.clientX / W; my = e.clientY / H; }, {passive: true});
function drawSea(t, sy, dep) {
  const w = cv.width, h = cv.height, s = DPR;
  const dtm = Math.min(60, t - lastSeaT || 16); lastSeaT = t;
  const yw = (yWater - sy) * s;                           // su xəttinin ekrandakı yeri
  cx.setTransform(1, 0, 0, 1, 0, 0); cx.globalAlpha = 1; cx.globalCompositeOperation = 'source-over';
  const dsy = sy - lastSy; vel = lerp(vel, dsy, .3); if (Math.abs(vel) < .05) vel = 0;
  if (yw < h) {                                           // su
    const y0 = Math.max(0, yw), V = vis(dep), dTop = Math.max(0, depthAt(sy + y0 / s)), Vt = vis(dTop);
    const fw = Math.ceil(w / FQ), fh = Math.ceil(h / FQ), f0 = y0 / FQ, sq = s / FQ;
    if (fc.width !== fw || fc.height !== fh) { fc.width = fw; fc.height = fh; }
    fx.setTransform(1, 0, 0, 1, 0, 0); fx.globalAlpha = 1; fx.globalCompositeOperation = 'source-over';
    const g = fx.createLinearGradient(0, f0, 0, fh), N = 8;
    for (let i = 0; i <= N; i++) { const yy = y0 + (h - y0) * i / N; g.addColorStop(i / N, rgb(waterCol(Math.max(0, depthAt(sy + yy / s))))); }
    fx.fillStyle = g; fx.fillRect(0, 0, fw, fh);
    // tünd və açıq duman qatları: suyun bulanıqlığı
    const base = Math.max(fw, fh), tt = RM ? 0 : t;
    fx.globalAlpha = .34 + .2 * (1 - V); tile(PAT_D, base * .95, tt * .006 * sq - sy * .12 * sq, -sy * .2 * sq, 0);
    fx.globalCompositeOperation = 'screen';
    fx.globalAlpha = .05 + .25 * V; tile(PAT_L, base * .8, -tt * .009 * sq, -sy * .32 * sq + tt * .002 * sq, 0);
    fx.globalAlpha = .035 + .19 * V; tile(PAT_L, base * .42, tt * .014 * sq + 80, -sy * .58 * sq, 0);
    fx.globalAlpha = 1;
    if (Vt > .02) {                                       // yuxarıdan düşən işıq
      const tg = fx.createLinearGradient(0, f0, 0, f0 + (fh - f0) * .9);
      tg.addColorStop(0, `rgba(150,214,236,${.24 * Vt})`); tg.addColorStop(1, 'rgba(150,214,236,0)');
      fx.fillStyle = tg; fx.fillRect(0, f0, fw, fh - f0);
    }
    if (dTop < 30) {                                      // günəşin altındakı parıltı
      const k = clamp(1 - dTop / 30, 0, 1), sg = fx.createRadialGradient(SUNX * fw, f0, 0, SUNX * fw, f0, fh * .95);
      sg.addColorStop(0, `rgba(205,240,250,${.34 * k})`); sg.addColorStop(.4, `rgba(170,225,242,${.12 * k})`); sg.addColorStop(1, 'rgba(170,225,242,0)');
      fx.fillStyle = sg; fx.fillRect(0, f0, fw, fh - f0);
    }
    if (dTop < 50 && !RM) {                               // günəş şüaları: daha kiçik kətanda çəkilir ki, kənarları yumşaq olsun
      const k = Math.pow(clamp(1 - dTop / 50, 0, 1), 1.25), rw = Math.ceil(fw / 2.5), rh = Math.ceil(fh / 2.5);
      if (rc.width !== rw || rc.height !== rh) { rc.width = rw; rc.height = rh; }
      rx.clearRect(0, 0, rw, rh);
      const top = f0 / 2.5, len = rh * 1.25;
      for (const r of RAYS) {
        const sway = Math.sin(t * .00022 * r.s + r.p) * .03, x = (SUNX + r.o + sway) * rw, ww = r.w * rw * (1 + .25 * Math.sin(t * .0004 + r.p)), fan = (r.o * 1.05 + sway) * rw;
        const near = 1 - Math.min(1, Math.abs(r.o) / .6) * .55, g2 = rx.createLinearGradient(0, top, 0, top + len);
        g2.addColorStop(0, `rgba(222,245,255,${.3 * k * near})`); g2.addColorStop(.5, `rgba(190,232,248,${.09 * k * near})`); g2.addColorStop(1, 'rgba(190,232,248,0)');
        rx.fillStyle = g2; rx.beginPath();
        rx.moveTo(x - ww * .3, top); rx.lineTo(x + ww * .3, top); rx.lineTo(x + fan + ww * 1.3, top + len); rx.lineTo(x + fan - ww * 1.3, top + len); rx.closePath(); rx.fill();
      }
      fx.imageSmoothingEnabled = true; fx.imageSmoothingQuality = 'high';
      fx.drawImage(rc, 0, 0, rw, rh, 0, 0, fw, fh);
    }
    const gx = lerp(.5, mx, .28) * fw, gy = lerp(.5, my, .22) * fh;
    if (dep > 120) {                                      // dərinlikdə fənərin bulanıq suda görünən işığı
      const k = clamp((dep - 120) / 160, 0, 1), lg = fx.createRadialGradient(gx, gy, 0, gx, gy, base * .5);
      lg.addColorStop(0, `rgba(120,172,196,${.15 * k})`); lg.addColorStop(.5, `rgba(90,140,166,${.05 * k})`); lg.addColorStop(1, 'rgba(90,140,166,0)');
      fx.fillStyle = lg; fx.fillRect(0, 0, fw, fh);
    }
    fx.globalCompositeOperation = 'source-over';
    if (dep > 35) {                                       // dərinləşdikcə kənarlar qaralır
      const k = clamp((dep - 35) / 190, 0, 1), g3 = fx.createRadialGradient(gx, gy, Math.min(fw, fh) * .16, gx, gy, base * .8);
      g3.addColorStop(0, 'rgba(1,5,9,0)'); g3.addColorStop(1, `rgba(1,5,9,${.72 * k})`);
      fx.fillStyle = g3; fx.fillRect(0, 0, fw, fh);
    }
    cx.imageSmoothingEnabled = true; cx.imageSmoothingQuality = 'high';
    cx.drawImage(fc, 0, 0, fw, fh, 0, 0, fw * FQ, fh * FQ);
    // asılı hissəciklər: xırda dənələr və bulanıq ləkələr
    const lit = .3 + .7 * V, drift = RM ? 0 : dtm * .000012;
    for (const p of P) {
      p.y -= (dsy * p.z * .9) / H + (dep > 150 ? -.00013 : .00006) * p.z;
      p.x += drift * (.5 + p.z) + Math.sin(t * .0005 + p.p) * .00011;
      if (p.y < -.06) p.y += 1.12; else if (p.y > 1.06) p.y -= 1.12;
      if (p.x > 1.05) p.x -= 1.1;
      const py = p.y * h, r = p.r * s; if (py < yw + r) continue;
      const px = p.x * w;
      if (p.k === 0) {
        const st = clamp((Math.abs(vel) - 6) * p.z * .5, 0, 40) * s;
        cx.globalAlpha = p.a * lit; cx.fillStyle = '#DDF0F5';
        if (st > 2) cx.fillRect(px, py - (vel > 0 ? 0 : st), r, st + r); else { cx.beginPath(); cx.arc(px, py, r, 0, 6.283); cx.fill(); }
      } else { cx.globalAlpha = p.a * lit; cx.drawImage(DOT, px - r, py - r, r * 2, r * 2); }
    }
    cx.globalAlpha = 1;
    // qabarcıqlar
    if (!RM && dep < 420 && Math.abs(vel) > 1.2 && B.length < 26 && Math.random() < .3) B.push({x: rnd(.04, .96), y: 1.05, r: rnd(1.5, 6), v: rnd(.0035, .009), p: rnd(0, 6.28)});
    for (let i = B.length - 1; i >= 0; i--) {
      const b = B[i]; b.y -= b.v + (dsy / H) * .9; const by = b.y * h;
      if (b.y < -.05 || by < yw + 8 * s) { B.splice(i, 1); continue; }
      cx.beginPath(); cx.arc((b.x + Math.sin(t * .003 + b.p) * .004) * w, by, b.r * s, 0, 6.283);
      cx.strokeStyle = `rgba(226,246,252,${.3 + .35 * V})`; cx.lineWidth = 1.2 * s; cx.stroke();
      cx.fillStyle = 'rgba(226,246,252,.07)'; cx.fill();
    }
  }
  if (yw > 0) {                                           // səma: üfüqə doğru açıq mavi duman və günəş işığı
    const g = cx.createLinearGradient(0, Math.min(0, yw - h), 0, yw);
    g.addColorStop(0, '#F2F4F3'); g.addColorStop(.55, '#E2EEF2'); g.addColorStop(.9, '#CBE2EB'); g.addColorStop(1, '#DCEDF2');
    cx.fillStyle = g; cx.fillRect(0, 0, w, Math.min(h, yw) + 1);
    const sg = cx.createRadialGradient(SUNX * w, yw - h * .2, 0, SUNX * w, yw - h * .2, h * .55);
    sg.addColorStop(0, 'rgba(255,253,244,.95)'); sg.addColorStop(.25, 'rgba(255,251,236,.5)'); sg.addColorStop(1, 'rgba(255,250,236,0)');
    cx.fillStyle = sg; cx.fillRect(0, 0, w, Math.min(h, yw));
  }
  if (yw > -70 * s && yw < h) {                           // su xətti: köpük və açıq zolaq
    for (let L = 0; L < 3; L++) {
      cx.beginPath();
      const amp = (7 - L * 1.6) * s, ph = t * (.0011 - L * .0002) + L * 1.9, b0 = yw + L * 5 * s;
      cx.moveTo(0, b0);
      for (let x = 0; x <= w + 24; x += 24) cx.lineTo(x, b0 + Math.sin(x / (150 * s) + ph) * amp + Math.sin(x / (57 * s) - ph * 1.7) * amp * .4);
      const bot = b0 + (L === 2 ? 64 : 30) * s;
      cx.lineTo(w, bot); cx.lineTo(0, bot); cx.closePath();
      const c = L === 0 ? '255,255,255' : L === 1 ? '196,234,245' : '96,190,220', gw = cx.createLinearGradient(0, b0 - amp, 0, bot);
      gw.addColorStop(0, `rgba(${c},${L === 0 ? .92 : L === 1 ? .7 : .8})`); gw.addColorStop(1, `rgba(${c},0)`);
      cx.fillStyle = gw; cx.fill();
    }
  }
  lastSy = sy;
}

/* ---------- depth tape ---------- */
const tape = $('#tape'), tc = $('#tape canvas'), tx = tc.getContext('2d'), ptr = $('#ptr b');
let TW = 0, TH = 0, PPM = 12;
function sizeTape() {
  const r = tape.getBoundingClientRect(); TW = r.width; TH = r.height;
  const d = Math.min(devicePixelRatio || 1, 2); tc.width = Math.round(TW * d); tc.height = Math.round(TH * d);
  tx.setTransform(d, 0, 0, d, 0, 0); PPM = TW < 70 ? 9 : 12;
}
const seen = new Set();
try { JSON.parse(localStorage.getItem('xz.seen') || '[]').forEach(i => seen.add(i)); } catch (e) {}
function drawTape(dep) {
  tx.clearRect(0, 0, TW, TH);
  const mid = TH / 2, d0 = dep - mid / PPM, d1 = dep + mid / PPM, small = TW < 70;
  tx.textBaseline = 'middle'; tx.textAlign = 'right';
  // ümumi irəliləyiş xətti
  tx.fillStyle = 'rgba(255,255,255,.1)'; tx.fillRect(TW - 5, 0, 3, TH);
  tx.fillStyle = '#C6F26B'; tx.fillRect(TW - 5, 0, 3, TH * clamp(dep / MAXD, 0, 1));
  for (let m = Math.max(0, Math.ceil(d0)); m <= Math.min(MAXD, d1); m++) {
    const y = mid + (m - dep) * PPM, ten = m % 10 === 0, five = m % 5 === 0;
    const len = ten ? (small ? 15 : 22) : five ? (small ? 10 : 14) : (small ? 5 : 8);
    tx.fillStyle = ten ? 'rgba(255,255,255,.95)' : five ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.3)';
    tx.fillRect(TW - 12 - len, y - (ten ? 1 : .5), len, ten ? 2 : 1);
    if ((ten && m !== 0) || (m === MAXD && !ten)) { tx.font = `600 ${small ? 10 : 12}px Onest, system-ui, sans-serif`; tx.fillStyle = 'rgba(255,255,255,.86)'; tx.fillText(String(m), TW - 16 - len, y); }
  }
  if (d0 < 0) { const y = mid - dep * PPM; tx.fillStyle = '#C6F26B'; tx.fillRect(8, y - 1.5, TW - 16, 3); tx.font = `700 ${small ? 9 : 11}px Onest, system-ui, sans-serif`; tx.textAlign = 'center'; tx.fillStyle = '#C6F26B'; tx.fillText('SƏTH', TW / 2, y - 12); tx.textAlign = 'right'; }
  if (d1 > MAXD) { const y = mid + (MAXD - dep) * PPM; tx.fillStyle = '#C6F26B'; tx.fillRect(8, y - 1.5, TW - 16, 3); tx.font = `700 ${small ? 9 : 11}px Onest, system-ui, sans-serif`; tx.textAlign = 'center'; tx.fillStyle = '#C6F26B'; tx.fillText('DİB', TW / 2, y + 13); tx.textAlign = 'right'; }
  for (const s of XZ.stops) {                              // kəşf nişanları
    if (s.d < d0 - 1 || s.d > d1 + 1 || !s.log) continue;
    const y = mid + (s.d - dep) * PPM, x = small ? 9 : 13, on = seen.has(s.id);
    tx.beginPath(); tx.arc(x, y, small ? 3.2 : 4.2, 0, 6.283);
    if (on) { tx.fillStyle = '#C6F26B'; tx.fill(); } else { tx.strokeStyle = '#C6F26B'; tx.lineWidth = 1.6; tx.stroke(); }
  }
}

/* ---------- HUD ---------- */
const R = {p: $('#ro-p'), t: $('#ro-t'), l: $('#ro-l'), o: $('#ro-o'), k: $('#ro-k'), b: $('#ro-b'), bv: $('#ro-bv')};
let lastTxt = {};
const setTxt = (k, el, v) => { if (el && lastTxt[k] !== v) { lastTxt[k] = v; el.innerHTML = v; } };
function hud(dep) {
  const d = Math.max(0, dep);
  setTxt('ptr', ptr, `${nf(Math.round(d))}<small>m</small>`);
  if (lastTxt.av !== Math.round(d)) { lastTxt.av = Math.round(d); tape.setAttribute('aria-valuenow', lastTxt.av); tape.setAttribute('aria-valuetext', lastTxt.av + ' metr'); }
  const p = pressure(d); setTxt('p', R.p, `${nf(p, p < 100 ? 1 : 0)}<small>atm</small>`);
  setTxt('t', R.t, `${nf(pw(TEMP, d), d < 300 ? 0 : 1)}<small>°C</small>`);
  const L = light(d); setTxt('l', R.l, L >= 9.5 ? `${nf(L)}<small>%</small>` : L >= .95 ? `${nf(L, 1)}<small>%</small>` : L >= .01 ? `${nf(L, 2)}<small>%</small>` : 'qaranlıq');
  const o = pw(OXY, d); setTxt('o', R.o, `${nf(o, 1)}<small>mq/l</small>`);
  setTxt('k', R.k, `${nf(kmAt(Math.min(d, 995)))}<small>km</small>`);
  if (R.b) { const sc = Math.cbrt(1 / p); R.b.style.transform = `scale(${sc.toFixed(3)})`; const v = 100 / p; setTxt('bv', R.bv, `${nf(v, v < 9.95 ? 1 : 0)}<small>%</small>`); }
}

/* ---------- discoveries ---------- */
const logBtn = $('#logBtn'), logN = $('#logN'), toast = $('#toast');
const LOGS = XZ.stops.filter(s => s.log);
let toastT = 0;
let quizOk = 0;
function setCount() { const n = LOGS.filter(s => seen.has(s.id)).length; if (logN) logN.textContent = n; const a = $('#endSeen'), b = $('#endQ'); if (a) a.textContent = n; if (b) b.textContent = quizOk; }
function discover(s) {
  if (seen.has(s.id)) return;
  seen.add(s.id); setCount();
  try { localStorage.setItem('xz.seen', JSON.stringify([...seen])); } catch (e) {}
  logBtn && (logBtn.classList.remove('bump'), void logBtn.offsetWidth, logBtn.classList.add('bump'));
  if (toast) { toast.textContent = 'Yeni kəşf: ' + s.t; toast.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 1900); }
  const li = document.querySelector(`.log li[data-id="${s.id}"]`); if (li) { li.classList.remove('un'); li.querySelector('.nm b').textContent = s.t; }
  ping();
}

/* ---------- sound (synthesised, off by default) ---------- */
let AC = null, amb = null, sndOn = false;
function sndInit() {
  if (AC) return;
  try {
    AC = new (window.AudioContext || window.webkitAudioContext)();
    const len = AC.sampleRate * 3, buf = AC.createBuffer(1, len, AC.sampleRate), ch = buf.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { const wn = Math.random() * 2 - 1; last = (last + .02 * wn) / 1.02; ch[i] = last * 3.2; }
    const src = AC.createBufferSource(); src.buffer = buf; src.loop = true;
    const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    const g = AC.createGain(); g.gain.value = 0;
    src.connect(lp).connect(g).connect(AC.destination); src.start();
    amb = {lp, g};
  } catch (e) { AC = null; }
}
function ping() {
  if (!sndOn || !AC) return;
  const t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(1180, t); o.frequency.exponentialRampToValueAtTime(880, t + .5);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.12, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + 1.1);
  o.connect(g).connect(AC.destination); o.start(t); o.stop(t + 1.2);
}
const sndBtn = $('#sndBtn');
sndBtn && sndBtn.addEventListener('click', () => {
  sndOn = !sndOn; sndInit(); if (AC && AC.state === 'suspended') AC.resume();
  sndBtn.classList.toggle('on', sndOn); sndBtn.setAttribute('aria-pressed', sndOn);
  if (amb) amb.g.gain.setTargetAtTime(sndOn ? .38 : 0, AC.currentTime, .4);
  if (sndOn) ping();
});

/* ---------- frame ---------- */
let curDep = 0, auto = false, autoHold = 0, lastT = 0, diving = false, lastStop = null, fno = 0;
const LIFE = window.XZlife || null;
function frame(t) {
  const sy = window.scrollY, dt = Math.min(60, t - lastT || 16); lastT = t;
  if (auto) {
    if (autoHold > 0) autoHold -= dt;
    else {
      const ny = sy + dt * .16;
      if (ny + H >= document.documentElement.scrollHeight - 2 || depthAt(sy + H / 2) >= MAXD) setAuto(false);
      else { if (lenis) lenis.scrollTo(ny, {immediate: true, force: true}); else window.scrollTo(0, ny); }
      const yc0 = sy + H / 2; for (const s of LOGS) if (s !== lastStop && s.y > yc0 - 2 && s.y <= yc0 + dt * .16 + 2) { lastStop = s; autoHold = 4200; break; }
    }
  }
  const yc = sy + H / 2, dep = depthAt(yc);
  curDep = dep;
  const inDive = sy + H * .62 > yWater && sy + H * .5 < yEnd;
  if (inDive !== diving) { diving = inDive; document.body.classList.toggle('diving', diving); }
  $('#nav').classList.toggle('solid', sy > 40);
  const inSea = sy + H > yDive - 4 && sy < yEnd + 4;
  if (inSea) drawSea(t, sy, Math.max(0, dep)); else lastSy = sy;
  if (LIFE) {                                             // 3D canlılar və qurğular
    if (inSea) { LIFE.frame(t, sy, Math.max(0, dep), {top: waterCol(Math.max(0, depthAt(sy))), bot: waterCol(Math.max(0, depthAt(sy + H))), yw: yWater - sy}); if (fno++ % 40 === 0) LIFE.preload(sy); }
    else LIFE.clear();
  }
  if (diving) { drawTape(Math.max(0, dep)); hud(dep); }
  for (const s of LOGS) if (!seen.has(s.id) && s.y != null && Math.abs(s.y - yc) < H * .26) discover(s);
  if (amb && sndOn) amb.lp.frequency.value = lerp(520, 130, clamp(dep / 600, 0, 1));
}
function loop(t) { if (lenis) lenis.raf(t); frame(t); requestAnimationFrame(loop); }

/* ---------- controls ---------- */
function step(dir) {
  setAuto(false);
  const cur = Math.max(0, depthAt(window.scrollY + H / 2));
  let tg = dir > 0 ? Math.floor(cur + .02) + 1 : Math.ceil(cur - .02) - 1;
  tg = clamp(tg, 0, MAXD);
  scrollTo(yAt(tg) - H / 2, {duration: .45});
}
function toStop(dir) {
  setAuto(false);
  const yc = window.scrollY + H / 2, L = XZ.stops.filter(s => s.y != null);
  const nx = dir > 0 ? L.find(s => s.y > yc + 8) : [...L].reverse().find(s => s.y < yc - 8);
  if (nx) scrollTo(nx.y - H / 2, {duration: 1.1});
  else scrollTo(dir > 0 ? yBed - H / 2 : yWater - H * .5, {duration: 1.2});
}
function hold(btn, dir) {
  let t1 = 0, t2 = 0;
  const stop = () => { clearTimeout(t1); clearInterval(t2); };
  btn.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); step(dir); t1 = setTimeout(() => { t2 = setInterval(() => step(dir), 110); }, 420); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => btn.addEventListener(ev, stop));
  btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); step(dir); } });
}
hold($('#stUp'), -1); hold($('#stDn'), 1);
addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('input,textarea')) return;
  if ($('#log').classList.contains('open')) { if (e.key === 'Escape') openLog(false); return; }
  if (!diving) return;
  if (e.key === 'ArrowDown') { e.preventDefault(); step(1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); step(-1); }
  else if (e.key === 'PageDown' || (e.key === ' ' && !e.target.closest('button,a'))) { e.preventDefault(); toStop(1); }
  else if (e.key === 'PageUp') { e.preventDefault(); toStop(-1); }
});
// şkalanı sürüşdürmək
let drag = null;
tape.addEventListener('pointerdown', e => { if (e.target.closest('.stp')) return; setAuto(false); drag = {y: e.clientY, d: Math.max(0, curDep)}; tape.setPointerCapture(e.pointerId); });
tape.addEventListener('pointermove', e => { if (!drag) return; const d = clamp(drag.d - (e.clientY - drag.y) / PPM, 0, MAXD); scrollTo(yAt(d) - H / 2, {immediate: true}); });
['pointerup', 'pointercancel'].forEach(ev => tape.addEventListener(ev, () => { drag = null; }));
tape.addEventListener('wheel', e => { e.preventDefault(); e.stopPropagation(); step(e.deltaY > 0 ? 1 : -1); }, {passive: false});
// avtomatik eniş
const autoBtn = $('#autoBtn');
function setAuto(v) { if (auto === v) return; auto = v; autoHold = 0; lastStop = null; if (autoBtn) { autoBtn.classList.toggle('on', v); autoBtn.firstChild.textContent = v ? 'Dayandır' : 'Avtomatik eniş'; autoBtn.setAttribute('aria-pressed', v); } }
autoBtn && autoBtn.addEventListener('click', () => setAuto(!auto));
['wheel', 'touchstart'].forEach(ev => addEventListener(ev, e => { if (auto && !(e.target.closest && e.target.closest('#autoBtn'))) setAuto(false); }, {passive: true}));
$$('[data-go]').forEach(b => b.addEventListener('click', e => {
  e.preventDefault(); const k = b.dataset.go;
  if (k === 'dive') scrollTo(yWater - H * .5, {duration: 1.6});
  else if (k === 'first') { const f = XZ.stops.find(s => s.d > 0 && s.y != null); scrollTo((f ? f.y : yWater) - H / 2, {duration: 2}); }
  else if (k === 'top') { setAuto(false); scrollTo(yWater - H * .5, {duration: clamp(Math.max(0, curDep) / 110, 1.5, 9), easing: t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2}); }
  else if (k === 'brief') scrollTo($('#brief').getBoundingClientRect().top + window.scrollY, {duration: 1.2});
}));
// gündəlik
const log = $('#log');
function openLog(v) { log.classList.toggle('open', v); log.setAttribute('aria-hidden', !v); if (lenis) v ? lenis.stop() : lenis.start(); if (v) $('#logX').focus(); }
logBtn && logBtn.addEventListener('click', () => openLog(true));
$('#logX').addEventListener('click', () => openLog(false));
log.addEventListener('click', e => { if (e.target === log) openLog(false); const b = e.target.closest('button[data-id]'); if (b) { openLog(false); const s = XZ.stops.find(q => q.id === b.dataset.id); if (s && s.y != null) scrollTo(s.y - H / 2, {duration: 1.6}); } });
// suallar
$$('.qz').forEach(q => q.addEventListener('click', e => {
  const b = e.target.closest('.opts button'); if (!b || q.classList.contains('done')) return;
  q.classList.add('done'); b.classList.add(b.dataset.ok ? 'ok' : 'no'); if (b.dataset.ok) { quizOk++; setCount(); ping(); } const ok = q.querySelector('.opts button[data-ok]'); ok && ok.classList.add('ok');
  setTimeout(measure, 60);
}));
// görünmə
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), {rootMargin: '0px 0px -16% 0px', threshold: .12});
$$('.stop').forEach(el => io.observe(el));

/* ---------- init ---------- */
function relayout() { measure(); sizeSea(); sizeTape(); LIFE && LIFE.size(); }
let rz = 0; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { const d = Math.max(0, curDep), was = diving; relayout(); seed(); if (was && d > 0) scrollTo(yAt(d) - H / 2, {immediate: true}); }, 160); });
addEventListener('load', measure);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); });
$$('.stop img').forEach(im => { if (!im.complete) im.addEventListener('load', () => { clearTimeout(rz); rz = setTimeout(measure, 120); }, {once: true}); });
relayout(); seed(); setCount();
LOGS.forEach(s => { if (seen.has(s.id)) { const li = document.querySelector(`.log li[data-id="${s.id}"]`); if (li) { li.classList.remove('un'); li.querySelector('.nm b').textContent = s.t; } } });
window.XZapi = {depthAt, yAt, measure, get A() { return A; }};
requestAnimationFrame(loop);
})();
