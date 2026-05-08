# n8n Workflow-Bibliothek

**Stand: 2026-05-08**
**Quelle: `json/` Ordner im Monorepo**

Alle Workflows stammen aus Nate Herks AI Automation Society-Kurs. Sie liegen als importierbare n8n-JSON-Dateien vor und sind auf das MAJER-Projekt anzupassen — insbesondere Credentials, Ziel-Kanäle und Modell-Auswahl.

---

## Kategorie 1: Faceless Content-Erstellung

### Faceless_Shorts_System.json
**Zweck:** Vollständiges System zur automatisierten Erstellung von YouTube Shorts und Reels ohne Kamera.
**Kernlogik:** Trend-Recherche → Skript-Generierung (Claude/GPT) → Voiceover (ElevenLabs) → Video-Rendering (Creatomate oder Remotion) → Upload.
**MAJER-Relevanz:** Direkter Einsatz für den Bildungs-Content-Kanal. Höchste Priorität.
**Abhängigkeiten:** ElevenLabs API, Creatomate oder Remotion, YouTube Data API.
**Nächster Schritt:** Nach ElevenLabs Voice-Clone deployen.

### Viral Shorts Machine (5_11_25)
**Quelle:** `Viral Shorts Machine (5_11_25) - FREE n8n Templates · AI Automation Society.html`
**Zweck:** Generiert viral-optimierte Kurzvideos auf Basis von Trending-Topics.
**MAJER-Relevanz:** Ergänzt Faceless_Shorts_System — kann für Bildungsthemen-Trending genutzt werden.
**Nächster Schritt:** HTML-Datei auslesen, n8n-Workflow extrahieren und importieren.

### Brand Reimagination Shorts (5_18_25)
**Quelle:** `Brand Reimagination Shorts (5_18_25) - FREE n8n Templates · AI Automation Society.html`
**Zweck:** Verwandelt bestehenden Brand-Content in Short-Format.
**MAJER-Relevanz:** Mittel — kann für Vereins-Kommunikation genutzt werden.

### UGC Ads Veo & Sora.json
**Zweck:** User-Generated Content Ads mit Google Veo und OpenAI Sora.
**MAJER-Relevanz:** Nova Business — für kommerzielle Video-Produktions-Dienstleistungen.
**Abhängigkeiten:** Google Veo API (Vertex AI), OpenAI Sora API (wenn verfügbar).

---

## Kategorie 2: YouTube-Strategie

### YouTube_Strategist.json
**Zweck:** Analysiert YouTube-Trends, generiert Content-Kalender, schlägt Themen basierend auf Nische und Algorithmus-Mustern vor.
**Kernlogik:** YouTube API → Trend-Analyse → Claude-Prompt → Content-Brief → Google Sheets Output.
**MAJER-Relevanz:** Fundamental für Content-Strategie. Zweithöchste Priorität nach Faceless_Shorts_System.
**Abhängigkeiten:** YouTube Data API v3, Google Sheets API, Claude API.
**Nächster Schritt:** Google Sheets als Ausgabe-Datenbank einrichten (Nate Herk Video Database als Vorlage).

---

## Kategorie 3: Multi-Agent-Systeme

### Multi_AI_Agents.json
**Zweck:** Orchestriert mehrere KI-Agenten parallel für komplexe Aufgaben.
**Kernlogik:** Master-Agent delegiert an Spezialisierte Sub-Agenten, sammelt Ergebnisse.
**MAJER-Relevanz:** Mittel-hoch — Infrastruktur für Content-Pipeline-Orchestrierung.

### Multi_Agent_System_Benefits.json
**Zweck:** Demonstriert Vorteile von Multi-Agenten-Systemen gegenüber Single-Agent-Setups.
**MAJER-Relevanz:** Niedrig — Lernmaterial, kein produktiver Einsatz.

### n8n_Developer_Agent.json
**Zweck:** Schreibt und debuggt n8n-Workflows automatisch. Agent der Agenten.
**MAJER-Relevanz:** Hoch — kann zukünftige Workflow-Entwicklung beschleunigen.
**Besonderheit:** Kann neue n8n-Workflows generieren und deployen.

### Demo_Restaurant_Agent.json
**Zweck:** Demo-Workflow für einen Restaurant-Chatbot/Agenten.
**MAJER-Relevanz:** Niedrig direkt. Aber als Referenz für Chatbot-Muster (z.B. Vereins-Website-Chatbot) nützlich.

---

## Kategorie 4: LinkedIn-Automation

### __LinkedIn_Agent.json
**Zweck:** Automatisierter LinkedIn-Content-Agent — schreibt und postet Posts.
**Kernlogik:** Thema/Prompt → Claude generiert Post → Genehmigung (HITL) → Post via LinkedIn API.
**MAJER-Relevanz:** Hoch für Personal Branding von Heinrich und Verein-Sichtbarkeit.
**Abhängigkeiten:** LinkedIn API (kompliziert — erfordert LinkedIn Developer App), Genehmigungsschritt.

### __Grab_Profiles.json
**Zweck:** Extrahiert LinkedIn-Profile für Outreach-Kampagnen.
**MAJER-Relevanz:** Mittel — für Partnerschafts-Outreach und Netzwerkaufbau.
**Abhängigkeiten:** Apify LinkedIn Scraper oder ähnlich.

### OpenAI_Image_Gen_LinkedIn_Post.json
**Zweck:** Generiert Bilder mit DALL-E für LinkedIn-Posts.
**MAJER-Relevanz:** Mittel — kann für visuelle Vereinskommunikation genutzt werden.
**Abhängigkeiten:** OpenAI Images API.

---

## Kategorie 5: Recherche und Daten

### RAG_Reranking.json
**Quelle:** Auch als HTML: `Reranker RAG Agent (6_28_25) - FREE n8n Templates · AI Automation Society.html`
**Zweck:** Retrieval Augmented Generation mit Reranking-Schicht für präzisere Antworten.
**Kernlogik:** Query → Vektorsuche → Reranking (Cohere oder ähnlich) → LLM-Antwort.
**MAJER-Relevanz:** Hoch für wissensbasierte Anwendungen — z.B. "1000 Fragen"-System mit Quellennachweis.
**Abhängigkeiten:** Vektordatenbank (Supabase + pgvector oder Pinecone), Reranker API.

### Firecrawl_Search.json
**Zweck:** Web-Recherche und Crawling mit Firecrawl API.
**Kernlogik:** URL oder Query → Firecrawl → strukturierte Daten → n8n weiterverarbeitung.
**MAJER-Relevanz:** Mittel — für automatisierte Quellen-Recherche bei Content-Erstellung.
**Abhängigkeiten:** Firecrawl API-Key.

### Apify.json
**Zweck:** Web-Scraping und Datenextraktion mit Apify-Platform.
**MAJER-Relevanz:** Mittel — Alternative zu Firecrawl für komplexere Scraping-Aufgaben.
**Abhängigkeiten:** Apify API-Key.

### Ultimate_Browser_Agent.json
**Zweck:** Vollautomatischer Browser-Agent der eigenständig im Web navigiert.
**MAJER-Relevanz:** Mittel-hoch — für automatisiertes Monitoring von Förderantragsportalen, Partnerwebseiten.

---

## Kategorie 6: Datenbank-Integration

### Supabase_Postgres.json
**Zweck:** CRUD-Operationen und Abfragen gegen Supabase/PostgreSQL.
**MAJER-Relevanz:** Mittel — wenn Pocketbase durch Supabase ergänzt oder ersetzt werden soll.
**Anmerkung:** Aktueller Stack nutzt Pocketbase — Supabase-Workflows nur relevant wenn Stack-Erweiterung.

### Update_Database.json
**Zweck:** Generisches Pattern für automatisierte Datenbankaktualisierungen aus Workflows.
**MAJER-Relevanz:** Mittel — Baustein für Datenpipelines.

---

## Kategorie 7: Marketing-Team-Workflows

### AI Marketing Team (4_26_25)
**Quelle:** `AI Marketing Team (4_26_25) - FREE n8n Templates · AI Automation Society.html` + `AI Marketing Team Workflows.zip`
**Zweck:** Vollständiges KI-Marketing-Team: Content-Ideation, Erstellung, Scheduling, Analytics.
**MAJER-Relevanz:** Hoch — kann als Grundlage für das gesamte Content-Operations-System dienen.
**Nächster Schritt:** ZIP entpacken, einzelne Workflows katalogisieren.

### 25 n8n Hacks (5_13_25)
**Quelle:** `25 n8n Hacks (5_13_25) - FREE n8n Templates · AI Automation Society.html`
**Zweck:** 25 praktische n8n-Patterns und Optimierungen.
**MAJER-Relevanz:** Referenz — beim Debugging und Optimieren bestehender Workflows konsultieren.

### Blotato Posting.json
**Zweck:** Social Media Cross-Posting via Blotato (Multi-Plattform-Scheduler).
**MAJER-Relevanz:** Mittel — für koordiniertes Posten auf mehreren Plattformen gleichzeitig.
**Abhängigkeiten:** Blotato API-Key.

---

## Nicht-Workflow-Assets

| Datei | Typ | Zweck |
|---|---|---|
| `Nate Herk - Video Database.xlsx` | Excel | Template für Video-Content-Datenbank |
| `Nate Herk - Video Database - Q1 2026.pdf` | PDF | Ausgefüllte Referenz-Datenbank |
| `Nate Herk - Video Database - Videos die der Bot kennen und verstehen muss.xlsx` | Excel | Bot-Wissensbasis für Video-Empfehlungen |
| `Faceless Shorts Template (file - make a copy).xlsx` | Excel | Template für Faceless-Content-Planung |
| `Claude Code Routines.pdf` | PDF | Claude Code-Automatisierungsroutinen |
| `bevollmaechtigung.pdf` | PDF | Persönliches Dokument — nicht für Automation |
| `Heinrich png.png` | Bild | Profilbild |
| `cal.ics` | Kalender | Import-Datei |
| `cloudflared.deb.json` | JSON | Cloudflare Tunnel Setup — keine n8n-Workflow |

---

## Deployment-Reihenfolge (nach Priorität)

1. **YouTube_Strategist.json** — Sofort deployen. Gibt Richtung für alle Content-Entscheidungen.
2. **Faceless_Shorts_System.json** — Nach ElevenLabs Voice-Clone. Kernautomatisierung.
3. **__LinkedIn_Agent.json** — Nach YouTube-Start. Parallel-Kanal aufbauen.
4. **RAG_Reranking.json** — Für 1000-Fragen-System. Wenn Website live.
5. **AI Marketing Team** — Nach erstem Monat. Wenn Basic-Pipelines laufen.

## Noch zu tun

- [ ] `AI Marketing Team Workflows.zip` entpacken und Einzelworkflows catalogisieren
- [ ] Credentials-Matrix erstellen: welcher Workflow braucht welchen API-Key
- [ ] n8n-Instanz aufsetzen (Port 5678 laut docker-compose) bevor Deployment
- [ ] HITL-Genehmigungsschritt in jeden Content-Workflow einbauen
