# Workflow: Video-Transkription

**Ziel:** YouTube-Videos transkribieren und als strukturierte Wissensdokumente in `docs/tools/` ablegen.

**Inputs:** YouTube-URL oder Liste von YouTube-URLs.
**Output:** Markdown-Wissensdokument in `docs/tools/` (kein rohes Transkript, sondern strukturiert aufbereitetes Wissen).
**Tool:** `tools/extract_video_captions.py`

---

## Voraussetzungen

```bash
# yt-dlp installieren (einmalig) — kein Homebrew nötig
pip3 install yt-dlp
```

---

## Schritt 1: Transkript extrahieren

```bash
# Einzelnes Video
python3 tools/extract_video_captions.py "https://www.youtube.com/watch?v=VIDEO_ID"

# Mit Sprach-Override (falls Video auf Englisch)
python3 tools/extract_video_captions.py "https://www.youtube.com/watch?v=VIDEO_ID" --lang en

# Batch — alle 24 Nate-Herk-Videos auf einmal
python3 tools/extract_video_captions.py --batch docs/nate-herk-urls.txt --lang en
```

Das Transkript landet in `.tmp/transcripts/<video_id>_<titel>.txt`.

---

## Schritt 2: Wissensdokument erstellen

Das rohe Transkript allein reicht nicht. Jedes Video braucht ein strukturiertes Dokument unter `docs/tools/`.

**Struktur eines Wissensdokuments:**

```markdown
# <Thema>: <Kurztitel>

**Quelle:** [Videotitel](YouTube-URL)
**Kanal:** <Kanalname>
**Datum:** <Upload-Datum>
**Transkript:** .tmp/transcripts/<dateiname>.txt

## Kernaussage (1–3 Sätze)

## Hauptkonzepte

### <Konzept 1>
Erklärung mit Direktzitaten aus dem Transkript wo sinnvoll.

### <Konzept 2>
...

## Konkrete Schritte / Techniken (falls vorhanden)

1. ...
2. ...

## Relevanz für MAJER

Warum ist dieses Video für das Projekt relevant? Welche konkreten Entscheidungen hat es informiert?

## Offene Fragen / Nächste Schritte

- ...
```

---

## Schritt 3: Video-01 bis Video-07 neu erstellen

Die bestehenden Dateien `docs/tools/video-01` bis `docs/tools/video-07` wurden ohne echte Transkripte erstellt. Vor dem Neuerstellen:

1. Bestehende Datei lesen — was steht drin?
2. YouTube-URL aus der Datei entnehmen
3. `extract_video_captions.py` aufrufen
4. Dokument mit echtem Transkript-Inhalt neu schreiben
5. Alten Inhalt ersetzen, nicht ergänzen

---

## Edge Cases

**Keine Captions verfügbar:**
Das Skript probiert manuelle Captions zuerst, dann Auto-Captions. Wenn beides fehlt, erscheint ein klarer Fehler. In diesem Fall: Video manuell anschauen und Zusammenfassung mit Quellenangabe schreiben — explizit als "Manuelle Zusammenfassung, kein Transkript" markieren.

**Rate-Limiting durch YouTube:**
Bei Batch-Verarbeitung kann YouTube temporäre IP-Sperren verhängen. Dann: kurz warten (5–10 Min.) und fortfahren. Das Skript überspringt bereits verarbeitete Videos nicht automatisch — manuell URLs aus der Batch-Datei entfernen.

**VTT-Qualität bei Auto-Captions:**
Auto-Captions haben bei Eigennamen, Fachbegriffen und nicht-nativem Sprecher-Akzent Fehler. Im Wissensdokument immer mit eigenem Verständnis und Querverweis auf das Video absichern.

**Kostenpflichtige API-Calls:**
Dieses Tool nutzt keine bezahlten APIs. Nur yt-dlp (kostenlos). Aber: YouTube Data API-Quotas gelten nicht hier, da kein API-Key genutzt wird.

---

## Gelernte Erkenntnisse

- 2026-05-08: Tool initial erstellt. Video-01 bis video-07 waren Claude-Gedächtnis-Zusammenfassungen ohne echte Transkript-Basis — strukturelles Problem identifiziert und mit diesem Tool lösbar.
