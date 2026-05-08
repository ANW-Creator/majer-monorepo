# VC 03 — Creator-Workflow-System (AI-gestützt)
**Status:** Framework dokumentiert — konkret welches System Heinrich nutzt, muss nachgetragen werden
**Relevanz für MAJER:** Hoch — dieses System ist der Grund warum Videos nicht selbst gebaut werden müssen

---

## Kernaussage
Es gibt bereits fertige Creator-Systeme, die zeigen wie man mit KI-Unterstützung konstant und schnell Videos produziert — ohne jedes Mal neu nachzudenken. Das sind keine SaaS-Tools, sondern Methoden-Systeme eines Creators: ein dokumentierter Prozess von Idee bis Post, bei dem KI jeden einzelnen Schritt beschleunigt.

> **TODO:** Heinrich — welches spezifische Creator-System meinst du? (z.B. Matt Gray "Content OS", Liam Ottley AI Automation, Nicolas Cole "Prolific Creator", oder ein anderes) → Dieses File aktualisieren sobald bekannt.

---

## Was ein Creator-Workflow-System ist

Ein Creator-Workflow-System ist nicht ein einzelnes Tool, sondern eine Methode mit klar definierten Schritten:

```
1. THEMEN-FINDUNG     (5–10 Min)    KI analysiert was in deiner Nische gerade gesucht wird
2. SKRIPT-ERSTELLUNG  (5–10 Min)    KI schreibt Erstentwurf aus einem Satz Input
3. REVIEW & ANPASSUNG (5–10 Min)    Manuell: Ton, persönliche Geschichte einfügen
4. AUFNAHME           (10–30 Min)   Teleprompter oder frei sprechen
5. ROHSCHNITT         (15–30 Min)   CapCut / DaVinci automatisch + manuell
6. REPURPOSING        (5–10 Min)    Opus Clip → 3–5 Shorts automatisch
7. CAPTIONS & EXPORT  (5 Min)       Auto-Caption (CapCut), Branding-Outro
8. SCHEDULING         (5 Min)       Buffer/Publer: alle Plattformen gleichzeitig
```

**Ziel:** Ein Long-form Video + 3–5 Shorts in 60–90 Minuten produzieren.

---

## Schritt 1: Themen-Findung mit KI

### Manuelle Suche (kein Tool)
- TikTok Suchleiste → Nische eintippen → sehen was autovervollständigt wird
- YouTube Suchleiste → gleiche Methode
- Google Trends → Vergleich: "Transaktionsanalyse" vs "TikTok Algorithmus" in DE
- AnswerThePublic → Fragen die Menschen zu einem Thema stellen

### KI-gestützte Themen-Findung
```
Claude-Prompt:

"Ich baue einen YouTube/TikTok-Kanal über digitale Bildung für Jugendliche 14–25 in Deutschland. 
Mein Themen-Rahmen:
- Selbstwahrnehmung / Transaktionsanalyse
- Wie Social-Media-Algorithmen funktionieren
- KI verstehen und sinnvoll nutzen

Gib mir 20 konkrete Video-Ideen die:
1. In 60 Sekunden erklärbar sind
2. Eine überraschende oder kontra-intuitive Aussage als Hook haben
3. Direkt für Jugendliche relevant sind

Format: Titel | Hook-Satz | Kernidee (1 Satz)"
```

---

## Schritt 2: Skript mit Claude in 10 Minuten

→ Siehe [vc-02-skript-methoden.md](vc-02-skript-methoden.md) für den vollständigen Skript-Prompt.

**Zusatz für Content-Batch (5 Videos auf einmal):**
```
Claude-Prompt:

"Schreib 5 kurze Video-Skripte (je 60 Sekunden) für MAJER e.V.
Nutze diese 5 Fragen aus unserem 1000-Fragen-Katalog:
1. [Frage 1]
2. [Frage 2]
3. [Frage 3]
4. [Frage 4]
5. [Frage 5]

Format für jedes Skript: HOOK / PROBLEM / INSIGHT / CTA
Stil: Kluger älterer Bruder, kein Lehrerton."
```

→ 5 fertige Skripte in einem Prompt-Call. 30 Videos/Monat sind in 2–3 Stunden skript-fertig.

---

## Schritt 3: Aufnahme-Setup (minimalistisch)

**Minimum-Setup (0€ extra):**
- Smartphone hochkant (9:16)
- Gutes Licht (Fenster vor dir, nicht hinter dir)
- Kopfhörer-Mikrofon (bereits vorhanden)
- CapCut-Teleprompter-Funktion (Text scrollt während Aufnahme)

**Upgrade-Setup (50–150€):**
- Rode Wireless GO II Mikrofon (~150€)
- Ring Light (~30–50€)
- Stativ (~20€)

---

## Schritt 4: Bekannte Creator-Systeme (Vergleich)

| System | Creator | Stärke | Schwäche |
|---|---|---|---|
| Content OS | Matt Gray | Vollständig, skalierbar | Komplex für Solo-Start |
| Prolific Creator | Nicolas Cole | Schreib-fokussiert | Weniger Video-fokussiert |
| AI Content Machine | Liam Ottley | KI-schwerpunkt | Auf englische Nische ausgerichtet |
| Unbekannt | Heinrich (TODO) | — | — |

---

## MAJER-Anpassung des Workflows

Da MAJER Bildungs-Content produziert (nicht Unterhaltung), gibt es eine Besonderheit:

**Qualitäts-Gate:** Jedes Skript muss den Fakten-Check bestehen:
- Zahlen (PISA-Daten, Berliner Bildungsbericht) → Quelle prüfen
- Aussagen über Algorithmen → technisch korrekt?
- Transaktionsanalyse-Inhalte → mit Briefing-Dokument abgleichen

Der Fakten-Check ist Heinrichs Aufgabe — er kann nicht delegiert werden.

---

## n8n-Integration (Zukunft)

Sobald der Workflow stabil läuft, kann er in n8n teil-automatisiert werden:

```
Trigger: Neue Frage in PB-Kollektion "1000-fragen" → Status "skript-bereit"
  → n8n ruft Claude API auf → Skript-Entwurf wird generiert
  → Skript wird in PB gespeichert → Status "bereit-für-aufnahme"
  → Heinrich erhält Notification
```
