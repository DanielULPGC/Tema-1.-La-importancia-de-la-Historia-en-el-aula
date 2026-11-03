/*
 * Las caras de Clío · escena 3D (Three.js 0.160.0)
 * Foro circular de mármol con el íncipit de Heródoto grabado en el pavimento, columna de Clío
 * con su rollo y corona de laurel de ocho hojas (una por estación, se doran al completarla)
 * y ocho pedestales con objetos animados. Todo el modelado es procedimental.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const RADIO = 10.5;
const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || "#888";

export function crearEscena(contenedor, opciones) {
  const { estaciones, onSeleccion, onHover } = opciones;
  const N = estaciones.length;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pausa = reducido;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(renderer.domElement);
  let ligero = false;
  try {
    const gl = renderer.getContext(), ext = gl.getExtension("WEBGL_debug_renderer_info");
    const nombre = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    if (/swiftshader|llvmpipe|software/i.test(nombre)) { renderer.shadowMap.enabled = false; renderer.setPixelRatio(1); ligero = true; }
  } catch (e) { /* sin información */ }

  const escena = new THREE.Scene();
  // entorno para reflejos de metales y espejos
  const pmrem = new THREE.PMREMGenerator(renderer);
  escena.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  const camara = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  const POS0 = new THREE.Vector3(0, 22, 32), OBJ0 = new THREE.Vector3(0, 1.8, 0);
  camara.position.copy(POS0);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.minDistance = 5;
  controles.maxDistance = 44;
  controles.maxPolarAngle = Math.PI * 0.47;
  controles.target.copy(OBJ0);

  /* ---------- luz ---------- */
  const hemi = new THREE.HemisphereLight(0xfff6ea, 0x5a4a3c, 0.75);
  escena.add(hemi);
  const relleno = new THREE.DirectionalLight(0xdfe8ff, 0.45);
  relleno.position.set(-12, 8, -10);
  escena.add(relleno);
  const sol = new THREE.DirectionalLight(0xffe8c8, 1.9);
  sol.position.set(9, 19, 11);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 55 });
  sol.shadow.bias = -0.0005;
  escena.add(sol);

  /* ---------- materiales ---------- */
  const mat = {
    suelo: new THREE.MeshStandardMaterial({ roughness: 0.82 }),
    marmol: new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.02 }),
    oro: new THREE.MeshStandardMaterial({ metalness: 0.85, roughness: 0.28 }),
    tinta: new THREE.MeshStandardMaterial({ roughness: 0.6 }),
    madera: new THREE.MeshStandardMaterial({ color: 0x7a5236, roughness: 0.7 }),
    papel: new THREE.MeshStandardMaterial({ color: 0xf3ead8, roughness: 0.9, side: THREE.DoubleSide }),
    basalto: new THREE.MeshStandardMaterial({ color: 0x3b3430, roughness: 0.95, flatShading: true }),
    espejo: new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.06 })
  };

  /* ---------- texturas de lienzo ---------- */
  function lienzo(w, h, pintar) {
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    pintar(c.getContext("2d"), w, h);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return t;
  }
  function texturaSuelo() {
    return lienzo(2048, 2048, (g) => {
      const cx = 1024, veta = css("--sc-dial"), tinta = css("--sc-tinta"), oro = css("--sc-laton");
      g.fillStyle = css("--sc-suelo"); g.fillRect(0, 0, 2048, 2048);
      // vetas suaves del mármol
      g.globalAlpha = 0.18; g.strokeStyle = veta;
      for (let i = 0; i < 70; i++) {
        g.lineWidth = 1 + Math.random() * 3; g.beginPath();
        let x = Math.random() * 2048, y = Math.random() * 2048; g.moveTo(x, y);
        for (let k = 0; k < 6; k++) { x += (Math.random() - 0.3) * 160; y += (Math.random() - 0.5) * 120; g.lineTo(x, y); }
        g.stroke();
      }
      g.globalAlpha = 1;
      // anillos
      g.strokeStyle = veta; g.lineWidth = 6;
      [1010, 935, 720, 560, 300].forEach((r) => { g.beginPath(); g.arc(cx, cx, r, 0, Math.PI * 2); g.stroke(); });
      // greca entre 935 y 1010
      g.strokeStyle = tinta; g.lineWidth = 7; g.lineJoin = "miter";
      const n = 96;
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * Math.PI * 2, da = (Math.PI * 2) / n;
        const P = (fa, r) => [cx + Math.sin(a0 + fa * da) * r, cx - Math.cos(a0 + fa * da) * r];
        const pts = [[0, 948], [0, 998], [0.8, 998], [0.8, 960], [0.35, 960], [0.35, 984], [0.6, 984]];
        g.beginPath(); pts.forEach(([fa, r], k) => { const [x, y] = P(fa, r); k ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke();
        const [x1, y1] = P(0, 948), [x2, y2] = P(1, 948); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
      }
      // íncipit de Heródoto en el anillo interior
      const texto = "ΗΡΟΔΟΤΟΥ ΑΛΙΚΑΡΝΗΣΣΕΟΣ ΙΣΤΟΡΙΗΣ ΑΠΟΔΕΞΙΣ ΗΔΕ · ";
      g.fillStyle = tinta; g.font = "600 58px Cinzel, 'Times New Roman', serif"; g.textAlign = "center"; g.textBaseline = "middle";
      const total = texto.length * 2, r = 640;
      for (let i = 0; i < total; i++) {
        const ch = texto[i % texto.length], a = (i / total) * Math.PI * 2;
        g.save(); g.translate(cx + Math.sin(a) * r, cx - Math.cos(a) * r); g.rotate(a); g.fillText(ch, 0, 0); g.restore();
      }
      // radios hacia los pedestales
      g.strokeStyle = oro; g.lineWidth = 5; g.setLineDash([18, 22]);
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        g.beginPath(); g.moveTo(cx + Math.sin(a) * 310, cx - Math.cos(a) * 310); g.lineTo(cx + Math.sin(a) * 550, cx - Math.cos(a) * 550); g.stroke();
      }
      g.setLineDash([]);
    });
  }
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(17.5, 128), mat.suelo);
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true;
  escena.add(suelo);
  // escalón perimetral
  const grada = new THREE.Mesh(new THREE.CylinderGeometry(18.2, 18.6, 0.5, 128, 1, true), mat.marmol);
  grada.position.y = -0.25; escena.add(grada);

  /* ---------- columna de Clío ---------- */
  const clio = new THREE.Group();
  const estilobato = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.7, 0.45, 48), mat.marmol);
  estilobato.position.y = 0.22; clio.add(estilobato);
  const fusteG = new THREE.CylinderGeometry(0.55, 0.62, 3.6, 20, 1);
  const fuste = new THREE.Mesh(fusteG, mat.marmol); fuste.position.y = 2.25; clio.add(fuste);
  for (let i = 0; i < 20; i++) { // estrías
    const a = (i / 20) * Math.PI * 2;
    const e = new THREE.Mesh(new THREE.BoxGeometry(0.04, 3.5, 0.04), mat.tinta);
    e.material = new THREE.MeshStandardMaterial({ color: 0x000000, transparent: true, opacity: 0.12 });
    e.position.set(Math.sin(a) * 0.585, 2.25, Math.cos(a) * 0.585); e.rotation.y = a; clio.add(e);
  }
  const equino = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.6, 0.3, 32), mat.marmol); equino.position.y = 4.2; clio.add(equino);
  const abaco = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 1.8), mat.marmol); abaco.position.y = 4.45; clio.add(abaco);
  // rollo de Clío
  const rollo = new THREE.Group(); rollo.position.y = 4.85; clio.add(rollo);
  const cil = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.2, 24), mat.papel); cil.rotation.z = Math.PI / 2; rollo.add(cil);
  [-0.65, 0.65].forEach((x) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.25, 12), mat.oro); p.rotation.z = Math.PI / 2; p.position.x = x; rollo.add(p); });
  const hoja = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.9, 1, 8), mat.papel);
  { const pos = hoja.geometry.attributes.position; for (let i = 0; i < pos.count; i++) { const y = pos.getY(i); pos.setZ(i, Math.pow((y + 0.45), 2) * 0.35); } hoja.geometry.computeVertexNormals(); }
  hoja.position.set(0, -0.2, 0.4); hoja.rotation.x = -1.1; rollo.add(hoja);
  // corona de laurel
  const corona = new THREE.Group(); corona.position.y = 6.0; clio.add(corona);
  const aro = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.035, 8, 96), mat.oro); aro.rotation.x = Math.PI / 2; corona.add(aro);
  const hojas = [];
  const hojaG = new THREE.SphereGeometry(0.28, 16, 8); hojaG.scale(0.45, 0.14, 1);
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const m = new THREE.MeshStandardMaterial({ color: 0x55603f, emissive: 0x000000, metalness: 0.25, roughness: 0.45 });
    const h = new THREE.Mesh(hojaG, m);
    h.position.set(Math.sin(a) * 1.25, 0, -Math.cos(a) * 1.25); h.rotation.y = -a; h.rotation.z = 0.5;
    corona.add(h); hojas.push(h);
    // hojitas decorativas intermedias
    const d = new THREE.Mesh(hojaG, new THREE.MeshStandardMaterial({ color: 0x3f4a31, roughness: 0.6 }));
    const b = a + Math.PI / N; d.scale.setScalar(0.6);
    d.position.set(Math.sin(b) * 1.25, 0.05, -Math.cos(b) * 1.25); d.rotation.y = -b; d.rotation.z = -0.5; corona.add(d);
  }
  clio.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  escena.add(clio);

  /* ---------- rótulos (sprites) ---------- */
  function rotulo(num, texto) {
    const tex = lienzo(640, 160, (g) => {
      g.fillStyle = css("--surface"); g.strokeStyle = css("--sc-laton"); g.lineWidth = 6;
      g.beginPath(); g.roundRect(6, 6, 628, 148, 22); g.fill(); g.stroke();
      g.fillStyle = css("--sc-laton"); g.font = "700 72px Cinzel, serif"; g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText(String(num), 70, 84);
      g.fillStyle = css("--sc-tinta"); g.font = "700 46px 'Atkinson Hyperlegible', sans-serif"; g.textAlign = "left";
      let t = texto; while (g.measureText(t).width > 500 && t.length > 4) t = t.slice(0, -2);
      if (t !== texto) t = t.trim() + "…";
      g.fillText(t, 124, 84);
    });
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
    s.scale.set(3.2, 0.8, 1);
    return s;
  }
  function etiqueta(texto, ancho = 1.4, color) {
    const tex = lienzo(512, 128, (g) => {
      g.fillStyle = color || css("--sc-tinta"); g.font = "700 64px 'Atkinson Hyperlegible', sans-serif";
      g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(texto, 256, 66);
    });
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false, transparent: true }));
    s.scale.set(ancho, ancho / 4, 1);
    return s;
  }

  /* ---------- pedestales ---------- */
  const pedestales = [], animadores = [], objetivoSel = [];
  const control = { foto: { modo: "animar", capa: null, k: 1 }, balanza: { objetivo: null, brazo: null, platos: [] } };

  estaciones.forEach((e, i) => {
    const a = (i / N) * Math.PI * 2;
    const grupo = new THREE.Group();
    grupo.position.set(Math.sin(a) * RADIO, 0, -Math.cos(a) * RADIO);
    grupo.rotation.y = -a + Math.PI;
    const plinto = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.6, 48), mat.marmol.clone());
    plinto.position.y = 0.3; plinto.castShadow = plinto.receiveShadow = true;
    plinto.userData.estacion = i;
    grupo.add(plinto);
    const borde = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 96), mat.oro);
    borde.rotation.x = Math.PI / 2; borde.position.y = 0.61; grupo.add(borde);
    const obj = new THREE.Group(); obj.position.y = 0.6; grupo.add(obj);
    const constructores = [espejos, banderas, fotografia, balanza, volcan, constelacion, encrucijada, mesa];
    (constructores[i] || (() => {}))(obj);
    obj.traverse((m) => { if (m.isMesh) { m.castShadow = !m.userData.sinSombra; m.userData.estacion = i; } });
    const r = rotulo(e.num, e.titulo); r.position.y = 4.3; grupo.add(r);
    escena.add(grupo);
    pedestales.push({ grupo, plinto, angulo: a });
    objetivoSel.push(plinto); obj.traverse((m) => { if (m.isMesh) objetivoSel.push(m); });
  });

  /* 1 · tres espejos: escolar, cotidiana, académica */
  function espejos(g) {
    const datos = [["Escolar", 0x3f6f9a, -1.05], ["Cotidiana", 0xc0703a, 0], ["Académica", 0x2f5a46, 1.05]];
    datos.forEach(([nombre, color, x], k) => {
      const e = new THREE.Group(); e.position.set(x, 0, k === 1 ? -0.25 : 0.15); g.add(e);
      const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.9, 10), mat.oro); pie.position.y = 0.45; e.add(pie);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.06, 24), mat.oro); base.position.y = 0.03; e.add(base);
      const cabeza = new THREE.Group(); cabeza.position.y = 1.55; e.add(cabeza);
      const marco = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.045, 12, 64), new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.35 }));
      marco.scale.y = 1.35; cabeza.add(marco);
      const luna = new THREE.Mesh(new THREE.CircleGeometry(0.41, 48), mat.espejo); luna.scale.y = 1.35; cabeza.add(luna);
      const dorso = new THREE.Mesh(new THREE.CircleGeometry(0.41, 48), new THREE.MeshStandardMaterial({ color })); dorso.scale.y = 1.35; dorso.rotation.y = Math.PI; dorso.position.z = -0.01; cabeza.add(dorso);
      const et = etiqueta(nombre, 0.9); et.position.y = 0.95; e.add(et);
      animadores.push((t) => { cabeza.rotation.y = Math.sin(t * 0.5 + k * 2.1) * 0.5; });
    });
  }

  /* 2 · cinco banderas al viento (cinco funciones) */
  function banderas(g) {
    const cols = [0xc23b31, 0x2f6fb5, 0x8a4fb0, 0x3f9a55, 0x2aa3b8];
    cols.forEach((c, k) => {
      const ang = (k / 5) * Math.PI * 2 + 0.3;
      const b = new THREE.Group(); b.position.set(Math.sin(ang) * 0.95, 0, Math.cos(ang) * 0.95); g.add(b);
      const alto = 2.0 + (k % 2) * 0.35;
      const mastil = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, alto, 8), mat.tinta); mastil.position.y = alto / 2; b.add(mastil);
      const remate = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), mat.oro); remate.position.y = alto; b.add(remate);
      const telaG = new THREE.PlaneGeometry(0.8, 0.5, 20, 6);
      telaG.translate(0.4, 0, 0);
      const tela = new THREE.Mesh(telaG, new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, side: THREE.DoubleSide }));
      tela.position.y = alto - 0.3; b.add(tela);
      const base0 = telaG.attributes.position.array.slice();
      animadores.push((t) => {
        const p = telaG.attributes.position.array;
        for (let i = 0; i < p.length; i += 3) { const x = base0[i]; p[i + 2] = Math.sin(x * 7 - t * 4 + k) * 0.09 * x; p[i + 1] = base0[i + 1] - x * 0.06 * (1 + Math.sin(t + k)); }
        telaG.attributes.position.needsUpdate = true; telaG.computeVertexNormals();
        b.rotation.y = Math.sin(t * 0.3 + k) * 0.3 + 0.6;
      });
    });
  }

  /* 3 · la fotografía borrada */
  function fotografia(g) {
    const sepia = ["#d9c39c", "#b99d72", "#8c7150", "#5e4a33", "#3a2c1d"];
    const figura = (c, x, h, sombrero) => {
      c.fillStyle = sepia[3]; c.beginPath(); c.arc(x, 300 - h, 34, 0, Math.PI * 2); c.fill();
      c.fillStyle = sepia[4]; c.beginPath(); c.roundRect(x - 58, 340 - h, 116, 260 + h, 30); c.fill();
      if (sombrero) { c.fillRect(x - 46, 258 - h, 92, 14); c.fillRect(x - 30, 222 - h, 60, 40); }
    };
    const fondo = lienzo(1024, 768, (c, w, h) => {
      const grd = c.createLinearGradient(0, 0, 0, h); grd.addColorStop(0, sepia[0]); grd.addColorStop(1, sepia[1]);
      c.fillStyle = grd; c.fillRect(0, 0, w, h);
      c.fillStyle = sepia[2]; c.fillRect(0, 560, w, 208); // muro
      c.strokeStyle = sepia[3]; c.lineWidth = 3; for (let x = 0; x < w; x += 64) { c.beginPath(); c.moveTo(x, 560); c.lineTo(x, 768); c.stroke(); }
      figura(c, 210, 20, true); figura(c, 420, 40, false); figura(c, 820, 10, true);
      // grano
      const img = c.getImageData(0, 0, w, h); for (let i = 0; i < img.data.length; i += 4) { const n = (Math.random() - 0.5) * 26; img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n; } c.putImageData(img, 0, 0);
      c.strokeStyle = "#f4ead7"; c.lineWidth = 26; c.strokeRect(0, 0, w, h);
    });
    const capaTex = lienzo(1024, 768, (c) => { figura(c, 620, 30, false); });
    const caballete = new THREE.Group(); caballete.position.set(0, 0, 0); g.add(caballete);
    [[-0.7, 0.2], [0.7, 0.2], [0, -0.45]].forEach(([x, z]) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 2.5, 8), mat.madera);
      p.position.set(x * 0.85, 1.2, z); p.rotation.x = z < 0 ? 0.32 : -0.14; p.rotation.z = -x * 0.1; caballete.add(p);
    });
    const marco = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.48, 0.08), mat.oro); marco.position.set(0, 1.75, 0.4); marco.rotation.x = -0.12; caballete.add(marco);
    const foto = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 1.32), new THREE.MeshStandardMaterial({ map: fondo, roughness: 0.8 }));
    foto.position.set(0, 1.75, 0.445); foto.rotation.x = -0.12; caballete.add(foto);
    const capaM = new THREE.MeshStandardMaterial({ map: capaTex, transparent: true, roughness: 0.8, depthWrite: false });
    const capa = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 1.32), capaM);
    capa.position.set(0, 1.75, 0.45); capa.rotation.x = -0.12; capa.userData.sinSombra = true; caballete.add(capa);
    const repisa = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.25), mat.madera); repisa.position.set(0, 0.98, 0.5); caballete.add(repisa);
    // aerógrafo y escalpelo sobre la repisa
    const aero = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.4, 10), mat.oro); aero.rotation.z = Math.PI / 2; aero.position.set(-0.5, 1.04, 0.54); caballete.add(aero);
    const escalpelo = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.015, 0.03), mat.espejo); escalpelo.position.set(0.5, 1.03, 0.54); caballete.add(escalpelo);
    control.foto.capa = capaM;
    animadores.push((t) => {
      const f = control.foto;
      const objetivo = f.modo === "original" ? 1 : f.modo === "retocada" ? 0 : (Math.sin(t * 0.7) > 0 ? 1 : 0);
      f.k += (objetivo - f.k) * 0.05; capaM.opacity = f.k;
    });
  }

  /* 4 · la balanza: memoria e historia */
  function balanza(g) {
    const columna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.2, 16), mat.oro); columna.position.y = 1.1; g.add(columna);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.12, 32), mat.oro); base.position.y = 0.06; g.add(base);
    const brazo = new THREE.Group(); brazo.position.y = 2.25; g.add(brazo);
    const viga = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.07, 0.07), mat.oro); brazo.add(viga);
    const eje = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 8), mat.oro); brazo.add(eje);
    const fiel = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.35, 8), mat.tinta); fiel.position.y = 0.2; brazo.add(fiel);
    const datos = [[-1.25, 0xe7c43c, "Memoria"], [1.25, 0x5ab4e6, "Historia"]];
    datos.forEach(([x, col, nombre]) => {
      const colg = new THREE.Group(); colg.position.x = x; brazo.add(colg);
      [[0.25, 0], [-0.125, 0.21], [-0.125, -0.21]].forEach(([a, b]) => {
        const hilo = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.95, 4), mat.tinta);
        hilo.position.set(a * 0.5, -0.47, b * 0.5); hilo.rotation.set(b * 0.5, 0, -a * 0.5); colg.add(hilo);
      });
      const plato = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 12, 0, Math.PI * 2, Math.PI * 0.62, Math.PI * 0.38), new THREE.MeshStandardMaterial({ color: col, metalness: 0.4, roughness: 0.35, side: THREE.DoubleSide }));
      plato.position.y = -0.62; colg.add(plato);
      const et = etiqueta(nombre, 1.0); et.position.y = -1.18; colg.add(et);
      control.balanza.platos.push(colg);
    });
    control.balanza.brazo = brazo;
    animadores.push((t) => {
      const b = control.balanza;
      const obj = b.objetivo === null ? Math.sin(t * 0.6) * 0.22 : b.objetivo * 0.3;
      brazo.rotation.z += (obj - brazo.rotation.z) * 0.06;
      b.platos.forEach((p) => { p.rotation.z = -brazo.rotation.z; });
    });
  }

  /* 5 · el volcán de Fuencaliente */
  function volcan(g) {
    const perfil = [];
    for (let i = 0; i <= 14; i++) { const y = (i / 14) * 1.7; const r = 1.45 * Math.pow(1 - i / 14, 0.85) + 0.32; perfil.push(new THREE.Vector2(r, y)); }
    perfil.push(new THREE.Vector2(0.22, 1.6));
    const cono = new THREE.Mesh(new THREE.LatheGeometry(perfil, 28), mat.basalto); g.add(cono);
    const crater = new THREE.Mesh(new THREE.CircleGeometry(0.3, 24), new THREE.MeshStandardMaterial({ color: 0xff6a1a, emissive: 0xff4a00, emissiveIntensity: 1.6 }));
    crater.rotation.x = -Math.PI / 2; crater.position.y = 1.62; g.add(crater);
    const brillo = new THREE.PointLight(0xff6a2a, 2.2, 4, 2); brillo.position.y = 2.0; g.add(brillo);
    // colada
    const pts = []; for (let i = 0; i <= 20; i++) { const k = i / 20; const r = 0.34 + k * 1.2; const a = 0.4 + Math.sin(k * 5) * 0.12; pts.push(new THREE.Vector3(Math.sin(a) * r, 1.62 - k * 1.55 + 0.02, Math.cos(a) * r)); }
    const lavaM = new THREE.MeshStandardMaterial({ color: 0xff5a10, emissive: 0xff3800, emissiveIntensity: 1.2, roughness: 0.6 });
    const colada = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.07, 8), lavaM); g.add(colada);
    // humo y piroclastos
    const nH = ligero ? 40 : 90, pos = new Float32Array(nH * 3), vida = new Float32Array(nH);
    for (let i = 0; i < nH; i++) { vida[i] = Math.random(); }
    const hg = new THREE.BufferGeometry(); hg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const humo = new THREE.Points(hg, new THREE.PointsMaterial({ color: 0x9a918a, size: 0.16, transparent: true, opacity: 0.55, depthWrite: false })); g.add(humo);
    const nC = 30, posC = new Float32Array(nC * 3), velC = [];
    for (let i = 0; i < nC; i++) velC.push({ x: (Math.random() - 0.5) * 0.9, y: 1.4 + Math.random() * 1.2, z: (Math.random() - 0.5) * 0.9, t: Math.random() });
    const cg = new THREE.BufferGeometry(); cg.setAttribute("position", new THREE.BufferAttribute(posC, 3));
    const chispas = new THREE.Points(cg, new THREE.PointsMaterial({ color: 0xffa040, size: 0.07 })); g.add(chispas);
    // la Fuente Santa: pequeño manantial cubierto al pie
    const fuente = new THREE.Mesh(new THREE.CircleGeometry(0.22, 24), new THREE.MeshStandardMaterial({ color: 0x3c6e8f, roughness: 0.15, metalness: 0.2 }));
    fuente.rotation.x = -Math.PI / 2; fuente.position.set(-1.2, 0.02, 0.9); g.add(fuente);
    animadores.push((t) => {
      for (let i = 0; i < nH; i++) {
        const v = (vida[i] + t * 0.12) % 1;
        pos[i * 3] = Math.sin(i * 12.9) * 0.15 + v * 0.6 + Math.sin(t + i) * 0.05;
        pos[i * 3 + 1] = 1.7 + v * 2.2; pos[i * 3 + 2] = Math.cos(i * 7.3) * 0.15 + v * 0.2;
      }
      hg.attributes.position.needsUpdate = true;
      for (let i = 0; i < nC; i++) {
        const c = velC[i], s = (c.t + t * 0.5) % 1;
        posC[i * 3] = c.x * s; posC[i * 3 + 1] = 1.65 + c.y * s - 2.2 * s * s; posC[i * 3 + 2] = c.z * s;
      }
      cg.attributes.position.needsUpdate = true;
      lavaM.emissiveIntensity = 1.0 + Math.sin(t * 3) * 0.3; brillo.intensity = 2 + Math.sin(t * 5) * 0.5;
    });
  }

  /* 6 · la constelación de las Ciencias Sociales */
  function constelacion(g) {
    const nombres = ["Historia", "Geografía", "Sociología", "Antropología", "Psicología social", "Economía", "Ciencias Políticas", "Sociolingüística"];
    const cols = [0xc0703a, 0x2aa3b8, 0x3f9a55, 0x8a4fb0, 0xc23b31, 0xd6a93a, 0x2f6fb5, 0x6f7f8f];
    const giro = new THREE.Group(); giro.position.y = 1.65; g.add(giro);
    const nucleo = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), mat.oro); giro.add(nucleo);
    const posiciones = [];
    nombres.forEach((n, k) => {
      const a = (k / nombres.length) * Math.PI * 2, y = Math.sin(k * 1.7) * 0.35;
      const p = new THREE.Vector3(Math.sin(a) * 1.15, y, Math.cos(a) * 1.15); posiciones.push(p);
      const esf = new THREE.Mesh(new THREE.SphereGeometry(k === 0 ? 0.19 : 0.14, 24, 12), new THREE.MeshStandardMaterial({ color: cols[k], roughness: 0.35, metalness: 0.2, emissive: cols[k], emissiveIntensity: 0.15 }));
      esf.position.copy(p); giro.add(esf);
      const et = etiqueta(n, 0.95); et.position.copy(p).add(new THREE.Vector3(0, 0.28, 0)); giro.add(et);
    });
    const seg = [];
    posiciones.forEach((p, k) => { seg.push(new THREE.Vector3(), p); seg.push(p, posiciones[(k + 1) % posiciones.length]); if (k % 2 === 0) seg.push(p, posiciones[(k + 3) % posiciones.length]); });
    const lg = new THREE.BufferGeometry().setFromPoints(seg);
    giro.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: css("--sc-laton"), transparent: true, opacity: 0.55 })));
    const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 1.4, 10), mat.oro); pie.position.y = 0.7; g.add(pie);
    animadores.push((t) => { giro.rotation.y = t * 0.25; nucleo.rotation.x = t * 0.4; });
  }

  /* 7 · la encrucijada de enfoques y modelos */
  function encrucijada(g) {
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.6, 12), mat.madera); poste.position.y = 1.3; g.add(poste);
    const caminoM = new THREE.MeshStandardMaterial({ color: css("--sc-dial"), roughness: 0.95 });
    const datos = [["TÉCNICA", 0.5, 2.2, 0x5f6f7f], ["PRÁCTICA", 2.6, 1.75, 0xc0703a], ["CRÍTICA", 4.4, 1.3, 0x9b3d22]];
    const brazos = [];
    datos.forEach(([txt, ang, y, col]) => {
      const brazo = new THREE.Group(); brazo.position.y = y; brazo.rotation.y = ang; g.add(brazo);
      const tabla = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.3, 0.06), new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 }));
      tabla.position.x = 0.62; brazo.add(tabla);
      const punta = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 3), new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 }));
      punta.rotation.x = Math.PI / 2; punta.rotation.y = Math.PI / 2; punta.position.x = 1.3; brazo.add(punta);
      const tex = lienzo(512, 128, (c) => { c.fillStyle = "#ffffff"; c.font = "700 76px Cinzel, serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(txt, 256, 70); });
      [0.035, -0.035].forEach((z, s) => {
        const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.28), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
        pl.position.set(0.62, 0, z); if (s) pl.rotation.y = Math.PI; pl.userData.sinSombra = true; brazo.add(pl);
      });
      const camino = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 0.32), caminoM);
      camino.position.set(Math.cos(ang) * 0.85, 0.01, -Math.sin(ang) * 0.85); camino.rotation.y = ang; g.add(camino);
      brazos.push(brazo);
    });
    const remate = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.2, 12), mat.oro); remate.position.y = 2.7; g.add(remate);
    animadores.push((t) => { brazos.forEach((b, k) => { b.rotation.z = Math.sin(t * 0.9 + k) * 0.03; }); });
  }

  /* 8 · la mesa del historiador */
  function mesa(g) {
    const tablero = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.09, 1.4), mat.madera); tablero.position.y = 1.0; g.add(tablero);
    [[-1.1, -0.58], [1.1, -0.58], [-1.1, 0.58], [1.1, 0.58]].forEach(([x, z]) => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.96, 0.08), mat.madera); p.position.set(x, 0.48, z); g.add(p); });
    const papelTex = lienzo(512, 680, (c, w, h) => {
      c.fillStyle = "#efe4cc"; c.fillRect(0, 0, w, h);
      c.fillStyle = "#5a4630"; c.font = "700 44px Cinzel, serif"; c.fillText("Crónica", 40, 70);
      c.strokeStyle = "#7d6a52"; c.lineWidth = 5;
      for (let y = 120; y < h - 40; y += 34) { c.beginPath(); c.moveTo(40, y); let x = 40; while (x < w - 40) { const l = 20 + Math.random() * 70; c.lineTo(Math.min(x + l, w - 40), y); x += l + 14; c.moveTo(x, y); } c.stroke(); }
    });
    const docs = [];
    [[-0.6, 0.1, 0.25], [0.15, -0.15, -0.18], [0.75, 0.2, 0.35]].forEach(([x, z, r]) => {
      const d = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.8), new THREE.MeshStandardMaterial({ map: papelTex, roughness: 0.9 }));
      d.rotation.x = -Math.PI / 2; d.rotation.z = r; d.position.set(x, 1.05 + docs.length * 0.003, z); g.add(d); docs.push(d);
    });
    // libro abierto
    const libro = new THREE.Group(); libro.position.set(-0.75, 1.06, -0.35); libro.rotation.y = 0.3; g.add(libro);
    [-1, 1].forEach((s) => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.58), mat.papel); p.position.x = s * 0.21; p.rotation.z = -s * 0.12; libro.add(p); });
    const tapa = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.62), new THREE.MeshStandardMaterial({ color: 0x6d2a1d, roughness: 0.6 })); tapa.position.y = -0.02; libro.add(tapa);
    // tintero y pluma
    const tintero = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.14, 16), new THREE.MeshStandardMaterial({ color: 0x1d2a3a, roughness: 0.2, metalness: 0.3 })); tintero.position.set(1.0, 1.12, -0.45); g.add(tintero);
    const pluma = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.6, 8), mat.papel); pluma.position.set(1.02, 1.38, -0.45); pluma.rotation.z = 0.35; g.add(pluma);
    // lupa
    const lupa = new THREE.Group(); g.add(lupa);
    const anillo = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 10, 40), mat.oro); anillo.rotation.x = Math.PI / 2; lupa.add(anillo);
    const lente = new THREE.Mesh(new THREE.CircleGeometry(0.19, 32), new THREE.MeshPhysicalMaterial({ roughness: 0.02, transmission: 0.9, transparent: true, opacity: 0.35, thickness: 0.1 }));
    lente.rotation.x = -Math.PI / 2; lente.userData.sinSombra = true; lupa.add(lente);
    const mango = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.4, 10), mat.madera); mango.rotation.z = Math.PI / 2; mango.position.x = 0.42; lupa.add(mango);
    animadores.push((t) => { lupa.position.set(Math.sin(t * 0.5) * 0.7, 1.25 + Math.sin(t * 1.3) * 0.03, Math.sin(t * 0.8) * 0.3); lupa.rotation.y = Math.sin(t * 0.4) * 0.6; });
  }

  /* ---------- interacción ---------- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let hoverIdx = -1, abajo = null;
  function estacionBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((ev.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camara);
    const hit = ray.intersectObjects(objetivoSel, false)[0];
    return hit ? hit.object.userData.estacion : -1;
  }
  renderer.domElement.addEventListener("pointermove", (ev) => {
    const i = estacionBajo(ev);
    if (i !== hoverIdx) {
      if (hoverIdx >= 0) pedestales[hoverIdx].plinto.material.emissive.setHex(0x000000);
      hoverIdx = i;
      if (i >= 0) pedestales[i].plinto.material.emissive.setHex(0x2a1a10);
      renderer.domElement.style.cursor = i >= 0 ? "pointer" : "grab";
    }
    if (onHover) onHover(i, ev);
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (onHover) onHover(-1); });
  renderer.domElement.addEventListener("pointerdown", (ev) => { abajo = { x: ev.clientX, y: ev.clientY }; });
  renderer.domElement.addEventListener("pointerup", (ev) => {
    if (!abajo) return;
    const mov = Math.hypot(ev.clientX - abajo.x, ev.clientY - abajo.y); abajo = null;
    if (mov > 6) return;
    const i = estacionBajo(ev);
    if (i >= 0 && onSeleccion) onSeleccion(i);
  });

  /* ---------- cámara animada ---------- */
  let vuelo = null;
  function volar(pos, objetivo, dur = 1.3) {
    if (reducido) { camara.position.copy(pos); controles.target.copy(objetivo); return; }
    vuelo = { p0: camara.position.clone(), t0: controles.target.clone(), p1: pos, t1: objetivo, ini: performance.now(), dur: dur * 1000 };
  }
  function irA(i) {
    const { angulo } = pedestales[i];
    const dir = new THREE.Vector3(Math.sin(angulo), 0, -Math.cos(angulo));
    const objetivo = dir.clone().multiplyScalar(RADIO).add(new THREE.Vector3(0, 2.0, 0));
    const pos = dir.clone().multiplyScalar(RADIO + 7.2).add(new THREE.Vector3(0, 4.3, 0));
    volar(pos, objetivo);
  }
  function vistaGeneral() { volar(POS0.clone(), OBJ0.clone()); }

  /* ---------- tema ---------- */
  function aplicarTema() {
    escena.background = new THREE.Color(css("--sc-fondo"));
    escena.fog = new THREE.Fog(new THREE.Color(css("--sc-fondo")), 36, 74);
    mat.marmol.color.set(css("--sc-piedra"));
    pedestales.forEach((p) => p.plinto.material.color.set(css("--sc-piedra")));
    mat.oro.color.set(css("--sc-laton"));
    mat.tinta.color.set(css("--sc-tinta"));
    if (mat.suelo.map) mat.suelo.map.dispose();
    mat.suelo.map = texturaSuelo(); mat.suelo.color.set(0xffffff); mat.suelo.needsUpdate = true;
    const oscuro = (matchMedia("(prefers-color-scheme: dark)").matches && document.documentElement.getAttribute("data-theme") !== "light") || document.documentElement.getAttribute("data-theme") === "dark";
    hemi.intensity = oscuro ? 0.5 : 0.75; sol.intensity = oscuro ? 1.3 : 1.9;
  }
  aplicarTema();

  /* ---------- bucle ---------- */
  const reloj = new THREE.Clock();
  let tAnim = 0;
  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();
  function bucle() {
    const dt = Math.min(reloj.getDelta(), 0.05);
    if (!pausa) tAnim += dt;
    animadores.forEach((f) => f(tAnim));
    corona.rotation.y = tAnim * 0.12; rollo.rotation.y = Math.sin(tAnim * 0.2) * 0.25;
    hojas.forEach((h, i) => { if (h.userData.on) h.position.y = Math.sin(tAnim * 1.5 + i) * 0.05; });
    if (vuelo) {
      let k = (performance.now() - vuelo.ini) / vuelo.dur; if (k >= 1) k = 1;
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      camara.position.lerpVectors(vuelo.p0, vuelo.p1, e); controles.target.lerpVectors(vuelo.t0, vuelo.t1, e);
      if (k === 1) vuelo = null;
    }
    controles.update();
    renderer.render(escena, camara);
    requestAnimationFrame(bucle);
  }
  bucle();

  return {
    irA, vistaGeneral,
    marcarResueltas(lista) {
      lista.forEach((on, i) => {
        if (!hojas[i]) return;
        const m = hojas[i].material; hojas[i].userData.on = on;
        m.color.set(on ? css("--sc-laton") : "#55603f");
        m.metalness = on ? 0.85 : 0.25; m.roughness = on ? 0.25 : 0.45;
        m.emissive.set(on ? css("--sc-laton") : "#000000"); m.emissiveIntensity = on ? 0.35 : 0;
        if (!on) hojas[i].position.y = 0;
      });
    },
    setPausa(v) { pausa = v; },
    getPausa() { return pausa; },
    setFoto(modo) { control.foto.modo = modo; },
    setBalanza(v) { control.balanza.objetivo = v; },
    aplicarTema
  };
}
