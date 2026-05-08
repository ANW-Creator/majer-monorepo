# Content-Automatisierung: Video-Aufnahmen automatisieren mit HeyGen, ElevenLabs und Remotion

**Quelle:** https://youtu.be/EbJu9T30nfI
**Video-ID:** EbJu9T30nfI
**Sprache:** en
**Transkript:** .tmp/transcripts/EbJu9T30nfI.txt

## Kernaussage

Claude Code dient als vollständige Orchestrierungsschicht für eine dreistufige Content-Pipeline: ElevenLabs für Voice-Cloning, HeyGen Avatar 5 für das visuelle Avatar-Rendering und Remotion für Motion-Graphics und Schnitt. Was früher Stunden manueller Arbeit und mehrere spezialisierte Rollen erforderte, läuft jetzt über Nacht autonom. Der Creator demonstriert, wie er Kurs-Lektionen automatisch in fertige Videos mit Facecamp, synchronisiertem Audio und animierten Untertiteln umwandelt. Für MAJER relevant als Modell für skalierbare Bildungsinhalte ohne Produktions-Overhead.

## Hauptkonzepte und Techniken

### Die drei Kernkomponenten des Stacks

Das System besteht aus drei Tools, die Claude Code orchestriert:
1. **HeyGen** — Avatar-Rendering: Der digitale Klon des Creators. Aktuell ist Avatar 5 der neue Standard.
2. **ElevenLabs** — Voice-Cloning: Stimme des Creators, hochwertig trainiert auf 2 Stunden eigenen Audiomaterials
3. **Remotion** — Video-Editing: Transkription, Zusammenschnitt der Clips und Motion-Graphics-Animation

"I'm able to use Claude Code as a complete orchestration layer around three different tools that help me basically go from raw script to finished edited video in minutes."

### HeyGen Avatar 5: Warum jetzt der richtige Zeitpunkt ist

HeyGen hat mit Avatar 5 einen qualitativen Sprung gemacht. Ältere Modelle (Avatar 3/4) hatten schlechte Lippensynchronisation und steife Gesten. Avatar 5 ist auf über 10 Millionen Datenpunkten für Gesichtsausdrücke trainiert und erstellt einen digitalen Zwilling aus 15 Sekunden Webcam-Video.

Zwei Wege zum Avatar:
1. **Schnell-Methode**: 15-Sekunden-Webcam-Recording laut vorgegebenem Skript → sofortiger Avatar 5-Klon
2. **Qualitäts-Methode**: ~10 GB eigenes Videomaterial hochladen → Avatar mit mehr Trainingsdaten, realistischeren Bewegungen

"It's not just lip syncing, it's actually learning how you gesture and how you move, and it feels way more like you."

### ElevenLabs Voice Clone: Warum nicht der HeyGen-interne Voice-Klon

HeyGen bietet einen eigenen Voice-Klon an, klingt aber deutlich schlechter als ElevenLabs. Auch der Import eines ElevenLabs-Klons in HeyGen klingt in HeyGen schlechter als direkt in ElevenLabs — deshalb wird Audio separat in ElevenLabs generiert und dann als Datei in HeyGen importiert.

Empfohlenes Vorgehen in ElevenLabs:
- Professional Voice Clone erstellen (nicht Instant Clone)
- Mindestens 30 Minuten eigenes Audiomaterial einlesen, optimal 2 Stunden
- Einstellungen iterieren: Speed, Stability, Similarity, Style Exaggeration

### Das 45–60-Sekunden-Chunk-Prinzip

Zwei technische Einschränkungen bestimmen die maximale Clip-Länge:
1. **HeyGen**: Avatar 5-Generierungen sind auf 3 Minuten pro Clip begrenzt
2. **ElevenLabs**: Qualität der Stimme degradiert bei längeren Audios. Ab etwa 1 Minute klingt der Klon zunehmend unnatürlich.

Gefundener Sweet Spot: 45–60 Sekunden pro Chunk. Wichtige Regel: "You have to make sure that it's only cutting the script at the end of a sentence. Because obviously you don't want it to stop in the middle of a sentence."

### Claude Code als Orchestrator: Der automatisierte Pipeline-Ablauf

Der manuelle Workflow wäre: Script kopieren → in ElevenLabs einfügen → Audio herunterladen → in HeyGen hochladen → Video rendern → herunterladen → in Remotion schneiden. Das für jede Lektion und jedes Chunk.

Claude Code automatisiert das vollständig:
1. Script-Dateien aus Google Drive lesen
2. Script in Chunks von 45–60 Sekunden aufteilen (immer an Satzenden)
3. Chunks an ElevenLabs-API schicken → Audio-Dateien erhalten
4. Audio-Dateien an HeyGen-API schicken → Video-Clips erhalten
5. Clips in Remotion zusammenschneiden, transkribieren, Motion-Graphics hinzufügen

"Last night, I said, 'Hey, go process lessons 5.0 through 5.4.' And I went to bed, and I woke up and they were all just done."

### Playwright-Workaround: Avatar 5 ohne API-Zugang

Zum Zeitpunkt der Aufnahme: Avatar 5 ist über HeyGen-API nicht verfügbar, nur Avatar 3 und 4. Lösung: Playwright-Script öffnet das HeyGen-Dashboard, klickt in den generierten Avatar-4-Clip, geht in "New Revision" im AI Studio, tauscht Avatar 4 gegen Avatar 5 aus und generiert neu.

"That's probably not a solution I'm always going to need, but it works right now. Because once they have Avatar 5 come out via API, I will just update the script to do that and get rid of the Playwright step."

Dieses Beispiel zeigt das Prinzip: Wenn eine API-Lücke existiert, überbrückt Browser-Automatisierung sie temporär.

### Remotion: Automatische Untertitel-Synchronisation

Remotion transkribiert die Video-Clips und synchronisiert dann Motion-Graphics-Text mit dem Audio. Ablauf:
- Video-Transkription: Wort mit Zeitstempel verknüpfen
- Motion-Graphic: Text-Animation startet exakt zum richtigen Zeitpunkt
- Hintergrundbild und Styling werden in Claude Code konfiguriert

"When it transcribes everything, it's able to look at what time did he say this? Okay, he said this at 44 seconds. So at 44 seconds, I'm going to start this animation where we have these little elements pop in."

### Der neue Bottleneck: Ideen statt Produktion

Das Kernargument des Videos: "The bottleneck in content creation was basically always production and post-production. But now that bottleneck is essentially solved, the new bottleneck is what we should be doing, which is thinking, scripting, the strategy, and the ideas."

"The human stays in the loop where it matters most, which is the ideas and the content itself."

### Drei kritische Einwände und ihre Antworten

**"Das ist unecht, nicht authentisch"**: Das Script kommt vom Creator, die Stimme ist geclont, das Gesicht ist das des Creators. "The only thing missing is that you don't have to sit in a chair or you don't have to wait for the stars to align." YouTube bleibt echte Aufnahmen — aber für Kurs-Content, Werbung oder Kurzform-Content ist Avatar passend.

**"Wird das Internet mit AI-Slop fluten?"**: "The quality filter is still the idea. Bad content with a good avatar is still bad content."

**"Werden Video-Editor-Jobs vernichtet?"**: "It changes the job." Subject-matter-Experten werden die effektivsten KI-Automatisierer in ihrem Fachgebiet.

### Kostenstruktur des Stacks

| Tool | Plan | Kosten |
|---|---|---|
| HeyGen | Creator Plan | ~30$/Monat (begrenzte Avatar 5 Credits) |
| ElevenLabs | Creator Plan | ~22$/Monat (ca. 100 Minuten Audio) |
| Claude Code | Pro/Max | 20–200$/Monat |
| HeyGen API | Pay-per-use | ~4$ pro Minute fertigem Avatar-Video |

Ein 10-Minuten-Video kostet via API ca. 50$. Vergleich: Ein freiberuflicher Video-Editor kostet 35–75$/Stunde, ein 10-Minuten-YouTube-Video kann 300$ Editing-Kosten verursachen.

Fazit: "If the pipeline gives you back 10 hours a week, that's 40 hours a month. And at 251 bucks a month, you're paying about six bucks an hour to buy your own time back."

## Konkrete Schritte / Befehle / Tools

**Schritt 1 — Avatar erstellen (HeyGen):**
- Account erstellen → Avatar → Create Avatar
- Option A: 15 Sekunden Webcam-Video aufnehmen → schneller Avatar 5
- Option B: Eigenes Videomaterial (~10 GB) hochladen → bessere Qualität

**Schritt 2 — Voice Clone erstellen (ElevenLabs):**
- Voices → Create a Voice → Professional Voice Clone (nicht Instant)
- Minimum 30 Minuten Audiomaterial einlesen, optimal 2 Stunden
- Einstellungen testen: Speed, Stability, Similarity, Style Exaggeration

**Schritt 3 — Audio-in-HeyGen-Workflow:**
- In ElevenLabs: Script eingeben → Audio generieren → als Datei herunterladen
- In HeyGen AI Studio: Upload Audio → Datei einfügen → Avatar auswählen → Scene generieren

**Schritt 4 — Claude Code als Orchestrator:**
- Script-Quelle angeben (Google Drive, lokaler Ordner)
- Anweisung: Scripts chunken, Audio über ElevenLabs-API generieren, Videos über HeyGen-API generieren
- Remotion-Projekt für Zusammenschnitt und Motion-Graphics parallel einrichten

**Zwei separate Claude Code Projekte empfohlen:**
- Projekt 1: HeyGen Studio (Script → Chunks → Audio → Video-Clips)
- Projekt 2: Remotion Editor (Clips zusammenschneiden + Motion-Graphics)
- Erst wenn beide bewiesen: In einen Skill kombinieren

**Playwright-Workaround (solange Avatar 5 nicht über API verfügbar):**
- Script generiert Clip mit Avatar 4 via API
- Playwright öffnet HeyGen-Dashboard, tauscht Avatar aus, generiert Avatar-5-Version, lädt herunter

**Tools:**
- HeyGen (Avatar-Rendering, API für Automatisierung)
- ElevenLabs (Voice-Cloning, hochwertig)
- Remotion (Video-Editing per Code, React-basiert)
- Claude Code (Orchestrierung)

## Relevanz für MAJER

Die Content-Automatisierungspipeline ist für MAJER als Bildungsverein hochrelevant:
- **Kurs-Content**: Lektionen für das 1000-Fragen-Konzept können als Avatar-Videos produziert werden, ohne jedes Mal aufzunehmen
- **Skalierbarkeit**: Mehrere Lektionen über Nacht verarbeiten — direkt anwendbar wenn der Creator-Workflow-System (vc-03) umgesetzt wird
- **Ressourcen-Effizienz**: Kein Studio, kein Equipment, keine Postproduktions-Stunden — kritisch für einen Verein mit begrenztem Budget
- Das Prinzip "Script von Mensch, Produktion von KI" passt zum MAJER-HITL-Prinzip
- Playwright-Workaround zeigt den pragmatischen Umgang mit API-Lücken — ein Muster, das im MAJER-Stack häufig relevant wird

## Direkte Zitate (die wichtigsten 3-5)

> "I'm able to use Claude Code as a complete orchestration layer around three different tools that help me basically go from raw script to finished edited video in minutes."

> "It's an AI agent coordinating a full production workflow that used to require three to four different types of roles. Maybe a camera guy, maybe an AV guy, a video editor, a person to actually read the script off."

> "Last night, I said, 'Hey, go process lessons 5.0 through 5.4.' And I went to bed, and I woke up and they were all just done."

> "The bottleneck in content creation was basically always production and post-production. But now that bottleneck is essentially solved, the new bottleneck is what we should be doing, which is thinking, scripting, the strategy, and the ideas."

> "Bad content with a good avatar is still bad content."
