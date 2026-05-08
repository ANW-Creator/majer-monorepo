# Video 11 — Claude Agent Teams

**Video-ID:** vDVSGVpB2vc
**URL:** https://youtu.be/vDVSGVpB2vc
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Agent Teams sind ein experimentelles Feature von Claude Code, bei dem mehrere spezialisierte Agenten parallel an einer Aufgabe arbeiten, sich gegenseitig Nachrichten schicken und einen gemeinsamen Task-List nutzen. Das Ergebnis ist höhere Qualität als Einzelagent oder Sub-Agenten — zum Preis von mehr Tokens und langsamerer Ausführung.

---

## Agent Teams vs. Sub-Agenten

| | Sub-Agenten | Agent Teams |
|---|---|---|
| Koordination | Unabhängig, Ergebnis geht zurück an Main | Shared Task List + direkte Kommunikation |
| Kommunikation | Nur über Main-Session | Direkt Agent-zu-Agent |
| Parallelität | Ja (aber kein Informationsaustausch) | Ja + Informationsaustausch |
| Iterationen | Main schickt Ergebnis weiter | Teams reagieren aufeinander (z.B. QA schickt zurück) |
| Kosten | Normal | 3 Agenten = ~3x die Kosten |
| Qualität | Hoch | Höher (bei richtiger Nutzung) |

**Kernunterschied:** Sub-Agenten schicken Einzelergebnisse. Agent Teams können sich die Arbeit gegenseitig zurückwerfen — z.B. QA findet Fehler → schickt an Frontend + Backend → zweiter Durchlauf → QA gibt Freigabe.

---

## Einrichtung

Agent Teams sind standardmäßig deaktiviert (experimentelles Feature). Aktivierung über Projekt-Settings:

```bash
# In Claude Code sagen:
"Füge diese JSON in unsere lokalen Settings ein: 
{ 'CLAUDE_AGENT_TEAMS_ENABLED': true }"
```

Claude erstellt dann `.claude/settings.local.json` mit der Variable.

**Empfehlung:** Zuerst die Dokumentation als Referenz-Guide ins Projekt laden:

```
"Erstelle mir einen Master Reference Guide für Agent Teams in einem docs-Ordner. 
Das wird genutzt um bessere und effektivere Agenten zu bauen."
```

→ Claude liest die Doku und speichert sie lokal als Markdown. Schnellere Nachschlagemöglichkeit als jedes Mal Web-Abfrage.

---

## Prompting-Muster für Agent Teams

**Grundstruktur:**

```
Ziel: [Was am Ende erreicht sein soll]

Erstelle ein Team von [Anzahl] Agenten mit [Modell] (Haiku/Sonnet/Opus).

Agent 1: [Rolle]
- Aufgabe: [Was er macht]
- Deliverable: [Was er liefert]
- Kommunikation: Wenn fertig, schicke X an Agent 2

Agent 2: [Rolle]
- Aufgabe: [Was er macht]
- Warte auf: Nachricht von Agent 1
- Schicke Ergebnis an: Agent 3

Agent 3: [Rolle = QA]
- Aufgabe: Alles reviewen
- Bei Problemen: Schicke zurück an relevante Agenten

Finale Deliverables:
- [Was ich am Ende haben möchte]
- [Welche Dokumentation ich will]
```

**Wichtig:** Goal am Anfang stellen, damit Agenten beim Aufwachen verstehen warum sie die Teammates haben.

---

## Dos und Don'ts

| Do | Don't |
|---|---|
| Jedem Agenten eigene Dateien zuweisen | Agenten auf gleichen Dateien arbeiten lassen |
| Deliverables klar definieren | Vage Outputs akzeptieren |
| Empfänger explizit nennen ("sende an Agent X") | Annehmen dass sie automatisch wissen wen sie kontaktieren |
| 3-5 Agenten max | 10+ Agenten-Schwärme |
| Vollem Context geben (kein Kontext im Startmoment) | Davon ausgehen dass Agenten Projekthistorie kennen |

---

## Was Agenten beim Aufwachen wissen

Agenten erben von der Main-Session:
- Alle **Permissions** (bypass = alle Agenten auf bypass)
- Alle **MCP-Server**
- Alle **Skills**
- Zugriff auf alle **Projektdateien**

Sie erhalten NICHT:
- Den Gesprächsverlauf der Main-Session
- Kontext aus vorherigen Sessions

Deshalb: Den Aufgaben-Kontext explizit in den Team-Prompt schreiben.

---

## Plan Approval Mode

Agenten können gezwungen werden, zuerst einen Plan zu erstellen, der genehmigt werden muss, bevor sie ausführen:

```
"Alle Agenten müssen ihren Plan zunächst dem Main-Agent zur Genehmigung vorlegen 
bevor sie mit der Implementierung beginnen."
```

Alternativ: Ein Agent in der Gruppe ist nur Plan-Reviewer und -Approver.

---

## Visualisierung mit T-mux

Im VS Code Extension sieht man nur Updates vom Main-Agent. In einem T-mux-Terminal kann man alle Agenten gleichzeitig sehen:

- Jeder Agent in einem eigenen Pane (farbkodiert: blau/grün/gelb)
- Direkte Kommunikation mit einzelnen Agenten möglich
- Echtzeit-Beobachtung von Denk- und Arbeitsschritten

T-mux Setup: Claude Code läuft einfach in einem T-mux-Terminal. Nate hat Claude ihn durch das Setup führen lassen — "super simple".

---

## Häufige Probleme + Lösungen

| Problem | Ursache | Lösung |
|---|---|---|
| Agenten fragen ständig nach Permissions | Keine Vorfreigabe | Bestimmte Commands in Settings erlauben |
| Deliverables werden überschrieben | Mehrere Agenten auf gleichen Dateien | Strikte Datei-Eigentümerschaft definieren |
| Agent sitzt rum und tut nichts | Keine explizite Aufgabe/Dependency | Explizit Aufgabe oder Abhängigkeit im Prompt definieren |
| Zu viele Tokens | Zu viele Agenten | Weniger Agenten; prüfen ob Sub-Agenten ausreichen |
| Arbeit geht verloren | Agent wird abgewürgt | Agenten sollen alles als temporäre Datei speichern |
| Falsche Approvals | Main-Agent genehmigt falsch | Selbst approven bis Flow verstanden |

---

## Sauberes Beenden

Das Main-Session schickt Shutdown-Requests an alle Agenten. Agenten können antworten: "Noch nicht fertig, speichere gerade" — dann warten. Erst wenn alle bestätigen, wird das Team sauber geschlossen.

Niemals Team einfach force-killen — Dateien könnten unkonsistent sein.

---

## Wann Agent Teams sinnvoll sind

**Nutze Agent Teams wenn:**
- Mehrere spezialisierte Bereiche (Frontend, Backend, QA)
- Parallele Arbeit nötig
- Agenten aufeinander reagieren sollen
- Hohe Qualität wichtiger als Kosten/Geschwindigkeit
- Aufgaben-Komplexität rechtfertigt Overhead

**Nutze stattdessen Sub-Agenten wenn:**
- Sequentielle Schritte (1→2→3 abhängig)
- Alles in einer Konversationshistorie bleiben soll
- Gleiche Dateien werden bearbeitet
- Einfachere Aufgabe
- Token-Effizienz wichtig

**Faustregel:** 2-5 Agenten maximum. Mehr als das = sinkender Grenzertrag bei exponentiell steigenden Kosten.

---

## Demo-Ergebnis aus dem Video

Prompt: "Baue mir eine Landing Page für ein fiktives AI-Startup."

Team: Frontend Dev (blau) + Backend Dev (grün) + QA Agent (gelb)

Ablauf:
1. Frontend + Backend arbeiten parallel
2. Schicken Arbeit an QA
3. QA findet 3 kritische Issues
4. Main-Session schickt zurück an Frontend + Backend
5. QA gibt zweiten Durchlauf frei
6. Ergebnis: Polierte Landing Page mit Animationen, Farbschema, Copy — alles

Zeit: Nicht quantifiziert, aber "mit dem ersten Prompt eingeschossen"

---

## Relevanz für MAJER

Direkter Einsatz für:
- Website-Aufbau: Frontend Dev + Backend Dev + QA Agent
- Pocketbase-Integration: API-Designer + Schema-Engineer + Tester
- Fördermittelantrag-Automatisierung: Researcher + Writer + Critic

Für jetzt noch zu früh (Rate Limits, Kosten) — aber das Muster kennen ist wichtig für spätere Skalierung.
