# Current Priorities

**Stand: 2026-05-08 — nach Abschluss Nate Herk Video-Bibliothek**

---

## Wo wir stehen

### Abgeschlossen (Phase 0 komplett)
- Claude Code OS: Memory, Skills (wat-automation, triggerdev-builder, frontend-design), MCP-Config
- Self-Checking Hooks in `.claude/settings.json`
- Nate Herk Video-Bibliothek: alle 24 Videos transkribiert und als Wissensdokumente abgelegt
- Video-Transkriptions-Pipeline: `tools/extract_video_captions.py` + `workflows/video-transcription.md`
- n8n Workflow-Katalog: `docs/n8n-workflow-library.md`
- apps/verein MVP: 7 Seiten, Persona-System, Brand-Token-System — TypeScript clean
- Infra-Files: docker-compose, traefik.yml, AGENTS.md
- Foundational Docs: masterplan-200, brand-identity, website-plan, system_architecture, 1000-fragen (30 Seeds)

### Nicht abgeschlossen in Phase 0 (Steps 10–15)
- Step 10: FIDT Business-Wissen → `references/nova-business-foundation.md`
- Step 11: Akademische Grundlagen → `references/philosophische-grundlagen.md` + `references/wirkungsmessung.md`
- Step 12: E-Mail-Templates → `references/outreach-templates.md`
- Step 13: Akademische Partner-Liste → `references/akademische-partner.md`
- Step 14: Self-Audit Skill
- Step 15: Wöchentlicher Health-Check via Cron

---

## Prioritäten (geordnet nach Fundament-Logik)

### P0 — Vor allem anderen: Website visuell testen
**apps/verein wurde nie im Browser gesehen.** TypeScript ist clean, aber wir wissen nicht ob sie gut aussieht.
- `cd apps/verein && pnpm dev`
- Browser: localhost:3001 — Persona-Modal, Nav, alle 7 Seiten prüfen
- Frontend Design Skill + UI UX Pro Max Skill anwenden (aus video-23)
- Wenn Qualität nicht gut genug: `/ultra plan` für Website-Redesign-Sprint

### P1 — VPS Deployment vorbereiten (diese Woche)
1. SSH-Inspektion VPS: `docker ps`, `ss -tlnp` — laufende Services kartieren
2. Port-Konflikte lösen (Uptime Kuma 3001 → 3201 lt. Kanonik)
3. docker-compose Stack deployen: Traefik + Pocketbase + n8n
4. Cloudflare DNS: nova-tive.com auf VPS-IP zeigen
5. SSL-Zertifikat via Traefik + Let's Encrypt prüfen

### P2 — Pocketbase + Mitgliedsantrag (nach VPS live)
6. Pocketbase-Schema: Collection `mitgliedsantrag` (Name, Email, Typ, Datum, Status)
7. Mitgliedsantrag-Formular in apps/verein/mitmachen/ — POST → Pocketbase
8. Pocketbase MCP bauen (wenn Website live ist)
9. Admin-Workflow: Eingangs-Email via n8n, Status-Update

### P3 — Phase 0 Abschluss (parallel zu P2, low-effort)
- Step 10: FIDT Business → nova-business-foundation.md (🤖, ~30 min)
- Step 11: Philosophische Grundlagen → philosophische-grundlagen.md (🤖, ~45 min)
- Step 12–13: Outreach-Templates + Partner-Liste (🤖, ~30 min)
- Step 14: Self-Audit Skill (🤖, ~20 min)
- Step 15: Wöchentlicher Health-Check Cron (🤖, heute möglich)

### P4 — Phase 1 Beginn (nach VPS + Pocketbase)
- Logo + Stempel via Canva MCP (Step 23)
- Social Media Accounts anlegen (Step 25) — Heinrich macht das selbst
- E-Mail vorstand@ einrichten (Step 26)

---

## Was NICHT jetzt dran kommt

- Creator-Workflow-System / Content-Pipeline → erst wenn VPS live
- n8n Workflows deployen → erst wenn n8n auf VPS läuft
- key.ai + Airtable MCP Content Engine → nach Social Media Start
- Agent Teams → komplexere Workflows brauchen zuerst stabiles Deployment

---

## MCP Server — aktueller Stand

| Server | Status | Wann aktivieren |
|---|---|---|
| trigger.dev | ✅ konfiguriert | wenn Workflows deployt werden |
| Notion | ✅ vorhanden (lt. Heinrich) | sofort nutzbar |
| Canva | verfügbar in Claude | für Logo/Stempel (Step 23) |
| Pocketbase | muss gebaut werden | nach VPS live |
| Airtable | verfügbar | nach Social Media Start |

---

## Entscheidungslog

- **2026-05-08:** masterplan-100.md gelöscht — vollständig von masterplan-200.md abgelöst.
- **2026-05-08:** Phase 0 Steps 1–9 abgeschlossen. Steps 10–15 bleiben offen (low-effort, parallel möglich).
- **2026-05-08:** Fundament-Prinzip präzisiert: apps/verein visuell testen KOMMT VOR VPS-Deployment. Website, die niemand gesehen hat, wird nicht deployt.
- **2026-05-08:** Bestandsaufnahme ergab, dass video-01 bis video-07 keine echten Transkripte waren. yt-dlp-Pipeline wurde durch youtube-transcript-api ersetzt, alle 24 Videos neu dokumentiert.
- **2026-05-08:** Masterplan von 100 auf 200 Schritte ausgebaut. 12 Phasen, n8n-Library und Nova Business integriert.
- **2026-05-08:** Nate Herk Frameworks (WAT, Web Design, Trigger.dev) als Skills eingebunden.
