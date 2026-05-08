# YouTube-Wissen strukturieren: 36 Videos in ein organisiertes Wissenssystem

**Quelle:** https://youtu.be/sboNwYmH3AY
**Video-ID:** sboNwYmH3AY
**Sprache:** en
**Transkript:** .tmp/transcripts/sboNwYmH3AY.txt

## Kernaussage

Basierend auf einer Idee von Andrej Karpathy beschreibt dieses Video, wie man Claude Code nutzt, um beliebige Rohdaten (YouTube-Transkripte, Artikel, Meeting-Aufzeichnungen) in ein strukturiertes Markdown-Wiki zu verwandeln — ohne Vektor-Datenbank, ohne Embeddings, nur mit gut organisierten Dateien. Ein User reduzierte seinen Token-Verbrauch bei Abfragen um 95% durch diesen Ansatz. Für MAJER relevant als Grundlage für ein kontinuierlich wachsendes KI-Wissenssystem, das andere Agenten mit Kontext versorgt.

## Hauptkonzepte und Techniken

### Das Karpathy LLM Wiki-Konzept

Andrej Karpathy veröffentlichte einen viralen Post über LLM Knowledge Bases. Der Kerngedanke: Statt einer Datenbank bekommt das LLM gut organisierte Markdown-Dateien. Es findet Informationen über Index-Dateien und Links statt über Ähnlichkeitssuche. Das Ergebnis: tieferes Verständnis von Beziehungen, deutlich weniger Infrastruktur, kaum Kosten außer Token.

### Vault-Struktur: Raw → Wiki

Das System besteht aus genau zwei Ordnern:
- `raw/`: Hier kommen alle unbearbeiteten Quelldokumente rein (Transkripte, Artikel, PDFs)
- `wiki/`: Hier legt Claude Code die strukturierten, verlinkten Markdown-Seiten an

Dazu kommen drei zentrale Dateien: `CLAUDE.md` (erklärt dem Agenten wie das Projekt funktioniert), `index.md` (Übersicht über alle Wiki-Seiten mit Links) und `log.md` (Operationshistorie).

### Claude Code als Ingest-Maschine

Der Workflow ist minimal: Datei in `raw/` ablegen, Claude Code sagen "ingest this". Claude liest das Dokument, erstellt mehrere Wiki-Seiten (z.B. 23 Seiten aus einem einzigen Artikel), verknüpft sie automatisch mit Backlinks und aktualisiert Index und Log. Bei 36 YouTube-Transkripten dauerte der Batch-Ingest ca. 14 Minuten.

### Obsidian als optionaler Graph-Frontend

Obsidian ist ein kostenloses Tool, das Markdown-Dateien in einem Graph visualisiert. Man sieht Nodes (einzelne Wiki-Seiten) und Edges (Backlinks zwischen ihnen). Damit erkennt man auf einen Blick, welche Konzepte häufig auftauchen (große Hubs) und wie sie zusammenhängen. Obsidian ist optional — das System funktioniert auch ohne es, nur als Ordner mit Markdown-Dateien.

### Obsidian Web Clipper: Artikel direkt ins System

Die Chrome-Extension "Obsidian Web Clipper" ermöglicht es, Artikel direkt aus dem Browser ins `raw/`-Verzeichnis zu speichern. In den Extension-Einstellungen unter "Location" `raw` als Zielordner eintragen.

### Hot Cache: Effizienter Kontext für Agenten

In Konfigurationen, wo das Wiki als Kontext-Quelle für einen laufenden Agenten dient (z.B. Executive Assistant), empfiehlt sich eine `hot.md`-Datei im Wiki. Diese enthält ca. 500 Zeichen der aktuellsten/relevantesten Information — so muss der Agent nicht bei jeder Anfrage alle Wiki-Seiten durchlesen.

### Wiki Linting: Gesundheitschecks

Claude Code kann regelmäßig "Health Checks" über das Wiki laufen lassen: inkonsistente Daten finden, fehlende Informationen mit Web-Suche ergänzen, interessante neue Verbindungen zwischen Seiten herstellen. Das hält das System skalierbar und konsistent.

### LLM Wiki vs. semantisches RAG

| Eigenschaft | LLM Wiki | Semantisches RAG |
|---|---|---|
| Suche | Index + Links | Ähnlichkeitssuche |
| Beziehungen | Explizite Backlinks | Implizite Chunk-Nähe |
| Infrastruktur | Nur Markdown | Embedding-Modell + Vektordatenbank |
| Kosten | Nur Token | Laufende Compute + Storage |
| Wartung | Lint + neue Dateien | Re-embedding bei Änderungen |
| Skalierung | Bis ~1000 Seiten sinnvoll | Für Millionen Dokumente |

### Integration mit anderen Agenten

Das Wiki kann direkt als Kontext-Quelle für andere Claude Code Projekte dienen. Im CLAUDE.md des Agenten-Projekts wird der Pfad zum Wiki-Verzeichnis angegeben. Der Agent liest bei Bedarf Index, Hot Cache und einzelne Domain-Sub-Indizes.

## Konkrete Schritte / Befehle / Tools

1. Obsidian von obsidian.md herunterladen (kostenlos, optional)
2. Neuen Vault erstellen, Ordner auf Desktop oder Projekt-Verzeichnis
3. Claude Code im Vault-Ordner öffnen
4. Karpathy-Gist kopieren und als Prompt einfügen mit Zusatz: "You are now my LLM Wiki agent. Implement this exact idea file as my complete second brain. Guide me step-by-step. Create the claude.md schema."
5. Claude erstellt automatisch `raw/`, `wiki/`, `CLAUDE.md`, `index.md`, `log.md`
6. Erste Datei in `raw/` legen, Claude mit "ingest this" beauftragen
7. Obsidian Web Clipper Extension installieren, Location auf `raw` setzen
8. Für laufenden Ingest: "Ingest the new YouTube video into the wiki" als Routine

## Relevanz für MAJER

Das Video dokumentiert exakt den Prozess, den MAJER gerade mit diesem Transkript-System durchführt. Die docs/tools/-Struktur ist eine Variante dieses Konzepts. Weiterführend: Das Wiki-System kann als Kontext-Basis für den zukünftigen MAJER-Heartbeat-Agenten dienen — statt Kontext-Dateien im Projekt zu pflegen, zieht der Agent bei Bedarf aus einem strukturierten Wiki. Der Hot-Cache-Ansatz ist besonders relevant für Agenten, die häufig auf MAJER-Vereinsdaten zugreifen müssen. Token-Ersparnis von 95% (aus dem Transcript erwähnt) ist ein starkes Argument für die Umstellung.

## Direkte Zitate

> "Normal AI chats are ephemeral, meaning the knowledge disappears after the conversation. But this method using Karpathy's LLM wiki makes knowledge compound like interest in a bank."

> "You don't need a fancy vector database, embeddings, or complex infrastructure. It's literally just a folder with markdown files. That's it."

> "One X user turned 383 scattered files and over 100 meeting transcripts into a compact wiki and dropped token usage by 95% when querying with Claude."

> "I literally didn't have to do any manual relationship building here. It just figured it all out on its own."

> "People on X are now talking about like this is how 2026 AI agentic software and products will be made. You just give it a high-level idea and it goes and builds it out."
