/* Üzvi kimya: maddələr, reaksiyalar və ümumi qaydalar (KORG məlumatından). Guvvatli Center */
(() => {
const O = window.KORG, K = window.KCHEM; if (!O || !K) return;
const {R, C, X, DB, mkEq, AN, FEAT, no} = K, {W, J, T, sol, pour, gasin, bub, col, ppt, dis, coat, flame, smoke, glow, foam, mirror, layer, steam, gasfill, dep, drops} = K.V;
const M = O.mol, key = (a, b) => a < b ? a + '|' + b : b + '|' + a;
const BRW = '#d9902a', MN = '#7a1a8c', SILV = '#c9cdd2', WHT = '#f4f4f0', PINK = '#e83e8c', CLG = '#c5d64a', BR = '#8a2a14', AIR = {c: '#ffffff', a: .03};
const liq = r => r && r.c ? [r.c, r.a || .5] : null;

/* ---------- maddələr ---------- */
const ACID = {HCOOH: ['FO', 'HCOO'], C2H5COOH: ['PR', 'C2H5COO'], C3H7COOH: ['BU', 'C3H7COO'], C6H5COOH: ['BZ', 'C6H5COO']};
const LOOKS = {triolein: ['l', '#e8d27a', .5], tristearin: ['s', '#f3ecd2', 0, 'chunk'], C6H5NH2: ['l', '#e9dcc0', .22], C17H35COOH: ['s', '#f6f4ea', 0, 'chunk'], C17H33COOH: ['l', '#eedf9a', .4], C6H5COOH: ['l', 0, 0], qlisin: ['s', WHT, 0, 'crystal'], alanin: ['s', WHT, 0, 'crystal'], fruktoza: ['s', '#f7f5ee', 0, 'heap']};
const MIX = {spirt: 1, ald: 1, tursu: 1, amin: 1}, LAY = {alkan: 1, sikl: 1, alken: 1, dien: 1, alkin: 1, aren: 1, hal: 1, efir: 1};
const label = id => /^[a-z]+$/.test(id) ? (M[id].f.replace(/–/g, '').length <= 16 ? M[id].f.replace(/–/g, '') : M[id].mf) : id.replace(/^i(?=C)/, '').replace(/(\d)[abs]$/, '$1');
Object.keys(M).forEach(id => {
  const m = M[id]; if (!m.rg) return;
  if (R[id]) { R[id].k = m.k; return; }
  const L = LOOKS[id] || [m.st, m.st === 's' ? WHT : 0, 0, 'heap'], ex = {k: m.k};
  if (L[0] === 's') { ex.shape = L[3] || 'heap'; if (m.k === 'karbo' || m.k === 'amt') ex.wat = 'dis'; else ex.ins = 1; }
  if (L[0] === 'l') { ex.wat = MIX[m.k] && id !== 'C6H5NH2' && id !== 'C17H33COOH' ? 'mix' : LAY[m.k] || id === 'C6H5NH2' ? 'layer' : 'mix'; if (m.k === 'spirt' || m.k === 'ald' || m.k === 'karbo') ex.ph = 'n'; }
  if (ACID[id]) { const [ak, as] = ACID[id]; AN[ak] = {s: as, q: 1, p: 1, pre: 1, acid: id, wk: 1}; Object.assign(ex, {ions: ['H', ak], ph: 'a', weak: 1}); }
  C(id, label(id), m.n.split(' (')[0], 'uz', L[0], L[1], L[2], ex);
});
['Br2aq', 'I2aq', 'Tollens', 'sabun', 'zulal', 'nisasta'].forEach(id => { if (R[id]) R[id].k = R[id].k || 'rea'; });

/* ---------- səhnələr ---------- */
function vis(r) {
  const a = K.get(r.a), b = K.get(r.b), [code, arg] = r.v.split(':'), g = a.st === 'g', s = a.st === 's', hot = /t°|°C/.test(r.ar || '');
  switch (code) {
    case 'burn': { const st = +arg, fc = st === 0 ? '#7fa8ff' : st < .5 ? '#ffd98a' : '#ffcf6a', sm = st > 0 ? [smoke('#1c1c1c', st * 1.4, 2, 9.5)] : [];
      if (g) return J(['jet', '#ffffff'], [flame(fc, 1.5, 9.5, 1.1), glow(fc, 1.5, 9.5, 1)].concat(sm, [drops(3.5)]), {gas: AIR, jar: false});
      if (s) return J(['heap', a.c || WHT], [flame(fc, 1.6, 9, 1), glow(fc, 1.6, 9, 1)].concat(sm));
      return W(null, {t: 'none'}, [flame(fc, 1.5, 9.5, 1.15, 'surf'), glow(fc, 1.5, 9.5, .8, 'surf')].concat(sm), {lvl: .16, ves: 'dish'}); }
    case 'light': if (arg === 'Br' && !g) return W(['#c8571e', .55], {t: 'none'}, [col('#f6efe2', .05, 3, 6), smoke('#ffffff', .35, 4.5, 9.5)]);
      return J(null, [gasfill('#ffffff', .05, 2.6, 6), drops(5)], {gas: {c: arg === 'Cl' ? CLG : '#b5562c', a: .3}, gas2: AIR, lamp: 2});
    case 'gasrx': if (b.st === 'l') return W(liq(b), g ? gasin() : pour(a.c, a.a || .5), g ? [bub(9, 1.3, 9, 'tip')] : [steam(2.4, 9, .4)], hot ? {heat: 1} : {});
      if (g) return J(null, [glow('#ff7a2a', 2, 8, .8, 'mid')], {gas: AIR, gas2: AIR, burner: 1});
      if (s) return W(null, sol(a.shape || 'heap', a.c || WHT), [bub(8, 1.6, 9, 'liq', .6), dis(.3, 3, 6), steam(2.4, 9, .4)], {heat: 1});
      return W(liq(a), b.st === 'g' ? gasin() : {t: 'none'}, [bub(9, 1.3, 9, b.st === 'g' ? 'tip' : 'liq'), steam(2.4, 9, .4)], {heat: 1});
    case 'crack': return W(liq(a), {t: 'none'}, [bub(14, 2.2, 9.5, 'liq', .7), steam(2.4, 9.5, .6)], {heat: 1, ves: 'tube'});
    case 'decol': if (arg === 'kmno4') return W([MN, .62], g ? gasin() : pour(a.c, a.a || .5), (g ? [bub(10, 1.3, 8, 'tip')] : []).concat([col('#d9c6a8', .2, 2, 5), ppt('#5a3a22', 'fine', .4, 3, 5)]));
      if (arg === 'Br') return g ? W([BR, .8], gasin(), [bub(10, 1.3, 8, 'tip'), col('#f3ead8', .08, 2, 6)]) : W(liq(a), pour(BR, .8), [col('#b5562c', .5, 1.6, 1.2), col('#f6f1e6', .05, 3.2, 4)]);
      return W([BRW, .5], g ? gasin() : pour(a.c, a.a || .5), (g ? [bub(10, 1.3, 8, 'tip')] : []).concat([col('#ffffff', 0, 2, g ? 5 : 3)]));
    case 'gasfade': return g ? J(null, [gasfill('#ffffff', .05, 2.6, 6), drops(5)], {gas: {c: CLG, a: .3}, gas2: AIR}) : W(liq(a), gasin(CLG), [bub(9, 1.3, 8, 'tip')]);
    case 'ppt': return W(g || b.st !== 'l' ? liq(b) : liq(a), g ? gasin() : pour(b.c, b.a || .5), (g ? [bub(9, 1.3, 8, 'tip')] : []).concat([ppt(arg, 'curdy', .65, 2, 5)]));
    case 'poly': return g ? J(null, [glow('#ff7a2a', 2, 8, .6, 'mid'), dep('#f4f4f0', 3, 5)], {gas: AIR, burner: 1}) : W(liq(a), {t: 'none'}, [col('#f1efe6', .75, 2.6, 6), steam(2.4, 8, .3)], {heat: 1, ves: 'tube'});
    case 'liqfume': return W(['#b5562c', .55], sol('heap', '#6f7479'), [bub(8, 2, 9, 'solid', .6), col('#ecdcb4', .22, 2.6, 6), smoke('#ffffff', .7, 2.8, 9.5)]);
    case 'layer': return W(liq(b) || ['#eadf9a', .14], pour(a.c, a.a || .5), [layer(arg, .8, .18, 3, 4), steam(2.6, 9, .5)], {heat: 1, ves: 'tube'});
    case 'decolheat': return W([MN, .62], pour(), [col('#ffffff', 0, 3.2, 5), steam(2.6, 9.5, .5)], {heat: 1, ves: 'tube'});
    case 'extract': return b.id === 'Br2aq' ? W([BRW, .5], pour(), [col('#f3ead0', .12, 2, 4), layer('#c8571e', .7, .16, 2, 4)]) : W(liq(b), pour(a.c, a.a || .5), [layer(a.c || '#f1ecd8', .55, .16, 2, 3)]);
    case 'wetheat': if (g) return W(liq(b), gasin(), [bub(9, 1.3, 9, 'tip'), steam(2.6, 9.5, .5)], {heat: 1});
      if (s) return W(liq(b), sol(a.shape || 'heap', a.c || WHT), [dis(.25, 3, 6), steam(2.6, 9.5, .5)], {heat: 1});
      return W(liq(b), pour(a.c, a.a || .5), [bub(5, 3, 9, 'liq', .5), steam(2.6, 9.5, .5)], {heat: 1, ves: 'tube'});
    case 'na': if (r.ty === 'Vürs reaksiyası') return g ? J(['ball', SILV], [glow('#ff9a5a', 2, 7, .5), dep(WHT, 3, 5)], {gas: AIR}) : W(liq(a), sol('ball', SILV), [bub(4, 2, 8, 'solid', .5), ppt(WHT, 'fine', .5, 2.4, 6), dis(.3, 2.4, 7)]);
      return W(liq(a), sol('ball', SILV), [bub(12, 1.6, 10, 'solid', .7), dis(.2, 2, 9)]);
    case 'cuwire': return W(liq(a), sol('wire', '#1a1a1c'), [coat('#b5562c', 1.7, 2), bub(8, 1.7, 3.5, 'solid', .6), steam(1.7, 5, .5)], {ves: 'tube'});
    case 'dehyd': return W(['#e8e2c8', .12], pour(), [bub(16, 2.6, 9.5, 'liq', .8), steam(2.6, 9.5, .5)], {heat: 1, ves: 'flask'});
    case 'ester': return W(null, pour(), [bub(6, 2.4, 8, 'liq', .6), layer('#f6f2d8', .5, .2, 3.2, 5), steam(2.6, 9, .5)], {heat: 1, ves: 'tube'});
    case 'heatno': return W(null, pour(), [steam(2.4, 9, .4)], {heat: 1, ves: 'flask'});
    case 'bluesol': return W(['#3f8fe0', .16], s ? sol('heap', a.c || WHT) : pour(), [{k: 'pptoff', t0: 1.8, d: 3}, col('#1f4fd8', .8, 1.8, 3.5)].concat(s ? [dis(0, 1.8, 3)] : []), {ppt0: ['#3f8fe0', 'gel', .6]});
    case 'mirror': return W(null, g ? gasin() : pour(), [mirror(2.6, 6), steam(2.4, 9, .4)].concat(g ? [bub(6, 1.3, 5, 'tip')] : []), {heat: 1, ves: 'flask'});
    case 'cu2o': return W(['#3f8fe0', .16], g ? gasin() : pour(), [{k: 'pptoff', t0: 3.4, d: 2}, col('#d9b02a', .7, 3.4, 1.8), col('#b8421c', .5, 5.6, 2), ppt('#b8421c', 'fine', .75, 5.6, 3), steam(3, 10, .5)], {ppt0: ['#3f8fe0', 'gel', .6], heat: 1, ves: 'tube'});
    case 'soap': return W(['#f3ecc8', .32], s ? sol(a.shape || 'chunk', a.c || '#f3ecd2') : pour(a.c, a.a || .5), [bub(10, 2.4, 9.5, 'liq', .6), foam('#f7f7f2', .42, 3.4, 5), steam(2.6, 9.5, .5)].concat(s ? [dis(0, 2.4, 5)] : []), {heat: 1});
    case 'ferment': return W(['#efe6c8', .3], sol('heap', '#d9c79a'), [bub(20, 2, 11, 'liq', .7), foam('#f4f1e4', .4, 2.6, 6), dis(.2, 2, 6)]);
    case 'smoke': return W(null, gasin(), [bub(9, 1.3, 8, 'tip'), smoke('#ffffff', .9, 1.8, 8.5, 'top')]);
    case 'clear': return s ? W(null, sol(a.shape || 'heap', a.c || WHT), [dis(0, 2, 5)]) : W(['#f0ece0', .4], pour(), [col('#ffffff', 0, 1.8, 3)]);
    case 'pink': return W(null, gasin(), [bub(10, 1.3, 8, 'tip'), col(PINK, .45, 2, 4)]);
    case 'pptdecol': return W(['#efe9dc', .2], pour(BRW, .5), [col('#ffffff', 0, 1.9, 2), ppt(WHT, 'curdy', .75, 1.9, 4)]);
    case 'tubeheat': return T(b.st === 'x' ? [a.c || WHT] : [WHT, '#f1f0e8'], [smoke('#ffffff', .5, 2.6, 8.5, 'mouth'), drops(4)]);
  }
}

/* ---------- reaksiyalar ---------- */
const bad = [];
O.rx.forEach(r => {
  if (!K.get(r.a) || !K.get(r.b)) { bad.push('maddə yoxdur: ' + r.a + ' + ' + r.b); return; }
  const k = key(r.a, r.b);
  if (r.keep || DB[k]) { if (DB[k]) DB[k].mols = r.m; else bad.push('gözlənilən təcrübə yoxdur: ' + k); return; }
  if (r.ok === 0) { const o = no(r.why, {mols: r.m}), v = vis(r); if (v) o.vis = v; DB[k] = o; return; }
  const eq = r.eqt ? null : mkEq(r.re, r.pr, r.ar); if (!r.eqt && !eq) { bad.push('tarazlaşmır: ' + k); return; }
  const o = {eq, ty: r.ty, obs: r.obs, warn: r.warn || '', sp: r.sp || 0, mols: r.m}, v = vis(r); if (r.eqt) o.eqt = r.eqt; if (v) o.vis = v;
  X(r.a, r.b, o);
});
O.bad = bad;

/* ---------- ümumi qaydalar: xarakterik olmayan cütlər ---------- */
const INERT = {HCl: 1, H2SO4: 1, NaOH: 1, KOH: 1, Tollens: 1, CuOH2: 1, Na: 1, K: 1, HBr: 1, H3PO4: 1, NH3aq: 1};
const SATN = 'Doymuş karbohidrogenlər kimyəvi cəhətdən az fəaldır: adi şəraitdə turşularla, qələvilərlə və aktiv metallarla reaksiyaya girmir. Onlar üçün əvəzetmə, yanma və parçalanma reaksiyaları xarakterikdir.';
function rule(a, b) {
  if (a.k && b.k && M[a.id] && M[b.id]) return null;
  const o = M[a.id] && a.k ? a : M[b.id] && b.k ? b : null; if (!o) return null;
  const x = o === a ? b : a, c = o.k, id = x.id, g = o.st === 'g', lq = o.st === 'l';
  const flat = bw => g ? W(bw, gasin(), [bub(9, 1.3, 8, 'tip')]) : bw && bw[0] === BRW && lq ? W(bw, pour(), [col('#f3ead0', .12, 2, 4), layer('#c8571e', .7, .16, 2, 4)]) : lq ? W(bw, pour(), [layer('#f1ecd8', .5, .16, 2, 3)]) : undefined;
  const N = (why, v) => no(why, v ? {vis: v, mols: [o.id]} : {mols: [o.id]});
  if ((c === 'alkan' || c === 'sikl') && o.id !== 'C3H6s') {
    if (id === 'Br2aq') return N(o.n + ' doymuş karbohidrogendir: molekulunda yalnız təkqat rabitələr var, ona görə bromlu suyu rəngsizləşdirmir. Doymuş karbohidrogenləri doymamışlardan bununla fərqləndirirlər.' + (lq ? ' Brom sadəcə üst təbəqəyə keçir.' : ''), flat([BRW, .5]));
    if (id === 'KMnO4') return N(o.n + ' kalium permanqanat məhlulunu rəngsizləşdirmir: doymuş karbohidrogenlər adi şəraitdə oksidləşdiricilərə qarşı davamlıdır.', flat([MN, .62]));
    if (id === 'H') return N(o.n + ' artıq doymuşdur: hər karbon atomu mümkün olan qədər hidrogenlə birləşib, ona görə hidrogeni birləşdirə bilmir.');
    if (id === 'H2O') return N(o.n + ' suda həll olmur və onunla reaksiyaya girmir.' + (lq ? ' Sudan yüngül olduğu üçün üst təbəqədə toplanır.' : ''), flat(null));
    if (INERT[id]) return N(SATN, id === 'Na' || id === 'K' ? undefined : flat(liq(x)));
  }
  if (o.id === 'C6H6' || o.id === 'C7H8') {
    if (id === 'Br2aq') return N('Benzol bromlu suyu rəngsizləşdirmir: halqadakı altı elektron bütün karbon atomları arasında bərabər paylanıb və adi ikiqat rabitə kimi davranmır. Brom sadəcə benzol təbəqəsinə keçir.', flat([BRW, .5]));
    if (id === 'KMnO4' && o.id === 'C6H6') return N('Benzol kalium permanqanat məhlulunu rəngsizləşdirmir: benzol halqası oksidləşdiricilərə qarşı davamlıdır. Toluol isə qızdırılanda rəngsizləşdirir.', flat([MN, .62]));
    if (id === 'H2O') return N(o.n + ' suda həll olmur və onunla reaksiyaya girmir. Sudan yüngül olduğu üçün üst təbəqədə toplanır.', flat(null));
    if (INERT[id]) return N(o.n + ' adi şəraitdə turşu və qələvi məhlulları ilə, aktiv metallarla reaksiyaya girmir. Benzol halqası çox davamlıdır.', id === 'Na' || id === 'K' ? undefined : flat(liq(x)));
  }
  if (c === 'alken' || c === 'dien' || c === 'alkin') {
    if (id === 'NaOH' || id === 'KOH' || id === 'CuOH2' || id === 'NH3aq') return N('Doymamış karbohidrogenlər qələvi və əsaslarla reaksiyaya girmir. Onlar üçün ikiqat və ya üçqat rabitəyə birləşmə reaksiyaları xarakterikdir.', flat(liq(x)));
    if (id === 'Tollens' && c !== 'alkin') return N(o.n + ' gümüş oksidin ammonyakda məhlulu ilə çöküntü vermir. Belə çöküntü yalnız üçqat rabitəsi zəncirin ucunda olan alkinlərdə yaranır.', flat(null));
    if ((id === 'Na' || id === 'K') && c !== 'alkin') return N(o.n + ' natrium və kalium kimi aktiv metallarla reaksiyaya girmir: molekulunda metalla əvəz oluna bilən hidrogen atomu yoxdur.');
  }
  if (c === 'spirt' && o.id !== 'sorbit') {
    if (id === 'KOH') return N(o.n + ' qələvi məhlulu ilə reaksiyaya girmir: spirtlərin turşuluq xassələri sudan da zəifdir. Onlar yalnız aktiv metallarla reaksiyaya girir.');
    if (id === 'Tollens') return N('Spirtlər "gümüş güzgü" reaksiyası vermir: molekullarında aldehid qrupu yoxdur.', W(null, pour(), [steam(2.4, 9, .4)], {heat: 1, ves: 'flask'}));
    if (id === 'H2O' && o.id !== 'C4H9OH') return N('Bu, kimyəvi reaksiya deyil: ' + o.n.toLowerCase() + ' su ilə istənilən nisbətdə qarışır. Molekulları arasında hidrogen rabitələri yaranır, lakin yeni maddə əmələ gəlmir.');
  }
  if (c === 'amin' && (id === 'NaOH' || id === 'KOH')) return N('Aminlər əsas xassəli maddələrdir, ona görə qələvilərlə reaksiyaya girmir. Onlar turşularla duz əmələ gətirir.');
  if (c === 'fenol' && (id === 'HCl' || id === 'H2SO4')) return N('Fenol zəif turşu xassəsi göstərir, ona görə turşularla reaksiyaya girmir. O, qələvilərlə və aktiv metallarla reaksiyaya girir.');
  if (c === 'efir' && (o.id === 'CH3OCH3' || o.id === 'C2H5OC2H5') && (id === 'NaOH' || id === 'KOH')) return N('Sadə efirlər qələvilərlə reaksiyaya girmir: kimyəvi cəhətdən az fəal maddələrdir və daha çox həlledici kimi işlənir.');
  return null;
}
K.setOrg(rule);

FEAT.push(['C3H8', 'O', 'Propanın yanması', 'uzvi'], ['C2H5OH', 'H2SO4q', 'Etilenin alınması', 'uzvi'], ['C7H8', 'KMnO4', 'Toluol və permanqanat', 'uzvi'], ['C6H6', 'HNO3q', 'Nitrobenzol', 'uzvi'], ['qlukoza', 'fer', 'Spirt qıcqırması', 'uzvi'],
  ['tristearin', 'NaOH', 'Sabunun alınması', 'uzvi'], ['C6H5NH2', 'Br2aq', 'Anilin və bromlu su', 'uzvi'], ['HCHO', 'Tollens', 'Formaldehid və gümüş', 'uzvi'], ['C6H14', 'Br2aq', 'Heksan bromu götürür', 'yox'], ['aseton', 'Tollens', 'Keton güzgü vermir', 'yox']);
})();
