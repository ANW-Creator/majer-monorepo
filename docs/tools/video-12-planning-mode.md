# Video 12 — Ultra Plan Mode

**Video-ID:** T4fXb3sbJIo
**URL:** https://youtu.be/T4fXb3sbJIo
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Ultra Plan ist ein Feature von Claude Code, das die Planungsphase in Anthropics Cloud auslagert: Opus 4.6 mit 3 parallelen Explorations-Agenten + 1 Kritik-Agent erstellt einen tieferen, strukturierteren Plan als lokales Plan-Mode — und das 4-5x schneller. Der fertige Plan kann im Web reviewt, kommentiert und dann zurück ins Terminal teleportiert werden.

---

## Vergleich: Lokales Plan-Mode vs. Ultra Plan

| | Lokales Plan-Mode | Ultra Plan |
|---|---|---|
| Ausführungsort | Eigenes Terminal | Anthropics Cloud-Container |
| Modell | Aktive Session (z.B. Sonnet) | Immer Opus 4.6 |
| Planungsansatz | Einzelagent, linear | Multi-Agent: 3 parallele Exploration + 1 Critique |
| Max. Compute | Begrenzt durch Session | 30 Minuten Cap |
| Terminal-Blockierung | Ja, während Planung | Nein (Terminal frei nutzbar) |
| Review-Interface | Text im Terminal (oder VS Code Doc) | Strukturiertes Web-Dokument |
| Feedback | Kommentare im Chat | Direkte Kommentare auf Sections + Emoji-Reaktionen |
| Geschwindigkeit | Langsam (4+ Minuten für gleiche Aufgabe) | ~1 Minute |
| Token-Kosten | Niedrig lokal | Mehr (Cloud-Plan verbraucht mehr Compute) |

---

## Wie man Ultra Plan startet

**Methode 1 — Slash Command:**
```
/ultra plan [Prompt]
```

**Methode 2 — Keyword im Prompt:**
```
ultra plan [Beschreibung der Aufgabe]
```
Claude erkennt das Keyword und fragt: "Do you want to do this in the cloud?"

**Wichtige Einschränkung:** Funktioniert NUR im CLI (Terminal). Nicht in der Desktop App, nicht in der VS Code Extension.

---

## Voraussetzung: Git Repository

Ultra Plan benötigt ein Git- oder GitHub-Repository, weil der Cloud-Agent das Projekt lesen muss:

```bash
git init
git add .
git commit -m "initial"
git remote add origin [URL]
git push
```

Ohne gepushtes Repo: "Hey, you can't do this on the web yet" — einfach Git einrichten und es funktioniert.

---

## Review-Prozess auf dem Web

Nach dem Start erscheint im Terminal: "Monitor progress in Claude Code on the web" + ein Link.

Die Web-Oberfläche bietet:
- **Strukturiertes Dokument:** Context, What Already Exists, New Approach, Files to Create, Modifications, Final Verification
- **Diagramme:** Manchmal automatisch generiert (Excalidraw-Style)
- **Tabs:** Verschiedene Bereiche des Plans
- **Emoji-Reaktionen:** Auf einzelne Sections
- **Kommentare:** Direktes Feedback auf spezifische Plan-Elemente
- **Approve Plan:** Schickt Plan zurück ins Terminal ("Teleport")

---

## Feedback-Loop

```
Prompt → Cloud → Plan Draft → Web Review
    → Kommentar hinzufügen
    → Claude macht weiteren Iterations-Durchlauf
    → Plan aktualisiert
    → "Approve Plan and Teleport back to Terminal"
    → Im Terminal: Plan empfangen → hier implementieren ODER remote ausführen
```

---

## Skills im Ultra Plan

Ultra Plan kann Skills aus dem Projekt sehen, aber er ruft sie nicht immer automatisch auf — besonders wenn der Prompt nicht spezifisch genug ist.

**Beispiel-Problem:** Nate wollte Excalidraw-Visualisierungen mit seiner Visualizations-Skill. Ultra Plan erstellte stattdessen Mermaid-Diagramme. Lösung: Kommentar hinzufügen → "Ich habe bereits einen Skill dafür" → Claude: "Wie heißt der Skill?" → Name angeben → Skill wird gefunden und genutzt.

**Lesson:** Explizit auf benötigte Skills hinweisen, besonders bei Ultra Plan.

---

## Token-Kosten

Das Planungs-Compute läuft im Cloud-Kontext des Pro/Max-Plans. Nate's Test:
- 1,5 Mio. Input + 23k Output Tokens bei lokalem Plan → ~1% seines Max 20x Plans
- Ultra Plan-Anteil: Unbekannt, vermutlich mehr als lokaler Plan

**Nicht nutzbar mit API-Billing** — benötigt Pro- oder Max-Plan-Subscription für Web-Zugang.

---

## Geschwindigkeits- und Qualitätsbenchmark (Dashboard-Test)

Gleicher Spec-Prompt an beide Varianten:

| Metrik | Lokales Plan-Mode | Ultra Plan |
|---|---|---|
| Zeit bis Plan-Fertigstellung | 15 Minuten | 2 Minuten |
| Zeit bis Implementierung fertig | 45+ Minuten | ~10 Minuten |
| Lokale Tokens für Implementierung | 131.000 | 82.000 |
| Ergebnis-Qualität | Gut | Vergleichbar/besser |

Ultra Plan war ~3-4x schneller bei der Implementierung — vermutlich weil der Plan so klar war, dass die Agenten weniger nachfragen mussten.

---

## Wie Ultra Plan intern funktioniert (lt. Source-Code-Analyse)

- Cloud-gehostete Instanz läuft auf Opus 4.6
- **Multi-Agent Exploration:** 3 parallele Explorations-Agenten + 1 Critique-Agent
- Jeder Explorations-Agent analysiert das Projekt aus einem anderen Winkel
- Der Critique-Agent bewertet und synthetisiert
- Max. 30 Minuten Compute-Zeit in der Cloud

Unklar bleibt: Wie genau die 4 Agenten koordinieren, ob sie miteinander kommunizieren oder unabhängig arbeiten.

---

## Bekannte Bugs / Einschränkungen (Stand Mai 2026)

- Gelegentliche Authentication-Errors → einfach nochmal versuchen
- Manchmal werden Skills nicht automatisch aufgerufen (→ explizit benennen)
- Keine genaue Token-Anzeige für den Cloud-Teil des Plans
- Nur für Pro/Max-Subscriber; API-Billing nicht unterstützt

---

## Wann Ultra Plan nutzen vs. lokales Plan-Mode

**Ultra Plan:**
- Große, komplexe Features die eine tiefe Analyse benötigen
- Wenn strukturiertes Feedback via Web-Interface gewünscht wird
- Wenn der Plan ein kritisches Fundament für viele Wochen Arbeit wird
- Wenn Geschwindigkeit zählt (Nate's Motto: "First 4h axe sharpening")

**Lokales Plan-Mode:**
- Schnelle, überschaubare Aufgaben
- Kein Git-Repo vorhanden
- API-Billing-Kontext
- Nur im VS Code / Desktop App unterwegs

---

## Abraham Lincoln Zitat (Nates Referenz)

> "Give me six hours to chop down a tree, and I will spend the first four sharpening the axe."

Ultra Plan = die ersten 4 Stunden. Die Investition in Planung zahlt sich bei der Ausführung mehrfach aus.

---

## Relevanz für MAJER

- MAJER hat ein Git-Repository auf GitHub → Grundvoraussetzung erfüllt
- Ultra Plan sinnvoll für: Website-Feature-Sprints, Pocketbase-Schema-Design, n8n-Workflow-Architektur
- Web-Review ermöglicht Heinrich, den Plan durchzulesen und Feedback zu geben, bevor Code geschrieben wird (HITL-Prinzip)
- Token-Kosten-Überlegung: Nur bei wirklich wichtigen Planungsentscheidungen einsetzen
