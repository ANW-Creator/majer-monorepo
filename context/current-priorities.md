# Current Priorities

**Stand: 2026-05-08 — nach vollständiger Bestandsaufnahme**

## Audit-Ergebnis: Was haben wir tatsächlich?

### Fertig und nutzbar
- Monorepo-Scaffold (pnpm + Turborepo), alle Ports definiert
- apps/verein MVP — 7 Seiten, Persona-System, Brand implementiert
- Brand Identity (docs/brand-identity.md) — Farben, Typo, Logo, Stempel
- Claude Code OS — Skills (wat-automation, triggerdev-builder, frontend-design), MCP-Config (trigger.dev), Memory-System
- Masterplan-200 (docs/masterplan-200.md) — 12 Phasen, 200 Schritte, alles integriert
- Infra-Files: docker-compose, traefik.yml, AGENTS.md
- 1000-Fragen-System (docs/1000-fragen.md, 30 Seed-Fragen)
- docs/brand-identity.md, docs/website-plan.md, docs/system_architecture.md
- Nova Business Foundation (FIDT - Buisness/Nova_10_Day_Setup_Guide.md) — vorhanden, noch nicht als Skill/Referenz integriert
- n8n Workflow-Bibliothek (json/) — 30+ Templates vorhanden, noch nicht katalogisiert

### Totes Kapital — muss repariert werden
- docs/tools/video-01 bis video-07 — **keine echten Transkripte**, nur Claude-Zusammenfassungen aus dem Modellgedächtnis. Muss mit yt-dlp neu gebaut werden.
- json/ Ordner — 30+ n8n-Workflows liegen herum, aber kein Katalog, kein Deployment, keine Integration
- FIDT - Buisness/ — wertvolle Inhalte, aber noch nicht in das System eingebunden
- "Was ich lerne" Notiz — verweist auf Nate Herk-Kurs und Google Sheets, nicht ausgewertet
- Gesamter Chatverlauf — 586KB Wissen (Philosophie, Akademiker-Kontakte, Meeting-Prep), nicht strukturiert abgelegt
- Video-Transkriptions-Pipeline — fehlt komplett (kein Tool, kein Workflow)

### Bekannte Lücken (noch nicht gebaut)
- Mitgliedsantrag-Formular (Pocketbase)
- Creator-Workflow-System (vc-03)
- GitHub Push + VPS Deployment
- Self-Checking Hooks in settings.json
- n8n Workflow-Katalog (docs/n8n-workflow-library.md)
- Akademische Referenzdokumente aus dem Chatverlauf
- Self-Audit Skill

## Prioritäten (geordnet nach Fundament-Logik)

**Fundament muss vor der Website stehen.** Das ist Heinrichs explizite Anforderung.

### P1 — Sofort (diese Woche)
1. Video-Transkriptions-Pipeline bauen — `tools/extract_video_captions.py` + `workflows/video-transcription.md`
2. Video-01 bis video-07 als echte Wissensdokumente neu erstellen (mit echten Transkripten)
3. n8n Workflow-Katalog anlegen — `docs/n8n-workflow-library.md`
4. Self-Checking Hooks in `.claude/settings.json` — PostToolUse (progress.md reminder) + Stop (session summary)
5. Nova Business als Referenzdokument einbinden — `references/nova-business-foundation.md`

### P2 — Diese Woche
6. Akademische Grundlagen aus dem Chatverlauf strukturieren — `references/philosophische-grundlagen.md`, `references/wirkungsmessung.md`
7. Self-Audit Skill — `~/.claude/skills/self-audit/SKILL.md`
8. Akademiker-Kontakte und Meeting-Prep aus dem Chatverlauf extrahieren

### P3 — Nächste Woche (Website-Ausbau beginnt erst hier)
9. Mitgliedsantrag-Formular (Pocketbase) implementieren
10. Creator-Workflow-System (vc-03) aufbauen
11. GitHub Push + VPS Deployment vorbereiten
12. Erste n8n-Workflows deployen (Faceless Shorts System als erstes)

### P4 — Parallel (eigenständig)
- Trading

## Entscheidungslog

- **2026-05-08:** Bestandsaufnahme ergab, dass video-01 bis video-07 keine echten Transkripte sind. Yt-dlp-Pipeline muss gebaut werden.
- **2026-05-08:** Masterplan von 100 auf 200 Schritte ausgebaut. 12 Phasen, n8n-Library und Nova Business integriert.
- **2026-05-08:** Nate Herk Frameworks (WAT, Web Design, Trigger.dev) als Skills eingebunden, nicht als weitere CLAUDE.md-Dateien.
- **2026-05-08:** Fundament-Prinzip: Website-Ausbau beginnt erst nach P1 und P2.

## Diese Datei aktualisieren
Bei echten Verschiebungen, nicht quartalsweise. Datum immer mit angeben.
