"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePersona } from "@/components/PersonaProvider";
import { PERSONAS } from "@/lib/persona";

const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/lernpfade", label: "Lernpfade" },
  { href: "/mitmachen", label: "Mitmachen" },
];

export function Nav() {
  const pathname = usePathname();
  const { persona, openModal } = usePersona();
  const personaData = persona ? PERSONAS[persona] : null;

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-divider">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl font-light tracking-widest text-primary uppercase hover:opacity-80 transition-opacity"
        >
          MAJER
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 font-sans text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors hover:text-primary ${
                  pathname === href ? "text-primary font-medium" : "text-muted"
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
          className="flex items-center gap-2 font-sans text-xs border border-divider rounded-full px-3 py-1.5 hover:border-primary transition-colors"
        >
          {personaData ? (
            <>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: personaData.accent }}
              />
              <span className="text-muted">{personaData.label}</span>
            </>
          ) : (
            <span className="text-muted">Wer bist du?</span>
          )}
        </button>
      </nav>
    </header>
  );
}
