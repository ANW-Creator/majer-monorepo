# Video 04 — I Tried 100+ Claude Code Skills. These 6 Are The Best
**Source:** https://youtu.be/eRS3CmvrOvA
**Creator:** Nate Herk
**Relevanz für MAJER:** Hoch — welche Skills wirklich Wert liefern

---

## Kernaussage
Von 100+ getesteten Claude Code Skills sind nur 6 konsistent wertvoll. Der Rest ist entweder zu generisch, zu eng oder schlecht dokumentiert. Die 6 besten teilen ein Muster: Sie geben Claude **domänenspezifischen Kontext + klare Regeln + konkrete Beispiele**.

---

## Die 6 besten Skill-Typen (laut Nate Herk)

### 1. Security Audit Skill
- Prüft Code auf OWASP Top 10
- Gibt strukturierten Report mit Severity-Levels
- **MAJER-Anwendung:** Vor jedem Feature-Deploy ausführen

### 2. API Integration Skill
- Schreibt typsichere API-Clients aus OpenAPI-Specs
- Generiert Error-Handling und Retry-Logik
- **MAJER-Anwendung:** Pocketbase REST API + n8n Webhook-Clients

### 3. Code Review Skill
- Strukturiertes Code-Review mit Kategorien (Performance, Security, Maintainability)
- **MAJER-Anwendung:** Vor jedem Merge (ersetzt fehlenden Team-Reviewer)

### 4. Database Schema Skill
- Entwirft relationale Schemas mit DSGVO-Annotationen
- **MAJER-Anwendung:** Neue Pocketbase Collections mit sofortigem DSGVO-Mapping

### 5. Onboarding Automation Skill
- Generiert vollständige Onboarding-Flows (Welcome Email, Account Setup, Tutorial)
- **MAJER-Anwendung:** Vereinsmitglieder-Onboarding (Antrag → Willkommensnachricht → Dashboard-Zugang)

### 6. Content Pipeline Skill
- Transformiert Rohideen in strukturierten Content (Blog, Workshop, Lernpfad)
- **MAJER-Anwendung:** Leitfäden aus Vereins-Themen automatisch strukturieren

---

## Was alle 6 gemeinsam haben
```
Erfolgreicher Skill = 
  Klarer Trigger (WANN aktivieren) +
  Domänen-Kontext (WAS das System kennen muss) +
  Konkrete Beispiele (WIE es aussehen soll) +
  Output-Format (WAS geliefert wird)
```

---

## Fehler die Nate bei schlechten Skills sieht
1. Zu generisch: "Hilf mir mit Code" → kein Wert
2. Kein Kontext: Skill kennt nicht das Tech-Stack
3. Kein Output-Format: Claude rät was "gut" aussieht
4. Zu viele Regeln auf einmal: Context-Overload

---

## Für MAJER: Welche Skills fehlen noch
Aus dem bestehenden `majer-tech-architect` Skill ableiten:
- `~/.claude/skills/majer-security-audit/SKILL.md` ← sofort nützlich
- `~/.claude/skills/majer-onboarding-flow/SKILL.md` ← für Mitglieder-Onboarding
- `~/.claude/skills/majer-workshop-content/SKILL.md` ← für Lernpfad-Erstellung
