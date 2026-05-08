# Nova Business — Fundament und Roadmap

**Quelle:** `FIDT - Buisness/Nova_10_Day_Setup_Guide.md`
**Stand:** 2026-05-08

Nova ist der kommerzielle Arm: KI-Marketing-Automatisierung als Dienstleistung. Getrennt vom gemeinnützigen Verein. Ziel: Video-Produktions-Automatisierung als Service für KMUs, insbesondere Social Media Content.

---

## Positioning

Nova = "Die KI-Marketing-Abteilung, die nie schläft"
- Nicht eine Agentur. Eine Automatisierung.
- Kernversprechen: 12 Videos pro Tag, KI lernt den Stil, 95% günstiger als Agentur.
- DSGVO-konform (Hetzner Falkenstein = Deutschland).

---

## Tech Stack (original Guide vs. MAJER-Monorepo-Status)

| Komponente | Guide-Empfehlung | MAJER-Status |
|---|---|---|
| Hosting | Hetzner CPX31 (16,68€/Mo) | VPS vorhanden (docker-compose konfiguriert) |
| n8n | Docker auf Hetzner, Port 5678 | In docker-compose definiert, noch nicht deployed |
| Reverse Proxy | Cloudflare Tunnel | Traefik v3 im Monorepo konfiguriert |
| Auth | Basic Auth (N8N_BASIC_AUTH) | Via .env |
| Video-Rendering | Creatomate (39$/Mo) | Noch kein Account |
| Voice Synthesis | ElevenLabs Creator (22$/Mo) | Noch kein Account, noch kein Voice Clone |
| Script-Generierung | Claude API | Claude API verfügbar (Anthropic SDK) |
| Audio-Transcription | OpenAI Whisper / AssemblyAI | Nicht konfiguriert |
| Lead Capture | Tally (kostenlos) | Nicht konfiguriert |
| Datenbank | Airtable (kostenlos bis 1.200 Zeilen) | Pocketbase vorhanden (Alternative) |
| Landing Page | Framer | apps/verein vorhanden (Next.js) |

---

## Kern-Workflow: Video Engine MVP

Input: Audio per Telegram → Output: Fertiges Video zurück via Telegram

1. Telegram Trigger (Audio-Nachricht)
2. Audio-Download
3. Transkription (Whisper / AssemblyAI)
4. Script-Generierung (Claude, 30-Sek-Format, max 75 Wörter)
5. Text-to-Speech (ElevenLabs, geklonte Stimme)
6. Video-Rendering (Creatomate, 9:16 Format)
7. Video-Rückversand via Telegram

Dieser Workflow ist das Kernprodukt. Alles andere baut darauf auf.

---

## Preismodell (aus Guide)

| Paket | Preis | Inhalt |
|---|---|---|
| Freebie | 0€ | 1 Demo-Video |
| Starter | 59€ | X Videos/Monat |
| Professional | 349€ | Vollautomatisierung |
| Enterprise | 1.599€ | Komplette KI-Marketing-Abteilung |

Break-Even: 3 Starter-Kunden = 177€ (deckt ~170€ monatliche Fixkosten).

---

## Legal

- Gewerbeanmeldung erforderlich (ca. 30€): "Dienstleistungen im Bereich Marketing-Automatisierung und KI-gestützte Content-Erstellung"
- Geschäftskonto trennen (Kontist, 12€/Mo oder Alternative)
- Impressum + Datenschutz zwingend auf Landing Page
- Datenschutzerklärung muss Anthropic, ElevenLabs, Creatomate, Airtable abdecken

---

## API-Credentials-Matrix

| Service | Zweck | Geschätzte Kosten | Status |
|---|---|---|---|
| Anthropic Claude API | Script-Generierung | 50€ Prepaid | Vorhanden |
| ElevenLabs | Voice Clone + TTS | 22$/Mo (Creator) | Fehlt |
| Creatomate | Video-Rendering | 39$/Mo (Starter) | Fehlt |
| OpenAI Whisper / AssemblyAI | Audio-Transkription | variabel | Fehlt |
| Telegram Bot | Input/Output-Kanal | 0€ | Fehlt |
| Tally / Pocketbase | Lead Capture | 0€ | Pocketbase vorhanden |

---

## Monat-1 Kostenplan

| Posten | Kosten |
|---|---|
| Gewerbe (einmalig) | 30€ |
| Domain (getnova.ai) | ~90€/Jahr = 7,50€/Mo |
| Hetzner VPS (bereits vorhanden) | ~16,68€/Mo |
| Geschäftskonto | 12€/Mo |
| Claude API | 50€ Prepaid |
| ElevenLabs Creator | ~20€/Mo |
| Creatomate Starter | ~36€/Mo |
| **Total Monat 1** | **~170€** |

---

## Differenzierung Verein / Nova

Der Verein (MAJER Digitale Bildung) ist gemeinnützig. Nova ist gewerblich. Die Automatisierungs-Infrastruktur wird von Nova entwickelt und kann dann dem Verein zur Verfügung stehen — aber rechtlich strikt getrennt.

**Synergien:**
- Video-Produktions-System aus Nova → Content für Verein
- n8n-Infrastruktur geteilt (separate Instanzen oder Workspaces)
- Erfahrungen aus Nova fließen in Workshop-Materialien des Vereins

---

## Nächste Schritte für Nova

1. ElevenLabs Account anlegen + Voice Clone aufnehmen (5 Sätze auf Deutsch, klar gesprochen)
2. Creatomate Account + erstes 9:16-Template erstellen
3. Telegram Bot via BotFather anlegen
4. Video Engine MVP in n8n aufbauen (sobald n8n deployed)
5. Gewerbeanmeldung (wenn MAJER-Verein-Fundament steht)
6. Landing Page: nova-verzeichnis auf MAJER-Website oder eigenständige Domain
