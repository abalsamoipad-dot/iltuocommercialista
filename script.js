(function(){
  const PH = [
    ['Stagione I','Costituzione','Si sceglie il terreno giusto e si pianta: forma societaria, statuto, regime fiscale, primi adempimenti.'],
    ['Stagione II','Crescita','Acqua e misura: contabilità, bilanci, controllo di gestione, rapporti con le banche.'],
    ['Stagione III','Operazioni straordinarie',"L'innesto, legato con cura, e i primi frutti: fusioni, scissioni, cessioni, valutazioni, ingresso di nuovi soci."],
    ['Stagione IV · Il focus dello studio','Crisi, ristrutturazione e risanamento','L\'albero soffre: si pota ciò che pesa, si mette il tutore, si aspetta la ripresa. Ristrutturazione del debito, composizione negoziata, piani attestati, concordati, incarichi giudiziari.'],
    ['Stagione V','Passaggio generazionale','Un frutto cade e diventa il nuovo albero, accanto a quello che continua a dare frutti: patti di famiglia, holding, trust, successioni.']
  ];
  const HOLD = [4200, 5000, 4400, 11200, 7400];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const svg = document.getElementById('tree'), box = document.getElementById('treeBox'); if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg';
  const el = (n, at, parent) => { const e = document.createElementNS(NS, n); for (const k in at) e.setAttribute(k, at[k]); (parent || svg).appendChild(e); return e; };
  const defs = el('defs', {});
  const flt = el('filter', { id: 'soft', x: '-30%', y: '-80%', width: '160%', height: '260%' }, defs); el('feGaussianBlur', { stdDeviation: 9 }, flt);
  const gr = el('linearGradient', { id: 'bark', x1: 0, y1: 0, x2: 1, y2: 0 }, defs); el('stop', { offset: 0, 'stop-color': '#9a8869' }, gr); el('stop', { offset: .55, 'stop-color': '#7e6c55' }, gr); el('stop', { offset: 1, 'stop-color': '#5f5040' }, gr);
  /* ground */
  el('ellipse', { cx: 400, cy: 502, rx: 310, ry: 48, fill: '#d9cdb5' });
  el('ellipse', { cx: 400, cy: 494, rx: 256, ry: 34, fill: '#b9a37f' });
  el('ellipse', { cx: 400, cy: 490, rx: 200, ry: 22, fill: '#a58f6c', opacity: .55 });
  let seed = 11; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let i = 0; i < 26; i++) { const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * 230; el('ellipse', { cx: 400 + Math.cos(a) * d, cy: 494 + Math.sin(a) * d * 0.13, rx: 2 + rnd() * 3, ry: 1 + rnd() * 1.5, fill: 'rgba(80,60,40,.18)' }); }
  const shadow = el('ellipse', { cx: 400, cy: 480, rx: 150, ry: 20, fill: 'rgba(60,45,30,.35)', filter: 'url(#soft)' });
  /* sprout */
  const sprout = el('g', {});
  el('path', { d: 'M400,470 C401,452 399,440 402,424', fill: 'none', stroke: '#7d9370', 'stroke-width': 4, 'stroke-linecap': 'round' }, sprout);
  el('ellipse', { cx: 388, cy: 432, rx: 14, ry: 6, fill: '#86997a', transform: 'rotate(-30 388 432)' }, sprout);
  el('ellipse', { cx: 414, cy: 426, rx: 14, ry: 6, fill: '#6f8462', transform: 'rotate(28 414 426)' }, sprout);
  el('ellipse', { cx: 402, cy: 414, rx: 10, ry: 5, fill: '#9ec281', transform: 'rotate(-80 402 414)' }, sprout);
  /* tree */
  const tree = el('g', {});
  el('path', { d: 'M352,472 C372,466 380,440 386,400 C390,370 392,340 394,318 C396,304 398,296 400,288 L416,288 C417,306 420,336 424,366 C428,398 434,430 452,458 C462,470 470,472 470,472 Z', fill: 'url(#bark)' }, tree);
  el('path', { d: 'M394,318 C398,340 402,380 404,420 C405,445 404,460 404,470', fill: 'none', stroke: 'rgba(40,30,20,.22)', 'stroke-width': 2 }, tree);
  el('path', { d: 'M410,300 C412,340 416,380 420,420', fill: 'none', stroke: 'rgba(255,255,255,.14)', 'stroke-width': 2 }, tree);
  const crown = el('g', {}, tree);
  const branch = (d, w, parent) => { const p = parent || crown; el('path', { d, fill: 'none', stroke: '#6b5a45', 'stroke-width': w, 'stroke-linecap': 'round' }, p); el('path', { d, fill: 'none', stroke: '#8c7a62', 'stroke-width': Math.max(1.5, w - 3), 'stroke-linecap': 'round' }, p); };
  branch('M398,300 C380,280 340,262 300,248', 10); branch('M330,258 C318,246 306,232 302,216', 4);
  branch('M400,296 C396,262 392,232 398,192', 9); branch('M395,240 C380,228 370,214 366,200', 4);
  branch('M396,318 C362,304 330,300 292,302', 7);
  branch('M404,308 C432,290 455,268 472,258', 10); branch('M440,278 C446,262 456,252 462,244', 4);
  const cutseg = el('g', {}, crown); branch('M470,257 C490,252 508,250 526,250', 8, cutseg);
  const GREENS = ['#6b7f5c', '#7d9370', '#5f7455', '#8ea283', '#7a8f6a', '#9aab90'];
  const clusters = [];
  function cluster(cx, cy, r, from, parent, palette, n, sz){ const g = el('g', {}, parent || crown); const cols = palette || GREENS; sz = sz || 1;
    for (let i = 0; i < (n || 34); i++) { const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * r; const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.8; const rot = Math.round(rnd() * 180 - 90);
      const leaf = el('ellipse', { class: 'leaf', cx: x, cy: y, rx: (10 + rnd() * 6) * sz, ry: (3.2 + rnd() * 1.4) * sz, fill: cols[Math.floor(rnd() * cols.length)], transform: 'rotate(' + rot + ' ' + x + ' ' + y + ')' }, g);
      if (rnd() < 0.45) el('ellipse', { class: 'leaf hi', cx: x, cy: y - 1.2 * sz, rx: (6 + rnd() * 4) * sz, ry: 1.3 * sz, fill: 'rgba(225,232,215,.55)', transform: 'rotate(' + rot + ' ' + x + ' ' + y + ')' }, g); }
    const c = { g, cx, cy: cy + r * 0.7, from, k: 0.2, a: 0, ph: rnd() * 6.28, d: Math.hypot(cx - 400, cy - 470) }; clusters.push(c); return c; }
  cluster(300, 236, 50, 1); cluster(398, 186, 54, 1); cluster(292, 300, 34, 2); cluster(350, 200, 42, 2); cluster(452, 215, 42, 1); cluster(400, 250, 44, 1); cluster(340, 262, 32, 2); cluster(366, 196, 30, 2); cluster(462, 240, 30, 2);
  cluster(524, 240, 42, 2, cutseg);
  const olives = cluster(392, 230, 96, 2, crown, ['#3f4a3a', '#4b5747', '#2f3a2c'], 16, 0.42);
  const graft = el('g', {}, crown); branch('M412,340 C438,336 456,322 470,300', 6, graft);
  el('path', { d: 'M410,334 L416,346 M414,332 L420,344', stroke: '#c8a35a', 'stroke-width': 3.5, 'stroke-linecap': 'round' }, graft);
  const graftCl = cluster(474, 292, 30, 9, graft, ['#9ec281', '#8ea283', '#a9c88f'], 24);
  const shoots = el('g', {}, crown);
  const shootCl = [cluster(520, 262, 20, 9, shoots, ['#9ec281', '#a9c88f'], 14), cluster(300, 270, 18, 9, shoots, ['#9ec281', '#a9c88f'], 12), cluster(404, 300, 16, 9, shoots, ['#9ec281', '#a9c88f'], 10)];
  const fl = []; for (let i = 0; i < 7; i++) fl.push(el('ellipse', { cx: 300 + i * 40, cy: 240 + (i % 3) * 30, rx: 10, ry: 3.5, fill: '#b8a65e', opacity: 0 }));
  const shears = el('g', { opacity: 0 });
  el('path', { d: 'M478,246 L452,214 M478,246 L448,238', stroke: '#3a3d40', 'stroke-width': 5, 'stroke-linecap': 'round' }, shears);
  el('path', { d: 'M478,246 L500,268 M478,246 L494,276', stroke: '#b3261e', 'stroke-width': 7, 'stroke-linecap': 'round' }, shears);
  el('circle', { cx: 478, cy: 246, r: 4, fill: '#1a1c1f' }, shears);
  const stake = el('g', { opacity: 0 });
  el('path', { d: 'M442,470 L444,296', stroke: '#b59a6a', 'stroke-width': 7, 'stroke-linecap': 'round' }, stake);
  el('path', { d: 'M420,352 C432,346 452,346 456,352 M420,404 C432,398 454,398 458,404', stroke: '#c8a35a', 'stroke-width': 4, fill: 'none', 'stroke-linecap': 'round' }, stake);
  const can = el('g', { opacity: 0 });
  el('rect', { x: 546, y: 132, width: 52, height: 40, rx: 7, fill: '#5f6b73' }, can);
  el('path', { d: 'M546,146 L514,166', stroke: '#5f6b73', 'stroke-width': 8, 'stroke-linecap': 'round' }, can);
  el('path', { d: 'M560,132 C560,112 586,112 586,132', stroke: '#5f6b73', 'stroke-width': 6, fill: 'none' }, can);
  el('circle', { cx: 512, cy: 167, r: 5, fill: '#8a949a' }, can);
  const drops = []; for (let i = 0; i < 5; i++) drops.push(el('path', { d: 'M0,-6 C3,-2 3,3 0,5 C-3,3 -3,-2 0,-6 Z', fill: '#8fb6cc', opacity: 0 }));
  const oliveDrop = el('ellipse', { cx: 0, cy: 0, rx: 5.5, ry: 6.5, fill: '#3f4a3a', opacity: 0 });
  const sapSprout = el('g', { opacity: 0 });
  el('path', { d: 'M560,470 C561,452 559,440 562,424', fill: 'none', stroke: '#7d9370', 'stroke-width': 4, 'stroke-linecap': 'round' }, sapSprout);
  el('ellipse', { cx: 548, cy: 432, rx: 14, ry: 6, fill: '#86997a', transform: 'rotate(-30 548 432)' }, sapSprout);
  el('ellipse', { cx: 574, cy: 426, rx: 14, ry: 6, fill: '#6f8462', transform: 'rotate(28 574 426)' }, sapSprout);
  const sap = el('g', { opacity: 0 });
  el('path', { d: 'M550,470 C555,452 558,432 560,410 C561,400 562,392 563,384 L569,384 C570,400 572,420 574,440 C575,455 577,464 580,470 Z', fill: 'url(#bark)' }, sap);
  branch('M562,402 C548,394 538,386 530,376', 4, sap); branch('M566,396 C580,388 590,380 598,370', 4, sap); branch('M564,392 C563,380 562,370 564,356', 3.5, sap);
  const sapCl = [cluster(564, 350, 24, 9, sap, GREENS, 18, .85), cluster(530, 372, 18, 9, sap, GREENS, 14, .85), cluster(598, 366, 18, 9, sap, GREENS, 14, .85), cluster(564, 392, 16, 9, sap, GREENS, 12, .85)];
  /* state, tweens */
  const S = { tree: 0.12, treeA: 0, sproutA: 1, sproutY: 0, crownR: 0, crownY: 0, cut: 0, stake: 0, shearsA: 0, shearsR: 0, canA: 0, sapK: 0.15, sapA: 0, drop: 0, dropA: 0, ssK: 0.2, ssA: 0 };
  const easeInOut = t => -(Math.cos(Math.PI * t) - 1) / 2, easeOut = t => 1 - Math.pow(1 - t, 3), easeIn = t => t * t * t, backOut = t => { const c = 0.9; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  let tweens = [], raf = null;
  function to(obj, key, target, dur, ease, delay){ tweens = tweens.filter(tw => !(tw.obj === obj && tw.key === key)); tweens.push({ obj, key, target, dur: reduce ? 0 : dur, ease: ease || easeInOut, t0: performance.now() + (reduce ? 0 : (delay || 0)), from: null }); go(); }
  const f = v => Math.round(v * 1000) / 1000;
  function apply(now){ const t = now / 1000, el0 = (now - phaseStart) / 1000, wind = reduce ? 0 : 1;
    tree.setAttribute('transform', 'translate(400 470) scale(' + f(S.tree) + ') translate(-400 -470)'); tree.setAttribute('opacity', f(S.treeA));
    shadow.setAttribute('transform', 'translate(400 480) scale(' + f(Math.max(0.05, S.tree)) + ' ' + f(Math.max(0.05, S.tree * 0.8)) + ') translate(-400 -480)'); shadow.setAttribute('opacity', f(S.treeA * 0.9));
    sprout.setAttribute('opacity', f(S.sproutA)); sprout.setAttribute('transform', 'translate(0 ' + f(S.sproutY) + ')');
    crown.setAttribute('transform', 'rotate(' + f(S.crownR + Math.sin(t * 0.7) * 0.5 * wind) + ' 400 320) translate(0 ' + f(S.crownY) + ')');
    clusters.forEach(c => { const sw = Math.sin(t * 0.9 + c.ph) * 1.4 * wind * c.a; c.g.setAttribute('transform', 'translate(' + c.cx + ' ' + c.cy + ') rotate(' + f(sw) + ') scale(' + f(c.k) + ') translate(' + (-c.cx) + ' ' + (-c.cy) + ')'); c.g.setAttribute('opacity', f(c.a)); });
    cutseg.setAttribute('transform', 'rotate(' + f(58 * S.cut) + ' 470 255) translate(' + f(30 * S.cut) + ' ' + f(60 * S.cut) + ')'); cutseg.setAttribute('opacity', f(Math.max(0, 1 - Math.max(0, S.cut - 0.55) / 0.45)));
    stake.setAttribute('transform', 'translate(0 470) scale(1 ' + f(Math.max(0.001, S.stake)) + ') translate(0 -470)'); stake.setAttribute('opacity', S.stake > 0.01 ? 1 : 0);
    shears.setAttribute('opacity', f(S.shearsA)); shears.setAttribute('transform', 'rotate(' + f(S.shearsR) + ' 478 246)');
    can.setAttribute('opacity', f(S.canA)); can.setAttribute('transform', 'rotate(' + f(phase === 1 ? -14 + Math.sin(t * 1.3) * 10 * wind : 0) + ' 570 150)');
    sap.setAttribute('transform', 'translate(560 470) scale(' + f(S.sapK) + ') translate(-560 -470)'); sap.setAttribute('opacity', f(S.sapA));
    sapSprout.setAttribute('transform', 'translate(560 470) scale(' + f(S.ssK) + ') translate(-560 -470)'); sapSprout.setAttribute('opacity', f(S.ssA));
    { const u = S.drop; oliveDrop.setAttribute('cx', f(452 + 108 * u)); oliveDrop.setAttribute('cy', f(235 + 231 * u - Math.sin(u * Math.PI) * 70)); oliveDrop.setAttribute('opacity', f(S.dropA)); }
    drops.forEach((d, i) => { const on = phase === 1 && S.canA > 0.5 && !reduce; if (!on) { d.setAttribute('opacity', 0); return; } const u = ((t * 0.55) + i * 0.2) % 1; d.setAttribute('transform', 'translate(' + f(512 - 44 * u) + ' ' + f(172 + 165 * u) + ') scale(' + f(0.8 + u * 0.4) + ')'); d.setAttribute('opacity', f(u < 0.1 ? u * 10 : (u > 0.85 ? (1 - u) / 0.15 : 1))); });
    fl.forEach((q, i) => { const on = phase === 3 && el0 > 0.9 && el0 < 5.6 && !reduce; if (!on) { q.setAttribute('opacity', 0); return; } const u = ((el0 - 0.9) * 0.3 + i / 7) % 1; q.setAttribute('transform', 'translate(' + f(-60 * u + Math.sin(u * 9) * 14) + ' ' + f(235 * u) + ') rotate(' + f(320 * u) + ' ' + (300 + i * 40) + ' ' + (240 + (i % 3) * 30) + ')'); q.setAttribute('opacity', f(u < 0.1 ? u * 10 : (u > 0.85 ? (1 - u) / 0.15 : 1))); }); }
  function loop(now){ raf = null; tweens = tweens.filter(tw => { if (now < tw.t0) return true; if (tw.from === null) tw.from = tw.obj[tw.key]; const u = tw.dur > 0 ? Math.min(1, (now - tw.t0) / tw.dur) : 1; tw.obj[tw.key] = tw.from + (tw.target - tw.from) * tw.ease(u); return u < 1; });
    apply(now); if (tweens.length || (visible && !reduce)) raf = requestAnimationFrame(loop); }
  function go(){ if (!raf) raf = requestAnimationFrame(loop); }
  /* phases */
  const idx = document.getElementById('treeIdx'), ttl = document.getElementById('treeTitle'), txt = document.getElementById('treeText'), btns = Array.from(document.querySelectorAll('#phases .phase')), dots = Array.from(document.querySelectorAll('#seasons button'));
  const scaleFor = [0.12, 0.56, 1, 1, 1.06];
  let phase = 0, phaseStart = performance.now(), timers = [], cycle = null, hold = 0, visible = false;
  function clearTimers(){ timers.forEach(clearTimeout); timers = []; }
  function later(ms, fn){ timers.push(setTimeout(fn, reduce ? 0 : ms)); }
  function setPhase(p){ clearTimers(); tweens = []; phase = p; phaseStart = performance.now(); svg.classList.remove('s-sick'); box.className = 'tree-box bg' + p;
    to(S, 'tree', scaleFor[p], 1900, easeInOut); to(S, 'treeA', p === 0 ? 0 : 1, p === 0 ? 700 : 500); to(S, 'sproutA', p === 0 ? 1 : 0, p === 0 ? 900 : 600, null, p === 0 ? 500 : 0); to(S, 'sproutY', p === 0 ? 0 : -14, 900);
    const ordered = clusters.slice().sort((x, y) => x.d - y.d);
    ordered.forEach((c, i) => { const on = c.from > 0 && c.from < 9 && p >= c.from; to(c, 'k', on ? 1 : 0.25, on ? 1300 : 900, on ? backOut : easeInOut, 200 + i * 90); to(c, 'a', on ? 1 : 0, 800, null, 200 + i * 90); });
    const g = p >= 2; to(graftCl, 'k', g ? 1 : 0.25, 1100, backOut, 400); to(graftCl, 'a', g ? 1 : 0, 700, null, 400); graft.setAttribute('opacity', g ? 1 : 0);
    const sh = p === 4; shootCl.forEach((c, i) => { to(c, 'k', sh ? 1 : 0.25, 900, backOut, i * 120); to(c, 'a', sh ? 1 : 0, 600, null, i * 120); });
    to(S, 'cut', p === 4 ? 1 : 0, p === 4 ? 0 : 600); to(S, 'stake', 0, 500); to(S, 'shearsA', 0, 300); to(S, 'canA', p === 1 ? 1 : 0, 700, null, p === 1 ? 700 : 0);
    to(S, 'crownR', 0, 1200); to(S, 'crownY', 0, 1200);
    to(S, 'sapK', 0.15, 500); to(S, 'sapA', 0, 400); to(S, 'ssA', 0, 300); to(S, 'ssK', 0.2, 300); to(S, 'dropA', 0, 200); S.drop = 0; sapCl.forEach(c => { to(c, 'k', 0.25, 500); to(c, 'a', 0, 400); });
    if (p === 4) {
      to(S, 'dropA', 1, 200, null, 300); to(S, 'drop', 1, 1300, easeIn, 400);
      later(1750, () => { to(S, 'dropA', 0, 350); to(S, 'ssA', 1, 300); to(S, 'ssK', 1, 600, backOut); });
      later(2700, () => { to(S, 'ssA', 0, 500); to(S, 'sapA', 1, 400); to(S, 'sapK', 1, 1800, backOut); sapCl.forEach((c, i) => { to(c, 'k', 1, 1100, backOut, 400 + i * 150); to(c, 'a', 1, 600, null, 400 + i * 150); }); });
    }
    if (p === 3) {
      later(600, () => { svg.classList.add('s-sick'); to(S, 'crownR', -4, 1800); to(S, 'crownY', 12, 1800); });
      later(2900, () => { to(S, 'shearsA', 1, 350); let n = 0; const snip = () => { to(S, 'shearsR', -18, 220, easeInOut); to(S, 'shearsR', 0, 260, easeInOut, 240); if (++n < 2) later(520, snip); }; snip(); });
      later(3700, () => to(S, 'cut', 1, 1300, easeIn));
      later(5000, () => { to(S, 'shearsA', 0, 400); to(S, 'stake', 1, 1100, easeOut); });
      later(6900, () => { svg.classList.remove('s-sick'); to(S, 'crownR', 0, 1800); to(S, 'crownY', 0, 1800); shootCl.forEach((c, i) => { to(c, 'k', 1, 900, backOut, i * 140); to(c, 'a', 1, 600, null, i * 140); }); });
    }
    idx.textContent = PH[p][0]; ttl.textContent = PH[p][1]; txt.textContent = PH[p][2];
    btns.forEach(b => b.classList.toggle('on', +b.dataset.p === p)); dots.forEach(d => d.classList.toggle('on', +d.dataset.p === p));
    schedule(); go(); }
  function schedule(){ clearTimeout(cycle); cycle = setTimeout(() => { if (!visible || reduce || Date.now() < hold) { schedule(); return; } setPhase((phase + 1) % 5); }, HOLD[phase]); }
  btns.concat(dots).forEach(b => b.addEventListener('click', () => { hold = Date.now() + 18000; setPhase(+b.dataset.p); }));
  if ('IntersectionObserver' in window) new IntersectionObserver(en => { visible = en[0].isIntersecting; if (visible) go(); }, { threshold: 0.15 }).observe(svg); else visible = true;
  clusters.forEach(c => { c.k = 0.25; c.a = 0; }); apply(performance.now()); setPhase(0);
})();

(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const burger = document.getElementById('burger'), menu = document.getElementById('menu');
  function closeMenu(){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
  burger.addEventListener('click', () => { const o = !menu.classList.contains('open'); menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', String(o)); });
  function openArea(i){ document.querySelectorAll('.area').forEach((a, k) => { const o = k === i; a.classList.toggle('open', o); a.querySelector('.area-head').setAttribute('aria-expanded', String(o)); }); window.dispatchEvent(new CustomEvent('itc:openArea', { detail: i })); }
  document.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', e => { const h = a.getAttribute('href'); if (!h || h[0] !== '#') return; const el = document.querySelector(h); if (!el) return; e.preventDefault(); closeMenu(); if (a.dataset.area !== undefined) openArea(+a.dataset.area); el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }));
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -4% 0px', threshold: 0.05 }) : null;
  document.querySelectorAll('.rv').forEach((el, i) => { if (el.closest('.hero')) { setTimeout(() => el.classList.add('in'), 60 + i * 60); } else if (io) io.observe(el); else el.classList.add('in'); });
  document.querySelectorAll('.area-head').forEach(btn => btn.addEventListener('click', () => { const a = btn.parentElement, o = !a.classList.contains('open'); document.querySelectorAll('.area').forEach(x => { if (x !== a) { x.classList.remove('open'); x.querySelector('.area-head').setAttribute('aria-expanded', 'false'); } }); a.classList.toggle('open', o); btn.setAttribute('aria-expanded', String(o)); }), true);
  const form = document.getElementById('form');
  if (form) {
    const toast = document.getElementById('toast'), btn = form.querySelector('button[type="submit"]'), label = btn.firstChild;
    const say = (msg, err) => { toast.textContent = msg; toast.classList.toggle('err', !!err); toast.hidden = false; toast.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' }); };
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (!window.fetch || !window.FormData) { form.submit(); return; }
      btn.disabled = true; const original = label.textContent; label.textContent = 'Invio in corso ';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
        .then(() => { form.reset(); say('Richiesta inviata. Vi risponderemo entro due giorni lavorativi ai recapiti indicati.'); })
        .catch(() => say('Invio non riuscito. Potete scrivere direttamente a info@studiobalsamo.com o a dott.gmarotta@gmail.com.', true))
        .finally(() => { btn.disabled = false; label.textContent = original; });
    });
  }
})();
