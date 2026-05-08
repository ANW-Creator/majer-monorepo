# DSGVO-Checkliste: MAJER e.V. (i.G.)
**Stand:** Mai 2026 | Quellen: DSGVO, BDSG, TMG §5, MStV §18, TTDSG §25
**Status:** Aufgaben nach Dringlichkeit priorisiert

---

## Sofort erledigen (vor Website-Launch)

### 1. Google Fonts self-hosten — KRITISCH
**Warum jetzt:** LG München I (2022) — Google Fonts via CDN = DSGVO-Verstoß (IP-Übermittlung an Google ohne Einwilligung).
**Lösung:** In Next.js trivial: `next/font` lädt Fonts lokal. Kein CDN-Call, kein Problem.
```tsx
// app/layout.tsx
import { Crimson_Pro, DM_Sans } from 'next/font/google'
// next/font downloaded bei Build-Zeit → keine Runtime-Anfragen an Google
```
**Aufwand:** 15 Minuten. Claude macht das bei Website-Implementierung automatisch.

### 2. Impressum (§5 TMG + §18 MStV)
**Pflichtangaben für MAJER i.G.:**
```
MAJER Digitale Bildung & Medienkompetenz e.V. i.G.
Vertreten durch: Heinrich Majer (Vorstand nach §26 BGB)
[Straße, PLZ, Ort — eine ladungsfähige Anschrift, kein Postfach allein]
E-Mail: vorstand@digitale-bildung-berlin.de
[Telefon: optional, aber empfohlen]

Hinweis: Verein befindet sich in Gründung (i.G.), 
Eintragung in das Vereinsregister beantragt beim Amtsgericht [Ort], [Datum].
Noch keine Registernummer vorhanden.

Verantwortlich für Inhalte nach §18 Abs. 2 MStV:
Heinrich Majer, [Anschrift wie oben]
```
**Nach Vereinsregistereintrag:** Registergericht + VR-Nummer ergänzen.

### 3. Datenschutzerklärung
**Generator:** datenschutz-generator.de (Dr. Schwenke) — kostenlos, juristisch gepflegt.
**Dann manuell ergänzen für:**
- Pocketbase (selbst-gehostet auf Hostinger — kein Dritter, aber Hostinger als Verarbeiter)
- n8n (selbst-gehostet — kein Dritter)
- Plausible Analytics (s. Abschnitt 4)
- Kontakt- und Mitgliedsantragsformulare

### 4. AVV mit Hostinger abschließen
**Wo:** Hostinger Kundenportal → Einstellungen → Data Processing Agreement
**Warum:** Hostinger speichert eure Pocketbase-Daten auf deren Hardware = Auftragsverarbeitung.
**Kosten:** 0€ — im Vertrag inkludiert.
**Aufwand:** 10 Minuten im Portal.

### 5. AVV mit Plausible (falls Cloud)
**Wo:** plausible.io/dpa
**Kosten:** 0€
**Alternative:** Plausible self-hosten auf eigenem Hostinger-VPS → kein AVV nötig.

### 6. AVV mit Cloudflare (für DNS)
**Wo:** Cloudflare Dashboard → Account → Configurations → Data Processing
**Kosten:** 0€, auch im Free-Tier verfügbar.

---

## Bald erledigen (vor ersten Mitgliedern)

### 7. Verarbeitungsverzeichnis anlegen (Art. 30 DSGVO)
**Pflicht:** Ja, auch für kleine Vereine wenn regelmäßige Verarbeitung (Mitgliederdaten).
**Vorlage:** LfDI Baden-Württemberg (kostenlos, Excel) oder BayLDA
**Einträge die MAJER braucht:**
- Mitgliederverwaltung (Pocketbase: Name, Email, Geburtsdatum, Status)
- Kommunikation (Proton Mail: Anfragen, Bestätigungen)
- Website-Statistik (Plausible)
- Workshop-Dokumentation (Teilnehmerlisten, Feedback-Bögen)
- Video/Foto-Aufnahmen (Einwilligung zwingend!)
**Aufwand:** 2–3 Stunden. Claude erstellt die Vorlage.

### 8. Proton Mail DPA (optional, empfohlen)
**Wo:** proton.me/legal/dpa
**Kosten:** 0€

---

## Cookie-Banner: Braucht MAJER einen?

**Antwort: Nein — wenn Plausible genutzt wird.**

| Technologie | Cookie-Banner nötig? |
|---|---|
| Plausible Analytics | **Nein** — kein Cookie, kein persistenter Identifier |
| Google Analytics | Ja — Einwilligung Pflicht |
| YouTube-Einbettungen (Standard) | Ja — setzt Cookies |
| YouTube-Einbettungen (youtube-nocookie.com) | Reduziert, aber Datenschutzerklärung nötig |
| Google Fonts via CDN | Problem (s. Punkt 1) |

**Was Plausible in Datenschutzerklärung braucht:**
```
Reichweitenmessung
Wir nutzen Plausible Analytics, ein datenschutzfreundliches Analysetool,
das keine Cookies setzt und keine personenbezogenen Daten speichert.
Es werden keine Querverweise zwischen Websitebesuchen erstellt.
Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
Anbieter: Plausible Insights OÜ, Mustamäe tee 3a, 10615 Tallinn, Estland.
DPA: plausible.io/dpa
```

---

## Was geht JETZT (i.G.) — was erst nach Anerkennung?

| Aktion | Jetzt (i.G.) | Nach VR-Eintrag | Nach Gemeinnützigkeit |
|---|---|---|---|
| Website + Impressum | ✅ | ✅ | ✅ |
| Mitglieder aufnehmen | ✅ | ✅ | ✅ |
| Beiträge einziehen | ✅ | ✅ | ✅ |
| Bankkonten | Eingeschränkt | ✅ | ✅ |
| Fördermittel beantragen | ❌ meistens | ✅ bedingt | ✅ voll |
| Spendenquittungen | ❌ | ❌ | ✅ |
| Ehrenamtspauschale auszahlen | ❌ | ❌ | ✅ |
| AVV abschließen | ✅ | ✅ | ✅ |
| Betterplace / Startnext (gemeinnützig) | ❌ | ❌ | ✅ |

---

## Datenschutzbeauftragter: Pflicht?

**Jetzt: Nein.** Pflicht ab 20 Personen die ständig personenbezogene Daten verarbeiten (§38 BDSG).
**Empfehlung:** Intern eine verantwortliche Person benennen (ohne Titel). Wenn Minderjährige in Workshops teilnehmen: klare interne Zuständigkeit für Datenschutzfragen.

---

## Aufsichtsbehörde für MAJER

Da Vereinssitz Marlow (Mecklenburg-Vorpommern), Tätigkeitsschwerpunkt Berlin:
- **LfDI Mecklenburg-Vorpommern** (Vereinssitz) — kostenlose Erstberatung per Email
- **BlnBDI Berlin** (Tätigkeitsort) — kostenlose Erstberatung per Email
Beide in Datenschutzerklärung als Beschwerdemöglichkeit nennen.

---

## Kostenlose Vorlagen-Quellen

| Quelle | Was | URL |
|---|---|---|
| Dr. Schwenke | Datenschutzerklärung-Generator | datenschutz-generator.de |
| LfDI BW | Verarbeitungsverzeichnis-Vorlage (Excel) + AVV-Muster | baden-wuerttemberg.datenschutz.de |
| BayLDA | Vereins-spezifische Muster | lda.bayern.de |
| BlnBDI | Berliner Orientierungshilfen | datenschutz-berlin.de |
| DSK | Kurzpapiere zu Art. 13/14 DSGVO | datenschutzkonferenz-online.de |
