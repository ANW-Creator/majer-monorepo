# MAJER Session State

> **Format:** Hybrid.
> **Top — "Current State":** snapshot of right-now reality. Overwritten every session.
> **Bottom — "Decision Log":** append-only. Never edit past entries. Correct via a new entry that references the old one.
> Update this file at the end of every task, after `docs/progress.md`.

---

## Current State

**Last updated:** 2026-05-08 by Claude (Session: Website MVP)
**Active branch:** `main`
**Active app:** `apps/verein` @ `/Users/heinrich/dev/majer-monorepo/apps/verein`
**Active milestone:** Website-MVP live (Visitenkarte) → nächste: Mitgliedsantrag-Formular + Pocketbase-Anbindung

### Active Work
`apps/verein` Website MVP vollständig gebaut und auf Produktionsbuild geprüft (TypeScript clean, 9 statische Seiten). Seiten: `/`, `/ueber-uns`, `/mitmachen`, `/lernpfade` (Stub), `/impressum`, `/datenschutz`. Nächste Schritte: (1) visuell im Browser testen (Persona-Modal, Nav, Brand-Farben), (2) Mitgliedsantrag-Formular mit Pocketbase-Collection bauen, (3) vc-03-creator-workflow-system.md mit Gottlebe + Moritz Herzog System aktualisieren (nach Heinrich-Input).

### Open Issues
<!-- Bullet list of known issues. Resolved issues that generated a decision migrate to the Decision Log below. -->
- `system_architecture.md` fehlt noch — wird vor erstem VPS-Deployment geschrieben
- AVV-Status mit Hostinger noch zu prüfen / dokumentieren
- Cloudflare DNS für nova-tive.com noch nicht auf VPS-IP gesetzt
- Domain `digitale-bildung.de` noch nicht registriert (Kauf geplant)
- VPS Proxy-Status unbekannt — SSH-Inspektion (`docker ps`, `ss -tlnp`) vor Traefik-Deployment

### Stack Snapshot
<!-- Pin current versions of critical dependencies. Update on every upgrade. -->
| Component | Version | Notes |
|---|---|---|
| Pocketbase | 0.22.x | latest stable bei Init |
| Next.js | 16.x | App Router |
| React | 19.x | — |
| TypeScript | ^5.7.0 | strict mode |
| Tailwind CSS | v4 | — |
| n8n | aktuell stabil | self-hosted via Docker |
| Traefik | v3 | Reverse-Proxy |
| Node | ≥22.0.0 | engines-Pin in root `package.json` |
| pnpm | 10.33.3 | workspace-Modus |
| turborepo | ^2.9.0 | build cache |
| Docker | aktuell stabil | Hostinger VPS |

### Environment Inventory
<!-- Which .env vars are set in which environment. Names only — never values. -->
| Variable | local | staging | production | Notes |
|---|---|---|---|---|
| `POCKETBASE_URL` | ⬜ | ⬜ | ⬜ | Verein backend |
| `POCKETBASE_ADMIN_EMAIL` | ⬜ | ⬜ | ⬜ | Init only |
| `N8N_WEBHOOK_SECRET` | ⬜ | ⬜ | ⬜ | Shared secret n8n ↔ apps |
| `N8N_BASIC_AUTH_USER` | ⬜ | ⬜ | ⬜ | n8n admin |
| `CLOUDFLARE_API_TOKEN` | ⬜ | ⬜ | ⬜ | Scoped: DNS edit only |
| `TRAEFIK_DASHBOARD_AUTH` | ⬜ | ⬜ | ⬜ | htpasswd hash |
| `DOMAIN` | ⬜ | ⬜ | ⬜ | digitale-bildung.de (Platzhalter bis Kauf) |

### Open Risks
<!-- DSGVO, security, or operational risks currently accepted but tracked. -->
- **AVV Hostinger:** noch nicht verifiziert. Bis dahin: keine personenbezogenen Daten produktiv speichern.
- **Backup-Strategie:** noch nicht definiert (Pocketbase-DB, n8n-Workflows, Uploads).
- **Recovery-Zeit:** ohne Backup-Konzept derzeit nicht garantierbar.
- **VPS Existing Services:** n8n, Portainer, postgres, Uptime Kuma (Port 3001 ← Konflikt!), openclaw laufen bereits — Proxy-Status und Port-Belegung vor Traefik-Deployment prüfen.

---

## Decision Log

<!--
APPEND-ONLY. Newest entries on top, directly below this comment.
Schema:

### YYYY-MM-DD — Decision Title
**Context:** Why was a decision needed?
**Options considered:**
1. Option A — pro / con
2. Option B — pro / con
**Decision:** What was chosen.
**Rationale:** Why this option won.
**Consequences:** What this commits us to. What it forecloses.
**Reversibility:** trivial | moderate | hard
**DSGVO impact:** none | yes (describe)
-->

### 2026-05-07 — Brand-Richtung: Papier/Intellektuell (#1a3d4d)
**Context:** Repo enthielt zwei konkurrierende visuelle Identitäten: index.html (Gold #c9a84c auf Dunkel) und die 4 Briefing-Dokumente (Blau-Grün #1a3d4d auf warmem Papier). Entscheidung war notwendig.
**Options considered:**
1. Gold/Dunkel (index.html) — hochwertiger, creator-ready, aber nicht stiftungsreif
2. **Papier/Intellektuell (Briefing-Stil)** — gewählt: stiftungsreif, bildungsnah, seriös
3. Neues System von Null — unnötig, da Briefing-Stil bereits erprobt und gut
**Decision:** Blau-Grün #1a3d4d, Crimson Pro Serif, warmes Papier-Weiß #fdfcf8 als Basis-Brand.
**Rationale:** 4 HTML-Artefakte zeigen bereits konsistente Anwendung. Stiftungen und Bildungspartner haben eher klassisch-ruhige Erwartungen. index.html-Gold kann als Nova-Ästhetik (kommerzieller Arm) weiterverwendet werden.
**Consequences:** Brand-Identity-Dokument geschrieben. Logo, Stempel, Email-Adressen müssen noch umgesetzt werden. Nova kann eine eigene separate Brand-Richtung haben.
**Reversibility:** moderat (alle Artefakte müssten angepasst werden)
**DSGVO impact:** none

### 2026-05-07 — Video-Strategie: Alle Plattformen gleichzeitig via Repurposing
**Context:** MAJER braucht Reichweite bevor die Website live geht — Ideen müssen validiert werden. Frage: Eine Plattform tief oder mehrere parallel.
**Options considered:**
1. TikTok first — höchste Reichweite, aber Plattform-Risiko
2. YouTube first — langsamer, aber evergreen
3. **Alle gleichzeitig via Repurposing** — gewählt
**Decision:** Ein Longform-Video → Opus Clip → TikTok + YouTube Shorts + Instagram Reels gleichzeitig. LinkedIn separat mit Textpost.
**Rationale:** Repurposing-Tools (Opus Clip, Buffer) existieren und kosten ~40€/Monat. Kein Extra-Aufwand pro Plattform. Kein Plattform-Lock-in.
**Consequences:** ~40€/Monat Tool-Budget für Video-Produktion. Creator-Workflow-System muss noch konkretisiert werden.
**Reversibility:** trivial
**DSGVO impact:** none

### 2026-05-07 — 1000-Fragen-System: One source of truth
**Context:** Video-Content-Strategie brauchte inhaltliches Fundament — welche Fragen werden beantwortet?
**Options considered:**
1. Ad-hoc Themen je nach Trends
2. Feste Themen-Säulen (3–5 Kategorien)
3. **1000-Fragen-Bank als one source of truth** — gewählt
**Decision:** 1000 nummerierte Fragen, 3 Bereiche × ~333. Jede Frage speist Videos, Portal-Curriculum, Website-FAQ und kommerzielle Produkte gleichzeitig.
**Rationale:** Einmalige Investition in Struktur verhindert Content-Chaos. 1000 beantwortete Fragen = unmittelbares SEO-Fundament + einzigartiges Wissens-Archiv in DE.
**Consequences:** Pocketbase-Schema muss Kollektion `tausend_fragen` bekommen. 30 Seed-Fragen definiert — braucht ~3 Jahre bis 1000 vollständig.
**Reversibility:** moderat (Umstrukturierung möglich, aber Aufwand)
**DSGVO impact:** none (Fragen sind öffentlich, keine personenbezogenen Daten)

### 2026-05-07 — Domain-Strategie: nova-tive.com heute, digitale-bildung.de als Ziel
**Context:** Heinrich hat Cloudflare-Domain nova-tive.com. Ziel-Domain digitale-bildung.de ist noch nicht registriert. Heute-Deployment benötigt eine funktionierende Domain für SSL.
**Options considered:**
1. Nur lokal testen, kein DNS heute — DNS in späterer Session
2. **nova-tive.com verwenden heute; digitale-bildung.de separat kaufen** — gewählt
3. digitale-bildung.de sofort kaufen und in gleicher Session konfigurieren
**Decision:** nova-tive.com für initiales Deployment. digitale-bildung.de separater Kauf.
**Rationale:** nova-tive.com bereits bei Cloudflare registriert und DNS-konfigurierbar. Kein Warten auf neue Domain-Registrierung. Configs verwenden digitale-bildung.de als Platzhalter (einfache Ersetzung später).
**Consequences:** Traefik-Labels und erste SSL-Zertifikate laufen unter nova-tive.com. Bei Domain-Wechsel: DNS-Umschwenk + Traefik-Label-Update (trivial).
**Reversibility:** trivial
**DSGVO impact:** none

### 2026-05-07 — Port-Kanonik: Uptime Kuma → 3201
**Context:** SKILL.md-Drafts hatten Verein Next.js auf 3001. Uptime Kuma läuft auf VPS bereits auf 3001. Konflikt.
**Options considered:**
1. Uptime Kuma bleibt 3001, Verein Next.js auf 3010
2. **Verein Next.js 3001, Uptime Kuma auf 3201** — gewählt
3. Ports via Traefik irrelevant (nur intern)
**Decision:** Verein Next.js: 3001, Nova Next.js: 3002, Uptime Kuma: 3201.
**Rationale:** Apps bekommen die "sauberen" Ports. Uptime Kuma ist Monitoring-Tool (kein End-User-Traffic), Port-Migration ist trivial.
**Consequences:** Uptime Kuma muss auf VPS neu konfiguriert werden (Port-Mapping ändern).
**Reversibility:** trivial
**DSGVO impact:** none

### 2026-05-06 — Hosting: Hostinger VPS mit Docker
**Context:** Hosting-Provider muss vor jeder Infrastruktur-Entscheidung fixiert sein. Frühe Notizen referenzierten Hetzner; Heinrich hat auf Hostinger korrigiert.
**Options considered:**
1. Hetzner Cloud — etablierter DE-Provider, gute API
2. **Hostinger VPS mit Docker + Portainer** — gewählt
3. Eigener On-Premise-Server — out of scope für i.G.-Phase
**Decision:** Hostinger VPS mit Docker + Portainer.
**Rationale:** Heinrichs Bestandsentscheidung. Stack-Anforderungen (Docker, Traefik, Pocketbase, n8n) laufen problemlos. Region DE/EU für DSGVO.
**Consequences:** Alle Infra-Konfiguration (Traefik-Labels, Volumes, Networking) ist auf Hostinger-Topologie ausgelegt. Migration zu anderem VPS-Provider ist moderate Effort.
**Reversibility:** moderate (Docker-Compose ist portabel; DNS via Cloudflare ist provider-agnostisch)
**DSGVO impact:** **yes** — AVV mit Hostinger muss eingeholt und im Verarbeitungsverzeichnis referenziert werden, bevor produktiv personenbezogene Daten gespeichert werden. DE/EU-Region in Hostinger-Settings bestätigen.

### 2026-05-06 — Repo-Topologie: pnpm + turborepo Monorepo
**Context:** Vereinsplattform und Nova OS teilen sich Agenten-Logik (`packages/shared`) und Pocketbase-Schema (`packages/db`). Frage: getrennte Repos oder Monorepo.
**Options considered:**
1. Zwei getrennte Repos (`majer-vereinsplattform`, `majer-nova-os`) — saubere Trennung, aber doppelte Tooling-Konfiguration und schwierige Code-Wiederverwendung für Agenten
2. **Monorepo mit pnpm + turborepo** — gewählt: `apps/verein/`, `apps/nova/`, `packages/shared/`, `packages/db/`, `packages/ui/`, `packages/config/`
3. Monorepo mit Nova als git-submodule — Flexibilität für späteres Open-Sourcing von Nova, aber höhere operative Komplexität
**Decision:** Monorepo mit pnpm + turborepo.
**Rationale:** Geteilte Agenten-Logik und Pocketbase-Typen sind die operative Kernanforderung. Ein einziger Dependency-Graph, eine CI-Pipeline, content-addressable storage von pnpm minimiert Disk und Install-Zeit. turborepo gibt Cache-Vorteile bei Build/Lint/Test.
**Consequences:** Alle künftigen MAJER-Apps leben in diesem Repo, sofern nicht explizit ein Split begründet ist. Kreuz-App-Imports gehen ausschließlich über `packages/`.
**Reversibility:** moderate (Split via `git filter-repo` + Dependency-Rewrite ist machbar, aber nicht trivial)
**DSGVO impact:** none

### 2026-05-06 — Skill-Scope: Breit (alle MAJER-Tech-Aufgaben)
**Context:** Skill `majer-tech-architect` musste auf Trigger-Scope festgelegt werden.
**Options considered:**
1. Eng — nur Vereinsplattform/Nova-OS-Code
2. **Breit — alle MAJER-Tech-Aufgaben** (Code, n8n, Docker/Portainer, Cloudflare, Agenten-Integration)
3. Sehr breit — inkl. Content (Leitfäden), Stiftungsanträge, Outreach
**Decision:** Breit (Option 2).
**Rationale:** MAJER-Infra ist eng verzahnt. n8n-Workflows triggern Vereins-Logik, Cloudflare-Regeln betreffen beide Apps. Eine Skill-Aktivierung pro Tech-Domäne wäre redundant.
**Consequences:** Skill-Description ist bewusst pushy formuliert, um Untertriggering zu verhindern. Content-Arbeit (Leitfäden, Outreach) bleibt außerhalb dieses Skills — eigenständig zu halten.
**Reversibility:** trivial (Skill-Description anpassen)
**DSGVO impact:** none
