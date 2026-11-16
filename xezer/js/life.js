/* Xəzərin dibi: suyun içində üzən 3D canlılar və qurğular (WebGL2). Guvvatli Center */
(() => {
const XZ = window.XZ || {}, CFG = XZ.life;
const cv = document.getElementById('life');
if (!CFG || !cv) return;
let gl = null;
try { gl = cv.getContext('webgl2', {alpha: true, premultipliedAlpha: true, antialias: true, depth: true, powerPreference: 'high-performance'}); } catch (e) {}
if (!gl) return;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- kamera: səhifə ilə birlikdə aşağı enir; D0 məsafəsindəki müstəvi səhifənin özü ilə üst-üstə düşür ---------- */
const FOV = 36 * Math.PI / 180, D0 = 10, SH = 2 * D0 * Math.tan(FOV / 2), NEAR = .4, FAR = 90;
let W = 1, H = 1, DPR = 1, K = SH, VW = SH;                 // K: 1 pikselin D0-da dünya ölçüsü; VW: D0-da görünən en
const P = new Float32Array(16);
function persp() {
  const f = 1 / Math.tan(FOV / 2), a = W / H, nf = 1 / (NEAR - FAR);
  P.fill(0); P[0] = f / a; P[5] = f; P[10] = (FAR + NEAR) * nf; P[11] = -1; P[14] = 2 * FAR * NEAR * nf;
}

/* ---------- şeyderlər ---------- */
const COMMON = `
uniform vec3 uCam; uniform vec3 uWTop, uWBot; uniform vec2 uRes; uniform vec4 uLight; uniform vec3 uTint; uniform vec4 uFog; uniform float uAlpha, uSurf, uT;
float caust(vec2 p) { p += vec2(uT * .33, uT * .21); float a = sin(p.x * 1.9 + sin(p.y * 1.4 + uT * .7) * 1.3), b = sin(p.y * 2.3 + sin(p.x * 1.1 - uT * .5) * 1.5); float c = .5 + .5 * a * b; return c * c * c; }
vec4 shade(vec3 base, float a, vec3 n, vec3 w) {
  vec3 tc = uCam - w; float d = length(tc); tc /= d;
  float up = n.y, lam = .9 + .42 * max(up, 0.) - .32 * max(-up, 0.);
  float c = uLight.z > 0. ? caust(w.xz * 1.5 + w.y * .4) * uLight.z * max(up + .3, 0.) : 0.;
  vec3 col = base * uTint * uLight.x * (lam + c * 1.5);
  col += base * vec3(1., .97, .9) * uLight.y * (.3 + .7 * max(dot(n, tc), 0.)) / (1. + d * d * .0042);
  float f = 1. - exp(-max(d - uFog.x, 0.) * uFog.y);
  vec3 wc = mix(uWBot, uWTop, gl_FragCoord.y / uRes.y);
  col = mix(col, wc, f);
  a *= uAlpha * (1. - smoothstep(uFog.z, uFog.w, d)) * (1. - smoothstep(uSurf - 26., uSurf + 4., gl_FragCoord.y));
  return vec4(col * a, a);
}`;
const VS_FISH = `#version 300 es
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNor; layout(location=2) in vec2 aUv;
layout(location=3) in vec4 aM0; layout(location=4) in vec4 aM1; layout(location=5) in vec4 aM2; layout(location=6) in vec4 aM3; layout(location=7) in vec4 aI;
uniform mat4 uVP; uniform float uT; uniform vec4 uWave;
out vec2 vUv; out vec3 vN; out vec3 vW; out float vSh;
void main() {
  float s = .5 - aPos.x, env = uWave.w + uWave.x * s * s;
  float ph = aI.x + uWave.y * s * 6.2832 - uT * uWave.z * aI.y;
  float bend = aI.w * (s - .3) * abs(s - .3);
  vec3 p = aPos; p.z += env * sin(ph) + bend;
  float sl = -(2. * uWave.x * s * sin(ph) + env * uWave.y * 6.2832 * cos(ph)) - aI.w * 2. * abs(s - .3);
  vec3 n = normalize(vec3(aNor.x - sl * aNor.z, aNor.y, aNor.z + sl * aNor.x));
  mat4 M = mat4(aM0, aM1, aM2, aM3);
  vec4 w = M * vec4(p, 1.);
  vW = w.xyz; vN = mat3(M) * n; vUv = aUv; vSh = aI.z;
  gl_Position = uVP * w;
}`;
const FS_FISH = `#version 300 es
precision highp float;
uniform sampler2D uTex;
in vec2 vUv; in vec3 vN; in vec3 vW; in float vSh; out vec4 o;
${COMMON}
void main() {
  vec4 t = texture(uTex, vUv);
  float a = smoothstep(.12, .62, t.a);
  if (a < .02) discard;
  o = shade(t.rgb * vSh, a, normalize(vN), vW);
}`;
const VS_OBJ = `#version 300 es
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNor; layout(location=2) in vec4 aCol;
uniform mat4 uVP; uniform vec3 uOrg; uniform float uScl;
out vec3 vN; out vec3 vW; out vec3 vL; out vec4 vC;
void main() { vec3 w = aPos * vec3(uScl, 1., uScl) + uOrg; vW = w; vL = aPos; vN = aNor; vC = aCol; gl_Position = uVP * vec4(w, 1.); }`;
const FS_OBJ = `#version 300 es
precision highp float;
in vec3 vN; in vec3 vW; in vec3 vL; in vec4 vC; out vec4 o;
uniform vec4 uFadeY;
${COMMON}
float h3(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1, 0, 0)), f.x), mix(h3(i + vec3(0, 1, 0)), h3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h3(i + vec3(0, 0, 1)), h3(i + vec3(1, 0, 1)), f.x), mix(h3(i + vec3(0, 1, 1)), h3(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
const mat3 R3 = mat3(.00, .80, .60, -.80, .36, -.48, -.60, -.48, .64);
float fbm(vec3 p) { float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * vn(p); p = R3 * p * 2.07 + 1.7; a *= .5; } return s / .9375; }
void main() {
  float g1 = fbm(vL * 1.35 + 2.1), g2 = fbm(vL.zxy * 4.3 + 7.7);
  vec3 base;
  if (vC.a < .01) base = vC.rgb * (.72 + .5 * g1) * (.9 + .2 * g2);                 // dib lili
  else {                                                                           // polad üzərində dəniz örtüyü
    float grow = smoothstep(.4, .62, g1 * .62 + g2 * .38) * vC.a;
    vec3 steel = vC.rgb * (.8 + .34 * g2);
    vec3 foul = mix(vec3(.24, .26, .22), vec3(.56, .55, .5), g2) * (.75 + .4 * g1);
    base = mix(steel, foul, grow * .8);
  }
  o = shade(base, smoothstep(uFadeY.x, uFadeY.y, vL.y) * (1. - smoothstep(uFadeY.z, uFadeY.w, vL.y)), normalize(vN), vW);
}`;
function prog(vs, fs) {
  const p = gl.createProgram();
  for (const [ty, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
    const s = gl.createShader(ty); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    gl.attachShader(p, s);
  }
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  const U = {}, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) { const nm = gl.getActiveUniform(p, i).name; U[nm] = gl.getUniformLocation(p, nm); }
  return {p, U};
}
let PF, PO;
try { PF = prog(VS_FISH, FS_FISH); PO = prog(VS_OBJ, FS_OBJ); } catch (e) { console.warn('life:', e.message); return; }

/* ---------- balıq gövdəsi: fotonun yan görünüşündən şişirdilmiş iki üzlü tor ---------- */
const GEO = {};
function fishGeo(id) {
  if (GEO[id]) return GEO[id];
  gl.bindVertexArray(null);
  const sp = CFG.sp[id], gx = sp.gx, gy = sp.gy, nx = gx + 1, ny = gy + 1, raw = atob(sp.t), q = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) q[i] = raw.charCodeAt(i);
  const nv = nx * ny, pos = new Float32Array(nv * 6), nor = new Float32Array(nv * 6), uv = new Float32Array(nv * 4), idx = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const k = j * nx + i, v = q[k], t = v ? (v - 1) / 254 * sp.tm : 0, x = .5 - i / gx, y = (.5 - j / gy) * sp.a;
    pos.set([x, y, t], k * 3); pos.set([x, y, -t], (nv + k) * 3);
    uv.set([i / gx, j / gy], k * 2); uv.set([i / gx, j / gy], (nv + k) * 2);
  }
  for (let j = 0; j < gy; j++) for (let i = 0; i < gx; i++) {
    const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
    if (!(q[a] || q[b] || q[c] || q[d])) continue;
    idx.push(a, b, c, b, d, c, nv + a, nv + c, nv + b, nv + b, nv + c, nv + d);
  }
  for (let i = 0; i < idx.length; i += 3) {                 // düyün normalları
    const a = idx[i] * 3, b = idx[i + 1] * 3, c = idx[i + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2], vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
    const X = uy * vz - uz * vy, Y = uz * vx - ux * vz, Z = ux * vy - uy * vx;
    for (const o of [a, b, c]) { nor[o] += X; nor[o + 1] += Y; nor[o + 2] += Z; }
  }
  for (let i = 0; i < nor.length; i += 3) { const l = Math.hypot(nor[i], nor[i + 1], nor[i + 2]) || 1; nor[i] /= l; nor[i + 1] /= l; nor[i + 2] /= l; }
  const mk = (data, target = gl.ARRAY_BUFFER) => { const b = gl.createBuffer(); gl.bindBuffer(target, b); gl.bufferData(target, data, gl.STATIC_DRAW); return b; };
  return GEO[id] = {pos: mk(pos), nor: mk(nor), uv: mk(uv), idx: mk(new Uint16Array(idx), gl.ELEMENT_ARRAY_BUFFER), n: idx.length, tex: null, ready: false, loading: false};
}
function loadTex(g, id) {
  if (g.loading) return; g.loading = true;
  const url = 'img/f_' + id + '.webp';
  const up = src => {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    g.tex = t; g.ready = true; g.t0 = performance.now();
  };
  const viaImg = () => { const im = new Image(); im.onload = () => { try { up(im); } catch (e) {} }; im.src = url; };
  if (window.createImageBitmap && location.protocol !== 'file:') fetch(url).then(r => { if (!r.ok) throw 0; return r.blob(); }).then(b => createImageBitmap(b, {premultiplyAlpha: 'none'})).then(up).catch(viaImg);
  else viaImg();
}

/* ---------- növlərin davranışı ---------- */
// len: uzunluq (dünya vahidi, masaüstü üçün); v: sürət; amp/kw/hd: bədən dalğası; al/lat/ver: sürünün yayılması
const BEH = {
  aterina:   {n: 70,  len: .62, v: 1.5,  cl: 2, al: 4.2, lat: 1.2,  ver: .8,  amp: .1,  kw: 1.1, hd: .012, B: 5},
  kilke:     {n: 150, len: .78, v: 1.55, cl: 2, al: 6.5, lat: 1.7,  ver: 1.15, amp: .1, kw: 1.1, hd: .012, B: 6},
  krevet:    {n: 14,  len: .5,  v: .32,  cl: 1, al: 3.2, lat: 1.2,  ver: .9,  amp: .012, kw: .6, hd: .0, B: 2.4, loop: .34, bob: .12},
  xul:       {n: 7,   len: 1.1, v: .55,  cl: 1, al: 4,   lat: 1.3,  ver: .7,  amp: .075, kw: .9, hd: .012, B: 3.4, loop: .6},
  kefal:     {n: 16,  len: 1.85, v: 1.25, cl: 2, al: 4.6, lat: 1.5, ver: .9,  amp: .085, kw: 1.0, hd: .01, B: 5.5},
  kutum:     {n: 10,  len: 2.15, v: 1.1, cl: 2, al: 4.4, lat: 1.5,  ver: .9,  amp: .085, kw: 1.0, hd: .01, B: 5.5},
  suiti:     {n: 3,   len: 3.0, v: 1.3,  cl: 3, al: 1.2, lat: 1.2,  ver: 1.0, amp: .05,  kw: .7, hd: .006, B: 5, ay: .9},
  sif:       {n: 5,   len: 2.5, v: .85,  cl: 2, al: 3.4, lat: 1.3,  ver: .8,  amp: .075, kw: 1.0, hd: .01, B: 5},
  uzunburun: {n: 4,   len: 3.4, v: .8,   cl: 2, al: 3.2, lat: 1.2,  ver: .8,  amp: .075, kw: 1.15, hd: .014, B: 5},
  rusnere:   {n: 4,   len: 3.5, v: .75,  cl: 2, al: 3.2, lat: 1.2,  ver: .8,  amp: .075, kw: 1.15, hd: .014, B: 5},
  bolge:     {n: 3,   len: 5.3, v: .8,   cl: 3, al: .6,  lat: .8,   ver: .7,  amp: .07,  kw: 1.1, hd: .012, B: 4.5},
  dxul:      {n: 6,   len: 1.1, v: .5,   cl: 1, al: 3.6, lat: 1.2,  ver: .7,  amp: .075, kw: .9, hd: .012, B: 3.2, loop: .6},
  oxul:      {n: 4,   len: 1.15, v: .4,  cl: 1, al: 3.2, lat: 1.1,  ver: .6,  amp: .065, kw: .9, hd: .012, B: 3, loop: .55},
};
const ITEMS = [];
const _a = [0, 0, 0], _b = [0, 0, 0];
// göstərici (siçan və ya barmaq): balıqlar ondan yan keçir
const PT = {x: 0, y: 0, on: false, t: 0};
addEventListener('pointermove', e => { PT.x = (e.clientX - W / 2) * K; PT.y = (H / 2 - e.clientY) * K; PT.on = true; PT.t = performance.now(); }, {passive: true});
addEventListener('pointerdown', e => { PT.x = (e.clientX - W / 2) * K; PT.y = (H / 2 - e.clientY) * K; PT.on = true; PT.t = performance.now(); }, {passive: true});
['pointerup', 'pointercancel'].forEach(ev => addEventListener(ev, e => { if (e.pointerType !== 'mouse') PT.on = false; }, {passive: true}));
document.addEventListener('pointerleave', () => { PT.on = false; });
function mkSchool(it, el, k) {
  const b = Object.assign({}, BEH[it.sp], it), r = rng(1000 + k * 7919), N = Math.max(1, Math.round(b.n * (RM ? .6 : 1)));
  const s = {kind: 'school', id: it.id, sp: it.sp, el, b, N, fish: [], inst: new Float32Array(N * 20), order: new Uint16Array(N), zs: new Float32Array(N), geo: null, vao: null, ibuf: null, th0: 0, t0: 0, on: false, side: el.closest('.stop').classList.contains('R') ? 1 : -1, x: 0, y: 0, w: 1};
  const g = () => (r() + r() + r() - 1.5) / 1.5;            // təxminən normal paylanma
  for (let i = 0; i < N; i++) s.fish.push({c: i % b.cl, al: g(), lat: g(), ver: g(), ph: r() * 6.283, fr: .85 + r() * .3, sh: .88 + r() * .2, sc: .86 + r() * .28, wf: .25 + r() * .5, wp: r() * 6.283, yf: .2 + r() * .4, yp: r() * 6.283, ox: 0, oy: 0});
  return s;
}

/* ---------- qurğular ---------- */
function mesh() {
  const pos = [], nor = [], col = [], idx = [];
  const add = (p, n, c) => { pos.push(p[0], p[1], p[2]); nor.push(n[0], n[1], n[2]); col.push(c[0], c[1], c[2], c[3]); return pos.length / 3 - 1; };
  function tube(a, b, r0, r1, c, seg = 10, cap = false) {
    const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], L = Math.hypot(d[0], d[1], d[2]) || 1; d[0] /= L; d[1] /= L; d[2] /= L;
    let u = Math.abs(d[1]) < .95 ? [0, 1, 0] : [1, 0, 0];
    let x = [d[1] * u[2] - d[2] * u[1], d[2] * u[0] - d[0] * u[2], d[0] * u[1] - d[1] * u[0]]; const xl = Math.hypot(x[0], x[1], x[2]); x = x.map(v => v / xl);
    const y = [d[1] * x[2] - d[2] * x[1], d[2] * x[0] - d[0] * x[2], d[0] * x[1] - d[1] * x[0]];
    const base = pos.length / 3;
    for (let i = 0; i <= seg; i++) {
      const an = i / seg * 6.2832, cs = Math.cos(an), sn = Math.sin(an), n = [x[0] * cs + y[0] * sn, x[1] * cs + y[1] * sn, x[2] * cs + y[2] * sn];
      add([a[0] + n[0] * r0, a[1] + n[1] * r0, a[2] + n[2] * r0], n, c); add([b[0] + n[0] * r1, b[1] + n[1] * r1, b[2] + n[2] * r1], n, c);
    }
    for (let i = 0; i < seg; i++) { const p = base + i * 2; idx.push(p, p + 2, p + 1, p + 1, p + 2, p + 3); }
    if (cap) for (const [pt, rr, nn] of [[a, r0, [-d[0], -d[1], -d[2]]], [b, r1, d]]) {
      const c0 = add(pt, nn, c), rb = pos.length / 3;
      for (let i = 0; i <= seg; i++) { const an = i / seg * 6.2832, cs = Math.cos(an), sn = Math.sin(an); add([pt[0] + (x[0] * cs + y[0] * sn) * rr, pt[1] + (x[1] * cs + y[1] * sn) * rr, pt[2] + (x[2] * cs + y[2] * sn) * rr], nn, c); }
      for (let i = 0; i < seg; i++) nn === d ? idx.push(c0, rb + i, rb + i + 1) : idx.push(c0, rb + i + 1, rb + i);
    }
  }
  function quad(p0, p1, p2, p3, c, n) { const a = add(p0, n, c), b = add(p1, n, c), cc = add(p2, n, c), d = add(p3, n, c); idx.push(a, b, cc, a, cc, d); }
  function done() {
    gl.bindVertexArray(null);
    const mk = (data, target = gl.ARRAY_BUFFER) => { const b = gl.createBuffer(); gl.bindBuffer(target, b); gl.bufferData(target, data, gl.STATIC_DRAW); return b; };
    const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, mk(new Float32Array(pos))); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mk(new Float32Array(nor))); gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mk(new Float32Array(col))); gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 0, 0);
    mk(pos.length / 3 > 65535 ? new Uint32Array(idx) : new Uint16Array(idx), gl.ELEMENT_ARRAY_BUFFER);
    gl.bindVertexArray(null);
    return {vao, n: idx.length, type: pos.length / 3 > 65535 ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT};
  }
  return {tube, quad, add, idx, done};
}
// Mərkəzi Azəri: dəniz dibinə oturan polad dayaq bloku (aşağı hissə). 1 vahid təxminən 3 metrdir
function buildJacket() {
  const m = mesh(), YEL = [.66, .54, .2, 1], GRY = [.46, .5, .5, 1];
  const cols = [0, -5, -10, -15], LV = [0, 6, 12, 18, 24], bat = .055, top = LV[LV.length - 1];
  const leg = (ix, iz, y) => [(ix ? 1 : -1) * (2.5 + (top - y) * bat), y, cols[iz] + (iz === 0 ? 1 : iz === 3 ? -1 : 0) * (top - y) * bat * .9];
  for (let ix = 0; ix < 2; ix++) for (let iz = 0; iz < 4; iz++) m.tube(leg(ix, iz, -.2), leg(ix, iz, top), .34, .3, YEL, 14);
  for (let li = 0; li < LV.length; li++) {
    const y = LV[li];
    for (let iz = 0; iz < 4; iz++) m.tube(leg(0, iz, y), leg(1, iz, y), .15, .15, YEL, 8);          // eninə
    for (let ix = 0; ix < 2; ix++) for (let iz = 0; iz < 3; iz++) m.tube(leg(ix, iz, y), leg(ix, iz + 1, y), .15, .15, YEL, 8);
    if (li < LV.length - 1) {
      const y2 = LV[li + 1];
      for (let iz = 0; iz < 4; iz++) { m.tube(leg(0, iz, y), leg(1, iz, y2), .12, .12, YEL, 7); m.tube(leg(1, iz, y), leg(0, iz, y2), .12, .12, YEL, 7); }
      for (let ix = 0; ix < 2; ix++) for (let iz = 0; iz < 3; iz++) { m.tube(leg(ix, iz, y), leg(ix, iz + 1, y2), .12, .12, YEL, 7); m.tube(leg(ix, iz + 1, y), leg(ix, iz, y2), .12, .12, YEL, 7); }
      m.tube(leg(0, 0, y), leg(1, 1, y), .1, .1, YEL, 6); m.tube(leg(1, 2, y), leg(0, 3, y), .1, .1, YEL, 6);     // üfüqi çarpaz
    }
  }
  for (let a = 0; a < 3; a++) for (let b = 0; b < 4; b++) m.tube([-1.2 + a * 1.2, -.3, -4.6 - b * 1.9], [-1.2 + a * 1.2, top, -4.6 - b * 1.9], .11, .11, GRY, 7);   // quyu boruları
  for (const [ix, iz] of [[0, 0], [1, 0], [0, 3], [1, 3]]) {                                          // künc dayaqlarında svay yuvaları
    const c = leg(ix, iz, 0), sx = ix ? 1 : -1, sz = iz ? -1 : 1;
    for (const [dx, dz] of [[sx * .95, 0], [0, sz * .95], [sx * .8, sz * .8]]) {
      m.tube([c[0] + dx, -.4, c[2] + dz], [c[0] + dx, 4.4, c[2] + dz], .4, .4, YEL, 12, true);
      m.tube([c[0] + dx, 4.4, c[2] + dz], [c[0] + dx, 5.4, c[2] + dz], .27, .27, GRY, 10, true);
      m.tube([c[0] + dx * .2, 1, c[2] + dz * .2], [c[0] + dx, 1, c[2] + dz], .09, .09, YEL, 6); m.tube([c[0] + dx * .2, 3.6, c[2] + dz * .2], [c[0] + dx, 3.6, c[2] + dz], .09, .09, YEL, 6);
    }
  }
  // dib: fənərin işığında görünən lil; kənarlara doğru əriyir
  const GX = 30, GZ = 30, x0 = -26, x1 = 26, z0 = 19, z1 = -34, hh = (x, z) => -.25 + .35 * Math.sin(x * .45 + 1.3) * Math.cos(z * .37) + .2 * Math.sin(x * 1.3 + z * .9);
  const base = [];
  for (let j = 0; j <= GZ; j++) for (let i = 0; i <= GX; i++) {
    const x = lerp(x0, x1, i / GX), z = lerp(z0, z1, j / GZ), e = .12;
    const n = [-(hh(x + e, z) - hh(x - e, z)) / (2 * e), 1, -(hh(x, z + e) - hh(x, z - e)) / (2 * e)], l = Math.hypot(n[0], n[1], n[2]);
    base.push(m.add([x, hh(x, z), z], [n[0] / l, n[1] / l, n[2] / l], [.36, .33, .28, 0]));
  }
  for (let j = 0; j < GZ; j++) for (let i = 0; i < GX; i++) { const a = base[j * (GX + 1) + i], b = a + 1, c = base[(j + 1) * (GX + 1) + i], d = c + 1; m.idx.push(a, b, c, b, d, c); }
  return m.done();
}
// Neft Daşları: estakadanın suya enən polad svayları
function buildPiles() {
  const m = mesh(), ST = [.5, .4, .3, 1], T = 9, Bm = -9;
  for (let k = 0; k < 6; k++) {
    const z = -k * 4.2, xa = -1.5, xb = 1.5;
    m.tube([xa - .25, Bm, z], [xa + .1, T, z], .2, .2, ST, 12); m.tube([xb + .25, Bm, z], [xb - .1, T, z], .2, .2, ST, 12);
    for (const y of [5.5, 0, -5.5]) { m.tube([xa, y, z], [xb, y, z], .09, .09, ST, 7); }
    m.tube([xa, 5.5, z], [xb, 0, z], .07, .07, ST, 6); m.tube([xb, 5.5, z], [xa, 0, z], .07, .07, ST, 6);
    m.tube([xa, 0, z], [xb, -5.5, z], .07, .07, ST, 6); m.tube([xb, 0, z], [xa, -5.5, z], .07, .07, ST, 6);
    if (k < 5) for (const x of [xa, xb]) { m.tube([x, 5.5, z], [x, 5.5, z - 4.2], .08, .08, ST, 6); m.tube([x, 5.5, z], [x, 0, z - 4.2], .06, .06, ST, 6); }
  }
  for (const [x, z] of [[-4.6, -6], [5.2, -11], [-6.4, -15]]) m.tube([x, Bm, z], [x, T, z], .17, .17, ST, 10);   // köhnə, tək qalan svaylar
  return m.done();
}
const OBJ = {jacket: {build: buildJacket, floor: 1, z: -20, dy: -.5, span: 2.3, fade: 40, xk: 1.6, lamp: 1.9, fy: [-60, -59, 13, 22]}, piles: {build: buildPiles, z: -9.5, dy: 0, span: 1.9, fade: 26, xk: 1, lamp: 1, fy: [-9, -5, 3.2, 7]}};

/* ---------- yerləşmə ---------- */
function setup() {
  ITEMS.length = 0;
  (CFG.items || []).forEach((it, k) => {
    const el = document.querySelector('.stg[data-life="' + it.id + '"]'); if (!el) return;
    if (it.kind === 'school') { if (CFG.sp[it.sp] && BEH[it.sp]) ITEMS.push(mkSchool(it, el, k)); }
    else if (OBJ[it.kind]) ITEMS.push({kind: it.kind, id: it.id, el, o: OBJ[it.kind], m: null, x: 0, y: 0, w: 1, side: el.closest('.stop').classList.contains('R') ? 1 : -1});
  });
}
function measure() {
  W = innerWidth; H = innerHeight; K = SH / H; VW = SH * W / H;
  const sy = window.scrollY;
  for (const s of ITEMS) { const r = s.el.getBoundingClientRect(); s.px = r.left + r.width / 2; s.py = r.top + sy + r.height / 2; s.pw = r.width; s.ph = r.height; s.x = (s.px - W / 2) * K; s.y = -s.py * K; s.w = r.width * K; }
}
function fit() { DPR = Math.min(devicePixelRatio || 1, QD); cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); persp(); }
function size() { for (const s of ITEMS) s.on = false; measure(); fit(); }

/* ---------- sürünün hərəkəti: əyilmiş dairəvi yol; yaxın qol ekranın qabağından, uzaq qol bulanıqlığın içindən keçir ---------- */
function path(s, th, f, out) {
  const c = Math.cos(th), sn = Math.sin(th), g = s.g;
  let nx = c / g.A, nz = sn / g.B; const nl = Math.hypot(nx, nz); nx /= nl; nz /= nl;
  const lx = g.A * c + nx * f.lat * g.lat, lz = g.B * sn + nz * f.lat * g.lat;
  out[0] = g.cx + lx * g.cr - lz * g.sr;
  out[2] = g.cz + lx * g.sr + lz * g.cr;
  out[1] = s.y + g.dy + f.ver * g.ver + g.ay * Math.sin(th * g.ny + g.yp) + g.ty * (1 - sn) * .5;
}
function geom(s) {
  const b = s.b, sf = clamp(s.w / 4.2, .62, 1.15), len = b.len * sf, loop = b.loop || 0;
  const B = loop ? Math.min(b.B * sf, s.w * loop * .75) : Math.min(b.B, VW * .5), A = loop ? s.w * loop : VW * .5 * (1 + B / D0) * 1.05 + len * .7;
  const rot = s.side * (loop ? 0 : .1);
  s.g = {A, B, len, cx: loop ? s.x : s.x * .35, cz: -(D0 + B * (loop ? .3 : .92)), cr: Math.cos(rot), sr: Math.sin(rot), lat: b.lat * sf, ver: Math.min(b.ver * sf, s.ph * K * .42), al: b.al * sf, dy: 0, ay: (b.ay || .35) * sf, ny: 2, yp: s.side, ty: .5 * sf, sp: b.v * sf, dir: s.side > 0 ? 1 : -1,
    circ: Math.PI * (3 * (A + B) - Math.sqrt((3 * A + B) * (A + 3 * B)))};
}
function place(s, t, camY, ms) {
  const flee = PT.on && ms - PT.t < 6000 && !RM, FR = 1.25 + s.g.len * .35;
  const g = s.g, N = s.Ne = s.N > 12 ? Math.max(8, Math.round(s.N * QN)) : s.N, I = s.inst, om = g.sp / g.circ * 6.2832 * g.dir, b = s.b;
  for (let i = 0; i < N; i++) {
    const f = s.fish[i];
    const th = s.th0 + om * (t - s.t0) + f.c * 6.2832 / b.cl + (f.al * g.al + Math.sin(t * f.wf + f.wp) * .25 * g.len) / g.circ * 6.2832;
    path(s, th, f, _a); path(s, th + g.dir * .04, f, _b);
    const bob = b.bob ? Math.sin(t * f.yf * 3 + f.yp) * b.bob : Math.sin(t * f.yf + f.yp) * .1;
    _a[1] += bob; _b[1] += bob;
    let tx = 0, ty = 0;
    if (flee) {                                             // göstəricidən qaç: D0 müstəvisinə proyeksiyada ölç
      const kz = D0 / -_a[2], dx = _a[0] * kz - PT.x, dy = (_a[1] - camY) * kz - PT.y, d2 = dx * dx + dy * dy;
      if (d2 < FR * FR) { const d = Math.sqrt(d2) || .001, k = 1 - d / FR, p = k * k * (1.1 + s.g.len * .3) / kz; tx = dx / d * p; ty = dy / d * p; }
    }
    f.ox += (tx - f.ox) * .1; f.oy += (ty - f.oy) * .1;
    _a[0] += f.ox; _a[1] += f.oy; _b[0] += f.ox; _b[1] += f.oy;
    let fx = _b[0] - _a[0], fy = _b[1] - _a[1], fz = _b[2] - _a[2]; const fl = Math.hypot(fx, fy, fz) || 1; fx /= fl; fy /= fl; fz /= fl;
    let rx = -fz, rz = fx; const rl = Math.hypot(rx, rz) || 1; rx /= rl; rz /= rl;      // sağ = irəli × yuxarı
    const ux = -rz * fy, uy = rz * fx - rx * fz, uz = rx * fy, L = g.len * f.sc;
    s.zs[i] = _a[2]; s.order[i] = i;
    f.m = f.m || new Float32Array(20); const M = f.m;
    M[0] = fx * L; M[1] = fy * L; M[2] = fz * L; M[3] = 0; M[4] = ux * L; M[5] = uy * L; M[6] = uz * L; M[7] = 0; M[8] = rx * L; M[9] = 0; M[10] = rz * L; M[11] = 0; M[12] = _a[0]; M[13] = _a[1]; M[14] = _a[2]; M[15] = 1;
    const cs = Math.cos(th), sn = Math.sin(th), den = g.A * g.A * sn * sn + g.B * g.B * cs * cs;      // dönmədə bədən yolun əyrisinə uyğun bükülür
    M[16] = f.ph; M[17] = f.fr; M[18] = f.sh; M[19] = clamp(g.dir * g.A * g.B / Math.pow(den, 1.5) * L * .6, -.45, .45);
  }
  const zs = s.zs, od = N === s.N ? s.order : s.order.subarray(0, N); od.sort((a, c) => zs[a] - zs[c]);          // uzaqdan yaxına çək
  for (let k = 0; k < N; k++) I.set(s.fish[od[k]].m, k * 20);
}
function bindSchool(s) {
  const g = s.geo = fishGeo(s.sp);
  s.vao = gl.createVertexArray(); gl.bindVertexArray(s.vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, g.pos); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, g.nor); gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, g.uv); gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);
  s.ibuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, s.ibuf); gl.bufferData(gl.ARRAY_BUFFER, s.inst.byteLength, gl.DYNAMIC_DRAW);
  for (let k = 0; k < 5; k++) { gl.enableVertexAttribArray(3 + k); gl.vertexAttribPointer(3 + k, 4, gl.FLOAT, false, 80, k * 16); gl.vertexAttribDivisor(3 + k, 1); }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.idx);
  gl.bindVertexArray(null);
}

/* ---------- çəkiliş ---------- */
const VP = new Float32Array(16);
let dirty = false, lost = false, tsec = 0, lastMs = 0, QN = 1, QD = 1.5, ema = 16, slow = 0;
const FIXQ = /[?&]q=hi/.test(location.search);
function common(U, env, camY, alpha) {
  gl.uniformMatrix4fv(U.uVP, false, VP); gl.uniform3f(U.uCam, 0, camY, 0);
  gl.uniform3f(U.uWTop, env.top[0], env.top[1], env.top[2]); gl.uniform3f(U.uWBot, env.bot[0], env.bot[1], env.bot[2]);
  gl.uniform2f(U.uRes, cv.width, cv.height); gl.uniform4f(U.uLight, env.day, env.lamp, env.caus, 0); gl.uniform3f(U.uTint, env.tint[0], env.tint[1], env.tint[2]);
  gl.uniform4f(U.uFog, env.fn, env.fk, env.f0, env.f1); gl.uniform1f(U.uAlpha, alpha); gl.uniform1f(U.uSurf, env.surf); gl.uniform1f(U.uT, tsec);
}
function frame(ms, sy, dep, sea) {
  if (lost) return;
  const raw = ms - lastMs, dt = Math.min(.05, raw / 1000 || .016); lastMs = ms; tsec += RM ? dt * .35 : dt;
  const camY = -(sy + H / 2) * K, vis = [];
  for (const s of ITEMS) {
    const span = (s.o ? s.o.span : 1.3) * SH, dy = Math.abs(s.y - camY);
    if (dy > span) { s.on = false; continue; }
    s.a = sstep(span, span * .72, dy);
    if (s.o && s.o.floor) { const mud = s.y + s.o.dy * SH; s.a *= sstep(mud - .2, mud + 1.5, camY); if (s.a < .004) continue; }
    vis.push(s);
  }
  if (!vis.length) { if (dirty) { gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); dirty = false; } return; }
  if (!FIXQ && raw > 0 && raw < 400) {
    ema += (raw - ema) * .06; slow = ema > 42 ? slow + 1 : Math.max(0, slow - 2);
    if (slow > 80 && (QD > 1 || QN > .4)) { slow = 0; ema = 24; if (QD > 1) { QD = 1; fit(); } else QN = QN > .7 ? .6 : .38; }
  }
  const V = Math.exp(-Math.max(0, dep) / 45), d = Math.max(0, dep);
  const lin = c => [c[0] / 255, c[1] / 255, c[2] / 255];
  const env = {top: lin(sea.top), bot: lin(sea.bot), day: .07 + 1.02 * V, lamp: sstep(16, 75, d) * 1.25, caus: sstep(22, 2, d) * .5,
    tint: [lerp(1, .5, sstep(0, 40, d)), lerp(1, .86, sstep(0, 60, d)), 1], fn: 9, fk: lerp(.066, .085, sstep(60, 300, d)), f0: 21, f1: 31, surf: cv.height - sea.yw * DPR};
  // P * V (kamera yalnız şaquli sürüşür)
  VP.set(P); VP[12] = 0; VP[13] = -camY * P[5]; VP[14] = P[14]; VP[15] = 0;
  gl.viewport(0, 0, cv.width, cv.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); dirty = true;
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL); gl.enable(gl.CULL_FACE);
  // əvvəl qurğular (dərinlik yazılır), sonra canlılar (uzaqdan yaxına)
  let first = true;
  for (const s of vis) if (s.o) {
    if (!s.m) s.m = s.o.build();
    if (first) { gl.useProgram(PO.p); first = false; }
    gl.depthMask(true); common(PO.U, Object.assign({}, env, {f0: s.o.fade, f1: s.o.fade + 13, lamp: env.lamp * s.o.lamp}), camY, s.a);
    gl.uniform3f(PO.U.uOrg, s.x * s.o.xk, s.y + s.o.dy * SH, s.o.z); gl.uniform1f(PO.U.uScl, clamp(VW / 9.5, .5, 1)); gl.uniform4f(PO.U.uFadeY, s.o.fy[0], s.o.fy[1], s.o.fy[2], s.o.fy[3]);
    gl.bindVertexArray(s.m.vao); gl.drawElements(gl.TRIANGLES, s.m.n, s.m.type, 0); gl.bindVertexArray(null);
  }
  first = true;
  for (const s of vis) if (s.kind === 'school') {
    if (!s.vao) bindSchool(s);
    const g = s.geo; if (!g.ready) { loadTex(g, s.sp); continue; }
    if (!s.on) { s.on = true; geom(s); s.t0 = tsec; s.th0 = Math.PI / 2 - s.g.dir * (s.b.loop ? .3 : Math.min(1.25, (VW * .5 + s.g.al * .5) / s.g.A)); }   // ilk dəstə kadra kənardan girir
    place(s, tsec, camY, ms);
    if (first) { gl.useProgram(PF.p); gl.activeTexture(gl.TEXTURE0); gl.uniform1i(PF.U.uTex, 0); first = false; }
    gl.depthMask(false);
    common(PF.U, env, camY, s.a * sstep(0, 500, ms - g.t0));
    const b = s.b, hz = clamp(s.g.sp / (.5 * s.g.len), .45, 3.2);
    gl.uniform4f(PF.U.uWave, b.amp, b.kw, hz * 6.2832, b.hd);
    gl.bindTexture(gl.TEXTURE_2D, g.tex); gl.bindVertexArray(s.vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, s.ibuf); gl.bufferSubData(gl.ARRAY_BUFFER, 0, s.inst);
    gl.drawElementsInstanced(gl.TRIANGLES, g.n, gl.UNSIGNED_SHORT, 0, s.Ne);
  }
  gl.bindVertexArray(null); gl.depthMask(true);
}
function clear() { if (dirty && !lost) { gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); dirty = false; } }
function preload(sy) { const camY = -(sy + H / 2) * K; for (const s of ITEMS) if (s.kind === 'school' && Math.abs(s.y - camY) < SH * 4) { const g = fishGeo(s.sp); if (!g.ready) loadTex(g, s.sp); } }

cv.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; document.documentElement.classList.remove('gl'); });
document.documentElement.classList.add('gl');
setup(); size();
window.XZlife = {frame, clear, size, measure, preload, items: ITEMS};
})();
