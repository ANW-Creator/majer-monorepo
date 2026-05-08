# Claude Code: Kompletter Kurs — Beginner zu Pro

**Quelle:** https://www.youtube.com/watch?v=mpALXah_PBg
**Video-ID:** mpALXah_PBg
**Sprache:** en
**Transkript:** .tmp/transcripts/mpALXah_PBg.txt

## Kernaussage

Nate Herks vollständiger Claude Code Kurs mit 24 Kapiteln — von der Einrichtung über den WAT-Framework, Deployment auf Trigger.dev/Modal/Vercel, bis hin zu GWS CLI, Skills, Sub-Agents, Browser-Automation und Monetarisierung. Das Video ist der umfassendste Leitfaden im Transkript-Bestand und dient als Referenz für alle operativen Entscheidungen rund um Claude Code als Produktionssystem.

## Hauptkonzepte und Techniken

### 1. Der Marktshift zu Agentischen Workflows
Der Agentic AI Markt wächst von ~8 Mrd. USD auf 40–50 Mrd. bis 2030. 25% der Unternehmen deployen bereits Agentic Pilots. Der entscheidende Unterschied zu traditioneller Automation (n8n, Zapier): Agentic Workflows heilen sich während des Bauens selbst ("self-healing while building"), aber im deploierten Zustand verhalten sie sich wie deterministische Automationen — das ist erwünscht. "Traditional automation is like building a train track by hand. With agentic workflows, it's like telling a construction crew to build it."

### 2. Der WAT-Framework (Workflows, Agent, Tools)
Das zentrale Betriebsmodell für Claude Code Projekte:
- **Workflows**: Markdown-Dateien in natürlicher Sprache, ähnlich einer Rezept-Anleitung. Sie definieren Reihenfolge und Prozess.
- **Agent**: Claude Code selbst — liest Workflows, führt Tools aus, verbessert beides über Zeit.
- **Tools**: Einzelne ausführbare Bausteine (API-Calls, Datei-Operationen, Browser-Aktionen). Ohne Workflow-Struktur sind Tools nutzlos.
Das Framework ist tool-agnostisch: "As long as you have some sort of instructions and guidelines over what actually lives where, they can all work out of that directory."

### 3. CLAUDE.md als System Prompt
`claude.md` ist nichts anderes als ein System Prompt — gelesen bei jeder Session. Enthält: Ordnerstruktur, verwendete Frameworks, Ziel des Projekts, Konventionen. Empfehlung: WAT-Framework claude.md aus der Community herunterladen und als Basis verwenden. Claude setzt dann das gesamte Projektgerüst auf: Agent-Ordner, Workflow-Ordner, Tools-Ordner.

### 4. Claude Code in VS Code installieren und nutzen
Einrichtung: VS Code installieren → Extensions → "Claude Code" installieren → mit Claude-Subscription (ab Pro $17/Mo) authentifizieren. In VS Code: links Dateien, rechts Claude Code Agent. Ordner als Projekt öffnen. Für Produktiveinsatz wird Max-Plan empfohlen. Alternativ: Claude Code Desktop App oder Terminal.

### 5. Deployment: WAT-Framework trennt Build von Deploy
Während des Bauens läuft der volle Agent (Workflows + Agent + Tools). Beim Deployment wird nur W + T deployt (Code + Tools), nicht der Agent. Deployment-Optionen: Modal, Vercel, Trigger.dev. Trigger.dev ist ideal für Automationen, die auf Schedule oder Webhook laufen. Die "self-healing"-Fähigkeit des Agents gilt nur während des Bauens, nicht im deployed Code.

### 6. Sicherheits-Review vor dem Deployment
Vor jedem Deployment: "Überprüfe den Code und sag mir, ob es Risiken gibt." Claude prüft:
- Sind API Keys exposed?
- Sind Webhooks ungeschützt?
- Was könnte ein Angreifer tun, wenn das System öffentlich läuft?
Dieser Schritt ist besonders wichtig weil man als Nicht-Entwickler den generierten Code nicht vollständig versteht.

### 7. MCP Server und GWS CLI
MCP Server (Model Context Protocol): Verbindung zu externen Tools — Firecrawl, GitHub, Slack etc. Statt MCP-Konfiguration manuell zu schreiben: Claude Code beauftragen ("Erstell mir die MCP JSON-Datei"). 

GWS CLI (Google Workspace CLI): Bash-Kommandos für alle Google-Dienste — Docs, Sheets, Drive, Gmail, Calendar. Im Gegensatz zu API-Calls erzeugt GWS CLI korrekt formatierte Google Docs statt rohem Markdown. "I would just drop a YouTube video URL and say: create me a YouTube resource guide." Claude lädt Transkript, erstellt Dokument, befüllt es — vollständig automatisiert.

### 8. Claude.md Route-to-Files Strategie
Die claude.md hält maximal 150–200 Zeilen, verweist aber auf spezialisierte Unterfiles:
- `.claude/rules/communication-style.md`
- `.claude/rules/system-building.md`
- Separate Skill-Dateien
Claude weiß, wo es suchen muss, lädt aber nur bei Bedarf. "Progressive context loading."

### 9. Built-in Slash-Commands Übersicht
Wichtige Kategorien:
- **Diagnostik**: `/context` (Token-Verteilung), `/cost` (Kosten), `/doctor` (Installation), `/status` (Version, Modell, Account)
- **Konfiguration**: `/memory`, `/config`, `/permissions`, `/mcp`, `/agents`
- **Flow**: `/compact`, `/clear`, `/rewind`, `/model`
- **Aktion**: `/loop`, `/hooks`, `/voice`, `/review`, `/ultra review`
Man muss diese nicht auswendig kennen — Claude kann sie auf Anfrage auch direkt aufrufen.

### 10. GitHub und Vercel für Deployment-Pipeline
Workflow: Claude Code schreibt Code lokal → in GitHub Repo pushen → Vercel verbindet mit Repo → auto-deploy bei jedem Push. Änderungen lokal testen auf localhost, dann pushen — nur dann gehen sie live. Rollback jederzeit möglich.

### 11. Skills: Aufbau und Progressive Context Loading
Skills sind Markdown-Dateien im `.claude/skills/`-Verzeichnis. Claude lädt sie in drei Stufen:
1. Nur Name + Beschreibung (YAML Frontmatter, ~100 Tokens)
2. Bei Relevanz: vollständige Anweisungen
3. Bei Ausführung: alle Details

Skill-Builder-Skill: Ein Meta-Skill, der durch Fragen-Antwort hilft, neue Skills zu erstellen. Beispiel: Branded Infographics Skill — Claude stellt zielgerichtete Fragen, formuliert dann den Skill.

### 12. Sub-Agents und Agent Teams
**Sub-Agents**: Isolierte Agents mit eigenem Kontext. Hauptthread bleibt sauber. Günstigere Modelle für simple Tasks (Haiku für Datenscraping). Kein gegenseitiger Austausch.

**Agent Teams**: Alle Agents kommunizieren miteinander. Teilen Task-Listen, weisen sich Arbeit zu, man kann jeden einzeln ansprechen. Dos/Don'ts:
- Jeder Agent sollte eigene Dateien besitzen (keine geteilten Dateien)
- Output präzise definieren
- 3–5 Agents optimal, max. 10 (teurer + komplexer)
- Vollen Kontext im initialen Prompt mitgeben (kein gemeinsamer Verlauf)

### 13. Browser-Automation und Screenshot-Loops
Claude kann Browser öffnen, Klicks ausführen, Formulare ausfüllen, Screenshots machen. "Screenshot-Loop" für Website-Qualität: Design → Screenshot → Analyse → Änderung → Screenshot — mehrere Passes vor V1. Chrome DevTools für Funktionalitätstests. Für Front-End-Arbeit ist das ein wesentlicher Qualitätshebel.

### 14. Monetarisierung: Outcome verkaufen, nicht Workflow
"You need to be selling the outcome." Nicht: "Ich baue einen AI Workflow." Sondern: "Ich spare Ihnen 10 Stunden pro Woche" oder "Ich eliminiere Ihre manuellen Fehler." Client-Wertversprechen:
- Ein $3.000-Build wird zu einer $50.000/Jahr-Beziehung wenn man Metriken trackt und Erweiterungen verkauft
- Clients haben Grundbedürfnisse (Zeit sparen, Kosten senken, Fehler eliminieren) — nicht Technologie-Interesse
- API Keys: Clients besitzen und bezahlen ihre Keys selbst — das hält alles transparent und skalierbar

### 15. Productivity Dip vor Gewinn
Die Lernkurve ist exponentiell, nicht linear: Anfangs 20% Produktivitätsrückgang durch Umstellung. Wer in diesem Dip aufgibt, verpasst den Exponential-Anstieg. "By the time you're 2 weeks in, you won't even recognize how productive you're being and you can't even imagine if someone took away your AIOS."

## Konkrete Schritte / Befehle / Tools

**Einrichtung:**
1. VS Code + Claude Code Extension installieren
2. Claude Pro/Max Plan aktivieren ($17+/Mo)
3. WAT claude.md aus Community herunterladen
4. Claude Code: "Lies die claude.md und richte das Projekt ein"

**Workflows deployen (Trigger.dev):**
1. Workflow in Claude Code bauen und testen
2. Security Review: "Überprüfe Sicherheit und API-Exposures"
3. GitHub Repo erstellen, Code pushen
4. Trigger.dev mit GitHub verbinden
5. Deployment-Konfiguration durch Claude Code erstellen lassen

**GWS CLI:**
- Installation: Claude Code anweisen, GWS CLI zu installieren und zu konfigurieren
- Nutzung: "Erstelle einen Google Doc aus diesem YouTube-Transkript"
- Funktionen: Docs, Sheets, Drive, Gmail, Calendar — alles per Bash-Kommando

**Deployment auf Vercel:**
1. GitHub Repo verbinden
2. Claude: "Push to GitHub so we can sync with Vercel and get it live"
3. Vercel deployt automatisch bei jedem Push

## Relevanz für MAJER

- Der WAT-Framework ist direkt anwendbar auf MAJERs Content-Pipeline und n8n-Workflow-Architektur.
- Die Deployment-Pipeline (Claude Code → GitHub → Vercel) ist die Blaupause für `apps/verein` und `apps/nova`.
- GWS CLI ist für MAJERs Google Workspace-Integration relevant: Meeting-Protokolle, Förderanträge, Vereinsdokumente.
- Der Sicherheits-Review-Schritt vor Deployment passt zum HITL-Prinzip und dem Verbot von `.env`-Hardcoding.
- Skills als SOPs abbilden ist konkret umsetzbar für wiederkehrende MAJER-Aufgaben: Mitgliedskommunikation, Lernpfad-Updates, Content-Formate.
- Die Monetarisierungs-Logik (Outcome verkaufen) ist direkt übertragbar auf MAJERs Skalierungsstrategie: digitale Bildungsdienstleistungen für andere Vereine und KMU.

## Direkte Zitate (die wichtigsten 3-5)

> "Traditional automation is like building a train track by hand. With agentic workflows, it's like telling a construction crew: build a train track from here to there."

> "The people who are going to struggle with agentic workflows are the ones who completely skip those fundamentals and jump straight into cloud code, tell it to build something, and have no idea if what is being built is actually good."

> "You need to be selling the outcome. Saving the business owner 10 hours a week or cutting their admin mistakes."

> "That's how a $3,000 build turns into a $50,000 a year relationship. But the key is that you have to be the one to track the metrics."

> "By the time you're 2 weeks in, you won't even recognize how productive you're being and you can't even imagine if someone took away your AIOS."
