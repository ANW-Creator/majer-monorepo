# Die 1000 Fragen — Konzept und Architektur
**Version:** 0.1 (Seed-Dokument)
**Status:** Konzept definiert — Aufbau beginnt
**One source of truth:** Jede Frage speist Videos, Portal, Website und kommerzielle Produkte gleichzeitig

---

## Was sind die 1000 Fragen?

Die 1000 Fragen sind die inhaltliche Basis des gesamten MAJER-Projekts. Sie sind:

1. **Video-Content-Bank:** Jede Frage wird ein Short-Video (60s) und ggf. ein Longform-Video
2. **Lern-Curriculum im Portal:** Mitglieder arbeiten sich durch Fragen als strukturierten Lernpfad
3. **Öffentliches Wissens-Archiv:** Jede Frage + Antwort wird eine öffentliche Seite auf der Website (SEO + Bildungsressource)
4. **Kommerzielles Fundament:** Gebündelte Fragen werden zu Workshop-Modulen, Kursen, Lizenzprodukten

Die 1000 Fragen existieren noch nicht vollständig — sie werden über 2–3 Jahre aufgebaut. Dieses Dokument definiert die Architektur und startet den Katalog mit den ersten 30 Seed-Fragen.

---

## Warum 1000?

1000 Fragen sind:
- **Volumenstark:** 1000 Videos + 1000 Website-Seiten = unmittelbares SEO-Fundament
- **Vollständig:** 3 Bereiche × ~333 Fragen decken das Themenfeld umfassend ab
- **Nachweisbar:** Kein anderer Verein in DE hat ein öffentliches, durchnumeriertes Wissens-Archiv zu digitaler Kompetenz
- **Realistisch:** 300 Videos/Jahr bei 5/Woche — in 3 Jahren erreichbar

---

## Architektur: 3 Bereiche × ~333 Fragen

```
1000 Fragen
    │
    ├── Bereich 1: Sich selbst kennen      (~333 Fragen, #001–333)
    │       Transaktionsanalyse, Impulskontrolle, Selbstwahrnehmung,
    │       Kommunikation, Emotionen, Entscheidungen
    │
    ├── Bereich 2: Digitale Welt verstehen (~333 Fragen, #334–666)
    │       Algorithmen, Geschäftsmodelle, KI-Mechaniken, Datenschutz,
    │       Aufmerksamkeitsökonomie, Filter Bubbles, Surveillance
    │
    └── Bereich 3: Werkzeuge nutzen        (~334 Fragen, #667–1000)
            App-Entwicklung, Prompt Engineering, Automatisierung,
            No-Code, kritisches Tech-Denken, Bauen mit Zweck
```

---

## Fragen-Format (Schema)

Jede Frage hat folgende Eigenschaften:

```
ID:          #001 (dreistellig, fortlaufend)
Frage:       "Was ist Transaktionsanalyse?"
Bereich:     1 / 2 / 3
Schwierigkeit: Einstieg / Vertiefung / Experte
Zielgruppe:  Schüler / Student / Lehrer / Förderer / Alle
Tags:        [transaktionsanalyse, selbstwahrnehmung, psychologie]
Status:      offen / skript-bereit / aufgenommen / live
Verknüpfte Fragen: #002, #003 (folge-Fragen)
```

In Pocketbase: Kollektion `tausend_fragen` (→ packages/db/ Schema)

---

## Seed-Katalog: Die ersten 30 Fragen

### Bereich 1: Sich selbst kennen (#001–010)

| # | Frage | Schwierigkeit | Zielgruppe |
|---|---|---|---|
| 001 | Was ist Transaktionsanalyse — und warum ist sie relevant für den digitalen Alltag? | Einstieg | Alle |
| 002 | Was sind die drei Ich-Zustände nach Eric Berne? | Einstieg | Alle |
| 003 | Wie erkenne ich, aus welchem Ich-Zustand ich gerade handle? | Einstieg | Alle |
| 004 | Was ist die 3-Sekunden-Pause — und wie übt man sie? | Einstieg | Alle |
| 005 | Warum reagieren Menschen auf Nachrichten anders als auf direkte Gespräche? | Einstieg | Alle |
| 006 | Was passiert in meinem Gehirn wenn ich ein "Like" bekomme? | Einstieg | Schüler/Student |
| 007 | Was ist FOMO und warum ist es ein algorithmisches Produkt? | Einstieg | Schüler/Student |
| 008 | Wie beeinflusst Schlafmangel meine Entscheidungsfähigkeit? | Einstieg | Alle |
| 009 | Was ist der Unterschied zwischen Reaktion und Entscheidung? | Einstieg | Alle |
| 010 | Warum vergleiche ich mich auf Instagram — und wie höre ich damit auf? | Einstieg | Schüler |

### Bereich 2: Digitale Welt verstehen (#011–020)

| # | Frage | Schwierigkeit | Zielgruppe |
|---|---|---|---|
| 011 | Wie verdient TikTok Geld — und was bedeutet das für meinen Feed? | Einstieg | Alle |
| 012 | Was ist ein Empfehlungsalgorithmus und wie entscheidet er was ich sehe? | Einstieg | Alle |
| 013 | Warum sehe ich immer Inhalte die meine Meinung bestätigen? | Einstieg | Alle |
| 014 | Was ist eine Filter Bubble — und wie erkenne ich, ob ich in einer bin? | Einstieg | Alle |
| 015 | Wie antwortet eine KI eigentlich — und warum täuscht sie sich manchmal? | Einstieg | Alle |
| 016 | Was ist der Unterschied zwischen KI-generierten und echten Bildern? | Einstieg | Alle |
| 017 | Warum kostet das Scrollen nichts — und was ist der echte Preis? | Einstieg | Alle |
| 018 | Was ist Surveillance Capitalism — einfach erklärt? | Vertiefung | Student/Lehrer |
| 019 | Wie funktioniert eine Google-Anzeige technisch? | Vertiefung | Student |
| 020 | Was macht YouTube mit meinen Daten wenn ich ein Video anschaue? | Einstieg | Alle |

### Bereich 3: Werkzeuge nutzen (#021–030)

| # | Frage | Schwierigkeit | Zielgruppe |
|---|---|---|---|
| 021 | Wie baut man in einem Tag eine erste App — ohne Programmierkenntnisse? | Einstieg | Schüler/Student |
| 022 | Was ist Prompt Engineering — und warum ist es eine Schlüsselkompetenz? | Einstieg | Alle |
| 023 | Wie erkenne ich ob eine KI-Antwort vertrauenswürdig ist? | Einstieg | Alle |
| 024 | Was ist Automatisierung — und wo scheitert sie? | Einstieg | Alle |
| 025 | Was ist ein Webhook — in 3 Sätzen erklärt? | Vertiefung | Student |
| 026 | Wie setzt man ein reales Problem in eine App-Idee um? | Einstieg | Schüler/Student |
| 027 | Was ist der Unterschied zwischen Programmieren und Vibe Coding? | Einstieg | Alle |
| 028 | Wie baue ich einen einfachen Chatbot ohne Code? | Einstieg | Schüler/Student |
| 029 | Wann sollte man KI nutzen — und wann nicht? | Einstieg | Alle |
| 030 | Was macht einen guten Prompt aus? | Einstieg | Alle |

---

## Produktions-Pipeline (1 Frage → alle Kanäle)

```
Frage definiert (Status: offen)
         │
         ▼
Claude schreibt Skript (Hook/Body/CTA) → Status: skript-bereit
         │
         ▼
Heinrich reviewt: Fakten korrekt? Ton passt?
         │
         ▼
Aufnahme (solo oder im Batch: 5–7 Fragen pro Aufnahme-Tag)
         │
         ▼
Schnitt + Captions (CapCut für Shorts, DaVinci für Longform)
         │
         ▼
Opus Clip → 3–5 Shorts aus Longform
         │
         ▼
Buffer: TikTok + YouTube Shorts + Instagram Reels gleichzeitig schedulen
YouTube Longform: separates Upload
LinkedIn: Clip + manueller Textpost
         │
         ▼
Website: FAQ-Eintrag (Frage + Antwort-Text + Video-Embed) → Status: website-live
Portal: Lerneinheit (Video + Quiz + Vertiefungs-Links) → Status: portal-live
         │
         ▼
Status in PB: live ✓
```

---

## Tempo-Plan

| Phase | Zeitraum | Ziel | Kumuliert |
|---|---|---|---|
| Seed | Monat 1 | 30 Fragen live (Videos + Website) | 30 |
| Aufbau | Monat 2–6 | ~15 Fragen/Monat | 100 |
| Wachstum | Monat 7–12 | ~20 Fragen/Monat | 200 |
| Jahr 2 | — | ~300 Fragen/Jahr | 500 |
| Jahr 3 | — | ~500 Fragen/Jahr | 1000 |

---

## Kommerzielle Zukunft (nach Vereins-Basis)

Sobald 200+ Fragen live und die Methodik erprobt ist, entstehen kommerzielle Produkte:

- **Workshops (Schulen/VHS):** 10er-Fragen-Pakete als 90min-Workshop-Modul
- **Online-Kurs:** "50 Fragen die das Schulsystem nicht stellt" (bezahlter Kurs)
- **Lizenz:** Andere Bildungseinrichtungen lizenzieren das Fragen-System (CC BY-SA 4.0 für Verein, proprietär für kommerziell)
- **Zertifizierung:** Wer alle 333 Fragen eines Bereichs beantwortet hat → MAJER-Zertifikat

---

## Verwandte Dokumente

- [docs/tools/video-creation/vc-06-1000-fragen-produktion.md](tools/video-creation/vc-06-1000-fragen-produktion.md) — Produktions-Workflow
- [docs/tools/video-creation/vc-02-skript-methoden.md](tools/video-creation/vc-02-skript-methoden.md) — Skript-Erstellung
- [docs/tools/video-creation/vc-05-themen-planung.md](tools/video-creation/vc-05-themen-planung.md) — Themen-Strukturierung
- [docs/website-plan.md](website-plan.md) — Portal-Lernpfad-Architektur
