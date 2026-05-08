# System Building Principles

Diese Regeln gelten für alle technischen Entscheidungen in diesem Monorepo.

## Fundament vor Geschwindigkeit
Heinrich hat keine tiefen Coding-Kenntnisse. Slop und eingeschlichene Fehler werden nicht toleriert.
Jedes System muss so gebaut sein, dass es auch dann stabil läuft, wenn Heinrich irgendwann nur noch überwacht und freigibt — nicht mehr selbst eingreift.

## HITL-Prinzip (Human in the Loop)
Jede Automatisierung behält einen menschlichen Freigabe-Schritt an der kritischen Stelle.
Claude baut, Heinrich genehmigt. Nie das Gegenteil.

## Skalierbarkeits-Denken
Kein System für den Einzel-Use-Case bauen. Immer fragen: Kann dieses System dupliziert und auf einen anderen Verein oder ein anderes Unternehmen angewandt werden?
Gute Abstraktion von Anfang an ist keine Overengineering, sondern die Kernstrategie.

## Pläne immer mit Fallback
Technische Vorschläge liefern mindestens: Plan A (optimal), Plan B (pragmatisch bei Ressourcenmangel), Plan C (Minimal Viable Fall). Bei kritischer Infra auch Plan D und E.

## Keine magic numbers, keine Hardcodes
.env für alle Secrets und Konfiguration. Niemals Credentials im Code.
