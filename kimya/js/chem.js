/* Kimya laboratoriyası: maddələr, reaksiya qaydaları və təcrübələr. Guvvatli Center */
(() => {
const EL = {}; (window.KEL || []).forEach(e => EL[e.s] = e);

/* ---------- formul, tarazlaşdırma ---------- */
function atoms(f) {
  f = f.replace(/\{[^}]*\}|\^|!|\((q|d)\)/g, ''); const tot = {};
  for (const part of f.split('·')) {
    const m = part.match(/^(\d+)(.*)$/); let k = 1, s = part; if (m) { k = +m[1]; s = m[2]; }
    const st = [{}];
    for (let i = 0; i < s.length;) {
      const ch = s[i];
      if (ch === '(' || ch === '[') { st.push({}); i++; }
      else if (ch === ')' || ch === ']') { i++; let n = ''; while (/\d/.test(s[i] || '')) n += s[i++]; const top = st.pop(), mul = +(n || 1), cur = st[st.length - 1]; for (const e in top) cur[e] = (cur[e] || 0) + top[e] * mul; }
      else { const mm = s.slice(i).match(/^([A-Z][a-z]?)(\d*)/); if (!mm) { i++; continue; } const cur = st[st.length - 1]; cur[mm[1]] = (cur[mm[1]] || 0) + +(mm[2] || 1); i += mm[0].length; }
    }
    for (const e in st[0]) tot[e] = (tot[e] || 0) + st[0][e] * k;
  }
  return tot;
}
function balance(re, pr) {
  const sp = re.concat(pr), at = sp.map(atoms), els = [...new Set(at.flatMap(a => Object.keys(a)))], n = sp.length;
  const M = els.map(e => at.map((a, j) => (a[e] || 0) * (j < re.length ? 1 : -1)));
  let r = 0; const piv = [];
  for (let c = 0; c < n && r < M.length; c++) {
    let p = -1; for (let i = r; i < M.length; i++) if (Math.abs(M[i][c]) > 1e-9) { p = i; break; }
    if (p < 0) continue; [M[r], M[p]] = [M[p], M[r]];
    const d = M[r][c]; for (let j = 0; j < n; j++) M[r][j] /= d;
    for (let i = 0; i < M.length; i++) if (i !== r && Math.abs(M[i][c]) > 1e-9) { const k = M[i][c]; for (let j = 0; j < n; j++) M[i][j] -= k * M[r][j]; }
    piv.push(c); r++;
  }
  if (piv.length !== n - 1) return null;
  const free = [...Array(n).keys()].find(c => !piv.includes(c)), x = Array(n).fill(0); x[free] = 1;
  piv.forEach((c, i) => { x[c] = -M[i][free]; });
  for (let k = 1; k <= 600; k++) { const y = x.map(v => v * k); if (y.every(v => v > 1e-6 && Math.abs(v - Math.round(v)) < 1e-6)) return y.map(Math.round); }
  return null;
}
function mkEq(re, pr, arrow) {
  const c = balance(re, pr); if (!c) return null;
  const t = (f, k) => (k > 1 ? k : '') + f;
  return re.map((f, i) => t(f, c[i])).join(' + ') + ' ' + (arrow || '->') + ' ' + pr.map((f, i) => t(f, c[re.length + i])).join(' + ');
}
function checkEq(eq) {
  const m = eq.split(/\s(?:<->|->)(?:\[[^\]]*\])?\s/); if (m.length !== 2) return false;
  const side = s => { const t = {}; s.split(' + ').forEach(x => { const mm = x.trim().match(/^(\d*)(.+)$/), k = +(mm[1] || 1), a = atoms(mm[2]); for (const e in a) t[e] = (t[e] || 0) + a[e] * k; }); return t; };
  const L = side(m[0]), R = side(m[1]);
  return Object.keys(L).length === Object.keys(R).length && Object.keys(L).every(e => L[e] === R[e]);
}
// "2Na + 2H2O -> 2NaOH + H2^"  ->  HTML
function fmt(eq) {
  const term = x => {
    let m = x.match(/^(\d*)(.+)$/), k = m[1], f = m[2], tail = '';
    f = f.replace(/\((q|d)\)$/, (s, q) => { tail = '<i class="cn">' + (q === 'q' ? 'qatı' : 'duru') + '</i>'; return ''; });
    let mark = ''; f = f.replace(/[\^!]$/, s => { mark = s === '^' ? '<i class="up">↑</i>' : '<i class="dn">↓</i>'; return ''; });
    f = f.replace(/\{([^}]*)\}/g, '<sup>$1</sup>').replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');
    return '<span class="tm">' + (k ? '<b class="k">' + k + '</b>' : '') + f + tail + mark + '</span>';
  };
  return eq.split(' ').map(tok => {
    if (tok === '+') return '<span class="pl">+</span>';
    let m = tok.match(/^(<->|->|=\/=)(?:\[(.*)\])?$/);
    if (m) return '<span class="ar' + (m[1] === '=/=' ? ' no' : '') + '">' + (m[2] ? '<i>' + m[2].replace(/_/g, ' ').replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>') + '</i>' : '') + '<b>' + (m[1] === '<->' ? '⇄' : m[1] === '->' ? '→' : '↛') + '</b></span>';
    return term(tok);
  }).join(' ');
}
const fml = f => f.replace(/\((q|d)\)$/, '').replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');

/* ---------- səhnə qısaltmaları ---------- */
const bub = (r, t0 = 1.6, t1 = 10, src = 'solid', sz = 1) => ({k: 'bub', r, t0, t1, src, sz}),
  col = (to, a = .5, t0 = 1.8, d = 4) => ({k: 'col', to, a, t0, d}),
  ppt = (c, tex = 'curdy', amt = .7, t0 = 1.7, d = 5) => ({k: 'ppt', c, tex, amt, t0, d}),
  dis = (to = 0, t0 = 2, d = 8) => ({k: 'dis', to, t0, d}),
  coat = (c, t0 = 2, d = 6, tree = 0) => ({k: 'coat', c, t0, d, tree}),
  flame = (c, t0 = 1.5, t1 = 9, sz = 1, at = 'solid') => ({k: 'flame', c, t0, t1, sz, at}),
  smoke = (c, amt = 1, t0 = 2, t1 = 9, at = 'top') => ({k: 'smoke', c, amt, t0, t1, at}),
  sparks = (c, r = 30, t0 = 1.5, t1 = 8, at = 'solid') => ({k: 'sparks', c, r, t0, t1, at}),
  flash = (t0 = 2, c = '#ffffff', pw = 1) => ({k: 'flash', t0, c, pw}),
  glow = (c, t0 = 1.5, t1 = 9, sz = 1, at = 'solid') => ({k: 'glow', c, t0, t1, sz, at}),
  foam = (c, h = 1, t0 = 2, d = 5) => ({k: 'foam', c, h, t0, d}),
  mirror = (t0 = 3, d = 6) => ({k: 'mirror', t0, d}),
  layer = (c, a = .6, h = .16, t0 = 2, d = 4) => ({k: 'layer', c, a, h, t0, d}),
  steam = (t0 = 2, t1 = 9, amt = 1) => ({k: 'smoke', c: '#ffffff', amt: amt * .5, t0, t1, at: 'top', steam: 1}),
  skate = (t0 = 1.2, t1 = 9, v = 1) => ({k: 'skate', t0, t1, v}),
  gasfill = (c, a = .4, t0 = 2, d = 5) => ({k: 'gasfill', c, a, t0, d}),
  dep = (c, t0 = 3, d = 5) => ({k: 'dep', c, t0, d}),
  drops = (t0 = 3) => ({k: 'drops', t0}),
  sub = (c, t0 = 3, d = 5) => ({k: 'sub', c, t0, d}),
  scol = (to, t0 = 2, d = 5) => ({k: 'scol', to, t0, d});          // bərk maddənin rəngi dəyişir
const W = (liq, add, fx, o) => Object.assign({sc: 'wet', liq: liq || null, add, fx: fx || []}, o),
  J = (smp, fx, o) => Object.assign({sc: 'jar', smp, fx: fx || [], jar: true}, o),
  T = (mix, fx, o) => Object.assign({sc: 'tube', mix, fx: fx || []}, o),
  sol = (shape, c, o) => Object.assign({t: 'solid', shape, c}, o), pour = (c, a = .5) => ({t: 'pour', c: c || null, a}), drp = c => ({t: 'drops', c}), gasin = c => ({t: 'gas', c: c || null});
const NO2 = '#a4521b', WHT = '#f4f4f0', SILV = '#c9cdd2', PINK = '#e83e8c', CUB = '#2b8fd9', FE2 = '#b9d8a2', FE3 = '#d19a2e', MN = '#7a1a8c', IOD = '#9a5a1c', BRW = '#d9902a';

/* ---------- maddələr ---------- */
const R = {};
// sadə maddələrin görünüşü: [hal, rəng, forma, alov rəngi]
const LOOK = {H: ['g', 0], He: ['g', 0], N: ['g', 0], O: ['g', 0], F: ['g', '#e6e39a', 0, 0, .22], Ne: ['g', 0], Cl: ['g', '#c5d64a', 0, 0, .34], Ar: ['g', 0], Kr: ['g', 0], Xe: ['g', 0],
  Li: ['s', '#c7cbd0', 'ball', '#e0263c'], Na: ['s', SILV, 'ball', '#ffc21a'], K: ['s', SILV, 'ball', '#b48cff'], Rb: ['s', SILV, 'ball', '#c84ad8'], Cs: ['s', '#d8c070', 'ball', '#7f6bff'],
  Ca: ['s', '#a9adb0', 'granule', '#e8632a'], Sr: ['s', '#b4b8ba', 'granule', '#ff2d2d'], Ba: ['s', '#a4a8ab', 'granule', '#9be05a'], Mg: ['s', '#c4c8cc', 'ribbon', '#ffffff'], Al: ['s', '#c5c9cd', 'granule', '#ffffff'],
  Zn: ['s', '#9ea7ad', 'granule', '#bfe8ff'], Fe: ['s', '#6f7479', 'nail', '#ffb347'], Pb: ['s', '#62676c', 'granule'], Cu: ['s', '#b5562c', 'wire', '#3fd07a'], Hg: ['l', '#c9cdd1', 'drop'], Ag: ['s', '#dfe2e4', 'wire'],
  Pt: ['s', '#cfd2d4', 'plate'], Au: ['s', '#e2b23a', 'plate'], C: ['s', '#1d1d1f', 'chunk', '#ff8a2a'], Si: ['s', '#5b6168', 'chunk'], P: ['s', '#8e2f2a', 'heap', '#fff2b0'], S: ['s', '#e6cf3a', 'heap', '#4f7dff'],
  Br: ['l', '#8a2a14', 0, 0, .8], I: ['s', '#3a2440', 'crystal']};
const DI = {H: 1, N: 1, O: 1, F: 1, Cl: 1, Br: 1, I: 1}, METCAT = {qm: 1, qt: 1, km: 1, dm: 1, ln: 1, ac: 1};
function elR(s) {
  if (R[s]) return R[s]; const e = EL[s]; if (!e) return null;
  const L = LOOK[s], cls = e.c === 'tq' ? 'noble' : METCAT[e.c] ? 'metal' : 'nonmetal';
  return R[s] = {id: s, el: s, f: DI[s] ? s + '2' : s, n: e.n, g: 'el', st: L ? L[0] : e.ph, c: L ? L[1] : (cls === 'metal' ? '#b9bdc2' : '#8a8f96'), a: L && L[4] || 0, shape: L && L[2] || (cls === 'metal' ? 'granule' : 'heap'), fl: L && L[3], cls, lab: !!L, rad: e.rad && (e.z >= 84 || s === 'Tc' || s === 'Pm')};
}
// birləşmələr: id, formul, ad, rəf, hal, rəng, şəffaflıq, əlavə
function C(id, f, n, g, st, c, a, o) { R[id] = Object.assign({id, f, n, g, st, c: c || 0, a: a || 0}, o); }
C('H2O', 'H2O', 'Su', 'su', 'l', 0, 0, {ph: 'n'});
C('HCl', 'HCl', 'Xlorid turşusu', 'su', 'l', 0, 0, {ions: ['H', 'Cl'], ph: 'a'});
C('H2SO4', 'H2SO4', 'Sulfat turşusu (duru)', 'su', 'l', 0, 0, {ions: ['H', 'SO4'], ph: 'a'});
C('H2SO4q', 'H2SO4(q)', 'Sulfat turşusu (qatı)', 'su', 'l', '#e8e2c8', .12, {ph: 'a'});
C('HNO3', 'HNO3', 'Nitrat turşusu (duru)', 'su', 'l', 0, 0, {ions: ['H', 'NO3'], ph: 'a', oxa: 1});
C('HNO3q', 'HNO3(q)', 'Nitrat turşusu (qatı)', 'su', 'l', '#eadf9a', .14, {ph: 'a'});
C('H2O2', 'H2O2', 'Hidrogen peroksid', 'su', 'l', 0, 0, {ph: 'n'});
C('NaOH', 'NaOH', 'Natrium hidroksid', 'es', 'l', 0, 0, {ions: ['Na', 'OH'], ph: 'b'});
C('CaOH2', 'Ca(OH)2', 'Əhəng suyu', 'es', 'l', 0, 0, {ions: ['Ca', 'OH'], ph: 'b'});
C('NH3aq', 'NH3·H2O', 'Ammonyak məhlulu', 'es', 'l', 0, 0, {ions: ['NH4', 'OH'], ph: 'b', weak: 1});
C('CuOH2', 'Cu(OH)2', 'Mis(II) hidroksid', 'es', 's', '#3f8fe0', 0, {ions: ['Cu', 'OH'], ins: 1, shape: 'gel'});
[['NaCl', 'NaCl', 'Natrium xlorid', 'Na', 'Cl'], ['Na2SO4', 'Na2SO4', 'Natrium sulfat', 'Na', 'SO4'], ['Na2CO3', 'Na2CO3', 'Natrium karbonat', 'Na', 'CO3', 0, 0, 'b'], ['Na2S', 'Na2S', 'Natrium sulfid', 'Na', 'S', 0, 0, 'b'],
 ['Na3PO4', 'Na3PO4', 'Natrium fosfat', 'Na', 'PO4', 0, 0, 'b'], ['Na2SiO3', 'Na2SiO3', 'Natrium silikat', 'Na', 'SiO3', 0, 0, 'b'], ['KI', 'KI', 'Kalium yodid', 'K', 'I'], ['KBr', 'KBr', 'Kalium bromid', 'K', 'Br'],
 ['CuSO4', 'CuSO4', 'Mis(II) sulfat', 'Cu', 'SO4', CUB, .5, 'aw'], ['FeCl3', 'FeCl3', 'Dəmir(III) xlorid', 'Fe3', 'Cl', FE3, .5, 'aw'], ['FeSO4', 'FeSO4', 'Dəmir(II) sulfat', 'Fe2', 'SO4', FE2, .4, 'aw'],
 ['AlCl3', 'AlCl3', 'Alüminium xlorid', 'Al', 'Cl', 0, 0, 'aw'], ['ZnSO4', 'ZnSO4', 'Sink sulfat', 'Zn', 'SO4', 0, 0, 'aw'], ['MgSO4', 'MgSO4', 'Maqnezium sulfat', 'Mg', 'SO4'], ['BaCl2', 'BaCl2', 'Barium xlorid', 'Ba', 'Cl'],
 ['CaCl2', 'CaCl2', 'Kalsium xlorid', 'Ca', 'Cl'], ['AgNO3', 'AgNO3', 'Gümüş nitrat', 'Ag', 'NO3'], ['PbNO32', 'Pb(NO3)2', 'Qurğuşun(II) nitrat', 'Pb', 'NO3', 0, 0, 'aw'], ['NH4Cl', 'NH4Cl', 'Ammonium xlorid', 'NH4', 'Cl', 0, 0, 'aw']
].forEach(([id, f, n, ca, an, c, a, ph]) => C(id, f, n, 'dz', 'l', c, a, {ions: [ca, an], ph: ph || 'n'}));
C('KMnO4', 'KMnO4', 'Kalium permanqanat', 'dz', 'l', MN, .62, {ph: 'n'});
C('KSCN', 'KSCN', 'Kalium rodanid', 'dz', 'l', 0, 0, {ph: 'n'});
C('NaHCO3', 'NaHCO3', 'Çay sodası', 'dz', 's', WHT, 0, {ions: ['Na', 'HCO3'], shape: 'heap', ph: 'bw', sols: 1});
C('CaCO3', 'CaCO3', 'Mərmər (kalsium karbonat)', 'dz', 's', '#e9e6de', 0, {ions: ['Ca', 'CO3'], ins: 1, shape: 'chunk'});
C('NH42Cr2O7', '(NH4)2Cr2O7', 'Ammonium dixromat', 'dz', 's', '#e8641b', 0, {shape: 'heap'});
C('malaxit', 'Cu2(OH)2CO3', 'Malaxit', 'dz', 's', '#2f9a6a', 0, {shape: 'heap', ins: 1});
C('CuO', 'CuO', 'Mis(II) oksid', 'ok', 's', '#1a1a1c', 0, {ions: ['Cu', 'O'], ins: 1, shape: 'heap'});
C('CaO', 'CaO', 'Sönməmiş əhəng', 'ok', 's', '#ecebe6', 0, {ions: ['Ca', 'O'], ins: 1, shape: 'chunk'});
C('Fe2O3', 'Fe2O3', 'Dəmir(III) oksid', 'ok', 's', '#8a3a1e', 0, {ions: ['Fe3', 'O'], ins: 1, shape: 'heap'});
C('MgO', 'MgO', 'Maqnezium oksid', 'ok', 's', WHT, 0, {ions: ['Mg', 'O'], ins: 1, shape: 'heap'});
C('HgO', 'HgO', 'Civə(II) oksid', 'ok', 's', '#d9481e', 0, {shape: 'heap', ins: 1});
C('MnO2', 'MnO2', 'Manqan(IV) oksid', 'ok', 's', '#2a2622', 0, {shape: 'heap', ins: 1});
C('CaC2', 'CaC2', 'Kalsium karbid', 'ok', 's', '#6e6a64', 0, {shape: 'chunk'});
C('CO2', 'CO2', 'Karbon qazı', 'ok', 'g', 0, 0, {ph: 'aw'});
C('SO2', 'SO2', 'Kükürd qazı', 'ok', 'g', 0, 0, {ph: 'a'});
C('NH3', 'NH3', 'Ammonyak (qaz)', 'ok', 'g', 0, 0, {ph: 'b'});
C('CH4', 'CH4', 'Metan', 'uz', 'g'); C('C2H4', 'C2H4', 'Etilen', 'uz', 'g'); C('C2H2', 'C2H2', 'Asetilen', 'uz', 'g');
C('C6H6', 'C6H6', 'Benzol', 'uz', 'l', 0, 0, {wat: 'layer'});
C('C2H5OH', 'C2H5OH', 'Etanol', 'uz', 'l', 0, 0, {ph: 'n', wat: 'mix'});
C('qliserin', 'C3H5(OH)3', 'Qliserin', 'uz', 'l', 0, 0, {ph: 'n', wat: 'mix'});
C('CH3CHO', 'CH3CHO', 'Sirkə aldehidi', 'uz', 'l', 0, 0, {wat: 'mix'});
C('CH3COOH', 'CH3COOH', 'Sirkə turşusu', 'uz', 'l', 0, 0, {ions: ['H', 'AC'], ph: 'a', weak: 1, wat: 'mix'});
C('fenol', 'C6H5OH', 'Fenol', 'uz', 'l', 0, 0, {ph: 'n'});
C('qlukoza', 'C6H12O6', 'Qlükoza', 'uz', 'l', 0, 0, {ph: 'n'});
C('saxaroza', 'C12H22O11', 'Şəkər (saxaroza)', 'uz', 's', '#f7f5ee', 0, {shape: 'heap', wat: 'dis'});
C('nisasta', '(C6H10O5)n', 'Nişasta', 'uz', 'l', '#f2f0e8', .25, {ph: 'n'});
C('zulal', 'zülal', 'Zülal (yumurta ağı)', 'uz', 'l', '#f1edd6', .22, {ph: 'n', nof: 1});
C('sabun', 'C17H35COONa', 'Sabun məhlulu', 'uz', 'l', '#eef0ea', .2, {ph: 'b'});
C('Br2aq', 'Br2', 'Bromlu su', 'uz', 'l', BRW, .5, {});
C('I2aq', 'I2', 'Yod məhlulu', 'uz', 'l', IOD, .55, {});
C('Tollens', '[Ag(NH3)2]OH', 'Gümüş oksidin ammonyakda məhlulu', 'uz', 'l', 0, 0, {});
C('ff', 'fenolftalein', 'Fenolftalein', 'in', 'l', 0, 0, {ind: 1, nof: 1}); C('lak', 'lakmus', 'Lakmus', 'in', 'l', '#7a4fb0', .5, {ind: 1, nof: 1}); C('mo', 'metiloranj', 'Metiloranj', 'in', 'l', '#f08a1c', .5, {ind: 1, nof: 1});
C('t', 't°', 'Qızdırma', 'sr', 'x', 0, 0, {nof: 1, cond: 1}); C('el', 'elektrik cərəyanı', 'Elektrik cərəyanı', 'sr', 'x', 0, 0, {nof: 1, cond: 1});
const SHELF = [['el', 'Sadə maddələr'], ['su', 'Su və turşular'], ['es', 'Əsaslar'], ['dz', 'Duzlar'], ['ok', 'Oksidlər və qazlar'], ['uz', 'Üzvi maddələr'], ['in', 'İndikatorlar'], ['sr', 'Şərait']];
const LABEL = ['H', 'O', 'N', 'F', 'Cl', 'Br', 'I', 'C', 'S', 'P', 'Si', 'Li', 'Na', 'K', 'Rb', 'Cs', 'Ca', 'Sr', 'Ba', 'Mg', 'Be', 'Al', 'Zn', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Sn', 'Pb', 'Cu', 'Hg', 'Ag', 'Au', 'Pt', 'He', 'Ne', 'Ar', 'Xe'];
const get = id => R[id] || elR(id);

/* ---------- ionlar və həllolma cədvəli ---------- */
const CAT = {H: {q: 1}, Li: {q: 1}, Na: {q: 1}, K: {q: 1}, Rb: {q: 1}, Cs: {q: 1}, NH4: {q: 1, p: 1}, Ag: {q: 1}, Ca: {q: 2}, Sr: {q: 2}, Ba: {q: 2}, Mg: {q: 2}, Zn: {q: 2}, Cu: {q: 2, c: CUB}, Fe2: {s: 'Fe', q: 2, c: FE2}, Fe3: {s: 'Fe', q: 3, c: FE3}, Al: {q: 3}, Pb: {q: 2}, Hg: {q: 2}};
const AN = {Cl: {q: 1}, Br: {q: 1}, I: {q: 1}, NO3: {q: 1, p: 1}, SO4: {q: 2, p: 1}, CO3: {q: 2, p: 1}, HCO3: {q: 1, p: 1}, OH: {q: 1, p: 1}, S: {q: 2}, PO4: {q: 3, p: 1}, SiO3: {q: 2, p: 1}, AC: {s: 'CH3COO', q: 1, p: 1, pre: 1}, O: {q: 2}};
const gcd = (a, b) => b ? gcd(b, a % b) : a;
Object.assign(CAT, {Mn: {q: 2}, Cr: {q: 3, c: '#3f8f6a'}, Cr2: {s: 'Cr', q: 2, c: '#4f8fd0'}, Ni: {q: 2, c: '#52b56a'}, Co: {q: 2, c: '#e0708a'}, Sn: {q: 2}, Be: {q: 2}});
Object.assign(AN, {SO3: {q: 2, p: 1}}); AN.AC.acid = 'CH3COOH'; AN.AC.wk = 1;
const RANK = {SO4: 0, Cl: 0, Br: 0, I: 0, NO3: 0, PO4: 1, SO3: 2, CO3: 5, HCO3: 5, S: 6, SiO3: 7}, rk = a => RANK[a] === undefined ? 4 : RANK[a];          // turşunun gücü: kiçik rəqəm güclü turşudur
const ACIDFAST = {Cu: 1, Pb: 1, Ag: 1, Hg: 1};                                                      // sulfidi turşuda həll olmayan metallar
const AMPH = {Al: ['Na[Al(OH)4]', 'K[Al(OH)4]'], Zn: ['Na2[Zn(OH)4]', 'K2[Zn(OH)4]'], Cr: ['Na3[Cr(OH)6]', 'K3[Cr(OH)6]'], Pb: ['Na2[Pb(OH)4]', 'K2[Pb(OH)4]']};
function salt(ca, an) {
  if (ca === 'H') return an === 'OH' || an === 'O' ? 'H2O' : AN[an].acid ? AN[an].acid : (AN[an].q > 1 ? 'H' + AN[an].q : 'H') + (AN[an].s || an);
  if (ca === 'NH4' && an === 'OH') return 'NH3·H2O';
  const c = CAT[ca], a = AN[an], l = c.q * a.q / gcd(c.q, a.q), nc = l / c.q, na = l / a.q, cs = c.s || ca, as = a.s || an;
  const cp = (c.p && nc > 1 ? '(' + cs + ')' : cs) + (nc > 1 ? nc : ''), ap = (a.p && na > 1 ? '(' + as + ')' : as) + (na > 1 ? na : '');
  return a.pre ? ap + cp : cp + ap;
}
const INS = {};
('Ag Cl #f2f2ee curdy ağ_kəsmikvari|Ag SO4 #f4f4f0 fine ağ m|Ag Br #efe7b8 curdy açıq_sarı|Ag I #f1df6a curdy sarı|Ag CO3 #f0e8b0 fine açıq_sarı|Ag PO4 #f2d94e fine sarı|Ag S #1c1c1c fine qara|Ag SiO3 #e8d58a fine sarı|' +
 'Pb Cl #f4f4f0 fine ağ|Pb Br #f1efe6 fine ağ|Pb I #f2c318 flake qızılı-sarı|Pb SO4 #f4f4f0 fine ağ|Pb CO3 #f4f4f0 fine ağ|Pb OH #f4f4f0 gel ağ|Pb S #151515 fine qara|Pb PO4 #f4f4f0 fine ağ|Pb SiO3 #f4f4f0 fine ağ|' +
 'Ba SO4 #f6f6f2 fine ağ|Ba CO3 #f4f4f0 fine ağ|Ba PO4 #f4f4f0 fine ağ|Ba SiO3 #f4f4f0 fine ağ|Ca CO3 #f4f4f0 fine ağ|Ca PO4 #f4f4f0 fine ağ|Ca SiO3 #f4f4f0 fine ağ|Ca SO4 #f4f4f0 fine ağ m|Ca OH #f4f4f0 fine ağ m|' +
 'Mg OH #f4f4f0 gel ağ|Mg CO3 #f4f4f0 fine ağ|Mg PO4 #f4f4f0 fine ağ|Mg SiO3 #f4f4f0 fine ağ|Zn OH #f1f1ee gel ağ_həlməşikli|Zn CO3 #f4f4f0 fine ağ|Zn S #f0efe8 fine ağ|Zn PO4 #f4f4f0 fine ağ|Zn SiO3 #f4f4f0 fine ağ|' +
 'Cu OH #3f8fe0 gel göy_həlməşikli|Cu CO3 #5fb7a5 fine yaşılımtıl-göy|Cu S #121212 fine qara|Cu PO4 #6ec3c0 fine mavi-yaşıl|Cu SiO3 #4aa6c9 gel mavi|' +
 'Fe2 OH #8fa88a gel bozumtul-yaşıl|Fe2 CO3 #d9d6c8 fine bozumtul-ağ|Fe2 S #151515 fine qara|Fe2 PO4 #cfd8c0 fine ağımtıl|Fe2 SiO3 #b9c4a8 gel yaşılımtıl|' +
 'Fe3 OH #8a4b1e gel qonur|Fe3 PO4 #e8dfb0 fine açıq_sarı|Fe3 SiO3 #9a6a3a gel qonur|Al OH #f1f1ee gel ağ_həlməşikli|Al PO4 #f4f4f0 fine ağ|Al SiO3 #f4f4f0 gel ağ|H SiO3 #e9ecec gel həlməşikli'
 + '|Li PO4 #f4f4f0 fine ağ|Li CO3 #f4f4f0 fine ağ m|Sr SO4 #f4f4f0 fine ağ|Sr CO3 #f4f4f0 fine ağ|Sr PO4 #f4f4f0 fine ağ|Sr SiO3 #f4f4f0 fine ağ|Sr SO3 #f4f4f0 fine ağ|Ba SO3 #f4f4f0 fine ağ|Ca SO3 #f4f4f0 fine ağ|Mg SO3 #f4f4f0 fine ağ m|Zn SO3 #f4f4f0 fine ağ|Pb SO3 #f4f4f0 fine ağ|Ag SO3 #f4f4f0 fine ağ|Fe2 SO3 #d9d6c8 fine bozumtul-ağ|Mn SO3 #f1e6e0 fine ağımtıl|' +
 'Mn OH #e9dfd2 gel ağımtıl|Mn CO3 #ead9d0 fine açıq_çəhrayı|Mn S #e6b8a0 fine ət_rəngli|Mn PO4 #f1e6e0 fine ağımtıl|Mn SiO3 #ead9d0 gel açıq_çəhrayı|Cr OH #6f9a86 gel bozumtul-yaşıl|Cr PO4 #5f9a7a fine yaşıl|Cr SiO3 #6f9a86 gel yaşıl|' +
 'Ni OH #8fd08a gel açıq_yaşıl|Ni CO3 #9fd6a8 fine açıq_yaşıl|Ni S #151515 fine qara|Ni PO4 #9fd6a8 fine açıq_yaşıl|Ni SiO3 #8fd08a gel yaşıl|Ni SO3 #9fd6a8 fine açıq_yaşıl|Co OH #e58aa6 gel çəhrayı|Co CO3 #e79ab0 fine çəhrayı|Co S #151515 fine qara|Co PO4 #8a6fc0 fine bənövşəyi|Co SiO3 #b08ac8 gel bənövşəyi|Co SO3 #e79ab0 fine çəhrayı'
).split('|').forEach(s => { const [c, a, col, tex, nm, m] = s.split(' '); (INS[c] = INS[c] || {})[a] = {c: col, tex, nm: nm.replace(/_/g, ', '), m: !!m}; });
const BAD = {Fe3: {S: 1, I: 1, SO3: 1}, Al: {S: 1, SO3: 1}, Cr: {S: 1, SO3: 1}, Cu: {I: 1, SO3: 1}, Mg: {S: 1}, Ca: {S: 1}, Sr: {S: 1}, Hg: {I: 1, S: 1, OH: 1, CO3: 1, SO3: 1}, NH4: {SiO3: 1}};
const EXC = {'AgNO3|FeSO4': 1, 'FeSO4|HNO3': 1, 'HNO3|Na2S': 1, 'HNO3|KI': 1, 'NH4Cl|Na2SiO3': 1};          // oksidləşmə və ya hidroliz qarışan cütlər

/* ---------- maddələrin geniş siyahısı: duzlar, əsaslar, oksidlər, turşular ---------- */
Object.assign(LOOK, {Be: ['s', '#9a9ea2', 'chunk'], Cr: ['s', '#b8bcc0', 'chunk'], Mn: ['s', '#8f9498', 'chunk'], Co: ['s', '#9aa0a8', 'granule'], Ni: ['s', '#b9b6a8', 'plate'], Sn: ['s', '#cfd2d4', 'granule']});
const CN = {Li: 'Litium', Na: 'Natrium', K: 'Kalium', NH4: 'Ammonium', Mg: 'Maqnezium', Ca: 'Kalsium', Sr: 'Stronsium', Ba: 'Barium', Al: 'Alüminium', Zn: 'Sink', Fe2: 'Dəmir(II)', Fe3: 'Dəmir(III)', Mn: 'Manqan(II)', Cr: 'Xrom(III)', Ni: 'Nikel(II)', Co: 'Kobalt(II)', Cu: 'Mis(II)', Ag: 'Gümüş', Pb: 'Qurğuşun(II)'};
const ANN = {Cl: 'xlorid', Br: 'bromid', I: 'yodid', NO3: 'nitrat', SO4: 'sulfat', SO3: 'sulfit', CO3: 'karbonat', PO4: 'fosfat', SiO3: 'silikat', S: 'sulfid', AC: 'asetat', OH: 'hidroksid', O: 'oksid'};
const SB = {Li: 1, Na: 1, K: 1, Ca: 1, Sr: 1, Ba: 1}, WA = {CO3: 1, SO3: 1, S: 1, PO4: 1, SiO3: 1, AC: 1}, fid = f => f.replace(/[()\[\]·]/g, '');
function gen(c, a, g) {
  if (BAD[c] && BAD[c][a]) return; const f = salt(c, a), id = fid(f); if (R[id]) return;
  const ins = INS[c] && INS[c][a], col = ins ? ins.c : CAT[c].c;
  C(id, f, CN[c] + ' ' + ANN[a], g, ins ? 's' : 'l', col, ins ? 0 : (col ? .45 : 0), Object.assign({ions: [c, a], ph: a === 'OH' ? 'b' : SB[c] && WA[a] ? 'b' : !SB[c] && !WA[a] ? 'aw' : 'n'}, ins ? {ins: 1, shape: ins.tex === 'gel' ? 'gel' : 'heap'} : {}));
}
['Li', 'Na', 'K', 'NH4', 'Mg', 'Ca', 'Sr', 'Ba', 'Al', 'Zn', 'Fe2', 'Fe3', 'Mn', 'Cr', 'Ni', 'Co', 'Cu', 'Ag', 'Pb'].forEach(c => ['Cl', 'NO3', 'SO4'].forEach(a => gen(c, a, 'dz')));
[['Br', ['Na', 'K', 'Ca', 'Ag', 'Pb']], ['I', ['Na', 'K', 'Ag', 'Pb']], ['CO3', ['Li', 'Na', 'K', 'NH4', 'Mg', 'Ca', 'Sr', 'Ba', 'Zn', 'Fe2', 'Mn', 'Ag', 'Pb']], ['SO3', ['Na', 'K', 'Ca', 'Ba']], ['PO4', ['Na', 'K', 'NH4', 'Ca', 'Ag']],
 ['SiO3', ['Na', 'K', 'Ca']], ['S', ['Na', 'K', 'Zn', 'Fe2', 'Cu', 'Pb', 'Ag', 'Mn']], ['AC', ['Na', 'K', 'NH4', 'Ca', 'Mg', 'Pb', 'Cu', 'Zn']]].forEach(([a, cs]) => cs.forEach(c => gen(c, a, 'dz')));
['Li', 'K', 'Sr', 'Ba', 'Mg', 'Al', 'Zn', 'Fe2', 'Fe3', 'Mn', 'Cr', 'Ni', 'Pb'].forEach(c => gen(c, 'OH', 'es'));
[['Li', '#f4f4f0'], ['Na', '#f4f4f0'], ['K', '#f1f0e8'], ['Sr', '#f4f4f0'], ['Ba', '#f4f4f0'], ['Al', '#f6f6f4'], ['Zn', '#f6f6f2'], ['Fe2', '#1c1c1e'], ['Mn', '#6f7a62'], ['Cr', '#3f6f3a'], ['Ni', '#5a6a52'], ['Pb', '#e0b83a'], ['Ag', '#3a2a22']].forEach(([c, col]) => { const f = salt(c, 'O'), id = fid(f); if (!R[id]) C(id, f, CN[c] + ' oksid', 'ok', 's', col, 0, {ions: [c, 'O'], ins: 1, shape: 'heap'}); });
const WOX = {Li2O: 1, Na2O: 1, K2O: 1, CaO: 1, SrO: 1, BaO: 1}, AOX = {CO2: 'CO3', SO2: 'SO3', SO3: 'SO4', P2O5: 'PO4', SiO2: 'SiO3', N2O5: 'NO3'};
C('SO3', 'SO3', 'Kükürd(VI) oksid', 'ok', 's', '#f4f4f0', 0, {shape: 'crystal'}); C('P2O5', 'P2O5', 'Fosfor(V) oksid', 'ok', 's', WHT, 0, {shape: 'heap'}); C('SiO2', 'SiO2', 'Qum (silisium oksid)', 'ok', 's', '#d9cfae', 0, {shape: 'heap', ins: 1}); C('N2O5', 'N2O5', 'Azot(V) oksid', 'ok', 's', WHT, 0, {shape: 'crystal'});
C('NO2', 'NO2', 'Azot(IV) oksid', 'ok', 'g', NO2, .5); C('NO', 'NO', 'Azot(II) oksid', 'ok', 'g'); C('CO', 'CO', 'Dəm qazı', 'ok', 'g'); C('Al4C3', 'Al4C3', 'Alüminium karbid', 'ok', 's', '#b8a23a', 0, {shape: 'heap'});
C('HBr', 'HBr', 'Bromid turşusu', 'su', 'l', 0, 0, {ions: ['H', 'Br'], ph: 'a'}); C('HI', 'HI', 'Yodid turşusu', 'su', 'l', 0, 0, {ions: ['H', 'I'], ph: 'a'}); C('H3PO4', 'H3PO4', 'Fosfat turşusu', 'su', 'l', 0, 0, {ions: ['H', 'PO4'], ph: 'a', weak: 1});
C('H2S', 'H2S', 'Hidrogen sulfid suyu', 'su', 'l', 0, 0, {ions: ['H', 'S'], ph: 'aw', weak: 1}); C('H2SiO3', 'H2SiO3', 'Silikat turşusu', 'su', 's', '#e9ecec', 0, {ions: ['H', 'SiO3'], ins: 1, shape: 'gel'});
C('fer', 'maya', 'Maya (ferment)', 'sr', 'x', 0, 0, {nof: 1, cond: 1});
const ION = (ca, an) => { const c = CAT[ca], a = AN[an]; return [(c.s || ca) + '{' + (c.q > 1 ? c.q : '') + '+}', (a.s || an) + '{' + (a.q > 1 ? a.q : '') + '-}']; };

/* ---------- nəticə qurucuları ---------- */
const yes = o => Object.assign({ok: true}, o), no = (why, o) => Object.assign({ok: false, why}, o), unk = (why, o) => Object.assign({ok: null, why: why || 'Bu cütün təcrübəsi hələ laboratoriyaya əlavə olunmayıb. Başqa cüt seç və ya aşağıdakı hazır təcrübələrə bax.'}, o);
const liqOf = r => r.c ? [r.c, r.a || .5] : null;
// reaksiya getməyəndə maddələr sadəcə yan-yana qoyulur
function still(a, b) {
  const st = r => r.st === 'x' ? 'x' : r.st === 'g' ? 'g' : r.st === 's' ? 's' : 'l';
  let x = a, y = b; const ord = {l: 0, s: 1, g: 2, x: 3}; if (ord[st(x)] > ord[st(y)]) [x, y] = [y, x];
  const sx = st(x), sy = st(y);
  if (sy === 'x') return y.id === 'el' ? W(liqOf(x), {t: 'none'}, [], {elec: 1}) : sx === 'l' ? W(liqOf(x), {t: 'none'}, [], {heat: 1, ves: 'tube'}) : sx === 's' ? T([x.c || '#999'], []) : J(null, [], {gas: {c: x.c || '#ffffff', a: x.a || .03}, burner: 1});
  if (sx === 'l' && sy === 'l') { if (x.ind && !y.ind) [x, y] = [y, x]; return W(liqOf(x), y.ind ? drp(y.c || '#ffffff') : pour(y.c, y.a || .5), []); }
  if (sx === 'l' && sy === 's') return W(liqOf(x), sol(y.shape || 'granule', y.c || '#999', {float: y.id === 'Li' || y.id === 'Na' || y.id === 'K'}), []);
  if (sx === 'l' && sy === 'g') return W(liqOf(x), gasin(y.c), [bub(7, 1.4, 7, 'tip')]);
  if (sx === 's' && sy === 's') return T([x.c || '#999', y.c || '#777'], []);
  if (sx === 's' && sy === 'g') return J([x.shape || 'heap', x.c || '#999'], [glow('#ff7a2a', 1.6, 6, .5)], {gas: {c: y.c || '#ffffff', a: y.a || .03}});
  return J(null, [], {gas: {c: x.c || '#ffffff', a: x.a || .03}, gas2: {c: y.c || '#ffffff', a: y.a || .03}});
}

/* ---------- seçilmiş təcrübələr ---------- */
const DB = {};
const key = (a, b) => a < b ? a + '|' + b : b + '|' + a;
function X(a, b, o) { DB[key(a, b)] = o.ok === undefined ? yes(o) : o; }
const NOX = (a, b, why, vis) => { DB[key(a, b)] = no(why, vis ? {vis} : {}); };
const ffNote = ' Suya əvvəlcədən fenolftalein damızdırılıb: qələvi yarandıqca məhlul moruğu rəngə boyanır.';
// metallar və su
[['Li', 1, 0], ['Na', 1, 1], ['K', 1, 2], ['Rb', 1, 3], ['Cs', 1, 3], ['Ca', 2, 0], ['Sr', 2, 0], ['Ba', 2, 1]].forEach(([m, v, lv]) => {
  const L = LOOK[m], hy = v === 1 ? m + 'OH' : m + '(OH)2', nm = EL[m].n, eq = mkEq([m, 'H2O'], [hy, 'H2^']);
  if (v === 1) X(m, 'H2O', {eq, ty: 'Əvəzetmə', obs: lv === 0 ? nm + ' suyun üzündə üzür, sakit fışıltı ilə hidrogen ayrılır və metal tədricən həll olur.' + ffNote : lv === 1 ? nm + ' əriyib parlaq kürəciyə çevrilir, fışıltı ilə suyun üzündə qaçır, bəzən sarı alovla alışır.' + ffNote : lv === 2 ? nm + ' suya dəyən kimi bənövşəyi alovla alışır və suyun üzündə sürətlə qaçır.' + ffNote : nm + ' suya dəyən kimi partlayışla reaksiyaya girir.' + ffNote,
    warn: lv ? 'Təhlükəli təcrübədir, yalnız müəllim qoruyucu şüşə arxasında göstərir.' : '',
    vis: W(null, sol('ball', L[1], {float: 1}), [skate(1.2, lv >= 3 ? 3.2 : 9, 1 + lv * .5), bub(10 + lv * 8, 1.2, lv >= 3 ? 3.4 : 9), col(PINK, .45, 1.5, 6), dis(0, 1.6, lv >= 3 ? 1.6 : 7.4)].concat(lv >= 1 ? [flame(L[3], lv === 1 ? 3.4 : 1.4, lv >= 3 ? 3.2 : lv === 1 ? 6.2 : 8.6, .5 + lv * .25)] : [], lv >= 3 ? [flash(3.1, L[3], 1.2), smoke('#ffffff', 1.2, 3.1, 6)] : [], [steam(2, 8, .5)]))});
  else X(m, 'H2O', {eq, ty: 'Əvəzetmə', obs: nm + ' dibə çökür, səthindən hidrogen qabarcıqları qalxır və məhlul ' + (m === 'Ca' ? 'az həll olan kalsium hidroksiddən ağarıb bulanır.' : 'qələvi olur.') + ffNote,
    vis: W(null, sol('granule', L[1], {n: 3}), [bub(16 + lv * 10, 1.4, 10), col(PINK, .4, 1.8, 6), dis(.25, 2, 9)].concat(m === 'Ca' ? [ppt(WHT, 'fine', .25, 2.5, 6)] : []))});
});
X('Mg', 'H2O', {eq: 'Mg + 2H2O ->[t°] Mg(OH)2 + H2^', ty: 'Əvəzetmə', obs: 'Soyuq suda dəyişiklik demək olar görünmür. Su qaynadılanda maqnezium lentinin üzərində xırda hidrogen qabarcıqları əmələ gəlir və fenolftalein zəif çəhrayı rəng verir.', vis: W(null, sol('ribbon', '#c4c8cc'), [bub(5, 2.5, 11, 'solid', .7), col(PINK, .16, 3, 7), steam(2, 11, .6)], {heat: 1})});
NOX('Fe', 'H2O', 'Dəmir adi şəraitdə su ilə reaksiyaya girmir, yalnız nəm havada yavaş-yavaş paslanır. Közərdilmiş dəmir isə su buxarı ilə reaksiyaya girir: 3Fe + 4H2O → Fe3O4 + 4H2.');
NOX('Zn', 'H2O', 'Sink adi şəraitdə su ilə reaksiyaya girmir: səthi nazik oksid təbəqəsi ilə örtülüdür. Yalnız közərdilmiş sink su buxarı ilə ZnO və hidrogen əmələ gətirir.');
NOX('Al', 'H2O', 'Alüminiumun səthi möhkəm oksid təbəqəsi (Al2O3) ilə örtülüdür, ona görə su ilə reaksiyaya girmir. Təbəqə çıxarılsa, alüminium sudan hidrogeni sıxışdırıb çıxarır.');
['Cu', 'Ag', 'Au', 'Pt', 'Hg', 'Pb'].forEach(m => NOX(m, 'H2O', EL[m].n + ' az aktiv metaldır: aktivlik sırasında hidrogendən ' + (m === 'Pb' ? 'bir az əvvəl gəlsə də, su ilə' : 'sonra gəlir və su ilə') + ' reaksiyaya girmir.'));
['S', 'P', 'Si', 'C', 'I'].forEach(m => NOX(m, 'H2O', EL[m].n + ' suda həll olmur və adi şəraitdə su ilə reaksiyaya girmir.' + (m === 'C' ? ' Yalnız közərdilmiş kömür su buxarı ilə reaksiyaya girir: C + H2O → CO + H2.' : '')));
['H', 'N', 'O'].forEach(m => NOX(m, 'H2O', EL[m].n + ' suda çox az həll olur, lakin onunla kimyəvi reaksiyaya girmir.'));
X('Cl', 'H2O', {eq: 'Cl2 + H2O <-> HCl + HClO', ty: 'Oksidləşmə-reduksiya', obs: 'Xlor suda həll olur və açıq sarı-yaşıl xlorlu su əmələ gəlir. Bu məhlul rəngli parçanı və lakmusu ağardır.', vis: W(null, gasin('#c5d64a'), [bub(9, 1.3, 8, 'tip'), col('#d3e06a', .3, 2, 6)])});
X('Br', 'H2O', {eq: 'Br2 + H2O <-> HBr + HBrO', ty: 'Oksidləşmə-reduksiya', obs: 'Brom suda qismən həll olur, narıncı-sarı bromlu su alınır.', vis: W(null, pour('#8a2a14', .8), [col(BRW, .5, 1.8, 4)])});
X('F', 'H2O', {eq: '2F2 + 2H2O -> 4HF + O2^', ty: 'Oksidləşmə-reduksiya', obs: 'Flüor o qədər aktivdir ki, su onun içində alovlanır və oksigen ayrılır.', warn: 'Flüorla təcrübə məktəbdə aparılmır.', vis: W(null, gasin('#e6e39a'), [bub(20, 1.3, 8, 'tip'), flame('#fff2a0', 1.6, 7, .7, 'surf'), steam(1.6, 8)])});
X('CaO', 'H2O', {eq: 'CaO + H2O -> Ca(OH)2', ty: 'Birləşmə', obs: 'Əhəng tikələri fışıldayır, qızır, şişib ağ toza çevrilir və su qaynayana qədər isinir. Buna əhəngin söndürülməsi deyilir.', vis: W(null, sol('chunk', '#ecebe6', {n: 2}), [bub(14, 1.6, 7), steam(1.8, 9, 1.4), ppt(WHT, 'fine', .8, 2, 5), dis(.5, 2, 6)])});
X('CO2', 'H2O', {eq: 'CO2 + H2O <-> H2CO3', ty: 'Birləşmə', obs: 'Karbon qazı suda həll olur və zəif karbonat turşusu əmələ gəlir. Suya lakmus əlavə olunub: bənövşəyi rəng qırmızımtıla keçir.', vis: W(['#7a4fb0', .4], gasin(), [bub(10, 1.3, 9, 'tip'), col('#c2476a', .4, 2.4, 5)])});
X('SO2', 'H2O', {eq: 'SO2 + H2O <-> H2SO3', ty: 'Birləşmə', obs: 'Kükürd qazı suda yaxşı həll olur, sulfit turşusu əmələ gəlir. Lakmus qırmızı rəngə boyanır.', vis: W(['#7a4fb0', .4], gasin(), [bub(10, 1.3, 9, 'tip'), col('#d83a4a', .45, 2.2, 4)])});
X('NH3', 'H2O', {eq: 'NH3 + H2O <-> NH3·H2O', ty: 'Birləşmə', obs: 'Ammonyak suda çox yaxşı həll olur: bir həcm su 700 həcm ammonyak udur. Fenolftaleinli su moruğu rəngə boyanır.', vis: W(null, gasin(), [bub(8, 1.3, 5, 'tip', .6), col(PINK, .45, 1.8, 4)])});
X('CaC2', 'H2O', {eq: 'CaC2 + 2H2O -> Ca(OH)2 + C2H2^', ty: 'Mübadilə', obs: 'Karbid suya düşən kimi şiddətlə qaynayır, asetilen qazı ayrılır və su bulanır. Qaz alışdırılsa, hisli alovla yanır.', vis: W(null, sol('chunk', '#6e6a64', {n: 2}), [bub(40, 1.5, 10, 'solid', 1.2), ppt(WHT, 'fine', .5, 2, 6), dis(.2, 2, 9), flame('#ffb030', 4, 10, .9, 'surf'), smoke('#2a2a2a', .5, 4.5, 10)])});
NOX('CuO', 'H2O', 'Mis(II) oksid suda həll olmur və onunla reaksiyaya girmir. Yalnız qələvi və qələvi-torpaq metalların oksidləri su ilə birləşir.');
NOX('Fe2O3', 'H2O', 'Dəmir(III) oksid suda həll olmur və onunla reaksiyaya girmir.');
NOX('MgO', 'H2O', 'Maqnezium oksid soyuq suda demək olar həll olmur. Yalnız qaynar suda çox yavaş Mg(OH)2 əmələ gətirir.');
// yanma və oksigen
const burn = (m, eq, obs, vis, o) => X(m, 'O', Object.assign({eq, ty: 'Birləşmə, yanma', obs, vis}, o));
burn('Mg', '2Mg + O2 ->[t°] 2MgO', 'Maqnezium lenti gözqamaşdırıcı ağ alovla yanır və ağ toz, maqnezium oksid qalır.', J(['ribbon', '#c4c8cc'], [flame('#ffffff', 1.4, 7.5, 1.15), glow('#ffffff', 1.4, 7.5, 2.1), smoke('#ffffff', 1, 1.8, 8), dep(WHT, 2.5, 5), scol(WHT, 3, 4)]));
burn('Fe', '3Fe + 2O2 ->[t°] Fe3O4', 'Közərdilmiş polad məftil oksigendə qığılcım saçaraq yanır. Dibə qara dəmir yanığı (Fe3O4) damcıları düşür.', J(['wool', '#6f7479'], [glow('#ff9a2a', 1.3, 8.5, 1.1), sparks('#ffc35a', 70, 1.5, 8.5), scol('#1e1e20', 4, 4)]));
burn('S', 'S + O2 ->[t°] SO2^', 'Kükürd oksigendə parlaq göy alovla yanır, kəskin iyli kükürd qazı əmələ gəlir.', J(['heap', '#e6cf3a'], [flame('#4f7dff', 1.4, 9, 1.1), glow('#3f6bff', 1.4, 9, 1.2), gasfill('#dfe6ff', .12, 2, 6)]));
burn('P', '4P + 5O2 ->[t°] 2P2O5', 'Fosfor parlaq sarı-ağ alovla yanır və banka qalın ağ tüstü ilə dolur: bu, fosfor(V) oksidin xırda hissəcikləridir.', J(['heap', '#8e2f2a'], [flame('#fff2b0', 1.4, 7.5, 1.4), glow('#fff0a0', 1.4, 7.5, 1.6), smoke('#ffffff', 2.4, 1.8, 9), gasfill('#ffffff', .5, 2, 6), dep(WHT, 4, 5)]));
burn('C', 'C + O2 ->[t°] CO2', 'Közərən kömür oksigendə alovsuz, lakin parlaq işıq saçaraq yanır. Əmələ gələn karbon qazı əhəng suyunu bulandırır.', J(['chunk', '#1d1d1f'], [glow('#ff8a2a', 1.2, 9.5, 1.5), sparks('#ffb060', 8, 1.5, 9), scol('#3a2a22', 2, 6)]));
burn('Al', '4Al + 3O2 ->[t°] 2Al2O3', 'Alüminium tozu alova səpiləndə gözqamaşdırıcı ağ qığılcımlarla yanır.', J(['heap', '#c5c9cd'], [flame('#ffffff', 1.5, 6.5, 1.2), sparks('#ffffff', 90, 1.5, 7), glow('#ffffff', 1.5, 6.5, 1.6), smoke('#ffffff', .6, 2, 8), dep(WHT, 3, 5)]));
burn('Zn', '2Zn + O2 ->[t°] 2ZnO', 'Sink göyümtül-ağ alovla yanır, yun kimi yüngül ağ sink oksid lopaları havaya qalxır.', J(['heap', '#9ea7ad'], [flame('#bfe8ff', 1.5, 7.5, 1.1), glow('#bfe8ff', 1.5, 7.5, 1.2), smoke('#ffffff', 1.5, 2, 9), dep(WHT, 3, 5)]));
burn('Cu', '2Cu + O2 ->[t°] 2CuO', 'Mis məftil alovda yanmır, amma közərir və səthi qara mis(II) oksidlə örtülür.', J(['wire', '#b5562c'], [glow('#ff6a2a', 1.6, 7, .6), scol('#1a1a1c', 2.2, 5)], {jar: false, burner: 1}));
burn('Li', '4Li + O2 ->[t°] 2Li2O', 'Litium al-qırmızı alovla yanır, ağ litium oksid əmələ gəlir.', J(['ball', '#c7cbd0'], [flame('#e0263c', 1.4, 8, 1.2), glow('#e0263c', 1.4, 8, 1.3), smoke('#ffffff', .8, 2, 8), dep(WHT, 3, 5)]));
burn('Na', '2Na + O2 ->[t°] Na2O2', 'Natrium parlaq sarı alovla yanır. Əsas məhsul oksid yox, açıq sarı natrium peroksiddir.', J(['ball', SILV], [flame('#ffc21a', 1.4, 8, 1.3), glow('#ffc21a', 1.4, 8, 1.5), smoke('#fff6d0', 1, 2, 8), dep('#f2e9b8', 3, 5)]));
burn('K', 'K + O2 ->[t°] KO2', 'Kalium bənövşəyi alovla yanır və narıncı-sarı kalium superoksid əmələ gətirir.', J(['ball', SILV], [flame('#b48cff', 1.4, 8, 1.3), glow('#b48cff', 1.4, 8, 1.5), smoke('#fff0d8', 1, 2, 8), dep('#e9c46a', 3, 5)]));
burn('Ca', '2Ca + O2 ->[t°] 2CaO', 'Kalsium kərpici-qırmızı alovla yanır, ağ kalsium oksid qalır.', J(['granule', '#a9adb0'], [flame('#e8632a', 1.4, 8, 1.2), glow('#e8632a', 1.4, 8, 1.3), smoke('#ffffff', .8, 2, 8), dep(WHT, 3, 5)]));
burn('Ba', '2Ba + O2 ->[t°] 2BaO', 'Barium açıq yaşıl alovla yanır.', J(['granule', '#a4a8ab'], [flame('#9be05a', 1.4, 8, 1.2), glow('#9be05a', 1.4, 8, 1.3), smoke('#ffffff', .8, 2, 8), dep(WHT, 3, 5)]));
burn('Sr', '2Sr + O2 ->[t°] 2SrO', 'Stronsium al-qırmızı alovla yanır. Fişənglərin qırmızı rəngi stronsium birləşmələrindəndir.', J(['granule', '#b4b8ba'], [flame('#ff2d2d', 1.4, 8, 1.2), glow('#ff2d2d', 1.4, 8, 1.3), smoke('#ffffff', .8, 2, 8), dep(WHT, 3, 5)]));
burn('Si', 'Si + O2 ->[t°] SiO2', 'Silisium tozu güclü qızdırılanda közərərək yanır və ağ silisium(IV) oksid, yəni qumun əsas maddəsi əmələ gəlir.', J(['heap', '#5b6168'], [glow('#ffb060', 1.6, 8, 1.1), sparks('#ffd9a0', 14, 2, 8), scol('#d9d6cf', 3, 5)]));
burn('H', '2H2 + O2 ->[t°] 2H2O', 'Hidrogenlə oksigenin qarışığı alışdırılanda güclü səslə partlayır: buna guruldayıcı qaz deyilir. Bankanın divarında su damcıları qalır.', J(null, [flash(2.4, '#bcd8ff', 1.3), glow('#bcd8ff', 2.3, 3.2, 3, 'mid'), drops(2.8)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}, spark: 2.2}), {warn: 'Partlayıcı qarışıqdır, yalnız müəllim az miqdarda göstərir.'});
burn('Hg', '2Hg + O2 ->[300 °C] 2HgO', 'Civə uzun müddət qızdırılanda səthində qırmızı civə(II) oksid təbəqəsi yaranır. Lavuazye havanın tərkibini məhz bu təcrübə ilə öyrənib.', J(['drop', '#c9cdd1'], [scol('#d9481e', 3, 6)], {jar: false, burner: 1}), {warn: 'Civə buxarı zəhərlidir.'});
X('N', 'O', {eq: 'N2 + O2 <->[3000 °C] 2NO', ty: 'Birləşmə', sp: 1, obs: 'Adi şəraitdə azot oksigenlə reaksiyaya girmir, yoxsa hava yanardı. Reaksiya yalnız ildırım çaxanda və ya elektrik qövsündə gedir. Yaranan NO havada qonur NO2 qazına çevrilir.', vis: J(null, [flash(2.2, '#cfe0ff', .8), flash(3.6, '#cfe0ff', .8), flash(5, '#cfe0ff', .8), gasfill(NO2, .22, 2.4, 6)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}, spark: 2.1})});
['Au', 'Pt', 'Ag'].forEach(m => NOX(m, 'O', EL[m].n + ' nəcib metaldır: oksigenlə hətta qızdırılanda da reaksiyaya girmir, ona görə illərlə parlaqlığını saxlayır.', J(['plate', LOOK[m][1]], [glow('#ff7a2a', 1.6, 7, .5)], {jar: false, burner: 1})));
['Cl', 'Br', 'I', 'F'].forEach(m => NOX(m, 'O', 'Halogenlər oksigenlə birbaşa reaksiyaya girmir. Onların oksidləri yalnız dolayı yolla alınır.'));
// metallar və halogenlər, kükürd, hidrogen, azot, fosfor (ümumi qaydalar)
const V1 = ['Li', 'Na', 'K', 'Rb', 'Cs'], V2 = ['Mg', 'Ca', 'Sr', 'Ba', 'Zn'], ACTM = V1.concat(V2, ['Al']);
const mv = m => V1.includes(m) ? 1 : m === 'Al' ? 3 : 2, bin = (m, x, xv) => { const a = mv(m), l = a * xv / gcd(a, xv), nm = l / a, nx = l / xv; return m + (nm > 1 ? nm : '') + x + (nx > 1 ? nx : ''); };
const HAL = {F: ['flüor', '#e6e39a', .2, 'flüorid'], Cl: ['xlor', '#c5d64a', .34, 'xlorid'], Br: ['brom', '#a8401c', .4, 'bromid'], I: ['yod', '#6a3a8a', .35, 'yodid']};
ACTM.forEach(m => Object.keys(HAL).forEach(x => {
  const h = HAL[x], L = LOOK[m], nm = EL[m].n, pr = bin(m, x, 1);
  X(m, x, {eq: mkEq([m, x + '2'], [pr], '->[t°]'), ty: 'Birləşmə', obs: 'Qızdırılmış ' + nm.toLowerCase() + ' ' + h[0] + ' buxarında alovlanır, ağ tüstü şəklində ' + nm.toLowerCase() + ' ' + h[3] + ' əmələ gəlir.',
    vis: J([L[2] === 'ribbon' ? 'ribbon' : L[2], L[1]], [flame(L[3] || '#fff', 1.5, 7, 1.1), glow(L[3] || '#fff', 1.5, 7, 1.2), smoke('#ffffff', 1.4, 2, 9), gasfill('#ffffff', .3, 2.5, 5), dep(WHT, 3.5, 4)], {gas: {c: h[1], a: h[2]}})});
}));
DB[key('Na', 'Cl')].obs = 'Əridilmiş natrium xlorda parlaq sarı alovla yanır və banka ağ tüstü ilə dolur. Bu tüstü adi xörək duzudur.';
X('Al', 'I', {eq: '2Al + 3I2 ->[H2O] 2AlI3', ty: 'Birləşmə', obs: 'Alüminium tozu ilə yod qarışığına bir damcı su düşən kimi qarışıq alışır və qalın bənövşəyi yod buxarı qalxır. Su burada katalizatordur.', vis: T(['#c5c9cd', '#3a2440'], [flash(2.4, '#ffd9ff', .7), flame('#ffb8f0', 2.4, 6.5, 1, 'mouth'), smoke('#7a3fa8', 2.6, 2.4, 9, 'mouth'), glow('#ff9a5a', 2.4, 7, 1), scol('#d9d2c2', 4, 4)], {noburner: 1, drop: 1.6})});
X('Al', 'Br', {eq: '2Al + 3Br2 -> 2AlBr3', ty: 'Birləşmə', obs: 'Alüminium folqası maye broma düşəndə bir neçə saniyədən sonra qığılcımlar saçaraq alışır, qonur buxar və ağ tüstü qalxır.', vis: W(['#8a2a14', .8], sol('ribbon', '#c5c9cd'), [glow('#ffb060', 3, 8, 1), sparks('#ffe2a0', 60, 3, 8), smoke('#a8401c', 1.8, 3, 9), dis(0, 3, 6)], {lvl: .2})});
X('Zn', 'I', {eq: 'Zn + I2 ->[H2O] ZnI2', ty: 'Birləşmə', obs: 'Sink tozu ilə yod qarışığına su damızdırılanda qarışıq qızır, bənövşəyi yod buxarı qalxır və rəngsiz sink yodid alınır.', vis: T(['#9ea7ad', '#3a2440'], [smoke('#7a3fa8', 1.6, 2.4, 8, 'mouth'), glow('#ff9a5a', 2.4, 6, .6), scol('#cfd2cf', 4, 4)], {noburner: 1, drop: 1.6})});
[['Fe', 'Cl', '2Fe + 3Cl2 ->[t°] 2FeCl3', 'Közərdilmiş dəmir məftil xlorda yanır və banka qonur dəmir(III) xlorid tüstüsü ilə dolur.', '#8a4b1e'], ['Fe', 'Br', '2Fe + 3Br2 ->[t°] 2FeBr3', 'Qızdırılmış dəmir brom buxarında reaksiyaya girir, tünd qonur dəmir(III) bromid əmələ gəlir.', '#6a3418'],
 ['Fe', 'I', 'Fe + I2 ->[t°] FeI2', 'Dəmir tozu yodla qızdırılanda dəmir(II) yodid əmələ gətirir. Yod zəif oksidləşdirici olduğu üçün dəmir yalnız +2 dərəcəsinə qədər oksidləşir.', '#4a3a3a'],
 ['Cu', 'Cl', 'Cu + Cl2 ->[t°] CuCl2', 'Közərdilmiş mis məftil xlorda yanır, banka qonur-sarı mis(II) xlorid tüstüsü ilə dolur. Su əlavə edilsə, mavi-yaşıl məhlul alınır.', '#9a6a22'], ['Cu', 'Br', 'Cu + Br2 ->[t°] CuBr2', 'Qızdırılmış mis brom buxarında qara mis(II) bromidlə örtülür.', '#2a2420'],
 ['Cu', 'I', '2Cu + I2 ->[t°] 2CuI', 'Mis yod buxarında ağ mis(I) yodidlə örtülür. Yod misi yalnız +1 dərəcəsinə qədər oksidləşdirir.', '#e9e6dc']
].forEach(([m, x, eq, obs, pc]) => X(m, x, {eq, ty: 'Birləşmə', obs, vis: J([m === 'Fe' ? 'wool' : 'wire', LOOK[m][1]], [glow('#ff8a2a', 1.5, 7, 1), sparks('#ffc35a', m === 'Fe' ? 30 : 6, 1.6, 7), smoke(pc, 1.6, 2, 9), gasfill(pc, .45, 2.4, 5), scol(pc, 3, 4)], {gas: {c: HAL[x][1], a: HAL[x][2]}})}));
X('H', 'Cl', {eq: 'H2 + Cl2 ->[işıq] 2HCl', ty: 'Birləşmə', obs: 'Hidrogenlə xlorun qarışığı qaranlıqda dəyişmir, parlaq işıq düşən kimi isə partlayışla reaksiyaya girir. Sarı-yaşıl rəng itir, rəngsiz hidrogen xlorid qalır.', warn: 'Partlayıcı qarışıqdır.', vis: J(null, [flash(2.4, '#eaffd0', 1.2), gasfill('#ffffff', .05, 2.5, 1.5)], {gas: {c: '#c5d64a', a: .3}, gas2: {c: '#ffffff', a: .03}, lamp: 2.1})});
X('H', 'F', {eq: 'H2 + F2 -> 2HF', ty: 'Birləşmə', obs: 'Hidrogen flüorla hətta qaranlıqda və soyuqda partlayışla reaksiyaya girir. Flüor ən güclü oksidləşdiricidir.', warn: 'Məktəbdə aparılmır.', vis: J(null, [flash(1.8, '#fff8d0', 1.3), gasfill('#ffffff', .04, 2, 1.5)], {gas: {c: '#e6e39a', a: .22}, gas2: {c: '#ffffff', a: .03}})});
X('H', 'Br', {eq: 'H2 + Br2 ->[t°] 2HBr', ty: 'Birləşmə', obs: 'Hidrogen bromla yalnız qızdırılanda, sakit reaksiyaya girir. Qonur brom buxarının rəngi tədricən itir.', vis: J(null, [gasfill('#ffffff', .05, 3, 6)], {gas: {c: '#a8401c', a: .4}, gas2: {c: '#ffffff', a: .03}, burner: 1})});
X('H', 'I', {eq: 'H2 + I2 <->[t°] 2HI', ty: 'Birləşmə', obs: 'Hidrogen yodla çətin və dönər reaksiyaya girir: güclü qızdırılanda bənövşəyi yod buxarının rəngi bir qədər solur, amma tam itmir.', vis: J(null, [gasfill('#6a3a8a', .18, 3, 6)], {gas: {c: '#6a3a8a', a: .38}, gas2: {c: '#ffffff', a: .03}, burner: 1})});
X('P', 'Cl', {eq: '2P + 5Cl2 -> 2PCl5', ty: 'Birləşmə', obs: 'Fosfor xlorda öz-özünə alışır və solğun yaşılımtıl alovla yanır, ağ tüstü əmələ gəlir.', vis: J(['heap', '#8e2f2a'], [flame('#d8ffb0', 1.5, 7.5, 1), smoke('#ffffff', 1.8, 2, 9), gasfill('#ffffff', .4, 2.5, 5)], {gas: {c: '#c5d64a', a: .34}})});
X('Si', 'Cl', {eq: 'Si + 2Cl2 ->[t°] SiCl4', ty: 'Birləşmə', obs: 'Qızdırılmış silisium xlorda yanır, rəngsiz uçucu maye olan silisium(IV) xlorid əmələ gəlir.', vis: J(['heap', '#5b6168'], [glow('#ffb060', 1.6, 8, 1), smoke('#ffffff', 1, 2.4, 9), gasfill('#ffffff', .15, 3, 5)], {gas: {c: '#c5d64a', a: .34}})});
['C', 'N', 'O'].forEach(m => DB[key(m, 'Cl')] || NOX(m, 'Cl', EL[m].n + ' xlorla birbaşa reaksiyaya girmir.'));
ACTM.forEach(m => { const L = LOOK[m], nm = EL[m].n;
  X(m, 'S', {eq: mkEq([m, 'S'], [bin(m, 'S', 2)], '->[t°]'), ty: 'Birləşmə', obs: nm + ' tozu kükürdlə qızdırılanda parlaq işıq saçaraq reaksiyaya girir və ' + nm.toLowerCase() + ' sulfid əmələ gəlir.', vis: T([L[1], '#e6cf3a'], [flash(2.6, '#fff6c0', .8), glow('#ffd070', 2.4, 6, 1.3), smoke('#ffffff', 1.4, 2.6, 8, 'mouth'), scol(m === 'Zn' ? '#efeee6' : '#d8d2b8', 3, 4)])});
  if (m !== 'Al' && m !== 'Zn') X(m, 'P', {eq: mkEq([m, 'P'], [bin(m, 'P', 3)], '->[t°]'), ty: 'Birləşmə', obs: nm + ' fosforla qızdırılanda alışaraq reaksiyaya girir, ' + nm.toLowerCase() + ' fosfid əmələ gəlir.', vis: T([L[1], '#8e2f2a'], [flash(2.6, '#fff6c0', .6), glow('#ffd070', 2.4, 6, 1.1), smoke('#ffffff', 1, 2.6, 8, 'mouth'), scol('#6a5a4a', 3, 4)])});
});
['Li', 'Na', 'K', 'Rb', 'Cs', 'Ca', 'Sr', 'Ba'].forEach(m => X(m, 'H', {eq: mkEq([m, 'H2'], [V1.includes(m) ? m + 'H' : m + 'H2'], '->[t°]'), ty: 'Birləşmə', obs: 'Qızdırılmış ' + EL[m].n.toLowerCase() + ' hidrogenlə birləşir və ağ kristal maddə, ' + EL[m].n.toLowerCase() + ' hidrid əmələ gətirir. Burada hidrogenin oksidləşmə dərəcəsi −1-dir.', vis: J([LOOK[m][2], LOOK[m][1]], [glow('#ff8a2a', 1.6, 7, .7), scol(WHT, 2.4, 5)], {gas: {c: '#ffffff', a: .03}, burner: 1})}));
['Fe', 'Cu', 'Zn', 'Al', 'Ag', 'Au', 'Pt', 'Hg', 'Pb'].forEach(m => NOX(m, 'H', EL[m].n + ' hidrogenlə birbaşa birləşmə əmələ gətirmir. Hidrogenlə yalnız ən aktiv metallar (qələvi və qələvi-torpaq metallar) birləşir.'));
X('Li', 'N', {eq: '6Li + N2 -> 2Li3N', ty: 'Birləşmə', obs: 'Litium azotla adi temperaturda reaksiyaya girən yeganə metaldır: havada səthi tədricən qara-qırmızı litium nitridlə örtülür.', vis: J(['ball', '#c7cbd0'], [scol('#4a1f24', 2, 7)], {gas: {c: '#ffffff', a: .03}})});
['Mg', 'Ca', 'Sr', 'Ba'].forEach(m => X(m, 'N', {eq: mkEq([m, 'N2'], [m + '3N2'], '->[t°]'), ty: 'Birləşmə', obs: 'Yanan ' + EL[m].n.toLowerCase() + ' azotda da yanmağa davam edir və ' + EL[m].n.toLowerCase() + ' nitrid əmələ gətirir.', vis: J([LOOK[m][2], LOOK[m][1]], [flame(LOOK[m][3], 1.5, 6, .8), glow(LOOK[m][3], 1.5, 6, .9), scol('#c9c48a', 3, 4)], {gas: {c: '#ffffff', a: .03}})}));
X('H', 'N', {eq: 'N2 + 3H2 <->[Fe,_450_°C,_200_atm] 2NH3', ty: 'Birləşmə', sp: 1, obs: 'Adi şəraitdə getmir. Sənayedə dəmir katalizator, yüksək təzyiq və temperatur altında azot hidrogenlə birləşib ammonyak verir. Bu, gübrə istehsalının əsas reaksiyasıdır.', vis: J(null, [glow('#ff7a2a', 2, 9, 1.2, 'mid'), gasfill('#eaf6ff', .1, 3, 5)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}, burner: 1})});
X('C', 'H', {eq: 'C + 2H2 <->[Ni,_500_°C] CH4', ty: 'Birləşmə', sp: 1, obs: 'Adi şəraitdə getmir. Karbon hidrogenlə yalnız nikel katalizator iştirakında, yüksək temperaturda birləşib metan əmələ gətirir.', vis: J(['chunk', '#1d1d1f'], [glow('#ff7a2a', 2, 9, .9)], {gas: {c: '#ffffff', a: .03}, burner: 1})});
X('H', 'S', {eq: 'H2 + S <->[t°] H2S', ty: 'Birləşmə', obs: 'Hidrogen ərimiş kükürdün üzərindən keçəndə lax yumurta iyi verən zəhərli qaz, hidrogen sulfid əmələ gəlir.', vis: J(['heap', '#e6cf3a'], [glow('#ff8a2a', 1.6, 8, .6), scol('#b8862a', 2, 4), gasfill('#f2f6d0', .1, 3, 5)], {gas: {c: '#ffffff', a: .03}, burner: 1})});
X('Fe', 'S', {eq: 'Fe + S ->[t°] FeS', ty: 'Birləşmə', obs: 'Dəmir tozu ilə kükürd qarışığı bir yerdən qızdırılanda közərir və közərmə özü bütün qarışığa yayılır. Maqnitə çəkilməyən qara-boz dəmir(II) sulfid alınır.', vis: T(['#6f7479', '#e6cf3a'], [glow('#ff5a1a', 2.2, 8, 1.3), smoke('#e9e4b0', .5, 2.6, 7, 'mouth'), scol('#2c2c2e', 3.4, 4)])});
X('Cu', 'S', {eq: '2Cu + S ->[t°] Cu2S', ty: 'Birləşmə', obs: 'Mis məftil kükürd buxarında közərir və qara, kövrək mis(I) sulfidə çevrilir.', vis: T(['#b5562c', '#e6cf3a'], [glow('#ff5a1a', 2.2, 7, 1), smoke('#e9e4b0', .5, 2.6, 7, 'mouth'), scol('#1e1e22', 3.2, 4)])});
X('Hg', 'S', {eq: 'Hg + S -> HgS', ty: 'Birləşmə', obs: 'Civə kükürd tozu ilə qızdırılmadan, adi temperaturda birləşir. Ona görə dağılmış civənin üstünə kükürd tozu səpirlər.', vis: T(['#c9cdd1', '#e6cf3a'], [scol('#1e1e22', 2, 6)], {noburner: 1})});
X('Ag', 'S', {eq: '2Ag + S -> Ag2S', ty: 'Birləşmə', obs: 'Gümüş kükürdlə təmasda qara gümüş sulfidlə örtülür. Gümüş əşyaların zamanla qaralmasının səbəbi budur.', vis: T(['#dfe2e4', '#e6cf3a'], [scol('#26262a', 2.4, 6)])});
X('Pb', 'S', {eq: 'Pb + S ->[t°] PbS', ty: 'Birləşmə', obs: 'Qurğuşun kükürdlə qızdırılanda qara qurğuşun(II) sulfid əmələ gətirir.', vis: T(['#62676c', '#e6cf3a'], [glow('#ff5a1a', 2.4, 6, .8), scol('#17171a', 3, 4)])});
X('C', 'S', {eq: 'C + 2S ->[900 °C] CS2', ty: 'Birləşmə', sp: 1, obs: 'Közərdilmiş kömürün üzərindən kükürd buxarı keçəndə uçucu maye, karbon disulfid əmələ gəlir. Reaksiya yalnız çox yüksək temperaturda gedir.', vis: T(['#1d1d1f', '#e6cf3a'], [glow('#ff5a1a', 2, 9, 1.2), smoke('#f1eebc', .6, 3, 9, 'mouth')])});
['N', 'I', 'Au'].forEach(m => NOX(m, 'S', m === 'Au' ? 'Qızıl kükürdlə reaksiyaya girmir.' : EL[m].n + ' kükürdlə birbaşa reaksiyaya girmir.'));
X('C', 'Ca', {eq: 'Ca + 2C ->[t°] CaC2', ty: 'Birləşmə', obs: 'Kalsium kömürlə güclü qızdırılanda kalsium karbid əmələ gətirir. Karbid su ilə asetilen verir.', vis: T(['#a9adb0', '#1d1d1f'], [glow('#ff5a1a', 2, 9, 1.3), scol('#6e6a64', 3.5, 4)])});
X('Al', 'C', {eq: '4Al + 3C ->[t°] Al4C3', ty: 'Birləşmə', obs: 'Alüminium kömürlə çox yüksək temperaturda sarı alüminium karbid əmələ gətirir.', vis: T(['#c5c9cd', '#1d1d1f'], [glow('#ff5a1a', 2, 9, 1.3), scol('#b8a23a', 3.5, 4)])});
X('C', 'Si', {eq: 'Si + C ->[2000 °C] SiC', ty: 'Birləşmə', sp: 1, obs: 'Silisium karbonla elektrik sobasında birləşib karborund (SiC) əmələ gətirir. O, bərkliyinə görə almaza yaxındır.', vis: T(['#5b6168', '#1d1d1f'], [glow('#ffb060', 2, 9, 1.6), scol('#3a4046', 3.5, 4)])});
X('Mg', 'Si', {eq: '2Mg + Si ->[t°] Mg2Si', ty: 'Birləşmə', obs: 'Maqnezium tozu silisiumla qızdırılanda parlaq işıqla reaksiyaya girir, maqnezium silisid əmələ gəlir.', vis: T(['#c4c8cc', '#5b6168'], [flash(2.6, '#ffffff', .8), glow('#fff0c0', 2.4, 6, 1.4), scol('#4a5258', 3, 4)])});
X('Xe', 'F', {eq: 'Xe + 2F2 ->[400 °C] XeF4', ty: 'Birləşmə', sp: 1, obs: 'Təsirsiz qazlar adətən reaksiyaya girmir, amma ksenon ən güclü oksidləşdirici olan flüorla qızdırılanda rəngsiz kristallar əmələ gətirir. Bu, 1962-ci ildə kimyada böyük kəşf oldu.', vis: J(null, [gasfill('#ffffff', .05, 3, 5), dep(WHT, 4, 5)], {gas: {c: '#e6e39a', a: .22}, gas2: {c: '#ffffff', a: .03}, burner: 1})});
// reduksiya, oksidlər
X('CuO', 'H', {eq: 'CuO + H2 ->[t°] Cu + H2O', ty: 'Əvəzetmə', obs: 'Qızdırılmış qara mis(II) oksidin üzərindən hidrogen keçəndə toz qızarıb təmiz misə çevrilir, borunun soyuq hissəsində su damcıları toplanır.', vis: T(['#1a1a1c'], [glow('#ff5a1a', 2, 7, .7), scol('#b5562c', 2.6, 5), drops(4)], {gasin: 1})});
X('CuO', 'C', {eq: '2CuO + C ->[t°] 2Cu + CO2^', ty: 'Əvəzetmə', obs: 'Qara mis(II) oksidlə kömür tozunun qarışığı qızdırılanda qırmızı mis dənələri görünür, ayrılan qaz əhəng suyunu bulandırır.', vis: T(['#1a1a1c', '#1d1d1f'], [glow('#ff5a1a', 2, 8, 1), scol('#b5562c', 3, 5), smoke('#ffffff', .25, 3, 8, 'mouth')])});
X('Fe2O3', 'Al', {eq: 'Fe2O3 + 2Al ->[t°] Al2O3 + 2Fe', ty: 'Əvəzetmə', obs: 'Bu, termit reaksiyasıdır. Qarışıq alışdırılanda gözqamaşdırıcı alov və qığılcım fontanı qalxır, temperatur 2500 °C-yə çatır və ərimiş dəmir axır. Relsləri belə qaynaq edirlər.', warn: 'Çox təhlükəlidir, yalnız açıq havada mütəxəssis aparır.', vis: T(['#8a3a1e', '#c5c9cd'], [flash(2.2, '#fff3c0', 1), flame('#ffe9a0', 2.2, 8, 2, 'mouth'), sparks('#ffd070', 160, 2.2, 8, 'mouth'), glow('#ffb040', 2.2, 9, 2.2), smoke('#ffffff', 1.6, 2.4, 9, 'mouth'), scol('#3a3a3e', 5, 3)], {noburner: 1})});
X('CuO', 'Al', {eq: '3CuO + 2Al ->[t°] Al2O3 + 3Cu', ty: 'Əvəzetmə', obs: 'Alüminium misi oksidindən sıxışdırıb çıxarır: qarışıq parlaq işıq və qığılcımla alışır, qırmızı mis qalır.', warn: 'Təhlükəli reaksiyadır.', vis: T(['#1a1a1c', '#c5c9cd'], [flash(2.4, '#fff3c0', .9), sparks('#ffd070', 90, 2.4, 7, 'mouth'), glow('#ffb040', 2.4, 8, 1.8), smoke('#ffffff', 1, 2.6, 9, 'mouth'), scol('#b5562c', 4.5, 3)])});
X('CO2', 'Mg', {eq: '2Mg + CO2 ->[t°] 2MgO + C', ty: 'Əvəzetmə', obs: 'Yanan maqnezium karbon qazında sönmür, yanmağa davam edir. Bankanın divarında ağ maqnezium oksid və qara his (karbon) qalır. Ona görə maqnezium yanğınını karbon qazı ilə söndürmək olmaz.', vis: J(['ribbon', '#c4c8cc'], [flame('#ffffff', 1.4, 7.5, 1.4), glow('#ffffff', 1.4, 7.5, 1.8), smoke('#ffffff', .8, 2, 8), dep('#e9e9e4', 2.6, 4), sparks('#3a3a3a', 20, 2, 7), scol('#2a2a2a', 4, 4)], {gas: {c: '#ffffff', a: .03}})});
X('CO2', 'C', {eq: 'CO2 + C ->[t°] 2CO', ty: 'Birləşmə', obs: 'Karbon qazı közərdilmiş kömürün üzərindən keçəndə dəm qazına (CO) çevrilir. Rəngsiz və iysiz olduğu üçün çox təhlükəlidir.', vis: T(['#1d1d1f'], [glow('#ff5a1a', 2, 9, 1.1)], {gasin: 1})});
X('Fe2O3', 'H', {eq: 'Fe2O3 + 3H2 ->[t°] 2Fe + 3H2O', ty: 'Əvəzetmə', obs: 'Qırmızı-qonur dəmir(III) oksid hidrogen axınında qızdırılanda qara-boz dəmir tozuna çevrilir, borunun soyuq hissəsində su damcıları yaranır.', vis: T(['#8a3a1e'], [glow('#ff5a1a', 2, 7, .7), scol('#55585c', 2.6, 5), drops(4)], {gasin: 1})});
X('Fe2O3', 'C', {eq: '2Fe2O3 + 3C ->[t°] 4Fe + 3CO2^', ty: 'Əvəzetmə', obs: 'Dəmir filizi kömürlə güclü qızdırılanda dəmir alınır. Domna sobasında çuqun bu prinsiplə əridilir.', vis: T(['#8a3a1e', '#1d1d1f'], [glow('#ff5a1a', 2, 9, 1.4), scol('#55585c', 4, 4), smoke('#ffffff', .3, 3, 9, 'mouth')])});
X('CaO', 'CO2', {eq: 'CaO + CO2 -> CaCO3', ty: 'Birləşmə', obs: 'Sönməmiş əhəng havadakı karbon qazını yavaş-yavaş udur və kalsium karbonata çevrilir. Gözlə görünən dəyişiklik demək olar yoxdur.', vis: J(['chunk', '#ecebe6'], [scol('#e2dfd6', 3, 5)], {gas: {c: '#ffffff', a: .03}})});
X('CaO', 'C', {eq: 'CaO + 3C ->[2000 °C] CaC2 + CO^', ty: 'Əvəzetmə', sp: 1, obs: 'Əhəng kömürlə elektrik sobasında əridiləndə kalsium karbid alınır.', vis: T(['#ecebe6', '#1d1d1f'], [glow('#ffb060', 2, 9, 1.6), scol('#6e6a64', 4, 4)])});
X('SO2', 'O', {eq: '2SO2 + O2 <->[V2O5,_t°] 2SO3', ty: 'Birləşmə', sp: 1, obs: 'Kükürd qazı oksigenlə yalnız katalizator üzərində, 450 °C-də reaksiyaya girir. Sulfat turşusu istehsalının əsas mərhələsidir.', vis: J(null, [glow('#ff7a2a', 2, 9, 1, 'mid'), gasfill('#ffffff', .18, 3, 5)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}, burner: 1})});
X('NH3', 'O', {eq: '4NH3 + 3O2 ->[t°] 2N2 + 6H2O', ty: 'Yanma', obs: 'Ammonyak havada yanmır, təmiz oksigendə isə sarımtıl-yaşıl alovla yanır.', vis: J(['jet', '#ffffff'], [flame('#d8e86a', 1.5, 9, 1), glow('#d8e86a', 1.5, 9, 1), drops(3.5)], {gas: {c: '#ffffff', a: .03}})});
X('NH3', 'CuO', {eq: '2NH3 + 3CuO ->[t°] 3Cu + N2 + 3H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Ammonyak qızdırılmış qara mis(II) oksidi qırmızı misə qədər reduksiya edir.', vis: T(['#1a1a1c'], [glow('#ff5a1a', 2, 7, .7), scol('#b5562c', 2.6, 5), drops(4)], {gasin: 1})});
X('NH3', 'HCl', {eq: 'NH3 + HCl -> NH4Cl', ty: 'Birləşmə', obs: 'Ammonyakla hidrogen xlorid qazları görüşən yerdə qalın ağ tüstü yaranır. Bu, ammonium xloridin xırda kristallarıdır: "odsuz tüstü" təcrübəsi.', vis: J(null, [smoke('#ffffff', 3, 1.6, 9, 'mid'), gasfill('#ffffff', .55, 1.8, 5), dep(WHT, 5, 4)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}})});
X('CO2', 'CaOH2', {eq: 'Ca(OH)2 + CO2 -> CaCO3! + H2O', ty: 'Mübadilə', obs: 'Şəffaf əhəng suyundan karbon qazı keçəndə məhlul süd kimi ağarır: həll olmayan kalsium karbonat çökür. Karbon qazını bu reaksiya ilə tanıyırlar.', vis: W(null, gasin(), [bub(10, 1.3, 9, 'tip'), ppt(WHT, 'fine', .8, 1.8, 5)])});
X('CO2', 'NaOH', {eq: '2NaOH + CO2 -> Na2CO3 + H2O', ty: 'Mübadilə', obs: 'Qələvi karbon qazını udur. Çöküntü yaranmır, fenolftaleinin moruğu rəngi isə solur.', vis: W([PINK, .45], gasin(), [bub(10, 1.3, 9, 'tip'), col(PINK, .2, 2, 6)])});
X('SO2', 'NaOH', {eq: '2NaOH + SO2 -> Na2SO3 + H2O', ty: 'Mübadilə', obs: 'Qələvi kükürd qazını udur, fenolftaleinin moruğu rəngi itir.', vis: W([PINK, .45], gasin(), [bub(10, 1.3, 9, 'tip'), col('#ffffff', 0, 2, 6)])});
X('SO2', 'KMnO4', {eq: '5SO2 + 2KMnO4 + 2H2O -> K2SO4 + 2MnSO4 + 2H2SO4', ty: 'Oksidləşmə-reduksiya', obs: 'Kükürd qazı bənövşəyi kalium permanqanat məhlulunu rəngsizləşdirir.', vis: W([MN, .62], gasin(), [bub(10, 1.3, 8, 'tip'), col('#ffffff', 0, 2, 5)])});
X('SO2', 'Br2aq', {eq: 'SO2 + Br2 + 2H2O -> H2SO4 + 2HBr', ty: 'Oksidləşmə-reduksiya', obs: 'Kükürd qazı narıncı bromlu suyu rəngsizləşdirir.', vis: W([BRW, .5], gasin(), [bub(10, 1.3, 8, 'tip'), col('#ffffff', 0, 2, 5)])});
// turşu və qələvilərlə xüsusi hallar
X('Al', 'NaOH', {eq: '2Al + 2NaOH + 6H2O -> 2Na[Al(OH)4] + 3H2^', ty: 'Əvəzetmə', obs: 'Alüminium amfoter metaldır: qələvi məhlulunda da həll olur və hidrogen ayrılır.', vis: W(null, sol('granule', '#c5c9cd', {n: 3}), [bub(26, 2, 10), dis(.3, 2.4, 8), steam(3, 9, .5)])});
X('Zn', 'NaOH', {eq: 'Zn + 2NaOH + 2H2O -> Na2[Zn(OH)4] + H2^', ty: 'Əvəzetmə', obs: 'Sink amfoter metaldır: qatı qələvi məhlulunda qızdırılanda yavaş-yavaş həll olur, hidrogen ayrılır.', vis: W(null, sol('granule', '#9ea7ad', {n: 3}), [bub(12, 2.2, 10), dis(.6, 2.6, 8)], {heat: 1})});
X('Si', 'NaOH', {eq: 'Si + 2NaOH + H2O -> Na2SiO3 + 2H2^', ty: 'Əvəzetmə', obs: 'Silisium qatı qələvi məhlulunda həll olur, hidrogen ayrılır və natrium silikat alınır.', vis: W(null, sol('chunk', '#5b6168', {n: 2}), [bub(14, 2, 10), dis(.5, 2.6, 8)], {heat: 1})});
X('Cl', 'NaOH', {eq: 'Cl2 + 2NaOH -> NaCl + NaClO + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Xlor soyuq qələvi məhlulunda udulur. Alınan məhlul ağardıcı kimi işlənir.', vis: W(null, gasin('#c5d64a'), [bub(10, 1.3, 9, 'tip'), col('#eef2c0', .12, 2, 6)])});
X('Br', 'NaOH', {eq: 'Br2 + 2NaOH -> NaBr + NaBrO + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Qonur brom qələvi məhluluna töküləndə rəngi itir.', vis: W(null, pour('#8a2a14', .8), [col(BRW, .4, 1.6, 1.2), col('#ffffff', 0, 3, 3)])});
X('Br2aq', 'NaOH', {eq: 'Br2 + 2NaOH -> NaBr + NaBrO + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Narıncı bromlu su qələvi əlavə olunanda rəngsizləşir.', vis: W([BRW, .5], pour(), [col('#ffffff', 0, 1.8, 3)])});
X('I', 'NaOH', {eq: '3I2 + 6NaOH -> 5NaI + NaIO3 + 3H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Yod kristalları qələvi məhlulunda həll olur və qonur rəng itir.', vis: W(null, sol('crystal', '#3a2440', {n: 4}), [col(IOD, .4, 1.8, 2), col('#ffffff', 0, 4, 4), dis(0, 2, 5)])});
['Mg', 'Fe', 'Cu', 'Ag', 'Au'].forEach(m => NOX(m, 'NaOH', EL[m].n + ' qələvi məhlulu ilə reaksiyaya girmir. Qələvilərdə yalnız amfoter metallar (alüminium, sink) həll olur.'));
const NOXG = '#a4521b';
const oxm = {Cu: [2, 'Cu', CUB], Ag: [1, 'Ag', 0], Zn: [2, 'Zn', 0], Mg: [2, 'Mg', 0], Hg: [2, 'Hg', 0], Pb: [2, 'Pb', 0], Fe: [3, 'Fe', FE3], Al: [3, 'Al', 0]};
Object.keys(oxm).forEach(m => { const [v, s, sc] = oxm[m], nm = EL[m].n, nit = s + (v > 1 ? '(NO3)' + v : 'NO3'), L = LOOK[m];
  // duru nitrat turşusu: hidrogen yox, NO ayrılır
  X(m, 'HNO3', {eq: mkEq([m, 'HNO3(d)'], [nit, 'NO^', 'H2O']), ty: 'Oksidləşmə-reduksiya', obs: nm + ' duru nitrat turşusunda həll olur. Hidrogen yox, rəngsiz azot(II) oksid ayrılır və o, havada dərhal qonurlaşır.' + (m === 'Cu' ? ' Məhlul göyərir.' : ''), vis: W(null, sol(L[2] === 'drop' ? 'drop' : L[2], L[1], {n: 2}), [bub(14, 2, 10), smoke(NOXG, .5, 2.6, 10), dis(.4, 2.4, 8)].concat(sc ? [col(sc, .45, 2.4, 6)] : []))});
  if (m === 'Fe' || m === 'Al') { ['HNO3q', 'H2SO4q'].forEach(ac => NOX(m, ac, nm + ' soyuq qatı ' + (ac === 'HNO3q' ? 'nitrat' : 'sulfat') + ' turşusunda passivləşir: səthində çox nazik, möhkəm oksid təbəqəsi yaranır və reaksiya dayanır. Ona görə bu turşuları ' + (m === 'Fe' ? 'polad' : 'alüminium') + ' çənlərdə daşıyırlar.')); return; }
  X(m, 'HNO3q', {eq: mkEq([m, 'HNO3(q)'], [nit, 'NO2^', 'H2O']), ty: 'Oksidləşmə-reduksiya', obs: nm + ' qatı nitrat turşusunda şiddətlə həll olur və qonur, zəhərli azot(IV) oksid qazı ayrılır.' + (m === 'Cu' ? ' Məhlul əvvəl yaşıl, sonra mavi rəng alır.' : ''), warn: 'Qonur qaz zəhərlidir, təcrübə sorucu şkafda aparılır.', vis: W(['#eadf9a', .14], sol(L[2], L[1], {n: 2}), [bub(40, 1.8, 9), smoke(NOXG, 2.4, 2, 10), dis(.1, 2, 7)].concat(m === 'Cu' ? [col('#3fae6a', .5, 2, 3), col(CUB, .55, 5.5, 3)] : []))});
  if (m !== 'Pb') X(m, 'H2SO4q', {eq: mkEq([m, 'H2SO4(q)'], [m === 'Ag' ? 'Ag2SO4' : s + 'SO4', 'SO2^', 'H2O'], '->[t°]'), ty: 'Oksidləşmə-reduksiya', obs: nm + ' qatı sulfat turşusu ilə qızdırılanda reaksiyaya girir. Hidrogen yox, kəskin iyli kükürd qazı ayrılır.' + (m === 'Cu' ? ' Məhlul durulaşdırılanda mavi rəng alır.' : ''), vis: W(['#e8e2c8', .12], sol(L[2], L[1], {n: 2}), [bub(18, 2.4, 10), smoke('#ffffff', .4, 3, 10), dis(.4, 2.6, 8)].concat(m === 'Cu' ? [col(CUB, .4, 3, 6)] : []), {heat: 1})});
});
['Au', 'Pt'].forEach(m => ['HNO3', 'HNO3q', 'H2SO4q'].forEach(ac => NOX(m, ac, EL[m].n + ' nəcib metaldır və ayrı-ayrı turşularda həll olmur. Yalnız "çar arağında", yəni qatı nitrat və xlorid turşularının 1:3 qarışığında həll olur.')));
X('C', 'H2SO4q', {eq: 'C + 2H2SO4(q) ->[t°] CO2^ + 2SO2^ + 2H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Kömür qaynar qatı sulfat turşusunda oksidləşir, iki qaz ayrılır.', vis: W(['#e8e2c8', .12], sol('chunk', '#1d1d1f'), [bub(22, 2.4, 10), smoke('#ffffff', .4, 3, 10), dis(.5, 3, 7)], {heat: 1})});
X('S', 'H2SO4q', {eq: 'S + 2H2SO4(q) ->[t°] 3SO2^ + 2H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Kükürd qaynar qatı sulfat turşusunda oksidləşir, kükürd qazı ayrılır.', vis: W(['#e8e2c8', .12], sol('heap', '#e6cf3a'), [bub(18, 2.4, 10), smoke('#ffffff', .4, 3, 10), dis(.4, 3, 7)], {heat: 1})});
X('C', 'HNO3q', {eq: 'C + 4HNO3(q) ->[t°] CO2^ + 4NO2^ + 2H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Közərən kömür qatı nitrat turşusuna salınanda parlaq yanır, qonur qaz ayrılır.', vis: W(['#eadf9a', .14], sol('chunk', '#1d1d1f', {float: 1}), [glow('#ff8a2a', 1.6, 8, 1), bub(26, 1.8, 9), smoke(NOXG, 2, 2, 10)])});
X('S', 'HNO3q', {eq: 'S + 6HNO3(q) ->[t°] H2SO4 + 6NO2^ + 2H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Kükürd qaynar qatı nitrat turşusunda sulfat turşusuna qədər oksidləşir, qonur qaz ayrılır.', vis: W(['#eadf9a', .14], sol('heap', '#e6cf3a'), [bub(20, 2.4, 10), smoke(NOXG, 1.6, 2.6, 10), dis(.3, 3, 7)], {heat: 1})});
X('P', 'HNO3q', {eq: 'P + 5HNO3(q) -> H3PO4 + 5NO2^ + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Fosfor qatı nitrat turşusunda fosfat turşusuna qədər oksidləşir, qonur qaz ayrılır.', vis: W(['#eadf9a', .14], sol('heap', '#8e2f2a'), [bub(24, 2, 10), smoke(NOXG, 1.8, 2.4, 10), dis(.2, 2.6, 7)])});
X('saxaroza', 'H2SO4q', {eq: 'C12H22O11 ->[H2SO4(q)] 12C + 11H2O', ty: 'Parçalanma', obs: 'Qatı sulfat turşusu şəkərdən suyu qoparır: şəkər qaralır, qızır və stəkandan qara, məsaməli kömür sütunu qalxır.', warn: 'Qatı sulfat turşusu dərini yandırır.', vis: W(null, pour('#e8e2c8', .3), [col('#3a2a14', .9, 2, 2.5), foam('#141414', 1.5, 3.6, 5.5), steam(3.4, 10, 1.4)], {lvl: .28, base: sol('heap', '#f7f5ee')})});
// duzlar: xüsusi hallar
X('FeCl3', 'KSCN', {eq: 'FeCl3 + 3KSCN -> Fe(SCN)3 + 3KCl', ty: 'Keyfiyyət reaksiyası', obs: 'Sarımtıl məhlul bir damcıdan qan kimi qırmızı olur. Dəmir(III) ionunu bu reaksiya ilə tanıyırlar.', vis: W([FE3, .35], pour(), [col('#a80d12', .82, 1.7, 1.6)])});
X('FeCl3', 'KI', {eq: '2FeCl3 + 2KI -> 2FeCl2 + I2 + 2KCl', ty: 'Oksidləşmə-reduksiya', obs: 'Dəmir(III) ionu yodid ionunu sərbəst yoda qədər oksidləşdirir: məhlul tünd qonur rəng alır.', vis: W([FE3, .45], pour(), [col('#5a2a10', .8, 1.7, 3)])});
X('CuSO4', 'KI', {eq: '2CuSO4 + 4KI -> 2CuI! + I2 + 2K2SO4', ty: 'Oksidləşmə-reduksiya', obs: 'Mavi məhlul qonurlaşır: yod ayrılır və ağ mis(I) yodid çökür.', vis: W([CUB, .5], pour(), [col('#6a3a14', .75, 1.7, 3), ppt('#e9e2cf', 'fine', .5, 2, 5)])});
X('FeCl3', 'Cu', {eq: '2FeCl3 + Cu -> 2FeCl2 + CuCl2', ty: 'Oksidləşmə-reduksiya', obs: 'Mis dəmir(III) xlorid məhlulunda yavaş-yavaş həll olur, sarı-qonur məhlul yaşılımtıl-mavi rəng alır. Elektron lövhələri bu reaksiya ilə aşılayırlar.', vis: W([FE3, .5], sol('wire', '#b5562c'), [dis(.3, 2.4, 8), col('#5aa88a', .5, 2.4, 7)])});
X('FeCl3', 'Fe', {eq: '2FeCl3 + Fe -> 3FeCl2', ty: 'Birləşmə', obs: 'Dəmir mismarı sarı-qonur məhlulu tədricən açıq yaşıl rəngə çevirir: dəmir(III) dəmir(II)-yə qədər reduksiya olunur.', vis: W([FE3, .5], sol('nail', '#6f7479'), [col(FE2, .4, 2.4, 7)])});
X('AgNO3', 'Cu', {eq: 'Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag!', ty: 'Əvəzetmə', obs: 'Mis məftilin üzərində parlaq gümüş kristalları ağac budaqları kimi böyüyür, rəngsiz məhlul isə tədricən göyərir.', vis: W(null, sol('wire', '#b5562c'), [coat('#e3e6e8', 1.8, 8, 1), col(CUB, .42, 2.6, 8)])});
X('CuSO4', 'Fe', {eq: 'Fe + CuSO4 -> FeSO4 + Cu!', ty: 'Əvəzetmə', obs: 'Dəmir mismar bir neçə dəqiqəyə qırmızı mis təbəqəsi ilə örtülür, mavi məhlul isə açıq yaşıla çalır.', vis: W([CUB, .5], sol('nail', '#6f7479'), [coat('#b5532a', 1.8, 6), col(FE2, .4, 2.6, 8)])});
X('CuSO4', 'NH3aq', {eq: 'CuSO4 + 4NH3·H2O -> [Cu(NH3)4]SO4 + 4H2O', ty: 'Kompleks əmələgəlmə', obs: 'Əvvəlcə açıq mavi çöküntü yaranır, ammonyak artıq töküləndə o həll olur və məhlul tünd göy-bənövşəyi rəng alır.', vis: W([CUB, .5], pour(), [ppt('#6fb0e8', 'gel', .5, 1.7, 2.2), col('#2a2fb8', .85, 3.6, 3.5), {k: 'pptoff', t0: 3.8, d: 3}])});
X('AgNO3', 'NH3aq', {eq: 'AgNO3 + 3NH3·H2O -> [Ag(NH3)2]OH + NH4NO3 + 2H2O', ty: 'Kompleks əmələgəlmə', obs: 'Əvvəlcə qonur gümüş oksid çöküntüsü yaranır, ammonyak artıq töküləndə həll olur. Alınan şəffaf məhlul "gümüş güzgü" reaksiyasında işlənir.', vis: W(null, pour(), [ppt('#5a4632', 'fine', .45, 1.7, 2), {k: 'pptoff', t0: 3.6, d: 3}])});
X('KMnO4', 'HCl', {eq: '2KMnO4 + 16HCl -> 2KCl + 2MnCl2 + 5Cl2^ + 8H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Qatı xlorid turşusu kalium permanqanata töküləndə sarı-yaşıl xlor qazı ayrılır və bənövşəyi rəng itir. Laboratoriyada xloru belə alırlar.', warn: 'Xlor zəhərlidir, təcrübə sorucu şkafda aparılır.', vis: W([MN, .7], pour(), [bub(26, 1.8, 9, 'liq'), smoke('#c5d64a', 1.6, 2.2, 10), col('#e8dcc0', .15, 2.4, 6)])});
X('KMnO4', 'H2O2', {eq: '2KMnO4 + 5H2O2 + 3H2SO4 -> K2SO4 + 2MnSO4 + 5O2^ + 8H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Turşulaşdırılmış bənövşəyi məhlul hidrogen peroksid töküləndə dərhal rəngsizləşir və oksigen qabarcıqları ayrılır.', vis: W([MN, .62], pour(), [bub(34, 1.7, 7, 'liq'), col('#ffffff', 0, 1.8, 2.6)])});
X('KMnO4', 'FeSO4', {eq: '2KMnO4 + 10FeSO4 + 8H2SO4 -> K2SO4 + 2MnSO4 + 5Fe2(SO4)3 + 8H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Turşulaşdırılmış permanqanat məhlulu dəmir(II) sulfat töküləndə rəngsizləşir, sonra dəmir(III) ionlarından sarımtıl olur.', vis: W([MN, .62], pour(FE2, .4), [col('#e9d27a', .22, 1.8, 3)])});
X('KMnO4', 'qliserin', {eq: '14KMnO4 + 4C3H5(OH)3 -> 7K2CO3 + 7Mn2O3 + 5CO2^ + 16H2O^', ty: 'Oksidləşmə-reduksiya', obs: 'Kalium permanqanat kristallarına bir neçə damcı qliserin töküləndə qarışıq bir neçə saniyədən sonra öz-özünə tüstüləyir və bənövşəyi alovla alışır.', warn: 'Qarışıq öz-özünə alışır.', vis: T(['#3a1040'], [smoke('#ffffff', 1.4, 2.6, 4, 'mouth'), flash(4, '#f0c8ff', .7), flame('#c58aff', 4, 9, 1.5, 'mouth'), sparks('#ffd9ff', 40, 4, 9, 'mouth'), smoke('#e8e0ea', 2, 4, 10, 'mouth'), scol('#3a2a22', 6, 3)], {noburner: 1, drop: 1.5})});
X('H2O2', 'MnO2', {eq: '2H2O2 ->[MnO2] 2H2O + O2^', ty: 'Parçalanma', obs: 'Bir çimdik qara manqan(IV) oksid düşən kimi hidrogen peroksid köpüklənir: oksigen ayrılır. Közərən çöp bu qazda alışır. MnO2 katalizatordur, özü sərf olunmur.', vis: W(null, sol('heap', '#2a2622'), [bub(60, 1.6, 9, 'liq'), foam('#f4f4f2', .35, 1.8, 3), steam(2.4, 9, .6)])});
X('H2O2', 'KI', {eq: '2H2O2 ->[KI] 2H2O + O2^', ty: 'Parçalanma', obs: 'Bu, "fil diş pastası" təcrübəsidir. Sabunlu peroksidə kalium yodid töküləndə oksigen o qədər sürətlə ayrılır ki, qabdan qalın köpük sütunu fışqırır.', vis: W(['#f1efe6', .18], pour('#f0e2a8', .3), [bub(80, 1.6, 6, 'liq'), foam('#f6f0d8', 2.2, 1.9, 4.5), steam(2.4, 9, 1)], {ves: 'flask'})});
X('Cl', 'KI', {eq: 'Cl2 + 2KI -> 2KCl + I2', ty: 'Əvəzetmə', obs: 'Xlor yodu duzundan sıxışdırıb çıxarır: rəngsiz məhlul qonurlaşır.', vis: W(null, gasin('#c5d64a'), [bub(9, 1.3, 7, 'tip'), col(IOD, .7, 1.8, 4)])});
X('Cl', 'KBr', {eq: 'Cl2 + 2KBr -> 2KCl + Br2', ty: 'Əvəzetmə', obs: 'Xlor bromu duzundan sıxışdırıb çıxarır: rəngsiz məhlul sarı-narıncı olur.', vis: W(null, gasin('#c5d64a'), [bub(9, 1.3, 7, 'tip'), col(BRW, .5, 1.8, 4)])});
['Br', 'Br2aq'].forEach(b => X(b, 'KI', {eq: 'Br2 + 2KI -> 2KBr + I2', ty: 'Əvəzetmə', obs: 'Brom yodu duzundan sıxışdırıb çıxarır: məhlul tünd qonur rəng alır.', vis: W(null, pour(BRW, .5), [col(IOD, .75, 1.7, 3)])}));
NOX('I', 'KBr', 'Yod bromdan zəif oksidləşdiricidir, ona görə bromu duzundan sıxışdırıb çıxara bilmir. Halogenlərin aktivliyi sırası: F2, Cl2, Br2, I2.');
NOX('I2aq', 'KBr', 'Yod bromdan zəif oksidləşdiricidir, ona görə bromu duzundan sıxışdırıb çıxara bilmir.');
NOX('Br', 'NaCl', 'Brom xlordan zəif oksidləşdiricidir və onu duzundan sıxışdırıb çıxara bilmir.'); NOX('Br2aq', 'NaCl', 'Brom xlordan zəif oksidləşdiricidir və onu duzundan sıxışdırıb çıxara bilmir.'); NOX('I', 'NaCl', 'Yod xlordan zəif oksidləşdiricidir və onu duzundan sıxışdırıb çıxara bilmir.');
X('NaHCO3', 'NaOH', {eq: 'NaHCO3 + NaOH -> Na2CO3 + H2O', ty: 'Mübadilə', obs: 'Turş duz qələvi ilə reaksiyaya girib orta duza çevrilir. Gözlə görünən dəyişiklik demək olar yoxdur.', vis: W(null, sol('heap', WHT), [dis(0, 2, 5)])});
X('NaHCO3', 'CaOH2', {eq: 'NaHCO3 + Ca(OH)2 -> CaCO3! + NaOH + H2O', ty: 'Mübadilə', obs: 'Çay sodası əhəng suyuna düşəndə ağ kalsium karbonat çöküntüsü yaranır.', vis: W(null, sol('heap', WHT), [dis(0, 2, 4), ppt(WHT, 'fine', .7, 1.9, 5)])});
X('CuSO4', 'Na2CO3', {eq: '2CuSO4 + 2Na2CO3 + H2O -> (CuOH)2CO3! + CO2^ + 2Na2SO4', ty: 'Mübadilə və hidroliz', obs: 'Mis(II) karbonat suda mövcud ola bilmir. Onun yerinə yaşılımtıl-mavi əsasi karbonat çökür və karbon qazı ayrılır. Bu çöküntünün tərkibi malaxit mineralı ilə eynidir.', vis: W([CUB, .5], pour(), [ppt('#4fb39a', 'gel', .75, 1.7, 5), bub(18, 1.8, 7, 'liq'), col('#ffffff', 0, 2, 5)])});
X('malaxit', 'HCl', {eq: 'Cu2(OH)2CO3 + 4HCl -> 2CuCl2 + 3H2O + CO2^', ty: 'Mübadilə', obs: 'Yaşıl malaxit tozu turşuda fışıltı ilə həll olur: karbon qazı ayrılır və məhlul mavi-yaşıl rəng alır.', vis: W(null, sol('heap', '#2f9a6a'), [bub(30, 1.6, 8), dis(0, 2, 6), col('#3fb5a0', .5, 2.2, 5)])});
X('malaxit', 'H2SO4', {eq: 'Cu2(OH)2CO3 + 2H2SO4 -> 2CuSO4 + 3H2O + CO2^', ty: 'Mübadilə', obs: 'Yaşıl malaxit tozu turşuda fışıltı ilə həll olur: karbon qazı ayrılır və mavi mis(II) sulfat məhlulu alınır.', vis: W(null, sol('heap', '#2f9a6a'), [bub(30, 1.6, 8), dis(0, 2, 6), col(CUB, .5, 2.2, 5)])});
// qızdırma və cərəyan
X('CaCO3', 't', {eq: 'CaCO3 ->[t°] CaO + CO2^', ty: 'Parçalanma', obs: 'Mərmər 900 °C-dən yuxarı qızdırılanda sönməmiş əhəngə və karbon qazına parçalanır. Əhəngi belə yandırırlar.', vis: T(['#e9e6de'], [glow('#ff5a1a', 2, 9, 1.2), smoke('#ffffff', .25, 3, 9, 'mouth'), scol('#f4f2ea', 4, 4)])});
X('CuOH2', 't', {eq: 'Cu(OH)2 ->[t°] CuO + H2O', ty: 'Parçalanma', obs: 'Göy mis(II) hidroksid çöküntüsü qızdırılanda qaralır: qara mis(II) oksid və su əmələ gəlir.', vis: T(['#3f8fe0'], [scol('#1a1a1c', 2.4, 4), drops(3.6), smoke('#ffffff', .2, 3, 7, 'mouth')])});
X('KMnO4', 't', {eq: '2KMnO4 ->[t°] K2MnO4 + MnO2 + O2^', ty: 'Parçalanma', obs: 'Tünd bənövşəyi kristallar çıtırdayaraq parçalanır və oksigen ayrılır. Sınaq şüşəsinin ağzına tutulan közərən çöp alışır.', vis: T(['#3a1040'], [scol('#16261c', 2.6, 5), smoke('#d8c8e0', .3, 2.6, 8, 'mouth'), flame('#ffb040', 4, 9, .6, 'mouth')])});
X('NaHCO3', 't', {eq: '2NaHCO3 ->[t°] Na2CO3 + H2O + CO2^', ty: 'Parçalanma', obs: 'Çay sodası qızdırılanda karbon qazı və su buxarı ayrılır. Xəmirin qabarması bu reaksiyaya görədir.', vis: T([WHT], [drops(3), smoke('#ffffff', .3, 2.6, 8, 'mouth')])});
X('NH4Cl', 't', {eq: 'NH4Cl <->[t°] NH3^ + HCl^', ty: 'Parçalanma', obs: 'Ammonium xlorid qızdırılanda əriməmiş "yoxa çıxır": qazlara parçalanır, sınaq şüşəsinin soyuq hissəsində isə yenidən ağ kristallar kimi çökür.', vis: T([WHT], [smoke('#ffffff', 1.2, 2.4, 8, 'mouth'), sub(WHT, 3, 5), {k: 'tdis', t0: 2.4, d: 6}])});
X('NH42Cr2O7', 't', {eq: '(NH4)2Cr2O7 ->[t°] Cr2O3 + N2^ + 4H2O^', ty: 'Parçalanma', obs: 'Bu, "vulkan" təcrübəsidir. Narıncı kristallar alışdırılanda qığılcım saçaraq öz-özünə yanır və həcmi dəfələrlə artan tünd yaşıl "kül" püskürür.', vis: T(['#e8641b'], [glow('#ff5a1a', 2, 8, 1.4), sparks('#ffb040', 120, 2, 8, 'mouth'), flame('#ff8a2a', 2, 8, 1, 'mouth'), smoke('#3d5a34', 1.6, 2.4, 9, 'mouth'), foam('#2e4a2a', 1.3, 2.4, 6), scol('#2e4a2a', 2.4, 4)], {open: 1})});
X('malaxit', 't', {eq: 'Cu2(OH)2CO3 ->[t°] 2CuO + H2O + CO2^', ty: 'Parçalanma', obs: 'Yaşıl malaxit tozu qızdırılanda qaralır: qara mis(II) oksid qalır, su damcıları və karbon qazı ayrılır.', vis: T(['#2f9a6a'], [scol('#1a1a1c', 2.4, 5), drops(3.6), smoke('#ffffff', .25, 3, 8, 'mouth')])});
X('HgO', 't', {eq: '2HgO ->[t°] 2Hg + O2^', ty: 'Parçalanma', obs: 'Qırmızı civə(II) oksid qızdırılanda parçalanır: sınaq şüşəsinin divarında civə damcıları parlayır, ayrılan oksigendə közərən çöp alışır. Pristli oksigeni belə kəşf edib.', warn: 'Civə buxarı zəhərlidir.', vis: T(['#d9481e'], [scol('#5a2a1e', 2.6, 4), sub('#c9cdd1', 3.4, 5), flame('#ffb040', 4.4, 9, .6, 'mouth')])});
X('saxaroza', 't', {eq: 'C12H22O11 ->[t°] 12C + 11H2O', ty: 'Parçalanma', obs: 'Şəkər əvvəlcə əriyir və qəhvəyi karamelə çevrilir, daha güclü qızdırılanda kömürləşir. Bu, şəkərin tərkibində karbon olduğunu göstərir.', vis: T(['#f7f5ee'], [scol('#b0661c', 2.2, 2.5), scol('#17120e', 5, 3), smoke('#ffffff', .8, 3, 9, 'mouth'), drops(3.6)])});
X('zulal', 't', {eq: null, eqt: 'zülal →(t°) denaturasiya', ty: 'Denaturasiya', obs: 'Şəffaf yumurta ağı qızdırılanda ağarıb bərkiyir. Zülal molekulunun quruluşu pozulur və bu proses geri dönmür.', vis: W(['#f1edd6', .22], {t: 'none'}, [ppt(WHT, 'curdy', 1, 2.4, 4), steam(2.4, 9, .5)], {heat: 1, ves: 'tube'})});
X('I', 't', no('Bu, kimyəvi reaksiya deyil, fiziki hadisədir. Yod qızdırılanda ərimədən birbaşa bənövşəyi buxara keçir (sublimasiya) və soyuq divarda yenidən kristallaşır. Maddənin tərkibi dəyişmir.', {vis: T(['#3a2440'], [smoke('#7a3fa8', 2, 2.2, 9, 'mouth'), {k: 'tgas', c: '#7a3fa8', a: .5, t0: 2.2, d: 4}, sub('#3a2440', 4, 5)])}));
X('H2O', 't', no('Suyun qaynaması kimyəvi reaksiya deyil, fiziki hadisədir: su buxara çevrilir, amma molekullarının tərkibi (H2O) dəyişmir.', {vis: W(null, {t: 'none'}, [bub(40, 2, 11, 'liq', 1.3), steam(2, 11, 1.6)], {heat: 1})}));
X('H2O', 'el', {eq: '2H2O ->[elektrik_cərəyanı] 2H2^ + O2^', ty: 'Parçalanma', obs: 'Sudan sabit cərəyan keçəndə o parçalanır: mənfi elektrodda hidrogen, müsbət elektrodda oksigen qabarcıqları ayrılır. Hidrogenin həcmi iki dəfə çox olur.', vis: W(null, {t: 'none'}, [bub(30, 1.5, 11, 'el1', .8), bub(15, 1.5, 11, 'el2', .8)], {elec: 1})});
X('NaCl', 'el', {eq: '2NaCl + 2H2O ->[elektroliz] 2NaOH + H2^ + Cl2^', ty: 'Elektroliz', obs: 'Xörək duzu məhlulunun elektrolizində katodda hidrogen, anodda sarı-yaşıl xlor ayrılır, məhlulda isə qələvi toplanır. Fenolftalein katodun yanında moruğu rəng verir.', vis: W(null, {t: 'none'}, [bub(26, 1.5, 11, 'el1', .8), bub(22, 1.5, 11, 'el2', .8), col(PINK, .3, 2.5, 7), smoke('#c5d64a', .5, 3, 11)], {elec: 1})});
X('CuSO4', 'el', {eq: '2CuSO4 + 2H2O ->[elektroliz] 2Cu! + O2^ + 2H2SO4', ty: 'Elektroliz', obs: 'Mis(II) sulfat məhlulunun elektrolizində katod qırmızı mis təbəqəsi ilə örtülür, anodda oksigen ayrılır və məhlulun mavi rəngi solur.', vis: W([CUB, .5], {t: 'none'}, [bub(18, 1.5, 11, 'el2', .8), {k: 'ecoat', c: '#b5532a', t0: 1.8, d: 7}, col(CUB, .2, 2.5, 8)], {elec: 1})});
// üzvi kimya
const ORGB = (g, eq, obs, fc, soot) => X(g, 'O', {eq, ty: 'Yanma', obs, vis: J(['jet', '#ffffff'], [flame(fc, 1.5, 9.5, 1.1), glow(fc, 1.5, 9.5, 1)].concat(soot ? [smoke('#1f1f1f', soot, 2, 9.5)] : [], [drops(3.5)]), {gas: {c: '#ffffff', a: .03}, jar: false})});
ORGB('CH4', 'CH4 + 2O2 ->[t°] CO2 + 2H2O', 'Metan, yəni təbii qaz açıq mavi, hissiz alovla yanır. Mətbəx sobasının alovu budur.', '#5aa8ff', 0);
ORGB('C2H4', 'C2H4 + 3O2 ->[t°] 2CO2 + 2H2O', 'Etilen işıqlı, sarımtıl alovla yanır: tərkibində karbonun payı metandakından çoxdur.', '#ffd76a', .3);
ORGB('C2H2', '2C2H2 + 5O2 ->[t°] 4CO2 + 2H2O', 'Asetilen havada çox hisli, parlaq alovla yanır. Təmiz oksigendə isə alovun temperaturu 3000 °C-ni keçir və metal kəsmək üçün işlənir.', '#ffe9a0', 1.4);
X('C6H6', 'O', {eq: '2C6H6 + 15O2 ->[t°] 12CO2 + 6H2O', ty: 'Yanma', obs: 'Benzol çox hisli alovla yanır: molekulunda karbonun kütlə payı 92 faizdir.', vis: W(null, {t: 'none'}, [flame('#ffcf6a', 1.5, 9.5, 1.2, 'surf'), smoke('#1a1a1a', 2.2, 2, 9.5)], {lvl: .16, ves: 'dish'})});
X('C2H5OH', 'O', {eq: 'C2H5OH + 3O2 ->[t°] 2CO2 + 3H2O', ty: 'Yanma', obs: 'Etanol zəif işıqlı, göyümtül alovla hissiz yanır. Spirt lampası bu reaksiya ilə işləyir.', vis: W(null, {t: 'none'}, [flame('#6f9dff', 1.5, 9.5, 1.1, 'surf'), glow('#6f9dff', 1.5, 9.5, .8, 'surf')], {lvl: .16, ves: 'dish'})});
X('CH4', 'Cl', {eq: 'CH4 + Cl2 ->[işıq] CH3Cl + HCl', ty: 'Əvəzetmə', obs: 'Metanla xlorun qarışığı işıqda saxlananda sarı-yaşıl rəng tədricən itir: xlor atomu hidrogen atomunu əvəz edir. Doymuş karbohidrogenlər üçün əvəzetmə reaksiyaları xarakterikdir.', vis: J(null, [gasfill('#ffffff', .05, 2.6, 6), drops(5)], {gas: {c: '#c5d64a', a: .3}, gas2: {c: '#ffffff', a: .03}, lamp: 2})});
[['CH4', 'Metan'], ['C6H6', 'Benzol']].forEach(([g, nm]) => { NOX(g, 'Br2aq', nm + ' bromlu suyu rəngsizləşdirmir. ' + (g === 'CH4' ? 'Doymuş karbohidrogenlərdə ikiqat rabitə yoxdur, ona görə birləşmə reaksiyasına girmirlər.' : 'Benzol halqası çox davamlıdır. Brom sadəcə benzol təbəqəsinə keçir, kimyəvi reaksiya getmir.'), g === 'CH4' ? W([BRW, .5], gasin(), [bub(9, 1.3, 9, 'tip')]) : W([BRW, .5], pour(), [layer(BRW, .7, .2, 1.8, 3), col('#f3e6c0', .15, 2, 4)]));
  NOX(g, 'KMnO4', nm + ' kalium permanqanat məhlulunu rəngsizləşdirmir: ' + (g === 'CH4' ? 'doymuş karbohidrogenlər oksidləşdiricilərə qarşı davamlıdır.' : 'benzol halqası oksidləşdiricilərə qarşı davamlıdır.'), g === 'CH4' ? W([MN, .62], gasin(), [bub(9, 1.3, 9, 'tip')]) : W([MN, .62], pour(), [layer('#f2f0e6', .35, .2, 1.8, 3)])); });
X('C2H4', 'Br2aq', {eq: 'C2H4 + Br2 -> C2H4Br2', ty: 'Birləşmə', obs: 'Etilen keçəndə narıncı bromlu su rəngsizləşir: brom ikiqat rabitəyə birləşir. Doymamış birləşmələri bu reaksiya ilə tanıyırlar.', vis: W([BRW, .5], gasin(), [bub(10, 1.3, 8, 'tip'), col('#ffffff', 0, 2, 5)])});
X('C2H2', 'Br2aq', {eq: 'C2H2 + 2Br2 -> C2H2Br4', ty: 'Birləşmə', obs: 'Asetilen bromlu suyu rəngsizləşdirir: üçqat rabitəyə iki molekul brom birləşir.', vis: W([BRW, .5], gasin(), [bub(10, 1.3, 8, 'tip'), col('#ffffff', 0, 2.4, 6)])});
X('C2H4', 'KMnO4', {eq: '3C2H4 + 2KMnO4 + 4H2O -> 3C2H4(OH)2 + 2MnO2! + 2KOH', ty: 'Oksidləşmə-reduksiya', obs: 'Etilen bənövşəyi kalium permanqanat məhlulunu rəngsizləşdirir, qonur manqan(IV) oksid çökür. Etilendən ikiatomlu spirt, etilenqlikol alınır.', vis: W([MN, .62], gasin(), [bub(10, 1.3, 8, 'tip'), col('#d9c6a8', .2, 2, 5), ppt('#5a3a22', 'fine', .4, 3, 5)])});
X('C2H2', 'KMnO4', {eq: '3C2H2 + 8KMnO4 -> 3K2C2O4 + 8MnO2! + 2KOH + 2H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Asetilen kalium permanqanat məhlulunu rəngsizləşdirir, qonur çöküntü əmələ gəlir.', vis: W([MN, .62], gasin(), [bub(10, 1.3, 8, 'tip'), col('#d9c6a8', .2, 2, 5), ppt('#5a3a22', 'fine', .5, 3, 5)])});
X('C2H5OH', 'Na', {eq: '2C2H5OH + 2Na -> 2C2H5ONa + H2^', ty: 'Əvəzetmə', obs: 'Natrium spirtdə dibə çökür və sudakından xeyli sakit reaksiyaya girir: xırda hidrogen qabarcıqları ayrılır, natrium etilat alınır.', vis: W(null, sol('ball', SILV), [bub(12, 1.6, 10, 'solid', .7), dis(.2, 2, 9)])});
X('C2H5OH', 'CuO', {eq: 'C2H5OH + CuO ->[t°] CH3CHO + Cu + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Közərdilib qaralmış mis məftil spirtə salınanda yenidən parlaq qırmızı olur, yaşıl alma iyi verən sirkə aldehidi əmələ gəlir.', vis: W(null, sol('wire', '#1a1a1c'), [coat('#b5562c', 1.7, 2), bub(8, 1.7, 3.5, 'solid', .6), steam(1.7, 5, .5)], {ves: 'tube'})});
X('C2H5OH', 'CH3COOH', {eq: 'CH3COOH + C2H5OH <->[H2SO4,_t°] CH3COOC2H5 + H2O', ty: 'Efirləşmə', obs: 'Sirkə turşusu ilə spirt qatı sulfat turşusu iştirakında qızdırılanda meyvə iyi verən mürəkkəb efir (etilasetat) əmələ gəlir. O, suda həll olmur və üst təbəqədə toplanır.', vis: W(null, pour(), [bub(6, 2.4, 8, 'liq', .6), layer('#f6f2d8', .5, .2, 3.2, 5), steam(2.6, 9, .5)], {heat: 1, ves: 'tube'})});
NOX('C2H5OH', 'NaOH', 'Etanol qələvi məhlulu ilə reaksiyaya girmir: spirtlərin turşuluq xassələri sudan da zəifdir. Onlar yalnız aktiv metallarla reaksiyaya girir.');
X('qliserin', 'CuOH2', {eq: '2C3H5(OH)3 + Cu(OH)2 -> (C3H7O3)2Cu + 2H2O', ty: 'Keyfiyyət reaksiyası', obs: 'Göy mis(II) hidroksid çöküntüsü qliserində həll olur və parlaq göy, şəffaf məhlul alınır. Çoxatomlu spirtləri bu reaksiya ilə tanıyırlar.', vis: W(['#3f8fe0', .16], pour(), [{k: 'pptoff', t0: 1.8, d: 3}, col('#1f4fd8', .8, 1.8, 3.5)], {ppt0: ['#3f8fe0', 'gel', .6]})});
X('qlukoza', 'CuOH2', {eq: 'C6H12O6 + 2Cu(OH)2 ->[t°] C6H12O7 + Cu2O! + 2H2O', ty: 'Keyfiyyət reaksiyası', obs: 'Soyuqda çöküntü həll olur və parlaq göy məhlul alınır: qlükoza çoxatomlu spirtdir. Qızdırılanda məhlul əvvəl sarı, sonra kərpici-qırmızı olur: mis(I) oksid çökür, çünki qlükoza həm də aldehiddir.', vis: W(['#3f8fe0', .16], pour(), [{k: 'pptoff', t0: 1.8, d: 2}, col('#1f4fd8', .8, 1.8, 2), col('#d9b02a', .8, 5, 1.6), col('#b8421c', .55, 7, 2), ppt('#b8421c', 'fine', .75, 7, 3), steam(4.5, 10, .5)], {ppt0: ['#3f8fe0', 'gel', .6], heat: 1, ves: 'tube'})});
X('CH3CHO', 'CuOH2', {eq: 'CH3CHO + 2Cu(OH)2 ->[t°] CH3COOH + Cu2O! + 2H2O', ty: 'Keyfiyyət reaksiyası', obs: 'Göy çöküntü aldehidlə qızdırılanda əvvəl saralır, sonra kərpici-qırmızı mis(I) oksidə çevrilir. Aldehid sirkə turşusuna oksidləşir.', vis: W(['#3f8fe0', .16], pour(), [{k: 'pptoff', t0: 3.4, d: 2}, col('#d9b02a', .7, 3.4, 1.8), col('#b8421c', .5, 5.6, 2), ppt('#b8421c', 'fine', .75, 5.6, 3), steam(3, 10, .5)], {ppt0: ['#3f8fe0', 'gel', .6], heat: 1, ves: 'tube'})});
X('CH3CHO', 'Tollens', {eq: 'CH3CHO + 2[Ag(NH3)2]OH ->[t°] CH3COONH4 + 2Ag! + 3NH3 + H2O', ty: 'Keyfiyyət reaksiyası', obs: 'Bu, "gümüş güzgü" reaksiyasıdır: zəif qızdırılanda kolbanın divarı parlaq gümüş təbəqəsi ilə örtülür. Aldehidləri belə tanıyırlar.', vis: W(null, pour(), [mirror(2.6, 6), steam(2.4, 9, .4)], {heat: 1, ves: 'flask'})});
X('qlukoza', 'Tollens', {eq: 'C6H12O6 + 2[Ag(NH3)2]OH ->[t°] CH2OH(CHOH)4COONH4 + 2Ag! + 3NH3 + H2O', ty: 'Keyfiyyət reaksiyası', obs: 'Qlükoza da "gümüş güzgü" verir, çünki molekulunda aldehid qrupu var. Yolka oyuncaqlarını və güzgüləri bu reaksiya ilə gümüşləyirlər.', vis: W(null, pour(), [mirror(2.6, 6), steam(2.4, 9, .4)], {heat: 1, ves: 'flask'})});
NOX('saxaroza', 'Tollens', 'Saxaroza "gümüş güzgü" reaksiyası vermir: molekulunda sərbəst aldehid qrupu yoxdur. Qlükozadan bununla fərqlənir.');
X('nisasta', 'I2aq', {eq: null, eqt: 'nişasta + I2 → göy kompleks', ty: 'Keyfiyyət reaksiyası', obs: 'Nişasta kleysterinə bir damcı yod məhlulu düşən kimi tünd göy rəng yaranır. Qızdırılanda rəng itir, soyuyanda qayıdır. Kartofda, çörəkdə nişastanı belə tapırlar.', vis: W(['#f2f0e8', .25], drp(IOD), [col('#1a1f6a', .88, 1.8, 2.2)])});
X('nisasta', 'I', {eq: null, eqt: 'nişasta + I2 → göy kompleks', ty: 'Keyfiyyət reaksiyası', obs: 'Yod nişasta ilə tünd göy rəngli birləşmə əmələ gətirir.', vis: W(['#f2f0e8', .25], sol('crystal', '#3a2440', {n: 3}), [col('#1a1f6a', .88, 1.8, 3)])});
X('zulal', 'CuOH2', {eq: null, eqt: 'zülal + Cu(OH)2 → bənövşəyi rəng', ty: 'Keyfiyyət reaksiyası', obs: 'Bu, biuret reaksiyasıdır: qələvi mühitdə zülal mis(II) hidroksidlə bənövşəyi rəng verir. Rəngi zülaldakı peptid rabitələri yaradır.', vis: W(['#f1edd6', .22], pour('#3f8fe0', .4), [col('#7a3fc2', .75, 1.8, 3)])});
X('zulal', 'CuSO4', {eq: null, eqt: 'zülal + Cu²⁺ → denaturasiya', ty: 'Denaturasiya', obs: 'Ağır metal duzları zülalı geri dönməz şəkildə çökdürür: məhlulda ağ-mavi lopalar yaranır. Ağır metallarla zəhərlənmədə ona görə süd və ya yumurta ağı içirirlər.', vis: W(['#f1edd6', .22], pour(CUB, .5), [ppt('#cfe0ea', 'curdy', .8, 1.8, 4)])});
X('zulal', 'HNO3q', {eq: null, eqt: 'zülal + HNO3 → sarı rəng', ty: 'Keyfiyyət reaksiyası', obs: 'Bu, ksantoprotein reaksiyasıdır: qatı nitrat turşusu zülalı çökdürür və qızdırılanda çöküntü saralır. Dəriyə nitrat turşusu düşəndə sarı ləkə qalmasının səbəbi budur.', vis: W(['#f1edd6', .22], pour('#eadf9a', .14), [ppt(WHT, 'curdy', .8, 1.8, 2.5), {k: 'pptcol', to: '#e8c832', t0: 4.5, d: 3}], {heat: 1, ves: 'tube'})});
X('zulal', 'C2H5OH', {eq: null, eqt: 'zülal + spirt → denaturasiya', ty: 'Denaturasiya', obs: 'Spirt zülalı çökdürür: şəffaf məhlul ağarıb bulanır. Spirtin mikrobları öldürməsi də onların zülalını pozmasına görədir.', vis: W(['#f1edd6', .22], pour(), [ppt(WHT, 'curdy', .7, 1.8, 4)])});
X('fenol', 'FeCl3', {eq: null, eqt: 'fenol + FeCl3 → bənövşəyi kompleks', ty: 'Keyfiyyət reaksiyası', obs: 'Fenol məhluluna bir neçə damcı dəmir(III) xlorid töküləndə bənövşəyi rəng yaranır. Fenolu bu reaksiya ilə tanıyırlar.', vis: W(null, drp(FE3), [col('#5a2a8a', .8, 1.8, 2.4)])});
X('fenol', 'Br2aq', {eq: 'C6H5OH + 3Br2 -> C6H2Br3OH! + 3HBr', ty: 'Əvəzetmə', obs: 'Bromlu su fenol məhluluna töküləndə rəngsizləşir və ağ çöküntü, 2,4,6-tribromfenol əmələ gəlir. Benzoldan fərqli olaraq fenol bromla katalizatorsuz reaksiyaya girir.', vis: W(null, pour(BRW, .5), [col('#ffffff', 0, 1.9, 2), ppt(WHT, 'curdy', .75, 1.9, 4)])});
X('fenol', 'NaOH', {eq: 'C6H5OH + NaOH -> C6H5ONa + H2O', ty: 'Neytrallaşma', obs: 'Fenolun bulanıq emulsiyası qələvi əlavə olunanda şəffaflaşır: suda yaxşı həll olan natrium fenolyat alınır. Fenol zəif turşu xassəsi göstərir.', vis: W(['#f2f0ea', .5], pour(), [col('#ffffff', 0, 1.8, 3)])});
X('fenol', 'Na', {eq: '2C6H5OH + 2Na -> 2C6H5ONa + H2^', ty: 'Əvəzetmə', obs: 'Natrium ərimiş fenolla reaksiyaya girir, hidrogen ayrılır.', vis: W(['#f0e6dc', .3], sol('ball', SILV), [bub(16, 1.6, 9, 'solid', .8), dis(.1, 2, 8)], {heat: 1, ves: 'tube'})});
X('sabun', 'CaCl2', {eq: '2C17H35COONa + CaCl2 -> (C17H35COO)2Ca! + 2NaCl', ty: 'Mübadilə', obs: 'Sabun məhluluna kalsium duzu töküləndə ağ lopalar çökür. Codluğu yüksək olan suda sabunun köpüklənməməsinin səbəbi budur.', vis: W(['#eef0ea', .2], pour(), [ppt(WHT, 'curdy', .8, 1.8, 4)])});
X('sabun', 'HCl', {eq: 'C17H35COONa + HCl -> C17H35COOH! + NaCl', ty: 'Mübadilə', obs: 'Güclü turşu sabundan zəif stearin turşusunu sıxışdırıb çıxarır: o, ağ lopalar şəklində üzə qalxır.', vis: W(['#eef0ea', .2], pour(), [ppt(WHT, 'curdy', .5, 1.8, 3), layer(WHT, .85, .1, 3, 4)])});
X('C2H2', 'H2O', {eq: 'C2H2 + H2O ->[Hg{2+},_H{+}] CH3CHO', ty: 'Birləşmə', sp: 1, obs: 'Asetilen civə duzları iştirakında su ilə birləşib sirkə aldehidi verir. Bu, Kuçerov reaksiyasıdır.', vis: W(null, gasin(), [bub(9, 1.3, 9, 'tip')], {heat: 1})});
X('C2H4', 'H2O', {eq: 'C2H4 + H2O ->[H3PO4,_t°] C2H5OH', ty: 'Birləşmə', sp: 1, obs: 'Adi şəraitdə getmir. Sənayedə etilen katalizator üzərində su buxarı ilə birləşir və etanol alınır.', vis: W(null, gasin(), [bub(9, 1.3, 9, 'tip')], {heat: 1})});
X('C2H4', 'H', {eq: 'C2H4 + H2 ->[Ni,_t°] C2H6', ty: 'Birləşmə', sp: 1, obs: 'Etilen nikel katalizator üzərində hidrogeni birləşdirib etana çevrilir. Gözlə görünən dəyişiklik olmur.', vis: J(null, [glow('#ff7a2a', 2, 8, .8, 'mid')], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}, burner: 1})});

// daha çox metal: oksigen, halogenlər, kükürd, hidrogen, su
const GOX = {Be: ['BeO', WHT], Cr: ['Cr2O3', '#3f6f3a'], Mn: ['Mn3O4', '#2a2622'], Ni: ['NiO', '#5a6a52'], Co: ['Co3O4', '#1e1e22'], Sn: ['SnO2', WHT], Pb: ['PbO', '#e0b83a']};
Object.keys(GOX).forEach(m => X(m, 'O', {eq: mkEq([m, 'O2'], [GOX[m][0]], '->[t°]'), ty: 'Birləşmə', obs: EL[m].n + ' havada güclü qızdırılanda oksidləşir: səthi ' + (GOX[m][1] === WHT ? 'ağ' : m === 'Pb' ? 'sarı' : m === 'Cr' ? 'yaşıl' : 'tünd') + ' oksid təbəqəsi ilə örtülür.', vis: J([LOOK[m][2], LOOK[m][1]], [glow('#ff6a2a', 1.6, 7, .6), scol(GOX[m][1], 2.2, 5)], {jar: false, burner: 1})}));
const GHAL = {Cl: {Be: 'BeCl2', Cr: 'CrCl3', Mn: 'MnCl2', Ni: 'NiCl2', Co: 'CoCl2', Sn: 'SnCl4', Pb: 'PbCl2', Ag: 'AgCl', Hg: 'HgCl2', Au: 'AuCl3'}, Br: {Cr: 'CrBr3', Mn: 'MnBr2', Ni: 'NiBr2', Co: 'CoBr2', Sn: 'SnBr4', Pb: 'PbBr2', Ag: 'AgBr', Hg: 'HgBr2'}, I: {Pb: 'PbI2', Ag: 'AgI', Hg: 'HgI2', Sn: 'SnI4'}};
Object.keys(GHAL).forEach(x => Object.keys(GHAL[x]).forEach(m => { if (DB[key(m, x)]) return; const L = LOOK[m] || ['s', '#b9bdc2', 'granule'];
  X(m, x, {eq: mkEq([m, x + '2'], [GHAL[x][m]], '->[t°]'), ty: 'Birləşmə', obs: 'Qızdırılmış ' + EL[m].n.toLowerCase() + ' ' + HAL[x][0] + ' buxarı ilə birləşir və ' + EL[m].n.toLowerCase() + ' ' + HAL[x][3] + ' əmələ gətirir.', vis: J([L[2] === 'drop' ? 'drop' : L[2], L[1]], [glow('#ff8a2a', 1.6, 7, .8), smoke('#ffffff', .8, 2.4, 9), gasfill('#ffffff', .2, 3, 5), scol(m === 'Hg' && x === 'I' ? '#d9301e' : '#d9d6cc', 3, 4)], {gas: {c: HAL[x][1], a: HAL[x][2]}})}); }));
const GSUL = {Be: 'BeS', Cr: 'Cr2S3', Mn: 'MnS', Ni: 'NiS', Co: 'CoS', Sn: 'SnS'};
Object.keys(GSUL).forEach(m => X(m, 'S', {eq: mkEq([m, 'S'], [GSUL[m]], '->[t°]'), ty: 'Birləşmə', obs: EL[m].n + ' tozu kükürdlə qızdırılanda közərərək reaksiyaya girir və sulfid əmələ gətirir.', vis: T([LOOK[m][1], '#e6cf3a'], [glow('#ff5a1a', 2.2, 7, 1), smoke('#e9e4b0', .4, 2.6, 7, 'mouth'), scol('#2a2a2c', 3.2, 4)])}));
['Be', 'Cr', 'Mn', 'Co', 'Ni', 'Sn'].forEach(m => { NOX(m, 'H', EL[m].n + ' hidrogenlə birbaşa birləşmə əmələ gətirmir.'); NOX(m, 'H2O', EL[m].n + ' adi şəraitdə su ilə reaksiyaya girmir: səthi oksid təbəqəsi ilə qorunur.'); });
X('CO', 'O', {eq: '2CO + O2 ->[t°] 2CO2', ty: 'Yanma', obs: 'Dəm qazı açıq mavi alovla yanır və karbon qazına çevrilir. Sobada kömürün üzərindəki mavi alov budur.', vis: J(['jet', '#ffffff'], [flame('#5a9dff', 1.5, 9.5, 1), glow('#5a9dff', 1.5, 9.5, .9)], {gas: {c: '#ffffff', a: .03}, jar: false})});
X('NO', 'O', {eq: '2NO + O2 -> 2NO2', ty: 'Birləşmə', obs: 'Rəngsiz azot(II) oksid hava ilə təmasda dərhal qonurlaşır: qonur azot(IV) oksid əmələ gəlir.', vis: J(null, [gasfill(NO2, .5, 1.6, 3)], {gas: {c: '#ffffff', a: .03}, gas2: {c: '#ffffff', a: .03}})});
X('NO2', 'H2O', {eq: '3NO2 + H2O -> 2HNO3 + NO^', ty: 'Oksidləşmə-reduksiya', obs: 'Qonur qaz suda həll olur və nitrat turşusu əmələ gətirir: lakmus qırmızı rəngə boyanır. Turşu yağışlarının bir səbəbi budur.', vis: W(['#7a4fb0', .4], gasin(NO2), [bub(10, 1.3, 9, 'tip'), col('#d8323c', .45, 2.2, 4)])});
X('NO2', 'NaOH', {eq: '2NO2 + 2NaOH -> NaNO2 + NaNO3 + H2O', ty: 'Oksidləşmə-reduksiya', obs: 'Qonur qaz qələvi məhlulunda udulur və eyni vaxtda iki duz, nitrit və nitrat əmələ gəlir. Fenolftaleinin rəngi solur.', vis: W([PINK, .45], gasin(NO2), [bub(10, 1.3, 9, 'tip'), col(PINK, .15, 2, 6)])});
X('SiO2', 'C', {eq: 'SiO2 + 2C ->[1900 °C] Si + 2CO^', ty: 'Əvəzetmə', sp: 1, obs: 'Qum kömürlə elektrik sobasında əridiləndə silisium alınır. Kompüter çipləri üçün silisiumun ilkin mənbəyi budur.', vis: T(['#d9cfae', '#1d1d1f'], [glow('#ffb060', 2, 9, 1.6), scol('#5b6168', 4, 4)])});
X('SiO2', 'Mg', {eq: 'SiO2 + 2Mg ->[t°] 2MgO + Si', ty: 'Əvəzetmə', obs: 'Maqnezium tozu qumla qızdırılanda parlaq işıqla alışır: silisium və ağ maqnezium oksid alınır.', vis: T(['#d9cfae', '#c4c8cc'], [flash(2.6, '#ffffff', .9), glow('#fff0c0', 2.4, 6, 1.5), scol('#8a8f90', 3, 4)])});
X('Al4C3', 'H2O', {eq: 'Al4C3 + 12H2O -> 4Al(OH)3! + 3CH4^', ty: 'Mübadilə', obs: 'Alüminium karbid su ilə parçalanır: metan qazı ayrılır və ağ həlməşikli alüminium hidroksid çökür.', vis: W(null, sol('heap', '#b8a23a'), [bub(26, 1.6, 10), ppt(WHT, 'gel', .6, 2, 6), dis(.2, 2, 8)])});
X('Al4C3', 'HCl', {eq: 'Al4C3 + 12HCl -> 4AlCl3 + 3CH4^', ty: 'Mübadilə', obs: 'Alüminium karbid turşuda həll olur və metan qazı ayrılır.', vis: W(null, sol('heap', '#b8a23a'), [bub(34, 1.6, 9), dis(0, 2, 7)])});

/* ---------- ümumi qaydalar ---------- */
const ACT = ['Li', 'Cs', 'Rb', 'K', 'Ba', 'Sr', 'Ca', 'Na', 'Mg', 'Be', 'Al', 'Mn', 'Zn', 'Cr', 'Fe', 'Co', 'Ni', 'Sn', 'Pb', 'H', 'Cu', 'Hg', 'Ag', 'Pt', 'Au'];
const MCAT = {Fe: 'Fe2', Fe2: 'Fe2', Fe3: 'Fe3', Cr: 'Cr2'}, WATERM = ['Li', 'Cs', 'Rb', 'K', 'Ba', 'Sr', 'Ca', 'Na'];
const DEPC = {Cu: '#b5532a', Ag: '#e3e6e8', Pb: '#6d7278', Fe: '#4a4d50', Zn: '#9aa3a8', Hg: '#c8ccd0', Ni: '#8a8f86', Co: '#7f858c', Sn: '#b9bdc0'};
const INDI = {lak: {a: ['qırmızı', '#d8323c'], aw: ['qırmızımtıl', '#c2476a'], n: ['bənövşəyi', '#7a4fb0'], bw: ['göy', '#3a5fd0'], b: ['göy', '#2f55cf']}, ff: {a: ['rəngsiz', 0], aw: ['rəngsiz', 0], n: ['rəngsiz', 0], bw: ['açıq çəhrayı', '#f0a0c4'], b: ['moruğu', PINK]},
  mo: {a: ['qırmızı', '#e0323c'], aw: ['narıncı', '#f08a1c'], n: ['narıncı', '#f08a1c'], bw: ['sarı', '#f2cf2a'], b: ['sarı', '#f2cf2a']}};
function indicator(i, r) {
  if (r.ind) return unk('İki indikatoru bir-biri ilə qarışdırmağın mənası yoxdur. İndikatoru turşu, qələvi və ya duz məhluluna damızdır.');
  if (!r.ph || r.st === 's' && !r.sols || r.st === 'g' && r.id !== 'CO2' && r.id !== 'SO2' && r.id !== 'NH3') return unk('İndikator yalnız məhlulun mühitini göstərir. Onu turşu, qələvi və ya duz məhluluna damızdır.');
  const [nm, c] = INDI[i.id][r.ph], med = {a: 'turşdur', aw: 'zəif turşdur', n: 'neytraldır', bw: 'zəif qələvidir', b: 'qələvidir'}[r.ph];
  const hyd = r.g === 'dz' && r.ph !== 'n' ? ' Duz hidroliz olunduğu üçün məhlulu neytral deyil.' : '';
  return yes({eq: null, eqt: i.n.toLowerCase() + ' + ' + r.f.replace(/\((q|d)\)/, '') + ' → ' + nm, ty: 'İndikator', nochem: 1, obs: r.n + ' məhlulunda mühit ' + med + ': ' + i.n.toLowerCase() + ' ' + (c ? nm + ' rəng alır.' : 'rəngsiz qalır.') + hyd +
    (r.id === 'Cl' ? '' : ''), vis: W(r.c ? [r.c, r.a || .4] : null, drp(i.c || '#ffffff'), c ? [col(c, .5, 1.8, 2.4)] : (i.c ? [col(i.c, .35, 1.8, 2.4)] : []))});
}
function metalAcid(m, ac) {
  const i = ACT.indexOf(m.id), an = ac.ions[1], nm = m.n;
  if (i < 0) return null;
  if (i > ACT.indexOf('H')) return no(nm + ' aktivlik sırasında hidrogendən sonra gəlir, ona görə turşudan hidrogeni sıxışdırıb çıxara bilmir.');
  const cat = MCAT[m.id] || m.id, pr = salt(cat, an);
  if (m.id === 'Pb') return no('Qurğuşun aktivlik sırasında hidrogendən əvvəl gəlsə də, reaksiya praktiki olaraq getmir: səthində həll olmayan duz təbəqəsi yaranır və metalı turşudan ayırır.');
  const lv = ({Li: 3, Cs: 4, Rb: 4, K: 4, Ba: 3, Sr: 3, Ca: 3, Na: 4, Mg: 3, Al: 2, Zn: 2, Mn: 2}[m.id] || 1) - (ac.weak ? 1 : 0), wild = lv >= 4;
  const ins = INS[cat] && INS[cat][an] && !INS[cat][an].m;
  return yes({eq: mkEq([m.f, ac.f], [pr, 'H2^']), ty: 'Əvəzetmə', warn: wild ? 'Reaksiya partlayışla gedir, məktəbdə aparılmır.' : '',
    obs: nm + ' turşuda ' + (lv >= 3 ? 'şiddətlə' : lv === 2 ? 'sürətlə' : 'yavaş-yavaş') + ' həll olur, səthindən hidrogen qabarcıqları ayrılır.' + (m.id === 'Fe' ? ' Məhlul açıq yaşıl rəng alır.' : '') + (ins ? ' Əmələ gələn duz suda həll olmadığı üçün metalın üzərində çökür.' : '') + (m.id === 'Al' ? ' Reaksiya oksid təbəqəsi həll olandan sonra sürətlənir.' : ''),
    vis: W(liqOf(ac), sol(m.shape, m.c, {n: m.shape === 'granule' ? 3 : 1, float: wild}), [bub([0, 8, 22, 40, 70][Math.max(1, lv)], m.id === 'Al' ? 2.6 : 1.6, 10), dis(lv >= 3 ? 0 : lv === 2 ? .35 : .7, 2, 8)].concat(CAT[cat].c ? [col(CAT[cat].c, .35, 2.4, 7)] : [], wild ? [flame(m.fl || '#ffc21a', 1.5, 5, 1), flash(2.2, m.fl || '#fff', .8), skate(1.2, 6, 1.6)] : [], lv >= 3 ? [steam(2, 9, .6)] : []))});
}
function metalSalt(m, s) {
  const ca = s.ions[0], an = s.ions[1], sm = CAT[ca].s || ca, i = ACT.indexOf(m.id), j = ACT.indexOf(sm);
  if (i < 0 || j < 0 || ca === 'H' || ca === 'NH4') return null;
  if (WATERM.includes(m.id)) { const w = DB[key(m.id, 'H2O')]; return w ? Object.assign({}, w, {obs: m.n + ' duzun metalını sıxışdırıb çıxarmır, çünki əvvəlcə məhluldakı su ilə reaksiyaya girir. ' + (INS[ca] && INS[ca].OH ? 'Yaranan qələvi isə duzla reaksiyaya girib ' + salt(ca, 'OH').replace(/(\d)/g, '$1') + ' çöküntüsü verir.' : 'Hidrogen ayrılır və məhlul qələvi olur.')}) : null; }
  if (sm === m.id) return no('Duzun tərkibindəki metal elə ' + m.n.toLowerCase() + 'in özüdür, ona görə dəyişiklik olmur.');
  if (ca === 'Fe3' || ca === 'Cr' || m.id === 'Cr' || m.id === 'Be') return null;
  if (i < j && j < ACT.indexOf('Zn')) return null;
  if (i > j) return no(m.n + ' aktivlik sırasında ' + EL[sm].n.toLowerCase() + 'dən sonra gəlir, yəni ondan az aktivdir. Ona görə onu duzunun məhlulundan sıxışdırıb çıxara bilmir.');
  const cat = MCAT[m.id] || m.id, pr = salt(cat, an);
  if (INS[cat] && INS[cat][an] && !INS[cat][an].m) return no('Reaksiya başlayan kimi dayanır: metalın səthində suda həll olmayan duz təbəqəsi yaranır.');
  const dc = DEPC[sm] || '#888';
  return yes({eq: mkEq([m.f, s.f], [pr, sm + '!']), ty: 'Əvəzetmə', obs: m.n + ' ' + EL[sm].n.toLowerCase() + 'dən aktivdir və onu duzundan sıxışdırıb çıxarır: metalın üzərində ' + (sm === 'Cu' ? 'qırmızı mis' : sm === 'Ag' ? 'parlaq gümüş kristalları' : sm === 'Pb' ? 'boz qurğuşun kristalları' : sm === 'Fe' ? 'tünd boz dəmir' : EL[sm].n.toLowerCase()) + ' təbəqəsi yaranır.' + (CAT[ca].c ? ' Məhlulun rəngi solur.' : '') + (m.id === 'Al' ? ' Alüminiumda reaksiya oksid təbəqəsinə görə gec başlayır.' : ''),
    vis: W(liqOf(s), sol(m.shape, m.c, {n: m.shape === 'granule' ? 3 : 1}), [coat(dc, m.id === 'Al' ? 3 : 1.8, 7, sm === 'Ag' || sm === 'Pb' ? 1 : 0)].concat(CAT[ca].c || CAT[cat].c ? [col(CAT[cat].c || '#ffffff', CAT[cat].c ? .4 : 0, 2.6, 8)] : []))});
}
function ionx(A, B) {
  if (EXC[key(A.id, B.id)]) return null;
  let [c1, a1] = A.ions, [c2, a2] = B.ions;
  for (const [x, y] of [[A, B], [B, A]]) if (x.ins && AMPH[x.ions[0]] && (x.ions[1] === 'OH' || x.ions[1] === 'O') && (y.id === 'NaOH' || y.id === 'KOH')) {     // amfoter hidroksid və ya oksid + qələvi
    if (x.id === 'Cr2O3') return no('Xrom(III) oksid kimyəvi cəhətdən çox davamlıdır: qələvi məhlulu ilə reaksiyaya girmir, yalnız qələvi ilə birlikdə əridiləndə xromit əmələ gətirir.');
    const eq = mkEq(x.ions[1] === 'O' ? [x.f, y.f, 'H2O'] : [x.f, y.f], [AMPH[x.ions[0]][y.id === 'NaOH' ? 0 : 1]]); if (!eq) return null;
    return yes({eq, ty: 'Kompleks əmələgəlmə', obs: x.n + ' amfoterdir: yalnız turşularda yox, qələvi məhlulunda da həll olur. Şəffaf kompleks duz məhlulu alınır.', vis: W(null, sol(x.shape || 'heap', x.c), [dis(0, 2, 6)])}); }
  if (A.ins && B.ins) return no('Hər iki maddə suda həll olmur, ona görə aralarında ion mübadiləsi getmir.');
  if ((a1 === 'HCO3' && a2 === 'OH') || (a2 === 'HCO3' && a1 === 'OH')) return null;
  if (c1 === c2 || a1 === a2) return no((a1 === 'O' || a2 === 'O') ? 'Bu maddələr bir-biri ilə reaksiyaya girmir.' : 'Hər iki maddədə eyni ion var, ona görə mübadilə nəticəsində yeni maddə alınmır.');
  const acid = c1 === 'H' ? A : c2 === 'H' ? B : null, oth = acid === A ? B : A, saltAcid = !!acid && oth.ions[1] !== 'OH' && oth.ions[1] !== 'O', disp = saltAcid && rk(acid.ions[1]) < rk(oth.ions[1]);
  if (A.ins || B.ins) { const s = A.ins ? A : B, o = A.ins ? B : A, sa = s.ions[1];
    if (s.ions[0] === 'H') { if (!(o.ions[1] === 'OH' && !o.ins && !o.weak)) return no(s.n + ' suda həll olmur və yalnız qələvilərlə reaksiyaya girir.'); }
    else if (o.ions[0] !== 'H') return no(s.n + ' suda həll olmur, məhlulda ionları yoxdur. Həll olmayan maddə yalnız turşularla reaksiyaya girir.');
    else if (sa === 'OH' || sa === 'O') { if (rk(o.ions[1]) >= 5) return null; }
    else if (sa === 'S' && ACIDFAST[CAT[s.ions[0]].s || s.ions[0]]) return no(s.n + ' turşularda həll olmur: bu, ən az həll olan sulfidlərdən biridir.');
    else if (!disp) return no(s.n + ' bu turşuda həll olmur. Həll olmayan duzu yalnız onu əmələ gətirən turşudan güclü turşu parçalaya bilər.'); }
  if ((a1 === 'O' && c2 !== 'H') || (a2 === 'O' && c1 !== 'H')) return null;
  const pairs = [[c1, a2], [c2, a1]], re = [A.f, B.f], pr = [], fx = [], gone = {}, notes = [], ionl = []; let drive = 0, ty = 'Mübadilə';
  for (const [c, a] of pairs) {
    if (BAD[c] && BAD[c][a]) return null;
    if (c === 'H' && saltAcid && !disp) { pr.push(salt('H', a)); continue; }                                   // zəif turşu güclünü sıxışdıra bilmir
    if (c === 'H' && (a === 'OH' || a === 'O')) { pr.push('H2O'); drive = 1; gone.H = gone[a] = 1; if (a === 'OH') ty = 'Neytrallaşma'; notes.push('w'); continue; }
    if (c === 'H' && (a === 'CO3' || a === 'HCO3')) { pr.push('H2O', 'CO2^'); drive = 1; gone.H = gone[a] = 1; notes.push('co2'); continue; }
    if (c === 'H' && a === 'SO3') { pr.push('H2O', 'SO2^'); drive = 1; gone.H = gone[a] = 1; notes.push('so2'); continue; }
    if (c === 'H' && a === 'S') { pr.push('H2S^'); drive = 1; gone.H = gone.S = 1; notes.push('h2s'); continue; }
    if (c === 'H' && a === 'PO4') { pr.push('H3PO4'); drive = 1; notes.push('ph'); continue; }
    if (c === 'NH4' && a === 'OH') { pr.push('NH3·H2O'); drive = 1; gone.NH4 = gone.OH = 1; notes.push('nh3'); continue; }
    if (c === 'H' && AN[a].wk) { pr.push(salt('H', a) + (AN[a].sld ? '!' : '')); drive = 1; notes.push(AN[a].sld ? 'fat' : 'ac'); if (AN[a].sld) fx.push(ppt(WHT, 'curdy', .6)); continue; }
    if (a === 'HCO3' && !['H', 'Na', 'K', 'NH4', 'Ca', 'Ba', 'Mg', 'Fe3', 'Al', 'Cr'].includes(c)) return null;
    if ((c === 'Fe3' || c === 'Al' || c === 'Cr') && (a === 'CO3' || a === 'HCO3')) { if (a === 'CO3' && !re.includes('H2O')) re.push('H2O'); pr.push(salt(c, 'OH') + '!', 'CO2^'); drive = 1; gone[c] = gone[a] = 1; notes.push('hyd'); fx.push(ppt(INS[c].OH.c, 'gel', .7), bub(22, 1.7, 7, 'liq')); continue; }
    if (c === 'Ag' && a === 'OH') { pr.push('Ag2O!', 'H2O'); drive = 1; gone.Ag = gone.OH = 1; notes.push('ag2o'); fx.push(ppt('#4a3a2a', 'fine', .6)); continue; }
    const ins = INS[c] && INS[c][a], okp = !saltAcid || rk(acid.ions[1]) === 0 || (a === 'S' && ACIDFAST[CAT[c].s || c]) || disp;
    if (ins && okp) { pr.push(salt(c, a) + '!'); drive = 1; gone[c] = gone[a] = 1; notes.push({p: ins, f: salt(c, a)}); fx.push(ppt(ins.c, ins.tex, ins.m ? .3 : .75)); const io = ION(c, a), l = CAT[c].q * AN[a].q / gcd(CAT[c].q, AN[a].q), nc = l / CAT[c].q, na = l / AN[a].q; if (c !== 'H') ionl.push((nc > 1 ? nc : '') + io[0] + ' + ' + (na > 1 ? na : '') + io[1] + ' -> ' + salt(c, a) + '!'); continue; }
    if (ins && !okp) return no('Reaksiya getmir: ' + (acid.weak ? 'zəif turşu güclü turşunu duzundan sıxışdırıb çıxara bilmir, əmələ gələ biləcək çöküntü isə güclü turşuda həll olur.' : 'əmələ gələ biləcək çöküntü turşuda həll olur.'));
    pr.push(salt(c, a));
  }
  if (!drive) return no(saltAcid ? 'Reaksiya getmir: turşu yalnız özündən zəif turşunun duzunu parçalaya bilir, burada isə çöküntü, qaz və ya zəif turşu əmələ gəlmir.' : 'Çöküntü, qaz və ya su əmələ gəlmir: bütün ionlar məhlulda olduğu kimi qalır. İon mübadiləsi reaksiyası yalnız bu üç şərtdən biri ödənəndə axıra qədər gedir.');
  const rank = f => /\^$/.test(f) ? 2 : f === 'H2O' ? 1 : 0, up = [...new Set(pr)].sort((x, y) => rank(x) - rank(y)), eq = mkEq(re, up); if (!eq) return null;
  const obs = [], sld = A.st === 's' ? A : B.st === 's' ? B : null, liq = sld ? (sld === A ? B : A) : null; let base = A, add = B;
  const colOf = () => { const left = [c1, c2].filter(c => !gone[c] && CAT[c].c); return left.length ? CAT[left[0]].c : null; };
  const cnm = c => c === CUB ? 'mavi' : c === FE3 ? 'sarı-qonur' : c === FE2 ? 'açıq yaşıl' : c === CAT.Ni.c || c === CAT.Cr.c ? 'yaşıl' : c === CAT.Co.c ? 'çəhrayı' : 'rəngli';
  for (const n of notes) {
    if (n === 'w') obs.push(sld ? sld.n + (acid ? ' turşuda' : ' qələvidə') + ' həll olur' + (colOf() ? ' və məhlul ' + cnm(colOf()) + ' rəng alır.' : '.') : A.weak || B.weak ? 'Turşu ilə əsas bir-birini neytrallaşdırır, duz və su əmələ gəlir.' : 'Turşu ilə qələvi bir-birini neytrallaşdırır, duz və su əmələ gəlir, məhlul isinir. Dəyişikliyi görmək üçün qələviyə fenolftalein damızdırılıb: moruğu rəng itir.');
    else if (n === 'co2') obs.push((sld ? sld.n + ' turşuda fışıltı ilə həll olur' : 'Məhlul fışıldayıb köpüklənir') + ': karbon qazı ayrılır. Yaranan karbonat turşusu davamsızdır və dərhal su ilə karbon qazına parçalanır.');
    else if (n === 'so2') obs.push((sld ? sld.n + ' turşuda həll olur' : 'Məhluldan qaz ayrılır') + ': kəskin iyli kükürd qazı çıxır. Sulfit turşusu davamsızdır və dərhal parçalanır.');
    else if (n === 'h2s') obs.push('Lax yumurta iyi verən zəhərli qaz, hidrogen sulfid ayrılır.');
    else if (n === 'ph') obs.push('Güclü turşu ondan zəif olan fosfat turşusunu duzundan sıxışdırıb çıxarır.' + (sld ? ' Bərk duz tədricən həll olur.' : ' Gözlə görünən dəyişiklik yoxdur.'));
    else if (n === 'nh3') obs.push('Ammonyak əmələ gəlir: məhluldan kəskin iy gəlir, qızdırılanda ayrılan qaz nəm lakmus kağızını göyərdir.');
    else if (n === 'ac') obs.push('Güclü turşu zəif üzvi turşunu duzundan sıxışdırıb çıxarır. Gözlə görünən dəyişiklik demək olar yoxdur, yalnız turşunun iyi hiss olunur.');
    else if (n === 'fat') obs.push('Güclü turşu suda həll olmayan ali yağ turşusunu duzundan sıxışdırıb çıxarır: o, ağ lopalar şəklində ayrılır.');
    else if (n === 'hyd') obs.push('Bu duzun karbonatı mövcud deyil: su ilə tam parçalanır. Ona görə həm həlməşikli çöküntü yaranır, həm də karbon qazı ayrılır.');
    else if (n === 'ag2o') obs.push('Gümüş hidroksid davamsızdır və yaranan kimi qonur gümüş oksidə parçalanır.');
    else if (n.p) obs.push((n.p.m ? 'Az həll olan ' + n.p.nm : n.p.nm.charAt(0).toUpperCase() + n.p.nm.slice(1)) + ' çöküntü əmələ gəlir' + (n.p.m ? ' (yalnız qatı məhlullarda nəzərə çarpır).' : '.') + (n.f === 'Fe(OH)2' || n.f === 'Mn(OH)2' ? ' Havada tədricən qonurlaşır.' : AMPH[(n.f.match(/^[A-Z][a-z]?/) || [''])[0]] && /\(OH\)/.test(n.f) && (A.id === 'NaOH' || B.id === 'NaOH' || A.id === 'KOH' || B.id === 'KOH') ? ' Qələvi artıq töküləndə çöküntü yenidən həll olur: bu hidroksid amfoterdir.' : n.f === 'BaSO4' ? ' O, turşularda da həll olmur.' : n.f === 'AgCl' ? ' İşıqda tədricən qaralır.' : n.f === 'H2SiO3' ? ' Bu, suda həll olmayan yeganə mineral turşudur.' : ''));
  }
  const fin = colOf(), gasy = notes.includes('co2') || notes.includes('h2s') || notes.includes('so2'); let vis;
  if (sld) vis = W(liqOf(liq), sol(sld.shape || 'heap', sld.c, {n: sld.shape === 'chunk' ? 2 : 1}), (gasy ? [bub(34, 1.6, 9, 'solid'), sld.shape === 'heap' ? foam('#f4f4f2', .3, 1.8, 3) : dis(.35, 2, 8)] : []).concat([dis(gasy ? .3 : 0, 2, 6)], fin ? [col(fin, .5, 2.2, 5)] : [], fx));
  else if (notes.includes('w') && !A.weak && !B.weak && fx.length === 0) { if (A.ions[0] === 'H') [base, add] = [B, A]; vis = W([PINK, .45], pour(add.c, add.a || .4), [col(fin || '#ffffff', fin ? .5 : 0, 1.8, 2.2), steam(2.4, 6, .3)]); }
  else { if (add.c && !base.c) [base, add] = [add, base]; vis = W(liqOf(base), pour(add.c, add.a || .4), fx.concat(gasy ? [bub(40, 1.7, 8, 'liq'), foam('#f6f6f4', .22, 1.8, 3)] : [], [col(fin || '#ffffff', fin ? .45 : 0, 1.9, 4)])); if (notes.includes('nh3')) vis.fx.push(steam(2.4, 8, .4)); }
  let ion = ionl.length === 1 && !A.weak && !B.weak ? ionl[0] : '';
  if (!ion && notes.length === 1) { if (notes[0] === 'w' && !sld && !A.weak && !B.weak) ion = 'H{+} + OH{-} -> H2O'; else if (notes[0] === 'co2' && !sld && !A.weak && !B.weak && (a1 === 'CO3' || a2 === 'CO3')) ion = '2H{+} + CO3{2-} -> H2O + CO2^'; }
  return yes({eq, ion, ty, obs: obs.join(' '), vis});
}
// qızdırma: hidroksidlər, karbonatlar, nitratlar
function heat(o) {
  if (!o.ions) return null; const [c, a] = o.ions, q = CAT[c] ? CAT[c].q : 1, cs = CAT[c] ? (CAT[c].s || c) : c, oxid = () => (c === 'Fe2' && a === 'NO3') ? 'Fe2O3' : salt(c, 'O'), oc = f => (R[fid(f)] || {}).c || '#d9d6cc';
  const mk = (pr, obs, fx) => { const eq = mkEq([o.f], pr, '->[t°]'); return eq ? yes({eq, ty: 'Parçalanma', obs, vis: T([o.c || WHT], fx)}) : null; };
  if (c === 'H' && a === 'SiO3') return mk(['SiO2', 'H2O'], 'Həlməşikli silikat turşusu qızdırılanda suyunu itirir və ağ silisium(IV) oksid tozuna çevrilir.', [scol('#f1efe6', 2.4, 4), drops(3), smoke('#ffffff', .2, 3, 7, 'mouth')]);
  if (a === 'OH') { if (c === 'Na' || c === 'K') return no(o.n + ' qızdırılanda parçalanmır, yalnız əriyir. Qələvi metalların hidroksidləri istiliyə çox davamlıdır.'); if (c === 'NH4' || c === 'Sr' || c === 'Ba' || o.st !== 's' && c !== 'Ca' && c !== 'Li') return null; const ox = oxid();
    return mk([ox, 'H2O'], o.n + ' qızdırılanda oksidə və suya parçalanır' + (oc(ox) !== o.c ? ': maddənin rəngi dəyişir, sınaq şüşəsinin divarında su damcıları yaranır.' : ', sınaq şüşəsinin divarında su damcıları yaranır.'), [scol(oc(ox), 2.4, 4), drops(3.4), smoke('#ffffff', .2, 3, 7, 'mouth')]); }
  if (a === 'CO3') { if (c === 'Na' || c === 'K') return no(o.n + ' qızdırılanda parçalanmır, yalnız əriyir. Qələvi metalların karbonatları istiliyə davamlıdır.');
    if (c === 'NH4') return mk(['NH3^', 'CO2^', 'H2O^'], 'Ammonium karbonat zəif qızdırılanda tamamilə qazlara parçalanır və iz qoymadan yoxa çıxır. Kəskin ammonyak iyi gəlir.', [smoke('#ffffff', .8, 2.4, 8, 'mouth'), {k: 'tdis', t0: 2.4, d: 6}]);
    if (c === 'Ag') return mk(['Ag', 'CO2^', 'O2^'], 'Gümüş karbonat qızdırılanda gümüşə qədər parçalanır: toz bozarır, qazlar ayrılır.', [scol('#c9cdd1', 2.4, 4), smoke('#ffffff', .25, 3, 8, 'mouth')]);
    const ox = oxid(); return mk([ox, 'CO2^'], o.n + ' qızdırılanda oksidə və karbon qazına parçalanır. Ayrılan qaz əhəng suyunu bulandırır.', [glow('#ff5a1a', 2, 8, .8), scol(oc(ox), 3, 4), smoke('#ffffff', .25, 3, 8, 'mouth')]); }
  if (a === 'NO3') { const brown = [smoke(NO2, 1.4, 2.6, 9, 'mouth'), {k: 'tgas', c: NO2, a: .4, t0: 2.6, d: 3}];
    if (c === 'NH4') return mk(['N2O^', 'H2O^'], 'Ammonium nitrat qızdırılanda "şənləndirici qaza" (N2O) və su buxarına parçalanır.', [smoke('#ffffff', .8, 2.4, 8, 'mouth'), {k: 'tdis', t0: 2.4, d: 6}]);
    if (['Na', 'K', 'Ca', 'Sr', 'Ba'].includes(c)) return mk([cs + (q > 1 ? '(NO2)' + q : 'NO2'), 'O2^'], 'Aktiv metalın nitratı qızdırılanda nitritə və oksigenə parçalanır: sınaq şüşəsinin ağzına tutulan közərən çöp alışır.', [scol('#f1efe0', 2.6, 4), flame('#ffb040', 4, 9, .6, 'mouth')]);
    if (c === 'Ag') return mk(['Ag', 'NO2^', 'O2^'], 'Gümüş nitrat qızdırılanda gümüşə qədər parçalanır: qonur qaz ayrılır, dibdə boz gümüş qalır.', brown.concat([scol('#c9cdd1', 3, 4)]));
    const ox = oxid(); return mk([ox, 'NO2^', 'O2^'], 'Nitrat qızdırılanda metal oksidinə, qonur azot(IV) oksidə və oksigenə parçalanır.', brown.concat([scol(oc(ox), 3, 4)])); }
  return null;
}
// oksidlərin ümumi xassələri
const REDH = {CuO: 1, FeO: 1, Fe2O3: 1, PbO: 1, NiO: 1, Ag2O: 1}, REDAL = {FeO: 1, Fe2O3: 1, CuO: 1, Cr2O3: 1, NiO: 1, PbO: 1, MnO: 1};
function oxides(a, b) {
  for (const [x, y] of [[a, b], [b, a]]) {
    if (x.ions && x.ions[1] === 'O') { const c = x.ions[0], m = CAT[c].s || c, mc = (LOOK[m] || [0, '#8a8f96'])[1];
      if (y.id === 'H2O') return WOX[x.id] ? yes({eq: mkEq([x.f, 'H2O'], [salt(c, 'OH')]), ty: 'Birləşmə', obs: x.n + ' su ilə şiddətlə birləşir və qələvi əmələ gətirir: məhlul qızır, fenolftalein moruğu rəngə boyanır.', vis: W(null, sol('heap', x.c), [dis(0, 1.8, 4), col(PINK, .45, 1.8, 3), steam(2, 7, .8)])}) : no(x.n + ' suda həll olmur və onunla reaksiyaya girmir. Su ilə yalnız qələvi və qələvi-torpaq metalların oksidləri birləşir.');
      if (y.id === 'H' || y.id === 'CO') return REDH[x.id] ? yes({eq: mkEq([x.f, y.f], [m, y.id === 'H' ? 'H2O' : 'CO2'], '->[t°]'), ty: 'Oksidləşmə-reduksiya', obs: (y.id === 'H' ? 'Hidrogen' : 'Dəm qazı') + ' qızdırılmış oksiddən oksigeni qoparır və təmiz ' + EL[m].n.toLowerCase() + ' alınır' + (y.id === 'H' ? ', borunun soyuq hissəsində su damcıları yaranır.' : '. Domna sobasında dəmir də belə alınır.'), vis: T([x.c], [glow('#ff5a1a', 2, 7, .7), scol(mc, 2.6, 5)].concat(y.id === 'H' ? [drops(4)] : []), {gasin: 1})}) : no(x.n + ' aktiv metalın oksididir: ' + (y.id === 'H' ? 'hidrogen' : 'dəm qazı') + ' onu reduksiya edə bilmir. Belə metalları ərintinin elektrolizi ilə alırlar.');
      if (y.id === 'C') { if (REDH[x.id]) return yes({eq: mkEq([x.f, 'C'], [m, 'CO2^'], '->[t°]'), ty: 'Əvəzetmə', obs: 'Oksid kömürlə güclü qızdırılanda metal sərbəst halda ayrılır, karbon qazı çıxır.', vis: T([x.c, '#1d1d1f'], [glow('#ff5a1a', 2, 8, 1), scol(mc, 3, 5), smoke('#ffffff', .25, 3, 8, 'mouth')])}); if (x.id === 'ZnO') return yes({eq: 'ZnO + C ->[t°] Zn + CO^', ty: 'Əvəzetmə', obs: 'Sink oksid kömürlə güclü qızdırılanda sinkə qədər reduksiya olunur. Sənayedə sinki belə alırlar.', vis: T([x.c, '#1d1d1f'], [glow('#ff5a1a', 2, 8, 1.1), scol(mc, 3.4, 4)])}); return null; }
      if (y.id === 'Al') return REDAL[x.id] ? yes({eq: mkEq([x.f, 'Al'], ['Al2O3', m], '->[t°]'), ty: 'Əvəzetmə', warn: 'Alüminotermiya çox yüksək temperatur verir, təhlükəlidir.', obs: 'Alüminium metalı oksidindən sıxışdırıb çıxarır: qarışıq parlaq işıq və qığılcımla alışır. Bu üsula alüminotermiya deyilir.', vis: T([x.c, '#c5c9cd'], [flash(2.4, '#fff3c0', .9), sparks('#ffd070', 90, 2.4, 7, 'mouth'), glow('#ffb040', 2.4, 8, 1.8), smoke('#ffffff', 1, 2.6, 9, 'mouth'), scol(mc, 4.5, 3)])}) : no(x.id === 'Al2O3' ? 'Alüminium öz oksidi ilə reaksiyaya girmir.' : 'Alüminium bu metaldan az aktivdir, ona görə onu oksidindən sıxışdırıb çıxara bilmir.');
      if (AOX[y.id]) { if (!(WOX[x.id] || x.id === 'MgO')) return null; const an = AOX[y.id]; if (BAD[c] && BAD[c][an]) return null; const hot = y.id === 'SiO2' || y.st === 's' && x.id === 'MgO', eq = mkEq([x.f, y.f], [salt(c, an)], hot ? '->[t°]' : '->'); if (!eq) return null;
        return yes({eq, ty: 'Birləşmə', obs: 'Əsasi oksid turşu oksidi ilə birləşib duz əmələ gətirir' + (hot ? ', amma yalnız birlikdə əridiləndə.' : '.') + (y.id === 'SiO2' ? ' Şüşə istehsalının əsasında bu reaksiya durur.' : ''), vis: y.st === 'g' ? J(['heap', x.c], [scol('#e9e6de', 3, 5)], {gas: {c: '#ffffff', a: .03}}) : T([x.c, y.c || WHT], [glow('#ff5a1a', 2, 8, 1), scol('#e4e1d8', 3.4, 4)])}); } }
    if (AOX[x.id]) { const an = AOX[x.id];
      if (y.id === 'H2O' && x.id !== 'CO2' && x.id !== 'SO2') return x.id === 'SiO2' ? no('Qum suda həll olmur və onunla reaksiyaya girmir. Silisium(IV) oksid suyla birləşməyən yeganə turşu oksididir.') : yes({eq: mkEq([x.f, 'H2O'], [salt('H', an)]), ty: 'Birləşmə', obs: x.n + ' suyu acgözlüklə udur və turşuya çevrilir: fışıltı eşidilir, məhlul qızır, lakmus qırmızı rəngə boyanır.', vis: W(['#7a4fb0', .4], sol(x.shape || 'heap', x.c), [dis(0, 1.8, 3), col('#d8323c', .45, 2, 3), steam(2, 7, 1)])});
      if (y.ions && y.ions[1] === 'OH' && !y.ins) { const c = y.ions[0]; if (BAD[c] && BAD[c][an]) return null; const ins = INS[c] && INS[c][an], hot = x.id === 'SiO2', eq = mkEq([y.f, x.f], [salt(c, an) + (ins ? '!' : ''), 'H2O'], hot ? '->[t°]' : '->'); if (!eq) return null;
        return yes({eq, ty: 'Mübadilə', obs: hot ? 'Qum qələvi ilə birlikdə əridiləndə silikat əmələ gətirir. Ona görə qələviləri şüşə tıxaclı qabda saxlamırlar.' : 'Turşu oksidi qələvi ilə reaksiyaya girib duz və su əmələ gətirir.' + (ins ? ' Duz suda həll olmadığı üçün ' + ins.nm + ' çöküntü yaranır.' : ' Fenolftaleinin moruğu rəngi solur.'),
          vis: hot ? T([x.c, WHT], [glow('#ff5a1a', 2, 8, 1), scol('#dfe6e2', 3.4, 4)]) : W(ins ? null : [PINK, .45], x.st === 'g' ? gasin(x.c) : sol(x.shape || 'heap', x.c), (x.st === 'g' ? [bub(10, 1.3, 9, 'tip')] : [dis(0, 1.8, 3)]).concat(ins ? [ppt(ins.c, ins.tex, .75, 1.9, 5)] : [col(PINK, .15, 2, 6)]))}); } }
    if ((x.id === 'CO' || x.id === 'NO') && (y.id === 'H2O' || y.ions && (y.ions[1] === 'OH' || y.ions[0] === 'H'))) return no(x.n + ' duz əmələ gətirməyən oksiddir: nə su, nə turşu, nə də qələvi ilə reaksiyaya girir.');
  }
  return null;
}
function elemPair(a, b) {
  const noble = a.cls === 'noble' ? a : b.cls === 'noble' ? b : null;
  if (noble) return no(noble.n + ' təsirsiz qazdır: atomunun xarici elektron təbəqəsi tamamlanıb, ona görə adi şəraitdə heç bir maddə ilə reaksiyaya girmir.');
  if (a.rad || b.rad) { const r = a.rad ? a : b; return unk(r.n + ' radioaktiv elementdir. Məktəb laboratoriyasında onunla təcrübə aparılmır, ona görə bu cüt üçün səhnə yoxdur.'); }
  if (a.cls === 'metal' && b.cls === 'metal') return no('İki metal bir-biri ilə kimyəvi reaksiyaya girmir. Əridilib qarışdırılanda ərinti əmələ gətirirlər: məsələn, tunc mis ilə qalayın, bürünc mis ilə sinkin ərintisidir.' + (a.id === 'Hg' || b.id === 'Hg' ? ' Civənin başqa metallarla ərintisinə amalqama deyilir.' : ''));
  if (a.id === 'N' || b.id === 'N') return no('Azot molekulundakı üçqat rabitə çox möhkəmdir, ona görə azot adi şəraitdə bu maddə ilə reaksiyaya girmir.');
  return null;
}
let ORG = null;
const acidOK = o => o.ions && o.ions[0] === 'H' && !o.oxa && !o.ins && rk(o.ions[1]) <= 4;
function react(ia, ib) {
  const a = get(ia), b = get(ib); if (!a || !b) return unk();
  if (ia === ib) return unk('Eyni maddəni iki dəfə seçmisən. İkinci yuvaya başqa maddə qoy.');
  let r = DB[key(ia, ib)];
  if (!r && ORG) r = ORG(a, b);
  if (!r) {
    if (a.cond || b.cond) { const c = a.cond ? a : b, o = a.cond ? b : a; r = c.id === 't' ? heat(o) || unk(o.n + ' üçün qızdırma təcrübəsi hələ əlavə olunmayıb. Bəzi maddələr qızdırılanda parçalanmır, sadəcə əriyir və ya buxarlanır.') : c.id === 'el' ? unk('Elektrik cərəyanı ilə təcrübə üçün su, xörək duzu və ya mis(II) sulfat məhlulunu seç.') : unk('Maya yalnız şəkərli maddələri, məsələn qlükozanı qıcqırdır.'); }
    else if (a.ind || b.ind) r = a.ind ? indicator(a, b) : indicator(b, a);
    else if (a.el && b.el) r = elemPair(a, b);
    else {
      const e = a.el ? a : b.el ? b : null, o = e ? (e === a ? b : a) : null;
      if (e && e.cls === 'noble') r = no(e.n + ' təsirsiz qazdır və heç bir maddə ilə reaksiyaya girmir.');
      else if (e && e.rad) r = unk(e.n + ' radioaktiv elementdir, məktəb laboratoriyasında onunla təcrübə aparılmır.');
      else r = oxides(a, b);
      if (!r) {
        if (e && e.cls === 'metal' && acidOK(o)) r = metalAcid(e, o);
        else if (e && e.cls === 'metal' && o.ions && o.st !== 's' && o.g === 'dz') r = metalSalt(e, o);
        else if (e && e.cls === 'nonmetal' && e.id !== 'F' && acidOK(o)) r = no(e.n + ' qeyri-metaldır və bu turşu ilə reaksiyaya girmir. Turşulardan hidrogeni yalnız aktiv metallar sıxışdırıb çıxarır.');
        else if (!e && a.ions && b.ions) r = ionx(a, b);
        else if (!e && (ia === 'H2O' || ib === 'H2O')) { const o2 = ia === 'H2O' ? b : a; r = o2.ions && !o2.ins ? no(o2.n + ' suda sadəcə həll olur və ionlarına ayrılır. Yeni maddə əmələ gəlmədiyi üçün bu, kimyəvi reaksiya sayılmır.') : o2.ins ? no(o2.n + ' suda həll olmur və onunla reaksiyaya girmir.') : o2.wat === 'mix' ? no(o2.n + ' su ilə istənilən nisbətdə qarışır, amma kimyəvi reaksiyaya girmir.') : o2.wat === 'layer' ? no(o2.n + ' suda həll olmur və ondan yüngül olduğu üçün üstdə ayrıca təbəqə əmələ gətirir.', {vis: W(null, pour(), [layer('#f4f1e2', .4, .2, 1.8, 3)])}) : o2.wat === 'dis' ? no(o2.n + ' suda həll olur. Bu, kimyəvi reaksiya deyil: molekulların tərkibi dəyişmir.', {vis: W(null, sol('heap', o2.c), [dis(0, 2, 6)])}) : null; }
      }
    }
    if (!r) r = unk();
  }
  r = Object.assign({}, r);
  if (!r.vis) r.vis = still(a, b);
  r.a = a; r.b = b;
  return r;
}
// hazır təcrübələr
const FEAT = [['Na', 'H2O', 'Natrium suda qaçır', 'su'], ['K', 'H2O', 'Kalium suda alışır', 'su'], ['CaO', 'H2O', 'Əhəngin söndürülməsi', 'su'], ['CaC2', 'H2O', 'Karbiddən asetilen', 'su'],
  ['Mg', 'O', 'Maqneziumun gözqamaşdırıcı alovu', 'alov'], ['Fe', 'O', 'Dəmir oksigendə qığılcım saçır', 'alov'], ['S', 'O', 'Kükürdün göy alovu', 'alov'], ['P', 'O', 'Fosforun ağ tüstüsü', 'alov'], ['Na', 'Cl', 'Xörək duzunun doğulması', 'alov'], ['Fe2O3', 'Al', 'Termit', 'alov'], ['NH42Cr2O7', 't', 'Vulkan', 'alov'], ['KMnO4', 'qliserin', 'Öz-özünə alışan qarışıq', 'alov'], ['Al', 'I', 'Bir damcı su və bənövşəyi tüstü', 'alov'],
  ['AgNO3', 'NaCl', 'Ağ kəsmikvari çöküntü', 'cok'], ['PbNO32', 'KI', 'Qızılı yağış', 'cok'], ['CuSO4', 'NaOH', 'Göy həlməşik', 'cok'], ['FeCl3', 'NaOH', 'Qonur çöküntü', 'cok'], ['BaCl2', 'H2SO4', 'Sulfat ionunun tanınması', 'cok'], ['CO2', 'CaOH2', 'Əhəng suyu bulanır', 'cok'],
  ['FeCl3', 'KSCN', 'Qan kimi qırmızı', 'reng'], ['CuSO4', 'NH3aq', 'Tünd göy kompleks', 'reng'], ['AgNO3', 'Cu', 'Gümüş ağacı', 'reng'], ['CuSO4', 'Fe', 'Mismar misə bürünür', 'reng'], ['NaOH', 'HCl', 'Neytrallaşma', 'reng'], ['Cl', 'KI', 'Xlor yodu sıxışdırır', 'reng'], ['NaOH', 'ff', 'Fenolftalein qələvidə', 'reng'],
  ['Zn', 'HCl', 'Sinkdən hidrogen', 'qaz'], ['CaCO3', 'HCl', 'Mərmər turşuda', 'qaz'], ['NaHCO3', 'CH3COOH', 'Soda və sirkə', 'qaz'], ['Cu', 'HNO3q', 'Qonur qaz', 'qaz'], ['H2O2', 'KI', 'Fil diş pastası', 'qaz'], ['NH3', 'HCl', 'Odsuz tüstü', 'qaz'], ['H2O', 'el', 'Suyun elektrolizi', 'qaz'], ['saxaroza', 'H2SO4q', 'Şəkərdən qara ilan', 'qaz'],
  ['C2H4', 'Br2aq', 'Bromlu su rəngsizləşir', 'uzvi'], ['CH3CHO', 'Tollens', 'Gümüş güzgü', 'uzvi'], ['qlukoza', 'CuOH2', 'Qlükozanın iki üzü', 'uzvi'], ['nisasta', 'I2aq', 'Nişasta və yod', 'uzvi'], ['zulal', 'CuOH2', 'Biuret reaksiyası', 'uzvi'], ['C2H5OH', 'CH3COOH', 'Meyvə iyli efir', 'uzvi'], ['CH4', 'O', 'Metanın mavi alovu', 'uzvi'], ['fenol', 'FeCl3', 'Fenolun tanınması', 'uzvi'],
  ['Cu', 'HCl', 'Mis turşuda həll olmur', 'yox'], ['Cu', 'FeSO4', 'Zəif metal güclünü sıxışdırmır', 'yox'], ['NaCl', 'Na2SO4', 'İonlar məhlulda qalır', 'yox'], ['Fe', 'HNO3q', 'Passivləşmə', 'yox'], ['He', 'O', 'Təsirsiz qaz', 'yox'], ['Cu', 'Zn', 'Metal metalla', 'yox'], ['CH4', 'Br2aq', 'Metan bromlu suya təsir etmir', 'yox'], ['Au', 'O', 'Qızıl paslanmır', 'yox']];
const TAGS = [['su', 'Su ilə'], ['alov', 'Alov və işıq'], ['cok', 'Çöküntülər'], ['reng', 'Rəng dəyişir'], ['qaz', 'Qaz və köpük'], ['uzvi', 'Üzvi kimya'], ['yox', 'Getməyən reaksiyalar']];

window.KCHEM = {R, get, react, fmt, fml, FEAT, TAGS, SHELF, LABEL, DB, checkEq, mkEq, atoms, ACT, AN, C, X, NOX, yes, no, unk, V: {W, J, T, sol, pour, drp, gasin, bub, col, ppt, dis, coat, flame, smoke, sparks, flash, glow, foam, mirror, layer, steam, gasfill, dep, drops, sub, scol}, setOrg(f) { ORG = f; }};
})();
