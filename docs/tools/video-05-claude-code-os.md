# Video 05 — Build & Sell Claude Code Operating Systems (2+ Hour Course)
**Source:** https://youtu.be/bCljOfCH8Ms
**Creator:** Nate Herk
**Relevanz für MAJER:** Sehr hoch — direkt anwendbar auf MAJER-OS-Konzept

---

## Kernaussage
Ein "Claude Code Operating System" ist ein vollständig dokumentiertes, sofort wieder aktivierbares KI-Arbeitsumfeld. Es löst das Problem: "Ich muss jedes Mal von vorne erklären was mein Projekt ist." Das OS stellt sicher, dass Claude in Sekunde 1 jeder Session bereits den vollen Kontext hat.

---

## Architektur eines Claude Code OS
```
.claude/
├── skills/
│   ├── domain-expert/SKILL.md      Kern-Skill für Domain-Wissen
│   ├── security-auditor/SKILL.md   Security-Check-Skill
│   └── content-creator/SKILL.md    Content-Erstellungs-Skill
├── settings.json                   Permissions + Hooks
└── MEMORY.md                       Persistentes Gedächtnis

project-root/
├── CLAUDE.md                       Projekt-Kontext für Claude
├── AGENTS.md                       Kontext für Codex-Agenten
└── docs/
    ├── session_state.md            Current State (aktuelle Session)
    └── progress.md                 Append-only Fortschritts-Log
```

---

## Das 3-Schichten-Modell (Nate Herk)
```
Schicht 1 — KONTEXT (immer geladen):
  CLAUDE.md, SKILL.md-Frontmatter, MEMORY.md Index
  → Immer verfügbar, minimale Tokens

Schicht 2 — SKILL-BODY (bei Trigger):
  SKILL.md Inhalt, §1-§10 Regeln
  → Geladen wenn Skill aktiviert wird

Schicht 3 — RESSOURCEN (on demand):
  docs/session_state.md, docs/progress.md, system_architecture.md
  → Nur geladen wenn explizit gebraucht
```

---

## Progressive Disclosure Pattern
Nate empfiehlt: **Nicht alles in eine Datei.** Aufteilen:
1. Was Claude IMMER wissen muss → CLAUDE.md (kurz!)
2. Was Claude beim Starten eines Tasks wissen muss → SKILL.md
3. Was Claude nur gelegentlich braucht → docs/ Ordner

---

## MAJER OS — aktueller Stand
```
Schicht 1 ✅: MASTER-KONTEXT.md existiert
Schicht 2 ✅: ~/.claude/skills/majer-tech-architect/SKILL.md existiert
Schicht 3 ✅: docs/session_state.md, docs/progress.md, docs/system_architecture.md

Fehlt:
- CLAUDE.md im Monorepo-Root (kurze Projekt-Zusammenfassung für Schicht 1)
- AGENTS.md im Monorepo-Root (für Codex)
- Weitere domänenspezifische Skills (Security, Content, Onboarding)
```

---

## Hooks System (settings.json)
Nate empfiehlt automatische Hooks:
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "echo '[SKILL §7] Denk daran: docs/progress.md und session_state.md updaten!'"
      }]
    }]
  }
}
```

---

## OS-Aufbau für MAJER (nächste Schritte)
1. CLAUDE.md im Monorepo-Root anlegen (Kurzkontext)
2. AGENTS.md für Codex anlegen
3. settings.json Hooks konfigurieren (PostToolUse Reminder)
4. Security-Skill anlegen
5. Onboarding-Skill anlegen
