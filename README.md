<!--

  ╭──────────────────────────────────────────────────────────────╮
  │   you opened the raw file. of course you did.                │
  ╰──────────────────────────────────────────────────────────────╯

  Everything that moves on this page is a hand written SVG in ./assets.
  No badge services, no scheduled jobs, no third party anything. Nothing
  here can go stale while I am not looking at it.

  The epidemic simulation is not a loop of random dots. It is generated
  from a real SIR integration, and each agent changes state on the exact
  schedule that integration produced. One of them never gets infected.
  See tools/gen-sir-sim.mjs if you want to change the parameters.

  How any of it animates at all, given GitHub's sanitiser: CSS keyframes
  inside an .svg loaded through an img tag still run. Scripts do not, and
  pointer events never arrive, so there is no hover, ever. Working inside
  that constraint is most of what made this fun to build.

  There are four drawers nested inside one another somewhere below. The
  bottom one is not a joke.

                                                  gurmilansingh.com
-->

<div align="center">

# Gurmilan Singh

<img src="./assets/console-boot.svg" width="840" alt="Terminal running ./gurmilan --status: location Modena Italy [OK], role Software Engineer [OK], working at Phema s.r.l. [OK], focus operational software [OK], shipping Alfaaz [BUSY], graduating December 2026 [ETA]. I build software that has to survive contact with real users.">

<br>

<!-- Keep each anchor on one line with no spaces or newlines inside it. Any whitespace
     between the image and the closing tag collapses into a real space that sits inside
     the link, and GitHub draws its link underline through that space, which shows up as
     a stray dash beside the icon. -->
<a href="https://gurmilansingh.com"><strong>gurmilansingh.com</strong></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/gurmilan-singh-017b28284"><img src="./assets/linkedin.svg" width="22" height="22" alt="LinkedIn"></a>
&nbsp;&nbsp;&nbsp;
<a href="mailto:gurmilans01@gmail.com"><img src="./assets/mail.svg" width="22" height="22" alt="Email"></a>

</div>

---

## `01` / $ whoami

```yaml
name: Gurmilan Singh
location: Modena, Italy

role:
  - Software Developer
  - Computer Engineering student

currently:
  building: Alfaaz
  working: Phema s.r.l.
  shipping: software people actually use
  graduating: December 2026
```

I like software where the interface is only one part of the problem.

The interesting work usually starts behind it:

**Who can do what? What state is the system really in? What happens when something fails? Can we explain how it got there?**

<details>
<summary><code>$ man gurmilan</code></summary>

<br>

```troff
GURMILAN(1)                  Developer Manual                  GURMILAN(1)

NAME
       gurmilan — builds software that survives contact with real users

SYNOPSIS
       gurmilan [--full-stack] [--backend-heavy] [--own-the-deploy]
                [--ask-about-edge-cases] <problem>

DESCRIPTION
       Takes a real operational workflow and returns a system whose state
       is explicit, whose permissions are enforceable server-side, and
       whose failure paths were designed rather than discovered.

OPTIONS
       --full-stack
              Works across UI, API, data and deployment.

       --backend-heavy
              Default. This is usually where the problem actually lives.

       --own-the-deploy
              Considers a feature unfinished until it runs somewhere real.

       --ask-about-edge-cases
              Cannot be disabled.

ENVIRONMENT
       LOCATION     Modena, Italy
       LANGUAGES    Italian, Punjabi, English, Hindi
       EMPLOYER     Phema s.r.l.
       STATUS       not looking — still reading
       GRADUATING   December 2026

EXIT STATUS
       0      Shipped.
       1      Shipped, then found what reality disagreed with. See fix(1).

SEE ALSO
       gurmilansingh.com
```

</details>

---

## `02` / Flagship

### Opssemble

> **Operational readiness shouldn't have to be reconstructed from WhatsApp messages, spreadsheets and someone's memory.**

Event operations software for teams coordinating live work.

Opssemble models an event as **live operational state** instead of a pile of disconnected tasks.

<img src="./assets/opssemble-live.svg" width="900" alt="Opssemble runtime topology: coordinators and field staff use web and field interfaces, which call a Fastify API. The API fans out to auth and event RBAC, a state engine, and live SSE updates. Auth and the state engine read and write MySQL, while live updates stream back out to the interfaces.">

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

<details>
<summary>What "operational readiness" actually looks like at 02:14</summary>

<br>

```log
02:14:07  scan     gate-B · steward #41 · qr:cap=checkin,scope=gate-B    → accepted
02:14:07  state    gate-B  staffed(3/4) → staffed(4/4)                   → ready
02:14:09  sse      fan-out to 12 subscribers                             → 12 ok
02:16:33  report   gate-D · "generator making a noise"        severity:2
02:16:33  state    gate-D  ready → degraded                              → escalated
02:16:34  sse      fan-out to 12 subscribers                             → 12 ok
02:17:02  action   steward #41 → reassign(gate-D)
02:17:02  authz    DENY  role=steward lacks reassign:crew on gate-D
02:17:02  audit    denial recorded · actor #41 · reason=missing_capability
02:17:48  action   coordinator #7 → reassign(gate-D, crew=2)
02:17:48  authz    ALLOW role=coordinator scope=event:114
02:17:49  state    gate-D  degraded → ready                              → resolved
02:17:49  audit    114 entries · reconstructable
```

Nobody had to ask "who is at gate D right now?" in a WhatsApp group.

The denial at 02:17:02 is the part I care about most. A steward tried something
reasonable, the backend said no, and the reason was written down. That's not an
error path bolted on afterwards — it's the same code path as the success.

</details>

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

<details>
<summary>All of it, as a directory listing</summary>

<br>

```console
$ tree ~/projects -L 2 --du -h

/home/gurmilan/projects
├── opssemble/              [ 4.2M ]  drwxr-xr-x   flagship
│   ├── api/                          fastify · rbac · sse
│   ├── web/                          react · vite · pwa
│   └── docs/readiness-model.md
├── maintops/               [ 3.1M ]  drwxr-xr-x   public
│   ├── workers/                      background jobs, idempotent
│   └── policies/sla.versioned.sql
├── gurmat-saanj/           [ 2.4M ]  drwxr-xr-x   running in one Gurdwara
│   └── sync/                         the hard half
├── alfaaz/                 [ 1.8M ]  drwx------   private
│   └── .gitignore                    (load-bearing)
├── sir-simulation/         [ 890K ]  drwxr-xr-x   java · javafx
│   └── engine/                       decoupled from rendering, on purpose
└── confidential/           [   ?  ]  d---------   nice try
    └── permission denied

6 directories, one of which you are not getting into
```

</details>

<details>
<summary><code>$ ./sir --start-outbreak</code> &nbsp;&nbsp;<sub>(you were told to)</sub></summary>

<br>

<img src="./assets/sir-sim.svg" width="840" alt="Agent-based SIR epidemic simulation: 26 agents wander a bounded box, turning from susceptible to infected to recovered, alongside the susceptible, infected and recovered curves produced by the same run.">

<sub>26 agents, β = 0.30, γ = 0.085. The curves aren't decorative — the agents change state on the schedule that integration produced. One of them never gets infected. Lucky.</sub>

</details>

<details>
<summary><code>$ git log --oneline --author="past me"</code></summary>

<br>

```console
4a91c2e  fix: authorization checks belong on the server, not in the router
8b30fd1  fix: a state machine, not four booleans that mostly agree
c17ae44  fix: stop letting the client tell us who it is
2f0d9b3  fix: soft delete was not a feature, it was a bug with a flag
9e4c1a8  fix: the background job needed to be idempotent all along
55b8e07  fix: "we'll add tests later" turned out to be load-bearing
e02f77a  fix: the migration ran fine locally (it did not run fine)
```

Every one of these is a thing I now design for up front. That's most of what
`06 / How I build` actually is — a list of mistakes with the dates filed off.

</details>

---

## `04` / Toolbox

<img src="./assets/toolbox-htop.svg" width="900" alt="An htop-style process monitor listing the tools I spend time in — javascript, nodejs, csharp, react, dotnet, fastify, mysql, sqlserver, java and docker — with a %TIME column rather than a skill score. Docker is stuck in uninterruptible sleep. Tasks: 5 running, 2 blocked on code review.">

<sub>`%TIME`, not `%CPU` — this is where the hours go, not a self-assessed skill score.</sub>

<br>

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

> [!TIP]
> Tools change. The things I care about don't: explicit state, clear ownership, enforceable permissions and boringly reliable deployments.

---

## `05` / Currently cooking

### Alfaaz

> **A place for words before they're ready to become something.**

A private multilingual writing system for poetry, shayari, fragments and longer-form work across English, Hindi and Punjabi.

Currently open on the workbench — none of these are finished, which is the point:

- [ ] autosave + conflict handling
- [ ] revisions + restore
- [ ] fragments + collections
- [ ] focus sessions
- [ ] transliteration
- [ ] voice notes
- [ ] local exports
- [ ] user-data isolation

<details>
<summary>What it looks like with something actually in it</summary>

<br>

<!-- Gurmilan: swap this for one of your own fragments — this is a placeholder line,
     picked because it echoes the tagline above. The point is the three-script view. -->

<table>
<tr><td width="60"><sub><code>en</code></sub></td><td>some words are not ready yet</td></tr>
<tr><td><sub><code>hi</code></sub></td><td>कुछ शब्द अभी तैयार नहीं हैं</td></tr>
<tr><td><sub><code>pa</code></sub></td><td>ਕੁਝ ਸ਼ਬਦ ਅਜੇ ਤਿਆਰ ਨਹੀਂ ਹਨ</td></tr>
</table>

<sub>`untitled fragment` · `3 scripts` · `unsaved` · `never leaves the browser until you say so`</sub>

The whole app exists because that state — not ready yet — needed somewhere to live
that wasn't a notes app, a Google Doc, or the back of a receipt.

</details>

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

<img src="./assets/build-pipeline.svg" width="900" alt="Build pipeline: ten stages in order — workflow, state, authz, data, failure, automate, test, deploy, reality, fix — where the last two loop back into each other indefinitely.">

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

> [!IMPORTANT]
> **External services and LLMs are tools, not architectural authorities.**
>
> When I use them, I prefer bounded inputs, validated outputs, explicit failure modes and human control over consequential actions.

---

## `07` / Status

<img src="./assets/status-page.svg" width="900" alt="Status page. Overall: partially degraded. Auth and permissions, state machines, rollback plan and responding to quick questions are all operational. Caffeine delivery is degraded. Sleep schedule is a major outage. Shipping services at 99.58 percent over the last 90 days.">

<table>
<tr><td width="220"><sub>scheduled maintenance</sub></td><td><sub>Sundays — Gurdwara first, then code</sub></td></tr>
<tr><td><sub>response time</sub></td><td><sub>under 24h, faster if the problem is interesting</sub></td></tr>
<tr><td><sub>known issue</sub></td><td><sub>asks "what happens when this fails?" mid-demo</sub></td></tr>
</table>

<details>
<summary><code>$ cat .env</code></summary>

<br>

```console
cat: .env: No such file or directory

$ cat .env.example
DATABASE_URL=
SESSION_SECRET=
JWT_SECRET=
# this one is committed. the other one never was.
# that distinction is most of what `03 / make authorization a
# backend concern` means in practice.
```

<details>
<summary><sub>you kept clicking, so — <code>$ history | tail -5</code></sub></summary>

<br>

```console
  498  git commit -m "final"
  499  git commit -m "final (actually)"
  500  git commit --amend -m "fix: SLA policies are versioned now"
  501  git push
  502  ssh prod 'journalctl -u api -f'
```

<details>
<summary><sub>still here? — <code>$ ls -la</code></sub></summary>

<br>

```console
total 48
drwxr-xr-x  gurmilan  4.0K  .
drwxr-xr-x  gurmilan  4.0K  ..
-rw-r--r--  gurmilan   214  .env.example
-rw-r--r--  gurmilan  1.2K  README.md
-rw-------  gurmilan    97  .secret
```

One of those is not like the others.

<details>
<summary><sub><code>$ cat .secret</code></sub></summary>

<br>

> If you read this far, you are the kind of person who reads the whole config
> before changing one line, and checks what the flag actually does before setting it.
>
> That is most of the job. We would probably get on.
>
> **[gurmilans01@gmail.com](mailto:gurmilans01@gmail.com)**

</details>

</details>

</details>

</details>

<details>
<summary><code>$ ./hire.sh --dry-run</code></summary>

<br>

```console
▸ availability ......... currently at Phema s.r.l.   [ BUSY ]
▸ open to offers ....... not right now               [ ---- ]
▸ open to a good problem  always                     [ OK   ]
▸ location ............. Modena, IT / remote         [ OK   ]
▸ stack ................ full-stack, backend-heavy   [ OK   ]
▸ resolving contact .... gurmilans01@gmail.com       [ OK   ]

dry run complete — no changes made.
exit 75    # EX_TEMPFAIL: try again later
```

Not looking right now. Still always up for a conversation about systems that have
to survive real users: **[email](mailto:gurmilans01@gmail.com)** · **[LinkedIn](https://www.linkedin.com/in/gurmilan-singh-017b28284)** · **[gurmilansingh.com](https://gurmilansingh.com)**

</details>

---

<div align="center">

### Build software that still makes sense after deployment.

<br>

<a href="https://gurmilansingh.com"><img src="./assets/globe.svg" width="20" height="20" alt="Website">&nbsp;<strong>gurmilansingh.com</strong></a>

<br><br>

<sub>Modena, Italy · Software Developer · Computer Engineering</sub>

<br><br>

<sub><code>$ exit 0</code></sub>

</div>
