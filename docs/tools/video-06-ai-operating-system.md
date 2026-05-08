# Video 06 — AI Operating System (AIOS) — Vollständiger Aufbau

**Video-ID:** bCljOfCH8Ms
**URL:** https://youtu.be/bCljOfCH8Ms
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Ein AI Operating System ist die Schicht zwischen dem Menschen und seinem Geschäft — wie macOS zwischen Nutzer und Computer. Claude Code mit dem richtigen Setup sieht alle Dateien, alle Kommunikation, alle wichtigen Business-Daten, kann mit ihnen interagieren, sie erinnern und darauf handeln. Das Ziel: Ein "AI-Mitarbeiter" der nie schläft, nie vergisst, und alle Quellen gleichzeitig im Blick hat.

---

## Framework 1: Die Drei M's von AI

### M1 — Mindset

**Habit 1: Default Shift**
Vor jeder Aufgabe automatisch fragen: "Wie kann KI das übernehmen — oder zumindest 30%?"
- Nicht: Wird KI das tun? (Binary)
- Sondern: Zu welchem Prozentsatz kann KI hier helfen?
- Jede Aufgabe hat eine "Leverage-Prozent" — man muss sie nur finden

Beispiel aus der Praxis: 300 YouTube-Beschreibungen aktualisieren. Alt: 1h manuell. Neu: Claude Code + YouTube API/MCP identifizieren → automatisiert.

**Habit 2: Function Breakdown**
Die eigene Rolle = eine Menge kleiner Funktionen. Eine nach der anderen automatisieren.

Beispiel YouTube-Video-Flow:
```
Ideation → Scripting → Slide-Erstellung → Packaging (Titel/Thumbnail) → 
Beschreibung → Kommentar-Replies
```
Jedes Chunk einzeln automatisieren. Reusable: Scripting-Chunk für YouTube = gleicher Chunk für Meeting-Prep.

**Habit 3: Curiosity Rule**
Nie AI-Output blind akzeptieren. AI als Mentor behandeln, nicht als Automat.
- Fragen: "Warum hast du es so gebaut?"
- Fragen: "Was passiert wenn X passiert?"
- Nicht nur Outputs annehmen, Hintergründe verstehen

Konzept "Dark Code": Code den man nicht versteht, weil AI ihn geschrieben hat. Gefährlich in Produktion.

### M2 — Method

Entscheidungsrahmen: Was lohnt sich zu automatisieren und zu welchem Grad?
- Kein System: Alles oder nichts
- Richtig: 30%, 60%, 80% Automatisierung je nach Task

### M3 — Machine

Technische Umsetzung — wird im AIOS-Aufbau konkret.

### Wichtige Erkenntnis: Produktivitätsdip ist normal

```
Baseline → -20% (Lernphase) → +50% (Gewinn)
Netto: +30% — der Dip ist der Preis für die Transformation.
```

Exponentielles Lernen: Anfangs unter der Baseline, aber nach Tag 3-5 deutlich darüber. Wer in der Dip-Phase aufgibt, verpasst die gesamte Ernte.

---

## Framework 2: Die Vier C's des AIOS

Das AIOS muss in dieser Reihenfolge aufgebaut werden:

```
1. Context → 2. Connections → 3. Capabilities → 4. Cadence
```

Jedes C baut auf dem vorherigen auf. Cadence ohne Connections ist nutzlos.

### C1 — Context (Das Gehirn)

Was weiß Claude über dich, dein Team, deine Tools, deine Stimme, dein Business, dein Geld?

**Test:** Neue Session öffnen und eine Business-Frage stellen. Antwortet Claude wie ein Teammate, ein Executive Assistant — oder wie ein Fremder?

**Umsetzung:**
- CLAUDE.md mit Business-Profil füllen
- Context-Ordner: Business-Kontext, persönliche Präferenzen, Kommunikationsstil
- Decisions-Ordner: Log wichtiger gemeinsamer Entscheidungen
- References-Ordner: Frameworks, Referenzdokumente

### C2 — Connections (Die Augen und Hände)

Was kann Claude erreichen? Welche Daten kann es lesen und schreiben?

**Verbindungsmethoden:** MCP Server → API → CLI → Browser Automation

**7 Tier-1-Buckets für Connections:**

| Bucket | Zweck | Beispiel-Quellen |
|---|---|---|
| Revenue | Business-Finanzen | Stripe, QuickBooks, School |
| Customer | CRM, Kundenkontakt | CRM-Tool, Support-Plattform |
| Calendar | Termine, Verfügbarkeit | Google Calendar, Calendly |
| Comms | Kommunikation intern/extern | Gmail, Slack, ClickUp |
| Tasks | Projekte, Deadlines | ClickUp, Notion |
| Meetings | Meeting-Transkripte | Fireflies.ai, Otter |
| Knowledge | Sonstiges wichtiges Wissen | YouTube Transcripts, Google Drive, Lokale Dateien |

**Mapping-Übung:** Auf Papier oder in Excalidraw für jeden Bucket notieren, welche konkreten Tools verwendet werden. Dann prüfen: Hat das Tool einen MCP Server? Eine API? Irgendeinen Weg zur Verbindung?

Nate's Beispiel:
- Revenue: School, Stripe, QuickBooks
- Customer: School, YouTube
- Calendar: Google Workspace
- Comms: Gmail, ClickUp, Slack
- Tasks: ClickUp, Notion
- Meetings: Fireflies
- Knowledge: YouTube Transcripts, Google Drive, Lokale Dateien

### C3 — Capabilities (Was kann es produzieren?)

SOPs des eigenen Unternehmens in Skills übersetzen. Wenn der Mitarbeiter etwas konsistent tut, kann Claude Code es genauso tun — mit der richtigen Skill-Datei.

**Beispiele:**
- "Schreib mir einen LinkedIn-Post" → Skill der: Recherche + Grafik generieren + Copy schreiben + Reviewen koordiniert
- "Q3-Report bis Abend" → Skill der alle Quellen kennt, die Business-SOP kennt, selbst ausführt

**Qualitätstest:** Kann Claude eine Aufgabe ohne 2-Absatz-Briefing erledigen? Wenn ja: C3 funktioniert.

### C4 — Cadence (Wann handelt es allein?)

Der AIOS läuft automatisch — während man schläft, wenn der Laptop zu ist.

Umsetzung über:
- Routinen: Zeitgesteuerte Prompts, täglich/wöchentlich
- Schedules: `/schedule`-Befehle
- Webhooks: Externe Trigger (z.B. neues Formular → Aktion)

Beispiel: Jeden Montagmorgen automatisch alle offenen Aufgaben aus ClickUp lesen, Kalender checken, Tagesplan vorschlagen.

---

## Praktischer Aufbau — Template-basierter Einstieg

### Repository-Struktur (Nate's Template)

```
AIOS/
├── .claude/
│   └── skills/
│       ├── audit/skill.md       # AIOS selbst auditieren
│       ├── level-up/skill.md    # Neue Connections/Capabilities hinzufügen
│       └── onboard/skill.md     # Erstmalig einrichten
├── archives/                   # Alte Dokumente
├── context/                    # Business-Kontext-Dateien
├── decisions/                  # Log wichtiger Entscheidungen
├── references/
│   └── three-ms-of-ai.md       # Framework-Referenz
└── CLAUDE.md                   # System-Prompt
```

### Onboarding-Prozess

1. GitHub-Repo von Nate's Community klonen
2. VS Code + Claude Code Extension einrichten (Pro-Plan mind.)
3. Onboard-Skill ausführen: Claude interviewt den Nutzer, legt Context-Dateien an
4. Connections herstellen (MCPs, APIs, CLIs)
5. Skills für häufige Aufgaben definieren
6. Cadence aufbauen (Routinen)

### Die drei eingebauten Skills

**Audit-Skill:** AIOS selbst analysieren — welche Connections fehlen, welche Capabilities sind schwach?

**Level-Up-Skill:** Neue Connection oder Capability hinzufügen. Claude interviewt, empfiehlt Tools, richtet ein.

**Onboard-Skill:** Erstmalig den AIOS konfigurieren. Führt durch alle 4 C's.

---

## Tool-Agnostizität als Designprinzip

Die Vier C's überlebt jeden Tool-Wechsel:

```
Heute: Claude Code + Google Workspace + ClickUp
Morgen: Codex + andere Tools
```

Nate migrierte seinen AIOS in 2 Minuten auf Codex, weil das Fundament (CLAUDE.md, Context-Dateien, Skills) tool-agnostisch ist. Das Framework bleibt, die Tools wechseln.

---

## AIOS vs. klassisches Tool-Hopping

| Arbeitsweise | Tool-Hopping | AIOS |
|---|---|---|
| Dateisuche | Slack oder Email durchsuchen | Direkte Abfrage |
| Reporting | Manuell aus 5 Quellen | Automatisch zusammengefügt |
| Onboarding | Jede Session neu erklären | Context wird geladen |
| Nacht-Arbeit | Nichts passiert | Routinen laufen durch |

---

## Relevanz für MAJER

Das AIOS-Konzept ist die theoretische Grundlage für den gesamten MAJER Claude Code OS-Aufbau:

| MAJER-Element | AIOS-Entsprechung |
|---|---|
| CLAUDE.md | Context (C1) |
| MCP-Server (n8n, Pocketbase) | Connections (C2) |
| ~/.claude/skills/ | Capabilities (C3) |
| Heartbeat/Schedule | Cadence (C4) |
| Monorepo-Struktur | AIOS-Ordnerstruktur |

Die 7 Tier-1-Buckets für MAJER angepasst:
- Revenue: Pocketbase (Mitgliedsbeiträge), zukünftig Stripe
- Customer: Mitgliederliste, Schulkontakte
- Calendar: Google Calendar (Events, Kurse)
- Comms: Gmail, zukünftig Discord/Slack
- Tasks: GitHub Issues oder Notion
- Meetings: Notizen, Protokolle
- Knowledge: Transcript-Bibliothek (24+ Videos), Fördermittel-Doku
