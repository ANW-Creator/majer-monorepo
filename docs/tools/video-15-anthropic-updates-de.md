# Anthropic Updates: Claude Design — das neue KI-Designtool im Überblick

**Quelle:** https://youtu.be/dfJcMc8bfXI
**Video-ID:** dfJcMc8bfXI
**Sprache:** de
**Transkript:** .tmp/transcripts/dfJcMc8bfXI.txt

## Kernaussage

Anthropic hat Claude Design veröffentlicht, ein browserbasiertes Designtool, mit dem man Web Apps, Landing Pages, Mobile Mockups und Pitch Decks per Prompt erstellen kann. Das Tool läuft auf Claude Opus 4.7, ist im Research Preview und erfordert einen bezahlten Plan. Der entscheidende Unterschied zu Alternativen wie Google Stitch: Claude Design stellt vor dem Generieren detaillierte Rückfragen und vermeidet dadurch falsche Annahmen. Der fertige Output lässt sich direkt an Claude Code übergeben — das schließt einen wichtigen Workflow-Gap zwischen Design und Implementierung.

## Hauptkonzepte und Techniken

### Claude Design: Positionierung im Markt

Das Tool trifft Figma, Adobe und Wix direkt im Kerngeschäft. Es ist unter claude.ai/design erreichbar und bietet vier Einstiegspunkte: Prototyp neu starten, Slide Deck erstellen, aus Template starten oder komplett bei null beginnen. Das Modell im Hintergrund ist Claude Opus 4.7.

### Designsystem-Erstellung als erster Schritt

Beim Onboarding empfiehlt sich die Designsystem-Funktion: Markennamen eingeben, ein GitHub-Repository verknüpfen oder Code direkt hochladen, Fonts und Logos hochladen, optionale Notizen hinzufügen. Claude analysiert dann den Frontend-Code und extrahiert automatisch Farben, Komponenten und Designsprache. Alles was danach erstellt wird, nutzt automatisch dieses Designsystem.

### Zwei Prototyp-Modi: Wireframe und High Fidelity

- **Wireframe**: Skizzenhaft, für frühe Ideenphase geeignet
- **High Fidelity**: Professionelles, fertiges Design direkt aus dem ersten Run

### Rückfragen als Kernmerkmal

Claude Design stellt vor der Generierung eine umfangreiche Liste gezielter Fragen — deutlich mehr als konkurrierende Tools. Im Transkript-Beispiel (interaktives neuronales Netz) wurden abgefragt: Zweck der Visualisierung, Netzwerkarchitektur, Anzahl Layer und Neuronen, Datenfluss-Darstellung, Ästhetik, Farbakzent, interaktive Features, Slider-Controls, Spracheinstellung, Layout-Orientierung. Das deckt Lücken im initialen Prompt auf und verhindert falsche Annahmen.

### Interaktive Bearbeitung nach der Generierung

Nach der ersten Generierung stehen mehrere Bearbeitungswege zur Verfügung:
- **Tweaks-Panel**: Farbe, Transparenz von Kanten, Neuronengröße direkt per Schieberegler
- **Edit-Bereich**: Hintergrundfarbe, Schriftart, Schriftgröße
- **Direkt-Zeichnen**: Mit einem Stift direkt auf dem Canvas zeichnen, Boxen und Kreise einzeichnen, dann eine Notiz erstellen — Claude macht automatisch einen Screenshot und setzt die Änderungen um
- **Kommentare**: Einzelne Elemente auswählen, direkt kommentieren

### Export-Optionen und Claude Code Integration

Über den "Share"-Button stehen folgende Exports zur Verfügung:
- ZIP-Datei herunterladen
- Als PDF oder PowerPoint exportieren
- Zu Canva senden
- Als reine HTML-Seite exportieren
- **Direkt an Claude Code übergeben** — dabei wird ein fertiger Prompt generiert, der den Link zur HTML-Seite enthält und Claude Code sofort die Implementierung starten lässt

### Code-Basis: HTML

Claude Design erstellt primär HTML-Seiten. Claude ist mit HTML sehr vertraut, was die Qualität und Zuverlässigkeit der Outputs erklärt.

### Zugangsvoraussetzungen

- Pro Plan, Max Plan, Team oder Enterprise erforderlich
- Research Preview: Funktionsumfang noch nicht final
- Zugang via: claude.ai/design

## Konkrete Schritte / Befehle / Tools

1. claude.ai/design aufrufen
2. Designsystem erstellen: Markennamen + GitHub-Repo oder Code + Assets hochladen
3. Prototyp starten: Wireframe für frühe Phase, High Fidelity für fertiges Design
4. Prompt eingeben und explizit Rückfragen anfordern: "Stell mir Rückfragen, damit du genau weißt was ich mir vorstelle"
5. Alle Rückfragen beantworten, dann "Continue"
6. Nach Generierung: Tweaks-Panel für Feintuning nutzen
7. Export via "Share" → "An Claude Code geben" für direkte Implementierung

## Relevanz für MAJER

Claude Design ist für MAJER in zwei konkreten Kontexten relevant. Erstens für die Entwicklung der `apps/verein`-Website: Statt direkt in Next.js/Tailwind zu coden, kann das Persona-Design (Schüler/Student/Lehrer/Förderer mit den vier Akzentfarben blue-500/violet-500/teal-500/amber-500) zuerst in Claude Design prototypisiert werden. Der Export-Pfad "→ Claude Code" schließt dann den Loop zur Implementierung. Zweitens für Pitch Decks und Slide Decks bei Förderanträgen und Vereins-Präsentationen — ein konkreter Effizienzgewinn gegenüber manuellem Erstellen in PowerPoint oder Canva.

## Direkte Zitate

> "Das erinnert mich an den Planmodus von Claude Code, wo er erstmal ein paar Rückfragen vielleicht stellt, aber hier fragt er wirklich sehr viele Sachen ab und es macht ja auch total Sinn, dass er so viele Fragen stellt, denn genau das deckt ja die Lücken in deinem Prompt auf und sorgt dafür, dass er einfach keine falschen Annahmen stellt und dann schon losprogrammiert."

> "Das finde ich mega cool. Das heißt, angenommen, du hast irgendein Projekt, an dem du lokal sitzt und du möchtest gerne das Design von dieser App verbessern, dann kannst du hier mit Claude Design arbeiten, kannst das ganze Frontend so wie du es haben möchtest einstellen und dann direkt wieder an Claude Code geben."

> "Es wird nicht der gesamte Code verarbeitet, sondern nur der, der für das Frontend zuständig ist."

> "Und das finde ich schon ziemlich cool. Das ist ein großer Unterschied zu anderen Tools, wie z.B. Google Stitch, weil da wird nicht so detailliert erstmal abgefragt."
