# MAJER Vereinswebseite — Planungsdokument v1.0
**Erstellt:** 2026-05-07
**Basis:** 30 geklärte Anforderungen (Planning Session)

---

## 1. Zielgruppen & Persona-Switch

| Persona | Akzentfarbe | Ton | Primäre CTA |
|---|---|---|---|
| Schüler (ab 16) | blue-500 | Energetisch, Challenges | "Jetzt mitmachen" |
| Student (18-28) | violet-500 | Professionell-aufstrebend | "Skills entwickeln" |
| Lehrer / Pädagoge | teal-500 | Institutionell, Ressourcen | "Ressourcen entdecken" |
| Förderer / Partner | amber-500 | Impact, ROI, Gemeinnützigkeit | "Partner werden" |

**Schüler vs. Student:** Gleiche Inhalte, gleicher Ton — nur Altersabgrenzung für DSGVO-Logik.

**Persona-Switch-Mechanismus:**
- Erste Website-Besuche: Großer Auswahl-Screen (Modal über Hero)
- Auswahl wird in Cookie gespeichert (httpOnly, SameSite=Strict)
- Folgebesuche starten direkt im gewählten Persona-Modus

---

## 2. Design-Richtung

**Stil:** NGO/Social — hell, warm, viele authentische Fotos, emotional ansprechend.
**NICHT:** Dark Tech-Look (slate-950 bleibt für Nova-App, nicht für Verein-Website).

```
Vereins-Website Farbsystem:
Background:   white / gray-50
Cards:        white mit soft shadow
Headlines:    gray-900
Body:         gray-600
Persona-Akzente: (siehe Tabelle oben)
CTA-Primär:   blue-600 (Vereins-Hauptfarbe)
```

**Mobile-First:** Sch ler + Studenten = >80% Mobile.

---

## 3. Seiten-Architektur (Public)

```
/                    Landing Page mit Persona-Modal + Hero + Impact-Zahlen
/ueber-uns           Vereinsvorstellung, Team, Geschichte
/workshops           Alle Workshops (Liste + Filter)
/workshops/[slug]    Einzelner Workshop + Buchungsformular
/lernpfade           Strukturierte Lernpfade (öffentliche Übersicht)
/foerdern            Partnerschaftspaket PDF-Download + Kontaktformular
/impact              Wirkungsnachweis: Mitglieder, Workshops, Zertifikate (Live-Zahlen)
/mitglied-werden     Aufnahmeantrag-Formular
/impressum           Pflicht nach TMG
/datenschutz         DSGVO-Datenschutzerklärung
```

---

## 4. Seiten-Architektur (Member Portal — /portal/*)

```
/portal/login        E-Mail + Passwort + Google OAuth
/portal/dashboard    Übersicht: Lernpfad, nächster Workshop, Fortschritt
/portal/lernpfad     Modulübersicht mit Fortschritts-Tracker
/portal/projekte     Eigene Projekte hochladen, Feedback einsehen
/portal/pruefungen   Quiz-Tests + Projekt-Einreichungen
/portal/zertifikate  Ausgestellte Zertifikate + Download-Link
/portal/workshops    Gebuchte Workshops, Kalender, Warteliste
/portal/einstellungen  Profil, Konto-Löschung (Art. 17 DSGVO)
/verify/[uuid]       Öffentliche Zertifikat-Verifizierungsseite (kein Login)
```

---

## 5. Mitgliedschaftsprozess

```
Besucher füllt /mitglied-werden aus
  → PB-Collection "mitgliedsantraege" Eintrag (Status: "ausstehend")
  → n8n-Workflow: E-Mail-Bestätigung an Bewerber
  → n8n-Workflow: Benachrichtigung an Vorstand (admin@...)

Vorstand prüft in PB-Admin
  → Status → "genehmigt": n8n sendet Willkommens-E-Mail + Portal-Aktivierung
  → Status → "abgelehnt": n8n sendet höfliche Ablehnung

Sonderfall 16-17 Jahre:
  → Pflichtfeld "Geburtsdatum" → Alterscheck clientseitig + serverseitig
  → Bei Alter < 18: Hinweis "Einwilligung Erziehungsberechtigter erforderlich"
  → Offline-Prozess: unterschriebenes Formular per Post/Scan
  → PB-Feld "elterneinwilligung_erhalten: boolean" — Konto erst nach true aktivierbar
```

---

## 6. Prüfungs- & Zertifizierungssystem

**Format:** Zweigleisig
1. **Quiz (Multiple Choice):** Automatisch auswertbar, Bestehensgrenze konfigurierbar
2. **Projekt-Einreichung:** Upload + manuelles Review durch Betreuer

**Zertifikat-Flow:**
```
Quiz bestanden + Projekt genehmigt
  → PB generiert Zertifikat-Eintrag mit UUID
  → UUID ist öffentlich abrufbar unter /verify/[uuid]
  → Mitglied kann PDF herunterladen
  → Arbeitgeber/Hochschule kann UUID auf /verify prüfen
```

---

## 7. Workshop-Buchungssystem

```
/workshops/[slug] zeigt Buchungsformular
  → Felder: Name, E-Mail, (für Mitglieder: auto-ausgefüllt), Nachricht (optional)
  → Submit → PB "workshop_buchungen" Collection
  → n8n: E-Mail-Bestätigung mit iCal-Anhang
  → Kapazitätsprüfung: PB-Feld "max_teilnehmer" + COUNT der Buchungen
  → Bei Vollbelegung: Wartelisten-Formular statt Buchungsformular
```

**Workshop-Typen im System:**
- Strukturierte Lernpfade (Modul-Reihenfolge erzwungen)
- Präsenz-Workshops mit Online-Materialien
- Freie Einzelworkshops (buchbar ohne Lernpfad-Kontext)

---

## 8. Authentifizierung

```
Provider: Pocketbase Auth
  - E-Mail + Passwort (primär)
  - Google OAuth (sekundär — bequem für Schüler/Studenten)

Session: httpOnly Cookie (PB standard)
Kein localStorage für Auth-Tokens.

Google OAuth Setup:
  → Google Cloud Console: OAuth2 Client für nova-tive.com
  → PB Settings: Google Provider aktivieren
  → Callback: https://nova-tive.com/api/auth/callback/google
```

---

## 9. E-Mail-Architektur (n8n-basiert)

| Trigger | n8n-Workflow | SMTP |
|---|---|---|
| Mitgliedsantrag eingegangen | Vorstand-Benachrichtigung | Resend/Brevo |
| Antrag genehmigt | Willkommens-E-Mail + Portal-Link | Resend/Brevo |
| Workshop gebucht | Bestätigung + iCal | Resend/Brevo |
| Prüfung bestanden | Zertifikat-Benachrichtigung | Resend/Brevo |
| Account-Löschung beantragt | Bestätigung + Prozess-Info | Resend/Brevo |

**PB für:** Auth-Mails (Registrierung, Passwort-Reset) — PB-interner SMTP.
**n8n für:** Alle Business-Flows.

---

## 10. Content-Verwaltung

Alles über Pocketbase Admin-Interface:
- Workshops erstellen/bearbeiten (Titel, Beschreibung, Datum, Kapazität, Ort)
- Lernpfade strukturieren (Module, Reihenfolge, Zugangsvoraussetzungen)
- Mitglieder-Anträge bearbeiten
- Zertifikate manuell ausstellen (falls automatischer Flow fehlschlägt)

**Keine separates CMS.** PB = Single Source of Truth.

---

## 11. DSGVO & Compliance

**Pflicht vor Livegang:**
- [ ] Impressum nach §5 TMG (Name, Adresse, E-Mail, Vereinsregister wenn eingetragen)
- [ ] Datenschutzerklärung (DSGVO Art. 13/14: alle Datenflüsse dokumentiert)
- [ ] AVV mit Hostinger unterzeichnen (Online-Formular im Hostinger Panel)
- [ ] Löschanfragen-Prozess: /portal/einstellungen → "Konto löschen"-Button → n8n-Flow → PB anonymisiert Daten

**Kein Cookie-Banner nötig:** Nur essentielle Cookies (Session, Persona-Präferenz).
Plausible Analytics ist cookiefrei.

**Datenkategorien gespeichert:**
- Stammdaten: Name, E-Mail, Adresse
- Alter/Geburtsdatum (für Minderj.-Check)
- Lernfortschritt + Zertifikate
- KEIN Payment (kostenlose Mitgliedschaft)

**Wichtig:** Verein ist zum Planungszeitpunkt noch nicht im Vereinsregister eingetragen.
- Impressum-Feld "Vereinsregisternummer" bleibt leer bis Eintragung abgeschlossen
- Bis Eintragung: Vereinfachtes Impressum mit Verantwortlichem (Heinrich Majer)
- Gemeinnützigkeits-Status folgt nach FA-Bescheid — hat Einfluss auf Spendenbescheinigungen

---

## 12. Analytics

**Tool:** Plausible Analytics (selbst gehostet auf VPS oder Plausible Cloud)
- Cookiefrei → kein Cookie-Banner
- DSGVO-konform (keine personenbezogenen Daten)
- Messung: Besucher, Seiten, Persona-Switch-Verteilung, Workshop-Klicks

---

## 13. Deployment-Stack

```
VPS (Hostinger)
├── Traefik v3.3 (Reverse Proxy + SSL via Cloudflare DNS)
├── apps/verein (Next.js → Docker-Image → Port 3001 intern)
├── apps/nova   (Next.js → Docker-Image → Port 3002 intern)
├── Pocketbase  (Port 8090, NUR intern, kein Traefik-Label)
├── n8n         (Port 5678, hinter Cloudflare Access)
├── Portainer   (Port 9000, hinter Cloudflare Access)
├── Plausible   (eigener Service wenn self-hosted)
└── Uptime Kuma (Port 3201 — migriert von 3001!)
```

**Build & Deploy:**
- Docker + docker-compose (konsistent mit restlicher Infra)
- GitHub Actions → SSH → `docker compose pull && docker compose up -d` (Phase 2)
- MVP-Phase: manuell via SSH

**Testing:** TypeScript strict + ESLint. Kein Overhead für MVP.

---

## 14. Impact-Seite (/impact)

Live-Zahlen aus PB (COUNT-Queries, gecacht):
- Anzahl aktiver Mitglieder
- Durchgeführte Workshops
- Ausgestellte Zertifikate
- Erreichte Schulen / Kooperationen

Ziel: F rderer-ready. Seite muss ohne Login erreichbar, SEO-optimiert, verlinkbar sein.

---

## 15. MVP-Scope (Herbst/Winter 2026)

**Muss live sein vor erstem Workshop:**

| Feature | Priorität | Aufwand |
|---|---|---|
| Landingpage + Persona-Switch | P0 | 2-3 Tage |
| Impressum + Datenschutz | P0 | 4h |
| AVV mit Hostinger | P0 | 1h (Admin-Panel) |
| Mitglieds-Antragsformular | P0 | 1 Tag |
| Workshop-Liste + Buchungsformular | P0 | 2 Tage |
| n8n E-Mail-Flows (Bestätigung) | P0 | 1 Tag |
| Member Dashboard (Login + Lernpfad) | P1 | 3-4 Tage |
| Prüfungssystem (Quiz) | P1 | 2-3 Tage |
| Zertifikat-System + /verify | P1 | 2 Tage |
| Impact-Seite /impact | P1 | 1 Tag |
| Google OAuth | P2 | 4h |
| Projekt-Einreichung + Review | P2 | 2-3 Tage |
| Plausible Analytics | P2 | 2h |

**Realistischer Zeitplan:** P0 + P1 Features in ~4 Monaten machbar mit Claude+Codex-Workflow.

---

## 16. Pocketbase Collections (Grobplanung)

```
users              (PB auth collection)
mitgliedsantraege  status, kontakt, geburtsdatum, elterneinwilligung_erhalten
lernpfade          titel, beschreibung, module (JSON), voraussetzungen
module             lernpfad_id, titel, reihenfolge, inhalte (JSON)
workshops          titel, datum, ort, max_teilnehmer, lernpfad_id (optional)
workshop_buchungen workshop_id, user_id, status, created
pruefungen         modul_id, typ (quiz|projekt), fragen (JSON)
pruefungseinreichungen  pruefung_id, user_id, antworten (JSON), status, betreuer_feedback
zertifikate        user_id, pruefung_id, uuid, ausgestellt_am, public_url
```

---

## 17. Codex-Workflow-Split

| Phase | Wer | Was |
|---|---|---|
| Architektur + Spec | Claude Code | AGENTS.md-Specs, DB-Schema, API-Interface-Definitionen |
| Implementation | Codex | Komponenten, API-Routes, PB-Queries nach Spec |
| Code Review | Claude Code | Security-Check, DSGVO-Check, Typsicherheit |
| Deploy | Manuell / GitHub Actions | SSH + docker compose |

**AGENTS.md** im Monorepo-Root: Codex-spezifische Anweisungen (Tech-Stack, Verbote, Naming).

---

## 18. Offene Risiken

| Risiko | Mitigation |
|---|---|
| Vereinsregistrierung noch ausstehend | Impressum ohne Reg-Nr. bis Eintragung; kein Live-Launch ohne gültiges Impressum |
| FA-Bescheid für Gemeinnützigkeit fehlt | Spendenquittungen erst nach Bescheid möglich; Förderanträge ggf. früher möglich |
| Google OAuth Setup-Aufwand | Google Cloud Console + PB-Konfiguration ~4h; erst nach MVP-Core angehen |
| Plausible self-hosted vs. Cloud | Self-hosted spart Kosten, aber zusätzlicher Service auf VPS; Cloud empfohlen für MVP |
| VPS Uptime Kuma Port-Konflikt | Uptime Kuma MUSS auf 3201 migriert werden bevor Verein-App deployt wird |
