# Token-Management: Claude günstiger nutzen — Kosten sparen

**Quelle:** https://youtu.be/_qZvORxGqI0
**Video-ID:** _qZvORxGqI0
**Sprache:** en
**Transkript:** .tmp/transcripts/_qZvORxGqI0.txt

## Kernaussage

Schlechtes Token-Management ist der häufigste Grund für vorzeitig aufgebrauchte Claude-Sessions. Das Video erklärt, wie Tokens tatsächlich funktionieren (exponentielle Kosten durch Context-Reread), was Context Rot ist und warum Auto-Compaction ein schlechter Zeitpunkt ist. Der Creator stellt konkrete Gegenmittel vor: /re, manuelles Session-Handoff, Sub-Agents, Markdown-Konvertierung, ein Custom-Token-Dashboard und mehrere Open-Source-Frameworks. Für MAJER direkt anwendbar, da der Stack Claude Code intensiv nutzt.

## Hauptkonzepte und Techniken

### Was Context eigentlich ist

"Context is basically everything that Claude Code can see at one time. That includes the system prompt, your full conversation, every tool call, every tool output, every file that Claude has read, every skill or MCP server or agent in your project."

Claude Code hat ein 1-Millionen-Token-Kontext-Fenster, aber selbst vor der ersten Eingabe können schon 8.000+ Tokens verbraucht sein — durch System-Prompts, CLAUDE.md, MCPs und Skills. Im Extremfall: 62.000 Tokens beim Start einer frischen Session.

Sofort-Check: `/context` in einer neuen Session eingeben, um den tatsächlichen Startverbrauch zu sehen.

### Das exponentielle Wachstum der Kosten

Das wichtigste Konzept: "Every time that you send a message, Claude rereads the entire conversation from the beginning." Jede Antwort liest die gesamte bisherige Konversation erneut. Die Kosten wachsen nicht linear, sondern exponentiell:
- Nachricht 1: 500 Tokens
- Nachricht 30: 15.500 Tokens (31-fach)
- Nach 30 Nachrichten: fast eine Viertelmillion kumulierter Tokens

"One developer actually tracked a 100 plus message chat and found that 98.5% of all the tokens were just spent rereading the old chat history in the session."

### Context Rot

Ab einer gewissen Sessionlänge degradiert die Modellleistung messbar: "The model's performance starts to degrade because its attention gets spread across every single token." Symptome: Claude vergisst Dinge, widerspricht sich, bearbeitet Dateien ohne sie zu lesen, wird vage.

Statistik aus Anthropics Dokumentation: Retrieval-Genauigkeit sinkt von 92% bei 256.000 Tokens auf 78% bei 1 Million Tokens. Ein vollgefülltes Kontext-Fenster ist nicht nur kein Ziel — es ist aktiv schädlich.

### Auto-Compaction: Warum zu spät nicht gut genug ist

Auto-Compaction startet bei 95% des Kontext-Fensters. Problem: "When it autocompacts, you only keep about 20 to 30% of the original detail." Und: Das Modell macht diese Komprimierung am Punkt der stärksten Context Rot — also auf dem niedrigsten Leistungsniveau. Analogie: "If you're frantically stuffing your bag because you woke up 5 minutes before you have to go, you're probably going to forget your charger."

Empfehlung: Manuelle Komprimierung bei etwa 60% des Kontext-Fensters (250k-Modell), also ca. 150.000 Tokens.

### Die 5 Optionen nach jeder Claude-Antwort (Anthropic Best Practices)

1. **Continue**: Weiter antworten — einfach, aber erhöht den Kontext
2. **/re (Rewind)**: Zu einer früheren Nachricht zurückspringen, alles danach wird gelöscht — Anthropics empfohlene #1-Gewohnheit
3. **/clear**: Komplett neustarten — sauberer Kontext, aber kein Wissen über bisherigen Fortschritt
4. **/compact**: Sitzung zusammenfassen und Verlauf durch Zusammenfassung ersetzen
5. **Sub-Agent**: Arbeit an eine frische Instanz delegieren, nur Ergebnis zurückbekommen

### /re (Rewind): Die unterschätzte Superwaffe

"/re lets you jump back to any previous message in your session and everything at that point after gets dropped." Häufiger Fehler: Bei einem Fehler einfach sagen "That didn't work, try this instead" — damit bleibt das fehlerhafte Verhalten aber im Kontext und "pollutes your future responses."

Bonus-Feature in /re: "Summarize from here"-Option erstellt eine Übergabenachricht — "a note from Claude's future self to its past self saying, 'Here's what we figured out. Do it this way.'"

### Das manuelle Session-Handoff-Protokoll

Statt /compact zu nutzen, empfiehlt der Creator ein eigenes Protokoll:
1. Wenn ~120.000 Tokens (12% des 1M-Fensters) erreicht sind: "Hey, give me a full summary of everything that we've done and the current status of what we're about to do next."
2. Zusammenfassung kopieren
3. `/clear` ausführen
4. Zusammenfassung einfügen und weitermachen

"This one habit alone, if you can actually make that shift and start to do it, it has probably made the most noticeable difference on my actual session limit filling up."

Dafür gibt es einen Custom-Skill: `/session handoff` — der liest alles durch, analysiert und gibt strukturierten Output mit: Was wurde entschieden, welche Dateien sind relevant, offene Fragen, wo weitermachen.

### Sub-Agents als Token-sparendes Delegation-Prinzip

"Each sub agent will get its own fresh context window." Der Agent erledigt seine Aufgabe in einer sauberen Instanz und gibt nur das Ergebnis zurück. Wie ein Forschungs-Praktikant: "You wouldn't sit there and watch him or her do it. You would just say, 'Hey, just let me know when you have like a summary.'"

Wichtig: Sub-Agents können gezielt mit günstigeren Modellen laufen: "Spin me up a sub agent to summarize this and make sure that sub agent is using Haiku."

### Markdown-Konvertierung: 3x mehr Inhalt, gleiche Token-Menge

Formatumwandlungen reduzieren Token-Verbrauch erheblich:
- HTML → Markdown: 90% weniger Tokens
- PDF → Markdown: 65–70% weniger Tokens
- DOCX → Markdown: 33% weniger Tokens

"A 40-page PDF could actually take up the same amount of space as a 130-page markdown file." Tool-Empfehlung: Dockling oder ähnliche Konverter. Erklärung: "PDFs and docs and HTML have all of this layout and metadata and formatting noise that the model doesn't need."

### /btw: Side-Fragen ohne Kontext-Pollution

`/btw` öffnet ein schnelles Overlay für Nebenfragen, die nicht in die Konversationshistorie eingehen. Für schnelle Klärungen mitten in einem Projekt ohne den Kontext zu belasten.

### CLAUDE.md-Disziplin

Die CLAUDE.md-Datei wird bei jeder Session geladen. Empfehlung: Unter 200 Zeilen halten (~2.000 Tokens). "If it's bloated, you're going to pay for that bloat every single conversation." Spezialisierte Anweisungen in Skills und Context-Files auslagern, die nur bei Bedarf geladen werden.

### Das 1-Million-Token-Fenster ist eine Falle

"When people hear 1 million, they think that they have a million tokens to play with and then they start getting wasteful. They stop using sub agents. They stop being intentional." Die Leistung des Modells ist bei kleinen, sauberen Kontexten am höchsten. "That 1 million is just insurance. It's not a goal to fill it at all."

Empfehlung für Einsteiger: Erstmal mit dem 200k-Fenster arbeiten, Disziplin lernen, dann erst auf 1M wechseln.

### Session Chaining: Arbeit in spezialisierte Phasen aufteilen

Große Projekte in dedizierte Sessions aufteilen:
1. **Discovery Session**: PDFs lesen, Codebase analysieren, Summary-Dokument erstellen
2. **Planning Session**: Summary lesen, Plan erstellen
3. **Execution Session**: Plan umsetzen

"Each session has a specialized task. So like I said, it's really just important to start building these habits."

### Custom Token-Dashboard

Ein eigenes Open-Source-Dashboard für Token-Tracking, das zeigt:
- Sessions, Turns, Input-Tokens, Output-Tokens, Cache Read/Create
- Vergleich über 7 oder 30 Tage
- Aufschlüsselung nach Modell, Projekt und aufgerufenen Tools
- Teuerste Prompts identifizieren
- Dateien mit höchster Aufruf-Häufigkeit

Verfügbar als GitHub-Repo (Link im Free School Community).

### 10 Open-Source-Frameworks für Token-Reduktion

Aufgeführte Frameworks (nicht alle gleichzeitig verwenden — 2–3 passende auswählen):
- **Rust Token Killer**: CLI-Proxy filtert Terminal-Output vor dem Kontext
- **Context Mode**: Sandboxed raw tool output in SQLite statt in Kontext
- **Code Review Graph**: Code-Review-Automatisierung
- **Token Savior**: Allgemeiner Token-Sparer
- **Caveman Plugin**: Erzwingt prägnante Antworten (weniger wirksam als gedacht)
- **Claude Token Efficient**: Eine CLAUDE.md-Datei die Responses kurz hält
- **Token Optimizer MCP**
- **Claude Token Optimizer**
- **Claude Context**

## Konkrete Schritte / Befehle / Tools

**Sofort-Checks:**
- `/context` in neuer Session → zeigt Startverbrauch
- Session-Limit im Desktop-App permanent im Blick behalten (zweiter Monitor empfohlen)

**Tägliche Gewohnheiten:**
- Bei Fehler: `/re` statt "That didn't work, try this instead"
- Bei ~120k Tokens (Opus/1M): Session-Handoff-Zusammenfassung erstellen → `/clear` → einfügen
- Plan Mode vor jeder komplexen Aufgabe
- Sub-Agents für isolierte Rechercheaufgaben, mit Haiku wenn möglich

**CLAUDE.md:**
- Unter 200 Zeilen halten
- Spezialisierte Regeln in Skills auslagern
- `.claudeignore`-Datei für große Repos anlegen

**Datei-Typen:**
- PDFs, DOCX, HTML immer zuerst in Markdown konvertieren (z.B. mit Dockling)

**Slash-Commands:**
- `/re` — Zurückspulen zur letzten funktionierenden Nachricht
- `/clear` — Komplett neustarten
- `/compact` — Session komprimieren (weniger empfohlen als manuelle Methode)
- `/btw` — Side-Frage ohne Kontext-Eintrag
- `/session handoff` — Custom-Skill für strukturierten Übergang

**Strategie bei verbleibender Session:**
- Viel übrig + Reset bald: Aggressiv Token-intensive Tasks angehen
- Wenig übrig + viel Zeit: Sparsam arbeiten oder Pause einlegen

## Relevanz für MAJER

Token-Management ist für MAJER direkt wirtschaftlich relevant, da Claude Code (200€/Monat) eine der teuersten Subscriptions ist und MAJER-spezifische Anforderungen (komplexe CLAUDE.md, viele MCP-Tools, n8n-Workflows) den Baseline-Verbrauch erhöhen:
- Die MAJER CLAUDE.md sollte auf Disziplin geprüft werden — unter 200 Zeilen
- Session Chaining passt zur HITL-Philosophie: Discovery → Planning → Execution in separaten Sessions
- Das Custom Token-Dashboard gibt Transparenz über die tatsächlichen Kosten pro Projektbereich
- `/session handoff` als Skill ist direkt einsatzbereit und zahlt auf den MAJER-Skill-Ansatz ein
- Markdown-Konvertierung für Förderdokumente, Satzungen, PDFs vor dem Einfügen in Claude

## Direkte Zitate (die wichtigsten 3-5)

> "Every time that you send a message, Claude rereads the entire conversation from the beginning. And all of those are tokens that it's charging you for. This means as you're having a conversation with Claude, your cost is compounding, not just adding, it's exponentially growing."

> "One developer actually tracked a 100 plus message chat and found that 98.5% of all the tokens were just spent rereading the old chat history in the session."

> "When it autocompacts, you only keep about 20 to 30% of the original detail. So you're losing a ton of important context and the model is doing that compaction at its absolute least intelligent point."

> "That 1 million is just insurance. It's not a goal to fill it at all. Really, the first like, you know, 0 to 20% of your session is prime time."

> "Give me 6 hours to chop down a tree, and I will spend the first four sharpening the axe."
