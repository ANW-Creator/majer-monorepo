# Video 23 — Professionelle Webseiten mit KI erstellen (DE)

**Video-ID:** MHki2JLR428
**URL:** https://youtu.be/MHki2JLR428
**Sprache:** de
**Kanal:** Julian Ivanhoff (DE-Creator, Community ~370 Unternehmer)

---

## Kernthese

Drei konkrete Tricks gegen den "KI-generierten Look" bei Webseiten. Plus: Kompletter Deployment-Flow von Entwicklung bis ins Internet — alles per Sprachbefehl an Claude Code.

---

## Setup: VS Code + Claude Code (Kurzanleitung)

1. **VS Code installieren** (kostenlos, vsсode.microsoft.com)
2. **Ordner erstellen** für das Projekt (z.B. "Website")
3. **CLAUDE.md anlegen** — wichtige Systemanweisungen, wird bei jedem Chat geladen
4. **Claude Code Extension installieren** (6 Mio. Downloads, von Anthropic)
5. **Pro Plan** mindestens nötig (18€/Monat)
6. **Layout:** Links Dateibaum, unten Terminal, rechts Claude Code Chat

---

## Hack 1: Frontend Design Skill von Anthropic

**Was es ist:** Offizieller Skill von Anthropic. Gibt Claude Code klare Designregeln:
- Farbpaletten-Regeln
- Mikroanimationen
- Asymmetrische Layouts
- Atmosphärische Hintergründe

**Installation über skills.sh:**

Die Seite `skills.sh` (Vercel-betrieben) ist eine Bibliothek verfügbarer Skills für Claude Code und andere Agenten (auch Anti Gravity / Codex). Enthält u.a.:
- Find Skill Skill (hilft Claude andere Skills zu finden)
- Frontend Design Skill (#4 auf der Liste)
- Skill Creator Skill
- Viele weitere (Azure, Microsoft Foundry, etc.)

```bash
# Im Terminal (aus skills.sh kopieren):
npx @skills/install frontend-design
# Falls npx-Fehler: Fehler an Claude schicken → er installiert npm-Paket
```

Bei der Installation wählen:
- Welcher Coding Agent (Claude / Anti Gravity / Codex)
- Scope: Projektebene oder Global

Ergebnis: `.claude/skills/frontend-design/skill.md` — eine reine Markdown-Datei mit Designregeln.

**Wie Skills funktionieren:** Claude liest bei jeder Anfrage nur die kurze YAML-Beschreibung am Anfang jeder Skill-Datei — entscheidet dann ob der Skill relevant ist. Spart Tokens: Volle Skill-Datei wird nur gelesen wenn sie gebraucht wird.

---

## Hack 2: UI UX Pro Max Skill

**Was es ist:** Branchenspezifische Designgenerierung. Ein Design für eine Modefirma muss anders aussehen als für eine Tech-Firma.

**Inhalt:**
- 67 UI Styles
- 96 Branchenfarb-Paletten
- 57 Font Pairings
- 24 Landing Page Patterns
- Anti-Patterns (was für welche Branche vermieden werden soll)

**Installation via GitHub-Repository (empfohlene Methode):**

```
"Installiere diesen Skill: [GitHub-Repository-URL]"
```

Vorteil gegenüber Terminal-Command: Alle Dateien werden korrekt installiert. Bei Terminal-Command fehlen manchmal bestimmte Assets.

Ergebnis: `.claude/skills/ui-ux-pro-max/` mit:
- `skill.md`
- Mehrere CSV-Dateien (Styles, Farben, Charts)
- Python-Skripte

---

## Hack 3: 21st.dev Komponenten-Bibliothek

**Was es ist:** Riesige Bibliothek fertiger, professioneller UI-Komponenten. Kostenlos nach Account-Erstellung.

Enthält: Navigationen, Hero Sections, Pricing Cards, Dashboards, Logo-Integrationen, AI Chat-Komponenten, Animationen.

**Workflow:**
1. 21st.dev öffnen
2. Gewünschte Komponente finden (z.B. Hero Section mit Lichtanimation)
3. "Copy Prompt" klicken
4. In Claude Code einfügen: "Passe die Hero Section an sodass sie diesem Design folgt" + Prompt einfügen

Claude baut die Komponente exakt nach dem Template-Stil nach und integriert sie in die bestehende Website.

---

## CLAUDE.md — Persistente Konfiguration

Empfohlener Inhalt für eine Website-CLAUDE.md:

```markdown
# Website-Projekt

## Tech-Stack
[HTML/CSS/JS | React | Next.js — je nach Wahl]

## Design-Regeln
- Nutze immer zuerst das Ask User Question Tool um das Design zu interviewen
- Nutze immer den Frontend Design Skill für alle UI-Entscheidungen
- Nutze den UI UX Pro Max Skill für branchenspezifische Entscheidungen
- Nutze 21st.dev Komponenten wenn diese vom User vorgegeben werden

## [Weitere projektspezifische Regeln]
```

Die CLAUDE.md wird bei jedem Chat neu geladen → Claude muss nicht immer neu erklärt werden was er tun soll.

---

## Live-Demo: Designagentur "Void Studio"

Prompt:
```
"Erstelle eine Beispielwebsite für die Designagentur Void Studio. 
Void Studio erstellt Logos, Websites und allgemeines Branding. 
Nutze den Frontend Design und UI UX Pro Max Skill."
```

Ablauf:
1. Plan-Mode aktivieren (für größere Projekte immer empfohlen)
2. Claude liest Skills, analysiert Python-Skripte
3. ~2 Minuten: Implementierungsplan mit Phasen, Inhalten, Sektionen
4. Approve → Claude implementiert

Ergebnis: Professionelle Website mit:
- Smooth Animations bei Hover
- Moderne Sektionen
- Schönes Logo-Design
- Portfolio-Bereich
- Über-uns-Sektion mit Statement

Dann Hero Section mit 21st.dev-Komponente updaten:
```
"Passe die Hero Section an sodass sie diesem Design folgt: [Template-Prompt]"
```
→ Website sieht sofort noch professioneller aus.

---

## Deployment via GitHub + Hostinger

### Schritt 1: GitHub-Setup

```
"Installiere die GitHub CLI"
"Erstelle ein neues Repository für mein Projekt auf GitHub"
```

Claude installiert `gh` CLI, initialisiert Git, erstellt Repository, pusht alles hoch.

**Git vs. GitHub:**
- **Git:** Versionskontrolle lokal (Snapshots = Commits)
- **GitHub:** Cloud-Speicher für Code (Push = hochladen, Pull = herunterladen)

```
"Pushe meine Änderungen auf GitHub"
→ Claude committed + pusht automatisch
```

### Schritt 2: Hostinger Node.js Webapp Hosting (einfachste Methode)

Kosten: ~3€/Monat

1. Hostinger Dashboard → Websites → Node.js Webapp hinzufügen
2. GitHub-Repository verknüpfen (einmalige Permissions)
3. Framework wird erkannt → Deploy klicken
4. Deployment completed → Link zur Website

Bei Framework-Fehler:
```
Screenshot von Hostinger-Fehler an Claude schicken:
"Ich will meine Website bei Hostinger deployen über das Node.js Webapp Deployment"
→ Claude analysiert, konvertiert Projekt, pushed das Update
→ Erneut in Hostinger deployen → funktioniert
```

### Schritt 3: Deployment auf eigenem VPS (für wer schon einen hat)

Hostinger Dashboard → VPS → Docker Manager → Projects → Compose → Compose from URL

GitHub-Repository-URL einfügen. Bei Docker-Fehler:
```
Screenshot an Claude:
"Ich will die Website auf meinem VPS über Docker Manager installieren"
→ Claude erstellt Dockerfile + docker-compose.yml
→ Pushed auf GitHub
→ Erneut in Hostinger deployen
```

Bei Port-Konflikt (80 belegt):
```
Claude: "Port 80 ist belegt, ich ändere auf 8080"
```
→ Deploy funktioniert.

Domain verbinden: Einfach Claude beschreiben welche Domain man hat, er erklärt die Schritte. Mit VPS-Zugang richtet er es direkt ein.

---

## Bypass Permissions Modus

Für produktive Arbeit ohne ständige Bestätigungen:

```
Unten rechts → Slash-Symbol → General Config → 
"Dangerously Skip Permission Mode" aktivieren
→ Bypass Permissions Mode erscheint unten als Toggle
```

**Wann nutzen:** Entwicklungsarbeit, Tests, Demo-Projekte
**Wann NICHT nutzen:** Wichtige Projekte wo man jeden Befehl sehen will

---

## Skills-Ökosystem: Übertragbarkeit

Alle drei Hacks (Frontend Design Skill, UI UX Pro Max Skill, 21st.dev) funktionieren nicht nur für Webseiten, sondern auch für:
- Webapps (mit React, Next.js etc.)
- Dashboards
- Alle weiteren Frontend-Projekte

---

## Relevanz für MAJER

Direkt anwendbar auf `apps/verein` Entwicklung:

| Hack | MAJER-Anwendung |
|---|---|
| Frontend Design Skill | Bereits in MAJER-Workflow bekannt; beim Website-Aufbau nutzen |
| UI UX Pro Max Skill | Für zielgruppenspezifische Designs (Schüler/Student/Lehrer/Förderer) |
| 21st.dev Komponenten | Hero Section, Persona-Switch-Modal, Pricing Cards |
| GitHub-Workflow | Bereits vorhanden — push/pull via Claude Code |
| Hostinger-Deployment | MAJER nutzt Hostinger VPS → Docker-Compose-Deployment direkt anwendbar |

**Besonders wertvoll:** Der Docker-Compose-Deployment-Flow über Hostinger VPS ist exakt das, was MAJER für das Go-Live von apps/verein braucht.
