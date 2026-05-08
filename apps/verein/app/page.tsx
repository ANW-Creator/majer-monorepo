import Link from "next/link";
import { PillarCard } from "@/components/PillarCard";
import { AnimatedStats } from "@/components/AnimatedStats";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PILLARS } from "@/lib/curriculum";

const SIDEBAR_STEPS = [
  { nummer: "01", titel: "Selbst kennen" },
  { nummer: "02", titel: "Digitale Welt verstehen" },
  { nummer: "03", titel: "Werkzeuge nutzen" },
];

const STATS = [
  { wert: 30, einheit: "Seed-Fragen", note: "CC BY-SA 4.0 — frei nutzbar", prefix: "" },
  { wert: 1000, einheit: "Fragen gesamt", note: "Curriculum in Aufbau" },
  { wert: 4, einheit: "Zielgruppen", note: "Schüler · Student · Lehrer · Förderer" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="min-h-[90vh] max-w-5xl mx-auto px-6 flex flex-col justify-center pt-24 pb-20">
        <div className="md:grid md:grid-cols-[1fr_180px] md:gap-12 md:items-end">

          {/* Headline block */}
          <div>
            <p
              className="animate-in font-sans text-[10px] tracking-[0.35em] text-primary uppercase mb-10"
              style={{ animationDelay: "0ms" }}
            >
              Gemeinnütziger Verein · Berlin · Gegr. 2026
            </p>

            <h1
              className="animate-in font-display font-light text-ink"
              style={{
                fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                lineHeight: "0.93",
                letterSpacing: "-0.025em",
                animationDelay: "80ms",
              }}
            >
              Zuerst wer du bist.
              <br />
              Dann wie die&nbsp;Welt
              <br />
              funktioniert.
              <br />
              <em className="text-primary">Erst dann die Werkzeuge.</em>
            </h1>

            <div
              className="animate-in h-px bg-primary w-12 mt-10 mb-8"
              style={{ opacity: 0.35, animationDelay: "180ms" }}
            />

            <p
              className="animate-in font-sans text-base text-muted leading-[1.8] max-w-[500px]"
              style={{ animationDelay: "260ms" }}
            >
              MAJER ist das einzige deutschsprachige Bildungsangebot, das
              psychologische Selbststeuerung, algorithmische Aufklärung und
              digitale Kompetenz in einer klaren Reihenfolge verbindet.
            </p>

            <div
              className="animate-in mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "340ms" }}
            >
              <Link
                href="/lernpfade"
                className="inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-7 py-3.5 rounded-sm hover:bg-primary-light transition-colors duration-200"
              >
                Lernpfade entdecken
              </Link>
              <Link
                href="/mitmachen"
                className="inline-flex items-center gap-2 border border-primary/40 text-primary font-sans text-sm px-7 py-3.5 rounded-sm hover:border-primary hover:bg-primary/5 transition-colors duration-200"
              >
                Mitglied werden
              </Link>
            </div>
          </div>

          {/* Drei-Schritte-Sidebar (desktop only) */}
          <div
            className="animate-in hidden md:flex flex-col gap-7 border-l border-divider pl-8 pb-1"
            style={{ animationDelay: "280ms" }}
          >
            <p className="font-sans text-[9px] tracking-[0.3em] text-muted/60 uppercase mb-1">
              Das Konzept
            </p>
            {SIDEBAR_STEPS.map((s) => (
              <div key={s.nummer} className="flex items-start gap-3">
                <span className="font-sans text-[10px] text-primary/40 shrink-0 pt-px tabular-nums">
                  {s.nummer}
                </span>
                <span className="font-sans text-xs text-muted leading-snug">
                  {s.titel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PILLAR CARDS ─────────────────────────────────── */}
      <section className="border-y border-divider">
        <div className="max-w-5xl mx-auto px-6 border-b border-divider">
          <p className="font-sans text-[9px] tracking-[0.3em] text-muted uppercase py-4">
            Das Curriculum — hover für Beispiel-Fragen
          </p>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.nummer} pillar={pillar} compact />
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-6 border-t border-divider py-5 flex justify-end">
          <Link
            href="/lernpfade"
            className="font-sans text-xs text-primary hover:text-primary/70 transition-colors flex items-center gap-1.5"
          >
            Alle Lernpfade ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ─── WARUM DIE REIHENFOLGE ───────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <AnimatedSection>
          <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-20 items-start">
            {/* Pull-quote headline */}
            <div>
              <h2
                className="font-display font-light text-ink leading-[1.0]"
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Alle beginnen
                <br />
                <em className="text-primary">in der Mitte.</em>
                <br />
                Wir nicht.
              </h2>
            </div>

            {/* Explanatory text with left border */}
            <div className="mt-10 md:mt-0 border-l border-divider pl-8 md:pl-10 space-y-5">
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                Klicksafe warnt vor Gefahren. Chaos macht Schule baut Tools. JFF
                analysiert Gesellschaft. Alle machen wichtige Arbeit — aber alle
                beginnen in der Mitte.
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                Wer sich nicht selbst steuern kann, wird durch bessere Werkzeuge
                nicht freier — nur impulsiver. Und wer nicht versteht, wie
                Algorithmen Geld verdienen, kann ihre Auswirkungen nicht einordnen.
              </p>
              <p className="font-sans text-[15px] text-ink font-medium leading-[1.85]">
                MAJER beginnt beim Menschen. Das ist der Unterschied.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── ZAHLEN (animiert) ───────────────────────────── */}
      <section className="bg-primary text-paper overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedStats stats={STATS} />
        </div>
      </section>

      {/* ─── USP ZITAT ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <AnimatedSection>
          <blockquote className="relative border-l-2 border-primary pl-8 md:pl-12 max-w-3xl">
            {/* Decorative quotation mark */}
            <span
              className="absolute font-display font-light text-primary pointer-events-none select-none"
              style={{
                fontSize: "88px",
                lineHeight: 1,
                opacity: 0.1,
                top: "-20px",
                left: "-8px",
              }}
              aria-hidden="true"
            >
              "
            </span>

            <p
              className="font-display font-light text-ink italic leading-[1.55]"
              style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)" }}
            >
              PISA 2022: Deutschland auf Platz 25 von 37 OECD-Ländern bei
              digitaler Kompetenz. 42 % der Schüler in Berliner
              Brennpunktbezirken ohne digitale Grundkompetenzen.
            </p>

            <footer className="mt-6 font-sans text-[10px] tracking-[0.2em] text-muted uppercase">
              Berliner Bildungsbericht 2023 · PISA 2022 · ICILS 2023
            </footer>
          </blockquote>
        </AnimatedSection>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────── */}
      <section className="border-t border-b border-divider bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] text-muted uppercase mb-5">
              Mach mit
            </p>
            <h2
              className="font-display font-light text-ink leading-[1.05]"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Zusammen bauen wir
              <br />
              digitale Mündigkeit.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start gap-3 shrink-0">
            <p className="font-sans text-xs text-muted">
              Als Mitglied, Kooperationspartner oder Förderer.
            </p>
            <Link
              href="/mitmachen"
              className="inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-7 py-3.5 rounded-sm hover:bg-primary-light transition-colors duration-200"
            >
              Jetzt mitmachen
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-divider">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-xs text-muted">
          <span>
            MAJER Digitale Bildung & Medienkompetenz e.V. i.G. · Berlin
          </span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-ink transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink transition-colors">
              Datenschutz
            </Link>
            <Link href="/ueber-uns" className="hover:text-ink transition-colors">
              Über uns
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
