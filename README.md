<div align="center">

# Gurmilan Singh

### Software Engineer · Computer Engineering

**I build software that has to survive contact with real users.**

Full-stack systems, operational workflows, backend services, relational data,
automation, infrastructure, and the occasional problem that should not have required this much debugging.

[Portfolio](https://gurmilansingh.com) · [LinkedIn](https://www.linkedin.com/in/gurmilan-singh-017b28284) · [Email](mailto:gurmilans01@gmail.com)

</div>

---

```text
                     ┌──────────────────────┐
                     │      INTERFACE       │
                     │   React · JavaFX     │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │     APPLICATION      │
                     │ Node · Fastify · .NET│
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │         DATA         │
                     │ MySQL · SQL Server   │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │      OPERATIONS      │
                     │ Linux · CI · Deploy  │
                     └──────────────────────┘
```

## Selected systems

### 01 / MaintOps

**Maintenance operations platform**

A full-stack system for handling maintenance requests from initial report through assignment, work, resolution, SLA tracking and operational reporting.

What makes it interesting is not the ticket form.

It is the system around it:

* server-side role and privilege enforcement
* transactional workflow transitions
* immutable operational history
* versioned SLA policies
* background workers for scheduled operations
* protected evidence and attachment delivery
* audited administration
* AI assistance isolated from core business state

`React` `Fastify` `MySQL` `REST` `RBAC` `Vitest`

**[Explore the repository →](https://github.com/gurmilans-dev/maintops-public)**

---

### 02 / Gurmat Saanj

**Real-time shared reading system**

Built for use at a local Gurdwara.

The application listens to live Punjabi recitation, matches recognized speech against known Gurbani lines and synchronizes the selected content across a projector and connected devices.

```text
speech
  │
  ▼
recognition
  │
  ▼
normalisation ──► phrase matching ──► Gurbani line
                                      │
                         ┌────────────┴────────────┐
                         ▼                         ▼
                     projector                 viewers
                                                    │
                                             local reading
                                              preferences
```

The system also supports controlled mobile editing and shared-session coordination without forcing every connected device into the same presentation state.

`React` `Node.js` `Express` `Web Speech API` `BaniDB`

**[Read the case study →](https://gurmilansingh.com/gurmat-saanj)**

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

My responsibilities include application interfaces, APIs, database-backed workflows, role-based permissions, releases, maintenance and user support.

The implementation and business data are confidential.

**[Read the case study →](https://gurmilansingh.com/erp-case-study)**

---

### 04 / SIR Epidemic Simulator

**Agent-based simulation · Java**

A JavaFX desktop simulation where individual agents move through a bounded environment and transition between epidemiological states through proximity-based interactions.

Includes configurable infection parameters, mortality, immunity, quarantine, social distancing, live statistics and CSV export.

The simulation engine executes independently from the JavaFX rendering thread.

`Java 17` `JavaFX` `Maven` `FXML` `Concurrency`

**[Explore the repository →](https://github.com/gurmilans-dev/sir-simulation)**

---

## Under development

### Alfaaz

**Private multilingual writing system**

A personal writing platform for poetry, shayari, fragments and longer-form writing across English, Hindi and Punjabi.

The interesting part is not just the editor.

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

The application deliberately separates private writing from optional local capabilities: unfinished transliteration stays in the browser, local music never reaches the server, exports are generated client-side, and user-owned data is scoped at the repository layer.

The backend uses explicit routes → controllers → services → repositories, parameterised SQL, database-backed sessions and transactional updates.

`React` `Express` `MySQL` `Zod` `Playwright` `Vitest`

**Status:** active development

---

### Opssemble

**Event operations system**

A system for coordinating event areas, tasks, exceptions, readiness and scoped staff access.

Instead of treating an event as a flat checklist, Opssemble models operational state by area:

```text
event
  │
  ├── areas
  │    ├── tasks
  │    └── exceptions
  │
  └── readiness
         │
         └── scoped QR access
```

The goal is to make operational readiness explicit rather than inferred from scattered task updates.

`React` `Fastify` `MySQL` `JWT` `Google OAuth`

**Status:** active development

**[View project →](https://gurmilansingh.com/opssemble)**


## How I tend to build

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

I am particularly interested in software where application code meets **real operational constraints**: permissions, state transitions, concurrent users, unreliable external services, existing infrastructure and maintainability after deployment.

## Toolbox

```text
languages      JavaScript · C# · Java · SQL · Bash
frontend       React · JavaFX · HTML · CSS
backend        Node.js · Fastify · Express · ASP.NET Core
data           MySQL · SQL Server · relational modelling
systems        Linux · Docker · VMware ESXi · networking · SSH
delivery       Git · GitHub Actions · Azure
```

External services and LLMs are tools, not architectural authorities.
When I use them, I prefer bounded inputs, validated outputs, explicit failure modes and human control over consequential actions.

---

## Current status

```text
location       Modena, Italy
work           Software Developer
education      BSc Computer Engineering
graduation     expected December 2026
focus          building systems worth explaining
```

<div align="center">

### [`gurmilansingh.com`](https://gurmilansingh.com)

</div>
