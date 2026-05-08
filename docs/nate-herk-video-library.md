# Nate Herk — Video-Bibliothek

**Stand: 2026-05-08**
**Quelle: Manuell gesammelt von Heinrich**

Diese 24 Videos bilden die Wissens-Grundlage für das gesamte Automatisierungs-System (n8n, KI-Agenten, Faceless Content, Workflows). Jedes Video wurde mit `tools/extract_video_captions.py` transkribiert und als strukturiertes Wissensdokument unter `docs/tools/` abgelegt.

## Status-Übersicht

| # | URL | Wissensdokument | Transkript |
|---|---|---|---|
| 01 | https://youtu.be/jqoFP9QapXI | [video-01-claude-code-hacks.md](tools/video-01-claude-code-hacks.md) | ✅ |
| 02 | https://www.youtube.com/watch?v=mpALXah_PBg | [video-02-claude-code-full-course.md](tools/video-02-claude-code-full-course.md) | ✅ |
| 03 | https://youtu.be/3TdD8Qv5Tk8 | [video-03-codex-super-app.md](tools/video-03-codex-super-app.md) | ✅ |
| 04 | https://youtu.be/xn6Z5PYyAIE | [video-04-higgsfield-ai.md](tools/video-04-higgsfield-ai.md) | ✅ |
| 05 | https://youtu.be/eRS3CmvrOvA | [video-05-400-hours-claude-code.md](tools/video-05-400-hours-claude-code.md) | ✅ |
| 06 | https://youtu.be/bCljOfCH8Ms | [video-06-ai-operating-system.md](tools/video-06-ai-operating-system.md) | ✅ |
| 07 | https://youtu.be/J-6pnl5DQg8 | [video-07-browser-automation.md](tools/video-07-browser-automation.md) | ✅ |
| 08 | https://youtu.be/TcFeSjwTo7g | [video-08-website-transformation.md](tools/video-08-website-transformation.md) | ✅ |
| 09 | https://youtu.be/_qZvORxGqI0 | [video-09-save-money-claude.md](tools/video-09-save-money-claude.md) | ✅ |
| 10 | https://youtu.be/EbJu9T30nfI | [video-10-heygen-content-automation.md](tools/video-10-heygen-content-automation.md) | ✅ |
| 11 | https://youtu.be/vDVSGVpB2vc | [video-11-claude-teams.md](tools/video-11-claude-teams.md) | ✅ |
| 12 | https://youtu.be/T4fXb3sbJIo | [video-12-planning-mode.md](tools/video-12-planning-mode.md) | ✅ |
| 13 | https://youtu.be/4XqVR6xI6Kw | [video-13-plugin-10x.md](tools/video-13-plugin-10x.md) | ✅ |
| 14 | https://youtu.be/sboNwYmH3AY | [video-14-youtube-knowledge-system.md](tools/video-14-youtube-knowledge-system.md) | ✅ |
| 15 | https://youtu.be/dfJcMc8bfXI | [video-15-anthropic-updates-de.md](tools/video-15-anthropic-updates-de.md) | ✅ |
| 16 | https://youtu.be/AwKjofI03Ms | [video-16-claude-code-tipps-de.md](tools/video-16-claude-code-tipps-de.md) | ✅ |
| 17 | https://youtu.be/ehg4fhydTgs | [video-17-claude-routines.md](tools/video-17-claude-routines.md) | ✅ |
| 18 | https://youtu.be/vFepZE_wrfg | [video-18-agentic-workflows.md](tools/video-18-agentic-workflows.md) | ✅ |
| 19 | https://youtu.be/NvxiSG34mPU | [video-19-luxury-websites.md](tools/video-19-luxury-websites.md) | ✅ |
| 20 | https://youtu.be/Vx6QlEhyybQ | [video-20-claude-system-de.md](tools/video-20-claude-system-de.md) | ✅ |
| 21 | https://youtu.be/Ebki7qT0QUw | [video-21-ki-agenten-firma-de.md](tools/video-21-ki-agenten-firma-de.md) | ✅ |
| 22 | https://youtu.be/4Zaoo0YbYaw | [video-22-youtube-social-repurposing.md](tools/video-22-youtube-social-repurposing.md) | ✅ |
| 23 | https://youtu.be/MHki2JLR428 | [video-23-websites-ki-de.md](tools/video-23-websites-ki-de.md) | ✅ |
| 24 | https://youtu.be/z-C_q4LzPlA | [video-24-ki-assistent-bild-video-de.md](tools/video-24-ki-assistent-bild-video-de.md) | ✅ |

## Transkriptions-Tool

Alle 24 Transkripte liegen unter `.tmp/transcripts/[video-id].txt`.

Batch-Befehl (wenn neue Videos hinzukommen):
```bash
python3 tools/extract_video_captions.py --batch docs/nate-herk-urls.txt --lang en
```

Das Tool überspringt bereits vorhandene Transkripte automatisch.
