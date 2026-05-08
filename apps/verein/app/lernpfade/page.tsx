import type { Metadata } from "next";
import Link from "next/link";
import { PillarCard } from "@/components/PillarCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CurriculumTimeline } from "@/components/CurriculumTimeline";
import { PILLARS } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Lernpfade — MAJER",
  description:
    "Das MAJER-Curriculum: 1000 Fragen in drei Leveln — Selbsterkenntnis, Digitale Welt, Werkzeuge. Aufgebaut auf Transaktionsanalyse und OECD Compass 2030.",
};

const OUTCOMES_BY_LEVEL = [
  {
    level: "Nach Level 01",
    titel: "Du kennst dich selbst",
    punkte: [
      "Du erkennst automatische Reaktionen bevor sie passieren",
      "Du weißt, welcher Ich-Zustand in dir spricht",
      "Du kannst die 3-Sekunden-Pause anwenden",
      "Du unterscheidest echte Entscheidung von Impuls",
    ],
  },
  {
    level: "Nach Level 02",
    titel: "Du siehst die Mechanik",
    punkte: [
      "Du kannst erklären, wie TikTok Geld verdient",
      "Du erkennst Filterblasen in deinem eigenen Feed",
      "Du weißt, was Surveillance Capitalism bedeutet",
      "Du kannst KI-Halluzinationen einordnen",
    ],
  },
  {
    level: "Nach Level 03",
    titel: "Du baust mit Verstand",
    punkte: [
      "Du kannst eine App-Idee ohne Code umsetzen",
      "Du schreibst Prompts die tatsächlich funktionieren",
      "Du weißt, wann KI hilft und wann nicht",
      "Du verstehst Automatisierung auf konzeptueller Ebene",
    ],
  },
];

export default function Lernpfade() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="min-h-[70vh] max-w-5xl mx-auto px-6 flex flex-col justify-center pt-24 pb-16">
        <p
          className="animate-in font-sans text-[10px] tracking-[0.35em] text-primary uppercase mb-10"
          style={{ animationDelay: "0ms" }}
        >
          Curriculum · 1000 Fragen · 3 Level
        </p>
        <h1
          className="animate-in font-display font-light text-ink"
          style={{
            fontSize: "clamp(2.75rem, 6.5vw, 6rem)",
            lineHeight: "0.93",
            letterSpacing: "-0.025em",
            animationDelay: "80ms",
          }}
        >
          Lernpfade.
          <br />
          <em className="text-primary">In dieser Reihenfolge.</em>
        </h1>
        <div
          className="animate-in h-px bg-primary w-12 mt-10 mb-8"
          style={{ opacity: 0.35, animationDelay: "180ms" }}
        />
        <p
          className="animate-in font-sans text-base text-muted leading-[1.8] max-w-[520px]"
          style={{ animationDelay: "260ms" }}
        >
          1000 Fragen, aufgeteilt in drei Level. Jede Frage ist Grundlage für
          ein Video, eine Lerneinheit und einen Workshop-Block. Die Reihenfolge
          ist kein Zufall — sie ist das Produkt.
        </p>
      </section>

      {/* ─── PILLAR CARDS ─────────────────────────────────── */}
      <section className="border-y border-divider">
        <div className="max-w-5xl mx-auto px-6 border-b border-divider">
          <p className="font-sans text-[9px] tracking-[0.3em] text-muted uppercase py-4">
            Die drei Level — hover für Details
          </p>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.nummer} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* ─── SEQUENZ-ERKLÄRUNG ────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <AnimatedSection>
          <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-20 items-start">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
                Warum diese Reihenfolge?
              </p>
              <h2
                className="font-display font-light text-ink leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Mensch zuerst.
                <br />
                <em className="text-primary">Werkzeug zuletzt.</em>
              </h2>
            </div>
            <div className="mt-10 md:mt-0 border-l border-divider pl-8 md:pl-10 space-y-5">
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                Die meisten Bildungsangebote beginnen in der Mitte — mit Tools,
                Warnungen oder Gesellschaftsanalyse. Das Problem: Wer sich
                selbst nicht versteht, nutzt bessere Werkzeuge impulsiver, nicht
                bewusster.
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                MAJER setzt die Reihenfolge zurück auf Null. Selbsterkenntnis
                zuerst — weil alles andere darauf aufbaut. Dann das Verständnis
                der Mechaniken. Erst dann die Kompetenz, Werkzeuge bewusst zu
                nutzen.
              </p>
              <p className="font-sans text-[15px] text-ink font-medium leading-[1.85]">
                Diese Sequenz ist unser Curriculum, unser USP und unser Versprechen.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="border-y border-divider bg-surface overflow-x-auto">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-14">
              Der Weg zur digitalen Mündigkeit
            </p>
          </AnimatedSection>
          <CurriculumTimeline />
        </div>
      </section>

      {/* ─── OUTCOMES ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <AnimatedSection>
          <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-14">
            Was du nach jedem Level kannst
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-px bg-divider">
          {OUTCOMES_BY_LEVEL.map((o, i) => (
            <AnimatedSection key={o.level} delay={i * 0.12}>
              <div className="bg-paper p-8 md:p-10 h-full group hover:bg-surface transition-colors duration-300">
                <p className="font-sans text-[10px] tracking-[0.28em] text-primary uppercase mb-4">
                  {o.level}
                </p>
                <h3
                  className="font-display font-light text-ink mb-6 leading-tight"
                  style={{ fontSize: "1.35rem" }}
                >
                  {o.titel}
                </h3>
                <div className="h-px bg-primary mb-6 opacity-20 w-8 group-hover:w-14 transition-all duration-300" />
                <ul className="flex flex-col gap-3">
                  {o.punkte.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-sans text-xs text-muted leading-[1.7]">
                      <span className="text-primary/50 shrink-0 mt-0.5">↗</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── STATUS + CTA ─────────────────────────────────── */}
      <section className="border-t border-divider bg-primary text-paper">
        <div className="max-w-5xl mx-auto px-6 py-16 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] text-paper/50 uppercase mb-5">
              Status
            </p>
            <h2
              className="font-display font-light text-paper leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Die Lernpfade
              <br />
              werden aufgebaut.
            </h2>
            <p className="font-sans text-sm text-paper/60 mt-4 max-w-sm leading-relaxed">
              Aktuell 30 von 1000 Fragen definiert. Die ersten Workshop-Blöcke
              entstehen bis Herbst 2026. Mitglieder werden als erste informiert.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start gap-3 shrink-0">
            <Link
              href="/mitmachen"
              className="inline-flex items-center gap-2 bg-paper text-primary font-sans text-sm px-7 py-3.5 rounded-sm hover:bg-paper/90 transition-colors duration-200"
            >
              Jetzt Mitglied werden
            </Link>
            <p className="font-sans text-xs text-paper/40">
              Frühzugangsmitglieder begleiten den Aufbau.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
