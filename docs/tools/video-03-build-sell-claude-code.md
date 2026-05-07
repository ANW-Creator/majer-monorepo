# Video 03 — Build & Sell with Claude Code (10+ Hour Course)
**Source:** https://youtu.be/mpALXah_PBg
**Creator:** Nate Herk
**Relevanz für MAJER:** Hoch — Claude Code OS Konzept direkt anwendbar auf Vereins-Infrastruktur

---

## Kernaussage
Claude Code ist nicht nur ein Coding-Assistent — es ist ein **Operating System** für Projekte. Wer ein "OS" für seinen spezifischen Use Case baut (SKILL.md + AGENTS.md + Workflows), hat einen riesigen Vorteil gegenüber Ad-hoc-Prompting. Das OS macht Claude Code zu einem "Mitarbeiter der den Job kennt".

---

## Was ein "Claude Code Operating System" ist
```
Claude Code OS = SKILL.md + AGENTS.md + Skills/ + Workflows/ + CLAUDE.md
```

| Komponente | Zweck | MAJER Pendant |
|---|---|---|
| `SKILL.md` | Operative Regeln für Claude | ✅ bereits in ~/.claude/skills/ |
| `AGENTS.md` | Regeln für Codex-Agenten | → erstellen |
| `CLAUDE.md` | Projektkontext | ✅ in verein-plattform/ |
| Workflows | Wiederholbare Task-Abläufe | → in ~/.codex/workflows/ |
| Skills | Spezialwissen für Domänen | → majer-tech-architect + website-architect |

---

## Nate Herks Systematik für wiederkehrende KI-Arbeit
1. **Dokument alles in Echtzeit** — jede Entscheidung sofort festhalten (→ progress.md ✅)
2. **Baue keine Features, baue Systeme** — nicht die Website, sondern das CMS-System dahinter
3. **Lehre die KI deinen Kontext** — je mehr MAJER-Kontext in SKILL.md/AGENTS.md, desto besser
4. **Verkaufe den Prozess, nicht das Produkt** — das Claude Code OS ist das Produkt

---

## Für MAJER relevant: Das OS-Konzept
Was Nate "Build & Sell" nennt = Was wir "Vereins-Infrastruktur" nennen:
- Der Verein verkauft keine Webseite — er verkauft Lernpfade, Workshops, Begleitung
- Das OS dahinter (n8n + Pocketbase + Next.js + SKILL.md) ist das was läuft
- Externe (Förderer, Schulen) sehen die Webseite
- Intern: Das OS produziert Content, verfolgt Fortschritt, sendet Zertifikate

---

## Skills die laut Nate am häufigsten gekauft werden
(Anwendbar auf Vereins-Dienstleistungen):
1. Code-Review & Security-Audit Skills
2. API-Integration Skills
3. Deployment-Automatisierungs-Skills
4. Content-Generation Skills (n8n-basiert)
5. Dashboard/Analytics Skills
6. Onboarding-Automatisierungs-Skills ← direkt für Vereins-Mitglieder anwendbar

---

## Zu erstellen für MAJER
```
~/.codex/workflows/
├── scaffold-nextjs-page.md     Neues Next.js Page-Scaffold
├── add-pocketbase-collection.md  Neue PB-Collection + Typen
├── security-audit.md           OWASP-Check für neue Features
└── generate-workshop-content.md  Lerninhalt-Generierung
```
