import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitmachen — MAJER",
  description:
    "Werde Mitglied bei MAJER. Als Fördermitglied, aktives Mitglied oder Kooperationspartner.",
};

const MITGLIED_ARTEN = [
  {
    art: "Fördermitglied",
    beitrag: "ab 5 €",
    periode: "pro Monat",
    farbe: "#f59e0b",
    punkte: [
      "Unterstützt unsere Workshops in Berlin",
      "Zugang zu Mitglieder-Updates",
      "Recht auf Mitgliederversammlung",
      "Spendenquittung (nach Gemeinnützigkeitsanerkennung)",
    ],
  },
  {
    art: "Aktives Mitglied",
    beitrag: "ab 10 €",
    periode: "pro Monat",
    farbe: "#1a3d4d",
    featured: true,
    punkte: [
      "Alles aus Fördermitglied",
      "Mitwirkung an Inhalten & Workshops",
      "Stimmrecht auf Mitgliederversammlung",
      "Zugang zu internen Arbeitsgruppen",
    ],
  },
  {
    art: "Kooperation",
    beitrag: "Individuell",
    periode: "nach Vereinbarung",
    farbe: "#14b8a6",
    punkte: [
      "Schulen, Bildungsträger, Forschungseinrichtungen",
      "Co-Workshops in deiner Einrichtung",
      "Gemeinsame Förderanträge möglich",
      "Wissenstransfer beidseitig",
    ],
  },
];

export default function Mitmachen() {
  return (
    <>
      {/* ─── HEADER ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="font-sans text-[10px] tracking-[0.35em] text-primary uppercase mb-10">
          Gemeinschaft
        </p>
        <h1
          className="font-display font-light text-ink leading-[0.95] mb-10"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Mitmachen.
        </h1>
        <div className="h-px bg-primary w-12 mb-10" style={{ opacity: 0.3 }} />
        <p className="font-sans text-base md:text-[17px] text-muted leading-[1.8] max-w-[540px]">
          MAJER lebt von Menschen, die verstehen, dass digitale Bildung mehr
          ist als Tool-Training. Werde Teil davon — als Mitglied,
          Kooperationspartner oder Fördergeber.
        </p>
      </section>

      {/* ─── STATUS-HINWEIS ──────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border-l-2 border-amber-400 bg-amber-50/60 pl-5 py-4 pr-5">
          <p className="font-sans text-[13px] text-amber-900 leading-[1.7]">
            <span className="font-medium">Vereinsgründung läuft:</span> MAJER
            befindet sich aktuell in der Gründungsphase (e.V. i.G.).
            Mitgliedsanträge werden bereits entgegengenommen.
            Spendenquittungen folgen nach offizieller
            Gemeinnützigkeitsanerkennung.
          </p>
        </div>
      </div>

      {/* ─── MITGLIEDSARTEN ──────────────────────────────── */}
      <section className="border-y border-divider">
        <div className="max-w-5xl mx-auto px-6 border-b border-divider">
          <p className="font-sans text-[9px] tracking-[0.3em] text-muted uppercase py-4">
            Mitgliedsarten — wähle was zu dir passt
          </p>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {MITGLIED_ARTEN.map((m) => (
            <div
              key={m.art}
              className={`group relative px-8 py-14 flex flex-col gap-0 transition-colors duration-300 ${
                m.featured ? "bg-primary text-paper" : "bg-surface hover:bg-paper"
              }`}
            >
              {/* Type label */}
              <span
                className={`font-sans text-[10px] tracking-[0.28em] uppercase block mb-5 ${
                  m.featured ? "text-paper/50" : ""
                }`}
                style={m.featured ? {} : { color: m.farbe }}
              >
                {m.art}
              </span>

              {/* Price */}
              <div className="mb-1">
                <span
                  className={`font-display font-light leading-none ${
                    m.featured ? "text-paper" : "text-ink"
                  }`}
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
                >
                  {m.beitrag}
                </span>
              </div>
              <div
                className={`font-sans text-[11px] uppercase tracking-widest mb-8 ${
                  m.featured ? "text-paper/50" : "text-muted"
                }`}
              >
                {m.periode}
              </div>

              <div
                className={`h-px w-8 mb-8 group-hover:w-14 transition-all duration-300 ${
                  m.featured ? "bg-paper/20" : "bg-primary opacity-20"
                }`}
              />

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1">
                {m.punkte.map((p) => (
                  <li
                    key={p}
                    className={`font-sans text-xs flex items-start gap-3 leading-[1.6] ${
                      m.featured ? "text-paper/75" : "text-muted"
                    }`}
                  >
                    <span
                      className="shrink-0 mt-0.5"
                      style={m.featured ? { color: "rgba(255,255,255,0.4)" } : { color: m.farbe }}
                    >
                      ↗
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WARUM JETZT ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-20 items-start">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
              Warum jetzt
            </p>
            <h2
              className="font-display font-light text-ink leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Oktober 2026
              <br />
              ist der{" "}
              <em className="text-primary">Stichtag.</em>
            </h2>
          </div>
          <div className="mt-10 md:mt-0 border-l border-divider pl-8 md:pl-10 space-y-5">
            <p className="font-sans text-[15px] text-muted leading-[1.85]">
              Oktober 2026 ist der Stichtag für den Berliner Landesjugendplan —
              unsere erste große Förderchance. Dafür brauchen wir einen
              dokumentierten Workshop, eine Schulkooperation und eine aktive
              Mitgliederstruktur.
            </p>
            <p className="font-sans text-[15px] text-ink font-medium leading-[1.85]">
              Wer jetzt dabei ist, baut MAJER mit auf — und ist Teil von etwas,
              das in Berlin noch nicht existiert.
            </p>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ────────────────────────────────────── */}
      <section className="border-t border-b border-divider bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] text-muted uppercase mb-5">
              Interesse?
            </p>
            <h2
              className="font-display font-light text-ink leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Schreib uns.
              <br />
              Wir antworten in 2 Werktagen.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start gap-3 shrink-0">
            <a
              href="mailto:vorstand@digitale-bildung-berlin.de"
              className="inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-7 py-3.5 rounded-sm hover:bg-primary-light transition-colors duration-200"
            >
              vorstand@digitale-bildung-berlin.de
            </a>
            <p className="font-sans text-xs text-muted">
              Oder auf Instagram:{" "}
              <a
                href="https://instagram.com/majer.bildung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @majer.bildung
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
