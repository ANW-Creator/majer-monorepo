# Codex AI Super App: Vollständiger Leitfaden

**Quelle:** https://youtu.be/3TdD8Qv5Tk8
**Video-ID:** 3TdD8Qv5Tk8
**Sprache:** en
**Transkript:** .tmp/transcripts/3TdD8Qv5Tk8.txt

## Kernaussage

Nate Herk führt Codex (ChatGPT Desktop App mit GPT-5-Modellen) als vollwertiges Gegenstück zu Claude Code ein. Das Video zeigt, warum beide Tools nebeneinander sinnvoll sind, erklärt die Codex-Oberfläche und baut live ein YouTube Comment Intelligence System mit Vercel-Deployment. Für MAJER relevant als Entscheidungsgrundlage: Wann Claude Code, wann Codex? Und wie migriert man bestehende Projekte zwischen beiden?

## Hauptkonzepte und Techniken

### 1. Was ist Codex und worin unterscheidet es sich von Claude Code?
Codex ist die ChatGPT Desktop App — optisch fast identisch mit Claude Code Desktop: Projekte links, Chat rechts, Modell-Toggle oben. Der wesentliche Unterschied liegt im Modell: Codex nutzt GPT-4 bis GPT-5.5, Claude Code nutzt Opus/Sonnet/Haiku. "They're different harnesses, right? They fundamentally work a little bit different but very similarly."

Stärken laut Nate Herk aus direktem Vergleich:
- **Claude Code**: Explorativ, Brainstorming, kreativ, Planung
- **Codex**: Pragmatisch, gut bei langen Plänen, besser beim Finden von Bugs, Troubleshooting

### 2. Modell-Intelligence-Stufen in Codex
Im Codex-Interface: Toggle zwischen GPT-Versionen (5.5, 5.4, andere). Dazu Intelligence-Stufen: Low, Medium, High, Extra High.
- Medium: Standard für Planung und Brainstorming
- High: Für große Builds oder komplexe Skills
- Extra High: Nur bei hartnäckigen Bugs oder Problemen

### 3. agents.md statt claude.md
In Codex heißt die Kontextdatei `agents.md` (nicht `claude.md`). Inhalt ist identisch: Ziel des Projekts, Kontext über den Nutzer, Produkt-Richtung, technische Infos. Codex liest diese Datei bei jeder neuen Session als erstes. Migration von Claude Code zu Codex: "It'll take like 30 seconds and then you have your project in Codex."

### 4. Projekte und Dateistruktur
Codex arbeitet in lokalen Verzeichnissen — genau wie Claude Code. Der lokale Arbeitsordner kann über "Copy Local Working Directory" gefunden und im File Explorer geöffnet werden. Alles was Codex erstellt (Skripte, Outputs, Konfigurationen) liegt dort. "Everything that I build in Claude Code is a bunch of folders and files — and whether you want to use Codex or Claude Code or Cursor or OpenClaw, they can all work out of that directory."

### 5. Plan Mode und Full Access Permissions
Plan Mode einschalten bevor man baut: Codex plant ohne zu exekutieren. Klärende Fragen beantwortet → Plan bestätigt → Implement.

Permissions:
- **Default**: Fragt bei jeder Aktion nach Genehmigung (gut für Einsteiger)
- **Full Access**: Führt alles ohne Nachfragen aus (orangen Warning-Badge in der UI)
Empfehlung: erst mit Default beginnen, erst nach Vertrautheit mit dem System auf Full Access wechseln.

### 6. Context Window Management in Codex
Codex zeigt die Kontext-Auslastung als Balken. Codex kompaktiert automatisch wie Claude Code. Kontext-Budget in Codex ist kleiner als Claude Code mit Opus (~250k vs. 1M Tokens). Empfehlung: agents.md nicht zu groß werden lassen — alles was wiederholt reingeladen wird, kostet Tokens.

### 7. Schlüssel-Erkenntnis: Fehler als wertvolles Wissen speichern
Wenn ein Fehler auftritt: sofort als Wissen sichern. Beispiel: PowerShell TLS-Fehler beim YouTube API-Test. Anweisung: "Speichere dieses Wissen in diesem Projekt, damit du beim nächsten Mal weißt, was du nicht tun sollst." Codex fügt es in die agents.md ein. "Doing stuff like this, having this sort of habit, is how you actually make these systems get smarter over time."

### 8. Plugins / MCP Server in Codex
Codex hat eine eingebaute Plugin-Bibliothek: HuggingFace, Vercel, GitHub, Game Studio, Figma, Canva, Google Drive, Slack, SharePoint, Teams u.v.m. Plugins funktionieren per OAuth-Login. Wenn ein Plugin nicht in der Bibliothek ist (z.B. YouTube), wird eine API-Verbindung manuell über `.env.local` eingerichtet — Codex erklärt den genauen Weg.

### 9. Slash-Commands und Side Chat in Codex
Mit `/` öffnen sich Optionen: autoreview, code review, feedback, mcp, memories, model, personality, pet, plan mode, reasoning, browser use, GitHub, Higgsfield, PDF, skill creator.

Mit `@` werden Plugins oder Dateien aus dem Projekt referenziert.

**Side Chat**: Ein separates Gesprächsfenster im selben Projekt, ohne den laufenden Hauptagenten zu unterbrechen. "If you have your agent working right here on something and you don't want to interrupt it, but you have a side question, you can ask over here."

### 10. Personality-Einstellung
`/personality` → Friendly oder Pragmatic. Pragmatic: "Concise, task focused, and direct." Für technische Arbeit bevorzugt.

### 11. Vercel Deployment aus Codex heraus
Vollständiger Deployment-Flow: Claude/Codex → GitHub Repo → Vercel Connect → Auto-Deploy. Lokal auf localhost testen, erst dann pushen. "Just because we make changes doesn't mean it's actually going to go live. As soon as we push those changes, Vercel would automatically deploy those onto the real URL." Trennung von Test-Umgebung und Production.

### 12. Migration zwischen Claude Code und Codex
"I've taken every project I've moved over from Claude Code to Codex and said: Hey, this is something I built with Claude Code. Analyze it and help me figure out what files you need to create to make this compatible with Codex." Ergebnis: Ein paar Umbenennungen (claude.md → agents.md), fertig in 30 Sekunden.

## Konkrete Schritte / Befehle / Tools

**Codex Setup:**
1. ChatGPT-Abo ($20+/Mo) abschließen
2. Codex App für das Betriebssystem herunterladen
3. Neues Projekt anlegen → Ordner wählen
4. agents.md erstellen lassen: "Erstelle eine agents.md mit Kontext über mich und das Projektziel"
5. Plan Mode aktivieren, Prompt eintippen, Plan bestätigen, Implement

**YouTube API Verbindung (Beispiel):**
1. Google Cloud Console → neues Projekt → YouTube Data API v3 aktivieren
2. API Key erstellen und einschränken auf YouTube Data API v3
3. API Key in `.env.local` einfügen (Codex erstellt die Datei, man trägt nur den Wert ein)
4. "Teste die Verbindung und sag mir ob sie funktioniert"

**Vercel Deployment:**
1. GitHub Repo anlegen, Code pushen
2. Vercel.com → Repo verbinden → Auto-Deploy konfigurieren
3. DNS-Records für eigene Domain übertragen (optional)

**Plugins nutzen:**
- `/` im Chat für verfügbare Skills und Slash-Commands
- `@` für Plugins und Dateien referenzieren
- Settings → General → Full Access für autonome Ausführung

## Relevanz für MAJER

- Codex ist eine valide Alternative zu Claude Code für bestimmte Aufgaben — vor allem für längere, sequentielle Build-Projekte.
- Die agents.md-Strategie ist identisch mit MAJERs CLAUDE.md-Ansatz — Projekte können nahtlos zwischen beiden Tools übertragen werden.
- Das Fehler-als-Wissen-Prinzip (sofort in agents.md/claude.md dokumentieren) ist eine konkrete Methode für MAJERs Skill-System und Session-State-Tracking.
- Der Vercel Deployment-Flow ist direkt auf apps/verein anwendbar.
- Der Side Chat ist ein nützliches Feature für parallele Rückfragen während laufender Build-Sessions.
- Die Modell-Stärken-Analyse (Claude für Planung, Codex für Execution) ist eine Entscheidungshilfe für MAJERs Agenten-Architektur.

## Direkte Zitate (die wichtigsten 3-5)

> "I really like Claude for being sort of like exploratory and brainstorming and helping me get creative and think through things and plan, but then I really like Codex for being pragmatic."

> "All that we're doing when we're using these different models is we're organizing things into a structure. A structure that different agent harnesses can understand."

> "Doing stuff like this, having this sort of habit, is how you actually make these systems get smarter over time rather than just feeling like you're always repeating yourself."

> "Everything that I've moved over from Claude Code to Codex took about 30 seconds — it just changed a few names and maybe changed the claude.md to the agents.md."

> "Just because we make changes doesn't mean it's actually going to go live. If we push those changes, Vercel would automatically deploy those onto the real URL."
