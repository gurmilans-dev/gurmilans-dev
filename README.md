````markdown
# Gurmilan Singh

**Software Developer · Computer Engineering student · Modena, Italy**

**I build software that has to survive contact with real users.**

I work on full-stack and backend-heavy systems where authorization, state transitions, relational data, deployment, and failure handling are part of the design—not cleanup after the demo.

[Portfolio](https://gurmilansingh.com) · [LinkedIn](https://www.linkedin.com/in/gurmilan-singh-017b28284) · [Email](mailto:gurmilans01@gmail.com)

## Engineering focus

- **System design** — operational workflows turned into explicit state, boundaries, APIs, and relational models.
- **Backend correctness** — server-side authorization, validation, transactional changes, and auditable history.
- **Operational software** — time-based workflows, background work, failure paths, releases, maintenance, and user support.
- **Infrastructure & delivery** — Linux, Docker, VMware ESXi, GitHub Actions, Azure, networking, and deployment.

## Selected systems

### 01 / MaintOps — maintenance operations platform

- **Problem / challenge.** Maintenance requests become a workflow problem once assignment, holds, SLA clocks, resolution, evidence, permissions, and administration interact.
- **Built.** A React, Fastify, and MySQL system whose backend owns authorization and request lifecycle transitions. It includes versioned SLA policies, scheduled workers, immutable operational history, protected attachments, and audited administration.
- **Engineering interest.** Core workflows remain independent of optional AI assistance; provider failures do not own business state or block the maintenance path.

**[Explore the repository →](https://github.com/gurmilans-dev/maintops-public)**

### 02 / Production Business Platform — production internal software

- **Problem / challenge.** Replace disconnected legacy tools, spreadsheets, and manual hand-offs with shared software without losing control of data or role-based access.
- **Built.** I work across the interface, API, relational data model, permissions, reporting, releases, maintenance, and support for software used in daily internal operations.
- **Engineering interest.** Ownership continues after deployment: reproduce user-reported issues, trace interface/API/permission/data behaviour, release the fix, and verify it with the people using the system.

The implementation, data, and specific internal workflows are confidential.

**[Read the case study →](https://gurmilansingh.com/erp-case-study)**

### 03 / Gurmat Saanj — real-time shared reading system

- **Problem / challenge.** Live Punjabi recitation needs to drive a projector and connected personal devices without turning every viewer into a control surface.
- **Built.** A React and Node.js/Express application that normalises speech recognition, matches it against known BaniDB text, and synchronises the selected line across a shared session.
- **Engineering interest.** Recognition produces candidates, not display text. Confidence handling can hold the current line; one approved editor controls shared state while viewers keep device-local reading preferences.

**[Read the case study →](https://gurmilansingh.com/gurmat-saanj)**

### 04 / Opssemble — event operations system

**Active development · university final project**

- **Problem / challenge.** Event readiness is difficult to reason about when tasks, exceptions, ownership, and area access are scattered.
- **Built.** A React, Fastify, and MySQL system modelling events as areas with tasks and exceptions, server-side event roles, derived readiness, activity records, and revocable QR-scoped access.
- **Engineering interest.** Every write is checked against the caller's event role; area tokens are stored as hashes, and optional AI assistance has no write authority.

**[Read the case study →](https://gurmilansingh.com/opssemble)**

## Current

- **Software Developer** — full-stack business software, releases, maintenance, and direct user support.
- **BSc Computer Engineering** — expected December 2026.
- **Based in** Modena, Italy.

## Additional work

- **[SIR Epidemic Simulator](https://github.com/gurmilans-dev/sir-simulation)** — Java 17 / JavaFX agent-based SIRD simulation; the simulation engine runs independently from the UI thread, with live statistics and CSV export.
- **Alfaaz** — private multilingual writing system in active development; autosave with conflict handling, revisions and restore, transactional updates, and user-owned data scoped at the repository layer.

## How I tend to build

```text
workflow -> state + boundaries -> authorization -> transactions -> deploy
    ^                                                        |
    +---------------- reality / feedback --------------------+
```

I prefer explicit data models, backend-owned authorization, failure paths designed before cleverness, and changes that remain understandable after the first release.

Reality tends to find the assumptions the design missed. Production software has to be maintained after that happens.

External services and LLMs are dependencies, not architectural authorities. I prefer bounded inputs, validated outputs, explicit failure modes, and human control over consequential actions.

## Toolbox

```text
languages      JavaScript · C# · Java · SQL · Bash
frontend       React · JavaFX · HTML · CSS
backend        Node.js · Fastify · Express · ASP.NET Core
data           MySQL · SQL Server · relational modelling
systems        Linux · Docker · VMware ESXi · networking · SSH
delivery       Git · GitHub Actions · Azure
```
````
