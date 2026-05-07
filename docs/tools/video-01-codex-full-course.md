# Video 01 — Master 97% of Codex in 1 Hour (Full Course)
**Source:** https://youtu.be/3TdD8Qv5Tk8
**Creator:** Nate Herk (Uppit AI, ex-Goldman Sachs BI Analyst)
**Relevanz für MAJER:** Hoch — Codex als zweiter Agent neben Claude Code

---

## Kernaussage
Codex ist kein Autocompletion-Tool mehr — es ist ein vollständiger Software-Engineer-Agent, der lokal auf dem Rechner läuft, Dateien liest/schreibt/ausführt und komplexe Projekte end-to-end abarbeitet. In 1 Stunde baut man ein vollständiges, deployed-es System.

---

## Was Codex ist
- **OpenAI Codex CLI**: Open-Source Coding-Agent (in Rust geschrieben), läuft lokal im Terminal
- Installation: `npm i -g @openai/codex` oder `brew install --cask codex`
- Requires: Node.js ≥22
- Auth: ChatGPT Plus/Pro Account ODER API-Key
- Config: `~/.codex/config.toml`
- Läuft im **Agent-Modus**: liest Dateien, führt Befehle aus, schreibt Änderungen

---

## Kernfähigkeiten die man konfigurieren kann
1. **Reusable Workflows** — vorgefertigte Task-Abläufe die immer wieder aufgerufen werden
2. **Skills** — ähnlich Claude Code Skills: kontextspezifische Anweisungen
3. **Dashboard-Deployment** — Codex kann gesamte Deploy-Pipeline anstoßen
4. **Browser-Use QA** — automatisches Testen im Browser (Playwright/Puppeteer-Integration)
5. **Shipping ohne Oversight** — Codex arbeitet in Iterationen bis Task erledigt

---

## Praxisbeispiel im Video
Nate baut ein **YouTube Comment Intelligence System** komplett von Scratch:
- Schritt 1: Codex analysiert YouTube-Kommentare via API
- Schritt 2: Sentiment-Analyse + Kategorisierung
- Schritt 3: Dashboard-UI generiert und deployed
- Ergebnis: Vollständig deployed in <1 Stunde

---

## MAJER Anwendungsfälle
| Task | Tool |
|---|---|
| Website-Scaffold generieren | Codex |
| n8n-Workflow-JSON schreiben | Codex |
| Sicherheits-Audit (OWASP-Check) | Codex |
| Docker-Compose-Validation | Codex |
| Frontend-Komponenten aus Design-Mockup | Claude Code |
| Architekturentscheidungen | Claude Code |
| DSGVO-Compliance-Prüfung | Claude Code |

---

## Setup-Anleitung für MAJER
```bash
# 1. Node 22+ sicherstellen
node --version  # muss ≥22 sein

# 2. Codex installieren
npm i -g @openai/codex

# 3. Authentifizieren
codex  # öffnet Browser für ChatGPT-Login ODER
codex --api-key sk-...  # mit API-Key

# 4. Im Monorepo testen
cd /Users/heinrich/dev/majer-monorepo
codex "Erkläre mir die Ordnerstruktur dieses Projekts"
```

---

## Tricks aus dem Kurs
- **AGENTS.md** im Projektroot: erklärt Codex die Projekt-Architektur (ähnlich CLAUDE.md)
- Codex liest `.codex/config.toml` für globale Einstellungen
- Workflows in `~/.codex/workflows/` ablegen für Wiederverwendung
- `codex --full-auto` für maximale Autonomie (mit Vorsicht nutzen!)
- Screenshots als Input möglich (Wireframe → Code)
