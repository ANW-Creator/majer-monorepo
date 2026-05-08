# MAJER Brand Identity
**Version:** 1.0
**Entschieden:** 2026-05-07
**Richtung:** Papier / Intellektuell (bestätigt)

---

## 1. Leitprinzip

MAJER ist ein Berliner Bildungsverein, der junge Menschen zu mündigen Akteuren in der digitalen Welt macht. Die Brand soll das verkörpern: **ernst gemeint, zugänglich, tiefgründig** — nicht hip, nicht korporat, nicht akademisch abweisend.

Referenz-Ästhetik: ein handgeschriebener Brief auf gutem Papier. Oder: eine berliner Bildungseinrichtung die man respektiert, weil sie weiß was sie tut.

---

## 2. Farbsystem

### Primäre Farben

| Rolle | Hex | Beschreibung | Verwendung |
|---|---|---|---|
| Akzent | `#1a3d4d` | Blau-Grün, dunkel, tiefgründig | Links, Hervorhebungen, Bordüren |
| Papier | `#fdfcf8` | Warmes Off-White, kein reines Weiß | Hintergründe |
| Tinte | `#1a1a1a` | Fast-Schwarz | Fließtext |
| Tinte Mittel | `#2c2c2c` | Etwas heller | Sekundärtext |
| Tinte Soft | `#6b6b6b` | Grau | Beschriftungen, Metadaten |
| Trennlinie | `#d4d0c8` | Warmes Hellgrau | Horizontale Rules, Bordüren |

### Hintergrund-Variante (Screens)

| Rolle | Hex | Beschreibung |
|---|---|---|
| Screen-Background | `#e8e6e0` | Warmer Hellgrau-Ton um die Seite herum |

### Persona-Akzente (nur im Mitglieder-Portal, apps/verein)

| Persona | Tailwind | Hex-Referenz | Beschreibung |
|---|---|---|---|
| Schüler | `blue-500` | `#3b82f6` | Energie, Entdeckung |
| Student | `violet-500` | `#8b5cf6` | Tiefe, Profil |
| Lehrer | `teal-500` | `#14b8a6` | Klarheit, Institution |
| Förderer | `amber-500` | `#f59e0b` | Wärme, Impact |

**Wichtig:** Persona-Farben erscheinen nur in Persona-spezifischen UI-Elementen im Portal. Nie im öffentlichen Marketing-Content (dort nur Primäre Farben).

### Was NICHT die Brand-Farbe ist

- `#c9a84c` Gold (index.html-Richtung) — nicht weiterverfolgt
- `#0d0e0f` Fast-Schwarz als Hintergrund — zu Dark-Mode, widerspricht dem Papier-Gefühl
- Kräftige Primärfarben (Rot, Gelbgrün) — zu unruhig

---

## 3. Typografie

### Schriften

| Rolle | Familie | Gewichte | Verwendung |
|---|---|---|---|
| **Display** | Crimson Pro | 300, 400, 500, 600 | Überschriften, Titel, Zitate, Hervorhebungen |
| **Body / Interface** | DM Sans | 300, 400, 500 | Fließtext, UI-Elemente, Captions |

**Google Fonts Embedding:**
```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### Typografische Regeln

- **Titel:** Crimson Pro 500, `letter-spacing: -0.3px` bis `-0.6px`, `line-height: 1.1–1.2`
- **Leitspruch/Zitat:** Crimson Pro 400 italic
- **Fließtext:** DM Sans 300 oder 400, `font-size: 12.5–14px`, `line-height: 1.65–1.75`
- **Labels/Eyebrows:** DM Sans 500, `font-size: 9–11px`, `letter-spacing: 0.12–0.22em`, `text-transform: uppercase`, Farbe `#1a3d4d`
- **Kein** Bold/900 Weight in öffentlichen Docs — stattdessen 500 (medium) für Betonung

---

## 4. Logo-Konzept (Richtlinien)

**Stand:** Kein fertiges Logo vorhanden. Diese Richtlinien definieren was ein Logo für MAJER leisten muss.

### Anforderungen

1. **Wortmarke zuerst:** "MAJER" als Hauptelement — keine Icon-abhängige Mark
2. **Lesbar in kleiner Darstellung:** Muss als 32px-Text in einem Briefkopf funktionieren
3. **Schwarz-Weiß-tauglich:** Für Dokumente, Stempel, Fax (ja, Behörden)
4. **Keine Clichés:** Kein Glühbirnen-Icon, kein Zahnrad, kein Pixel-Grid
5. **Typografisch:** Crimson Pro als Basis ist die naheliegendste Option

### Vorschlag (zum Diskutieren)

```
MAJER
Digitale Bildung & Medienkompetenz
──────────────────────────────────
Berlin
```
Crimson Pro 500 (MAJER) + DM Sans 300 (Untertitel) + horizontale Linie als visuelles Element.

### Logo-Varianten die entstehen müssen

| Variante | Format | Verwendung |
|---|---|---|
| Vollform | SVG/PNG | Website-Header, Briefkopf |
| Kurzform | SVG/PNG | "MAJER" allein, Icon-Slot |
| Stempel-Version | SVG | Dokumente, Zertifikate (→ Abschnitt 5) |
| Dunkel auf Hell | SVG/PNG | Standard |
| Hell auf Dunkel | SVG/PNG | Video-Outro, Präsentationen |

---

## 5. Stempel (Vereinssiegel + Video-Watermark)

**Verwendung:** Zwei verschiedene Zwecke, zwei verschiedene Formate.

### 5a. Vereinssiegel (Dokumente)

Für offizielle Vereinsdokumente: Mitgliedsausweise, Zertifikate, Bescheinigungen, Förderanträge.

```
┌─────────────────────────┐
│  ○  MAJER e.V.  ○       │
│  Digitale Bildung &     │
│  Medienkompetenz        │
│  ─────────────────      │
│  Berlin · Gegr. 2026   │
└─────────────────────────┘
```

- Kreisförmig oder rechteckig mit Doppelrandlinie
- Schwarz-Weiß (für Stempel + Scan-tauglich)
- SVG-Format für digitale Einbettung
- Enthält: Vereinsname, Zweck (kurz), Berlin, Gründungsjahr

### 5b. Video-Watermark / Brand-Outro

Für YouTube, TikTok, alle Video-Plattformen.

- **Intro-Slate (0.5–1 Sek):** "MAJER" auf Papier-Hintergrund, Crimson Pro
- **Outro (5–10 Sek):** MAJER-Name + @handle + website + "Folg mir"
- **Watermark (permanent):** Kleines "MAJER" in Ecke rechts unten, halbtransparent (`opacity: 0.4`)

**Dateiformate:** PNG (transparent), nach Erstellen als Template in CapCut ablegen

---

## 6. Email-Struktur

**Primär-Domain:** `digitale-bildung-berlin.de` (aktuell in Verwendung laut Onepager)
**Zukunftsdomain:** `digitale-bildung.de` (noch nicht registriert — Kaufplan → session_state.md)

### Email-Adressen (Empfehlung)

| Adresse | Zweck | Priorität |
|---|---|---|
| `vorstand@digitale-bildung-berlin.de` | Heinrichs persönliche Vereins-Adresse | Vorhanden, Prio 1 |
| `info@digitale-bildung-berlin.de` | Allgemeine Anfragen, Webformular | Prio 2 |
| `workshops@digitale-bildung-berlin.de` | Workshop-Buchungen und -Anfragen | Prio 2 |
| `presse@digitale-bildung-berlin.de` | Medienanfragen | Prio 3 |
| `foerderung@digitale-bildung-berlin.de` | Stiftungsanfragen, Förderkontakte | Prio 3 |

**Email-Provider-Strategie:** Sobald Domain gesichert → Proton Mail for Business (~4€/Monat/Adresse) oder selbst-gehostet via n8n + SMTP (bereits geplant in Infra).

---

## 7. Dokument-Standards (Artefakte)

Alle offiziellen MAJER-Dokumente (Onepager, Briefings, Anträge) folgen diesen Standards — wie bereits in den 4 HTML-Artefakten umgesetzt:

- **Schriftgröße Fließtext:** 12–12.5px (Print) / 14–16px (Screen)
- **Zeilenabstand:** 1.65–1.75
- **Seitenbreite:** 720px max (Screen) / 210mm (Print/A4)
- **Innere Abstände:** `padding: 26mm 28mm 22mm` (Print)
- **Header:** Organisation links, Datum/Dokument-Label rechts, getrennt durch `0.5px solid #d4d0c8`
- **Footer:** Kontakt links, rechtliche Angaben rechts italic
- **Keine Farb-Flächen** außer dem Akzent-Bordürchen links bei Zitaten/Observationen

---

## 8. Ton der Marke (Voice & Tone)

**Voice (konstant):**
- Direkt, ohne Floskeln
- Bildungsorientiert ohne akademisch abweisend zu sein
- Berliner Nüchternheit — sagt was es meint
- Erste Person Plural ("Wir bei MAJER") in Vereinskommunikation
- Erste Person Singular ("Ich") in Video-Content (Heinrichs persönliche Stimme)

**Tone (variiert je nach Kontext):**
| Kontext | Ton |
|---|---|
| Stiftungsantrag / Briefing | Präzise, sachlich, belegend |
| Video / Social Media | Direkt, persönlich, kein Lehrerton |
| Portal / Lernpfad | Ermutigend, schrittweise |
| Presse | Knapp, belegt, no-nonsense |

**Was MAJER nie klingt:**
- Startup-Slang ("disruptive", "next level", "game changer")
- NGO-Pathos ("Gemeinsam schaffen wir eine bessere Welt für alle Kinder")
- Akademisch-distanziert ("Wie empirische Befunde zeigen...")
