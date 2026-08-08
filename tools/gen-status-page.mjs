// Generates assets/status-page.svg — a deadpan status page with a 90-day uptime strip.
// Run: node tools/gen-status-page.mjs assets/status-page.svg
//
// The green baseline is a <pattern>, so only the ~50 incident bars are emitted as
// elements. Drawing all 360 bars individually cost 36KB; this costs about 7KB.
import { writeFileSync } from 'node:fs';

const W = 900, H = 348;
const DAYS = 60;              // 60 bars reads as "90 days" density without the clutter
const STRIP_X = 430, STRIP_W = 268;
const BAR_W = STRIP_W / DAYS;
const BAR_H = 17;
const PILL_R = 868;

let seed = 815;
const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;

const OK = '#3fb950', WARN = '#d29922', BAD = '#f85149';

// [label, status, degradedDays, downDays, countsTowardShippingUptime]
const services = [
  ['auth &amp; permissions',           'operational',           0,  0, true],
  ['state machines',                   'operational',           0,  0, true],
  ['rollback plan',                    'operational',           0,  0, true],
  ['responding to &quot;quick question&quot;', 'operational',   2,  0, true],
  ['caffeine delivery',                'degraded performance', 14,  2, false],
  ['sleep schedule',                   'major outage',         16, 21, false],
];

const STATUS_COLOR = {
  'operational': OK,
  'degraded performance': WARN,
  'major outage': BAD,
};

const rows = [];
const covers = [];
let shipDays = 0, shipLost = 0;

services.forEach(([label, status, nWarn, nBad, counts], i) => {
  const y = 140 + i * 32;
  const barY = y - 13;

  // pick incident days, skewed slightly toward the recent (right) end
  const state = new Array(DAYS).fill(0);
  const place = (n, v) => {
    let placed = 0, guard = 0;
    while (placed < n && guard++ < 800) {
      const idx = Math.min(DAYS - 1, Math.floor(Math.pow(rnd(), 0.75) * DAYS));
      if (state[idx] < v) { state[idx] = v; placed++; }
    }
  };
  place(nBad, 2);
  place(nWarn, 1);

  // only the non-green days become elements; green is the pattern underneath
  const incidents = state.map((s, d) => {
    if (!s) return '';
    const x = (STRIP_X + d * BAR_W).toFixed(2);
    return `<rect x="${x}" y="${barY}" width="${(BAR_W - 0.9).toFixed(2)}" height="${BAR_H}" rx="1.2" fill="${s === 2 ? BAD : WARN}"/>`;
  }).join('');

  if (counts) { shipDays += DAYS; shipLost += nBad + nWarn * 0.5; }

  const col = STATUS_COLOR[status];
  const pillW = status === 'operational' ? 96 : status === 'degraded performance' ? 154 : 108;
  const dotCls = status === 'operational' ? '' : ' class="pulse"';

  rows.push(
    `<g>
<circle cx="34" cy="${y - 4}" r="4.5" fill="${col}"${dotCls}/>
<text class="t nm" x="50" y="${y}">${label}</text>
<rect x="${STRIP_X}" y="${barY}" width="${STRIP_W}" height="${BAR_H}" fill="url(#ok)"/>
${incidents}
<rect x="${PILL_R - pillW}" y="${y - 16}" width="${pillW}" height="22" rx="11" fill="${col}" opacity=".13"/>
<rect x="${(PILL_R - pillW + 0.5).toFixed(1)}" y="${y - 15.5}" width="${pillW - 1}" height="21" rx="10.5" fill="none" stroke="${col}" stroke-opacity=".45"/>
<text class="t pill" x="${PILL_R - pillW / 2}" y="${y - 1}" fill="${col}">${status}</text>
</g>`
  );

  covers.push(
    `<rect class="wipe" style="animation-delay:${(0.15 + i * 0.09).toFixed(2)}s" x="${STRIP_X - 1}" y="${barY - 1}" width="${STRIP_W + 2}" height="${BAR_H + 2}" fill="#0d1117"/>`
  );
});

// uptime is quoted for the services that actually ship — an aggregate that folded in
// the two joke rows would read as alarming rather than droll, and wouldn't mean anything
const uptime = (100 - (shipLost / shipDays) * 100).toFixed(2);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Status page. Overall: partially degraded. Auth and permissions, state machines, rollback plan and responding to quick questions are all operational. Caffeine delivery is degraded. Sleep schedule is a major outage. Shipping services at ${uptime} percent over the last 90 days.">
<style>
.t{font-family:ui-monospace,"SF Mono","Cascadia Mono",Menlo,Consolas,"Liberation Mono",monospace}
.dim{fill:#8b949e;font-size:12px}
.nm{fill:#e6edf3;font-size:13px}
.pill{font-size:11px;text-anchor:middle}
.sep{stroke:#21262d;stroke-width:1;fill:none}
.wipe{animation:wipe .55s cubic-bezier(.3,.8,.4,1) both}
@keyframes wipe{from{transform:translateX(0)}to{transform:translateX(${STRIP_W + 4}px)}}
.pulse{animation:pl 2.2s ease-in-out infinite}
@keyframes pl{0%,100%{opacity:1}50%{opacity:.45}}
@media (prefers-reduced-motion:reduce){
.wipe{animation:none;opacity:0}
.pulse{animation:none;opacity:1}
}
</style>
<defs>
<pattern id="ok" x="${STRIP_X}" y="0" width="${BAR_W.toFixed(4)}" height="${BAR_H}" patternUnits="userSpaceOnUse">
<rect width="${(BAR_W - 0.9).toFixed(2)}" height="${BAR_H}" rx="1.2" fill="${OK}"/>
</pattern>
<!-- the wipe covers finish translated past the end of the strip; without this clip they
     park on top of the status pills and hide them permanently -->
<clipPath id="strip"><rect x="${STRIP_X - 1}" y="120" width="${STRIP_W + 2}" height="${6 * 32}"/></clipPath>
</defs>
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="10" fill="#0d1117" stroke="#30363d"/>

<text class="t dim" x="24" y="32">gurmilan.status</text>
<text class="t dim" x="876" y="32" text-anchor="end">last updated: continuously</text>

<rect x="24" y="48" width="852" height="38" rx="8" fill="${WARN}" opacity=".12"/>
<rect x="24.5" y="48.5" width="851" height="37" rx="8" fill="none" stroke="${WARN}" stroke-opacity=".4"/>
<circle cx="46" cy="67" r="5" fill="${WARN}" class="pulse"/>
<text class="t" x="62" y="72" fill="${WARN}" font-size="13.5">Partially degraded</text>
<text class="t dim" x="214" y="72">— everything that ships is fine; the operator needs sleep</text>

<path class="sep" d="M24 104h852"/>
<text class="t dim" x="50" y="122" font-size="11">SERVICE</text>
<text class="t dim" x="${STRIP_X}" y="122" font-size="11">LAST 90 DAYS</text>
<text class="t dim" x="${PILL_R}" y="122" font-size="11" text-anchor="end">STATUS</text>

${rows.join('\n')}
<g clip-path="url(#strip)">
${covers.join('\n')}
</g>

<path class="sep" d="M24 ${H - 34}h852"/>
<text class="t dim" x="24" y="${H - 14}">shipping services: <tspan fill="${OK}">${uptime}%</tspan> over the last 90 days</text>
<text class="t dim" x="876" y="${H - 14}" text-anchor="end">the rest was exam season</text>
</svg>
`;

writeFileSync(process.argv[2], svg);
console.log('wrote', process.argv[2], (Buffer.byteLength(svg) / 1024).toFixed(1) + 'K');
console.log('shipping uptime:', uptime + '%');
