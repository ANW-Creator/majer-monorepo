# MAJER Masterplan — 200 Schritte
**Erstellt:** 2026-05-08 (Erweiterung von masterplan-100.md)
**Logik:** Linear. Jeder Schritt baut auf dem vorherigen auf.
**Ziel:** Vollständiges, autonomes System — Verein + Content-Maschine + Nova Business.
**Legende:** 🤖 = Claude allein | 👤 = Heinrich allein | 🤝 = zusammen | ⏱ = Zeitschätzung

---

## PHASE 0 — CLAUDE CODE OS & WERKZEUG-FUNDAMENT (1–15)
*Das Gehirn, bevor das Haus gebaut wird. Ohne dieses Fundament wiederholt sich jede Session von Null.*
*Dauer: ~4–6 Std. | 🤖 90%*

### 1. Persistent Memory System aktivieren
**Was:** `~/.claude/projects/-Users-heinrich-dev/memory/` ist befüllt. Memory-Index (MEMORY.md) enthält Profil, Kommunikationsregeln, Projektkontext.
**Status:** ✅ Erledigt (2026-05-08)
**Output:** 3 Memory-Dateien, MEMORY.md Index

### 2. Skills-System aufbauen (Tier 1)
**Was:** Die 4 Kern-Skills existieren: `majer-tech-architect`, `frontend-design`, `triggerdev-builder`, `wat-automation`.
**Status:** ✅ Erledigt (2026-05-08)
**Output:** 4 SKILL.md-Dateien in `~/.claude/skills/`

### 3. Context-Files befüllen
**Was:** `context/me.md`, `context/work.md`, `context/team.md`, `context/current-priorities.md`, `context/goals.md` — alle mit Onboarding-Antworten gefüllt.
**Status:** ✅ Erledigt (2026-05-08)

### 4. Kommunikationsregeln dokumentieren
**Was:** `.claude/rules/communication-style.md` + `system-building.md` — klare Verhaltensregeln.
**Status:** ✅ Erledigt (2026-05-08)

### 5. MCP-Server konfigurieren (Tier 1)
**Was:** trigger.dev MCP in `~/.claude/claude_mcp_config.json` + `majer-monorepo/.mcp.json`.
**Status:** ✅ Erledigt (2026-05-08)
**Nächste MCP-Server:** Notion MCP (bereits vorhanden lt. Heinrich), n8n MCP (wenn verfügbar), Pocketbase MCP (bauen wenn Website live)

### 6. Self-Checking Hooks einrichten
**Was:** Automatische Hooks in `.claude/settings.json` die nach jeder Schreib-Operation erinnern: progress.md updaten, session_state.md prüfen, keine toten Enden lassen.
**Status:** ✅ Erledigt (2026-05-08)
**Output:** settings.json mit PostToolUse + Stop-Hooks

### 7. Video-Transkriptions-Workflow aufbauen (WAT)
**Was:** Die 7 `docs/tools/video-*.md` Dateien sind KEINE Transkripte. Sie sind Claude-Zusammenfassungen. Echter Workflow: `yt-dlp` → Captions extrahieren → Claude verarbeitet → strukturiertes Wissens-Dokument. Workflow in `workflows/video-transcription.md` dokumentieren.
**Wer:** 🤝 — Heinrich lädt yt-dlp, 🤖 erstellt Workflow + Skript
**Output:** `tools/extract_video_captions.py` + `workflows/video-transcription.md`
**Priorität:** Hoch — betrifft alle Nate Herk Videos und künftige Lernvideos

### 8. Nate Herk Video Database verarbeiten
**Was:** `json/Nate Herk - Video Database.xlsx` enthält alle relevanten Videos. Dieses Spreadsheet kategorisieren, die wichtigsten Videos in echte Transkripte überführen.
**Wer:** 🤖 — liest Spreadsheet, erstellt priorisierte Liste
**Priorität:** 5 prioritäre Videos (inkl. 10h-Kurs aus "Was ich lerne")
**Output:** Überarbeitete `docs/tools/video-*.md` Dateien mit echtem Inhalt statt Zusammenfassungen

### 9. n8n Workflow-Bibliothek kategorisieren
**Was:** `json/` Ordner enthält 30+ n8n-Workflow-Templates unorganisiert. Kategorisieren: Content-Creation, Lead-Gen, AI-Agents, Data-Processing. Relevante für MAJER markieren.
**Wer:** 🤖
**Output:** `docs/n8n-workflow-library.md` — Katalog mit Kurzbeschreibung, Relevanz-Rating, Anpassungsaufwand

### 10. FIDT-Business-Wissen integrieren
**Was:** `FIDT - Buisness/` enthält Nova-10-Day-Setup, SWOT-Analyse, Competitive Analysis, Nova Response JSON. Relevantes für Verein + Nova in strukturierte Docs überführen.
**Wer:** 🤖
**Output:** Extraktion in `references/nova-business-foundation.md`

### 11. Akademisches Fundament dokumentieren
**Was:** Aus Chatverlauf: Humboldt, Kant, Adorno, Arendt, OECD Compass 2030, Messinstrumente (Schwarzer/Jerusalem Selbstwirksamkeit, WHO-5, DigComp 2.2, CASEL). Alles liegt im Chat aber nirgendwo im Repo.
**Wer:** 🤖
**Output:** `references/philosophische-grundlagen.md` + `references/wirkungsmessung.md`

### 12. E-Mail-Templates ins Repo
**Was:** Aus Chatverlauf: E-Mail-Templates an Tristan Harris, Shoshana Zuboff, Jonathan Haidt + Uni-Kontakt-Template. Diese Dokumente gehören ins Repo.
**Wer:** 🤖
**Output:** `references/outreach-templates.md`

### 13. Akademische Partner-Liste erstellen
**Was:** Aus Chatverlauf: HU Berlin, FU Berlin, TU Berlin, Max-Planck-BMPG, DIPF, Uni Potsdam + konkrete Ansprechpartner. Als Dokument mit Status-Tracking.
**Wer:** 🤖
**Output:** `references/akademische-partner.md`

### 14. Selbst-Audit-Skill erstellen
**Was:** Skill `~/.claude/skills/self-audit/SKILL.md` — Wenn aktiviert: prüft alle docs/ und context/ auf Konsistenz, findet totes Kapital, schlägt konkrete nächste Schritte vor.
**Wer:** 🤖
**Output:** `self-audit` Skill

### 15. Wöchentlicher Health-Check via Cron
**Was:** Scheduled Agent der jeden Montag 08:00 ausführt: aktuellen Stand prüfen, veraltete Prioritäten flaggen, nächste Schritte vorschlagen.
**Wer:** 🤖 (via `/schedule` Skill)
**Output:** Recurring reminder + Status-Check

---

## PHASE 1 — POSITIONIERUNG & IDENTITÄT (16–28)
*Wer MAJER ist, wofür MAJER steht, warum niemand anderes das macht.*
*Dauer: ~6–8 Std. | Verantwortung: 50% Heinrich, 50% Claude*

### 16. USP definieren + Konkurrenzanalyse
**Was:** Wer sind die 5–8 direkten Konkurrenten in DE? Was machen sie? Wo ist die Lücke?
**Kandidaten:** Medienanstalt Berlin-Brandenburg, Klicksafe, Teachtoday (Telekom), Initiative D21, lokale Coding-Clubs, Digitale-Gesellschaft e.V., JFF Institut für Medienpädagogik
**Output:** 1-Seiter: USP-Aussage + Konkurrenz-Matrix
**Wer:** 🤖 Recherche + Dokument, 👤 Input und finales Okay

### 17. 1000-Fragen von 30 auf 60 erweitern (Bereich 1 + 2)
**Was:** Weitere 30 Fragen in die Bank — Bereich 2 (viral-fähig) und Bereich 1 (Kern-Kompetenz).
**Warum:** 60 Fragen = 60 Video-Ideen = 3 Monate Content-Pipeline.
**Output:** `docs/1000-fragen.md` aktualisiert, #031–060
**Wer:** 🤖 allein, 👤 reviewt danach

### 18. Workshop-Format-Konzept v1.0 definieren
**Was:** Was passiert in einem 90-min MAJER-Workshop? Ablauf, Materialien, Lernziele, Messgrößen.
**Output:** `docs/workshop-konzept.md` — Ablaufplan, Teilnehmer-Profil, Materialien-Liste
**Wer:** 🤝 — Heinrich liefert Didaktik-Input, 🤖 strukturiert und schreibt

### 19. Workshop-Curriculum: Level 0 (Selbsterkenntnis) ausarbeiten
**Was:** Das Fundament des Vereins: Transaktionsanalyse, stoische Prinzipien, Kants Mündigkeit. Was lernt ein Teilnehmer im allerersten Workshop konkret?
**Basis:** Aus Chatverlauf — die philosophischen Grundlagen sind bereits ausgearbeitet.
**Output:** `docs/curriculum-level-0.md` — Session-Plan, Lernziele, Exercises
**Wer:** 🤖 auf Basis der philosophischen Dokumente

### 20. Workshop-Curriculum: Level 1 (Klares Sehen) ausarbeiten
**Was:** Zweite Stufe: Wie funktionieren Algorithmen, was ist die Aufmerksamkeitsökonomie, Surveillance Capitalism (Zuboff). 3 Stunden Material.
**Output:** `docs/curriculum-level-1.md`
**Wer:** 🤖 (braucht Quellenangaben aus `references/philosophische-grundlagen.md`)

### 21. Workshop-Curriculum: Level 2 (Digitale Werkzeuge) ausarbeiten
**Was:** Dritte Stufe: KI-Tools, n8n, Datenkompetenz, Sicherheitsverhalten.
**Output:** `docs/curriculum-level-2.md`
**Wer:** 🤖

### 22. Zielpartner-Liste: erste 20 Kontakte
**Was:** Raumliste (Jugendclubs Neukölln/Wedding/Marzahn), Stiftungsliste (bpb, DSEE, Vodafone), Universitätsliste (HU, Max-Planck, FU).
**Output:** `docs/partner-pipeline.md` — 3 Kategorien, je 5–7 Namen, Kontakt-Info, Priorität
**Wer:** 🤖 Recherche + Struktur, 👤 ergänzt bekannte Kontakte

### 23. Logo + Brand-Motiv erstellen (Canva MCP)
**Was:** Wordmark "MAJER" in Crimson Pro + Pause-Linie als SVG. 4 Varianten: dunkel/hell, Icon-Only (M), Stempel.
**Output:** 4 SVG/PNG-Dateien in `/brand/`
**Wer:** 🤖 via Canva MCP, 👤 finales Okay

### 24. Stempel erstellen (beide Versionen)
**Was:** (a) Vereinssiegel für Dokumente, (b) Video-Watermark PNG (transparent, 40% opacity)
**Output:** `/brand/stempel-dokument.svg` + `/brand/stempel-video.png`

### 25. Social Media Accounts anlegen
**Was:** TikTok, YouTube, Instagram, LinkedIn — gleicher Handle, Bio-Text, Profilbild, Titelbild
**Wer:** 👤 Heinrich (muss selbst angemeldet sein), 🤖 schreibt alle Bio-Texte
**Zeit:** ~1h für Heinrich

### 26. Email vorstand@ einrichten
**Was:** `vorstand@digitale-bildung-berlin.de` via Hostinger-Hosting (DSGVO-konform, kein Google)
**Output:** Funktionierende Vereins-Email + Email-Signatur-Template
**Wer:** 👤 Account-Erstellung, 🤖 Signatur

### 27. Wissenschaftliche Grundlagen-Dokumente erstellen
**Was:** `references/philosophische-grundlagen.md` — Humboldt, Kant, Adorno, Arendt, OECD Compass 2030 in Kurzform. Mit Zitaten, Quellenangaben, Anwendung auf MAJER.
**Wer:** 🤖 (Basis aus Chatverlauf bereits vorhanden)

### 28. Wirkungsmessung-Framework implementieren
**Was:** `references/wirkungsmessung.md` — Schwarzer/Jerusalem-Skala, WHO-5, DigComp 2.2, CASEL. Angepasste Workshop-Items, DSGVO-Einwilligungsformular.
**Output:** Messbare KPIs für jeden Workshop
**Wer:** 🤖

---

## PHASE 2 — VIDEO-SYSTEM AUFBAUEN (29–48)
*Die KI-Video-Produktionskette steht, bevor das erste öffentliche Video hochgeladen wird.*
*Dauer: ~12–18 Std. | 70% Heinrich, 30% Claude*

### 29. Video-Transkriptions-Workflow implementieren
**Was:** `tools/extract_video_captions.py` schreiben — yt-dlp + YouTube auto-captions → strukturierte Markdown-Datei.
**Wer:** 🤖 (Code), 👤 (yt-dlp installieren, Videos testen)
**Output:** Funktionierendes Script + `workflows/video-transcription.md`

### 30. Nate Herk 10h-Kurs transkribieren ("Was ich lerne")
**Was:** Video `https://youtu.be/mpALXah_PBg` — der 10h Claude Code Kurs. Vollständiges Transkript extrahieren, in strukturierte Lerneinheiten aufteilen.
**Output:** `docs/tools/nate-herk-10h-course/` — aufgeteilt in Sektionen

### 31. Video-01 bis Video-07 neu schreiben
**Was:** Die bestehenden Dateien sind Zusammenfassungen, keine Transkripte. Mit echtem Transkript-Inhalt überschreiben. Pro Video: Transkript-Auszüge, Kernkonzepte, MAJER-Anwendung.
**Wer:** 🤖

### 32. Creator-System Gottlebe einrichten
**Was:** Das Gottlebe-Video-System verstehen und für MAJER adaptieren. Workflow dokumentieren.
**Output:** `docs/tools/video-creation/vc-03-creator-workflow-system.md` vollständig

### 33. Creator-System Moritz Herzog (Face Clone AI) einrichten
**Was:** Face Clone AI testen und konfigurieren.
**Wer:** 👤 Heinrich (System-Zugang), 🤖 dokumentiert

### 34. n8n Workflow: Video-Produktion Pipeline (Faceless Shorts)
**Was:** `json/Faceless_Shorts_System.json` in n8n importieren und auf MAJER adaptieren.
**Pipeline:** Frage aus PB → Skript via Claude → Audio via ElevenLabs → Video via Creatomate/Remotion → Buffer Upload
**Wer:** 🤖 (Workflow-Anpassung + Dokumentation), 👤 (Account-Zugänge)

### 35. Test-Video Format A: KI-generiert (kein Face)
**Was:** Erstes Video ohne Gesicht. Frage #011: "Wie verdient TikTok Geld?"
**Skript:** 🤖, Produktion: 👤

### 36. Test-Video Format B: Face Clone
**Was:** Gleiche Inhalt, mit KI-generiertem Gesicht/Avatar. Frage #001.

### 37. Test-Video Format C: Slide/Text-Motion

### 38. Test-Video Format D: Interview-Stil

### 39. Test-Video Format E: Vlog (Behind-the-Scenes Verein)

### 40. Feedback-Runde: 5 Videos zeigen
**Was:** Alle 5 Formate an 5–10 Personen aus dem Umfeld. Strukturierter Feedback-Bogen.
**Wer:** 👤 (Feldarbeit), 🤖 (Fragebogen erstellen)

### 41. Standard-Format festlegen + Workflow finalisieren
**Was:** Auf Basis Feedback: welche 1–2 Formate werden Hauptformate? Workflow komplett dokumentieren.

### 42. n8n Workflow: YouTube Strategist importieren
**Was:** `json/YouTube_Strategist.json` importieren + auf MAJER-Kanal anpassen. Trend-Analyse und Content-Ideen automatisiert.
**Wer:** 🤖 (Anpassung)

### 43. n8n Workflow: Brand Reimagination Shorts
**Was:** `json/Brand Reimagination Shorts.json` für MAJER-Brand adaptieren.

### 44. Repurposing-Workflow einrichten (Opus Clip + Buffer)
**Was:** Opus Clip Account + Buffer für TikTok + YouTube + Instagram + LinkedIn verbinden.

### 45. n8n Workflow: AI Marketing Team
**Was:** `json/AI Marketing Team (4_26_25).zip` entpacken, studieren, auf MAJER adaptieren. Automatisches Content-Briefing für jedes Video.
**Wer:** 🤝

### 46. Thumbnail-Template + Video-Outro (Canva MCP)
**Was:** 3 Thumbnail-Varianten + 10s Outro-Template
**Wer:** 🤖 via Canva MCP

### 47. Posting-Kalender Monat 1 aufstellen
**Was:** 10–15 Videos: welche Fragen, welches Format, welcher Posting-Tag, welche Plattform?
**Output:** `docs/content-kalender.md`
**Wer:** 🤖

### 48. Buffer-Automation: n8n → Buffer-API
**Was:** Workflow: fertige Videos → automatisch in Buffer-Queue laden. Heinrich nur noch genehmigt.
**Output:** `json/workflows/majer-buffer-auto-queue.json`
**Wer:** 🤖 (Workflow)

---

## PHASE 3 — ERSTE 15 VIDEOS (49–66)
*Content produzieren, posten, analysieren.*
*Dauer: ~20–30 Std. | 80% Heinrich, 20% Claude*

### 49–53. Batch-Skripts Videos #001–005
**Was:** 5 Skripte, Claude-Batch. Themen: Fragen #011, #012, #013, #001, #007
**Wer:** 🤖 schreibt, 👤 reviewt

### 54–58. Produktion: Videos #001–005
**Was:** Je nach Standard-Format. 1 Video/Tag.

### 59. Erste Analytics-Auswertung (Woche 1)
**Was:** TikTok, YouTube, Instagram, LinkedIn. Welche Hooks performen?
**Wer:** 👤 Daten, 🤖 Analyse + Empfehlungen

### 60–64. Batch + Produktion: Videos #006–010

### 65. Zweite Analytics-Auswertung + Format-Adjustment
**Was:** Nach 10 Videos: Pivot wenn nötig. Welcher Hook-Typ performt in DE?

### 66. n8n: Kommentar-Analyse-Workflow
**Was:** YouTube-Kommentare via API → Sentiment-Analyse → wöchentliche Zusammenfassung an Heinrich.
**Basis:** Codex-Video (Video 01) hatte YouTube Comment Intelligence System als Praxisbeispiel.
**Wer:** 🤖

---

## PHASE 4 — LEGAL & INFRASTRUKTUR (67–80)
*Technisches Fundament legen.*
*Dauer: ~10–14 Std. | 60% Claude, 40% Heinrich*

### 67. Vereinsregistrierung Status prüfen
**Was:** Amtsgericht kontaktieren — Stand des Eintragungsprozesses?
**Wer:** 👤 Telefonat/Email (~30 Min)

### 68. Domain digitale-bildung.de kaufen
**Was:** Bei Cloudflare registrieren (~12€/Jahr)
**Wer:** 👤

### 69. Hostinger VPS SSH-Inspektion
**Was:** `docker ps`, `ss -tlnp`, `df -h` — welche Services laufen, Port-Konflikte?
**Wer:** 🤝 — Claude (Kommandos), Heinrich (SSH-Zugang)
**Output:** Liste laufender Services + Port-Konflikte

### 70. Docker-Compose auf VPS deployen
**Was:** `infra/docker-compose.yml` deployen — Pocketbase + n8n + Traefik starten.
**Abhängigkeit:** Schritt 69 muss fertig sein

### 71. AVV mit Hostinger prüfen und dokumentieren
**Was:** Auftragsverarbeitungsvertrag — existiert er? Wenn nicht: anfordern.
**Wer:** 👤 (Vertrag), 🤖 (DSGVO-Checkliste)

### 72. SSL via Traefik + Let's Encrypt
**Was:** Config für digitale-bildung-berlin.de + digitale-bildung.de
**Wer:** 🤖 Config, 👤 Ausführung

### 73. Cloudflare DNS konfigurieren
**Was:** A-Record digitale-bildung.de → VPS-IP
**Wer:** 👤 Dashboard, 🤖 Anleitung

### 74. Pocketbase Admin Setup
**Was:** Admin-UI öffnen (127.0.0.1:8090), Admin-Account, Basis-Config
**Wer:** 👤 Account, 🤖 Collection-Schema-Planung

### 75. n8n Grundkonfiguration
**Was:** SMTP-Setup, Webhook-URL, ersten Test-Workflow
**Wer:** 🤖 Workflow-JSON, 👤 SMTP-Credentials

### 76. n8n: Multi AI Agents Workflow importieren
**Was:** `json/Multi_AI_Agents.json` — studieren und auf MAJER-Architektur anpassen.
**Wer:** 🤝

### 77. n8n: RAG Reranking Workflow importieren
**Was:** `json/RAG_Reranking.json` — für künftiges Wissens-Retrieval aus 1000-Fragen-Datenbank.
**Wer:** 🤖 Anpassung + Dokumentation

### 78. Backup-Routine einrichten
**Was:** Pocketbase daily backup zu Cloudflare R2 via n8n-Cron. n8n-Workflows auto-commit zu GitHub.
**Wer:** 🤖

### 79. GitHub Remote + GitHub Actions CI/CD
**Was:** Monorepo auf GitHub pushen. GitHub Actions: TypeScript-Check, Lint, Build auf push.
**Wer:** 👤 GitHub-Account, 🤖 Workflow-File

### 80. Self-Healing n8n Workflow (FIDT Guide)
**Was:** `FIDT - Buisness/Self-Healing n8n Workflows Guide.pdf` lesen und implementieren. Fehler-Routing mit automatischer Behebung.
**Basis:** FIDT-Dokument ist bereits im Repo.
**Wer:** 🤖 liest Guide, implementiert Basis-Pattern

---

## PHASE 5 — WEBSITE MVP (81–105)
*Vereins-Website — Minimum Viable Product.*
*Dauer: ~35–50 Std. | 90% Claude, 10% Heinrich*

### 81. Dev-Server starten + Website visuell prüfen
**Was:** `pnpm dev` in `apps/verein`, Persona-Modal testen, Brand-Farben prüfen, Mobile-Check.
**Status:** AUSSTEHEND — Website-Code existiert, aber visuell noch nicht verifiziert.
**Wer:** 👤 Sichtprüfung, 🤖 Fixes

### 82. Persona-Modal testen und debuggen
**Was:** Erster Besuch → Modal erscheint → Persona wählen → Cookie gesetzt → Akzentfarbe wechselt.

### 83. Homepage / vollständig ausbauen
**Was:** Hero + Mission + Drei-Schritte + Zahlen-Banner (PISA 2022, ICILS DE, etc.) + USP-Zitat + CTA.
**Wer:** 🤖 (Basis existiert, ausbauen auf Basis brand-identity.md)

### 84. /ueber-uns — Geschichte, Team, Werte
**Was:** Wer ist Heinrich, was treibt MAJER an. Wissenschaftliche Basis sichtbar machen.

### 85. /workshops — Übersicht + Buchungsformular
**Was:** Angebote, Zielgruppen, Buchungs-Form → PB workshop_buchungen.

### 86. /lernpfade — Vorschau Portal
**Was:** Drei Bereiche als Lernpfad visualisiert. CTA: Mitglied werden.

### 87. /mitglied-werden — Antragsformular
**Was:** Vollständiges Formular → PB mitgliedsantraege. Age-Gating für <18.

### 88. /foerdern — Für Förderer-Persona
**Was:** Wie kann man MAJER unterstützen? Spenden, Kooperation, Räume.

### 89. /impact — Zahlen und Wirkung
**Was:** PISA 2022, Berliner Bildungsbericht, Live-Counter (Workshop-Teilnehmer, Mitglieder).

### 90. /impressum + /datenschutz (Update)
**Was:** Prüfen ob bestehende Seiten vollständig und korrekt sind.

### 91. /lernpfade/portal-login — Auth-Seite
**Was:** Pocketbase Auth. Login, Passwort-Reset, noch kein Self-Signup.

### 92. Pocketbase Collection: mitgliedsantraege
**Was:** Schema: Name, Email, Geburtsdatum, Interessen, Status, Timestamp.
**Wer:** 🤖 (Schema + Migration)

### 93. Pocketbase Collection: tausend_fragen
**Was:** Schema: id, frage, bereich, schwierigkeit, status, skript, video_url, tags.

### 94. Pocketbase Collection: workshop_buchungen
**Was:** Schema: Name, Email, Workshop-ID, Status, iCal-Konfirmation.

### 95. Pocketbase Collection: mitglieder
**Was:** Schema: Name, Email, Level, Abteilung, Selbstwirksamkeits-Scores, Einwilligungen.

### 96. n8n: Mitgliedsantrag → Email-Bestätigung
**Was:** Neuer PB-Eintrag → n8n → Bestätigungs-Email + Admin-Notification.

### 97. n8n: Workshop-Buchung → iCal-Bestätigung
**Was:** Buchung → Email mit iCal-Anhang → Wartelisten-Handling.

### 98. DSGVO Cookie-Banner
**Was:** Minimaler, rechtskonformer Banner. Plausible ist cookieless.

### 99. Analytics: Plausible einrichten
**Was:** DSGVO-konform, cookieless. ~9€/Monat
**Wer:** 🤖 Einbindung, 👤 Account

### 100. Mobile Responsiveness + QA
**Was:** Alle Seiten auf Handy testen.

### 101. apps/verein Typescript + Build clean
**Was:** `pnpm type-check` + `pnpm build` — 0 Errors, 0 Warnings.
**Wer:** 🤖

### 102. apps/verein auf VPS deployen
**Was:** `docker build`, `docker push`, `docker-compose up` — Website live auf digitale-bildung.de.

### 103. Plausible + Uptime Kuma einrichten
**Was:** Monitoring für Website-Downtime. Alerts via Email oder Telegram.

### 104. Website-Launch: erste öffentliche Ankündigung
**Was:** LinkedIn-Post + TikTok/Reels-Video: "Die Website ist live."
**Wer:** 🤖 Skript, 👤 Posting

### 105. Post-Launch Bugfix-Session
**Was:** Nach 48h live: was ist kaputt? Was fehlt? User-Feedback auswerten.

---

## PHASE 6 — WISSENSCHAFTLICHE VERANKERUNG (106–120)
*Impact-Messbarkeit und akademische Legitimität aufbauen.*
*Dauer: ~15–20 Std. | 60% Heinrich, 40% Claude*

### 106. Philosophisches Grundlagen-Dokument fertigstellen
**Was:** `references/philosophische-grundlagen.md` — Humboldt, Kant, Adorno, Arendt, OECD Compass 2030. Zitier-fertig.
**Wer:** 🤖 (Basis aus Chatverlauf)

### 107. Wirkungsmessungs-Framework implementieren
**Was:** Schwarzer/Jerusalem (Selbstwirksamkeit), WHO-5, DigComp 2.2, CASEL. Workshop-Items, DSGVO-Einwilligung.
**Output:** `references/wirkungsmessung.md` + Formulare

### 108. Akademische Partner-Datenbank
**Was:** HU Berlin, FU Berlin, TU Berlin, Max-Planck-BMPG, DIPF. Kontakte, Forschungsschwerpunkte, Status.
**Output:** `references/akademische-partner.md`

### 109. Outreach-Templates fertigstellen
**Was:** E-Mails an Uni-Mitarbeiter, Harris/Zuboff/Haidt. Personalisierbar, sofort einsatzbereit.
**Output:** `references/outreach-templates.md`

### 110. Ersten Uni-Kontakt anfragen (HU Berlin oder Max-Planck)
**Was:** Konkrete E-Mail an spezifischen wissenschaftlichen Mitarbeiter.
**Wer:** 👤 sendet, 🤖 schreibt

### 111. Feedback-Instrument für Workshop entwickeln
**Was:** Verkürzte Selbstwirksamkeitsskala (5 Items), WHO-5, 3 offene Fragen. Auf Papier + digital.
**Wer:** 🤖

### 112. Pocketbase Collection: wirkungsmessung
**Was:** Schema: mitglied_id, datum, skala, pre_score, post_score, delta.
**Wer:** 🤖

### 113. n8n: Wirkungsmessung-Auswertung automatisieren
**Was:** Nach jedem Workshop: Scores aggregieren, Bericht generieren, Heinrich sendet via Telegram.
**Wer:** 🤖

### 114. Ersten Forschungspartner-Termin halten
**Wer:** 👤 Heinrich

### 115. Kooperationsvereinbarung mit Uni (Template)
**Was:** Einfache 2-Seiter-Vereinbarung: Praxisfeld für Studierende, Datenschutz, keine Exklusivität.
**Wer:** 🤖 Entwurf, 👤 Unterzeichnung

### 116. E-Mails an Harris/Zuboff/Haidt senden
**Was:** Im 2-Wochen-Abstand. Nachdem Website live ist.
**Wer:** 👤 nach Anpassung der Templates

### 117. Universitäre Kooperation formalisieren
**Was:** Erste Bachelor- oder Masterarbeit auf MAJER-Praxisfeld aufsetzen.
**Wer:** 👤 + akademischer Partner

### 118. Wirkungsmessungs-Pre-Test vor erstem Workshop
**Was:** Alle Messinstrumente durchführen bevor Teilnehmer eintreffen.

### 119. Wirkungsmessungs-Post-Test nach erstem Workshop
**Was:** Gleiche Instrumente, Vergleich berechnen.

### 120. Ersten Mini-Wirkungsbericht schreiben
**Was:** 2 Seiten: Methodik, Stichprobe, Ergebnisse, Interpretation. Für Stiftungen.
**Wer:** 🤖

---

## PHASE 7 — ERSTER WORKSHOP (121–132)
*MVP des eigentlichen Vereinsangebots.*
*Dauer: ~15–20 Std. | 70% Heinrich, 30% Claude*

### 121. Workshop-Materialien v1.0 (Canva MCP)
**Was:** Slide-Deck, Handout (1 Seite), Feedback-Bogen.
**Wer:** 🤖 via Canva MCP, 👤 Review

### 122. Pilot-Workshop: Gründungsmitglieder (5 intern)
**Was:** Erster Durchlauf intern — darf scheitern.
**Wer:** 👤

### 123. Workshop auswerten + Konzept anpassen (v1.1)
**Wer:** 🤝

### 124. Ersten Raum anfragen
**Was:** Email an Jugendclub/VHS/Partner.
**Wer:** 👤 Email, 🤖 Template

### 125. Workshop auf Website live stellen (/workshops)
**Was:** Erste Termine, Buchungsformular aktiv.
**Wer:** 🤖

### 126. Erster öffentlicher Workshop (max. 15 Teilnehmer)
**Wer:** 👤

### 127. Workshop-Video: Behind-the-Scenes
**Wer:** 👤 Rohmaterial, 🤖 Skript

### 128. Ersten Feedback-Report erstellen
**Was:** Anonymisierte Auswertung. Erste Wirksamkeitsdaten.
**Wer:** 🤖

### 129. Workshop-Zertifikat-Template erstellen
**Was:** PDF-Zertifikat mit UUID, Vereins-Stempel, Unterschrift.
**Wer:** 🤖

### 130. n8n: Workshop-Abschluss → Zertifikat-Generierung automatisieren
**Was:** Feedback eingereicht → Zertifikat generiert → Email versandt.
**Wer:** 🤖

### 131. Zweiten Standort anfragen (anderer Bezirk)
**Wer:** 👤

### 132. Workshop-Rhythmus festlegen
**Was:** Monatlich/zweiwöchentlich? Welche Bezirke zuerst?
**Wer:** 👤 Entscheidung, 🤖 Logistik-Plan

---

## PHASE 8 — CONTENT SKALIEREN (133–143)
*Video-Produktion auf Geschwindigkeit.*
*Dauer: ongoing | 80% Heinrich, 20% Claude*

### 133. 1000-Fragen auf 100 erweitern
**Wer:** 🤖

### 134. n8n: Frage → Claude-Skript → PB speichern
**Was:** Automatisierte Pipeline: neue Frage → n8n → Claude API → Skript → PB.
**Kosten:** ~0.01–0.05€/Skript

### 135. Video-Produktion auf 5+/Woche
**Wer:** 👤 mit eingespieltem Workflow

### 136. YouTube Longform: erste 3 Videos (10–15 Min)

### 137. LinkedIn Posting-Rhythmus etablieren
**Was:** 1–2 Posts/Woche: Clip + Textpost.

### 138. Newsletter-Setup (n8n + SMTP)
**Was:** Monatliches Update: neue Fragen, nächste Workshops.
**Wer:** 🤖

### 139. Erste Kooperationsanfragen (3–5 Schulen/VHS)
**Was:** Kostenloser Pilot-Workshop, wir dokumentieren Impact.
**Wer:** 👤 Anfragen, 🤖 Template

### 140. Social Impact Tracking
**Was:** Monatsreport: Reichweite, Engagement, Wirkung.
**Wer:** 🤖 Template + Automation

### 141. n8n: Kommentar-Moderation + Reply-Vorschläge
**Was:** Neue Kommentare → Claude → Reply-Vorschlag → Heinrich genehmigt.
**Wer:** 🤖

### 142. n8n: Trend-Recherche automatisieren
**Was:** Weekly: YouTube-Trends + Google Trends für MAJER-Themen → Content-Ideen-Report.
**Wer:** 🤖

### 143. Content-Performance-Dashboard (Nova)
**Was:** Internes Tool: alle Metriken auf einen Blick.
**Wer:** 🤖 (als Teil von apps/nova)

---

## PHASE 9 — FUNDING & PARTNERSCHAFTEN (144–155)
*Erste Finanzierung und institutionelle Verankerung.*
*Dauer: ~20–30 Std. | 60% Heinrich, 40% Claude*

### 144. Stiftungsliste priorisieren
**Was:** Top 5 Stiftungen: bpb, DSEE, Vodafone, Berliner Landesjugendplan, Deutsche Telekom Stiftung.
**Wer:** 🤖 Recherche, 👤 Ranking

### 145. Ersten Förderantrag vorbereiten
**Was:** Auf Basis USP, Workshop-Impact, Website. Vollständiger Antrag.
**Wer:** 🤖 Entwurf, 👤 Ergänzungen + Unterzeichnung

### 146. Universitätskontakte anfragen (HU Berlin, FU, TU)
**Was:** Anfrage für wissenschaftliche Begleitung.
**Wer:** 👤 Kontakt, 🤖 Anschreiben-Template

### 147. Paritätischer Wohlfahrtsverband Berlin — Erstgespräch
**Was:** Struktureller Partner: rechtliche Unterstützung, Netzwerk, Förderberatung.
**Wer:** 👤

### 148. Ersten Förderantrag einreichen
**Wer:** 👤

### 149. Impact-Bericht nach 3 Monaten
**Was:** Reichweite, Workshop-Teilnehmer, Feedback-Daten, Mitglieder, Erwähnungen.
**Wer:** 🤖 Report, 👤 Daten

### 150. Zweiten Workshop-Standort erschließen

### 151. Mitglieder-Portal öffnen (erste externe Mitglieder)
**Was:** /portal/login aktivieren, erste 10–20 externe Mitglieder einladen.
**Wer:** 🤖 Portal-Feature, 👤 Auswahl

### 152. Förderantrag Nr. 2 auf Basis Impact-Bericht
**Was:** Mit echten Daten ist der zweite Antrag deutlich stärker.

### 153. Erste Medienpräsenz (Berliner Zeitung, RBB, Tagesspiegel)
**Was:** Pressearbeit: Vereinsgründung + erste Impact-Zahlen als Story.
**Wer:** 🤖 Pressemitteilung, 👤 Kontaktaufnahme

### 154. Erste Kooperation mit Berliner Schule formalisieren
**Was:** Rahmenvereinbarung für regelmäßige Workshops.

### 155. Jahresplan für Fördermittel (Antragszyklus)
**Was:** Welche Fristen, welche Summen, welche Anforderungen pro Stiftung.
**Wer:** 🤖 Kalender + Tracker

---

## PHASE 10 — NOVA BUSINESS AUFBAUEN (156–170)
*Paralleler kommerzieller Arm — separat vom Verein.*
*Dauer: ~40–60 Std. | Erst wenn Verein läuft | 70% Claude, 30% Heinrich*

### 156. Nova-Business-Konzept finalisieren
**Was:** `references/nova-business-foundation.md` aus FIDT-Unterlagen + Chat-Geschichte erstellen.
**Basis:** Nova 10-Day-Setup-Guide, SWOT-Analyse, Competitive Analysis aus FIDT-Ordner.
**Wer:** 🤖

### 157. Nova-Domain + Infrastruktur (separater Container)
**Was:** nova-tive.com bleibt für Nova. Separater Docker-Container auf gleichem VPS oder Hetzner.
**Wer:** 🤝

### 158. ElevenLabs Voice Clone einrichten
**Was:** Heinrichs Stimme klonen (5 Aufnahmen). Voice ID speichern in .env.
**Wer:** 👤 Aufnahmen, 🤖 Integration

### 159. Creatomate Template für MAJER-Videos
**Was:** 9:16 Template für Shorts. Automatisch gerendert via n8n.
**Wer:** 🤖 Template-Design-Anleitung, 👤 Creatomate-Account

### 160. Telegram Bot einrichten (Nova-Kommunikation)
**Was:** Bot für Admin-Notifications: neue Kommentare, Buchungen, Errors.
**Wer:** 🤖

### 161. n8n: Nova Video Engine v1
**Was:** Audio per Telegram → Whisper-Transkript → Claude-Skript → ElevenLabs → Creatomate → Telegram-Rückantwort.
**Basis:** FIDT Nova_10_Day_Setup_Guide, Tag 6-7.
**Wer:** 🤖 Workflow

### 162. Erste Nova-Kunden gewinnen (Beta)
**Was:** 3 zahlende Beta-Kunden für Content-Automatisierung. 59€/Monat.
**Wer:** 👤

### 163. n8n: LinkedIn Agent importieren
**Was:** `json/__LinkedIn_Agent.json` — für Heinrich's LinkedIn-Outreach anpassen.
**Wer:** 🤖

### 164. n8n: Lead-Grab Workflow
**Was:** `json/__Grab_Profiles.json` für gezieltes Netzwerk-Wachstum.
**Wer:** 🤖

### 165. n8n: Supabase/Postgres als Nova-Datenbank
**Was:** `json/Supabase_Postgres.json` importieren. Nova-Kundendatenbank aufsetzen.
**Wer:** 🤖

### 166. Nova Landing Page (Framer oder Next.js)
**Was:** Einfache Verkaufsseite für die KI-Marketing-Dienstleistung.
**Wer:** 🤖

### 167. Nova Pricing-Modell definieren
**Was:** Freebie, 59€, 349€, 1599€ (aus FIDT-Guide). Angepasst auf aktuelle KI-Tool-Preise.
**Wer:** 🤝

### 168. Erste Nova-Case-Study erstellen
**Was:** Erfolgsgeschichte von Beta-Kunden. Für Social Proof.
**Wer:** 🤖 Template

### 169. Nova als eigenständige GbR oder UG
**Was:** Sobald erste Einnahmen: rechtliche Trennung vom Verein sicherstellen.
**Wer:** 👤 + Steuerberater

### 170. Nova-Prozesse duplizieren (zweites Business-Template)
**Was:** Nova-System dokumentieren so dass es auf anderes Themen-Business angewendet werden kann.
**Wer:** 🤖

---

## PHASE 11 — SKALIERUNG, AUTOMATISIERUNG & SELF-HEALING (171–185)
*Das System läuft autonom — Heinrich kontrolliert, genehmigt, skaliert.*
*Dauer: ~40–60 Std. | 70% Claude, 30% Heinrich*

### 171. Lernpfad-System im Portal ausbauen
**Was:** PB Collections: lernpfade + module. 3 Lernpfade, erste Module aus 1000-Fragen.
**Wer:** 🤖

### 172. Prüfungs- und Zertifizierungssystem
**Was:** Quiz (auto-scored), Projekt-Einreichung, UUID-basiertes Zertifikat als PDF.

### 173. Workshop-Buchung vollständig automatisieren
**Was:** Buchung → Kapazitäts-Check → iCal → Warteliste → Reminder. Alles via n8n.
**Wer:** 🤖

### 174. RAG-System für MAJER-Wissensdatenbank
**Was:** 1000-Fragen + Lernmaterial + Workshop-Docs als Vektor-DB. Claude kann darin suchen.
**Basis:** `json/RAG_Reranking.json`
**Wer:** 🤖 + `json/Ultimate_Browser_Agent.json`

### 175. n8n: Fehler-Routing + Self-Healing
**Was:** Wenn Workflow fehlschlägt → automatische Diagnose → Retry-Logik → Eskalation wenn nötig.
**Basis:** `FIDT - Buisness/Self-Healing n8n Workflows Guide.pdf`
**Wer:** 🤖

### 176. apps/nova beginnen (Interne Tools)
**Was:** Nova OS — Mitglieder-Verwaltung, Content-Pipeline-Dashboard, Workshop-Übersicht.
**Wer:** 🤖

### 177. Uptime-Monitoring für alle Services
**Was:** Uptime Kuma für: Website, Pocketbase, n8n, Nova. Telegram-Alerts.
**Wer:** 🤖

### 178. Automatisches Security-Audit-System
**Was:** Wöchentlicher Cron: OWASP-Check auf Codebase, Dependency-Vulnerabilities prüfen.
**Basis:** Video-04 Security Audit Skill
**Wer:** 🤖

### 179. n8n: Website-Content-Monitoring
**Was:** Firecrawl (`json/Firecrawl_Search.json`) für MAJER-Website-Erwähnungen + Competitor-Monitoring.
**Wer:** 🤖

### 180. Multi-Agent-System für Content-Pipeline
**Was:** `json/Multi_Agent_System_Benefits.json` + `json/Multi_AI_Agents.json` → vollständige Content-Automatisierung. Von Trend bis veröffentlichtem Video, Heinrich nur noch Freigabe.
**Wer:** 🤝

### 181. UGC Ads System (für bezahlte Werbung)
**Was:** `json/UGC Ads Veo & Sora.json` — AI-generierte User-Generated-Content Ads.
**Wer:** 🤖 Workflow, 👤 Freigabe + Budget

### 182. OpenAI Image Gen für Thumbnails
**Was:** `json/OpenAI_Image_Gen_LinkedIn_Post.json` anpassen für YouTube-Thumbnails.

### 183. Automatische DB-Synchronisierung
**Was:** `json/Update_Database.json` für Pocketbase ↔ n8n-Daten-Sync.

### 184. Mac Studio Setup vorbereiten (lokale AI)
**Was:** Anforderungsliste für Mac Studio: RAM, Storage, lokale Models (Ollama, LM Studio). Zeitplan.
**Wer:** 🤖 Empfehlung, 👤 Kaufentscheidung

### 185. Lokale AI + RAG auf Mac Studio
**Was:** Ollama + Open-Source-Model lokal. Datensouveränität. Kein API-Key nötig für private Daten.
**Abhängigkeit:** Mac Studio vorhanden

---

## PHASE 12 — JAHRESBERICHT & LANGZEITSTRATEGIE (186–200)
*Fundament für die nächsten 5 Jahre.*
*Dauer: ~20–30 Std. | 60% Claude, 40% Heinrich*

### 186. Jahr-1-Bericht erstellen
**Was:** Reichweite, Mitglieder, Workshops, Impact, Finanzen. Basis für zweite Förderphase.
**Wer:** 🤖 Report, 👤 Zahlen + Unterzeichnung

### 187. Förderantrag-Verlängerung auf Basis Jahr-1-Bericht

### 188. Zweiten Verein konzipieren (Duplikations-Template)
**Was:** MAJER war das Prototype. Zweiter Verein anderer Fokus, gleiche Infrastruktur.
**Wer:** 🤖 Konzept

### 189. Masterplan für Jahre 2–5 entwickeln
**Was:** Politische Vorbereitung, Skalierung auf andere Städte, Forschungspartnerschaft vertiefen.
**Wer:** 🤝

### 190. Investor-/Stiftungs-Pitch Deck erstellen
**Was:** Für größere Förderungen oder Impact-Investment.
**Wer:** 🤖

### 191. MAJER Academy (Online-Kurs) planen
**Was:** Erste kommerzielle Produkte: Online-Kurs basierend auf Lernpfaden.
**Wer:** 🤝

### 192. Workshop-Lizenz für Schulen entwickeln
**Was:** Lizenziertes Curricula-Paket das Schulen für ihren Unterricht kaufen können.
**Wer:** 🤖 Konzept

### 193. Erste TV/Podcast-Medien-Auftritte vorbereiten
**Was:** Mediamap: Welche Podcasts, welche Redaktionen, welche Formate. Pitch-Vorlage.
**Wer:** 🤖

### 194. Berliner Bildungspolitik: erste Kontakte
**Was:** Bezirkliche Bildungsstadtratspersonen anschreiben. Impact zeigen.
**Wer:** 👤 Kontakt, 🤖 Briefing-Dokument

### 195. Bundesweite Vernetzung: andere Bildungsvereine
**Was:** Netzwerk aufbauen: Partner, keine Konkurrenten.
**Wer:** 👤

### 196. MAJER als Forschungseinrichtung anerkannt
**Was:** Formal: Forschungstätigkeit dokumentiert, universitäre Partnerschaft formalisiert.

### 197. Nova Business Proof-of-Concept vollständig
**Was:** 3 zahlende Kunden, positiver Cashflow, reproduzierbares System.
**Wer:** 👤

### 198. Claude Code OS an andere weitergeben
**Was:** Das System das wir gebaut haben als Vorlage für andere Gründer dokumentieren.
**Wer:** 🤖

### 199. Heinrich: öffentliche Rede / TEDx / Panel
**Was:** Erste größere öffentliche Auftritte als Bildungsexperte.
**Vorbereitung:** 🤖 (Rede-Template, Kernbotschaften)

### 200. System-Übergabe-Dokumentation
**Was:** Vollständige Dokumentation aller Systeme, Workflows, Credentials, Entscheidungslogik — so dass ein Nachfolger oder ein Team das übernehmen kann ohne Heinrich.
**Wer:** 🤖
**Bedeutung:** Erst wenn Schritt 200 existiert, ist das Fundament wirklich fertig.
