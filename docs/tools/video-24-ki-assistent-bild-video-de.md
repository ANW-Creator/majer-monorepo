# Video 24 — KI-Assistent für Bild- und Videogenerierung (DE)

**Video-ID:** z-C_q4LzPlA
**URL:** https://youtu.be/z-C_q4LzPlA
**Sprache:** de
**Kanal:** Julian Ivanhoff (DE-Creator)

---

## Kernthese

Claude Code als zentraler KI-Assistent für Bild- und Videogenerierung: Statt manuell zwischen Tools hin- und herzukopieren, gibt es eine Chat-Oberfläche die alle Generierungen steuert, in Airtable dokumentiert und aus Feedback lernt. Das System schlägt n8n-Workflows für diesen Use Case durch Flexibilität und Feedback-Fähigkeit.

---

## Das Problem mit bisherigen Ansätzen

**Manuell (Gemini/ChatGPT/Kai-Interface):**
- Manuelles Prompten, Bilder einfügen, Fehler korrigieren
- Hin- und Herkopieren von Prompts
- Keine strukturierte Dokumentation

**N8N-Workflows:**
- Für jeden Use Case ein eigener Workflow
- Für neue Modelle muss jeder betroffene Workflow angepasst werden
- Neue Modelle kommen jeden Monat raus
- Deterministisch — kein Feedback möglich, Neustart nötig bei Änderungen
- Kein dynamisches "ändere das noch mal"

**Claude Code mit Key.ai API:**
- Einziges System für alle Use Cases
- Feedback-Loop direkt im Chat
- Neues Modell = eine Nachricht, Claude integriert es selbst
- Automatische Dokumentation in Airtable
- Airtable-MCP als Datenbank-Brücke

---

## Tech-Stack

| Komponente | Tool | Funktion |
|---|---|---|
| Agenten-Interface | Claude Code | Steuert alles, Chat-Oberfläche |
| Bildgenerierung | Nano Banana Pro / Nano Banana 2 | Hochwertige Fotos, präziser Text |
| Videogenerierung | Kling 3.0, Sora 2 | Produktvideos, UGC-Ads |
| API-Provider | key.ai | Zugriff auf alle Modelle |
| Datenbank | Airtable (Free Plan) | Tracking aller Generierungen |
| MCP | Airtable MCP Server | Claude ↔ Airtable-Verbindung |

---

## Modell-Vergleich

### Nano Banana 2 vs. Nano Banana Pro

| | Nano Banana Pro | Nano Banana 2 |
|---|---|---|
| Qualität | Sehr gut | Noch besser |
| Auflösung | Bis 1080p | Bis 4K (API aktuell teilweise 2K) |
| Text auf Bild | Manchmal verzerrt | Präzise — jeder Buchstabe korrekt |
| Google Search | Nein | Ja (verbessert Informationsgehalt) |
| Preis | Günstig | Etwas mehr |

**Empfehlung:** Für Bilder mit Text immer Nano Banana 2.

### Kling 3.0

- Unterstützt Multishot-Funktion (verschiedene Shots aus verschiedenen Winkeln)
- Start + End Frame definierbar
- 4-10 Sekunden Clips
- Hochkant (9:16) für Social Media oder 16:9

### Sora 2 Pro

- Für UGC-Ads mit Personen die sprechen
- Dialog muss im Prompt angegeben werden

---

## Ordnerstruktur des Systems

```
Content Engine/
├── CLAUDE.md                # System-Prompt, Skills, Regeln
├── .claude/
│   └── skills/
│       ├── generate-images/skill.md   # Bildgenerierungs-Best-Practices
│       └── generate-videos/skill.md  # Videogenerierungs-Best-Practices
├── .mcp.json                # Airtable MCP Konfiguration
├── scripts/
│   └── key_client.py        # API-Client für key.ai (selbst erstellt)
├── docs/
│   └── ai-content-templates.md  # Prompt-Templates und Ideen
├── references/              # INPUT: Referenzbilder und Produktfotos
└── output/
    ├── images/              # Generierte Bilder
    └── videos/              # Generierte Videos
```

---

## Einrichtung

### Schritt 1: Airtable MCP

```
"Ich möchte dass du den Airtable MCP Server nutzt um Einträge in Airtable zu machen. 
Verbinde dich damit."
```

Claude richtet `.mcp.json` automatisch ein. Nur noch API-Key eintragen:

1. Airtable → Account → Developer → Personal Access Tokens
2. Token mit relevanten Scopes erstellen (Lesen, Schreiben)
3. Tabelle für Zugriff freigeben
4. Token in `.env` Datei eintragen

### Schritt 2: Key.ai API

1. Account bei key.ai erstellen (Pay-per-use)
2. Guthaben aufladen (Billing)
3. API Key kopieren → in `.env` eintragen

### Schritt 3: CLAUDE.md erstellen

Wesentliche Inhalte:

```markdown
# Content Engine

Du bist eine Content Engine mit folgenden Skills:
- generate-images: Bilder über key.ai generieren
- generate-videos: Videos über key.ai generieren  
- check-airtable: Status in Airtable prüfen
- check-models: Verfügbare Modelle und Preise bei key.ai prüfen

**Goldene Regel:** Niemals eine Generierung starten ohne vorher die Kosten aufzulisten.

**Standard-Modelle:**
- Bilder: Nano Banana 2
- Videos: Sora 2

**Speicherung:** Immer lokal (output/) UND in Airtable.
[Airtable Tabellen-ID: ...]
```

### Schritt 4: Skills erstellen

Claude erstellt die Skills selbst auf Anweisung:

```
"Erstelle einen Bildgenerierungs-Skill. Recherchiere Best Practices für Nano Banana 
im Internet und hinterlege sie im Skill. Erkläre auch wie man mit der key.ai API arbeitet."
```

Claude sucht im Web → erstellt `skill.md` + `key_client.py` Python-Script

---

## CLAUDE.md als Persistenz-Mechanismus

Jede neue Claude-Session startet ohne Gedächtnis. Die CLAUDE.md wird immer geladen:

- Welche Skills vorhanden sind
- Welche Modelle bevorzugt werden
- Airtable-Tabellen-IDs
- Video-Capabilities der verschiedenen Modelle
- Dass Bilder lokal gespeichert werden sollen

Claude erweitert die CLAUDE.md selbst wenn neue Modelle hinzugefügt werden.

---

## Airtable-Tracking-Struktur

Jede Generierung erhält eine Zeile:

| Feld | Inhalt |
|---|---|
| Referenzbild | Input-Bild URL oder leer |
| Prompt | Genutzter Bildprompt (Englisch) |
| Modell | Nano Banana 2, Kling 3.0 etc. |
| Bild 1 | URL oder lokaler Pfad |
| Bild 2 | Zweite Variante (immer 2 generieren) |
| Videoprompt | Bei Videos: Beschreibung |
| Video | Video URL/Pfad |
| Status | Ausstehend → Generiert |

**Warum immer 2 Varianten:** KI-Outputs sind nicht deterministisch. Bei 2 Varianten hat man Auswahl. Fehler (z.B. falsche Zahl auf Produkttext) passieren, die zweite Variante ist meist korrekt.

---

## Dynamik: Modell-Update ohne Workflow-Änderung

Nano Banana 2 erschien während des Videos. Integration:

```
"Es gibt jetzt Nano Banana 2 auf key.ai. Kannst du es bitte einbauen 
damit wir es nutzen können? In 4K bitte."
```

Claude:
1. Holt Dokumentation von key.ai API
2. Identifiziert Nano Banana 2 in der Doku
3. Baut Modell in `key_client.py` Config ein
4. 4K nicht verfügbar → eigenständig auf 2K umgestellt
5. Gibt Kostenübersicht: 2 Bilder = 0,10€

---

## Typische Prompting-Szenarien

### Produktfotografie

```
"Ich habe hier diese Uhr [Referenzbild]. 
Erstelle drei Produktfotografien:
1. Luxury Studio Shot auf edler Oberfläche, Studio Lighting
2. Model Shot: männliches Business-Model, natürliches Licht
3. Lifestyle Shot: Uhr auf Nachttisch neben Buch, ruhige Stimmung"
```

Claude:
- Analysiert Bild (Modell, Farbe, Details)
- Ruft generate-images Skill auf
- Erstellt English-Prompts für alle 3 Shots
- Zeigt Kostenübersicht vor Generierung
- Generiert jeweils 2 Varianten
- Trägt alles in Airtable ein

### Videogenerierung aus Bild

```
"Ich möchte ein Werbevideo von Reihe 9 in Airtable. 
Erstes Bild = Startframe, zweites = Endframe. 
Nutze Kling 3.0. 8 Sekunden, 9:16 Hochkant, ohne Sound."
```

Claude stellt Rückfragen:
- Sound? → Nein
- Dauer? → 8 Sekunden
- Seitenverhältnis? → 9:16

Dann: Skill aufrufen → 5W-Framework für Videoprompt → Kosten zeigen → Generieren.

### Infografik mit Text

```
"Erstelle mit Nano Banana 2 eine Infografik: 
Was passiert wenn man 30 Tage keinen Zucker isst? 
Woche für Woche mit Effekten."
```

Nano Banana 2 generiert präzisen Text ohne Verzerrungen.

### Mini-Kampagne (komplex)

```
"Erstelle eine Mini-Kampagne für [Produkt]:
- 3 hochwertige Produktfotos (Nano Banana 2)
- 2 UGC-Ads mit jungem Mann (Sora 2 Pro, 10s, Dialog inklusive)
- 2 Cinematische Produktspots (Kling 3.0, 10s, Multishot, mit Sound)"
```

Wichtig: In Plan-Mode schicken bei komplexen Anfragen → Claude erstellt Konzept → Feedback geben → dann ausführen.

---

## Zielgruppen-Relevanz (lt. Video)

**Dienstleister / Freelancer / Marketingagenturen:**
- Ein System für alle Kunden (Produkte, Styles, Formate)
- Echtes Produktshooting: 500-2000€
- KI-Generierung: Cent-Bereich
- Mehr Kunden in weniger Zeit bedienen

**Unternehmen / Eigene Brand:**
- Kein neuer Workflow pro Use Case
- Dynamisches Steuern statt starrer Automation
- Self-service: "Hier ist mein Produkt, mach daraus X"

---

## Relevanz für MAJER

| Anwendungsfall | MAJER-Kontext |
|---|---|
| Social Media Content | Faceless-Content-Pipeline für Vereins-Social-Media |
| Infografiken | Bildungsmaterial, Förderantrag-Visualisierungen |
| Event-Promotion | Kurs-Werbematerial ohne professionellen Fotograf |
| Clone Creator Flow | Moritz Herzogs System verwendet ähnliche Prinzipien |

**Key Takeaway:** Das System ist günstiger als n8n-Workflows für Bild/Video (weniger Maintenance) und flexibler durch die Chat-Oberfläche. Für MAJER direkt relevant sobald social media Content-Produktion beginnt.

**Voraussetzungen:**
- key.ai Account + Guthaben (Pay-per-use)
- Airtable Free Account
- Claude Code Pro/Max Plan
