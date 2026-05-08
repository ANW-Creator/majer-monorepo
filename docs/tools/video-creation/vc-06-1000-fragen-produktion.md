# VC 06 — 1000 Fragen als Video-Produktions-System
**Konzept:** One source of truth → speist Videos, Portal, Website, kommerzielle Produkte
**Status:** Konzept bestätigt — Aufbau steht noch aus (→ [docs/1000-fragen.md](../1000-fragen.md))
**Relevanz für MAJER:** Sehr hoch — das ist das inhaltliche Fundament des gesamten Kanals

---

## Kernaussage
1000 Fragen sind nicht nur ein Content-Plan. Sie sind die Architektur des gesamten MAJER-Wissens. Jede Frage ist gleichzeitig: ein Video-Skript, ein Lerneinheit im Portal, ein FAQ-Eintrag auf der Website, und ein zukünftiges kommerzielles Produkt. Wer die Fragen hat, hat den Content — auf Jahre hinaus.

---

## Das Prinzip: 1 Frage → 5 Outputs

```
Eine Frage aus der 1000-Fragen-Bank
            │
            ├──► YouTube Short (60s Antwort)
            │         └── via Repurposing → TikTok + Instagram Reels
            │
            ├──► YouTube Longform (10–15min vertiefende Antwort, 10 Fragen gebündelt)
            │
            ├──► Website FAQ-Eintrag (verein.digitale-bildung.de/fragen/[slug])
            │         └── SEO-Content + öffentlich zugänglich
            │
            ├──► Portal-Lerneinheit (verein.digitale-bildung.de/portal/lernpfad)
            │         └── Quiz + Vertiefungs-Material für Mitglieder
            │
            └──► Kommerzieller Output (Zukunft)
                      └── Workshop-Modul, Kurs-Kapitel, Lizenz an Partner
```

---

## Architektur der 1000 Fragen

Die 1000 Fragen folgen den 3 Bereichen des MAJER-Konzepts:

### Bereich 1: Sich selbst kennen (~330 Fragen)
**Kern:** Transaktionsanalyse, Impulskontrolle, Selbstwahrnehmung, Kommunikation

Beispiel-Fragen (Seed):
1. Was ist Transaktionsanalyse und warum ist sie relevant für den digitalen Alltag?
2. Wie erkenne ich, aus welchem Ich-Zustand ich gerade handle?
3. Was ist die 3-Sekunden-Pause und wie übt man sie?
4. Warum reagieren Menschen auf Nachrichten anders als auf ein direktes Gespräch?
5. Was passiert in meinem Gehirn wenn ich ein "Like" bekomme?
6. Wie beeinflusst Schlafmangel meine Entscheidungsfähigkeit?
7. Warum ist FOMO (Fear of Missing Out) ein algorithmisches Produkt?
8. Was ist der Unterschied zwischen Reaktion und Entscheidung?
9. Wie lerne ich, schwierige Gespräche nicht zu vermeiden?
10. Warum vergleiche ich mich auf Instagram — und wie höre ich damit auf?

### Bereich 2: Digitale Welt verstehen (~330 Fragen)
**Kern:** Algorithmen, Geschäftsmodelle, KI-Mechaniken, Datenschutz, Aufmerksamkeitsökonomie

Beispiel-Fragen (Seed):
11. Wie verdient TikTok Geld — und was hat das mit meinem Feed zu tun?
12. Was ist ein Empfehlungsalgorithmus und wie entscheidet er was ich sehe?
13. Warum sehe ich immer Inhalte die meine Meinung bestätigen?
14. Was ist eine Filter Bubble und wie erkenne ich, ob ich in einer bin?
15. Wie antwortet eine KI eigentlich — und warum täuscht sie sich manchmal?
16. Was ist der Unterschied zwischen KI-generierten und echten Bildern?
17. Warum kostet das Scrollen nichts — und was ist der echte Preis?
18. Was macht YouTube mit meinen Daten wenn ich ein Video anschaue?
19. Was ist Surveillance Capitalism?
20. Wie funktioniert eine Google-Anzeige technisch?

### Bereich 3: Werkzeuge nutzen (~340 Fragen)
**Kern:** Apps bauen, KI nutzen, Automatisierung, Prompt Engineering, kritisches Denken

Beispiel-Fragen (Seed):
21. Wie baut man in einem Tag eine erste App — ohne Programmierkenntnisse?
22. Was ist Prompt Engineering und warum ist es eine Schlüsselkompetenz?
23. Wie erkenne ich ob eine KI-Antwort vertrauenswürdig ist?
24. Was ist Automatisierung und wo scheitert sie?
25. Was ist ein Webhook?
26. Wie setzt man ein reales Problem in eine App-Idee um?
27. Was ist der Unterschied zwischen Programmieren und Vibe Coding?
28. Wie baue ich einen einfachen Chatbot ohne Code?
29. Wann sollte man KI nutzen und wann nicht?
30. Was macht einen guten Prompt aus?

---

## Produktions-Pipeline (von Frage zu Video)

### Phase 1: Fragen-Bank aufbauen
```
1. Fragen in Pocketbase-Kollektion "tausend_fragen" speichern (→ schema in packages/db/)
   Felder: id, frage, bereich (1/2/3), status, skript, video_url, website_url, portal_url
2. Status-Flow: offen → skript-bereit → aufgenommen → live
3. Priorität setzen: welche 10 Fragen werden zuerst produziert?
```

### Phase 2: Batch-Skript-Erstellung (5 Fragen = 5 Videos)
```
1. 5 Fragen aus der Bank auswählen (Status: offen)
2. Claude-Prompt: "Schreib 5 Video-Skripte für [Frage 1–5]" (→ vc-02-skript-methoden.md)
3. Skripte in PB speichern → Status: skript-bereit
4. Review: Fakten korrekt? Ton passt?
```

### Phase 3: Aufnahme-Tag (1×/Woche, 2–3h)
```
1. 5–7 Skripte auf einmal aufnehmen (Batch-Aufnahme)
2. CapCut Teleprompter nutzen
3. Raw-Files sichern
```

### Phase 4: Schnitt + Repurposing (pro Longform ~60–90 Min)
```
1. Rohschnitt in CapCut (Short) oder DaVinci (Longform)
2. Upload zu Opus Clip → Shorts generieren
3. Captions prüfen
4. Buffer: alle Plattformen schedulen
5. PB: Status → live, Video-URL hinterlegen
```

### Phase 5: Website-Sync (automatisch via n8n, Zukunft)
```
Trigger: Video live in PB → n8n Workflow
  → FAQ-Eintrag auf Website generieren (Frage + Antwort als Text)
  → Lerneinheit im Portal anlegen (Video + Quiz)
  → Status in PB: "website-live"
```

---

## Tempo-Ziel

| Zeitraum | Videos | Fragen beantwortet |
|---|---|---|
| Monat 1–2 | 2 Longform + 10–12 Shorts | 30–40 Fragen |
| Monat 3–6 | 2 Longform/Monat + 15 Shorts | 100–150 Fragen |
| Jahr 1 | ~25 Longform + 150 Shorts | 250–300 Fragen |
| Jahr 3 | — | 1000 Fragen beantwortet |

**Perspektive:** Mit 1000 beantworteten Fragen ist MAJER das deutschsprachige Wissens-Archiv für digitale Kompetenz — Videos, Website, Portal. Kein anderer Verein in DE hat das.
