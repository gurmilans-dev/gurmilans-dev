// Generates assets/sir-sim.svg — agents + curves driven by a real SIR integration.
import { writeFileSync } from 'node:fs';

const DUR = 14;           // seconds, full loop
const N = 26;             // agents
const W = 840, H = 268;

// ---- deterministic RNG so regenerating gives the same art ----
let seed = 20261208;
const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

// ---- SIR integration -------------------------------------------------------
const beta = 0.30, gamma = 0.085, dt = 0.25, STEPS = 200;
let S = 1 - 1 / N, I = 1 / N, R = 0;
const series = [];
for (let i = 0; i <= STEPS; i++) {
  series.push({ t: i / STEPS, S, I, R });
  const dS = -beta * S * I, dR = gamma * I;
  S += dS * dt; I += (-dS - dR) * dt; R += dR * dt;
}
const peakI = Math.max(...series.map(p => p.I));

// ---- agent event times derived from the curve ------------------------------
// agent k gets infected when cumulative-infected crosses k/N, recovers when R crosses k/N
const at = (key, frac) => {
  for (let i = 1; i < series.length; i++) {
    const prev = key === 'C' ? 1 - series[i - 1].S : series[i - 1][key];
    const cur = key === 'C' ? 1 - series[i].S : series[i][key];
    if (cur >= frac) {
      const span = cur - prev || 1;
      return series[i - 1].t + (series[i].t - series[i - 1].t) * ((frac - prev) / span);
    }
  }
  return null;
};

const agents = [];
for (let k = 0; k < N; k++) {
  const frac = (k + 0.5) / N;
  const tInf = k === 0 ? 0 : at('C', frac);
  const tRec = at('R', frac);
  agents.push({ tInf, tRec });
}

// ---- geometry --------------------------------------------------------------
const SIM = { x: 20, y: 48, w: 452, h: 200 };
const PAD = 16;
const ax0 = SIM.x + PAD, ax1 = SIM.x + SIM.w - PAD;
const ay0 = SIM.y + PAD, ay1 = SIM.y + SIM.h - PAD;

const PLOT = { x: 492, y: 48, w: 328, h: 200 };
const px0 = PLOT.x + 40, px1 = PLOT.x + PLOT.w - 14;
const py0 = PLOT.y + 18, py1 = PLOT.y + PLOT.h - 26;

// ---- wander paths ----------------------------------------------------------
// each agent: 5 waypoints inside the box, looped, with a random phase offset
const WANDER = [];
const dots = [];
for (let k = 0; k < N; k++) {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    pts.push([
      +(ax0 + rnd() * (ax1 - ax0)).toFixed(0),
      +(ay0 + rnd() * (ay1 - ay0)).toFixed(0),
    ]);
  }
  // wander is expressed RELATIVE to a base <g translate>, so that switching the
  // animation off (reduced motion) leaves every agent at a real position
  // instead of collapsing the whole population onto (0,0).
  const [bx, by] = pts[0];
  const stops = pts.map((p, i) => {
    const pct = ((i / pts.length) * 100).toFixed(0);
    return `${pct}%{transform:translate(${p[0] - bx}px,${p[1] - by}px)}`;
  }).join('');
  WANDER.push(`@keyframes w${k}{${stops}100%{transform:translate(0,0)}}`);

  // state colour timeline as percentages of the loop.
  // curves finish drawing at 92%, so agent events are compressed into the same
  // 92% window — otherwise the plot runs ahead of the agents it describes.
  const SYNC = 0.92;
  const iP = agents[k].tInf === null ? null : +(agents[k].tInf * 100 * SYNC).toFixed(1);
  const rP = agents[k].tRec === null ? null : +(agents[k].tRec * 100 * SYNC).toFixed(1);
  let kf;
  if (iP === null) {
    kf = `@keyframes s${k}{0%,100%{fill:#58a6ff}}`;
  } else if (rP === null || rP >= 99) {
    kf = `@keyframes s${k}{0%,${iP}%{fill:#58a6ff}${Math.min(iP + 0.4, 99.9)}%,100%{fill:#f85149}}`;
  } else {
    kf = `@keyframes s${k}{0%,${iP}%{fill:#58a6ff}${(iP + 0.4).toFixed(1)}%,${rP}%{fill:#f85149}${(rP + 0.4).toFixed(1)}%,100%{fill:#3fb950}}`;
  }
  WANDER.push(kf);

  const speed = (DUR * (1.6 + rnd() * 1.1)).toFixed(1);
  const delay = (-rnd() * 20).toFixed(1);
  // resting state as a presentation attribute: the running animation overrides it,
  // reduced motion falls back to it — so each agent shows its true end state.
  const rest = iP === null ? '#58a6ff' : (rP === null || rP >= 99 ? '#f85149' : '#3fb950');
  dots.push(
    `<g transform="translate(${bx},${by})"><circle class="a" r="4.4" fill="${rest}" style="animation:w${k} ${speed}s linear ${delay}s infinite,s${k} ${DUR}s linear infinite"/></g>`
  );
}

// ---- curve paths -----------------------------------------------------------
const sx = t => px0 + t * (px1 - px0);
const sy = v => py1 - v * (py1 - py0);
const pathFor = key => {
  const scale = key === 'I' ? 1 / peakI * 0.92 : 1;
  const pts = series
    .filter((_, i) => i % 6 === 0 || i === series.length - 1)
    .map(p => [sx(p.t), sy(p[key] * scale)]);
  // real polyline length — dasharray must match it or the reveal never masks anything
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('');
  return { d, len: Math.ceil(len) + 2 };
};
const cS = pathFor('S'), cI = pathFor('I'), cR = pathFor('R');
console.log('curve lengths:', cS.len, cI.len, cR.len);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Agent-based SIR epidemic simulation: ${N} agents wander a bounded box, turning from susceptible to infected to recovered, alongside the susceptible, infected and recovered curves produced by the same run.">
<style>
.t{font-family:ui-monospace,"SF Mono","Cascadia Mono",Menlo,Consolas,"Liberation Mono",monospace}
.dim{fill:#8b949e;font-size:11px}
.pane{fill:#010409;stroke:#30363d;stroke-width:1}
.grid{stroke:#21262d;stroke-width:1;fill:none}

.c{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;animation-duration:${DUR}s;animation-timing-function:linear;animation-iteration-count:infinite}
@keyframes dS{0%{stroke-dashoffset:${cS.len}}92%,100%{stroke-dashoffset:0}}
@keyframes dI{0%{stroke-dashoffset:${cI.len}}92%,100%{stroke-dashoffset:0}}
@keyframes dR{0%{stroke-dashoffset:${cR.len}}92%,100%{stroke-dashoffset:0}}
.sweep{stroke:#8b949e;stroke-width:1;opacity:.45;animation:sw ${DUR}s linear infinite}
@keyframes sw{0%{transform:translateX(0)}92%,100%{transform:translateX(${(px1 - px0).toFixed(0)}px)}}
${WANDER.join('\n')}
@media (prefers-reduced-motion:reduce){
.a{animation:none!important}
.c{animation:none!important;stroke-dashoffset:0!important}
.sweep{animation:none;opacity:0}
}
</style>
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="10" fill="#0d1117" stroke="#30363d"/>
<text class="t dim" x="20" y="30">sir-simulation · agent-based · ${N} agents</text>
<circle cx="590" cy="26" r="4" fill="#58a6ff"/><text class="t dim" x="601" y="30">susceptible</text>
<circle cx="686" cy="26" r="4" fill="#f85149"/><text class="t dim" x="697" y="30">infected</text>
<circle cx="766" cy="26" r="4" fill="#3fb950"/><text class="t dim" x="777" y="30">recovered</text>

<rect class="pane" x="${SIM.x}.5" y="${SIM.y}.5" width="${SIM.w}" height="${SIM.h}" rx="6"/>
${dots.join('\n')}

<rect class="pane" x="${PLOT.x}.5" y="${PLOT.y}.5" width="${PLOT.w}" height="${PLOT.h}" rx="6"/>
<path class="grid" d="M${px0} ${py0}V${py1}H${px1}"/>
<path class="grid" d="M${px0} ${((py0 + py1) / 2).toFixed(0)}H${px1}" stroke-dasharray="2 5"/>
<text class="t dim" x="${px0 - 8}" y="${py0 + 4}" text-anchor="end" font-size="9.5">100%</text>
<text class="t dim" x="${px0 - 8}" y="${py1 + 4}" text-anchor="end" font-size="9.5">0</text>
<text class="t dim" x="${((px0 + px1) / 2).toFixed(0)}" y="${py1 + 18}" text-anchor="middle" font-size="9.5">time →</text>
<path class="c" style="stroke:#58a6ff;stroke-dasharray:${cS.len};stroke-dashoffset:${cS.len};animation-name:dS" d="${cS.d}"/>
<path class="c" style="stroke:#f85149;stroke-dasharray:${cI.len};stroke-dashoffset:${cI.len};animation-name:dI" d="${cI.d}"/>
<path class="c" style="stroke:#3fb950;stroke-dasharray:${cR.len};stroke-dashoffset:${cR.len};animation-name:dR" d="${cR.d}"/>
<line class="sweep" x1="${px0}" y1="${py0}" x2="${px0}" y2="${py1}"/>
</svg>
`;

writeFileSync(process.argv[2], svg);
console.log('wrote', process.argv[2], (Buffer.byteLength(svg) / 1024).toFixed(1) + 'K');
console.log('peak infected:', (peakI * 100).toFixed(1) + '%',
  '| final recovered:', (series.at(-1).R * 100).toFixed(1) + '%');
console.log('infection times:', agents.map(a => a.tInf === null ? '—' : a.tInf.toFixed(2)).join(' '));
