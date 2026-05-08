#!/usr/bin/env python3
"""
Extracts captions/transcripts from YouTube videos using yt-dlp.
Outputs clean text files suitable for knowledge document creation.

Usage:
    python tools/extract_video_captions.py <youtube_url>
    python tools/extract_video_captions.py <youtube_url> --lang de
    python tools/extract_video_captions.py --batch <file_with_urls.txt>

Output:
    .tmp/transcripts/<video_id>_<title>.txt
"""

import subprocess
import sys
import os
import json
import re
import argparse
from pathlib import Path


TRANSCRIPT_DIR = Path(".tmp/transcripts")


def check_yt_dlp() -> bool:
    try:
        result = subprocess.run(["yt-dlp", "--version"], capture_output=True, text=True)
        return result.returncode == 0
    except FileNotFoundError:
        return False


def sanitize_filename(name: str) -> str:
    name = re.sub(r'[^\w\s\-_]', '', name)
    name = re.sub(r'\s+', '_', name.strip())
    return name[:80]


def get_video_info(url: str) -> dict:
    result = subprocess.run(
        ["yt-dlp", "--dump-json", "--no-playlist", url],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(f"yt-dlp info failed: {result.stderr}")
    return json.loads(result.stdout)


def extract_captions(url: str, lang: str = "de") -> Path:
    TRANSCRIPT_DIR.mkdir(parents=True, exist_ok=True)

    info = get_video_info(url)
    video_id = info.get("id", "unknown")
    title = sanitize_filename(info.get("title", "video"))
    channel = info.get("channel", "unknown")
    upload_date = info.get("upload_date", "")

    out_template = str(TRANSCRIPT_DIR / f"{video_id}_{title}.%(ext)s")

    # Try manual captions first, fall back to auto-generated
    for sub_flag in ["--write-subs", "--write-auto-subs"]:
        result = subprocess.run(
            [
                "yt-dlp",
                sub_flag,
                "--sub-lang", f"{lang},en",
                "--skip-download",
                "--convert-subs", "vtt",
                "--no-playlist",
                "-o", out_template,
                url,
            ],
            capture_output=True,
            text=True,
        )
        # Check if any VTT file was created
        vtt_files = list(TRANSCRIPT_DIR.glob(f"{video_id}*.vtt"))
        if vtt_files:
            break

    vtt_files = list(TRANSCRIPT_DIR.glob(f"{video_id}*.vtt"))
    if not vtt_files:
        raise RuntimeError(
            f"No captions found for {url}. "
            "The video may not have captions or auto-generated subtitles."
        )

    vtt_file = vtt_files[0]
    transcript_text = parse_vtt(vtt_file)

    output_path = TRANSCRIPT_DIR / f"{video_id}_{title}.txt"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"# Transkript: {info.get('title', title)}\n\n")
        f.write(f"**Kanal:** {channel}\n")
        f.write(f"**URL:** {url}\n")
        f.write(f"**Datum:** {upload_date[:4]}-{upload_date[4:6]}-{upload_date[6:]} "
                f"(hochgeladen)\n" if len(upload_date) == 8 else f"**Datum:** {upload_date}\n")
        f.write(f"**Sprache:** {lang}\n\n")
        f.write("---\n\n")
        f.write(transcript_text)

    # Clean up VTT file
    vtt_file.unlink(missing_ok=True)

    print(f"Transkript gespeichert: {output_path}")
    return output_path


def parse_vtt(vtt_path: Path) -> str:
    """Convert VTT subtitle file to clean readable text."""
    lines = vtt_path.read_text(encoding="utf-8").splitlines()
    text_lines = []
    last_line = ""

    for line in lines:
        line = line.strip()
        # Skip VTT headers, timestamps, and empty lines
        if not line:
            continue
        if line.startswith("WEBVTT") or line.startswith("Kind:") or line.startswith("Language:"):
            continue
        if re.match(r'^\d{2}:\d{2}', line) or re.match(r'^\d{2}:\d{2}:\d{2}', line):
            continue
        # Remove VTT tags like <00:00:01.000> and <c>
        line = re.sub(r'<[^>]+>', '', line)
        line = line.strip()
        if not line:
            continue
        # Deduplicate consecutive identical lines (common in auto-captions)
        if line != last_line:
            text_lines.append(line)
            last_line = line

    # Join into paragraphs: break at sentence endings
    raw = " ".join(text_lines)
    raw = re.sub(r'\s+', ' ', raw)
    # Simple paragraph breaks at sentence endings followed by capital letters
    raw = re.sub(r'([.!?])\s+([A-ZÜÄÖ])', r'\1\n\n\2', raw)

    return raw.strip()


def batch_extract(url_file: str, lang: str = "de") -> None:
    urls = Path(url_file).read_text().splitlines()
    urls = [u.strip() for u in urls if u.strip() and not u.startswith("#")]

    print(f"Verarbeite {len(urls)} Videos...")
    errors = []

    for i, url in enumerate(urls, 1):
        print(f"\n[{i}/{len(urls)}] {url}")
        try:
            path = extract_captions(url, lang=lang)
            print(f"  OK: {path}")
        except Exception as e:
            print(f"  FEHLER: {e}")
            errors.append((url, str(e)))

    if errors:
        print(f"\n{len(errors)} Fehler:")
        for url, err in errors:
            print(f"  {url}: {err}")


def main():
    parser = argparse.ArgumentParser(description="YouTube Transkript-Extraktor")
    parser.add_argument("url", nargs="?", help="YouTube URL")
    parser.add_argument("--lang", default="de", help="Sprache (default: de)")
    parser.add_argument("--batch", metavar="FILE", help="Datei mit URLs (eine pro Zeile)")
    args = parser.parse_args()

    if not check_yt_dlp():
        print("FEHLER: yt-dlp ist nicht installiert.")
        print("Installation: pip install yt-dlp  oder  brew install yt-dlp")
        sys.exit(1)

    if args.batch:
        batch_extract(args.batch, lang=args.lang)
    elif args.url:
        try:
            extract_captions(args.url, lang=args.lang)
        except Exception as e:
            print(f"FEHLER: {e}")
            sys.exit(1)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
