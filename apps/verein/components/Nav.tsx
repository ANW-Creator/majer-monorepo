"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePersona } from "@/components/PersonaProvider";
import { PERSONAS } from "@/lib/persona";

const NAV_LINKS = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/lernpfade", label: "Lernpfade" },
  { href: "/mitmachen", label: "Mitmachen" },
];

export function Nav() {
  const pathname = usePathname();
  const { persona, openModal } = usePersona();
  const personaData = persona ? PERSONAS[persona] : null;

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-divider">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-light tracking-[0.25em] text-primary uppercase hover:opacity-70 transition-opacity"
          style={{ fontSize: "1.1rem", letterSpacing: "0.25em" }}
        >
          MAJER
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7 font-sans text-[12px] tracking-wide">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-150 hover:text-primary ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-primary"
                    : "text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Persona badge */}
        <button
          onClick={openModal}
          className="flex items-center gap-2 font-sans text-[11px] border border-divider rounded-full px-4 py-1.5 hover:border-primary/50 transition-colors duration-150 group"
        >
          {personaData ? (
            <>
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: personaData.accent }}
              />
              <span className="text-muted group-hover:text-ink transition-colors">
                {personaData.label}
              </span>
            </>
          ) : (
            <span className="text-muted group-hover:text-ink transition-colors">
              Wer bist du?
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
