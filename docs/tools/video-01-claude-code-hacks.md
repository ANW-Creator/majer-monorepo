# Claude Code Hacks: Beginner bis Advanced

**Quelle:** https://youtu.be/jqoFP9QapXI
**Video-ID:** jqoFP9QapXI
**Sprache:** en
**Transkript:** .tmp/transcripts/jqoFP9QapXI.txt

## Kernaussage

Nate Herk zeigt 32 praxiserprobte Claude Code Hacks, geordnet von Einsteiger bis Power-User. Das Video liefert ein vollständiges Betriebshandbuch: Kontextmanagement, parallele Sessions, Kosten-Optimierung, autonome Agents und erweiterte MCP-Nutzung. Für MAJER relevant als kompakte Referenz für alle, die Claude Code produktiv einsetzen wollen, ohne teure Fehler zu wiederholen.

## Hauptkonzepte und Techniken

### 1. /init auf jedem Projekt ausführen
`/init` scannt die gesamte Codebasis und generiert automatisch eine `claude.md`-Datei — die "Cheat Sheet" des Projekts. Sie mappt Architektur, Konventionen und Schlüssel-Dateien, sodass Claude bei jeder neuen Session sofort Kontext hat. Bei Neuprojekten wird die `claude.md` durch ein Gespräch über Ziel, Stack und Regeln erstellt.

### 2. Kontextmanagement: /context, /compact, /clear
- `/context` zeigt Token-Verteilung nach Kategorie (System Prompt, Dateien, MCP-Server) in Prozentzahlen
- Bei 60% Kontext-Auslastung `/compact` aufrufen — gezielt Informationen erhalten: `/compact, aber behalte alle API-Integrationsentscheidungen und das Datenbankschema`
- `/clear` für kompletten Neustart bei Taskwechsel, ohne wichtige Dateien zu verlieren

### 3. Plan Mode als Standardeinstieg
Shift+Tab oder manueller Wechsel in den Plan Mode: Claude liest und recherchiert, ändert aber nichts. Es formuliert Schritte, stellt Rückfragen und plant den Ansatz vor der ersten Codezeile. Der Creator: "This alone will dramatically reduce how many times you have to go back and correct Claude."

### 4. Claude wie einen Junior Developer behandeln
Nicht "Schreib eine Funktion, die X tut", sondern "Wie sollten wir Growth Tracking implementieren?" — Claude denkt den Ansatz durch, erklärt Annahmen, und produziert nachweislich bessere Outputs wenn es zuerst selbst reasons.

### 5. Claude zum Fragenstellen bringen
In den Prompt einbauen: "Stelle mir kontinuierlich Fragen bis du zu 95% sicher bist, dass du verstehst, was ich brauche." Verhindert mehrere Revisions-Runden, weil Missverständnisse am Anfang statt am Ende aufgedeckt werden.

### 6. Selbst-Checks in To-do-Listen einbauen
To-do-Struktur: 1. Website bauen. 2. Screenshot nehmen und Layout prüfen. 3. Chrome DevTools öffnen und Fehler checken. Dazu die Anweisung: "Geh nicht zum nächsten To-do weiter, bis du zu 95% sicher bist, dass das aktuelle gut ist." Macht Claude vom passiven Coder zum aktiven QA-Partner.

### 7. Sub-Agents für parallele Arbeit
Hauptsession spinnt isolierte Sub-Agents mit eigenem Kontextfenster. Jeder Agent kann ein anderes Modell nutzen (z.B. Haiku für Datenscraping, Opus für den Hauptthread). Sub-Agents recherchieren, schreiben Tests, oder erkunden verschiedene Ansätze — danach berichten alle an den Hauptagenten.

### 8. Custom Skills im .claude/skills-Verzeichnis
Wiederverwendbare Prompt-Dateien: `techdebt.md`, `codereview.md` etc. Aufruf per Natural Language oder Slash-Command. Skills können in GitHub committet werden — das gesamte Team nutzt sie sofort. "You can automate your actual SOPs."

### 9. claude.md zwischen 150–200 Zeilen halten
Die `claude.md` ist ein System Prompt, der bei jeder Session geladen wird. Zu groß = Token-Bloat. Maximum 150–200 Zeilen. Überschuss auslagern: `claude.md` zeigt nur Verweise auf Stil-Guides, Business-Kontext, Referenz-Docs. Claude weiß, wo es suchen muss, ohne alles ständig im Kontext zu haben.

### 10. Frühzeitig unterbrechen und umlenken
Wenn Claude den falschen Weg einschlägt: Escape drücken, korrigieren, neu prompten. Jeder Token auf dem falschen Pfad ist verschwendeter Kontext. "Steer tight and steer early."

### 11. Git Worktrees für parallele Sessions
`claude --worktree [feature-name]` erstellt einen isolierten Workspace auf einem eigenen Branch. Mehrere Terminals = mehrere parallele Claude-Sessions an derselben Codebasis ohne Konflikte. Branches am Ende normal mergen.

### 12. /loop für wiederkehrende Tasks
`/loop` mit Intervall: Claude prüft automatisch z.B. alle 5 Minuten den Deployment-Status, Error-Logs oder PR-Status. Läuft im Hintergrund und unterbricht nur wenn nötig. Loops laufen bis zu 3 Tage; für langfristige Schedules Desktop Scheduled Tasks nutzen.

### 13. VPS für Always-On Sessions
Claude Code auf Remote-Server: läuft auch wenn Laptop geschlossen ist. SSH-Zugang jederzeit. Steuerung via Telegram möglich. Ideal für langläufige Tasks ohne lokales Babysitting.

### 14. Permissions für sichere Autonomie konfigurieren
Statt `--dangerously-skip-permissions` besser: explizit sichere Befehle in die Allow-Liste, destruktive Operationen (delete, remove) in die Deny-Liste. Deny-Liste hat immer Vorrang vor Allow-Liste. Gleiche Geschwindigkeit wie Dangerously-Modus, aber ohne Risiko.

### 15. Agent Teams (vs. Sub-Agents)
Sub-Agents: parallel, kein gegenseitiger Austausch. Agent Teams: alle Agents können miteinander kommunizieren, teilen eine Task-Liste, können sich gegenseitig Aufgaben zuweisen, und man kann jeden einzelnen Agent direkt ansprechen. Teurer und länger, aber kohärenterer Output bei großen Projekten.

### 16. Context 7 MCP
`npm install @context7/mcp` — liefert versionsspezifische, aktuelle Dokumentation von tausenden Libraries (Next.js, React, MongoDB etc.) direkt in den Claude-Kontext. Verhindert veraltete API-Vorschläge nach dem Trainingsdaten-Cutoff. "It's basically one command to install and from there, all of your coding agents are working with much more up-to-date information."

### 17. Ultra Think für komplexe Entscheidungen
Das Keyword "ultra think" im Prompt aktiviert das maximale Thinking-Budget (~32.000 Tokens) vor der Antwort. Nicht für einfache Fixes — aber für Architekturentscheidungen, schwieriges Debugging, große Refactors oder wenn Claude nach mehreren Versuchen nicht das Richtige liefert.

### 18. Screenshots und Chrome DevTools
Claude kann visuell sehen. Screenshot-Loop: Design bauen → Screenshot → Analyse → Änderungen → Screenshot — 3 Passes vor V1. Chrome DevTools: Buttons, Formulare, Funktionalität automatisiert testen. Inspiration-Sites screenshotten und als Design-Vorlage übergeben.

## Konkrete Schritte / Befehle / Tools

| Hack | Befehl / Methode |
|---|---|
| Projekt initialisieren | `/init` |
| Token-Verteilung prüfen | `/context` |
| Kontext komprimieren | `/compact [optional: Anweisung was behalten bleibt]` |
| Kontext löschen | `/clear` |
| Plan Mode | `Shift+Tab` oder manuell |
| Status-Dashboard | `/status` (Modell, Version, Account) |
| Kosten einsehen | `/cost` |
| Rückgängig machen | `/rewind` |
| Notifications bei Fertigstellung | `/hooks` → Notification Hook einrichten |
| Parallele Sessions | `claude --worktree [feature-name]` |
| Wiederkehrende Tasks | `/loop [Intervall] [Task]` |
| Docs-Freshness | Context 7 MCP installieren |
| Custom Skill anlegen | `.claude/skills/[name].md` erstellen |

## Relevanz für MAJER

- Die `claude.md`-Strategie (max. 150–200 Zeilen + Verweise auf Unterfiles) ist das Vorbild für MAJERs CLAUDE.md-Struktur, die bereits analog aufgebaut ist.
- Sub-Agents und Agent Teams sind relevant für die geplante Content-Pipeline: parallel Ideation, Scripting und Asset-Erstellung.
- `/hooks` für Notifications und `/loop` für Monitoring sind direkt verwendbar im MAJER-Stack für Deployment-Überwachung und n8n-Trigger-Tests.
- Die Permissions-Konfiguration (Allow/Deny-Liste statt Dangerously-Modus) ist HITL-kompatibel und entspricht dem system-building.md-Prinzip.
- Context 7 MCP ist empfehlenswert für Next.js 15 und Pocketbase — beide haben regelmäßige API-Änderungen.

## Direkte Zitate (die wichtigsten 3-5)

> "This alone will dramatically reduce how many times that you have to go back and correct Cloud."
(über Plan Mode)

> "You can automate your actual SOPs."
(über Custom Skills)

> "Steer tight and steer early."
(über frühzeitiges Unterbrechen falscher Claude-Pfade)

> "The less noise in the context window, the better Cloud performs. It's simple, but a lot of people ignore this."

> "Anything in the deny list is going to take priority over anything in the allow list."
(über Permission-Konfiguration)
