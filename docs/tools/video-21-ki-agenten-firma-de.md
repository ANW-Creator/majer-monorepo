# KI-Agenten-Firma: Paperclip für YouTube-Kanal-Management (Deutsch)

**Quelle:** https://youtu.be/Ebki7qT0QUw
**Video-ID:** Ebki7qT0QUw
**Sprache:** de
**Transkript:** .tmp/transcripts/Ebki7qT0QUw.txt

## Kernaussage

Dieses Video stellt Paperclip vor — ein Open-Source-Projekt, das eine Gruppe von KI-Agenten in eine selbstorganisierende Firma verwandelt: mit Organigramm, Rollen, Budgets, Heartbeat-Funktion und zentralem Dashboard. Der Ersteller hat damit 8 KI-Mitarbeiter aufgebaut, die seinen YouTube-Kanal rund um die Uhr unterstützen. Für MAJER ist das Konzept relevant als Zukunftspfad für eine vollständig automatisierte Content- und Verwaltungsstruktur, sobald die Basisprozesse stehen.

## Hauptkonzepte und Techniken

### 1. Das Problem mit bestehenden Agenten-Systemen
OpenClaw hat den Heartbeat eingeführt (Agent wacht alle 30 Minuten auf, prüft Aufgaben, arbeitet selbstständig). Das Problem: Man sieht nicht, was im Hintergrund passiert. Claude Code hat Transparenz und Agent Teams, aber keinen Heartbeat — man muss aktiv dabei sein. Paperclip versucht beides zu verbinden: autonome Agenten + vollständige Übersicht + echter Heartbeat.

### 2. Was Paperclip ist und wie es funktioniert
Paperclip ist ein Open-Source-Projekt (35.000 Sterne auf GitHub, weniger als einen Monat alt zum Zeitpunkt des Videos). Es verwandelt KI-Agenten in eine strukturierte Firma mit: Organigramm und Hierarchien (wer reportet an wen), Ticketsystem (jede Aufgabe und Entscheidung wird protokolliert), Goal Alignment (jede Aufgabe hängt an der Firmenmission), Governance-Schicht (der Nutzer ist das Board — genehmigt Einstellungen, pausiert Agenten), Budget pro Agent (Token-Limit), Heartbeat pro Agent (wacht alle X Minuten auf). Alle Agenten-Identitäten leben in Textdateien: `agent.md` (Anweisungen), `soul.md` (Persönlichkeit und Werte), `heartbeat.md` (was der Agent beim Aufwachen tun soll).

### 3. Die YouTube-Kanal-Firma des Erstellers
Der Ersteller hat folgende 8 KI-Agenten aufgebaut: CEO (Strategie und Koordination), Trends Scout (durchforstet X und Reddit nach KI-News), Redaktionsleiter (koordiniert Videoproduktion), Deep Researcher (recherchiert Themen im Detail), Script Agent (schreibt Videoscripts im persönlichen Stil), SEO Stratege (Titel, Beschreibungen, Keywords), Repurposer (Video → LinkedIn, Short Video), Qualitätsagent (kritisches Review, Feedback). Der CEO koordiniert alle anderen und gibt Ergebnisse an den Nutzer weiter.

### 4. Das Dashboard und die Transparenz
Im Dashboard sieht man: welcher Agent gerade aktiv ist, was er macht, wie viele Aufgaben in Progress sind. Jeder Agent hat einen "Latest Run" — man kann seinen Denkprozess, ausgeführte Commands und Ergebnisse vollständig einsehen. Alle Nachrichten an den Nutzer landen in der Inbox. Issues (Aufgaben) werden mit Kommentaren versehen — ähnlich einem Team-Projektmanagement-Tool. Der Nutzer kann gezielt unter einer spezifischen Aufgabe kommentieren und damit Kontext getrennt halten.

### 5. Agenten-Adapter und Kompatibilität
Paperclip unterstützt verschiedene Agenten-Systeme als Adapter: Claude Code, Codex (OpenAI), Gemini CLI, OpenCode, Cursor. Alle können parallel in derselben Firma arbeiten. Das Modell pro Agent ist konfigurierbar — für den CEO ein starkes Modell (GPT-5.3 Codex), für einfachere Agenten sparsamere Modelle. Mit dem eigenen ChatGPT Plus-Abo kann man Codex-Modelle nutzen ohne zusätzliche API-Kosten (über Device-Code-Login im Browser).

### 6. Firma erstellen: Der Prozess
Neue Firma anlegen → Mission eingeben → CEO erstellen (Adapter + Modell wählen) → Erste Aufgabe definieren (empfohlen: Paperclip schlägt vor, einen Engineer einzustellen und einen Hiring Plan zu erstellen). Der CEO übernimmt ab dann selbst: welche Mitarbeiter brauchen wir für unser Ziel, Aufgaben delegieren, Ergebnisse liefern. Man gibt nur noch das Ziel vor und der CEO überlegt den Weg.

### 7. Skills in Paperclip
Skills können aus skills.sh direkt installiert werden — z.B. der Frontend Design Skill. Jedem Agenten kann man dann zuweisen, welche Skills er nutzen kann. Ein Skill ist wie bei Claude Code eine einfache Markdown-Datei mit Anweisungen. Standard-Skills für Paperclip-Infrastruktur (wie Agenten anlegen etc.) sind bereits mit installiert.

### 8. Hosting auf einem Server (247-Betrieb)
Lokal funktioniert Paperclip nur wenn der Computer an ist. Für echten 24/7-Betrieb wird ein VPS empfohlen. Bei Hostinger kann Paperclip direkt aus dem Katalog als Template installiert werden. Die Konfigurationsseite fragt nach Admin-Account und API-Keys der verschiedenen Sprachmodell-Anbieter. Codex auf dem Server installieren: `npm install -g @openai/codex` im Terminal des Servers, dann über Device-Code mit ChatGPT Plus einloggen.

### 9. Wann ist Paperclip die richtige Wahl?
Geeignet wenn: man mehrere Claude Code Sessions koordinieren will, KI-Agenten untereinander schlecht koordiniert sind, man den Überblick über parallele Arbeiten verloren hat, man Token-Budgets pro Agent kontrollieren will, man 24/7-Betrieb braucht. Nicht geeignet wenn: Claude Code alleine für eine App ausreicht, ein einfacher persönlicher Assistent (OpenClaw) genügt, man klare Step-by-Step-Prozesse hat (dann lieber N8N).

### 10. Die Analogie des Erfinders
Der Erfinder von Paperclip beschreibt KI-Agenten als den Charakter aus dem Film Memento: "Die wachen auf, die können alles, die können programmieren, Recherchen, Texte schreiben und sind super in dem, was sie machen, aber sie wissen nicht, wer sie sind. Sie wissen nicht, was sie gestern gemacht haben und sie wissen auch nicht, was das Ziel ist." Paperclip gibt den Agenten Identität, Kontext und Ziel.

## Konkrete Schritte / Befehle / Tools

**Paperclip lokal installieren:**
```bash
# Befehl aus dem GitHub Repository (paperclip.im)
```

**Codex auf Server installieren:**
```bash
npm install -g @openai/codex
codex  # Dann Device-Code-Login mit ChatGPT Plus
```

**Paperclip auf Hostinger VPS:**
- Hostinger Dashboard → VPS → Katalog → Paperclip Template → Deploy
- Admin-Account erstellen, API-Keys eingeben (Anthropic, OpenAI, Gemini)

**Neue Firma aufsetzen:**
1. Neue Firma anlegen → Mission eingeben
2. CEO konfigurieren: Adapter (Claude Code / Codex) + Modell wählen
3. Adapter Environment Check durchführen (Verbindungstest)
4. Start: CEO erhält Aufgabe "Hire founding engineer + write hiring plan"

**Skill global installieren:**
1. Link von skills.sh kopieren
2. In Paperclip einfügen + "Installiere diesen Skill global"
3. Beim Frontend-Engineer-Agenten den Frontend Design Skill zuweisen

**Aufgabe an spezifischen Agenten senden:**
```
Neue Aufgabe erstellen → Agent auswählen (z.B. Frontend Engineer) →
Aufgabe beschreiben → Projekt auswählen → Issue erstellen
```

**Paperclip Companies (fertige Firmen-Templates):**
- GitHub Repository → paperclip companies → fertige Firmen mit bis zu 176 Agenten herunterladen

**Tools:**
- paperclip.im — offizielle Website
- GitHub: paperclip Open Source Repository
- Hostinger — empfohlener Hosting-Anbieter mit Paperclip-Template
- skills.sh — Skills für Agenten

## Relevanz für MAJER

Paperclip ist für MAJER ein mittelfristiger Zukunftspfad, nicht die erste Priorität. Wenn die Basisautomatisierungen (Content-Pipeline, Mitgliederportal, n8n-Workflows) stehen, ist das Konzept einer strukturierten KI-Agenten-Firma direkt anwendbar: Ein CEO-Agent überwacht die MAJER-Content-Pipeline, ein Redakteur-Agent verarbeitet Videos, ein SEO-Agent optimiert YouTube-Titel, ein Community-Agent pflegt die Vereinskommunikation. Die Agentenidentität über `agent.md` und `soul.md` entspricht konzeptuell dem MAJER-Skill-System. Das Governance-Prinzip (Board genehmigt Einstellungen) entspricht dem HITL-Prinzip aus den MAJER-Systemregeln. Für die direkte MAJER-Arbeit heute: Claude Code reicht. Paperclip kommt wenn mehrere parallele Prozesse koordiniert werden müssen.

## Direkte Zitate

> "Was du hier siehst, ist eine Firma, die vollständig aus KI-Agenten besteht und mich bei meinem YouTube-Kanal unterstützt."

> "Paperclip versucht den Agenten genau das zu geben. Und Paperclip packt auch noch obendrauf eine ganze Organisationsschicht — also ein Organigramm mit Hierarchien. Wer reportet an wen, was für Budgets gibt es pro Agenten, damit du auch die Kosten im Griff hast."

> "KI-Agenten sind wie der Typ aus dem Film Memento — die wachen auf, die können alles, aber sie wissen nicht, wer sie sind. Sie wissen nicht, was sie gestern gemacht haben und sie wissen auch nicht, was das Ziel ist."

> "Du definierst einmal nur das Ziel — dann legen wir ein Team dafür an und der CEO überlegt sich, welche Mitarbeiter wir dafür brauchen, um unser Ziel zu erreichen, und wir geben ab dann nur noch die Vorgaben."

> "Wenn du mit API-Keys arbeitest, kannst du immer genau sehen, welcher Agent wie viel Tokens verbraucht und kannst klare Budgets setzen."
