<div align="center">

# Gurmilan Singh

### Software Engineer · Computer Engineering

**I build software that has to survive contact with real users.**

Workflows · state · permissions · relational data · reliability · deployment

<br>

<a href="https://gurmilansingh.com">
  <strong>gurmilansingh.com</strong>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;

<a href="https://www.linkedin.com/in/gurmilan-singh-017b28284">
  <img src="./assets/linkedin.svg" width="22" height="22" alt="LinkedIn">
</a>
&nbsp;&nbsp;&nbsp;

<a href="mailto:gurmilans01@gmail.com">
  <img src="./assets/mail.svg" width="22" height="22" alt="Email">
</a>

</div>

---

## `01` / $ whoami

```yaml
name:      Gurmilan Singh
location:  Modena, Italy

role:
  - Software Developer
  - Computer Engineering student

interested_in:
  - full-stack systems
  - backend architecture
  - relational data
  - operational software
  - distributed state
  - reliable deployment

currently:
  building: Alfaaz
  shipping: software people actually use
  graduating: December 2026
```

I like software where the interface is only one part of the problem.

The interesting work usually starts behind it:

**Who can do what? What state is the system really in? What happens when something fails? Can we explain how it got there?**

---

## `02` / Flagship

### Opssemble

> **Operational readiness shouldn't have to be reconstructed from WhatsApp messages, spreadsheets and someone's memory.**

Event operations software for teams coordinating live work.

Opssemble models an event as **live operational state** instead of a pile of disconnected tasks.

```text
coordinators ─┐
              ├──► web / field interfaces
field staff ──┘            │
                           ▼
                     Fastify API
                    ╱     │      ╲
                  auth   state    live
                  RBAC   engine   updates
                           │
                           ▼
                         MySQL
```

The parts I care about most:

`event RBAC`
 · 
`readiness modelling`
 · 
`state transitions`
 · 
`SSE`
 · 
`scoped QR capabilities`
 · 
`audit history`
 · 
`PWA`

<p>
  <img src="./assets/react.svg" width="28" height="28" alt="React" title="React">
  &nbsp;
  <img src="./assets/vite.svg" width="28" height="28" alt="Vite" title="Vite">
  &nbsp;
  <img src="./assets/nodejs.svg" width="28" height="28" alt="Node.js" title="Node.js">
  &nbsp;
  <img src="./assets/fastify.svg" width="28" height="28" alt="Fastify" title="Fastify">
  &nbsp;
  <img src="./assets/mysql.svg" width="28" height="28" alt="MySQL" title="MySQL">
</p>

**[Explore the Opssemble case study →](https://gurmilansingh.com/opssemble)**

---

## `03` / Things that escaped localhost

<table>
<tr>
<td width="50%" valign="top">

### MaintOps

> **Maintenance tickets are easy. Maintenance workflows aren't.**

A full-stack operations platform covering maintenance work from first report through assignment, SLA tracking, resolution and audit history.

The interesting bits:

`transactional state transitions`
`backend-owned RBAC`
`versioned SLA policies`
`background workers`
`immutable history`

Optional AI assists with specific tasks without becoming authoritative business logic.

<br>

<p>
  <img src="./assets/react.svg" width="24" height="24" alt="React">
  &nbsp;
  <img src="./assets/fastify.svg" width="24" height="24" alt="Fastify">
  &nbsp;
  <img src="./assets/mysql.svg" width="24" height="24" alt="MySQL">
</p>

**[Open the repository →](https://github.com/gurmilans-dev/maintops-public)**

</td>
<td width="50%" valign="top">

### Gurmat Saanj

> **Speech recognition was only half the problem. Keeping the room in sync was the other half.**

A real-time shared Gurbani reading system built for use at a local Gurdwara.

It listens to Punjabi recitation, matches recognised speech against known Gurbani and synchronises selected content across a projector and connected devices.

Each device stays in the same session while retaining its own reading preferences.

<br>

<p>
  <img src="./assets/react.svg" width="24" height="24" alt="React">
  &nbsp;
  <img src="./assets/nodejs.svg" width="24" height="24" alt="Node.js">
  &nbsp;
  <img src="./assets/express.svg" width="24" height="24" alt="Express">
</p>

**[See how it works →](https://gurmilansingh.com/gurmat-saanj)**

</td>
</tr>

<tr>
<td width="50%" valign="top">

### SIR Epidemic Simulator

> **Tiny JavaFX people making questionable epidemiological decisions.**

An agent-based epidemic simulation where individuals move through a bounded environment and transition between epidemiological states through proximity-based interactions.

Includes configurable transmission, mortality, immunity, quarantine, social distancing, live statistics and CSV export.

The simulation engine runs independently from JavaFX rendering.

<br>

<p>
  <img src="./assets/java.svg" width="24" height="24" alt="Java">
  &nbsp;
  <img src="./assets/maven.svg" width="24" height="24" alt="Maven">
</p>

**[Start an outbreak →](https://github.com/gurmilans-dev/sir-simulation)**

</td>
<td width="50%" valign="top">

### Production Business Platform

> **The project I can describe, but can't `git push`.**

Commercial internal software used in real operational workflows.

I work across the system rather than one isolated layer:

```text
UI
↓
API
↓
business rules
↓
relational data
↓
operations
```

The implementation and business data are confidential.

The engineering lessons aren't.

<br>

<p>
  <img src="./assets/csharp.svg" width="24" height="24" alt="C#">
  &nbsp;
  <img src="./assets/dotnet.svg" width="24" height="24" alt=".NET">
  &nbsp;
  <img src="./assets/sqlserver.svg" width="24" height="24" alt="SQL Server">
</p>

**[Read the case study →](https://gurmilansingh.com/erp-case-study)**

</td>
</tr>
</table>

---

## `04` / Toolbox

<table>
<tr>
<td align="center" width="90">
<img src="./assets/javascript.svg" width="38" height="38" alt="JavaScript"><br>
<sub>JavaScript</sub>
</td>

<td align="center" width="90">
<img src="./assets/csharp.svg" width="38" height="38" alt="C#"><br>
<sub>C#</sub>
</td>

<td align="center" width="90">
<img src="./assets/java.svg" width="38" height="38" alt="Java"><br>
<sub>Java</sub>
</td>

<td align="center" width="90">
<img src="./assets/react.svg" width="38" height="38" alt="React"><br>
<sub>React</sub>
</td>

<td align="center" width="90">
<img src="./assets/nodejs.svg" width="38" height="38" alt="Node.js"><br>
<sub>Node.js</sub>
</td>

<td align="center" width="90">
<img src="./assets/fastify.svg" width="38" height="38" alt="Fastify"><br>
<sub>Fastify</sub>
</td>

<td align="center" width="90">
<img src="./assets/dotnet.svg" width="38" height="38" alt=".NET"><br>
<sub>.NET</sub>
</td>
</tr>

<tr>
<td align="center" width="90">
<img src="./assets/mysql.svg" width="38" height="38" alt="MySQL"><br>
<sub>MySQL</sub>
</td>

<td align="center" width="90">
<img src="./assets/sqlserver.svg" width="38" height="38" alt="SQL Server"><br>
<sub>SQL Server</sub>
</td>

<td align="center" width="90">
<img src="./assets/docker.svg" width="38" height="38" alt="Docker"><br>
<sub>Docker</sub>
</td>

<td align="center" width="90">
<img src="./assets/linux.svg" width="38" height="38" alt="Linux"><br>
<sub>Linux</sub>
</td>

<td align="center" width="90">
<img src="./assets/git.svg" width="38" height="38" alt="Git"><br>
<sub>Git</sub>
</td>

<td align="center" width="90">
<img src="./assets/githubactions.svg" width="38" height="38" alt="GitHub Actions"><br>
<sub>Actions</sub>
</td>

<td align="center" width="90">
<img src="./assets/azure.svg" width="38" height="38" alt="Azure"><br>
<sub>Azure</sub>
</td>
</tr>
</table>

<sub>
Tools change. The things I care about don't: explicit state, clear ownership, enforceable permissions and boringly reliable deployments.
</sub>

---

## `05` / Currently cooking

### Alfaaz

> **A place for words before they're ready to become something.**

A private multilingual writing system for poetry, shayari, fragments and longer-form work across English, Hindi and Punjabi.

Currently working on:

```text
autosave + conflict handling
revisions + restore
fragments + collections
focus sessions
transliteration
voice notes
local exports
user-data isolation
```

Privacy boundaries are intentional.

Unfinished transliteration stays in the browser.
Local music stays local.
Exports are generated client-side.

<p>
  <img src="./assets/react.svg" width="24" height="24" alt="React">
  &nbsp;
  <img src="./assets/nodejs.svg" width="24" height="24" alt="Node.js">
  &nbsp;
  <img src="./assets/express.svg" width="24" height="24" alt="Express">
  &nbsp;
  <img src="./assets/mysql.svg" width="24" height="24" alt="MySQL">
  &nbsp;
  <img src="./assets/playwright.svg" width="24" height="24" alt="Playwright">
  &nbsp;
  <img src="./assets/vitest.svg" width="24" height="24" alt="Vitest">
</p>

`private` · `active development`

---

## `06` / How I build

```text
01  understand the real workflow
02  define state and ownership
03  make authorization a backend concern
04  keep the data model explicit
05  design the failure paths
06  automate repeatable work
07  test assumptions
08  deploy
09  find what reality disagrees with
10  fix it
```

> **External services and LLMs are tools, not architectural authorities.**

When I use them, I prefer bounded inputs, validated outputs, explicit failure modes and human control over consequential actions.

---

<div align="center">

### Build software that still makes sense after deployment.

<br>

<a href="https://gurmilansingh.com">
  <img src="./assets/globe.svg" width="20" height="20" alt="Website">
  &nbsp;
  <strong>gurmilansingh.com</strong>
</a>

<br><br>

<sub>Modena, Italy · Software Developer · Computer Engineering</sub>

</div>
