/* Canlı kimya: dövri cədvəl, element paneli, laboratoriya. Guvvatli Center */
(() => {
const EL = window.KEL, K = window.KCHEM, LAB = window.KLAB;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const BY = {}; EL.forEach(e => BY[e.s] = e);
const CATN = {qm: 'Qələvi metallar', qt: 'Qələvi-torpaq metallar', km: 'Keçid metalları', dm: 'Digər metallar', ym: 'Yarımmetallar', nm: 'Qeyri-metallar', hl: 'Halogenlər', tq: 'Təsirsiz qazlar', ln: 'Lantanoidlər', ac: 'Aktinoidlər'};
const nf = v => String(v).replace('.', ',').replace('-', '−');
const chem = s => (s || '').replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');
const rf = r => r.nof ? r.n : K.fml(r.f);
const ORG = window.KORG || {cls: [], mol: {}}, KM = window.KMOL, MOLS = ORG.mol;
const gen = s => chem(s.replace(/C(n)/g, 'C<sub>n</sub>').replace(/H(2n(?:[+−]\d)?)/g, 'H<sub>$1</sub>').replace(/\)m/, ')<sub>m</sub>'));
const mname = id => MOLS[id].n ? MOLS[id].n.split(' (')[0] : chem(MOLS[id].f);

const nav = $('#nav'); addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 30), {passive: true});

/* ---------- dövri cədvəl ---------- */
const ptg = $('#ptg'), leg = $('#leg');
(() => {
  let h = '';
  for (let i = 1; i <= 18; i++) h += '<span class="gh" style="grid-column:' + (i + 1) + ';grid-row:1">' + i + '</span>';
  for (let p = 1; p <= 7; p++) h += '<span class="ph" style="grid-column:1;grid-row:' + (p + 1) + '">' + p + '</span>';
  EL.forEach(e => { h += '<button type="button" class="el c-' + e.c + '" data-s="' + e.s + '" data-c="' + e.c + '" style="grid-column:' + (e.x + 1) + ';grid-row:' + (e.y <= 7 ? e.y + 1 : e.y + 1) + '" aria-label="' + e.n + ', ' + e.z + '"><u>' + e.z + '</u><b>' + e.s + '</b><i>' + e.n + '</i></button>'; });
  h += '<span class="el ast" style="grid-column:4;grid-row:7">*</span><span class="el ast" style="grid-column:4;grid-row:8">**</span>';
  h += '<span class="fl" style="grid-column:2/4;grid-row:10">* Lantanoidlər</span><span class="fl" style="grid-column:2/4;grid-row:11">** Aktinoidlər</span>';
  ptg.innerHTML = h;
  leg.innerHTML = Object.keys(CATN).map(c => '<button type="button" class="c-' + c + '" data-c="' + c + '">' + CATN[c] + '</button>').join('');
})();
let fcat = null;
function filter(fn) { const any = !!fn; ptg.classList.toggle('f', any); $$('.el[data-s]', ptg).forEach(b => b.classList.toggle('hit', any && fn(BY[b.dataset.s]))); }
leg.addEventListener('click', ev => { const b = ev.target.closest('button'); if (!b) return; fcat = fcat === b.dataset.c ? null : b.dataset.c; $('#elq').value = ''; leg.classList.toggle('f', !!fcat); $$('button', leg).forEach(x => x.classList.toggle('on', x.dataset.c === fcat)); filter(fcat ? e => e.c === fcat : null); });
$('#elq').addEventListener('input', ev => { const q = ev.target.value.trim().toLocaleLowerCase('az'); fcat = null; leg.classList.remove('f'); $$('button', leg).forEach(x => x.classList.remove('on')); filter(q ? e => e.n.toLocaleLowerCase('az').includes(q) || e.s.toLowerCase() === q || e.s.toLowerCase().startsWith(q) && q.length < 3 || String(e.z) === q : null); });
$('#elq').addEventListener('keydown', ev => { if (ev.key === 'Enter') { const b = $('.el.hit', ptg); if (b) openEl(b.dataset.s); } });
ptg.addEventListener('click', ev => { const b = ev.target.closest('.el[data-s]'); if (b) openEl(b.dataset.s); });

/* ---------- element paneli ---------- */
const eld = $('#eld'), elc = $('#elc'); let curEl = null, atomRaf = 0;
const GR = {1: 'I', 2: 'II', 13: 'III', 14: 'IV', 15: 'V', 16: 'VI', 17: 'VII', 18: 'VIII'}, GRB = {3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'VIII', 10: 'VIII', 11: 'I', 12: 'II'};
let molV = null, curMol = null;
function openEl(s) {
  const e = BY[s]; if (!e) return; curEl = s; curMol = null; if (molV) { molV.stop(); molV = null; }
  $$('.el.sel', ptg).forEach(b => b.classList.remove('sel')); const cell = $('.el[data-s="' + s + '"]', ptg); cell && cell.classList.add('sel');
  const grp = e.b === 'f' ? 'f-blok elementi' : e.g + (GR[e.g] ? ' (' + GR[e.g] + ' qrup, əsas yarımqrup)' : GRB[e.g] ? ' (' + GRB[e.g] + ' qrup, əlavə yarımqrup)' : '');
  const nn = Math.floor(e.a + .001) - e.z, ec = e.ec.replace(/([spdf])(\d+)/g, '$1<sup>$2</sup>');
  const ox = e.ox.length ? '<div class="oxs">' + e.ox.map(o => '<em class="' + (o < 0 ? 'n' : '') + '">' + (o > 0 ? '+' + o : o < 0 ? '−' + (-o) : '0') + '</em>').join('') + '</div>' : (e.c === 'tq' && e.z <= 18 ? 'birləşmə əmələ gətirmir' : 'dəqiq məlum deyil');
  const tmp = (v, alt) => v === null || v === undefined ? alt : nf(v) + ' °C';
  const den = e.den === null || e.den === undefined ? 'məlum deyil' : e.ph === 'g' ? nf(+(e.den * 1000).toFixed(3)) + ' q/l' : nf(e.den) + ' q/sm³';
  const F = [];
  F.push(['Sıra nömrəsi', e.z], ['Nisbi atom kütləsi', e.m + (e.m[0] !== '[' && String(e.a).replace('.', ',') !== e.m ? ' ≈ ' + nf(e.a) : '')], ['Dövr', e.p], ['Qrup', grp]);
  F.push(['Atomun tərkibi', e.z + ' proton, ' + e.z + ' elektron, ' + nn + ' neytron', 1], ['Elektron konfiqurasiyası', ec, 1], ['Elektronların təbəqələr üzrə paylanması', e.sh.join(', '), 1]);
  F.push(['Oksidləşmə dərəcələri', ox, 1], ['Valentliyi', e.val || (e.c === 'tq' ? 'kimyəvi rabitə yaratmır' : 'məlum deyil')], ['Elektromənfilik', e.en ? nf(e.en) : 'məlum deyil']);
  F.push(['Adi şəraitdə halı', {s: 'bərk', l: 'maye', g: 'qaz'}[e.ph]], ['Sıxlığı', den], ['Ərimə temperaturu', tmp(e.mp, e.s === 'C' ? 'ərimir, sublimasiya edir' : 'məlum deyil')], ['Qaynama temperaturu', tmp(e.bp, 'məlum deyil')]);
  if (e.oxd) F.push(['Ali oksidi', chem(e.oxd)]); if (e.hyd) F.push(['Uçucu hidrogenli birləşməsi', chem(e.hyd)]);
  F.push(['Elektron ailəsi', e.b + '-element'], ['Kəşfi', e.yr ? e.yr + (e.dis ? ', ' + e.dis : '') : 'qədim zamanlardan məlumdur']);
  if (e.rad) F.push(['Radioaktivlik', 'radioaktiv elementdir, dayanıqlı izotopu yoxdur', 1]);
  elc.innerHTML = '<div class="ehd c-' + e.c + '"><div class="etile"><u>' + e.z + '</u><b>' + e.s + '</b><i>' + e.m + '</i></div><div><h3>' + e.n + '</h3><p>' + (e.rd ? 'İşarəsi "' + e.rd + '" oxunur' : 'Kimyəvi işarəsi ' + e.s) + '</p><span class="ecat">' + CATN[e.c] + '</span></div></div>' +
    '<div class="atom"><canvas id="atomCv"></canvas><p>Nüvədə ' + e.z + ' proton var, ətrafında ' + e.sh.length + ' elektron təbəqəsi fırlanır</p></div>' +
    '<p class="edesc">' + chem(e.d) + '</p><div class="efacts">' + F.map(f => '<div' + (f[2] ? ' class="w"' : '') + '><span>' + f[0] + '</span><b>' + f[1] + '</b></div>').join('') + '</div>' +
    '<div class="eact"><button class="btn sm" type="button" id="toLab">Laboratoriyaya apar</button><div class="nv"><button type="button" id="elPrev" aria-label="Əvvəlki element">‹</button><button type="button" id="elNext" aria-label="Növbəti element">›</button></div></div>';
  eld.classList.add('open'); eld.setAttribute('aria-hidden', 'false'); $('.elp', eld).scrollTop = 0;
  $('#toLab').onclick = () => { closeEl(); pick(s); $('#lab').scrollIntoView({behavior: 'smooth'}); };
  $('#elPrev').onclick = () => openEl(EL[(e.z + 116) % 118].s); $('#elNext').onclick = () => openEl(EL[e.z % 118].s);
  atom(e);
}
function closeEl() { eld.classList.remove('open'); eld.setAttribute('aria-hidden', 'true'); cancelAnimationFrame(atomRaf); atomRaf = 0; if (molV) { molV.stop(); molV = null; } }
$('#elx').onclick = closeEl; eld.addEventListener('click', ev => { if (ev.target === eld) closeEl(); });
addEventListener('keydown', ev => { if (ev.key === 'Escape') closeEl(); if (eld.classList.contains('open') && $('#elNext')) { if (ev.key === 'ArrowRight') $('#elNext').click(); if (ev.key === 'ArrowLeft') $('#elPrev').click(); } });
function atom(e) {
  cancelAnimationFrame(atomRaf); const cv = $('#atomCv'), g = cv.getContext('2d'), D = Math.min(devicePixelRatio || 1, 2), r = cv.getBoundingClientRect(), W = r.width, H = r.height; cv.width = W * D; cv.height = H * D;
  const n = e.sh.length, cx = W / 2, cy = H / 2 - 8, R = Math.min(W * .46, H * .44), r0 = Math.max(16, R * .17), t0 = performance.now();
  const draw = ms => { const t = (ms - t0) / 1000; g.setTransform(D, 0, 0, D, 0, 0); g.clearRect(0, 0, W, H);
    const ng = g.createRadialGradient(cx - r0 * .3, cy - r0 * .3, 1, cx, cy, r0); ng.addColorStop(0, '#f1ffc9'); ng.addColorStop(1, '#9ad13c'); g.fillStyle = ng; g.beginPath(); g.arc(cx, cy, r0, 0, 6.2832); g.fill();
    g.fillStyle = '#10161A'; g.font = '700 ' + Math.round(r0 * .62) + 'px Onest, system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('+' + e.z, cx, cy + 1);
    e.sh.forEach((k, i) => { const rr = r0 + (R - r0) * (i + 1) / n; g.strokeStyle = 'rgba(255,255,255,.2)'; g.lineWidth = 1; g.beginPath(); g.ellipse(cx, cy, rr * 1.28, rr * .9, 0, 0, 6.2832); g.stroke();
      const sp = (i % 2 ? -1 : 1) * (.9 / (i + 1) + .12), er = Math.max(2.2, Math.min(4.6, 6.2832 * rr / k / 3));
      for (let j = 0; j < k; j++) { const a = j / k * 6.2832 + t * sp + i; g.fillStyle = '#C6F26B'; g.beginPath(); g.arc(cx + Math.cos(a) * rr * 1.28, cy + Math.sin(a) * rr * .9, er, 0, 6.2832); g.fill(); } });
    if (eld.classList.contains('open')) atomRaf = requestAnimationFrame(draw); };
  atomRaf = requestAnimationFrame(draw);
}

/* ---------- laboratoriya ---------- */
const slots = [null, null]; let turn = 0, tab = 'el', last = null;
const scene = LAB.create($('#labCv')), IDLE = {sc: 'wet', liq: null, add: {t: 'none'}, fx: []};
const tabs = $('#tabs'), shelf = $('#shelf');
tabs.innerHTML = K.SHELF.map(([id, nm]) => '<button type="button" data-t="' + id + '"' + (id === tab ? ' class="on"' : '') + '>' + nm + '</button>').join('');
tabs.addEventListener('click', ev => { const b = ev.target.closest('button'); if (!b) return; tab = b.dataset.t; rq.value = rqv = ''; tabs.classList.remove('dim'); shelf.scrollTop = 0; $$('button', tabs).forEach(x => x.classList.toggle('on', x === b)); drawShelf(); });
const rq = $('#rq'); let rqv = '';
const nz = s => s.toLocaleLowerCase('az').replace(/[^a-zəğıöşüç0-9]/g, ''), fz = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const rgBtn = r => '<button type="button" class="rg' + (slots.includes(r.id) ? ' on' : '') + '" data-id="' + r.id + '"><b>' + rf(r) + '</b>' + (r.nof ? '' : '<i>' + r.n + '</i>') + '</button>';
function drawShelf() {
  if (rqv) {
    const q = nz(rqv), qf = fz(rqv), seen = {}, list = [];
    EL.forEach(e => { if (q && nz(e.n).includes(q) || e.s.toLowerCase() === rqv.toLowerCase()) { const r = K.get(e.s); if (r && !seen[r.id]) { seen[r.id] = 1; list.push(r); } } });
    const ck = {}; ORG.cls.forEach(c => { if (q.length > 2 && nz(c.n).includes(q)) ck[c.k] = 1; });
    Object.values(K.R).forEach(r => { if (!seen[r.id] && !r.el && (q && nz(r.n).includes(q) || qf && !r.nof && fz(r.f).includes(qf) || r.k && ck[r.k])) { seen[r.id] = 1; list.push(r); } });
    shelf.innerHTML = list.length ? list.slice(0, 60).map(rgBtn).join('') : '<p class="snone">Belə maddə tapılmadı. Adını və ya formulunu başqa cür yaz.</p>';
    $('#shint').innerHTML = list.length > 60 ? 'İlk 60 nəticə göstərilir. Axtarışı dəqiqləşdir.' : ''; shelf.scrollTop = 0; return;
  }
  if (tab === 'uz' && ORG.cls.length) {
    const all = Object.values(K.R).filter(r => r.g === 'uz'); let h = '';
    ORG.cls.concat([{k: 'rea', n: 'Reaktivlər və təbii maddələr'}]).forEach(c => { const l = all.filter(r => (r.k || 'rea') === c.k); if (l.length) h += '<h4 class="sg">' + c.n + '</h4>' + l.map(rgBtn).join(''); });
    shelf.innerHTML = h; $('#shint').innerHTML = 'Maddənin quruluşunu görmək üçün yuxarıdakı <a href="#uzvi">üzvi kimya</a> bölməsinə bax.'; return;
  }
  const list = tab === 'el' ? K.LABEL.map(K.get) : Object.values(K.R).filter(r => r.g === tab && !r.el);
  shelf.innerHTML = list.map(rgBtn).join('');
  $('#shint').innerHTML = tab === 'el' ? 'Burada laboratoriyada ən çox işlənən sadə maddələr var. Başqa elementi <a href="#cedvel">cədvəldən</a> seç və "Laboratoriyaya apar" düyməsini bas.' : tab === 'sr' ? 'Maddəni seç, sonra onu qızdır və ya ondan cərəyan burax.' : '';
}
rq.addEventListener('input', () => { rqv = rq.value.trim(); tabs.classList.toggle('dim', !!rqv); drawShelf(); });
shelf.addEventListener('click', ev => { const b = ev.target.closest('.rg'); if (b) pick(b.dataset.id); });
function drawSlots() {
  slots.forEach((id, i) => { const el = $('#slot' + i), r = id && K.get(id); el.classList.toggle('full', !!r); el.classList.toggle('cur', !r && (slots[0] == null ? 0 : 1) === i);
    el.innerHTML = r ? '<i>' + r.n + '</i><b>' + rf(r) + '</b>' : '<i>' + (i ? 'İkinci maddə' : 'Birinci maddə') + '</i><b>seç</b>'; });
  $$('.rg', shelf).forEach(b => b.classList.toggle('on', slots.includes(b.dataset.id)));
}
function pick(id) {
  if (!K.get(id)) return; if (slots.includes(id)) return;
  const i = slots[0] == null ? 0 : slots[1] == null ? 1 : turn; slots[i] = id; turn = 1 - i; drawSlots();
  if (slots[0] && slots[1]) run(); else reset(false);
}
$$('.slot').forEach(b => b.addEventListener('click', () => { const i = +b.dataset.i; if (slots[i] == null) return; slots[i] = null; turn = i; drawSlots(); reset(false); }));
function reset(all) {
  if (all) { slots[0] = slots[1] = null; turn = 0; drawSlots(); }
  last = null; $('#eq').classList.remove('long', 'xl'); $('#eq').innerHTML = '<span class="eqp">' + (slots[0] || slots[1] ? 'İndi ikinci maddəni seç' : 'Maddələri seç, tənlik burada yazılacaq') + '</span>'; $('#st').innerHTML = ''; $('#res').hidden = true; $('#again').hidden = true; $('#swap').hidden = !(slots[0] || slots[1]); scene.play(IDLE);
}
function run() {
  const r = K.react(slots[0], slots[1]); last = r; const eq = $('#eq');
  let h = r.eq ? K.fmt(r.eq) : r.ok && r.eqt ? '<span class="tm">' + chem(r.eqt) + '</span>' : r.ok === false ? K.fmt(r.a.f + ' + ' + r.b.f + ' =/=').replace(/<span class="tm">([^<]*)<\/span>/g, (m, x) => m) + '<span class="nort">reaksiya getmir</span>' : '<span class="tm">' + rf(r.a) + '</span> <span class="pl">+</span> <span class="tm">' + rf(r.b) + '</span>';
  if (r.ok === false && (r.a.nof || r.b.nof)) h = '<span class="tm">' + rf(r.a) + '</span> <span class="pl">+</span> <span class="tm">' + rf(r.b) + '</span> <span class="ar no"><b>↛</b></span><span class="nort">reaksiya getmir</span>';
  const elen = (r.eq || r.eqt || '').length; eq.classList.toggle('long', elen > 44); eq.classList.toggle('xl', elen > 84);
  eq.innerHTML = h; $$(':scope > span', eq).forEach((s, i) => s.style.setProperty('--i', i));
  $('#st').innerHTML = (r.ok ? '<span>' + (r.sp ? 'Xüsusi şəraitdə gedir' : r.nochem ? 'Mühiti göstərir' : 'Reaksiya gedir') + '</span>' : r.ok === false ? '<span class="no">Reaksiya getmir</span>' : '<span class="un">Təcrübə yoxdur</span>') + (r.ok && r.ty ? '<span class="ty">' + r.ty + '</span>' : '');
  $('#res').hidden = false; $('#robs').innerHTML = chem(r.obs || r.why);
  const ion = $('#rion'); ion.hidden = !r.ion; if (r.ion) ion.innerHTML = 'Qısa ion tənliyi: <b>' + K.fmt(r.ion) + '</b>';
  const w = $('#rwarn'); w.hidden = !r.warn; if (r.warn) w.textContent = r.warn;
  const ms = [...new Set((r.mols || []).concat([r.a.id, r.b.id]))].filter(id => MOLS[id]), rm = $('#rmols'); rm.hidden = !ms.length;
  rm.innerHTML = ms.length ? '<span class="rml">Quruluş formulları</span><div class="rmr">' + ms.map(id => '<button type="button" class="mch" data-id="' + id + '">' + KM.svg(id, {scale: .86}) + '<i>' + mname(id) + '</i></button>').join('') + '</div>' : '';
  $('#again').hidden = false; $('#swap').hidden = false;
  scene.play(r.vis);
}
$('#again').onclick = () => { if (last) scene.play(last.vis); };
$('#swap').onclick = () => reset(true);

$('#rmols').addEventListener('click', ev => { const b = ev.target.closest('.mch'); if (b) openMol(b.dataset.id); });

/* ---------- üzvi kimya ---------- */
const ot = $('#otabs'), oi = $('#oinfo'), oc = $('#ocards'); let ocls = 'alkan';
const peersOf = k => Object.keys(MOLS).filter(id => MOLS[id].k === k && MOLS[id].n);
function drawOrg() {
  const c = ORG.cls.find(x => x.k === ocls); if (!c) return;
  $$('button', ot).forEach(b => b.classList.toggle('on', b.dataset.k === ocls));
  oi.innerHTML = '<div class="ogf"><span>Ümumi formul</span><b>' + gen(c.g) + '</b></div><p>' + chem(c.d) + '</p>';
  oc.innerHTML = peersOf(ocls).map(id => { const sv = KM.svg(id); return '<button type="button" class="oc' + (+(sv.match(/data-w="(\d+)"/) || [0, 0])[1] > 285 ? ' w2' : '') + '" data-id="' + id + '"><span class="os">' + sv + '</span><b>' + mname(id) + '</b><i>' + chem(MOLS[id].f) + '</i></button>'; }).join('');
}
if (ot && ORG.cls.length) {
  ot.innerHTML = ORG.cls.map(c => '<button type="button" data-k="' + c.k + '">' + c.n + '</button>').join('');
  ot.addEventListener('click', ev => { const b = ev.target.closest('button'); if (!b) return; ocls = b.dataset.k; drawOrg(); });
  oc.addEventListener('click', ev => { const b = ev.target.closest('.oc'); if (b) openMol(b.dataset.id); });
  drawOrg();
}
const STD = ['Na', 'Mg', 'Zn', 'NaOH', 'CuO', 'Na2CO3', 'CaCO3', 'lak'];
function rxOf(id) {
  const as = [], made = [], nos = [], seen = {};
  for (const k in K.DB) { const r = K.DB[k], ab = k.split('|');
    if (ab[0] === id || ab[1] === id) { const o = ab[0] === id ? ab[1] : ab[0]; seen[o] = 1; if (r.ok) as.push([o, r]); else if (r.ok === false) nos.push(o); }
    else if (r.ok && r.mols && r.mols.includes(id)) made.push([ab[0], ab[1], r]); }
  const R = K.R[id]; if (R && R.ions) STD.forEach(o => { if (seen[o]) return; const r = K.react(id, o); if (r.ok) as.push([o, r]); });
  return {as, made, nos};
}
const rxBtn = (a, b, r) => '<button type="button" class="mr" data-a="' + a + '" data-b="' + b + '"><span class="q">' + (r.eq ? K.fmt(r.eq) : chem(r.eqt || '')) + '</span><i>' + r.ty + (r.sp ? ', xüsusi şəraitdə' : '') + '</i></button>';
function openMol(id) {
  const m = MOLS[id]; if (!m) return; curMol = id; curEl = null; cancelAnimationFrame(atomRaf); atomRaf = 0; if (molV) { molV.stop(); molV = null; }
  $$('.el.sel', ptg).forEach(b => b.classList.remove('sel'));
  const c = ORG.cls.find(x => x.k === m.k), alt = m.n && m.n.includes(' (') ? m.n.split(' (')[1].replace(/\)$/, '') : '', R = K.R[id], rx = rxOf(id), peers = c ? peersOf(m.k) : [], pi = peers.indexOf(id);
  const F = [['Molekul formulu', chem(m.mf)], ['Molyar kütləsi', m.M + ' q/mol'], ['Adi şəraitdə halı', {s: 'bərk', l: 'maye', g: 'qaz'}[m.st]], ['Molekuldakı atomların sayı', m.a3 ? m.a3.length : '']];
  if (c) F.push(['Sinfi', c.n], ['Sinfin ümumi formulu', gen(c.g)]);
  const els = m.a3 ? [...new Set(m.a3.map(a => a[0]))] : [];
  elc.innerHTML = '<div class="mhd"><h3>' + mname(id) + '</h3>' + (alt ? '<p>Başqa adı: ' + alt + '</p>' : '') + (c ? '<span class="ecat mcat">' + c.n + '</span>' : '') + '</div>' +
    '<div class="atom m3"><canvas id="m3cv"></canvas><div class="mleg">' + els.map(e => '<span style="--c:' + KM.AT[e][0] + ';--t:' + (e === 'C' || e === 'N' || e === 'Br' ? '#fff' : '#10161A') + (e === 'C' ? ';--c:#59636a' : e === 'N' ? ';--c:#3a5fd0' : e === 'Br' ? ';--c:#a8502c' : '') + '">' + e + ' ' + KM.ATN[e] + '</span>').join('') + '</div><p>Modeli barmağınla və ya siçanla fırlat</p></div>' +
    '<div class="m2w">' + KM.svg(id, {scale: 1.1}) + '<span>' + chem(m.f) + '</span></div>' +
    '<div class="efacts">' + F.map(f => '<div><span>' + f[0] + '</span><b>' + f[1] + '</b></div>').join('') + '</div>' +
    (rx.as.length ? '<h4 class="mh4">Xarakterik reaksiyaları</h4><div class="mrx">' + rx.as.map(x => rxBtn(id, x[0], x[1])).join('') + '</div>' : '') +
    (rx.made.length ? '<h4 class="mh4">Alınması</h4><div class="mrx">' + rx.made.slice(0, 8).map(x => rxBtn(x[0], x[1], x[2])).join('') + '</div>' : '') +
    (rx.nos.length ? '<h4 class="mh4">Reaksiyaya girmir</h4><div class="mno">' + rx.nos.map(o => '<button type="button" class="mr" data-a="' + id + '" data-b="' + o + '">' + K.get(o).n + '</button>').join('') + '</div>' : '') +
    '<div class="eact">' + (R ? '<button class="btn sm" type="button" id="toLab">Laboratoriyaya apar</button>' : '') + (peers.length > 1 ? '<div class="nv"><button type="button" id="elPrev" aria-label="Əvvəlki maddə">‹</button><button type="button" id="elNext" aria-label="Növbəti maddə">›</button></div>' : '') + '</div>';
  eld.classList.add('open'); eld.setAttribute('aria-hidden', 'false'); $('.elp', eld).scrollTop = 0;
  if ($('#toLab')) $('#toLab').onclick = () => { closeEl(); pick(id); $('#lab').scrollIntoView({behavior: 'smooth'}); };
  if (peers.length > 1) { $('#elPrev').onclick = () => openMol(peers[(pi + peers.length - 1) % peers.length]); $('#elNext').onclick = () => openMol(peers[(pi + 1) % peers.length]); }
  $$('.mr', elc).forEach(b => b.onclick = () => { closeEl(); slots[0] = b.dataset.a; slots[1] = b.dataset.b; turn = 0; drawSlots(); $('.stage').scrollIntoView({behavior: 'smooth', block: 'start'}); run(); });
  molV = KM.view($('#m3cv'), id);
}

/* ---------- hazır təcrübələr ---------- */
const gt = $('#gtabs'), gc = $('#gcards'); let gtag = '';
gt.innerHTML = '<button type="button" class="on" data-g="">Hamısı</button>' + K.TAGS.map(([id, nm]) => '<button type="button" data-g="' + id + '">' + nm + '</button>').join('');
gc.innerHTML = K.FEAT.map(([a, b, title, tag], i) => { const A = K.get(a), B = K.get(b); return '<button type="button" class="gc v' + [0, 1, 0, 2, 3, 0, 1, 0, 0, 3, 2, 0][i % 12] + '" data-a="' + a + '" data-b="' + b + '" data-g="' + tag + '"><span class="f">' + rf(A) + ' + ' + rf(B) + '</span><span class="t">' + title + '</span><span class="bg">' + (A.nof ? '' : K.fml(A.f)) + '</span></button>'; }).join('');
gt.addEventListener('click', ev => { const b = ev.target.closest('button'); if (!b) return; gtag = b.dataset.g; $$('button', gt).forEach(x => x.classList.toggle('on', x === b)); $$('.gc', gc).forEach(c => { c.hidden = !!gtag && c.dataset.g !== gtag; }); });
gc.addEventListener('click', ev => { const c = ev.target.closest('.gc'); if (!c) return; slots[0] = c.dataset.a; slots[1] = c.dataset.b; turn = 0; drawSlots(); $('.stage').scrollIntoView({behavior: 'smooth', block: 'start'}); run(); });

/* ---------- baş ekrandakı canlı səhnə ---------- */
const hero = LAB.create($('#heroCv')), HERO = [['K', 'H2O'], ['AgNO3', 'Cu'], ['Mg', 'O'], ['PbNO32', 'KI'], ['H2O2', 'KI'], ['CuSO4', 'NH3aq'], ['Fe', 'O']]; let hi = 0, ht = 0;
function heroNext() { const p = HERO[hi++ % HERO.length], r = K.react(p[0], p[1]); const q = $('#heroEq'); q.innerHTML = K.fmt(r.eq); hero.play(r.vis, () => { clearTimeout(ht); ht = setTimeout(heroNext, 900); }); }

drawShelf(); drawSlots(); reset(false); heroNext();
let rz = 0; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { scene.size(); hero.size(); }, 120); });
document.fonts && document.fonts.ready.then(() => { scene.size(); hero.size(); });
window.KAPP = {pick, run, reset, scene, hero, openEl, openMol, slots, org(k) { ocls = k; drawOrg(); }, get mol() { return molV; }, set(a, b) { slots[0] = a; slots[1] = b; drawSlots(); run(); }};
})();
