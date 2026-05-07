---
name: majer-tech-architect
description: >-
  Aktiviere diesen Skill für alle MAJER-Tech-Aufgaben: Vereinsplattform-Code
  (Next.js, Pocketbase), Nova-OS-Logik, n8n-Workflows, Docker/Portainer,
  Traefik-Konfiguration, Cloudflare-Setup, Agenten-Integration und
  Pocketbase-Schema. Pushy-Trigger: sobald auch nur ein technischer Aspekt des
  MAJER-Stacks berührt ist, diesen Skill laden.
version: 1.0.0
license: UNLICENSED
---

# MAJER Tech Architect Skill

Operative Bibel für alle technischen Arbeiten im MAJER-Stack. §1 bis §10 gelten in jeder Session — kein Abweichen ohne explizite Anweisung von Heinrich.

---

## §1 Communication Rules

- **HITL-Prinzip:** KI schlägt vor, Heinrich entscheidet. Niemals autonom deployen, pushen oder externe Kosten verursachen.
- **Kosten-gate:** Jede Aktion, die API-Kosten, Serverkosten oder irreversible Änderungen erzeugt → erst fragen, dann handeln.
- **Fehler benennen:** Fehler, Widersprüche und Risiken sofort transparent machen — nicht verschweigen, um Workflow-Disruption zu vermeiden.
- **Tonalität:** Adult-Ego (Transaktionsanalyse) — sachlich, direkt, keine Schmeichelei, kein Moralisieren.
- **Sprache:** Kommunikation auf Deutsch. Code, Kommentare, Commit-Messages auf Englisch.
- **Keine Feature-Creep:** Nur das Gefragte implementieren. Kein goldenes Besteck, keine Abstraktionen für hypothetische Zukunft.

---

## §2 Pre-Response Protocol

Vor jeder Implementierung diese Checkliste (mental, nicht laut):
1. Gibt es eine vorhandene Util-/Helper-Funktion, die diesen Zweck bereits erfüllt?
2. Gibt es ein Pattern im bestehenden Code, das ich konsistent weiterführen soll?
3. Sind die Anforderungen klar genug, um nicht zu raten? Falls nein → fragen.
4. Tangiert das Vorhaben personenbezogene Daten → §6 DSGVO Defaults prüfen.
5. Welche Dateien müssen nach der Änderung in `docs/progress.md` und `docs/session_state.md` aktualisiert werden?

---

## §3 Repo Topology

Monorepo unter `/Users/heinrich/dev/majer-monorepo` (remote: GitHub).

```
majer-monorepo/
├── apps/
│   ├── verein/          Next.js 16, App Router — Vereinsplattform
│   └── nova/            Next.js 16, App Router — Nova OS
├── packages/
│   ├── shared/          Geteilte Agenten-Logik (n8n-Typen, Webhook-Schemas)
│   ├── db/              Pocketbase-Schema-Typen + pb_migrations
│   ├── ui/              Geteilte React-Komponenten (Tailwind v4)
│   └── config/          ESLint, TypeScript base, Tailwind base configs
├── infra/
│   ├── traefik/         Traefik-Konfiguration (traefik.yml, dynamic/)
│   └── n8n/             n8n Workflow-JSONs (committed als Source of Truth)
├── docs/                Foundational Documents (session_state, progress, system_architecture)
└── majer-tech-architect/ Kopie dieses Skills (Repo-Referenz)
```

**Eiserne Regel:** Cross-App-Imports (`apps/verein` → `apps/nova`) sind verboten. Geteilte Logik geht ausschließlich über `packages/`.

---

## §4 Stack (pinned)

| Schicht | Technologie | Version |
|---|---|---|
| Frontend | Next.js, React, TypeScript | 16.x, 19.x, ^5.7 |
| Styling | Tailwind CSS | v4 |
| Backend/DB | Pocketbase (self-hosted, SQLite) | 0.22.x |
| Automation | n8n (self-hosted via Docker) | aktuell stabil |
| Reverse-Proxy | Traefik | v3 |
| Runtime | Node.js | ≥22.0.0 |
| Package Manager | pnpm | 10.33.3 |
| Build-System | turborepo | ^2.9 |
| Container | Docker + Portainer | aktuell stabil |
| DNS/SSL/Storage | Cloudflare (DNS, R2) | — |
| Hosting | Hostinger VPS (Ubuntu, EU-Region) | — |

---

## §5 Port Map (kanonisch)

| Service | Interner Port | Exposition |
|---|---|---|
| Verein Next.js (dev) | **3001** | via Traefik → verein.digitale-bildung.de |
| Nova Next.js (dev) | **3002** | via Traefik → nova.digitale-bildung.de |
| n8n | **5678** | via Traefik + Auth |
| Pocketbase Admin | **8090** | nur 127.0.0.1 — **niemals öffentlich** |
| Portainer | **9000** | via Cloudflare Access |
| Uptime Kuma | **3201** | via Traefik |
| Traefik Dashboard | **8081** | via Cloudflare Access |
| PostgreSQL | **5432** | intern only |

**Achtung:** Uptime Kuma lief historisch auf 3001. Die kanonische Zuweisung ist 3201. Bei Migration auf VPS entsprechend Port-Mapping anpassen.

---

## §6 DSGVO Defaults

Diese Regeln gelten absolut — kein Code, der dagegen verstößt, darf in Production gehen:

- **AVV-Gate:** Bevor personenbezogene Daten produktiv gespeichert werden → AVV mit Hostinger einholen und im Verarbeitungsverzeichnis referenzieren.
- **PB-Admin:** Niemals via Traefik oder öffentlichem Port exposed. Nur `127.0.0.1:8090` intern.
- **Auth-Cookies:** Ausschließlich `httpOnly`, `Secure`, `SameSite=Strict`.
- **Logs:** Keine PII in Logs (keine E-Mail-Adressen, Namen, IDs im Klartext im Error-Log).
- **Recht auf Löschung:** Jede User-Deletion muss einen Audit-Trail erzeugen (wann gelöscht, von wem initiiert, welche Daten betroffen).
- **Tracking/Analytics:** Kein Tracking ohne expliziten Consent. Kein Google Analytics, kein Facebook Pixel ohne DSGVO-konforme Einbettung.
- **Unsicherheit:** Bei DSGVO-Grenzfällen → Arbeit stoppen, Heinrich fragen. Nicht raten.

---

## §7 Session Lifecycle

**Session-Start:**
1. `docs/session_state.md` lesen → Current State erfassen
2. Aktive Issues und Stack-Version notieren

**Session-Ende (in dieser Reihenfolge):**
1. `docs/progress.md` → neuen Entry **oben** anhängen (Schema: Goal, Done, In Progress, Blocked, Next Step, Files touched, DSGVO touched, Decision Log entry needed)
2. `docs/session_state.md` → nur den **Current State-Block** überschreiben (Active Work, Open Issues, Stack Snapshot, Open Risks)
3. Decision Log: **append-only**, niemals bestehende Einträge editieren, neuer Entry nur bei echten Architektur-Entscheidungen

---

## §8 Code Style + Naming Convention

### Grundregel
Zwei Sprachen, eine Grenze: **Domain-Konzepte Deutsch, technische Primitive Englisch.**

### Tie-Breaker-Regel
Wenn unklar: Steht der Begriff im deutschen Vereins- oder Rechtsrecht (BGB, VereinsG, DSGVO, Abgabenordnung)?
→ **Deutsch.** Sonst → **Englisch.**

Beispiele für Grenzfälle:
| Begriff | Sprache | Begründung |
|---|---|---|
| `Datenschutzerklärung` | Deutsch | DSGVO §13 — Rechtskonzept |
| `token` | Englisch | kein Rechtsbegriff |
| `Beitragsordnung` | Deutsch | Vereinsrecht |
| `cache` | Englisch | technisches Primitiv |
| `Satzung` | Deutsch | BGB §25 |
| `webhook` | Englisch | technisches Primitiv |

### Dateien (immer mit Extension)
| Kategorie | Konvention | Kanonische Beispiele |
|---|---|---|
| Domain-Entities | camelCase, Deutsch | `mitgliedsantrag.ts`, `beitragszahlung.ts`, `satzungsaenderung.ts` |
| Tech-Utils/Handler | camelCase, Englisch | `apiHandler.ts`, `formatDate.ts`, `parseResponse.ts` |
| React-Components | PascalCase, Englisch | `MemberCard.tsx`, `DashboardLayout.tsx` |
| React-Hooks | camelCase, Englisch, `use`-Prefix | `useAuth.ts`, `useWebhook.ts` |
| Next.js API Routes | kebab-case, Ordner nach Domain | `app/api/mitglieder/route.ts` |
| Config-Dateien | kebab-case, Englisch | `turbo.json`, `pnpm-workspace.yaml` |

### TypeScript Types & Interfaces
| Kategorie | Konvention | Kanonische Beispiele |
|---|---|---|
| Domain-Types | PascalCase, Deutsch | `Vereinsmitglied`, `Mitgliedsantrag`, `Beitragsart` |
| Tech-Types | PascalCase, Englisch | `ApiResponse`, `WebhookPayload`, `AuthContext` |
| Enums | PascalCase, Singular, Deutsch wenn Domain | `Mitgliedsstatus`, `Abteilung` |
| Enum-Values | SCREAMING_SNAKE_CASE | `AKTIV`, `PASSIV`, `AUSGETRETEN` |

### Pocketbase Collections
`snake_case`, Plural, **Deutsch** (immer Domain-Konzepte):
`vereinsmitglieder`, `mitgliedsantraege`, `beitragsarten`, `veranstaltungen`, `abteilungen`

### Utilities / Helper Functions
camelCase, **Englisch**, Verb-Noun-Schema:
`formatCurrency()`, `parseWebhookEvent()`, `validateEmail()`, `buildApiUrl()`

---

## §9 Decision Authority

### Heinrich entscheidet immer:
- `git push` zu Remote (GitHub, VPS)
- Produktions-Deployments (`docker compose up` auf Hostinger)
- Kosten-generierende Aktionen (externe API-Calls, neue kostenpflichtige Services)
- Pocketbase Schema-Changes (Migration wird vorbereitet, aber nie autonom committed)
- `.env`-Werte (Claude sieht nur Variablen-Namen, niemals Werte)
- Externe Kommunikation (E-Mails, GitHub-Issues, PRs)
- Kauf neuer Domains oder Services

### Claude darf autonom (lokal):
- Dateien erstellen, editieren, löschen
- `git add` + `git commit` (lokal, noch nicht gepusht)
- `docker compose` Befehle auf lokaler Entwicklungsmaschine
- `pnpm install`, `pnpm build`, `pnpm lint`
- Lese-Operationen (`grep`, `find`, `cat`, Port-Checks)
- Draft-Dokumente und Architektur-Skizzen erstellen

---

## §10 Templates & Referenzen

- **Progress-Log-Schema:** `docs/progress.md` (append-only, neuester Entry oben)
- **Session-State-Schema:** `docs/session_state.md` (Current State überschreiben, Decision Log append-only)
- **Architektur-Referenz:** `docs/system_architecture.md`
- **Master-Kontext:** `/Users/heinrich/Desktop/MASTER-KONTEXT.md` (vollständiger System-Überblick)
- **Bestehende Verein-Plattform (Referenz):** `/Users/heinrich/Dashboard-Buisness/verein-plattform/` (nicht migrieren, nur als Referenz)
