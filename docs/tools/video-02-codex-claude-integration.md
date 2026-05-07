# Video 02 — Codex Just 10x'd Claude Code Projects
**Source:** https://youtu.be/B2Kh_ZoLVTM
**Creator:** Nate Herk
**Relevanz für MAJER:** Sehr hoch — konkrete Arbeitsteilung Claude Code ↔ Codex

---

## Kernaussage
Codex und Claude Code sind keine Konkurrenten — sie sind **komplementäre Tools**. Codex (GPT-basiert) ist stark bei Implementierung und Execution, Claude Code ist stark bei Architektur, DSGVO-Denken und Kontext. Zusammen multiplicieren sie den Output.

---

## Claude Code vs. Codex — Stärken-Vergleich
| Dimension | Claude Code (Anthropic) | Codex (OpenAI) |
|---|---|---|
| Architektur-Denken | ✅ Stark | ⬜ Mittel |
| Kontext-Window | ✅ Sehr groß | ⬜ Groß |
| Safety/DSGVO-Bewusstsein | ✅ Eingebaut | ⬜ Manuell |
| Code-Execution Speed | ⬜ Mittel | ✅ Sehr schnell |
| Test-Schreiben | ⬜ Gut | ✅ Sehr gut |
| Browser-Automatisierung | ⬜ Begrenzt | ✅ Direkt |
| Preis bei intensiver Nutzung | ⬜ Teurer | ✅ ChatGPT Plus flat |

---

## Die Workflow-Kombination (Nate Herks Empfehlung)
```
Phase 1 — ARCHITEKTUR (Claude Code):
  → Systemdesign, SKILL.md, Entscheidungen, DSGVO-Compliance

Phase 2 — IMPLEMENTIERUNG (Codex):
  → Scaffolding, Komponenten-Generierung, API-Integration, Tests

Phase 3 — REVIEW (Claude Code):
  → Code-Review, Security-Check, Refactoring-Empfehlungen

Phase 4 — DEPLOYMENT (Codex):
  → CI/CD-Konfiguration, Docker-Compose-Ausführung, Browser-QA
```

---

## Live Demo: Game Build (im Video)
Nate lässt Codex ein vollständiges Web-Game bauen:
- Codex schreibt HTML/CSS/JS
- Claude Code reviewed und gibt Security-Feedback
- Codex implementiert Fixes
- Ergebnis: Deployed in <30 Minuten

---

## MAJER Workflow-Empfehlung
```
1. Claude Code: SKILL.md + Architektur + DSGVO-Plan ← bereits getan
2. Codex: website/apps/verein/ Scaffold generieren
3. Claude Code: Security-Review des Scaffoldings
4. Codex: Fehlende Komponenten bauen (Persona-Switch, Login-Portal)
5. Claude Code: Code-Review + DSGVO-Compliance
6. Codex: Tests schreiben + Browser-QA
7. Claude Code: Finaler Sign-off vor Production
```

---

## Wichtig: AGENTS.md für Codex
Erstelle `/Users/heinrich/dev/majer-monorepo/AGENTS.md`:
- Beschreibt dem Codex die Projekt-Architektur
- Definiert verbotene Aktionen (keine .env-Edits, kein git push)
- Referenziert SKILL.md §8 für Naming-Conventions
