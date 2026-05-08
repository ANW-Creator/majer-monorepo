# CLAUDE.md — Projekt-Kontext für Claude Code
<!-- Layer 1: Immer geladen. Kurz halten. Details in docs/ und SKILL.md -->

## Was ist dieses Projekt?
Monorepo für den gemeinnützigen Verein **MAJER Digitale Bildung & Medienkompetenzen e.V.**
Zwei Apps: `verein` (öffentliche Website + Member Portal) und `nova` (interne Tools).

## Stack
- **pnpm 10.33.3** + **Turborepo** (Monorepo)
- **Next.js 15** App Router + **TypeScript strict**
- **Pocketbase 0.22.x** (Backend, Auth, DB — niemals öffentlich exposen)
- **n8n** (Workflows, E-Mail via SMTP)
- **Traefik v3** (Reverse Proxy, Let's Encrypt via Cloudflare DNS)
- **Docker + docker-compose** (Deployment auf Hostinger VPS)

## Naming Convention (§8)
Erscheint der Begriff im deutschen Vereinsrecht (BGB, VereinsG, DSGVO)? → **Deutsch**
Sonst → **Englisch**
Beispiele: `mitgliedsantrag.ts`, `lernpfad.ts` | `apiHandler.ts`, `useAuth.ts`

## Ports (kanonisch)
| Service | Port |
|---|---|
| apps/verein (Next.js) | 3001 |
| apps/nova (Next.js) | 3002 |
| Uptime Kuma | 3201 |
| n8n | 5678 |
| PB Admin | 8090 (intern, 127.0.0.1 only) |
| Portainer | 9000 |
| Traefik Dashboard | 8081 |

## Absolute Verbote
- `localStorage` für Auth-Tokens
- PB-Admin extern exposen (kein Traefik-Label)
- `.env`-Werte hardcoden
- `any` oder `@ts-ignore` in TypeScript

## Persona-System (apps/verein)
4 Zielgruppen: Schüler, Student, Lehrer, Förderer
Akzentfarben: blue-500, violet-500, teal-500, amber-500
Switch: Modal beim ersten Besuch, Cookie-Persistenz

## Status (2026-05-08 — Phase 0 fast komplett)
- Monorepo-Scaffold: ✅
- Foundational Docs (SKILL.md, session_state, progress, system_architecture): ✅
- Infra-Files (docker-compose, traefik.yml): ✅
- Brand Identity: ✅ (docs/brand-identity.md)
- 1000-Fragen-Konzept: ✅ (docs/1000-fragen.md, 30 Seed-Fragen)
- n8n Workflow-Katalog: ✅ (docs/n8n-workflow-library.md)
- Nate Herk Video-Bibliothek: ✅ (24/24 Wissensdokumente, docs/tools/)
- Video-Transkriptions-Pipeline: ✅ (tools/extract_video_captions.py)
- Self-Checking Hooks: ✅ (.claude/settings.json)
- apps/verein MVP (7 Seiten, Persona-System, Brand): ✅ — noch nicht visuell getestet
- VPS SSH-Inspektion + Deployment: 🔲 — nächste konkrete Aufgabe
- Mitgliedsantrag-Formular (Pocketbase): 🔲
- Logo + Stempel (Canva MCP): 🔲
- Self-Audit Skill + Wöchentlicher Health-Check Cron: 🔲

## Wo mehr steht
- `context/current-priorities.md` — geordnete P0/P1/P2/P3 Aufgabenliste
- `docs/masterplan-200.md` — vollständiger Masterplan (200 Schritte, 12 Phasen)
- `docs/session_state.md` — aktueller Stand + Decision Log
- `docs/website-plan.md` — Website-Anforderungen
- `docs/system_architecture.md` — Infra-Diagramm
- `docs/brand-identity.md` — Farben, Typo, Logo, Email, Stempel
- `docs/nate-herk-video-library.md` — 24 Video-Wissensdokumente
- `~/.claude/skills/majer-tech-architect/SKILL.md` — operative Regeln §1–§10
