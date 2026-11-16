/* Azərbaycan tarixi: zaman enişi. Guvvatli Center */
(() => {
const T = window.TZ, S = T.stops, N = S.length;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement, body = document.body;
const els = S.map(s => $('#s-' + s.id)), road = $('#road'), end = $('#end'), nav = $('#nav');
const store = { get(k, d) { try { const v = localStorage.getItem('tz_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('tz_' + k, JSON.stringify(v)); } catch (e) {} } };

/* ---------- sürüşmə ---------- */
let lenis = null;
if (window.Lenis && !RM) { lenis = new window.Lenis({lerp: .1}); const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
const getY = () => window.scrollY || root.scrollTop || 0;
function go(y, fast) { y = Math.max(0, y); if (lenis) lenis.scrollTo(y, fast ? {immediate: true} : {duration: 1.5}); else window.scrollTo({top: y, behavior: fast || RM ? 'auto' : 'smooth'}); }

/* ---------- ölçülər ---------- */
let vh = innerHeight, roadTop = 0, endTop = 0;
function measure() {
  vh = innerHeight; roadTop = road.offsetTop; endTop = end.offsetTop;
  const top = innerWidth < 860 ? 84 : 92, dock = innerWidth < 860 ? 64 : 104;
  S.forEach((s, i) => { const el = els[i]; s.a = roadTop + el.offsetTop - Math.max(top, top + (vh - top - dock - el.offsetHeight) / 2); });
}
function yearAt(y) {
  if (y <= S[0].a) return S[0].y;
  const last = S[N - 1]; if (y >= last.a) { const f = Math.min(1, (y - last.a) / Math.max(1, endTop - vh * .5 - last.a)); return last.y + (2026 - last.y) * f; }
  let i = 0; while (i < N - 2 && S[i + 1].a <= y) i++;
  const f = (y - S[i].a) / (S[i + 1].a - S[i].a), a = S[i].y, b = S[i + 1].y;
  return a < -20000 ? -Math.pow(-a, 1 - f) * Math.pow(-b, f) : a + (b - a) * f;
}
const sp = n => String(n).replace(/\B(?=(\d{3})+$)/g, ' ');
function fmt(v) {
  if (v <= -950000) return [(-v / 1e6).toFixed(1).replace('.', ',') + ' mln', 'il əvvəl'];
  if (v <= -20000) return [Math.round(-v / 1000) + ' min', 'il əvvəl'];
  if (v < 0) return [sp(v < -3000 ? Math.round(-v / 100) * 100 : Math.round(-v)), 'e.ə.'];
  return [String(Math.round(v)), 'il'];
}

/* ---------- arxa fon ---------- */
const bg = $('#bg'), layers = $$('i', bg); let bgOn = 0, bgCur = -2;
const rgba = (h, a) => 'rgba(' + parseInt(h.slice(1, 3), 16) + ',' + parseInt(h.slice(3, 5), 16) + ',' + parseInt(h.slice(5, 7), 16) + ',' + a + ')';
function setBg(i) {
  if (i === bgCur) return; bgCur = i;
  if (i < 0 || !S[i].bg) { layers.forEach(l => l.classList.remove('on')); if (i >= 0) bg.style.setProperty('--tint', rgba(T.groups[S[i].g][1], .3)); return; }
  bg.style.setProperty('--tint', rgba(T.groups[S[i].g][1], .26));
  const url = 'img/bg_' + S[i].id + '.jpg', im = new Image();
  im.onload = () => { if (bgCur !== i) return; bgOn ^= 1; const a = layers[bgOn], b = layers[bgOn ^ 1]; a.style.backgroundImage = 'url(' + url + ')'; a.classList.add('on'); b.classList.remove('on'); };
  im.src = url; if (S[i + 1] && S[i + 1].bg) { const p = new Image(); p.src = 'img/bg_' + S[i + 1].id + '.jpg'; }
}

/* ---------- şkala ---------- */
const tape = $('#tape'), cv = $('canvas', tape), g = cv.getContext('2d'), ptr = $('#ptr b'); let TW = 0, TH = 0, K = .15, lastLbl = '';
function sizeTape() { const r = tape.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); TW = r.width; TH = r.height; cv.width = Math.max(1, TW * d); cv.height = Math.max(1, TH * d); g.setTransform(d, 0, 0, d, 0, 0); K = TW < 70 ? .11 : .15; }
function drawTape(y) {
  if (!TW) return; g.clearRect(0, 0, TW, TH); const c = TH / 2, small = TW < 70, step = 13, off = (y * K) % step;
  g.fillStyle = 'rgba(255,255,255,.22)'; for (let t = c - off - step * 40; t < TH; t += step) g.fillRect(TW - (small ? 9 : 14), t, small ? 5 : 8, 1);
  g.textAlign = 'right'; g.textBaseline = 'middle';
  S.forEach((s, i) => { const t = c + (s.a - y) * K; if (t < -20 || t > TH + 20) return; const on = i === cur;
    g.fillStyle = on ? '#C6F26B' : 'rgba(255,255,255,.75)'; g.fillRect(TW - (small ? 15 : 24), t - 1, small ? 11 : 18, 2);
    g.font = (on ? '800 ' : '600 ') + (small ? 10 : 12.5) + 'px Onest, system-ui, sans-serif'; g.fillStyle = on ? '#C6F26B' : s.y < 0 ? 'rgba(232,205,140,.82)' : 'rgba(255,255,255,.78)';
    g.fillText(s.b, TW - (small ? 18 : 30), t); });
}

/* ---------- vəziyyət ---------- */
let cur = -1, seen = new Set(store.get('seen', [])), ticking = false, auto = false;
const logN = $('#logN'), roG = $('#ro-g'), roW = $('#ro-w'), mdot = $('#mdot');
function markSeen() { logN.textContent = seen.size; $('#endSeen').textContent = seen.size; $$('#log li').forEach(li => li.classList.toggle('un', !seen.has(li.dataset.id))); }
function setCur(i) {
  if (i === cur) return; cur = i; setBg(i);
  if (i >= 0) { const s = S[i]; roG.textContent = T.groups[s.g][0]; roW.textContent = s.w.replace(/^[^:]+:\s*/, ''); mdot.style.left = s.p[0] + '%'; mdot.style.top = s.p[1] + '%';
    if (!seen.has(s.id)) { seen.add(s.id); store.set('seen', [...seen]); markSeen(); const b = $('#logBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); } }
  applyMix();
}
function frame() {
  ticking = false; const y = getY();
  nav.classList.toggle('solid', y > 40);
  body.classList.toggle('going', y > roadTop - vh * .55 && y < endTop - vh * .5);
  let i = -1; if (y > roadTop - vh * .7 && y < endTop - vh * .35) { i = 0; while (i < N - 1 && S[i + 1].a - vh * .3 <= y) i++; if (y < S[0].a - vh * .75) i = -1; }
  setCur(i);
  const f = fmt(yearAt(y)), lbl = f[0] + '|' + f[1]; if (lbl !== lastLbl) { lastLbl = lbl; ptr.innerHTML = f[0] + '<small>' + f[1] + '</small>'; }
  drawTape(y);
  if (i >= 0 && !RM) { const a = S[i].a, b = S[i + 1] ? S[i + 1].a : endTop, p = Math.max(-.3, Math.min(1.2, (y - a) / (b - a))); layers.forEach(l => { l.style.transform = 'translate3d(0,' + (-p * 2.2).toFixed(2) + '%,0)'; }); }
}
const tick = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
addEventListener('scroll', tick, {passive: true});
addEventListener('resize', () => { measure(); sizeTape(); tick(); });

/* ---------- görünmə ---------- */
if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -14% 0px', threshold: .08}); $$('.stop').forEach(el => io.observe(el)); }
else $$('.stop').forEach(el => el.classList.add('in'));

/* ---------- keçidlər ---------- */
function step(d) { stopAuto(); const y = getY(); let i = cur; if (i < 0) { if (d > 0) return go(S[0].a); return go(0); }
  if (d > 0) { if (y < S[i].a - 30) return go(S[i].a); return go(i < N - 1 ? S[i + 1].a : endTop); }
  if (y > S[i].a + 30) return go(S[i].a); go(i > 0 ? S[i - 1].a : $('#brief').offsetTop); }
$('#stUp').addEventListener('click', ev => { ev.stopPropagation(); step(-1); });
$('#stDn').addEventListener('click', ev => { ev.stopPropagation(); step(1); });
document.addEventListener('click', ev => { const b = ev.target.closest('[data-go]'); if (!b) return; ev.preventDefault(); stopAuto(); const k = b.dataset.go; go(k === 'top' ? 0 : k === 'road' ? S[0].a : $('#' + k).offsetTop); });
addEventListener('keydown', ev => { if (ev.target.closest && ev.target.closest('input,textarea')) return;
  if (ev.key === 'Escape') { closeLb(); closeLog(); }
  if (!body.classList.contains('going') || logEl.classList.contains('open') || lb.classList.contains('open')) return;
  if (ev.key === 'ArrowDown') { ev.preventDefault(); step(1); } if (ev.key === 'ArrowUp') { ev.preventDefault(); step(-1); } });
let drag = null;
tape.addEventListener('pointerdown', ev => { if (ev.target.closest('.stp')) return; drag = {y: ev.clientY, s: getY()}; tape.setPointerCapture(ev.pointerId); stopAuto(); });
tape.addEventListener('pointermove', ev => { if (drag) go(drag.s - (ev.clientY - drag.y) / K, true); });
['pointerup', 'pointercancel'].forEach(n => tape.addEventListener(n, () => { drag = null; }));

/* ---------- avtomatik eniş ---------- */
const autoBtn = $('#autoBtn'); let autoT = 0;
function stopAuto() { if (!auto) return; auto = false; autoBtn.classList.remove('on'); autoBtn.setAttribute('aria-pressed', 'false'); }
function autoRun(t) { if (!auto) return; const dt = Math.min(.05, (t - autoT) / 1000 || 0); autoT = t; const y = getY() + 68 * dt; if (y >= endTop - vh * .4) { stopAuto(); return; } go(y, true); requestAnimationFrame(autoRun); }
autoBtn.addEventListener('click', () => { if (auto) return stopAuto(); auto = true; autoBtn.classList.add('on'); autoBtn.setAttribute('aria-pressed', 'true'); autoT = performance.now(); requestAnimationFrame(autoRun); });
['wheel', 'touchstart'].forEach(n => addEventListener(n, stopAuto, {passive: true}));

/* ---------- gündəlik ---------- */
const logEl = $('#log');
function openLog() { logEl.classList.add('open'); logEl.setAttribute('aria-hidden', 'false'); if (lenis) lenis.stop(); }
function closeLog() { logEl.classList.remove('open'); logEl.setAttribute('aria-hidden', 'true'); if (lenis) lenis.start(); }
$('#logBtn').addEventListener('click', openLog); $('#logX').addEventListener('click', closeLog);
logEl.addEventListener('click', ev => { if (ev.target === logEl) return closeLog(); const li = ev.target.closest('li'); if (!li) return; const i = S.findIndex(s => s.id === li.dataset.id); closeLog(); if (i >= 0) go(S[i].a); });

/* ---------- şəkli böyütmək ---------- */
const lb = $('#lb'), lbImg = $('#lbImg'); let lbFrom = null;
function openLb(fr) { const im = $('img', fr), st = fr.closest('.stop'), cap = $('figcaption', fr.parentNode); if (!im) return; lbFrom = fr; stopAuto();
  const set = (im.getAttribute('srcset') || '').split(',').map(s => s.trim().split(' ')[0]).filter(Boolean); lbImg.src = set.length ? set[set.length - 1] : im.currentSrc || im.src; lbImg.alt = im.alt;
  $('#lbT').textContent = st ? $('h2', st).textContent : ''; $('#lbC').textContent = cap ? cap.textContent : '';
  lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); if (lenis) lenis.stop(); $('#lbX').focus({preventScroll: true}); }
function closeLb() { if (!lb.classList.contains('open')) return; lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); if (lenis && !logEl.classList.contains('open')) lenis.start(); if (lbFrom) lbFrom.focus({preventScroll: true}); lbFrom = null; }
$$('.ph .fr').forEach(fr => { fr.tabIndex = 0; fr.setAttribute('role', 'button'); fr.setAttribute('aria-label', 'Şəkli böyüt'); fr.addEventListener('click', () => openLb(fr)); fr.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openLb(fr); } }); });
lb.addEventListener('click', ev => { if (ev.target.id !== 'lbImg') closeLb(); });

/* ---------- suallar ---------- */
let okN = 0;
$$('.qz').forEach(q => q.addEventListener('click', ev => { const b = ev.target.closest('.opts button'); if (!b || q.classList.contains('done')) return; q.classList.add('done');
  const ok = b.dataset.ok === '1'; b.classList.add(ok ? 'ok' : 'no'); if (!ok) $('.opts button[data-ok]', q).classList.add('ok'); else { okN++; $('#endQ').textContent = okN; }
  const a = $('.ans', q); if (!a.dataset.d) { a.dataset.d = 1; a.innerHTML = '<b>' + (ok ? 'Düzdür. ' : 'Düz cavab başqadır. ') + '</b>' + a.innerHTML; } }));

/* ---------- musiqi ---------- */
const SND = {ctx: null, on: false, gains: null, master: null, busy: false}, sndBtn = $('#sndBtn'), sndHero = $('#sndHero'), toastEl = $('#toast'); let toastT = 0;
function toast(t) { toastEl.textContent = t; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2600); }
function sndUi() { sndBtn.classList.toggle('on', SND.on); sndBtn.setAttribute('aria-pressed', SND.on ? 'true' : 'false'); sndHero.textContent = SND.busy ? 'Musiqi yüklənir' : SND.on ? 'Musiqini söndür' : 'Musiqini aç'; }
function applyMix() { if (!SND.gains || !SND.on) return; const m = cur >= 0 ? S[cur].m : [.9, .6, 0, 0], t = SND.ctx.currentTime; SND.gains.forEach((gn, i) => gn.gain.setTargetAtTime(m[i] || 0, t, 1.3)); }
async function sndToggle() {
  if (SND.busy) return;
  if (SND.on) { SND.on = false; SND.master.gain.setTargetAtTime(0, SND.ctx.currentTime, .25); setTimeout(() => { if (!SND.on && SND.ctx) SND.ctx.suspend(); }, 1100); return sndUi(); }
  if (!T.snd || !T.snd.length) return toast('Musiqi hələ əlavə olunmayıb');
  try {
    if (!SND.ctx) { const AC = window.AudioContext || window.webkitAudioContext; SND.ctx = new AC(); SND.master = SND.ctx.createGain(); SND.master.gain.value = 0; SND.master.connect(SND.ctx.destination); }
    await SND.ctx.resume();
    if (!SND.gains) { SND.busy = true; sndUi();
      const bufs = await Promise.all(T.snd.map(f => fetch('snd/' + f).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); }).then(b => new Promise((res, rej) => SND.ctx.decodeAudioData(b, res, rej)))));
      const t0 = SND.ctx.currentTime + .1; SND.gains = bufs.map(b => { const src = SND.ctx.createBufferSource(), gn = SND.ctx.createGain(); src.buffer = b; src.loop = true; if (T.loop) { src.loopStart = T.loop[0]; src.loopEnd = T.loop[1]; } gn.gain.value = 0; src.connect(gn); gn.connect(SND.master); src.start(t0, T.loop ? T.loop[0] : 0); return gn; });
      SND.busy = false; }
    SND.on = true; SND.master.gain.setTargetAtTime(.95, SND.ctx.currentTime, .7); applyMix();
  } catch (e) { SND.busy = false; toast('Musiqini açmaq alınmadı'); }
  sndUi();
}
sndBtn.addEventListener('click', sndToggle); sndHero.addEventListener('click', sndToggle);
document.addEventListener('visibilitychange', () => { if (!SND.ctx) return; if (document.hidden) SND.ctx.suspend(); else if (SND.on) SND.ctx.resume(); });

/* ---------- başlanğıc ---------- */
measure(); sizeTape(); markSeen(); frame();
addEventListener('load', () => { measure(); sizeTape(); tick(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); tick(); });
setTimeout(() => { measure(); tick(); }, 1500);
window.TAPP = {go, step, measure, S, get cur() { return cur; }, snd: SND, seek(i) { go(S[i].a, true); }};
})();
