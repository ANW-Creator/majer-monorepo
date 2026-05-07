# Video 06 — Claude Design 2 HOUR COURSE (Beginner to Pro)
**Source:** https://youtu.be/ovabeVoWrA0
**Creator:** Nate Herk
**Relevanz für MAJER:** Sehr hoch — direkt für Vereinswebseite (Persona-Design)

---

## Kernaussage
Claude kann nicht nur Code schreiben — es kann **professionelle UI/UX-Designs** erstellen wenn man ihm die richtigen Design-Tokens, Komponenten-Strukturen und Kontext gibt. Der Unterschied zwischen "mittelmäßigem Vibecoding" und "professionellem Output" liegt in 3 Faktoren: Design System, Component Library, und klare visuelle Hierarchie.

---

## Das MAJER-Designproblem lösen: Persona-basiertes Design
Das Konzept im Video ist direkt anwendbar auf die 4 Zielgruppen:

### Persona-Switch Mechanismus
```
Schüler (16-22) → Energetisch, Challenges, Gamification-Sprache
Student (18-28) → Professionell-aufstrebend, Portfolio-Focus
Lehrer/Pädagoge → Vertrauenswürdig, Kompetenz-Signal, Ressourcen
Förderer/Partner → Business-Impact, ROI, Gemeinnützigkeit-Nachweis
```

### Technische Umsetzung in Next.js
```tsx
// Theme-Provider mit Persona-Context
type Persona = 'schueler' | 'student' | 'lehrer' | 'foerderer'

const PersonaContext = createContext<Persona>('schueler')

// Tailwind CSS Klassen per Persona
const personaTheme = {
  schueler: { accent: 'blue-500', heading: 'Entdecke dein Potenzial', cta: 'Jetzt starten' },
  student:  { accent: 'violet-500', heading: 'Baue dein Portfolio', cta: 'Skills entwickeln' },
  lehrer:   { accent: 'teal-500', heading: 'Stärke deine Schüler', cta: 'Ressourcen entdecken' },
  foerderer: { accent: 'amber-500', heading: 'Investiere in Bildung', cta: 'Partner werden' },
}
```

---

## Design-Prinzipien aus dem Kurs
1. **Visual Hierarchy first**: Große Überschrift → Subheadline → CTA → Details
2. **White Space ist keine Schwäche** — viel Luft signalisiert Professionalität
3. **3-Farben-Regel**: 1 Primär-Akzentfarbe + 2 Grautöne + Weiß/Dunkel
4. **Mobile-First immer**: 80%+ der Zielgruppe (Schüler/Studenten) auf Mobile

---

## Konkrete Design-Techniken für Claude

### Screenshot → Code
```
Input: Screenshot von Referenz-Website
Prompt: "Baue diese Layout-Struktur in Next.js mit Tailwind v4 nach.
         Nutze die MAJER-Farbpalette: Blau 500 als Primär, Slate 950 als Hintergrund."
```

### Component-by-Component
Nicht "baue die ganze Webseite" sondern:
1. Hero-Section
2. Feature-Cards
3. Team-Sektion
4. Testimonials / Impact-Zahlen
5. CTA-Footer

---

## MAJER Design System (aus CLAUDE.md übernehmen)
```
Background:  bg-slate-950 (App), bg-slate-900 (Cards), bg-slate-800 (Hover)
Verein:      blue-500/600 (Primär-Akzent)
Nova:        emerald-400/500 (Sekundär)
Text:        white (Headlines), slate-300 (Body), slate-500 (Muted)
Border:      slate-700/800

Persona-Akzente (neu):
Schüler:     blue-500 + energetische Sprache
Student:     violet-500 + professionelle Sprache
Lehrer:      teal-500 + institutionelle Sprache
Förderer:    amber-500 + impact-orientierte Sprache
```

---

## Zu erstellen
1. `apps/verein/lib/personas.ts` — Persona-Definitionen + Wording
2. `apps/verein/components/PersonaProvider.tsx` — Context Provider
3. `apps/verein/components/HeroSection.tsx` — Persona-Switch Hero
4. Design-Token-Datei für alle 4 Personas
