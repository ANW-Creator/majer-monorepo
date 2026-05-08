#!/usr/bin/env python3
"""
Extracts transcripts from YouTube videos using youtube-transcript-api.
Outputs clean text files suitable for knowledge document creation.

Usage:
    python3 tools/extract_video_captions.py <youtube_url>
    python3 tools/extract_video_captions.py <youtube_url> --lang en
    python3 tools/extract_video_captions.py --batch docs/nate-herk-urls.txt
"""

import sys
import os
import re
import argparse
from pathlib import Path

try:
    from youtube_transcript_api import YouTubeTranscriptApi
except ImportError:
    print("FEHLER: youtube-transcript-api nicht installiert.")
    print("Fix: pip3 install youtube-transcript-api")
    sys.exit(1)


TRANSCRIPT_DIR = Path(".tmp/transcripts")


def extract_video_id(url: str) -> str:
    patterns = [
        r"youtu\.be/([a-zA-Z0-9_-]{11})",
        r"youtube\.com/watch\?v=([a-zA-Z0-9_-]{11})",
        r"youtube\.com/shorts/([a-zA-Z0-9_-]{11})",
    ]
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    # Treat as raw video ID if it looks like one
    if re.match(r"^[a-zA-Z0-9_-]{11}$", url.strip()):
        return url.strip()
    raise ValueError(f"Konnte Video-ID nicht aus URL extrahieren: {url}")


def sanitize_filename(name: str) -> str:
    name = re.sub(r'[^\w\s\-]', '', name)
    name = re.sub(r'\s+', '_', name.strip())
    return name[:60]


def get_transcript(video_id: str, preferred_lang: str = "en") -> tuple[list, str]:
    """Returns (transcript_snippets, language_code_used)."""
    api = YouTubeTranscriptApi()
    transcripts = list(api.list(video_id))

    if not transcripts:
        raise RuntimeError(f"Keine Transkripte verfügbar für Video {video_id}")

    # Priority: manual in preferred lang → auto in preferred lang → any manual → any
    chosen = (
        next((t for t in transcripts if t.language_code == preferred_lang and not t.is_generated), None)
        or next((t for t in transcripts if t.language_code == preferred_lang and t.is_generated), None)
        or next((t for t in transcripts if not t.is_generated), None)
        or transcripts[0]
    )

    # Call .fetch() on the Transcript object itself (v1.x API)
    snippets = list(chosen.fetch())
    return snippets, chosen.language_code


def transcript_to_text(entries: list) -> str:
    """Convert transcript entries to clean readable paragraphs."""
    # Each entry has .text, .start, .duration
    raw_lines = []
    for entry in entries:
        text = entry.text.strip()
        # Remove VTT/HTML tags that slip through
        text = re.sub(r'<[^>]+>', '', text)
        text = text.strip()
        if text:
            raw_lines.append(text)

    # Join and add paragraph breaks at sentence endings
    raw = " ".join(raw_lines)
    raw = re.sub(r'\s+', ' ', raw)
    raw = re.sub(r'([.!?])\s+([A-ZÜÄÖ"\'(])', r'\1\n\n\2', raw)
    return raw.strip()


def process_video(url: str, lang: str = "en") -> Path:
    TRANSCRIPT_DIR.mkdir(parents=True, exist_ok=True)

    video_id = extract_video_id(url)
    print(f"  Video-ID: {video_id}")

    # Check if already processed
    existing = list(TRANSCRIPT_DIR.glob(f"{video_id}*.txt"))
    if existing:
        print(f"  Bereits vorhanden: {existing[0]} — überspringe.")
        return existing[0]

    entries, lang_used = get_transcript(video_id, preferred_lang=lang)
    text = transcript_to_text(entries)

    # Use video ID as filename since we don't fetch metadata separately
    output_path = TRANSCRIPT_DIR / f"{video_id}.txt"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"# Transkript\n\n")
        f.write(f"**Video-ID:** {video_id}\n")
        f.write(f"**URL:** {url}\n")
        f.write(f"**Sprache:** {lang_used}\n")
        f.write(f"**Einträge:** {len(entries)}\n\n")
        f.write("---\n\n")
        f.write(text)

    print(f"  Gespeichert: {output_path} ({len(entries)} Segmente, Sprache: {lang_used})")
    return output_path


def batch_process(url_file: str, lang: str = "en") -> None:
    urls = Path(url_file).read_text().splitlines()
    urls = [u.strip() for u in urls if u.strip() and not u.startswith("#")]

    print(f"Verarbeite {len(urls)} Videos...\n")
    ok, skipped, errors = 0, 0, []

    for i, url in enumerate(urls, 1):
        print(f"[{i:02d}/{len(urls)}] {url}")
        try:
            path = process_video(url, lang=lang)
            if "überspringe" in str(path):
                skipped += 1
            else:
                ok += 1
        except Exception as e:
            print(f"  FEHLER: {e}")
            errors.append((url, str(e)))

    print(f"\nFertig: {ok} neu, {skipped} übersprungen, {len(errors)} Fehler")
    if errors:
        print("\nFehlgeschlagen:")
        for url, err in errors:
            print(f"  {url}: {err}")


def main():
    parser = argparse.ArgumentParser(description="YouTube Transkript-Extraktor")
    parser.add_argument("url", nargs="?", help="YouTube URL oder Video-ID")
    parser.add_argument("--lang", default="en", help="Bevorzugte Sprache (default: en)")
    parser.add_argument("--batch", metavar="FILE", help="Textdatei mit URLs (eine pro Zeile)")
    args = parser.parse_args()

    if args.batch:
        batch_process(args.batch, lang=args.lang)
    elif args.url:
        try:
            process_video(args.url, lang=args.lang)
        except Exception as e:
            print(f"FEHLER: {e}")
            sys.exit(1)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
