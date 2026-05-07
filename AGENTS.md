# AGENTS.md — Codex-Instruktionen für majer-monorepo
<!-- Dieser File gilt für alle Codex-Agenten die in diesem Repo arbeiten -->
<!-- Für Claude Code: CLAUDE.md im gleichen Verzeichnis -->

## Wer du bist
Du implementierst Features für den gemeinnützigen Verein MAJER Digitale Bildung & Medienkompetenzen e.V.
Deine Rolle: Implementierung nach Spec. Claude Code hat die Architektur entworfen — du baust es.

## Stack (verbindlich)
- **Next.js 15** (App Router, nie Pages Router)
- **TypeScript strict** — kein `any`, kein `@ts-ignore`
- **Tailwind CSS v4** — utility-first, kein custom CSS außer für Animationen
- **Pocketbase 0.22.x** — Backend, Auth, Datenbank
- **pnpm** — kein npm, kein yarn

## Naming Convention (§8-Regel)
Erscheint der Begriff im deutschen Vereins-/Rechtsrecht (BGB, VereinsG, DSGVO, AO)?
→ **Deutsch** (z.B. `mitgliedsantrag`, `vereinssatzung`, `lernpfad`)
Sonst → **Englisch** (z.B. `apiHandler`, `useAuth`, `ButtonProps`)

Kanonische Beispiele:
- `mitgliedsantrag.ts` (Deutsch — BGB-Begriff)
- `lernpfad.ts` (Deutsch — vereinsspezifisch)
- `apiHandler.ts` (Englisch — Tech-Begriff)
- `useWorkshopBooking.ts` (Englisch — Tech-Begriff)

## Absolute Verbote
- `localStorage` für Auth-Tokens → httpOnly Cookie (PB Standard)
- PB-Admin extern exposen → 127.0.0.1:8090, KEIN Traefik-Label
- `.env`-Werte hardcoden → immer aus `process.env`
- `console.log` in Produktions-Code
- Inline-Styles statt Tailwind-Klassen

## Datei-Struktur (Apps)
```
apps/verein/
├── app/                    Next.js App Router pages
│   ├── (public)/           Öffentliche Seiten (kein Auth)
│   ├── portal/             Auth-protected Seiten
│   └── api/                API Routes
├── components/             Wiederverwendbare Komponenten
├── lib/
│   ├── pocketbase.ts       PB-Client (singleton)
│   ├── auth.ts             Auth-Utilities
│   └── personas.ts         Persona-Definitionen
└── types/                  TypeScript-Typen
```

## Persona-System
```typescript
type Persona = 'schueler' | 'student' | 'lehrer' | 'foerderer'
// Akzentfarben: blue-500, violet-500, teal-500, amber-500
// Persistenz: Cookie 'persona' (httpOnly: false — clientseitig lesbar)
```

## Pocketbase Collections (verwende diese Namen exakt)
- `users` — PB Auth Collection
- `mitgliedsantraege` — Vereinsanträge
- `lernpfade` — Lernpfad-Definitionen
- `module` — Lernpfad-Module
- `workshops` — Workshop-Events
- `workshop_buchungen` — Buchungen
- `pruefungen` — Prüfungs-Definitionen
- `pruefungseinreichungen` — Teilnehmer-Einreichungen
- `zertifikate` — Ausgestellte Zertifikate (mit UUID)

## Sicherheit (immer beachten)
- Alle PB-Queries: Rule-basierter Zugriff (nie `@request.auth.id = ""` als Allow-All)
- Server-Side Auth-Check in jedem `/portal/*`-Layout
- CSRF-Schutz: SameSite=Strict Cookies
- Input-Sanitization bei allen Formular-Submits

## Wenn du dir unsicher bist
Schreibe einen Kommentar `// TODO: [Frage] — Claude Code Review needed` und fahre fort.
Unterbreche den Implementierungsfluss nicht für Architektur-Entscheidungen.
