# Video 05 — 6 Sellable Skills nach 400 Stunden Claude Code

**Video-ID:** eRS3CmvrOvA
**URL:** https://youtu.be/eRS3CmvrOvA
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Nach 400 Stunden Claude Code und Arbeit mit echten Kunden (Real Estate, HVAC, Coaches, Marketing Agencies) zeigen sich immer dieselben 6 Skill-Kategorien, für die Unternehmen zahlen. Nicht wegen Technik-Interesse — weil sie Zeit sparen, Fehler reduzieren oder Geld einbringen.

---

## Terminologie-Klärung: Skill vs. Plugin

- **Skill:** Markdown-Datei, die Claude erklärt wie er eine Aufgabe lösen soll. Wird automatisch bei passenden Anfragen geladen.
- **Plugin:** Größeres Paket um einen Skill herum — kann mehrere Skills enthalten, plus Hooks und MCP Server. Ändert das Verhalten von Claude Code unter der Haube.

In diesem Video wird "Skill" als Oberbegriff für beide verwendet, weil die Unterscheidung für den Verkaufsaspekt irrelevant ist.

---

## Die 6 Skills

### 1. Skill Creator

**Was es ist:** Anthropic-offizieller Skill, der jeden anderen Skill baut.

**Installation:**
```bash
/plugin install skill-creator
```
Empfohlen: Global installieren (`user scope`), damit er in jedem Projekt verfügbar ist.

**Problem das er löst:** Manuelle Skill-Erstellung ist fehleranfällig — falsches Format, unklare Trigger-Bedingungen, Skills die brechen. Der Skill Creator nimmt eine Plain-English-Beschreibung und erstellt, testet, iteriert die Skill-Datei automatisch.

**Business-Wert:** Indirekter Wert — er baut alle anderen verkaufbaren Skills.

---

### 2. Superpowers

**Was es ist:** Erzwingt Senior-Developer-Arbeitsweise statt Sprint-und-beten.

**Installation:**
```bash
/plugin install superpowers
```
(150.000+ GitHub Stars — eine der beliebtesten Community-Skills)

**Was Claude damit macht:**
- Plant das gesamte Problem durch, bevor Code geschrieben wird
- Arbeitet in isolierter Umgebung (kein Risko für Hauptprojekt)
- Schreibt Tests bevor Code
- Brainstormt Edge Cases
- Reviewt Ergebnis zweimal: erst auf Spec-Konformität, dann auf Code-Qualität

**Problem das er löst:** Claude ohne Superpowers springt zum Code. Sieht auf dem ersten Blick gut aus, bricht bei Nutzung. Mit Superpowers: 80% statt 60% korrekt auf erstem Durchgang → weniger Debug-Zyklen, weniger Token-Kosten, weniger peinliche Kunden-Bugs.

---

### 3. GSD (Get Shit Done)

**Was es ist:** Context Engineering Plugin — bekämpft Context Rot.

**Installation:**
```bash
/plugin install gsd
# Dann: /gsd-help für verfügbare Befehle
```

**Problem das er löst:** Context Rot: Gegen Ende einer langen Session fängt Claude an, Anforderungen zu vergessen, Schritte zu überspringen, "fertig" zu sagen obwohl es nicht fertig ist.

**Wie er das löst:**
- Spawnt Sub-Agenten für jede Aufgabe → jeder startet mit einem frischen, fokussierten Context Window
- Main-Session bleibt sauber
- Eingebaute Quality Gates:
  - Scope Protection: Erkennt wenn Planner eine Anforderung still fallen lässt
  - Security Enforcement: Verifiziert Sicherheitsanforderungen
- Autonomer Modus: Spec rein → Claude plant, executes, committet, liefert

**Wichtiger Hinweis:** GSD spart keine Tokens (mehr Sub-Agenten = mehr Tokens), spart aber Stunden durch weniger Redo-Arbeit.

---

### 4. /review und /ultra review

**Was es ist:** Eingebaut in Claude Code — kein Install nötig (ab Version 2.1.86).

**Verwendung:**
```bash
/review          # Lokaler Code Review nach dem Schreiben
/ultra review    # Cloud-basierter Parallel-Review
```

**Unterschied:**
| | /review | /ultra review |
|---|---|---|
| Laufort | Lokal, im Terminal | Cloud Sandbox |
| Geschwindigkeit | Sofort | 10-20 Min (Hintergrund) |
| Review-Tiefe | Einzel-Durchlauf | Flotte paralleler Reviewer-Agenten |
| Bereiche | Bugs, Edge Cases, Design | Logic, Security, Performance, Edge Cases |
| Verifikation | Keine | Bugs müssen unabhängig bestätigt werden |
| Kosten | Normal-Tokens | 5-20$ pro Run (Pro/Max: 3 gratis) |

**Wann /ultra review nutzen:** Vor jedem Merge, der wirklich zählt. Große Refactors, Zahlungs-Code, Auth-Änderungen, DB-Migrationen. Ein Produktions-Bug kostet mehr als der Review.

**Voraussetzungen:** Claude Account (kein reiner API Key), Version 2.1.86+.

---

### 5. Context Mode

**Was es ist:** Plugin das Context-Bloat verhindert und Session-Kontinuität sicherstellt.

**Installation:**
```bash
/plugin install context-mode
# Dann Claude Code neu starten
```
Das Plugin auto-installiert MCP Server, Hooks und Routing-Instruktionen.

**Problem das er löst:**
- Ein Playwright-Snapshot = 56 KB Rohdaten in Context
- 20 GitHub Issues = 59 KB
- Nach 30 Minuten: 40% des Context Window ist Müll

**Wie er das löst (Teil 1 — Bloat verhindern):**
- Routet alle Tool-Calls durch eine Sandbox
- Nur das was Claude wirklich braucht kommt zurück
- Benchmarks (lt. Publisher): 56 KB Playwright → 299 Bytes; 46 KB Access Log → 155 Bytes; 315 KB total → 5 KB

**Wie er das löst (Teil 2 — Session-Kontinuität):**
- Trackt jeden bedeutsamen Event in lokaler SQLite-Datenbank (Datei-Edits, Entscheidungen, Fehler, Tasks)
- Bei Compaction: Rekonstruiert Session-Snapshot, injiziert ihn zurück
- Sessions laufen 3h statt 30min ohne Qualitätsabfall

**Check:** `/contextmode:ctx-stats` für eigene Statistiken

---

### 6. ClaudeMem

**Was es ist:** Cross-Session-Memory Plugin mit automatischer Dokumentation.

**Installation:**
```bash
# NICHT: npm install (registriert keine Hooks)
# NUR diese zwei Befehle (lt. Repo-Warnung):
/plugin install claudemem
# + zweiter Befehl gemäß aktueller Doku
```

**Problem das er löst:** Claude startet jede neue Session von Null. Jede neue Session kostet 10 Min + Tausende Tokens für "wer bin ich, was machen wir hier?"

**Wie er das löst:**
- Hook ins Session-Lifecycle: Erfasst automatisch was in der Session passiert ist (Edits, Entscheidungen, Bugs, Befehle)
- Komprimiert zu semantischen Summaries in lokaler SQLite-DB mit Vektorsearch
- Beim Session-Start: Relevante Teile werden automatisch injiziert
- Auto-generiert folder-level CLAUDE.md Dateien + aktualisiert sie während der Arbeit

**Token-Effizienz (lt. Repo-Benchmark):** 10x weniger Tokens beim Retrieval gegenüber "alles reinwerfen" dank 3-Schichten-System:
1. Kompakter Index aller Observations
2. Timeline rund um relevante Einträge
3. Volle Details nur für den Handoff der gebraucht wird

---

## Bonus: Frontend Design Skill (7)

Für Website- und UI-Arbeit:
```bash
/plugin install frontend-design
```
Macht Claude Code deutlich besser beim Design von Frontends — reduziert den "KI-generierten Look". Auch in Anthropic Labs' "Claude Design" nativ integriert.

---

## Wie man diese Skills verkauft

**Falsch:** "Ich baue AI Workflows in Claude Code"
**Richtig:** "Ich spare euch 10 Stunden pro Woche" / "Ich reduziere eure Admin-Fehlerquote um X%"

Businesses kaufen Ergebnisse, keine Technologie.

**Strategie:**
1. Nicht alle 6 auf einmal. Einen auswählen, lernen, Demo zeigen.
2. Demo schlägt Erfahrung — Businesses interessiert der Output, nicht der Lebenslauf.
3. Preise: Value-Based statt Stundensatz. 30 Minuten Arbeit die 20h/Woche spart = kein 30-Minuten-Job.

---

## Relevanz für MAJER

| Skill | Direktnutzen |
|---|---|
| Skill Creator | Baut alle eigenen MAJER-Skills — bereits im Einsatz |
| Superpowers | Beim Bau der Website + Portal-Features sinnvoll |
| GSD | Bei langen Entwicklungs-Sessions für Formulare, Pocketbase-Integration |
| /review | Nach jedem Feature-Commit |
| Context Mode | Bei intensiven Coding-Sessions |
| ClaudeMem | Ergänzt das bestehende Memory-System |
