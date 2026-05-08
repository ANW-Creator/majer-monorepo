# Video 18 — Agentic Workflows: Aufbau, Verkauf, Realität

**Video-ID:** vFepZE_wrfg
**URL:** https://youtu.be/vFepZE_wrfg
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Agentic Workflows sind kein Hype — das Marktvolumen wächst von ~8 Mrd. $ auf 40-50 Mrd. $ bis 2030. Der echte Vorteil liegt nicht im Self-Healing-Autopilot, sondern im **Aufbauprozess**: KI baut Automatisierungen schneller, mit weniger Fehlern und mit Edge-Case-Behandlung, die ein Mensch übersehen würde. Das fertige Produkt läuft dann deterministisch wie jedes klassische Automation-System.

---

## Markt-Realität (Stand 2026)

- Aktuelles Volumen: ~8 Mrd. $
- Ziel 2030: 40-50 Mrd. $
- 25% der Enterprises deployen bereits Agentic Pilots (2026)
- 2027: 50% der Unternehmen werden Agentic Workflows betreiben
- Treiber: Klassische Automatisierungen stoßen an Grenzen bei unerwarteten Inputs

---

## Die Wahrheit über "Self-Healing"

**In der Entwicklungsphase (aktiv mit Claude Code):** Self-Healing ist real und kraftvoll.
- Claude Code ist dabei, sieht Fehler, passt den Ansatz an, aktualisiert Tools

**In der Deployment-Phase (läuft automatisch, Claude nicht dabei):** Self-Healing ist weg.
- Was deployed wird: Workflows (Markdown SOPs) + Tools (Python-Skripte)
- Was NICHT deployed wird: Der Agent selbst
- Das Verhalten ist dann deterministisch — genau wie klassische Automation

**Das ist gut.** Deterministisch = vorhersehbar. Vorhersehbar = vertrauenswürdig in Produktion.

---

## Die Zug-Analogie

**Klassische Automatisierung:**
Bahnstrecke von Hand legen — jede Schiene, jede Weiche, jede Verbindung selbst. Trifft man auf ein Problem, muss man selbst eingreifen.

**Agentic Workflows:**
Einer Baufirma sagen: "Ich brauche eine Strecke von A nach B." Die Firma baut. Trifft die Baufirma auf Probleme, löst sie sie selbst. Ergebnis: Bessere Strecke, schneller gebaut, weniger Fehler.

Vor Deployment: 10 verschiedene Züge (Gewichte, Längen, Räder) testen. Erst wenn alles funktioniert: deployen.

---

## WAT-Framework

Das Framework für Agentic Workflows in Claude Code:

| Buchstabe | Bedeutung | Was deployed wird |
|---|---|---|
| **W** | Workflows | Markdown-Dateien (SOPs) — natural language |
| **A** | Agent | Claude Code — NICHT deployed |
| **T** | Tools | Python-Skripte — deployed |

**Wichtig:** Beim Deployment gehen W + T in die Cloud. A (der Agent) bleibt lokal/verschwindet.

**Workflow = Rezept.** Erklärt in natürlicher Sprache wie eine Aufgabe zu erledigen ist — welche Tools in welcher Reihenfolge mit welchen Inputs.

**Tool = Zutat.** Python-Script das eine atomare Aufgabe erledigt (z.B. Perplexity-Recherche, HTML-Email senden, Infografik generieren).

Ohne Workflow: Tools nutzlos (kein Rezept).
Ohne Tools: Workflow nutzlos (keine Ausführung).

---

## Live-Build: Newsletter-Automatisierung

### Setup

```
Projekt: newsletters-demo/
├── CLAUDE.md        # WAT-Framework Instruktionen (aus Community)
├── agent/           # Claude Code selbst
├── workflows/       # Markdown-SOPs
├── tools/           # Python-Skripte
├── brand_assets/    # Logo, Brand Guidelines
└── .env             # API Keys (NIEMALS hardcoden)
```

### Plan-Mode-Prozess

```
Prompt: "Baue eine Newsletter-Automation. Ich sage dir das Thema, 
du recherchierst, strukturierst HTML, machst es schön, 
erstellst Infografiken. Hilf mir beim Tech-Stack."
```

Claude fragt:
1. Recherche-API → Perplexity
2. Delivery → Gmail
3. Brand Assets → Ja, werden bereitgestellt

Finaler Plan: Perplexity (Recherche) → Claude (Content) → Nano Banana via key.ai (Infografiken) → HTML-Email → Gmail

### 5 erstellte Tools

1. `research.py` — Perplexity-API-Abfrage
2. `generate_infographic.py` — key.ai Nano Banana
3. `assemble_html.py` — Newsletter zusammenbauen
4. `send_via_gmail.py` — Email versenden
5. `archive_to_sheets.py` — Google Sheets archivieren

### Credentials-Setup

```bash
# .env Datei (Claude erstellt Platzhalter):
ANTHROPIC_API_KEY=...
PERPLEXITY_API_KEY=...
KEY_AI_API_KEY=...
GMAIL_CREDENTIALS=...
```

### Execution

```
"Schreib mir einen Newsletter über Agentic AI."
```

Claude liest Workflow → erkennt Schritte → Human Review Point → Subject Line Approval → Send.

**Erster Durchlauf-Probleme (selbstgeheilt):**
- Unicode Encoding Error → Claude findet und fixt selbst
- key.ai API Endpoint geändert → Claude sucht neue Docs, findet Endpoint, updated Tool
- HTML Layout kaputt → Claude analysiert, fixt, sendet erneut

**Ergebnis:** Vollständig gebrandeter Newsletter mit Nano-Banana-Infografiken, Perplexity-Quellen, korrekten Fonts und Farben — aus einem Prompt.

---

## Skills als Qualitäts-Multiplier

Skills auf Workflows anwenden:

```
"Erstelle einen Skill für die Infografik-Erstellung mit dem AIS-Logo 
immer oben links, nach dem die Infografiken aussehen sollen."
```

Jede zukünftige Infografik nutzt diesen Skill → konsistentes Branding.

---

## Deployment-Pfad

```
Claude Code (Entwicklung + Test) 
    → GitHub Repository
    → trigger.dev / Modal / Vercel
    → Läuft automatisch (z.B. jeden Montag 6 Uhr)
```

Erst deployen wenn dem Output vertraut wird.

---

## Business: Wie man das verkauft

### Das Kernproblem der meisten AI-Verkäufer

Sie verkaufen den Build, nicht das Ergebnis. "Ich baue AI Workflows in Claude Code" — kein Business interessiert das.

**Was Businesses kaufen:**
- Zeit (10h/Woche weniger Admin)
- Fehlerreduktion (0 manuelle Dateneingabe-Fehler)
- Umsatz (mehr Leads, schnellere Onboardings)

### Arzt-Apotheker-Analogie

**Apotheker:** Füllt das Rezept aus das jemand anderes geschrieben hat.
**Arzt:** Setzt sich hin, stellt Fragen, diagnostiziert, dann verschreibt.

Der Arzt verdient mehr. Man muss der Arzt sein — Business verstehen, Engpass finden, Lösung verschreiben.

### Pipe-Metapher

Viele Businesses schütten Wasser (Marketing, Mitarbeiter, AI-Tools) in eine verstopfte Pipe. Das Wasser fließt nicht schneller weil die Pipe verstopft ist.

**Wert:** Den Stau finden und lösen — dann erst mehr Wasser einschütten.

### Value-Based Pricing

```
Build spart Business 10.000€/Monat
Build kostet 5.000€ einmalig
→ ROI in 2 Wochen
→ Danach nur Gewinn für das Business
→ Der Build dauerte vielleicht 3 Tage
→ Stundensatz würde 300€ ergeben statt 5.000€
```

Nicht Stunden verkaufen. Wert verkaufen.

### Kundenbindung

Erst bauen → dann Metrics tracken → proaktiv den ROI zeigen → Business will mehr → Expansion von 3.000€-Build zu 50.000€/Jahr-Relationship.

Weg: Freelancer → Consultant → Trusted Partner

---

## Vorwissen von n8n ist wertvoll, nicht obsolet

Wer n8n kennt:
- Versteht Webhooks, APIs, Edge Cases
- Erkennt wenn Claude einen schlechten Entscheid trifft
- Kommuniziert präziser was gebaut werden soll
- Kann die Qualität des Ergebnisses beurteilen

Wer direkt mit Claude Code startet ohne Grundlagen: Kann nicht beurteilen ob der Build gut ist.

---

## Relevanz für MAJER

Der WAT-Framework ist das Backbone der gesamten n8n-Workflow-Bibliothek:

| MAJER-Element | WAT-Entsprechung |
|---|---|
| `json/` n8n Workflows | W — Workflows (als n8n JSON statt Markdown) |
| Claude Code | A — Agent |
| Python Tools in `tools/` | T — Tools |

Die Newsletter-Demo zeigt exakt was mit dem MAJER-Faceless-Content-Workflow möglich ist:
- Thema angeben
- Claude recherchiert + schreibt + generiert Infografiken
- Human-Review-Schritt bleibt (HITL-Prinzip)
- Deployment über n8n auf Wochenbasis

Deployment-Target für MAJER: VPS-Server + n8n als Orchestrierung statt trigger.dev
