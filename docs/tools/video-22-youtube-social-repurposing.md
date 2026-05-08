# YouTube Content Repurposing: LinkedIn, X und Instagram automatisch generieren

**Quelle:** https://youtu.be/4Zaoo0YbYaw
**Video-ID:** 4Zaoo0YbYaw
**Sprache:** en
**Transkript:** .tmp/transcripts/4Zaoo0YbYaw.txt

## Kernaussage

Dieses Video zeigt, wie man mit Claude Code und Blotato (einem Social-Media-API-Dienst) aus einem einzigen YouTube-Video automatisch fertige Posts für LinkedIn, Instagram und X generiert — inklusive plattformspezifischer Texte und Grafiken. Der Workflow läuft als Claude Code Skill und verbessert sich mit jeder Ausführung selbst. Für MAJER ist das direkt anwendbar auf die Content-Pipeline: YouTube-Videos der Bildungsarbeit → automatisch zu Social-Media-Beiträgen auf allen relevanten Plattformen.

## Hauptkonzepte und Techniken

### 1. Der Workflow im Überblick
Vom YouTube-Video-Link zu fertigen Social-Media-Drafts in einem einzigen Prompt. Claude Code nutzt Blotato um: das Transcript aus dem YouTube-Video zu extrahieren, den Inhalt plattformspezifisch umzuschreiben, Grafiken zu generieren, alles in einem Drafts-Ordner zu speichern. Nach dem menschlichen Review wird Claude Code angewiesen, die freigegebenen Posts über Blotato zu veröffentlichen. Alles läuft als Skill — wird bei jeder Ausführung besser und konsistenter.

### 2. Was Blotato ist und warum es gebraucht wird
Blotato ist ein Social-Media-API-Dienst mit Zugang zu 9 Plattformen. Es kann Inhalte aus Transcripts, Websites und PDFs extrahieren, Visuals erstellen, Posts schedulen und direkt veröffentlichen. Im Video-Workflow übernimmt Blotato: YouTube-Transcript-Extraktion, Visual-Generierung (Infografiken, Karussell-Slides), direkte Veröffentlichung auf den verbundenen Accounts. Claude Code kommuniziert mit Blotato über den API-Key.

### 3. Skills als "Rezepte" für wiederkehrende Prozesse
Ein Skill ist wie ein Rezept: Name des Gerichts, Zutaten, Schritte, fertiges Ergebnis. Weil der Repurpose-Prozess als Skill gebaut wird, wird er bei jeder Ausführung konsistenter. Claude Code findet Fehler selbst (z.B. "YouTube is blocked by the web fetch tool") und ergänzt die Skill-Dokumentation mit "Known Issues and Findings". Beim nächsten Durchlauf tritt derselbe Fehler nicht mehr auf. Der Skill speichert sich seinen eigenen Fortschritt und seine eigenen Learnings.

### 4. Setup: Clarifying Questions statt direkter Ausführung
Anstatt sofort zu bauen, fragt man Claude Code erst: "Create me a new skill... Ask me clarifying questions one at a time until you are 95% confident that you can complete the task successfully." Das führt durch: Programmiersprache (→ Python), Auto-Publish oder Review-first (→ immer Review), LLM für Text-Umschreiben (→ Claude via OpenRouter), Ton-Vorgaben pro Plattform, Visual-Spezifikationen, Speicherort für Drafts.

### 5. Plattformspezifische Anpassungen
Jede Plattform hat eigene Anforderungen die im Skill hinterlegt werden: LinkedIn: professionell, Key-Takeaway-Grafik mit clean Design. Instagram: educational carousel im Tweet-Stil, Profilbild + verifizierter Badge in jedem Slide. X: casual, leicht humorvoll, einprägsames Quote-Visual. Wenn eine Plattform bestimmte Bildgrößen braucht (z.B. Instagram: max. Dateigröße), wird das ebenfalls im Skill dokumentiert.

### 6. Brand Assets Ordner
Ein Ordner `brand_assets/` im Projekt enthält das Profilbild und andere Brand-Materialien. Claude Code bezieht sich auf diese Dateien beim Erstellen von Visuals. Wenn ein Visual optimiert werden soll (z.B. Profilbild + blauer Verified-Badge in Instagram-Karussell), reicht ein kurzer Prompt — Claude aktualisiert die Skill-Dokumentation so dass es beim nächsten Mal automatisch passiert.

### 7. .env-Datei für API-Keys
Das Projekt braucht zwei API-Keys: Blotato API-Key (aus Blotato Settings → API) und einen LLM-API-Key (Anthropic direkt oder OpenRouter für Zugriff auf alle Modelle). Beide werden in einer `.env`-Datei im Projektordner hinterlegt. Claude Code findet diese automatisch wenn es die Skripte ausführt.

### 8. CLAUDE.md und Projektstruktur
Nach dem ersten erfolgreichen Test: `/init` ausführen. Das generiert eine CLAUDE.md-Datei aus der bestehenden Projektstruktur — Overview, Commands, Umgebungsvariablen, Architektur, Patterns. Das gibt dem Projekt Struktur und stellt sicher, dass zukünftige Claude-Sessions sofort wissen wo alles liegt. Best Practice: CLAUDE.md unter 150 Zeilen halten um Kontext nicht zu verschwenden. Loose Scripts in einem `scripts/`-Ordner organisieren und CLAUDE.md entsprechend aktualisieren.

### 9. Review-first Prinzip
Claude Code veröffentlicht niemals ohne Genehmigung. Der Workflow erstellt immer zuerst Drafts, der Nutzer reviewt, dann wird plattformweise genehmigt: "Can you go ahead and post our content on X for us?" → Claude postet auf X. Die Draft-Dateien können auch direkt bearbeitet werden bevor sie veröffentlicht werden — Claude Code liest die aktualisierten Drafts beim Veröffentlichen.

### 10. Skalierung und Qualitätssteigerung
Der erste Durchlauf ist gut; der zehnte ist sehr gut. Jedes Mal mehr Kontext hinzufügen: Businessbeschreibung, Brand Guidelines, Referenz-Posts die gut performt haben. Wenn der Workflow vollständig ausgereift ist, kann er automatisiert werden: bei jedem neuen YouTube-Upload wird die Pipeline automatisch getriggert und liefert fertige Drafts zur Genehmigung.

## Konkrete Schritte / Befehle / Tools

**Setup (einmalig):**
1. VS Code installieren + Claude Code Extension installieren
2. Neuen Projektordner erstellen (z.B. `blotato/`)
3. `brand_assets/`-Ordner erstellen → Profilbild einfügen
4. Blotato-Account erstellen → Settings → API → Key kopieren
5. OpenRouter-Account erstellen → API-Key erstellen
6. `.env`-Datei anlegen:
   ```
   BLOTATO_API_KEY=your_key_here
   ANTHROPIC_API_KEY=your_key_here
   ```

**Skill erstellen (einmaliger Setup-Prompt):**
```
Create me a new skill called repurpose YouTube video.
It's going to create an AI social media manager that makes social media posts
for LinkedIn, Instagram, and X.
The user will input a YouTube video URL and wants it to be turned into
a LinkedIn post, Instagram post, and X post — each one should have
a visual that's optimized for that platform.
Ask me clarifying questions one at a time until you are 95% confident
that you can complete the task successfully.
```

**Workflow ausführen:**
```
Hey Claude, I want you to take this YouTube video and repurpose it
into a LinkedIn, X, and Instagram post.
[YouTube URL]
I've given you in the brand_assets folder a profile picture of myself
to use in the visual posts.
Let me know when you've got some stuff ready to review and make sure
you're updating your skill document with your findings from this test run.
```

**Post genehmigen und veröffentlichen:**
```
That output looks great. Can you go ahead and post our content on X for us?
```

**Projektstruktur nach `/init`:**
```
project/
├── .claude/
│   └── repurpose-youtube-video/   # Skill
│       └── skill.md
├── brand_assets/
│   └── profile_picture.jpg
├── drafts/
│   └── [video-title]/
│       ├── instagram/
│       │   ├── post.txt
│       │   └── visual_1.png ... visual_5.png
│       ├── linkedin/
│       │   ├── post.txt
│       │   └── visual.png
│       └── x/
│           ├── post.txt
│           └── visual.png
├── scripts/
│   ├── draft.py
│   ├── post.py
│   └── publish.py
├── .env
└── CLAUDE.md
```

**Plattformen verbinden:**
Blotato Settings → Social Accounts → Plattform auswählen → Sign-in-Seite → Account-ID kopieren für Claude

**Tools:**
- Blotato (bezahlt, 30% Rabatt über Videolink) — blotato.com
- OpenRouter (API-Zugang zu allen LLM-Modellen) — openrouter.ai
- Claude Code (kostenlos mit Pro-Abo oder Max-Plan)
- VS Code (kostenlos)

## Relevanz für MAJER

MAJER produziert YouTube-Videos über KI-Bildung und Automatisierung. Dieser Workflow gibt jedem Video sofort LinkedIn-Posts (für Förderer und Bildungseinrichtungen), Instagram-Karussells (für Schüler und Studenten) und X-Posts (für die Tech-Community). Der Review-first-Ansatz entspricht dem HITL-Prinzip aus den MAJER-Systemregeln. Der Skill wird mit der Zeit immer besser — je mehr MAJER-Content durchläuft, desto präziser wird der Output. Die CLAUDE.md-Struktur kann in das bestehende MAJER-Monorepo integriert werden. Langfristig kann der Workflow über n8n getriggert werden: YouTube-Upload-Webhook → Claude Code Skill → Drafts → manuelles Review → Veröffentlichung.

## Direkte Zitate

> "That exact workflow right there took me from having one long form YouTube video to having a finished LinkedIn post, a finished Instagram post, and a finished X post."

> "Just think of a skill like a recipe. If you tell your agent to write a LinkedIn post, it would look at the LinkedIn post skill and that would have the name of the dish, the ingredients, the steps, and then the finished output."

> "Because we're turning this process into a skill, every single time we use it, it's only going to get better and more consistent."

> "Think about how much better this will be as you start to add more business context, add more brand guidelines, and then iterate and refine. We've ran this workflow twice at this point, and it's gotten better each time."

> "I want you to always make sure I review it before you ever publish anything on my social media accounts."
