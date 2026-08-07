Gurmilan Singh

Software Engineer · Computer Engineering

I build software that has to survive contact with real users.

Full-stack systems around workflows, permissions, state, relational data, operational constraints, reliability and deployment.

Portfolio · LinkedIn · Email

I am most interested in the point where application code meets operational reality: authorization, state transitions, concurrent users, relational data, unreliable dependencies, existing infrastructure and maintainability after deployment.

Engineering focus

product systems
      │
      ▼
applications / workflow UX
      │
      ▼
backend / domain logic
      │
      ▼
relational data
      │
      ▼
operations / deployment
      │
      ▼
real users

frontend       React · JavaFX
backend        Fastify · Node.js · ASP.NET Core
data           MySQL · SQL Server
systems        Linux · Docker · networking
delivery       GitHub Actions · Azure

The interface is only one layer. I like systems where the UI, backend rules, data model and operational environment all have to agree.

Flagship product

Opssemble

PRIVATE · PRE-LAUNCHEvent operations and readiness infrastructure for teams coordinating live work.

Live events should not depend on people mentally reconstructing readiness from messages, spreadsheets and scattered task updates. Opssemble models the operational state directly: areas, tasks, exceptions, roles, readiness, field access and live changes.

                           OPSSEMBLE

        coordinators                      field staff
              │                               │
              ▼                               ▼
      web application                  scoped QR workspace
              │                               │
              └──────────────┬────────────────┘
                             ▼
                        Fastify API
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
     auth / RBAC       readiness logic        MySQL
                             │
                             ▼
                      live event rooms
                             │
                             ▼
                            SSE

LIVE OPERATIONS — Server-Sent Events distribute changing operational state and viewer presence.

AUTHORIZATION — server-enforced event membership and role boundaries protect actions at the API.

READINESS ENGINE — task completion, exceptions and timed checkpoints contribute to explicit readiness.

FIELD ACCESS — revocable, SHA-256-hashed QR capabilities create temporary scoped guest sessions.

OPERATOR UX — mobile "My Shift" workflows and cross-event queues keep field work focused.

EVIDENCE + AUDIT — protected completion evidence and activity history preserve operational context.

RESILIENCE — reconnection handling and installable PWA behaviour support continued use around live operations.

React · Vite · Material UI · TanStack Query · Fastify · Node.js · MySQL · SSE · JWT · Google OAuth

Private repository · Product launch in preparation

View product case study →

Selected systems

01 / MaintOps

Maintenance operations platform — a full-stack workflow system for maintenance requests, assignment, work, resolution, service-level tracking and operational reporting.

The interesting part is the state machine around the request:

transactional workflow transitions

backend-owned RBAC and privileges

versioned SLA policies and background processing

immutable operational history

protected evidence delivery

audited administration

AI assistance isolated from authoritative business state

React · Fastify · MySQL · REST · RBAC · Vitest

Explore the repository →

02 / Gurmat Saanj

Real-time shared Gurbani reading and recognition system · used at a local Gurdwara

This is a synchronization problem, not just a speech-recognition demo. Live Punjabi recitation is recognized and matched against known Gurbani lines, while a shared session keeps projector and viewer devices coordinated without forcing every device into the same presentation state.

live recitation
      │
      ▼
 speech recognition
      │
      ▼
 normalisation ──► phrase matching ──► Gurbani line
                                          │
                               ┌──────────┴──────────┐
                               ▼                     ▼
                           projector              viewers
                                                     │
                                             local preferences

React · Node.js · Express · Web Speech API · BaniDB

Read the case study →

03 / Production Business Platform

Commercial software · Production

Internal business software used in real operational workflows. I work across the system rather than at one isolated layer:

interface ──► API ──► business rules ──► relational data
    ▲                                      │
    └──── permissions · releases · support ┘

My work includes application interfaces, APIs, database-backed workflows, role-based permissions, releases, maintenance and user support. The implementation and business data are confidential.

Read the case study →

04 / SIR Epidemic Simulator

Agent-based simulation · Java / JavaFX

A desktop simulation where individual agents move through a bounded environment and transition between epidemiological states through proximity-based interactions. The simulation engine executes independently from the JavaFX rendering thread and exposes configurable infection, mortality, immunity, quarantine and social-distancing behaviour with live statistics and CSV export.

Java 17 · JavaFX · Maven · FXML · Concurrency

Explore the repository →

Private builds

<details>
<summary><strong>Alfaaz — private multilingual writing system · active development</strong></summary>
<br>

A personal writing platform for poetry, shayari, fragments and longer-form writing across English, Hindi and Punjabi.

write
  │
  ├── autosave + conflict handling
  ├── revisions + restore
  ├── fragments + collections
  ├── focus sessions
  ├── transliteration
  ├── voice notes
  └── local exports
          │
          ▼
     private archive

The design deliberately separates private writing from optional local capabilities: unfinished transliteration stays in the browser, local music never reaches the server, exports are generated client-side and user-owned data is scoped at the repository layer.

The backend uses explicit routes → controllers → services → repositories, parameterised SQL, database-backed sessions and transactional updates.

React · Express · MySQL · Zod · Playwright · Vitest

</details>

System lifecycle

$ build-system

01  understand the workflow
02  define state and boundaries
03  make authorization a backend concern
04  keep the data model boring and explicit
05  design failure paths before adding cleverness
06  automate what is repeatable
07  measure twice
08  deploy
09  discover what reality disagrees with
10  fix it

External services and LLMs are tools, not architectural authorities.I prefer bounded inputs, validated outputs, explicit failure modes and human control over consequential actions.

Toolbox

languages      JavaScript · C# · Java · SQL · Bash
frontend       React · JavaFX · HTML · CSS
backend        Node.js · Fastify · Express · ASP.NET Core
data           MySQL · SQL Server · relational modelling
systems        Linux · Docker · VMware ESXi · networking · SSH
delivery       Git · GitHub Actions · Azure

Architecture and systems thinking matter more to me than the number of technologies in the list.

Current status

location       Modena, Italy
work           Software Developer
education      BSc Computer Engineering
graduation     expected December 2026
focus          building systems worth explaining

<p align="center">
  <strong><a href="https://gurmilansingh.com">gurmilansingh.com →</a></strong>
</p>
