<div align="center">

# Gurmilan Singh

**Software Engineer · Computer Engineering**

**I build software that has to survive contact with real users.**

Full-stack systems around workflows, permissions, state, relational data, operational constraints, reliability and deployment.

[Portfolio](https://gurmilansingh.com) · [LinkedIn](https://www.linkedin.com/in/gurmilan-singh-017b28284) · [Email](mailto:gurmilans01@gmail.com)

</div>

---

## What I build

I am most interested in software where the interface is only one part of the problem.

```text
product workflow
      │
      ▼
 application
      │
      ▼
 domain logic
      │
      ▼
relational data
      │
      ▼
  operations
      │
      ▼
  real users
```

That usually means thinking about authorization, state transitions, concurrent users, transactions, failure paths, deployment and what happens after the software leaves a development machine.

```text
frontend       React · JavaFX
backend        Fastify · Node.js · ASP.NET Core
data           MySQL · SQL Server
systems        Linux · Docker · networking
delivery       GitHub Actions · Azure
```

---

## Opssemble

**FLAGSHIP PRODUCT · PRIVATE / PRE-LAUNCH**

Event operations and readiness software for teams coordinating live work.

Opssemble exists because operational readiness should not have to be reconstructed from WhatsApp messages, spreadsheets and scattered task updates.

It models an event as live operational state:

```text
event
 │
 ├── areas
 │    ├── tasks
 │    ├── exceptions
 │    └── readiness
 │
 ├── members / roles
 ├── operational checkpoints
 ├── reporting
 └── scoped field access
```

The system currently includes:

* **server-enforced event RBAC** across coordinator and staff workflows
* **task + exception driven readiness** at event and area level
* **Server-Sent Events** for live operational updates and viewer presence
* **revocable QR capabilities** for temporary, scoped field access
* **mobile operator workflows** including My Shift and cross-event queues
* **protected completion evidence** and an operational audit timeline
* authentication, Google OAuth, reports, CSV export, reusable templates and PWA support

```text
 coordinators                         field staff
      │                                   │
      ▼                                   ▼
web application                    QR workspace
      │                                   │
      └───────────────┬───────────────────┘
                      ▼
                 Fastify API
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    auth / RBAC    readiness       MySQL
                      │
                      ▼
               live event rooms
                      │
                      ▼
                     SSE
```

`React` · `Vite` · `Material UI` · `TanStack Query` · `Fastify` · `Node.js` · `MySQL` · `SSE` · `JWT` · `Google OAuth`

**Private repository · product launch in preparation**

[View the Opssemble case study →](https://gurmilansingh.com/opssemble)

---

## Selected systems

### 01 / MaintOps

**Maintenance operations platform**

A full-stack system for handling maintenance requests from initial report through assignment, work, resolution, SLA tracking and operational reporting.

The interesting part is not the ticket form. It is the workflow behind it:

* transactional state transitions
* backend-owned RBAC and privileges
* versioned SLA policies
* background workers for scheduled operations
* immutable operational history
* protected evidence delivery
* audited administration
* optional AI assistance isolated from authoritative business state

`React` · `Fastify` · `MySQL` · `REST` · `RBAC` · `Vitest`

[Explore the repository →](https://github.com/gurmilans-dev/maintops-public)

---

### 02 / Gurmat Saanj

**Real-time shared Gurbani reading system**

Built for use at a local Gurdwara.

Gurmat Saanj listens to live Punjabi recitation, matches recognized speech against known Gurbani lines and synchronizes the selected content across a projector and connected devices.

The problem is synchronization rather than speech recognition alone.

```text
live recitation
      │
      ▼
 recognition
      │
      ▼
normalisation ──► phrase matching ──► Gurbani line
                                         │
                              ┌──────────┴──────────┐
                              ▼                     ▼
                          projector              viewers
                                                    │
                                            local preferences
```

Connected devices can remain part of the same shared session while retaining their own reading preferences.

`React` · `Node.js` · `Express` · `Web Speech API` · `BaniDB`

[Read the case study →](https://gurmilansingh.com/gurmat-saanj)

---

### 03 / Production Business Platform

**Commercial software · Production**

Internal business software used in real operational workflows.

I work across the system rather than one isolated layer:

```text
UI ──► API ──► business rules ──► relational data
▲                                      │
└──── permissions · releases · support ┘
```

My work includes application interfaces, APIs, database-backed workflows, role-based permissions, releases, maintenance and user support.

The implementation and business data are confidential.

[Read the case study →](https://gurmilansingh.com/erp-case-study)

---

### 04 / SIR Epidemic Simulator

**Agent-based epidemic simulation · Java**

A JavaFX simulation where individual agents move through a bounded environment and transition between epidemiological states through proximity-based interactions.

It includes configurable infection parameters, mortality, immunity, quarantine, social distancing, live statistics and CSV export.

The simulation engine executes independently from the JavaFX rendering thread.

`Java 17` · `JavaFX` · `Maven` · `FXML` · `Concurrency`

[Explore the repository →](https://github.com/gurmilans-dev/sir-simulation)

---

## Private build

### Alfaaz

**Multilingual writing system · active development**

A private writing platform for poetry, shayari, fragments and longer-form work across English, Hindi and Punjabi.

```text
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
```

Privacy boundaries are deliberate: unfinished transliteration stays in the browser, local music does not reach the server, exports are generated client-side and user-owned data is scoped at the repository layer.

`React` · `Express` · `MySQL` · `Zod` · `Playwright` · `Vitest`

---

## How I build

```text
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
```

**External services and LLMs are tools, not architectural authorities.**

When I use them, I prefer bounded inputs, validated outputs, explicit failure modes and human control over consequential actions.

---

## Toolbox

```text
languages      JavaScript · C# · Java · SQL · Bash

frontend       React · JavaFX · HTML · CSS

backend        Node.js · Fastify · Express
               ASP.NET Core

data           MySQL · SQL Server
               relational modelling

systems        Linux · Docker · VMware ESXi
               networking · SSH

delivery       Git · GitHub Actions · Azure
```

---

## Current

```text
location       Modena, Italy
work           Software Developer
education      BSc Computer Engineering
graduation     expected December 2026
focus          building systems worth explaining
```

<div align="center">

**[gurmilansingh.com →](https://gurmilansingh.com)**

</div>
