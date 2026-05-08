# Browser-Automatisierung: Claude Code + Playwright CLI = alles automatisieren

**Quelle:** https://youtu.be/J-6pnl5DQg8
**Video-ID:** J-6pnl5DQg8
**Sprache:** en
**Transkript:** .tmp/transcripts/J-6pnl5DQg8.txt

## Kernaussage

Claude Code kann in Kombination mit Playwright CLI einen Browser vollständig steuern — inklusive Formular-Tests, Web-Scraping und Aktionen in eingeloggten Plattformen. Das Video demonstriert drei konkrete Use Cases und zeigt, wie sich Browser-Automatisierungen durch Iteration verbessern und in wiederholbare Skills umwandeln lassen. Für MAJER relevant als Werkzeug zur Automatisierung von Community-Management, Content-Distribution und Daten-Erfassung ohne API.

## Hauptkonzepte und Techniken

### Playwright CLI als Token-effiziente Alternative zu MCP

Playwright CLI wird dem Chrome DevTools MCP-Server vorgezogen, weil MCP-Server durch ihre Tool-Beschreibungen erheblich mehr Tokens verbrauchen. Der Creator erklärt: "If I do /context in here, you can see that the Chrome dev tools MCP takes up so many tokens because there's so many different tools and each tool has a description." Playwright CLI hält den Kontext schlank.

### Grundaufbau: Installation und Init

Ein neues Projekt wird mit Playwright CLI eingerichtet:
1. Neues leeres Projektverzeichnis anlegen
2. Claude Code in Plan Mode schicken mit Anweisung, Playwright CLI für Browser-Automatisierung zu installieren
3. Claude erstellt automatisch einen Demo-Script, der einen Screenshot macht und prüft, ob alles funktioniert
4. Nach erfolgreicher Installation: `/init` aufrufen, um eine CLAUDE.md-Datei zu erstellen

### Use Case 1: Automatisiertes QA und Self-Healing Apps

Claude Code baut eine mehrseitige Web-App und testet sie dann eigenständig mit dem Browser. Der Ablauf:
- Claude erstellt die App (Multi-Page-Onboarding-Formular mit 12 Fragen)
- Claude schreibt ein QA-Script (`qa-test.js`), das den Browser steuert und die App durchklickt
- Claude nimmt Screenshots und analysiert die Bugs selbst
- Claude iteriert: Script reparieren → neu testen → weitere Bugs finden

Gefundene Bugs im Beispiel: "Enter on text area didn't advance to review. The review page never loaded. The test found zero review items and the edit button was intercepted by a stale page overlay." Claude erkannte und reparierte alle Bugs ohne manuellen Eingriff.

### Headed vs. Headless Browser

Playwright unterstützt zwei Modi:
- **Headed**: Browser öffnet sich sichtbar auf dem Bildschirm — gut zum Beobachten und Debuggen
- **Headless**: Browser läuft unsichtbar im Hintergrund — ideal für automatisierte geplante Tasks

Im QA-Beispiel wird headed genutzt, damit man den Bot beim Ausfüllen des Formulars beobachten kann.

### Use Case 2: Web-Scraping trotz Bot-Blockade

Claude Code soll Zahnarzt-Praxen in Kalifornien finden und Telefonnummern sammeln. Beobachtung: "Google blocks the automation, so it switched to DuckDuckGo." Der Agent lernt selbstständig aus dem Fehler und wechselt die Suchmaschine. Das Script verbessert sich mit jedem Lauf.

Vorgabe: "Don't stop until it actually finds five phone numbers" — damit zwingt man den Agenten zu persistenterer Iteration.

### Use Case 3: Automatisierung mit eingeloggten Plattformen (Session Persistence)

Drei Methoden, um authentifizierte Browser-Sitzungen zu nutzen:
1. **Persistent Browser Profile**: Browser greift auf bestehende Chrome-User-Daten zurück, in denen man bereits eingeloggt ist
2. **Manual Login and Handoff**: Browser öffnet sich, man loggt sich manuell ein, danach übernimmt Claude
3. **Connect to Running Browser**: Verbindung mit einem bereits laufenden Browser-Tab

Im Demo-Beispiel mit der School-Plattform: Playwright speichert die Session-Cookies nach dem ersten manuellen Login. Bei jedem weiteren Aufruf ist der User automatisch eingeloggt. Der Bot liked Posts im "Wins"-Channel — zunächst fehlerhaft (like/unlike-Schleife), nach mehreren Iterationen und Korrekturen funktionierend.

### Iteratives Script-Learning

Browser-Automationen sind nicht sofort perfekt. Das Prinzip: "Every time that you use the script, it's going to get better." Der Workflow:
1. Bot läuft, macht Fehler, nimmt Screenshots
2. Claude analysiert die Screenshots und versteht, was falsch lief
3. Script wird aktualisiert
4. Nächster Durchlauf mit besserem Ergebnis

Wichtig: Auch nach mehreren Iterationen können Fehler auftreten. Gezielte Plan-Mode-Korrekturen helfen: z.B. "It was hitting the like button like four times" → Anweisung präzisieren.

### Von Skript zu Skill

Sobald ein Browser-Automation-Script stabil funktioniert, wird es in einen Claude Code Skill umgewandelt. Dann reicht ein einfacher Befehl wie "run the school like skill", um den gesamten Prozess auszulösen. Das macht die Automatisierung reproduzierbar und planbar.

### Scheduled Automation mit dem Desktop-App

Claude Code Desktop App ermöglicht geplante Runs, die vollständig autonom laufen. Im Beispiel ein "AIS Agent"-Bot in der Community, der täglich:
- AI-News-Roundups postet
- Wins-Posts liked
- Auf Notifications antwortet
- Sogar eigenständig Geburtstagsposts erstellt

"As it goes through this agentic loop, it starts creating new tools. Because one time someone said, 'Hey, AIS agent, can you please vote on my poll?' But the agent couldn't figure it out. So what it had to do is it would had to figure out what does it actually mean to vote and where do I click? And once it did that, it turned that into another script."

### Token-Effizienz: CLI vs. MCP

Playwright CLI ist sparsamer als MCP-Server, weil es kein umfangreiches Tool-Schema in den Kontext lädt. Bei der Wahl zwischen Browser-Automation-Tools sollte man auf das Gleichgewicht zwischen Token-Effizienz und Performance achten — nicht nur auf Geschwindigkeit.

## Konkrete Schritte / Befehle / Tools

**Installation:**
- Neues Projektverzeichnis erstellen
- In Plan Mode: Playwright CLI installieren lassen
- `/init` für CLAUDE.md

**QA-Workflow:**
1. App bauen lassen
2. In Plan Mode: "Spin up a server, use your browser use and test it out. Fill in the fields, click through. If there are bugs, fix them. Run it in a headed browser."
3. Loop: Test → Bugs finden → fixen → erneut testen

**Für Scraping:**
- "Don't stop until it actually finds [X results]" — zwingt zu persistenter Iteration

**Session Persistence:**
- Persistent Browser Profile ist empfohlene Option (Option 1)
- Einmalig manuell einloggen → Session wird gespeichert → alle weiteren Runs laufen authentifiziert

**Für Scheduled Tasks:**
- Claude Code Desktop App nutzen
- Scripts zu Skills umwandeln
- Skills in geplante Runs einbinden

**Alternative CLI-Tools (erwähnt, aber nicht empfohlen):**
- Vercel Agent Browser
- Open CLI
- Chrome DevTools MCP (token-intensiv)

## Relevanz für MAJER

Browser-Automatisierung mit Playwright CLI ist direkt für MAJER einsetzbar:
- **Mitglieder-Onboarding testen**: Automatisiertes QA des Mitgliedsantrags-Formulars
- **Community-Engagement**: Automatisches Liken/Kommentieren auf Plattformen ohne API
- **Content-Distribution**: Automatisches Posten auf Plattformen mit Login-Pflicht
- **Daten-Erfassung**: Förderprogramme, Kontakte, Informationen von Websites ohne API abrufen
- Das Self-Healing-Prinzip (Test → Fix → Test) reduziert manuellen QA-Aufwand erheblich

## Direkte Zitate (die wichtigsten 3-5)

> "When you give a tool as powerful as Claude code, access to literally control a browser, if you think about it, you can actually automate anything."

> "Every time that you use the script, it's going to get better. So it's about to run it again."

> "As it goes through this agentic loop, it starts creating new tools."

> "All of these automations I have running in a headless browser, meaning when I have my computer open, I don't see the tab pop up and I don't see it happen."

> "I told it to go into that happy birthday post and respond to all the comments on that post. And so now it is pulling up this browser. It needs to figure out how do I actually navigate to that post that I made."
