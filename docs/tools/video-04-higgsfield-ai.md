# Video 04 — Higgsfield AI + Claude as Creative Agency

**Video-ID:** xn6Z5PYyAIE
**URL:** https://youtu.be/xn6Z5PYyAIE
**Sprache:** en
**Kanal:** Nate Herk

---

## Kernthese

Higgsfield bietet Zugriff auf alle führenden KI-Bild- und Videogenerierungsmodelle. Claude übernimmt die Schnittstelle: Prompting, Planung, Iteration, Datenbank-Tracking und Automatisierung — alles via Conversation statt manueller GUI-Arbeit. Das Ergebnis: Eine skalierbare Content-Fabrik, die im Schlaf läuft.

---

## Higgsfield — Was es ist

- Plattform mit allen Top-Modellen für Bild- und Videogenerierung
- Besondere Funktion: **Marketing Studio** mit vortrainierten Stilen (Hypermotion, UGC, Unboxing, etc.)
- Zwei Integrationswege:
  - **MCP (für Claude Web):** Über Settings → Connectors → Custom Connector einbinden
  - **CLI (für Claude Code / Agenten):** Effizienter, günstiger (weniger Tokens), besser für automatisierte Workflows

---

## Einrichtung (Claude Code)

```bash
# 3 Befehle von Higgsfield-Docs kopieren:
# 1. CLI installieren
# 2. Auth-Flow: higgsfield auth  (öffnet Browser, OAuth)
# 3. Agent Skills installieren
```

Claude bekommt dann die Higgsfield Agent Skills automatisch installiert. Diese werden bei passenden Anfragen automatisch aktiviert.

---

## Workflow: Von der Idee zum Ad

**Schritt 1 — Branding & Strategie**

Claude erstellt auf Basis eines vagen Prompts ("Baue mir eine Kopfhörer-Marke") vollständig:
- Positioning, Zielgruppe, Voice, Visual Identity
- Produktkatalog mit 3 Produkten
- Für jedes Produkt: Produktfoto, Instagram Ad, UGC-Video

**Schritt 2 — Tracking mit Google Sheets (via GWS CLI)**

Claude kann alle 45+ Higgsfield-Generierungen lesen und in ein Sheet überführen:
- Spalten: Produkt, Stil, Model, Prompt, Job ID, Status, Result URL
- Tabs: By Product, By Style, Planning
- GWS CLI (Google Workspace CLI) als Brücke — effizienter als MCP oder direkte API-Calls

**Schritt 3 — Strategische Ideation**

Claude liest Advertising Masterclass (Forschungsdokument im Projekt) + alle bisherigen Generierungen und plant neue Varianten:
- Verschiedene Headlines, Angles, Avatare, Stile
- Ergebnis: Test-Matrix mit 30-100 neuen Creatives
- Status-Tracking direkt im Sheet (ausstehend → in Bearbeitung → complete)

**Schritt 4 — Automatisierte Produktion**

Claude generiert alle Zeilen mit Status "ausstehend":
- Prompts erstellen
- Higgsfield API aufrufen
- Status auf "complete" setzen + Result URL eintragen

---

## Schlüsselerkenntnis: Skills als Konsistenz-Rezept

Ein **Skill** = Rezept für den Agenten. Ohne Rezept: inkonsistente Outputs. Mit Rezept: jeder Instagram-Ad sieht immer gleich aus.

**Skill erstellen:**
1. Einen Output generieren, der gut ist
2. Seinen Prompt aus Higgsfield kopieren
3. Claude sagen: "Reverse-engineer mir einen Skill aus diesem Prompt" → Claude erstellt `.claude/skills/hypermotion-video/skill.md`

**Beispiel-Skill-Inhalt:**
- Name: Hypermotion Video
- Trigger: Wann wird der Skill aufgerufen
- Hard Rules: Was immer/nie zu tun ist
- Template: Prompt-Struktur mit Platzhaltern

**Wichtig:** Skill braucht einen Neustart / `/hooks` um registriert zu werden.

---

## Advertising Research als Kontext

Claude kann Forschungsdokumente erstellen, die dann dauerhaft im Projekt liegen:

```
"Recherchiere die besten Advertising-Strategien 2026 für organischen Content 
auf TikTok, Meta, X. Was fängt Aufmerksamkeit, was konvertiert, 
wie unterscheidet es sich per Plattform. Erstelle advertising-masterclass.md."
```

Dieses 617-Zeilen-Dokument wird dann bei jeder Generierung mitgelesen → bessere Kopie.

---

## Automatisierung mit Routinen

Routinen = zeitgesteuerte Prompts direkt in Claude Code:

```
Sonntags: 
  - Alle Generierungen + Meta/Instagram-Daten analysieren
  - 50 neue Creatives in Sheet planen

Montags:
  - 30 Zeilen mit leerem Status nehmen
  - Prompts erstellen + in Higgsfield generieren
  - URLs + Job IDs eintragen
```

Eskalation: 50 → 100 → 200 pro Woche. Kopplung mit Meta Ads Manager oder Potara möglich.

---

## Praktische Fallstricke

| Problem | Lösung |
|---|---|
| Referenzbild wird ignoriert | Explizit sagen: "Das Produkt MUSS exakt wie im Referenzbild erscheinen, same color, same text" |
| Content wird als sensitiv geblockt | Prompt zeigen lassen → problematische Wörter identifizieren → Skill mit Blacklist versehen |
| Modell verzerrt Text auf Bildern | Kling/Marketing Studio-Video statt Bild; oder Produkt-Label-Strategie (nur Logo, kein Text-Detail) |
| Skill wird nicht aufgerufen | Neustart Claude Code oder `/hooks` öffnen; Skill-Datei auf Existenz prüfen |

---

## Relevanz für MAJER

- Higgsfield-MCP direkt in Claude.ai Chat nutzbar (kein Code nötig)
- Einstieg: Produktfoto-Generation für Vereins-Events oder Kursangebote
- Potenzial: Automatisierte Social-Media-Content-Fabrik für Schulprojekte, Fördermittelkampagnen
- Skill-Prinzip ist identisch mit MAJER-Skill-Architektur — direkt übertragbar

---

## Verwandte Videos

- Video 17 (Claude Routines) — zeitgesteuerte Automatisierung
- Video 24 (KI Assistent Bild/Video DE) — key.ai + Airtable als Alternative
