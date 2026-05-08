# Nate Herk — Video-Bibliothek

**Stand: 2026-05-08**
**Quelle: Manuell gesammelt von Heinrich**

Diese 24 Videos bilden die Wissens-Grundlage für das gesamte Automatisierungs-System (n8n, KI-Agenten, Faceless Content, Workflows). Jedes Video soll mit `tools/extract_video_captions.py` transkribiert und als strukturiertes Wissensdokument unter `docs/tools/` abgelegt werden.

## Status-Übersicht

| # | URL | Wissensdok | Transkript |
|---|---|---|---|
| 01 | https://youtu.be/jqoFP9QapXI | docs/tools/video-01 | Placeholder (kein echtes Transkript) |
| 02 | https://www.youtube.com/watch?v=mpALXah_PBg | docs/tools/video-02 | Placeholder |
| 03 | https://youtu.be/3TdD8Qv5Tk8 | docs/tools/video-03 | Placeholder |
| 04 | https://youtu.be/xn6Z5PYyAIE | docs/tools/video-04 | Placeholder |
| 05 | https://youtu.be/eRS3CmvrOvA | docs/tools/video-05 | Placeholder |
| 06 | https://youtu.be/bCljOfCH8Ms | docs/tools/video-06 | Placeholder |
| 07 | https://youtu.be/J-6pnl5DQg8 | docs/tools/video-07 | Placeholder |
| 08 | https://youtu.be/TcFeSjwTo7g | fehlt | fehlt |
| 09 | https://youtu.be/_qZvORxGqI0 | fehlt | fehlt |
| 10 | https://youtu.be/EbJu9T30nfI | fehlt | fehlt |
| 11 | https://youtu.be/vDVSGVpB2vc | fehlt | fehlt |
| 12 | https://youtu.be/T4fXb3sbJIo | fehlt | fehlt |
| 13 | https://youtu.be/4XqVR6xI6Kw | fehlt | fehlt |
| 14 | https://youtu.be/sboNwYmH3AY | fehlt | fehlt |
| 15 | https://youtu.be/dfJcMc8bfXI | fehlt | fehlt |
| 16 | https://youtu.be/AwKjofI03Ms | fehlt | fehlt |
| 17 | https://youtu.be/ehg4fhydTgs | fehlt | fehlt |
| 18 | https://youtu.be/vFepZE_wrfg | fehlt | fehlt |
| 19 | https://youtu.be/NvxiSG34mPU | fehlt | fehlt |
| 20 | https://youtu.be/Vx6QlEhyybQ | fehlt | fehlt |
| 21 | https://youtu.be/Ebki7qT0QUw | fehlt | fehlt |
| 22 | https://youtu.be/4Zaoo0YbYaw | fehlt | fehlt |
| 23 | https://youtu.be/MHki2JLR428 | fehlt | fehlt |
| 24 | https://youtu.be/z-C_q4LzPlA | fehlt | fehlt |

## Batch-Datei für Massentranskription

Alle 24 URLs liegen unter `docs/nate-herk-urls.txt` — für Batch-Verarbeitung mit dem Transkriptions-Tool.

## Nächste Schritte

1. `pip3 install yt-dlp` ausführen (einmalig)
2. Für video-01 bis video-07: echte Transkripte nachholen (Placeholders ersetzen)
3. Video 08 bis 24: sequenziell verarbeiten
4. Nach jedem Transkript: Wissensdokument strukturiert neu schreiben
5. Jedes fertige Wissensdokument: als Skill oder Workflow-Referenz einbinden
