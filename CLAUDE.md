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

## Status (2026-05-08)
- Monorepo-Scaffold: ✅
- Foundational Docs (SKILL.md, session_state, progress): ✅
- Infra-Files (docker-compose, traefik.yml): ✅
- Website-Plan: ✅ (docs/website-plan.md)
- AGENTS.md für Codex: ✅
- Brand Identity: ✅ (docs/brand-identity.md)
- Video-Creation-Infra: ✅ (docs/tools/video-creation/, 6 Files)
- 1000-Fragen-Konzept: ✅ (docs/1000-fragen.md, 30 Seed-Fragen)
- apps/verein MVP (7 Seiten, Persona-System, Brand): ✅
- Creator-Workflow-System: 🔲 (vc-03 wartet auf konkretes System)
- Mitgliedsantrag-Formular (Pocketbase): 🔲
- GitHub Push: 🔲
- VPS Deployment: 🔲

## Wo mehr steht
- `docs/website-plan.md` — vollständige Website-Anforderungen
- `docs/system_architecture.md` — Infra-Diagramm
- `docs/session_state.md` — aktueller Stand
- `docs/brand-identity.md` — Farben, Typo, Logo, Email, Stempel
- `docs/1000-fragen.md` — 1000-Fragen-System + 30 Seed-Fragen
- `docs/tools/video-creation/` — 6 Video-Creation-Knowledge-Files
- `~/.claude/skills/majer-tech-architect/SKILL.md` — operative Regeln §1–§10
