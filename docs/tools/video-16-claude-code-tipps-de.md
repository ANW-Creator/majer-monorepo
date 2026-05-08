# Claude Code Tricks und Best Practices: 20 Tipps für bessere Ergebnisse

**Quelle:** https://youtu.be/AwKjofI03Ms
**Video-ID:** AwKjofI03Ms
**Sprache:** de
**Transkript:** .tmp/transcripts/AwKjofI03Ms.txt

## Kernaussage

20 konkrete Tricks für effizientere Arbeit mit Claude Code — von einfachen Prompting-Gewohnheiten bis zu fortgeschrittenen Kontext- und Agenten-Techniken. Die meisten Tipps sind keine komplizierten Features, sondern Arbeitsweisen, die Token sparen, Korrekturschleifen reduzieren und die Ausgabequalität erhöhen. Besonders relevant für das MAJER-Monorepo: Kontext-Management (CLAUDE.md-Pflege, /compact, Worktrees), Modellauswahl nach Aufgabentyp und der Einsatz von Custom Skills für wiederkehrende Aufgaben.

## Hauptkonzepte und Techniken

### Tipp 1: Planmodus als Iterationsraum

Im Planmodus darf Claude nur lesen und analysieren, nichts ändern. Der Wert liegt nicht nur im fertigen Plan — sondern im iterativen Austausch davor. Feedback geben, Claude passt an, erneut Feedback, bis der Plan exakt das abbildet, was im Kopf ist. Erst dann umschalten und bauen lassen. Sinnvoll bei: Projektstart und größeren Änderungen an bestehenden Apps.

### Tipp 2: Rückfragen vor dem Bauen erzwingen

Prompt-Zusatz: "Stell mir Rückfragen, bis du dir absolut sicher bist, was ich will, und fang erst dann an." Claude rennt nicht sofort los, sondern stellt gezielte Fragen zu Farben, Inhalten, Sonderfällen, Layout-Entscheidungen. Spart viele Korrekturschleifen bei größeren Features.

### Tipp 3: Diskutieren statt Kommandieren

Statt fertige Lösungen vorzugeben: das Problem beschreiben und Claude einen Teil der Denkarbeit überlassen. Beispiel: Nicht "Bau mir ein Kontaktformular mit Name, E-Mail und Telefon", sondern "Wie sollte ein Kontaktformular aussehen, damit möglichst viele Leute es ausfüllen?" Claude liefert dann 2-3 Optionen mit Vergleich, weist auf Stolperfallen hin und macht eine Empfehlung.

### Tipp 4: Auto-Accept-Modus + permissions.json

Auto-Accept als Standardmodus: Claude fragt nicht bei jeder Aktion nach, handelt aber bei riskanten Aktionen (Dateien löschen etc.) trotzdem vor. Für mehr Kontrolle: `permissions.json` anlegen, die definiert, welche Befehle erlaubt sind und welche Dateien nicht geöffnet werden dürfen (z.B. `.env`-Datei).

### Tipp 5: Voice Input statt Tippen

Gesprochene Prompts sind schneller und kommunizieren mehr Kontext. Optionen: `/voice`-Befehl im Terminal (einmalig aktivieren), Diktat-Button in der Claude Desktop App, oder systemweites Tool wie Whisperflow (Mac/Windows, mehrsprachig).

### Tipp 6: /init für schnelles Projekt-Onboarding

`/init` scannt den gesamten Projektordner, erkennt Struktur, Dateien und Konventionen und legt automatisch eine `CLAUDE.md` an. Diese wird bei jeder Session geladen — Claude kennt das Projekt sofort, ohne alles neu lesen zu müssen.

### Tipp 7: CLAUDE.md aktiv pflegen

Alles was Claude wiederholt falsch macht gehört als Regel rein. Alles was projektspezifisch ist gehört als Hinweis rein. Faustregel: unter 200 Zeilen halten. Bei zu langen Dateien: Teile auslagern und in der CLAUDE.md nur referenzieren — Claude liest die ausgelagerten Dateien dann nur bei Bedarf.

### Tipp 8: Escape-Taste als Notbremse und Rewind

- Einmal Escape: Stoppt die aktuelle Antwort sofort, Prompt neu formulieren
- Zweimal Escape: Rollt Claude zum letzten Stand zurück (Claude legt vor jeder Dateiänderung automatisch einen Snapshot an)

### Tipp 9: File Mentions mit @ als Shortcut

Mit `@dateiname` im Chat eine Datei direkt referenzieren — Claude bekommt den vollständigen Pfad und kann die Datei sofort auslesen ohne selbst suchen zu müssen.

### Tipp 10: Screenshots und Bilder als Erklärung

Für Design-Aufgaben: Screenshot einer Website einfügen + "Bau mir das nach, aber mit meinen Farben und für mein Produkt." Claude kennt Design-Patterns, Layout-Logik und visuelle Hierarchie und überträgt sie auf den eigenen Kontext.

### Tipp 11: Self-Check in die To-Do-Liste einbauen

Claude kann angewiesen werden, Verifikationsschritte direkt in seine eigene To-Do-Liste einzubauen: nach jeder Umsetzung erst prüfen ob das Ergebnis passt, dann erst zum nächsten Punkt weitergehen.

### Tipp 12: Eine Aufgabe pro Session

Je länger eine Session, desto mehr Kontext lädt Claude — auch irrelevanter alter Kontext. Neue, unabhängige Aufgabe = neuer Chat. Claude startet mit frischem Kontextfenster und liefert bessere Ergebnisse.

### Tipp 13: /context für Kontext-Analyse

`/context` zeigt aufgeschlüsselt, was das Kontextfenster belegt: Memory, CLAUDE.md, geladene Dateien, MCP-Server, laufende Konversation. Damit lässt sich gezielt Platz freimachen, z.B. durch Entfernen ungenutzter MCP-Server.

### Tipp 14: /compact und /clear für Kontext-Management

- `/compact`: Erstellt eine komprimierte Zusammenfassung der bisherigen Konversation, schmeißt Details raus, behält die Grundessenz. Mit Fokus-Angabe: `/compact: behalte alle Entscheidungen zum Layout und meine Brandfarben`. Empfehlung: bei ca. 70% Kontext-Auslastung nutzen.
- `/clear`: Leert das gesamte Kontextfenster für einen kompletten Neustart.
- **Kontext-Rot**: Das Phänomen, dass Claude bei vollem Kontextfenster schlechtere Ergebnisse liefert, weil bestimmte Infos "im Kontext verloren gehen".

### Tipp 15: Custom Skills für wiederkehrende Aufgaben

Ein Skill ist eine Markdown-Datei mit kurzem Header (was der Skill macht) und ausführlicher Anleitung darunter. Wenn Claude eine passende Aufgabe erhält, liest er den Skill automatisch. Beispiel: LinkedIn-Post-Skill mit Sprachstil-Regeln — Claude schreibt Posts ohne erneute Erklärung des Stils.

### Tipp 16: Modelle nach Aufgabentyp wählen

- **Haiku**: Einfache Aufgaben (E-Mail schreiben, Texte formatieren)
- **Sonnet**: Alltägliche Entwicklungsaufgaben
- **Opus 4.7**: Nur für wirklich schwierige Aufgaben (komplexe Architekturentscheidungen, schwer zu findende Bugs)

Wer immer Opus nutzt, erreicht sein Tageslimit innerhalb einer Stunde.

### Tipp 17: Hooks für Benachrichtigungen

Hooks sind kleine Skripte, die an festgelegten Punkten im Claude-Workflow automatisch ausgeführt werden (wenn Claude stoppt, eine Datei bearbeitet, ein Tool nutzt). Anwendungsfall: Notification-Sound wenn Claude fertig ist — kein unnötiges Warten mehr beim Multi-Tab-Arbeiten.

### Tipp 18: Sub-Agenten und Agent Teams

- **Sub-Agenten**: Temporäre Agenten mit eigenem Kontextfenster für token-intensive Aufgaben (z.B. umfangreiche Recherche). Ergebnisse gehen zurück an den Hauptagenten, der sein Kontextfenster schont. Eigene Sub-Agenten erstellen: `/agents`
- **Agent Teams**: Mehrere Claude Code Instanzen, die untereinander kommunizieren (Sub-Agenten können das nicht — die sprechen nur mit dem Hauptagenten). Aktivierung über Environment-Variable auf 1 setzen. Höherer Token-Verbrauch, für sehr große Aufgaben sinnvoll.

### Tipp 19: Ultrathink für harte Probleme

Das Schlüsselwort `ultrathink` im Prompt gibt Claude ca. 32.000 Tokens nur fürs Nachdenken bevor eine Antwort generiert wird. Für: komplexe Architekturentscheidungen, schwer zu findende Bugs, Situationen wo Claude wiederholt das falsche Ergebnis liefert. Reasoning Effort generell bei komplexen Aufgaben hochstellen.

### Tipp 20: Worktrees für parallele Entwicklung

Voraussetzung: Git-Repository. Ein Worktree ist eine Arbeitskopie des Projekts in einem anderen Ordner, mit derselben Git-Historie. Erlaubt, mehrere Claude Code Sessions gleichzeitig auf demselben Projekt laufen zu lassen ohne Konflikte. In der Desktop App: 4 Terminals gleichzeitig, 4 parallele Features. Zusammenführen: Claude einfach sagen "merge den Worktree zurück".

## Konkrete Schritte / Befehle / Tools

| Befehl / Tool | Zweck |
|---|---|
| `/init` | CLAUDE.md aus aktuellem Projekt generieren |
| `/context` | Kontext-Auslastung analysieren |
| `/compact [Fokus]` | Konversation komprimieren, Fokus behalten |
| `/clear` | Gesamten Kontext leeren |
| `/voice` | Voice Input im Terminal aktivieren |
| `/agents` | Eigene Sub-Agenten erstellen |
| `@dateiname` | Datei direkt im Chat referenzieren |
| `ultrathink` | Maximales Reasoning Budget aktivieren |
| Escape (1x) | Aktuelle Antwort stoppen |
| Escape (2x) | Zum letzten Snapshot zurückrollen |
| Whisperflow | Systemweiter Voice Input (Mac/Windows) |

## Relevanz für MAJER

Mehrere Tipps sind direkt auf den MAJER-Stack anwendbar. Der /compact-Rhythmus bei 70% Auslastung ist wichtig für lange Entwicklungs-Sessions an `apps/verein`. Modellauswahl-Disziplin (Haiku/Sonnet/Opus) verlängert das verfügbare Kontingent erheblich. Custom Skills sind der Mechanismus, mit dem das bestehende Skill-System in `~/.claude/skills/majer-tech-architect/SKILL.md` funktioniert — weitere Skills für Content-Erstellung oder Pocketbase-Operationen wären analog anzulegen. Worktrees lösen das konkrete Problem, parallel am Frontend und am Backend des Monorepos zu arbeiten. Der Hook-Tipp für Benachrichtigungen ist für längere Deployments relevant.

## Direkte Zitate

> "Du sollst Claude weniger wie eine Maschine behandeln, der du fertige Aufträge hinwirfst, und mehr wie einen erfahrenen Sparringspartner, der mitdenken soll."

> "Stell mir Rückfragen, bis du dir absolut sicher bist, was ich will und fang erst dann an."

> "Das Kontextfenster ist praktisch das Kurzzeitgedächtnis und du kannst dir auch nicht 100.000 Sachen gleichzeitig merken."

> "Wenn du die ganze Zeit Opus 4.7 nutzt für jede Aufgabe, dann wirst du innerhalb von einer Stunde sofort auf deinen Tageslimit kommen."

> "Ein Worktree ist im Grunde genommen einfach nur eine Arbeitskopie deines Projekts in einem anderen Ordner, aber mit derselben Git-Historie im Hintergrund."
