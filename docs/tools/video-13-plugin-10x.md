# Claude Code Plugin: Das Superpowers-Framework das Claude Code 10x stärker macht

**Quelle:** https://youtu.be/4XqVR6xI6Kw
**Video-ID:** 4XqVR6xI6Kw
**Sprache:** en
**Transkript:** .tmp/transcripts/4XqVR6xI6Kw.txt

## Kernaussage

Das Superpowers-Plugin von Jesse Vincent installiert ein strukturiertes Phasen-System in Claude Code, das statt sofort loszu-coden zuerst klärt, entwirft, plant, implementiert und verifiziert. Eine experimentelle Studie (12 Runs) zeigte 9% Kostenersparnis und 14% weniger Token-Verbrauch bei mittleren bis komplexen Aufgaben — bei gleichzeitig deutlich besserer Code-Qualität. Für MAJER relevant als Referenz-Methodik für alle komplexeren Automatisierungs- und Entwicklungs-Aufgaben im Stack.

## Hauptkonzepte und Techniken

### Das Dispatcher-Konzept: using-superpowers als Master-Skill

Der zentrale Mechanismus ist ein Orchestrator-Skill namens "using superpowers", der bei jeder Konversation als erstes ausgeführt wird. Er analysiert die Anfrage und entscheidet automatisch, welche der 14 Sub-Skills relevant sind. Es ist ein "set it and forget it"-System — nach Installation läuft alles im Hintergrund ohne manuellen Eingriff.

### Die 5 Phasen: Clarify → Design → Plan → Code → Verify

Statt sofort Code zu schreiben durchläuft Superpowers immer alle relevanten Phasen:
- **Clarify**: Gezielte Rückfragen um Lücken im Prompt aufzudecken
- **Design**: Brainstorming mit visuellem Companion (Localhost-Dashboard)
- **Plan**: Hyperdetaillierte Implementierungspläne mit exakten Dateipfaden, 2-5 Minuten pro Task
- **Code**: Execution mit Sub-Agenten und Task-by-Task Safety Stops
- **Verify**: Test-Driven Development und Verification before Completion

### Visueller Companion: Entscheidungen vor dem Coden

Eine der auffälligsten Features ist, dass Superpowers einen Localhost-Server hochfährt und Optionen visuell präsentiert — z.B. drei verschiedene UI-Konzepte mit Vor- und Nachteilen. Der User klickt eine Option, Claude sieht die Auswahl und arbeitet weiter. Das verhindert, dass Claude Token verbrennt für etwas, das der User gar nicht wollte.

### Sub-Agenten und parallele Ausführung

Wenn Superpowers erkennt, dass unabhängige Probleme existieren, die nicht sequenziell abgearbeitet werden müssen, werden automatisch parallele Sub-Agenten gestartet. Jeder Sub-Agent bekommt eine eigene, isolierte Aufgabe und liefert sein Ergebnis zurück.

### Test-Driven Development (TDD) als Quality Gate

Der TDD-Skill erzwingt folgenden Ablauf: erst den Test schreiben, ihn scheitern lassen, dann minimalen Code schreiben damit der Test besteht. Das schließt Implementierungslücken systematisch.

### Systematisches Debugging in 4 Phasen

Bei Fehlern folgt Superpowers einem strukturierten Ansatz: Root Cause Investigation → Problem Analysis → Hypothesis Formation → Fix Implementation. Kein Raten, kein Workaround ohne Ursachenanalyse.

### Meta-Skill: Writing Skills

Ein besonderer Skill lehrt Claude, wie man neue Superpowers-Skills erstellt. Das erlaubt es, das gesamte System zu erweitern und auf eigene Projekte anzupassen — z.B. eigene Quality Gates oder projekt-spezifische Workflows.

### Token-Effizienz bei komplexen Tasks

Die wichtigste Erkenntnis aus dem 12-Run-Experiment: Superpowers verbraucht bei einfachen Tasks leicht mehr Token (+8%), aber bei mittleren und komplexen Tasks spart es Token, weil teure Retry-Loops verhindert werden. Die Varianz im Token-Verbrauch war ohne Superpowers 2-3x höher.

### Installation in einem Befehl

```bash
# Installation über Claude Code Marketplace (einmalig, global)
# Im Claude Code Terminal eingeben:
/plugins install superpowers
```
Empfehlung: Global auf User-Ebene installieren, nicht per-project.

## Konkrete Schritte / Befehle / Tools

- **Installation**: `/plugins install superpowers` im Claude Code Terminal
- **Globale Installation**: Beim Setup "user level" wählen, nicht "project level"
- **Optionale Aktivierung**: Am Ende eines Prompts "make sure you're using any of the superpower skills that might be relevant here" hinzufügen
- **Nicht aktivieren bei einfachen Tasks**: Bei trivialen Anfragen lohnt sich der 8% Overhead nicht
- **GitHub Repository**: Vom Creator Jesse Vincent (Open Source, kostenlos)

## Relevanz für MAJER

Das Superpowers-Framework löst ein konkretes Problem im MAJER-Stack: Claude Code neigt bei komplexen Multi-File-Tasks zu sofortigem Implementieren ohne ausreichend Klarstellung. Für die Entwicklung von `apps/verein` und `apps/nova` — besonders bei der Pocketbase-Schema-Integration und dem n8n-Workflow-Aufbau — würde die Clarify-Phase allein schon viele Korrekturschleifen einsparen. Das TDD-Prinzip deckt sich direkt mit den Qualitätsanforderungen in den System-Building-Principles des Monorepos ("Slop und eingeschlichene Fehler werden nicht toleriert"). Die parallele Sub-Agenten-Funktion ist für zukünftige komplexere Aufgaben wie das Deployment-System relevant.

## Direkte Zitate

> "Think of this like hiring a developer who does proper discovery before touching anything and building anything versus one who just takes your request and just starts writing code immediately."

> "The value isn't in the extra steps, it's in preventing expensive retries and backtracking."

> "The without superpowers runs had two to three times the variance in token usage, while the with superpowers runs were much tighter."

> "Superpowers is with you all the way through. Ultra plan just helps you with the planning — but then if you do ultra plan then it's basically just you're on your own again once you start implementing that plan."

> "It creates hyperdetailed implementation plans where every task gets about 2 to 5 minutes of work with exact file paths."
