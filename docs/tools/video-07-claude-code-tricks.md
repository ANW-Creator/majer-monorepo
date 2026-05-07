# Video 07 — 32 Tricks to Level Up Claude Code in 16 Mins
**Source:** https://youtu.be/jqoFP9QapXI
**Creator:** Nate Herk
**Relevanz für MAJER:** Hoch — sofort umsetzbare Effizienz-Tricks

---

## Kernaussage
Die meisten Claude Code Nutzer nutzen <20% seiner Fähigkeiten. 32 konkrete Tricks, die sofort die Qualität und Geschwindigkeit erhöhen. Kein Tiefgang, nur Quick-Wins.

---

## Top 12 Tricks (direkt für MAJER relevant)

### Trick 1: /init für CLAUDE.md
```bash
/init  # Lässt Claude automatisch CLAUDE.md aus dem bestehenden Code generieren
```
→ Für majer-monorepo: `/init` ausführen sobald erste Apps-Code existiert

### Trick 2: Bild als Input (Screenshot → Code)
```bash
# Screenshot ins Projektfenster ziehen oder in Prompt einfügen
# Claude generiert Code direkt aus dem Screenshot
```
→ Perfekt für Persona-Design: Mockup zeichnen → Claude baut es

### Trick 3: /compact für lange Sessions
```bash
/compact  # Komprimiert den Gesprächsverlauf, behält Kern-Kontext
```
→ Bei langen Coding-Sessions ausführen um Kontext-Overflow zu vermeiden

### Trick 4: Subagenten für parallele Tasks
```
Claude kann eigenständig Subagenten spawnen für parallele Aufgaben
→ Ein Agent baut die Frontend-Komponente, zweiter schreibt den Test
```

### Trick 5: Spezifische Datei-Referenzen
```
Statt: "Ändere die Auth-Logik"
Besser: "In apps/verein/lib/auth.ts Zeile 42: ersetze..."
```
→ Reduziert Fehler massiv, Claude weiß genau was geändert werden soll

### Trick 6: "Don't tell me, show me"
```
Statt: "Erkläre wie Auth funktioniert"
Besser: "Zeig mir die Auth-Flow in einer ASCII-Sequenz"
```

### Trick 7: Checkpoint-Commits erzwingen
```
"Nach jedem Feature: git add + git commit (lokal, nicht pushen)"
→ Sichert Zwischenstände, ermöglicht git diff für Review
```

### Trick 8: /doctor für Diagnose
```bash
/doctor  # Prüft ob Claude Code korrekt konfiguriert ist
```

### Trick 9: Task-Files für lange Projekte
```markdown
<!-- TASK.md im Projekt-Root -->
## Aktueller Task
- [ ] Hero-Section mit Persona-Switch
- [ ] Login-Portal mit PB-Auth
- [ ] Member Dashboard
```

### Trick 10: "Red-Team" Prompting
```
"Schau dir den Code an aus der Perspektive eines Hackers. 
Was würdest du versuchen zuerst?"
→ Security-Review ohne separaten Skill
```

### Trick 11: Output-Format erzwingen
```
"Antworte NUR mit Code. Kein Erklärungstext. Keine Kommentare außer wo nötig."
→ Spart Token und reduziert Noise
```

### Trick 12: Personas in Prompts
```
"Du bist ein Senior Next.js Engineer mit 10 Jahren Erfahrung in DSGVO-konformen
deutschen Vereins-Plattformen. Reviewe diesen Code..."
→ Claude passt Antwort-Tiefe und Fokus an
```

---

## Weitere Tricks (kurzgefasst)
- Nutze `--dangerously-skip-permissions` NUR lokal in isolierter Umgebung
- `git worktree` für parallele Feature-Branches während Claude arbeitet
- `CLAUDE.md` in Unterordnern überschreibt Root-CLAUDE.md (für Apps-spezifische Regeln)
- `/memory` für persistente Erinnerungen zwischen Sessions
- Extended Thinking bei komplexen Architekturfragen einschalten
- Slash Commands für eigene Workflows anlegen (`/deploy`, `/audit`, `/workshop`)

---

## Sofort umsetzbar für MAJER
1. `/init` im Monorepo-Root ausführen wenn erster App-Code existiert
2. `/compact` Shortcut einrichten für lange Sessions
3. Custom Slash Commands anlegen:
   - `/audit` → Security-Audit ausführen
   - `/deploy` → Deployment-Checklist durchgehen
   - `/workshop` → Neuen Lernpfad-Entwurf generieren
