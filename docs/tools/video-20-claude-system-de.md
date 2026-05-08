# Claude Code System aufbauen: Top 10 Skills und Plugins (Deutsch)

**Quelle:** https://youtu.be/Vx6QlEhyybQ
**Video-ID:** Vx6QlEhyybQ
**Sprache:** de
**Transkript:** .tmp/transcripts/Vx6QlEhyybQ.txt

## Kernaussage

Dieses Video stellt 10 konkrete Skills und Plugins für Claude Code vor, die über den Standard hinausgehen und echten Mehrwert liefern. Es erklärt den Unterschied zwischen einem Skill (reine Markdown-Datei mit Anweisungen) und einem Plugin (Skill + zusätzliche Referenzdateien, Scripts oder MCP-Server). Für MAJER besonders relevant sind der Obsidian-Skill für persistentes Projektwissen, Context7 für aktuelle Dokumentation, Firecrawl für Web-Scraping und das Feature Death Plugin für strukturierte App-Entwicklung.

## Hauptkonzepte und Techniken

### 1. Skills vs. Plugins: Der Grundunterschied
Ein Skill ist eine einfache Markdown-Datei mit Anweisungen — ein fest hinterlegter Prompt, den Claude bei bestimmten Aufgaben automatisch lädt. Ein Plugin ist ein Skill plus zusätzliche Komponenten: Referenzdateien (PDFs, CSV-Tabellen), Python-Scripts oder sogar MCP-Server. Beim Installieren eines Plugins werden alle diese Komponenten mitgeladen. In der Praxis können beide Begriffe austauschbar verwendet werden, solange klar ist, dass bei einem Plugin mehr als eine Datei installiert wird.

### 2. Excalidraw Diagram Skill
Claude Code kann Prozessdiagramme und Architekturübersichten direkt in Excalidraw generieren, ohne dass man manuell Boxen und Pfeile zeichnen muss. Der Skill erstellt zuerst das Diagramm, rendert es als PNG, betrachtet das Bild und korrigiert sich selbst (Überlappungen, falsche Pfeilrichtungen). Das Ergebnis kann als JSON in Excalidraw eingefügt und weiter bearbeitet werden. Besonders nützlich für: N8N-Workflow-Planung, Architektur-Reviews, Prozessdokumentation, Meeting-Visualisierungen.

### 3. Notebook LM Python Library
Die `notebooklm-py` Library gibt Claude Code programmatischen Vollzugriff auf Googles Notebook LM — kostenlos. Claude kann damit Notebooks erstellen, eine Deep Research starten, via Ask-Funktion quellenbasierte Fragen stellen, Podcasts und Infografiken generieren. Das Modell Nano Banana 2 ist nativ in Notebook LM integriert. Installation: Link zum Repository in Claude einfügen + "Installiere diesen Skill." Dann Google-Account-Login via Terminal-Command.

### 4. Remotion Skill für programmatische Videos
Remotion ermöglicht Claude Code das Erstellen echter gerenderter MP4-Videos mit Code — keine KI-Generierung, sondern vollständig programmatisch. Der Vorteil: Einzelne Stellen können gezielt angepasst werden, ohne das gesamte Video neu zu generieren. Claude erhält einfach einen Prompt, was das Video zeigen soll, und übernimmt Coding, Rendering und Export. Verfügbar auf skills.sh unter "Remotion Best Practices Skill".

### 5. Context7 für aktuelle API-Dokumentation
Context7 löst das Halluzinations-Problem bei Sprachmodellen: Claude kann veraltete API-Endpunkte generieren, weil sein Training bis zu einem bestimmten Datum geht. Context7 gibt Claude direkten Zugriff auf die aktuellen Dokumentationen von Frameworks und Tools. Empfehlung: Als CLI + Skill-Kombination nutzen (nicht als MCP-Server), weil das deutlich token-effizienter ist. Kostenlos mit niedrigen Rate Limits; mit API-Key höhere Limits.

### 6. Firecrawl für erweitertes Web-Scraping
Claudes eingebaute Webfetch-Funktion kann nur einzelne Seiten abrufen, kein JavaScript rendern und nicht über Unterseiten crawlen. Firecrawl geht deutlich weiter: ganze Websites mit allen Unterseiten, JavaScript-Rendering, sauberes Markdown oder strukturiertes JSON, Antibot-Handling. Use-Case-Beispiel aus dem Video: 100 Handwerksbetriebe im Umkreis von Hamburg finden → Firmenname, Ansprechpartner, E-Mail, Services, Standort → als Excel-Tabelle. Firecrawl hat einen Freetier mit 500 Seiten pro Monat. Als CLI + Skill nutzen, nicht als MCP-Server.

### 7. Playwright CLI für Browser-Automatisierung
Playwright ist Microsofts CLI-Alternative zur Claude Chrome Extension. Der wesentliche Unterschied: Playwright analysiert den Code der Seite und findet Buttons und Felder über IDs — keine Screenshot-basierte Steuerung. Das macht es schneller und zuverlässiger. Es läuft standardmäßig im Headless-Modus (kein sichtbarer Browser), kann aber auf sichtbaren Modus umgestellt werden. Mehrere Browser-Sessions können parallel laufen. Besonders hilfreich wenn die Claude Chrome Extension Probleme macht oder zu langsam ist.

### 8. Obsidian Plugin für persistentes Wissen
Obsidian speichert alles als Markdown-Dateien — und Claude Code arbeitet mit Markdown-Dateien. Die Verbindung ist ideal: Das Obsidian CLI gibt Claude vollen Zugriff auf alle Notizen, Ordner und Verlinkungen. Claude kann Notizen lesen, zusammenfassen, neue mit Verlinkungen erstellen, den Wissensgraphen navigieren. Damit wird Claude zu einem persönlichen Assistenten, der zwischen Sessions Kontext über den Nutzer, seine Projekte und seine Tätigkeiten behält. Das Obsidian Plugin installiert auch die Obsidian CLI und weitere Hilfs-Skills.

### 9. Feature Death Plugin (Anthropic)
Ein 7-Phasen-Framework für die strukturierte Entwicklung neuer App-Features: Discovery (Anforderungen klären) → Codebase Exploration (2–3 parallele Explorer-Agenten) → Fragen klären → Architektur-Design (2–3 Architektur-Varianten) → Implementierung → Quality Review (3 parallele Review-Agenten) → Dokumentation. Empfehlung für: komplexe Features wie Login-System, Stripe-Bezahlung, Kontaktformular, Suchfunktion. Installation: Repository-Link in Claude + "Installiere Feature Def."

### 10. Superpowers Plugin (Anthropic)
Geht über einzelne Features hinaus und deckt den gesamten Entwicklungsprozess ab. Bietet: Brainstorming-Skill für Anforderungsermittlung, testgetriebene Entwicklung (Test-first: erst Tests schreiben, dann Code schreiben bis Tests bestehen), systematisches Debugging, Subagenten-gesteuerte Entwicklung. Besonderheit: Zeigt drei Stilrichtungen visuell im Browser an (Clean/Minimal, Dark/Professional, Colorful/Friendly), bevor mit dem Bauen begonnen wird. Auf Platz 2 der meist heruntergeladenen Claude-Plugins.

### 11. CLAUDE.md Management Plugin (Anthropic)
Die CLAUDE.md-Datei wird einmal erstellt und dann oft nie wieder aktualisiert — obwohl sich Projekte weiterentwickeln. Das Plugin bietet: Audit-Funktion (prüft alle CLAUDE.md-Dateien auf Aktualität, Vollständigkeit und Kompaktheit) und Revise-Funktion (fasst Erkenntnisse aus der aktuellen Session zusammen und schlägt Updates vor, die vom Nutzer bestätigt werden müssen).

## Konkrete Schritte / Befehle / Tools

**Skills installieren (allgemeine Methode):**
```
[GitHub-Repository-Link einfügen]
Installiere diesen Skill für mich.
```
Optional: Bypass-Permissions aktivieren um schneller zu installieren.

**Skills direkt aufrufen:**
```
/[skillname]
```

**Context7 über API-Dokumentation abfragen:**
```
Wie nutze ich die Stripe API um eine Checkout Session zu erstellen?
```
→ Context7 CLI holt automatisch die aktuelle Stripe-Dokumentation

**Firecrawl Beispiel:**
```
Suche mit Firecrawl nach 100 Handwerksbetrieben im Umkreis von Hamburg
und extrahiere von jeder Seite Firmenname, Ansprechpartner, E-Mailadresse,
angebotene Services und Standort. Gib mir das als Excel zurück.
```

**Playwright testen:**
```
Nutze Playwright und erstelle zehn Todos für den Haushalt und hake sie
nacheinander ab. Zeige den Browser an.
```

**Notebook LM nutzen:**
```
Erstelle ein neues Notebook namens [Name] und lass Notebook LM die
Top 10 YouTube Videos zu [Thema] recherchieren und analysieren.
Erstelle anschließend einen Podcast und eine Infografik.
```

**Remotion Video erstellen:**
```
In meinem Video brauche ich für folgende Stelle eine Remotion Animation:
[Stelle + Kontext]
```

**CLAUDE.md auditieren:**
```
Prüfe alle meine CLAUDE.md-Dateien — sind sie noch aktuell?
```

**Tools und Ressourcen:**
- skills.sh — zentrale Plattform für Claude Skills und Plugins
- Excalidraw (kostenlos) — whiteboard.excalidraw.com
- Notebook LM (kostenlos) — notebooklm.google.com
- Context7 (kostenlos mit Account) — context7.com
- Firecrawl (500 Seiten/Monat kostenlos) — firecrawl.dev
- Playwright (Microsoft, kostenlos) — playwright.dev
- Obsidian (kostenlos) — obsidian.md

## Relevanz für MAJER

Der Obsidian-Skill ist direkt nutzbar für MAJER: Alle Projektnotizen, Kursentwicklung, Community-Feedbacks und Sitzungserkenntnisse können in Obsidian gepflegt werden, sodass Claude bei jedem Projekt-Start sofort Kontext hat. Context7 ist unverzichtbar wenn mit Next.js 15, Pocketbase und anderen sich schnell entwickelnden Frameworks gearbeitet wird — keine veralteten API-Calls mehr. Der Feature Death Plugin eignet sich perfekt für die geplanten MAJER-Features (Mitgliedsantrag-Formular, Lernpfad-System, Persona-Switch). Firecrawl kann in die Content-Pipeline eingebaut werden, um KI-Trends und relevante Bildungsinhalte automatisch zu recherchieren. Das Remotion-Skill ist interessant für die Video-Creation-Infrastruktur — programmatisch erstellte Intro/Outro-Animationen für YouTube ohne KI-Video-Generierung.

## Direkte Zitate

> "Was agentische Systeme wie Claude Code so stark macht, ist genau das: Du gibst dem Agenten nicht nur einen Prompt und sagst einfach 'hier mach mal', sondern du gibst ihm Zugang zu Informationen in Form von Textdateien, die er je nach Situation automatisch dazu lädt."

> "Damit ist nicht so, dass wenn wir jetzt hier einen neuen Chat in Claude Code starten, dass wir komplett bei null anfangen — ich kann jetzt hier einfach mit ihm schreiben und je nach Situation kann er dann auf meine Obsidian-Vaults zugreifen, auf Kontext über mich zugreifen und daraufhin seine Antwort generieren."

> "Mit der testgetriebenen Entwicklung dreht Superpowers das um: Claude beschreibt zuerst, was der Code am Ende können soll, also quasi die Anforderungen als automatischen Test — und dann schreibt Claude den Code so lange, bis er den Test besteht."

> "Ich würde dir immer empfehlen, so ein CLI-Tool und auch einen Skill dann dazu zu nutzen, wenn es verfügbar ist, denn diese sind deutlich token-effizienter als MCP-Server."

> "Das ist der Punkt, wo Claude Code dann wirklich zu einem persönlichen Assistenten wird, weil er jetzt nicht mehr im Vakuum arbeitet, sondern auf dein gesammeltes Wissen zugreifen kann."
