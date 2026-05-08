# Workshop Curriculum — Level 03: Werkzeuge nutzen

**Vereinszugehörigkeit:** MAJER e.V., Berlin
**Curricula-Stufe:** Level 03 von 03
**Dauer:** 90 Minuten
**Zielgruppe:** Schülerinnen und Schüler (14–18 Jahre), Lehrkräfte, interessierte Erwachsene
**Voraussetzung:** Level 02 (Digitale Welt verstehen) empfohlen; Level 01 und 02 als Vorbereitung ideal
**Maximale Gruppengröße:** 20 Personen (praktische Übungen erfordern kleinere Gruppe)
**Format:** Präsenz bevorzugt; Hybrid möglich mit eingeschränkter Übungstiefe

---

## Lernziele

Nach dem Workshop können Teilnehmende:

1. Den Begriff Prompt Engineering definieren und die vier Grundbestandteile eines effektiven Prompts (Rolle, Kontext, Aufgabe, Format) anwenden.
2. Einen schwachen Prompt in einen wirksamen Prompt umformulieren und den Unterschied im Output begründen.
3. Das Konzept No-Code erklären und mindestens zwei Werkzeugkategorien (Automatisierung, App-Bau) mit je einem konkreten Tool benennen.
4. Eine eigene, realistische Idee für eine KI-gestützte oder automatisierte Lösung skizzieren — mit benanntem Problem, Zielgruppe und Werkzeug.
5. Mindestens zwei Situationen benennen, in denen der Einsatz von KI oder Automatisierung problematisch ist, und die Begründung dafür in eigenen Worten formulieren.

---

## Theoretische Grundlage

### Prompt Engineering als Kompetenz

Prompt Engineering bezeichnet die strukturierte Fähigkeit, Anweisungen an KI-Sprachmodelle so zu formulieren, dass das gewünschte Ergebnis zuverlässig und vollständig erzeugt wird. Die Kompetenz ist nicht trivial: dieselbe Anfrage in unterschiedlicher Formulierung erzeugt nachweislich unterschiedlich qualitative Outputs (OpenAI, 2023; White et al., 2023).

Für Bildungskontexte relevant ist das Vier-Komponenten-Modell:
- **Rolle:** Wer soll die KI sein? ("Du bist ein erfahrener Lektor...")
- **Kontext:** Was ist die Ausgangssituation? ("Ich habe einen Schulaufsatz für ein 16-jähriges Publikum geschrieben...")
- **Aufgabe:** Was soll konkret gemacht werden? ("Verbessere Satzstruktur und Klarheit, aber behalte meinen Stil bei.")
- **Format:** Wie soll das Ergebnis aussehen? ("Gib mir eine Liste mit maximal 5 Änderungsvorschlägen.")

### No-Code Bewegung

No-Code-Tools ermöglichen die Entwicklung funktionaler digitaler Produkte ohne traditionelle Programmierkenntnisse. Die Bewegung ist nicht neu (visuelle Programmierung seit den 1990ern), hat aber durch Plattformen wie Bubble, Glide, Webflow, Make und Zapier eine neue Zugänglichkeit und Produktionsreife erreicht.

Für Bildungszwecke zentral: No-Code demokratisiert Technikzugang und verschiebt die Einstiegshürde vom Syntax-Verständnis zur Problemlösekompetenz. Die Grenze zwischen No-Code und Low-Code ist fließend; im Workshop werden ausschließlich No-Code-Ansätze behandelt.

### KI-Ethik im praktischen Kontext

Die ethische Dimension von KI-Nutzung wird im Workshop nicht als abstrakte Moraldiskussion behandelt, sondern als praktisches Entscheidungsproblem: Wann ergibt der Einsatz von KI Sinn — und wann nicht?

Relevante Referenzrahmen:
- EU AI Act (2024): Klassifizierung von KI-Systemen nach Risikostufen
- Datenschutz-Grundverordnung (DSGVO): Einschränkungen für personenbezogene Daten in KI-Systemen
- Responsible AI-Prinzipien nach Microsoft, Google, Anthropic: Transparenz, Fairness, Nachvollziehbarkeit
- Hochschulethik: Wann ist KI-Nutzung als Werkzeug akzeptabel, wann als Täuschung?

---

## Workshop-Ablauf (90 Minuten)

### Block 1: "Was kann KI wirklich?" (0–20 Min)

**Ziel:** Realistisches KI-Bild korrigieren (weder Überschätzung noch Unterschätzung), Neugier aktivieren

**Durchführung:**

*Demo: Live-Nutzung von ChatGPT oder Claude (10 Min):*
Workshopleitung zeigt live — kein vorbereitetes Video, sondern echte Interaktion:
- Aufgabe 1 (KI überzeugt): "Erkläre mir Photosynthese so, als wäre ich 10 Jahre alt." → Ergebnis zeigen, Gruppe bewertet: gut, schlecht, überraschend?
- Aufgabe 2 (KI scheitert): "Was passiert morgen in Berlin?" oder "Wer hat dieses Spiel gestern gewonnen?" → KI gibt entweder veraltete Info oder erfindet etwas
- Aufgabe 3 (KI als Sparringspartner): "Ich möchte ein Schüler-Café in meiner Schule aufmachen. Welche 5 Probleme werde ich vermutlich haben?" → qualitativ gute Antwort, die nützlich ist ohne "Allwissen" zu erfordern

Ziel: Gruppe versteht — KI ist stark bei Formulierung, Strukturierung, Brainstorming; schwach bei Aktualität, Faktenprüfung, Lokalem.

*Diskussion: Wann ist KI hilfreich? (10 Min):*
Workshopleitung stellt die Frage an die Gruppe: "Für welche Aufgaben würdet ihr KI heute schon nutzen — oder würdet ihr es nicht tun?"
- Meldungen sammeln (4–5 Antworten)
- Workshopleitung ergänzt aus eigener Praxis: Textentwürfe, Code-Debugging, Recherche-Startpunkte, Übersetzungen, Lernkarten erstellen
- Kontrabeispiele direkt nennen: Quellen für wissenschaftliche Belege, rechtliche Auskünfte, medizinische Diagnosen

**Material:** Laptop mit Internetzugang und ChatGPT/Claude-Account, Beamer

---

### Block 2: Prompt Engineering Basics (20–45 Min)

**Ziel:** Vier-Komponenten-Modell verstehen und direkt anwenden

**Durchführung:**

*Was ist ein Prompt — und warum ist die Formulierung entscheidend? (5 Min):*
Workshopleitung zeigt ein Kontrastbeispiel live:
- Schwacher Prompt: "Hilf mir mit meinem Text."
- Output: vage, generisch, wenig brauchbar
- Starker Prompt: "Du bist ein erfahrener Schullektor. Ich habe einen Bewerbungsbrief für ein Praktikum geschrieben. Er ist für eine Grafikdesign-Agentur, ich bin 17. Verbessere Klarheit und Wirkung, aber behalte meinen persönlichen Ton. Gib mir maximal 5 konkrete Änderungen als nummerierte Liste."
- Output: spezifisch, direkt nutzbar

Kernaussage: Dieselbe KI, anderes Ergebnis — der Unterschied liegt im Prompt.

*Die 4 Bestandteile eines guten Prompts (8 Min):*
Workshopleitung erklärt das Vier-Komponenten-Modell an der Tafel/Folie:

| Bestandteil | Frage | Beispiel |
|-------------|-------|---------|
| Rolle | Wer soll die KI sein? | "Du bist ein Biologielehrer..." |
| Kontext | Was ist die Ausgangssituation? | "Ich schreibe eine Klausur für 9. Klasse..." |
| Aufgabe | Was soll konkret passieren? | "Erstelle 5 Multiple-Choice-Fragen zu Zellteilung..." |
| Format | Wie soll das Ergebnis aussehen? | "Jede Frage mit 4 Antworten, eine korrekt, markiert mit *" |

*Übung: 3 schlechte Prompts in gute umwandeln (12 Min):*
Teilnehmende erhalten drei Aufgabenzettel mit je einem schwachen Prompt. Aufgabe: In Partnerarbeit (2 Minuten pro Prompt) einen verbesserten Prompt nach dem Vier-Komponenten-Modell formulieren.

Beispiele für schwache Ausgangsprompts:
1. "Erkläre mir KI."
2. "Schreib mir was für Instagram."
3. "Ich brauche Hilfe bei Mathe."

Anschließend: 1–2 überarbeitete Prompts werden im Plenum vorgelesen und live in der KI getestet. Gruppe diskutiert: Besseres Ergebnis? Warum?

**Material:** Aufgabenzettel (3× je Teilnehmende-Paar), Vier-Komponenten-Modell als Folie oder Handout, Laptop für Live-Test

---

### Block 3: No-Code — Ideen ohne Programmierkenntnisse bauen (45–65 Min)

**Ziel:** No-Code als Konzept verstehen, Automatisierung als Werkzeug erleben, eigene Idee skizzieren

**Durchführung:**

*Konzept: Was ist No-Code und warum ist es relevant? (5 Min):*
Workshopleitung erklärt das Prinzip in drei Sätzen:
"Früher musste man programmieren können, um eine App zu bauen. No-Code-Tools trennen das. Du beschreibst, was passieren soll — das Tool übersetzt das in Technik."

Werkzeugkategorien (kurze Übersicht):
- App-Bau: Bubble (Web-Apps), Glide (Apps aus Google Sheets), Webflow (Websites)
- Automatisierung: Make (früher Integromat), Zapier, n8n
- Chatbots: Voiceflow, Botpress
- Datenverarbeitung: Airtable + Automations

*Live-Demo: Automatisierungsworkflow (10 Min):*
Workshopleitung zeigt einen vorbereiteten, funktionierenden Make- oder n8n-Workflow:
- Beispiel 1 (einfach): Neues Formular-Einsendung → automatisch E-Mail an Vereinsvorstand → Eintrag in Tabelle
- Beispiel 2 (für Fortgeschrittene): Jemand schreibt in ein Webformular eine Frage → KI beantwortet → Antwort geht per E-Mail zurück

Workshopleitung zeigt, was passiert wenn der Trigger ausgelöst wird — Gruppe sieht Automation in Echtzeit. Kernaussage: "Das ist kein Code. Das sind Blöcke, die ich verbunden habe."

*Mini-Aufgabe: Eigene Idee skizzieren (10 Min):*
Teilnehmende erhalten ein einfaches Canvas (auf Papier oder digital):

```
Problem: Was nervt mich / meine Schule / meinen Verein?
Zielgruppe: Für wen wäre eine Lösung nützlich?
Werkzeug: Welches No-Code-Tool könnte helfen?
Erster Schritt: Was wäre der erste konkrete Schritt?
```

Einzelarbeit, 5 Minuten. Dann: 2–3 Ideen freiwillig im Plenum vorstellen (1 Minute pro Idee).

Workshopleitung gibt zu jeder Idee kurzes Feedback: realistisch/unrealistisch, welches Tool passt, wo würde der erste Schritt liegen.

**Material:** Ideen-Canvas (ausgedruckt oder als digitale Vorlage), vorbereiteter Automatisierungsworkflow in Make/n8n, Laptop mit Internetzugang

---

### Block 4: Ethisches Bauen (65–80 Min)

**Ziel:** Grenzen von KI-Nutzung verstehen, Datenschutz als praktische Dimension begreifen, Verantwortung benennen

**Durchführung:**

*Wann soll man KI NICHT nutzen? (5 Min):*
Workshopleitung stellt drei konkrete Szenarien vor (auf Folie):
1. Eine KI bewertet Bewerbungen für Jobs autonom (ohne menschliche Kontrolle)
2. Ein Schüler gibt eine KI-generierte Hausarbeit ohne Kennzeichnung ab
3. Eine gemeinnützige Organisation lädt Bewerberdaten in ChatGPT hoch, um Förderempfänger auszuwählen

Für jedes Szenario: Gruppe antwortet, ob das OK ist oder nicht — Handzeichen oder Karten (Grün/Rot).
Workshopleitung kommentiert: Szenario 1 — EU AI Act "High-Risk AI"; Szenario 2 — Frage der Schulhausordnung/Prüfungsordnung, nicht pauschal verboten; Szenario 3 — DSGVO-Problem (personenbezogene Daten in externe Systeme).

*Datenschutz bei KI-Tools (5 Min):*
Drei konkrete Regeln für den Alltag:
1. Keine Namen, Adressen oder Kontaktdaten realer Personen in ChatGPT/Claude eingeben (Ausnahme: Enterprise-Accounts mit Datenschutzvertrag)
2. Keine vertraulichen Dokumente (Zeugnisse, Verträge, medizinische Berichte) als Input verwenden
3. Immer prüfen: Speichert das Tool meine Eingaben? (OpenAI Privacy Settings, Claude: kein Training auf Conversations by default)

*Verantwortung bei Automatisierung (5 Min):*
Workshopleitung erklärt: Automatisierung entbindet nicht von Verantwortung. Beispiele:
- Eine Automatisierung, die falsche E-Mails verschickt, hat einen menschlichen Auftraggeber
- Ein KI-generierter Social-Media-Post mit falschen Fakten ist die Verantwortung der veröffentlichenden Person
- "Die KI hat das so gesagt" ist kein Rechtsargument

Kernaussage: Werkzeugnutzung bedeutet Werkzeugverantwortung.

**Material:** Szenarien-Folie, Grün/Rot-Karten (optional)

---

### Block 5: Abschluss und nächste Schritte (80–90 Min)

**Ziel:** Transfer sichern, konkrete Handlungsabsicht formulieren, Ressourcen mitgeben

**Durchführung:**

*Eigenes Projekt-Commitment (5 Min):*
Jede teilnehmende Person schreibt auf eine Karte (anonym oder mit Name, selbst wählen):
"Ich werde in den nächsten zwei Wochen ___ mit KI versuchen."

Keine Überprüfung, keine Pflicht. Die Karte gehört der Person. Workshopleitung gibt Impulse für alle, die noch keinen Satz haben:
- "Ich werde einen Bewerbungstext mit KI-Hilfe überarbeiten."
- "Ich werde einen Prompt für meine Lieblingsaufgabe aus dem Workshop optimieren."
- "Ich werde mir Make ansehen und einen Automatisierungs-Workflow skizzieren."

*Ressourcen-Liste (3 Min):*
Workshopleitung teilt (digital oder ausgedruckt) eine kurze Ressourcenliste:

| Ressource | Was | Link |
|-----------|-----|------|
| Prompting Guide (OpenAI) | Offizielle Prompt-Empfehlungen | platform.openai.com/docs/guides/prompt-engineering |
| Learn Prompting | Kostenloser offener Kurs | learnprompting.org |
| Make.com Academy | Kostenlose Video-Tutorials | academy.make.com |
| Bubble.io Academy | App-Bau Schritt für Schritt | bubble.io/academy |
| EU AI Act Erklärvideo | Was das Gesetz bedeutet | Suche: "EU AI Act einfach erklärt" |

*Ausblick (2 Min):*
"Level 03 ist der letzte Schritt des MAJER-Curriculums — aber nicht das Ende. Wer hier eine Idee skizziert hat, kann sich für das MAJER-Projektprogramm bewerben, wo aus Ideen reale Prototypen werden." (Wenn zutreffend; ansonsten Hinweis auf weiterführende Workshops oder Ressourcen.)

**Material:** Karten und Stifte für Commitment, Ressourcenliste als Handout oder QR-Code

---

## Material und Vorbereitung

**Vor dem Workshop (Workshopleitung):**
- Laptop mit Internetzugang, ChatGPT- und Claude-Account eingeloggt und getestet
- Vorbereiteten Make- oder n8n-Workflow anlegen und testen (Trigger prüfen)
- Aufgabenzettel für Block 2 ausdrucken (3 Prompts je Teilnehmende-Paar)
- Ideen-Canvas für Block 3 ausdrucken oder digital bereitstellen
- Szenarien-Folie für Block 4 vorbereiten
- Ressourcenliste als Handout oder QR-Code vorbereiten
- Backup: Offline-Screenshots für alle Live-Demos, falls Internet ausfällt

**Technische Anforderungen:**
- Stabiles WLAN für Teilnehmende (Übung Block 2 optional auch ohne eigenes Gerät möglich)
- Beamer oder großer Monitor
- Whiteboard oder Flipchart für Vier-Komponenten-Modell

**Für Teilnehmende:**
- Eigenes Smartphone oder Laptop empfohlen (für Block 2 Übung); nicht zwingend erforderlich
- Kein Vorwissen notwendig; Level 02 als Vorbereitung empfohlen

---

## Differenzierung

**Für jüngere Schüler (14–15 Jahre):**
- Block 2: Vier-Komponenten-Modell auf zwei Bestandteile reduzieren (Aufgabe + Format) für ersten Durchgang, dann Rest ergänzen
- Block 3: Mini-Aufgabe mit vorgegebenen Problemfeldern statt offener Ideenfindung (z.B. "Schulorganisation", "Vereinsarbeit", "Lernen")
- Block 4: Szenarien auf eines reduzieren, das aus der Lebenswelt kommt (Hausarbeit-Beispiel)

**Für Lehrkräfte:**
- Block 2: Schwerpunkt auf Unterrichtsvorbereitung als Anwendungsfall (Klausurfragen, Lernkarten, Differenzierungsaufgaben mit KI erstellen)
- Block 3: Bildungstechnologie-Überblick ausweiten: LMS-Integrationen, Schul-spezifische Tools
- Block 4: Rechtliche Dimension für den Schulkontext vertiefen (KMK-Empfehlungen zu KI, schulhausspezifische Regelungen)

**Für 60-Minuten-Format:**
- Block 1 auf 10 Minuten kürzen (eine Demo statt drei)
- Block 3 auf 10 Minuten kürzen (nur Demo, keine Skizzierungsaufgabe)
- Block 4 auf 5 Minuten kürzen (nur die drei Datenschutz-Regeln)

---

## Wissenschaftliche Quellen

- White, J. et al. (2023). A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT. arXiv:2302.11382.
- OpenAI (2023). *Prompt Engineering Guide*. platform.openai.com/docs/guides/prompt-engineering.
- Anthes, G. (2016). Low-Code, No-Code Platforms. *Communications of the ACM*, 59(8), 15–17.
- Waszkowski, R. (2019). Low-code platform for automating business processes in manufacturing. *IFAC-PapersOnLine*, 52(10), 376–381.
- European Commission (2024). *Regulation (EU) 2024/1689 — Artificial Intelligence Act*. Official Journal of the European Union.
- Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. *Nature Machine Intelligence*, 1, 389–399.
- OECD (2019). *Recommendation of the Council on Artificial Intelligence*. OECD/LEGAL/0449.
- Europäisches Parlament (2023). Bericht über den Einsatz von KI im Bildungswesen. Ausschuss für Kultur und Bildung, PE 737.523.

---

## Verknüpfte Fragen aus dem 1000-Fragen-Katalog (#021–030)

| Nr. | Frage | Behandelt in Block |
|-----|-------|--------------------|
| 021 | Wie baut man in einem Tag eine erste App — ohne Programmierkenntnisse? | Block 3 |
| 022 | Was ist Prompt Engineering — und warum ist es eine Schlüsselkompetenz? | Block 2 |
| 023 | Wie erkenne ich, ob eine KI-Antwort vertrauenswürdig ist? | Block 1 |
| 024 | Was ist Automatisierung — und wo scheitert sie? | Block 3 + Block 4 |
| 025 | Was ist ein Webhook — in 3 Sätzen erklärt? | Block 3 (Demo, Randnotiz) |
| 026 | Wie setzt man ein reales Problem in eine App-Idee um? | Block 3 (Skizzierungsaufgabe) |
| 027 | Was ist der Unterschied zwischen Programmieren und Vibe Coding? | Block 3 (Exkurs) |
| 028 | Wie baue ich einen einfachen Chatbot ohne Code? | Block 3 (Ressourcenliste) |
| 029 | Wann sollte man KI nutzen — und wann nicht? | Block 4 |
| 030 | Was macht einen guten Prompt aus? | Block 2 |
