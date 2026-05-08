# Luxuriöse Websites bauen: Professionelle Websites mit Claude Code und AI-Video

**Quelle:** https://youtu.be/NvxiSG34mPU
**Video-ID:** NvxiSG34mPU
**Sprache:** en
**Transkript:** .tmp/transcripts/NvxiSG34mPU.txt

## Kernaussage

Dieses Video zeigt, wie man mit Claude Code und dem KI-Videogenerator SeaDance professionelle, luxuriös wirkende Websites baut, die einen nahtlos loopenden AI-generierten Hintergrundvideo-Hero haben. Der Workflow beginnt mit einem Bild (generiert oder hochgeladen), wird zu einem Video gerendert und dann direkt in Claude Code zu einer fertigen, deployten Website. Für MAJER ist das direkt relevant für den Aufbau einer repräsentativen Vereins-Präsenz, die nicht nach Standard-KI aussieht.

## Hauptkonzepte und Techniken

### 1. Der Gesamtworkflow: Bild → Video → Website
Der Prozess läuft in drei klaren Schritten: Ein Bild wird mit einem Bildgenerierungsmodell (im Video: Nano Banana 2) erstellt oder ein bestehendes Foto wird genutzt. Dieses Bild wird in SeaDance zu einem nahtlos loopenden Video animiert. Das Video kommt dann zurück in Claude Code, das daraus eine vollständige Website baut. Alle Schritte können miteinander automatisiert werden, wenn die Key.ai API eingebunden ist.

### 2. SeaDance für nahtlose Loop-Videos
SeaDance ist ein Videogenerierungsmodell, das besonders für Website-Hintergrundvideos geeignet ist. Das erste und letzte Frame des Videos werden identisch gesetzt (dasselbe Bild wird für Anfang und Ende genutzt), was einen nahtlosen Loop erzeugt. Das Video wird in 720p mit deaktivierten Audio generiert. 10-Sekunden-Videos (410 Credits) funktionieren besser als 15-Sekunden-Videos (615 Credits), weil sie ein schnelleres Tempo haben.

### 3. Der SeaDance Loop Prompt Skill
Der Skill ist eine Markdown-Datei in `.claude/skills/`, die Claude Code erklärt, wie man optimale Prompts für SeaDance-Loop-Videos schreibt. Claude liest das Referenzbild über `@blueprint.jpg` ein und generiert einen Prompt mit maximal ca. 1000 Zeichen (Zeichenlimit auf Key.ai). Der Skill stellt sicher, dass das Video auf 10 Sekunden optimiert ist, einen nahtlosen Loop hat und alle gewünschten Textelemente zur richtigen Zeit erscheinen.

### 4. Key.ai als zentraler API-Hub
Key.ai funktioniert wie ein OpenRouter für Bild- und Videogenerierung: Ein API-Key, Zugang zu allen Modellen (SeaDance, Nano Banana, Gemini, GPT-Vision etc.). Das macht es für Automatisierungen geeignet. Der API-Key wird in einer `.env`-Datei im Projekt hinterlegt, dann kann Claude Code direkt die Bilder generieren lassen, ohne dass man manuell wechseln muss.

### 5. Plan Mode vor dem Bauen
Bevor Claude Code mit dem Bauen beginnt, wird der Plan Mode aktiviert (`shift + tab` oder Button in der UI). Claude fragt dann gezielte Fragen zum Projekt: Firmenname, Branding, Sektionen, Farbpalette, Zielgruppe. Erst wenn alle Antworten gegeben sind und Claude zu 95% sicher ist, was gebaut werden soll, beginnt die Implementierung. Das reduziert Fehler massiv.

### 6. Frontend Design Plugin
Das `/plugins`-Kommando öffnet eine Übersicht offizieller Skill-Plugins. Das Frontend Design Plugin wird global installiert und gibt Claude Code geschärftes Designgefühl — es versteht danach Mikroanimationen, moderne Layouts und gibt Websites einen professionelleren Look. Das Plugin wird über `/reload plugins` aktiviert und ist dann als `/front-end design` aufrufbar.

### 7. Scroll-gesteuerte Videos (Scroll-Jacking)
Alternativ zum loopenden Video kann Claude Code das Video Bild für Bild mit dem Scroll-Position des Nutzers verknüpfen. Claude extrahiert dafür alle Frames und ordnet sie der Scrollposition zu. Der Prompt dafür: statt "Video abspielen", sagt man "Video mit Scroll weiterlaufen lassen". Das wurde im Video für eine Apple-Watch-Demo verwendet, wo das Produkt beim Scrollen animiert wurde.

### 8. Referenz-Designs von Dribbble und Awwwards
Für die visuelle Sprache kann man Screenshots von Dribbble.com oder Awwwards.com (mit drei W's) machen und Claude Code geben mit dem Prompt "Mach alles unter dem Video ein bisschen mehr so wie dieses Design." Claude implementiert dann die Stilrichtung, ohne die Struktur zu verändern.

### 9. Deployment mit GitHub und Vercel
Der lokale Code wird zu GitHub gepusht (Claude kann das über den Terminal-Befehl mit `git` tun), dann wird in Vercel das GitHub-Repository importiert. Bei jedem neuen Push zu GitHub aktualisiert Vercel automatisch die Live-Website in 30–60 Sekunden. GitHub ist wie ein Google Drive für Code, Vercel ist das Tool das den Code im Internet erreichbar macht.

### 10. settings.local.json für Bypass-Permissions
Eine `settings.local.json` im `.claude/`-Ordner kann definieren, welche Aktionen Claude ohne Nachfrage ausführen darf. Das verhindert ständige Permission-Prompts beim Iterieren. Die Datei wird in der Free School Community geteilt.

## Konkrete Schritte / Befehle / Tools

**Setup:**
1. Visual Studio Code installieren
2. Claude Code Extension installieren (Extensions → "Claude Code" von Anthropic)
3. Neuen Projektordner erstellen und öffnen
4. `.claude/`-Ordner anlegen
5. SeaDance Loop Prompt Skill aus der Free School Community in `.claude/` ziehen
6. `/plugins` öffnen → Frontend Design Plugin global installieren → `/reload plugins`

**Bild generieren:**
- Key.ai → API Market → Text to Image → Nano Banana 2 → 16:9 Aspekt
- Prompt: detaillierte Beschreibung des gewünschten Bildes

**Video generieren:**
- Key.ai → SeaDance 2 → Bild als erstes und letztes Frame einfügen
- Generate Audio deaktivieren
- Dauer: 10 Sekunden
- Claude Code Plan Mode: Video als Referenz einfügen + Prompt mit Skill

**Claude Code Prompt für Video-Generierung:**
```
Hey Claude, I want you to look at the reference image [@blueprint.jpg].
I want you to help me create a SeaDance Loop video for my website.
[Beschreibung der gewünschten Animation und Textelemente]
Go ahead and create me that prompt for the video.
```

**Website bauen:**
```
Hey Claude Code, I just gave you a reference video [video.mp4].
The whole hero section should be this video playing on an endless loop.
This is for [business type], it should feel [tone/style].
Ask me questions until you are 95% confident you understand what I want.
```

**GitHub + Deployment:**
```
I need you to push this codebase to a GitHub repository. 
Create a new private one. Use my GitHub email [email].
```
- Dann: Vercel → Add New → Import Git Repository → Deploy

**Tools:**
- Key.ai (Bild + Video Generierung, ein API-Key für alle Modelle)
- SeaDance 2 (Loop-Video-Generierung)
- Nano Banana 2 (Bildgenerierung)
- Claude Code (Website-Bau)
- GitHub (Code-Backup und Versionierung)
- Vercel (Deployment, kostenlos für einfache Projekte)
- Dribbble / Awwwards (Design-Referenzen)

## Relevanz für MAJER

Die MAJER-Vereinswebsite braucht eine repräsentative Präsenz, die nicht nach Generic-KI aussieht. Dieser Workflow ermöglicht es, mit einem Foto der eigenen Bildungsarbeit (Schüler, Workshop, Aula) ein professionelles Loop-Video zu erstellen und daraus direkt die Hero-Section der `apps/verein`-Website zu bauen. Das Deployment-Muster GitHub → Vercel entspricht außerdem dem Monorepo-Stack (alternativ: GitHub → Hostinger VPS über Docker, was für MAJER ohnehin geplant ist). Der Frontend Design Plugin ist für alle Website-Arbeiten an `apps/verein` direkt einsetzbar. Die Key.ai API kann in n8n-Workflows oder Claude Code für die Content-Pipeline von MAJER integriert werden.

## Direkte Zitate

> "It is not an exaggeration when people say that this stuff used to take hundreds of thousands of dollars and months. But now something like this can be done in minutes by just uploading an input photo and a prompt."

> "A skill is literally just a natural language instruction for Claude Code on how to do something."

> "Plan mode lets us talk about what we want to do with Claude Code to make sure that it understands exactly everything that we want before it actually starts building."

> "Once we sync that GitHub repository with Vercel, whenever we push a change on our local version of the site, Vercel automatically picks it up. So it's really just like it feels like we're only working with one tool."

> "Think about how much better this will be as you start to add more business context, add more brand guidelines, and then iterate and refine."
