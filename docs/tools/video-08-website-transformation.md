# Website-Design: Website in 20 Minuten transformieren mit Claude Design

**Quelle:** https://youtu.be/TcFeSjwTo7g
**Video-ID:** TcFeSjwTo7g
**Sprache:** en
**Transkript:** .tmp/transcripts/TcFeSjwTo7g.txt

## Kernaussage

Claude Design (Anthropics eigenes visuelles Prototyping-Tool, aufgebaut auf Opus 4.7) ermöglicht es, Websites in wenigen Minuten von Grund auf zu bauen oder bestehende Designs grundlegend zu transformieren. Das Video zeigt den vollständigen Workflow von der Idee bis zur Deployment auf Vercel — inklusive Video-Hintergründe, interaktive Scroll-Animationen, Tweaks-Panel und die Integration mit Claude Code und GitHub. Für MAJER relevant als schneller Weg zu professionellen Landingpages und Vereinsseiten ohne tiefes CSS-Wissen.

## Hauptkonzepte und Techniken

### Zwei Einstiegswege in Claude Design

**Weg 1 — Bestehendes Projekt transformieren:**
GitHub-Repo oder lokalen Projektordner direkt in Claude Design ziehen. Claude übernimmt bestehenden Code, Brand-Farben, Copy und baut eine visuell bessere Version.

**Weg 2 — Von Scratch mit Claude Chat als Ideengeber:**
In Claude Chat eine Markenidentität entwickeln lassen (Produktidee, Positionierung, visuelle Identität, Copy-Stil), das Ergebnis als Kontext-Paste in Claude Design einfügen. Im Beispiel entsteht die Marke "LOL" (Nachtgetränk) mit vollständiger Brandstrategie als Ausgangspunkt.

### Video-Hintergründe mit Kling AI und Krea

Workflow für einen loopenden Video-Hintergrund:
1. Claude Chat erstellt den Image-Prompt und Video-Prompt passend zur Marke
2. In Krea.ai: Image mit Nano Banana 2 generieren (16:9-Format)
3. In Krea.ai: Image als erstes und letztes Frame in Canny 2.0 einfügen, Video-Prompt eintragen
4. Ergebnis: Ein kurzes, loopfähiges Ambient-Video für den Hero-Bereich
5. Video-Datei als MP4 in Claude Design hochladen (Limit: ca. 30–40 MB, max. ~20 Sekunden)

### Motion Sites als Inspirationsquelle

Motions.ai ist ein kuratoriertes Archiv mit Scroll-Animationen und Hintergründen. Workflow:
1. Passendes Template finden (viele kostenlos, Paid-Plan für $99 einmalig)
2. Prompt kopieren
3. Prompt in Claude Design einfügen mit der Anweisung: "Replace the background video with mine, update all copy and brand colors to my brand"
4. Eigenes Design-System übergeben

Das ist der genaue Weg, wie die "AI Automation Society"-Website mit dem 3D-Scroll-Journey-Effekt entstand.

### Sketch-Feature: Grobe Wireframes als Kommunikationsmittel

Vor dem Erstellen eines High-Fidelity-Prototyps kann man im Canvas eine grobe Skizze zeichnen:
- Rechtecke für Hero-Bereich, Video-Hintergrund, Text-Blöcke, Navbar
- Text-Labels direkt in die Skizze schreiben
- Claude liest die Skizze als visuelle Vorgabe

Vorteil: Claude und der User "sind auf der gleichen Seite" bevor Claude beginnt, Tokens für die Umsetzung auszugeben.

### Modell-Auswahl: Opus 4.7 vs. Sonnet 4.6

Claude Design läuft standardmäßig auf Opus 4.7 — das leistungsstärkste und teuerste öffentliche Modell. Praktische Empfehlung:
- Opus 4.7 für die initiale Planung und grobe Strukturierung (höhere Vision-Qualität)
- Sonnet 4.6 für Iterationen, kleinere Änderungen und Text-Korrekturen
- "Sonnet 4.6 is really good and if you are super clear and super specific about what you want, then you can probably get a lot of the way done with Sonnet 4.6."

### Tweaks-Panel: Visuell iterieren ohne Prompt-Tokens zu verbrennen

Nach dem ersten Build lässt man Claude ein Tweaks-Panel generieren: "Add a bunch of things that I can tweak." Das Panel enthält Schieberegler und Auswahloptionen für:
- Farbpaletten (verschiedene Farbschemata im Vergleich)
- Accent Hue
- Typografie / Schriftart
- Headline-Größe
- Headline-Schreibweise (Uppercase, Lowercase)
- Hero-Layout (Links, Zentriert)
- Video-Dimming
- Section Rhythm (Abstände zwischen Sektionen)
- Card-Styles

Jede Änderung ist reversibel. Kein Prompt nötig. Das spart erheblich Tokens gegenüber "Ändere die Hintergrundfarbe auf Blau" → zurück → "Nein doch nicht".

### Präzise Kommentare und Zeichnungen im Canvas

Statt Claude im Chat zu beschreiben was geändert werden soll:
- Direkt auf ein Element klicken → Kommentar hinterlassen (z.B. "Make this button the color of the comma in the hero text. Make it a gold accent.")
- Claude weiß exakt, welches Element gemeint ist
- Freies Zeichnen: Einen Kreis um eine Stelle ziehen und kommentieren ("I don't like how this ends so abruptly. Add a transition overlay or gradient so it feels smoother.")
- Inline-Text direkt bearbeiten: Text-Größen, Zeichen löschen

### Session-Management: Kontext-Rot vermeiden

Lange Claude-Design-Sessions können zu kontaminiertem Kontext führen: "What I found is that if you are in a project, right, and it's getting really, really long and you're still not getting where you want, maybe you want to export this and then open up a fresh session." Tipp: `/clear`-Befehl innerhalb von Claude Design verfügbar, obwohl nicht mit Sicherheit gesagt werden kann, dass er das vollständige Kontext-Fenster leert.

### Export und Deployment: Claude Design → Claude Code → GitHub → Vercel

Vollständiger Deployment-Workflow:
1. **Export**: Share → Download as ZIP (oder "Hand off to Claude Code"-Befehl, der einen direkten Import-Befehl gibt)
2. **In Claude Code öffnen**: ZIP entpacken, Ordner in VS Code öffnen
3. **GitHub**: Claude Code anweisen, das Projekt als Private Repo zu pushen
4. **Localhost testen**: Vor dem Deployment prüfen, ob die Website lokal funktioniert
5. **Vercel**: Account mit GitHub verbinden, Repo importieren, Deploy klicken (~60 Sekunden)
6. **Fehler debuggen**: Bei 404-Fehlern Claude Code fragen ("What does this mean? How do I fix this?") — im Beispiel musste `LOL-website.html` zu `index.html` umbenannt werden
7. **Continuous Deployment**: Vercel greift automatisch auf neue GitHub-Commits zu und deployed live

### Mobile-Optimierung nicht vergessen

Claude Design und Claude Code optimieren nicht automatisch für mobile. Vor dem Deployment: F12 → Mobile View im Browser öffnen. Falls das Layout bricht: Claude Code anweisen, für mobile zu optimieren, ohne die Desktop-Ansicht zu beschädigen.

### Design-System als Token-Investition

Ein Design-System in Claude Design kostet initial viele Tokens (10–15 Minuten zum Verarbeiten), zahlt sich aber aus: konsistente Farben, Typografie, Layout-Regeln für alle zukünftigen Projekte. Design-System kann exportiert und in Claude Code weitergenutzt werden.

## Konkrete Schritte / Befehle / Tools

**Claude Design starten:**
- New Prototype → High-Fidelity → Design System wählen (oder "None" für neues Brand)
- Alternativ: URL-basiertes Design System aus bestehendem GitHub-Repo

**Prompt-Struktur für den ersten Build:**
1. Sketch hochladen (grobe Wireframe-Zeichnung)
2. Video/Image-Assets hochladen
3. Brand-Kontext aus Claude Chat einfügen (23+ Zeilen über Positionierung, Copy-Stil, visuelle Identität)
4. Explizit sagen: "Write all the copy for now. We can make tweaks later."

**Token-Sparregeln:**
- Einen visuellen Change pro Prompt
- Negatives nennen ("Don't use these fonts, don't use these color schemes")
- Echte Referenzen nennen statt vager Adjektive ("linear 2023 with higher density" statt "clean and minimalistic")
- Tweaks-Panel nutzen statt Farb-Prompt-Roulette
- Modell auf Sonnet 4.6 wechseln für kleinere Iterationen

**Export-Workflow:**
- Share → Download as ZIP
- Alternativ: "Hand off to Claude Code" (Befehl kopieren und in Claude Code einfügen)

**Deployment:**
- GitHub-Account in Claude Code verknüpfen
- Vercel.com, mit GitHub-Account registrieren
- Add New Project → GitHub-Repo importieren → Deploy

**Tools (erwähnt):**
- Krea.ai (Image-Generierung, Video-Animierung via Canny 2.0)
- Motions.ai (Scroll-Animation-Templates, kostenlos / $99 einmalig)
- Vercel (Hosting, kostenloser Plan verfügbar)

## Relevanz für MAJER

Für MAJER als Bildungsverein mit begrenzten Ressourcen ist Claude Design ein direkter Weg zu professionellen Webauftritten:
- Die MAJER-Vereinsseite (`apps/verein`) kann mit Claude Design visuell iteriert und dann per Claude Code in den bestehenden Next.js-Stack integriert werden
- Das Persona-System (Schüler, Student, Lehrer, Förderer) lässt sich als Sketch-Vorgabe visualisieren bevor der Code geschrieben wird
- Scroll-Animationen und Video-Backgrounds erhöhen die Wirkung auf Förderer und Partner
- Der Vercel-Deployment-Workflow ist direkt auf den MAJER-Stack übertragbar (GitHub-basiert)
- Das Tweaks-Panel eignet sich für schnelle Brand-Tests ohne Programmier-Kenntnisse

## Direkte Zitate (die wichtigsten 3-5)

> "In just 20 minutes, I was able to transform my AI Automation Society website from this to this where now, as I start to scroll, we go on this journey."

> "If you put this prompt into Claude Code, you would maybe get something that visually looks like this. But in order to go back and forth and make tweaks, you would have to like take some awkward screenshots or you would have to be very specific. But right here, what we can do is we can add comments."

> "Actually making tweaks and then saving those changes is going to save you more time and also more of your session limit than if you're just having a conversation back and forth with Claude."

> "I want to see how this website could be improved. So just add a bunch of things that I can tweak and put those on there for me. Different colors, different sliders, different panels, and just give me a bunch of things to play with."

> "When the changes come to GitHub and they come over here, Vercel automatically grabs that and deploys it to the live site. So you have a very clean separation between what you're practicing with and changes that you might want to make."
