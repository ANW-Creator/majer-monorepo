# Claude Code Routines: Automatische Hintergrund-Tasks ohne offenes Laptop

**Quelle:** https://youtu.be/ehg4fhydTgs
**Video-ID:** ehg4fhydTgs
**Sprache:** en
**Transkript:** .tmp/transcripts/ehg4fhydTgs.txt

## Kernaussage

Claude Code Routines (Research Preview) erlauben es, Prompts als geplante oder event-getriggerte Automatisierungen auf Anthropics Web-Infrastruktur laufen zu lassen — der eigene Laptop muss dafür nicht eingeschaltet sein. Das System klont ein GitHub-Repository, führt den Prompt aus und löscht die Umgebung danach wieder. Für MAJER relevant als Grundlage für einen dauerlaufenden Heartbeat-Agenten und andere Hintergrund-Automatisierungen, die bisher lokale Hardware erforderten.

## Hauptkonzepte und Techniken

### Was Routines sind und was sie leisten

Eine Routine ist im Kern ein Prompt, den jemand anderes in Claude Code eintippt — nur ohne dass man selbst dabei ist. Das System verhält sich exakt wie eine direkte Claude Code Session: Claude liest die CLAUDE.md, führt Skills aus, nutzt Tools, korrigiert Fehler selbst. Der entscheidende Unterschied zu lokalen Scheduled Tasks: die Hardware muss nicht laufen.

### Drei Trigger-Typen

- **Schedule**: Fester Zeitplan (stündlich, täglich, Werktage), eingestellt in natürlicher Sprache ohne Cron-Syntax
- **API Call**: Eine andere Automatisierung sendet einen POST-Request und löst die Routine aus
- **GitHub Events**: Neue PRs, neue Pushes, neue Issues, neue Releases triggern die Routine automatisch

### GitHub Repository als Pflicht-Voraussetzung

Jede Routine benötigt ein verknüpftes GitHub-Repository. Claude klont dieses Repository für die Dauer des Runs, liest CLAUDE.md, Skills und Scripts, und löscht den Clone danach wieder. Was im Repository liegt ist für die Routine verfügbar. Was nur lokal liegt (z.B. `.env`-Datei mit API-Keys) ist es nicht.

### API Keys in Cloud Environment Variables

Da `.env` nicht im Repository liegt (und auch nicht liegen sollte), müssen API-Keys über die Cloud Environment Variables der Routine eingepflegt werden:
- In der Routine auf "Cloud Environment" klicken
- Name vergeben, dann unter "Environment Variables" Keys eintragen
- Im Prompt explizit darauf hinweisen: "My API key is available as an environment variable. Use it directly from the environment. Don't look for a .env."

### Network Access: Trusted vs. Full

- **Trusted**: Nur verifizierte Services von Anthropics Allowlist (GitHub, Google, Anthropic etc.). Sicherer, aber manche Dienste nicht erreichbar.
- **Full**: Alle externen Domains erlaubt. Risiko: Bei verarbeitetem Schadinhalt könnte Claude theoretisch Daten an externe Server senden. Für private Repos mit kontrollierten Inputs: praktisch vernachlässigbares Risiko.
- **Custom**: Spezifische Domains manuell erlauben

### Stateless Runs und was das bedeutet

Jeder Routine-Run ist vollständig stateless. Cookies, Browser-Sessions, lokale Dateien außerhalb des GitHub-Repos: nicht verfügbar. Was sich von Run zu Run aufbaut, muss ins Repository gepusht oder über APIs abgerufen werden. Exception: Wenn die Routine Code-Änderungen macht, wird ein neuer Branch im Repository erstellt.

### Vergleich: Routines vs. Scheduled Tasks vs. /loop

| Eigenschaft | Routines | Desktop Scheduled Tasks | /loop |
|---|---|---|---|
| Läuft auf | Anthropic Cloud | Lokale Hardware | Lokale Hardware |
| Laptop muss an sein? | Nein | Ja | Ja |
| Session muss offen sein? | Nein | Nein | Ja |
| Überlebt Neustart? | Ja | Ja | Nein |
| Lokaler Dateizugriff? | Nein (nur GitHub) | Ja | Ja |
| Permissions | Vollständig autonom | Konfigurierbar | Konfigurierbar |
| Mindest-Intervall | 1 Stunde | 1 Minute | 1 Minute |

### Limits nach Plan

- **Pro**: 5 Routine-Runs pro Tag
- **Max ($200/Monat)**: 15 Routine-Runs pro Tag
- **Team / Enterprise**: 25 Routine-Runs pro Tag
- Resource-Limits pro Run: 4 vCPUs, 16 GB RAM, 30 GB Disk Space
- Kosten: Normales Subscription-Kontingent (kein Aufpreis, aber Token-Verbrauch)

### Connectors vs. API Keys

Connectors sind OAuth-Verbindungen für Dienste wie Slack, Gmail, ClickUp — ähnlich wie bei Claude Chat. API Keys werden dagegen direkt in den Environment Variables der Cloud Environment hinterlegt. Beides kann kombiniert werden.

### Setup-Scripts für Paket-Installation

Beim Erstellen einer neuen Remote Task kann ein Setup-Script definiert werden. Dieses läuft vor Claude Code und installiert z.B. benötigte Python-Pakete oder andere Dependencies.

### Prompt-Qualität ist entscheidend

Da keine Person eingreifen kann, muss der Prompt beim ersten Versuch funktionieren. Wichtige Regeln:
- Sehr spezifisch sein, keine Rückfragen einkalkulieren
- Reihenfolge der Operationen explizit angeben
- Skill-Referenzen direkt im Prompt nennen
- Vor Go-Live mehrfach mit "Run now" testen
- Fehlerbehandlung einplanen: z.B. "If this fails, send me a Slack message"

### WAT-Framework in Routines

Routines sind das fehlende Stück des WAT-Frameworks (Workflows, Agent, Tools) für Cloud-Deployments. Bisher wurden beim Deploy in die Cloud nur W (Workflows) und T (Tools) mitgenommen, der A (Agent) blieb lokal. Mit Routines laufen alle drei Komponenten zusammen auf Anthropics Infrastruktur: Agent liest CLAUDE.md, führt Workflows aus, nutzt Tools, korrigiert Fehler selbst.

## Konkrete Schritte / Befehle / Tools

1. Desktop App öffnen → "Scheduled Tasks" → "New Task" → "Remote Task" wählen
2. Name vergeben, Prompt schreiben (spezifisch, one-shot)
3. Modell auswählen (Sonnet für die meisten Automatisierungen, Opus nur wenn nötig)
4. GitHub Repository verknüpfen
5. Cloud Environment erstellen: API Keys als Environment Variables eintragen
6. Network Access auf "Trusted" oder "Full" setzen je nach benötigten Diensten
7. Cadence wählen: stündlich / täglich / Werktage in natürlicher Sprache
8. Connectors für OAuth-Dienste (Slack, Gmail etc.) hinzufügen
9. Mit "Run now" testen, Ausgabe beobachten, Prompt iterieren
10. Erst nach erfolgreichem Test den regulären Zeitplan aktivieren

Alternativ: claude.ai/code im Browser oder Terminal mit `/schedule`

## Relevanz für MAJER

Routines sind der direkte Mechanismus für den MAJER Heartbeat-Agenten: ein täglich laufender Remote-Agent, der den Projektstatus prüft, Aufgaben in ClickUp aktualisiert und Benachrichtigungen sendet — ohne dass ein Laptop offen bleiben muss. Die 15 täglichen Runs auf dem Max-Plan sind mehr als ausreichend für die aktuellen MAJER-Automatisierungen. Der GitHub-Pflicht bedeutet, dass das Monorepo-Repository als Basis für Routines dienen kann, sobald es auf GitHub liegt. Der API-Trigger-Typ ist interessant für n8n-getriggerte Routines: n8n sendet einen POST-Request, Routine startet, erledigt die komplexe agentenbasierte Arbeit, liefert Ergebnis zurück.

## Direkte Zitate

> "Think of a scheduled task or a routine as you basically typing in a prompt, and then someone coming into your laptop and typing it in for you."

> "Because of the fact that this is working off of a cloned repo, it's going to read the claude.md file automatically every time."

> "We are actually keeping the agentic framework. We're keeping the W, A, and T all running together because the agent is looking at the Claude MD, it's looking at its scripts, and it's figuring out what to do."

> "If it runs into errors mid-run, it will self-correct. And if you configure it the right way, it will be able to sort of like leave a memory trail."

> "Basically, the rule of thumb here is if something's local or if Claude Code can't reach it in your GitHub repo or via an API, then it won't work."
