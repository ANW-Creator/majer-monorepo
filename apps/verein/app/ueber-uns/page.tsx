import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns — MAJER",
  description:
    "MAJER ist ein gemeinnütziger Berliner Verein für digitale Bildung. Wir verbinden Transaktionsanalyse, algorithmische Aufklärung und digitale Kompetenz.",
};

const WERTE = [
  {
    titel: "Reihenfolge vor Werkzeug",
    text: "Kein Tool ohne Selbstkenntnis. Kein Algorithmus-Verständnis ohne psychologisches Fundament. Die Reihenfolge ist unser Produkt.",
  },
  {
    titel: "Aufklärung statt Schutz",
    text: "Wir moralisieren nicht. Wir erklären, wie TikTok Geld verdient — und was das mit dir macht. Nachhaltige Bildung kommt von innen.",
  },
  {
    titel: "Unabhängigkeit",
    text: "Keine Konzernfinanzierung. Keine EU-Regulation-Logik. Nur so können wir sagen, was wahr ist — auch wenn es unbequem ist.",
  },
  {
    titel: "Open Source",
    text: "30 Lernpfade unter CC BY-SA 4.0. Unser Wissen gehört allen. Wer es weitergibt, macht uns stärker.",
  },
];

const QUELLEN = [
  {
    quelle: "Transaktionsanalyse",
    autor: "Eric Berne, 1964",
    note:
      "In DE-Erwachsenenbildung, Konfliktmoderation und Polizeiausbildung etabliert. Von uns für 14-Jährige zugänglich gemacht.",
  },
  {
    quelle: "OECD Learning Compass 2030",
    autor: "OECD, 2019",
    note:
      "Curricularer Rahmen: Handlungskompetenz, Selbstregulation und Verantwortung als Lernziele.",
  },
  {
    quelle: "ICILS 2023",
    autor: "IEA, 2023",
    note:
      "40 % der Achtklässler in DE haben nur rudimentäre digitale Kompetenzen. Unser Ausgangspunkt.",
  },
];

export default function UeberUns() {
  return (
    <>
      {/* ─── HEADER ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="font-sans text-[10px] tracking-[0.35em] text-primary uppercase mb-10">
          Wer wir sind
        </p>
        <h1
          className="font-display font-light text-ink leading-[0.95] mb-10"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Über
          <br />
          <em className="text-primary">MAJER.</em>
        </h1>
        <div className="h-px bg-primary w-12 mb-10" style={{ opacity: 0.3 }} />
        <p className="font-sans text-base md:text-[17px] text-muted leading-[1.8] max-w-[540px]">
          MAJER Digitale Bildung & Medienkompetenz e.V. ist ein gemeinnütziger
          Verein in Gründung mit Sitz in Marlow (Mecklenburg-Vorpommern) und
          Tätigkeitsschwerpunkt Berlin.
        </p>
      </section>

      {/* ─── MISSION ────────────────────────────────────── */}
      <section className="border-y border-divider">
        <div className="max-w-5xl mx-auto px-6">
          <div className="md:grid md:grid-cols-[1fr_1.6fr] md:gap-20 items-start py-24">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
                Mission
              </p>
              <h2
                className="font-display font-light text-ink leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Nicht warnen.
                <br />
                <em className="text-primary">Erklären.</em>
              </h2>
            </div>
            <div className="mt-10 md:mt-0 border-l border-divider pl-8 md:pl-10 space-y-5">
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                Wir begleiten Jugendliche und junge Erwachsene in einer Welt,
                die von Algorithmen, Aufmerksamkeitsökonomie und Künstlicher
                Intelligenz geprägt wird — nicht indem wir warnen, sondern
                indem wir erklären.
              </p>
              <p className="font-sans text-[15px] text-muted leading-[1.85]">
                Unser Ansatz ist einzigartig: Wir beginnen nicht mit Tools,
                nicht mit Gesellschaftsanalyse, nicht mit Verboten. Wir
                beginnen beim Menschen. Mit der Frage:{" "}
                <em>Wer bist du, bevor du ein Werkzeug in die Hand nimmst?</em>
              </p>
              <p className="font-sans text-[15px] text-ink font-medium leading-[1.85]">
                Die Antwort — verankert in der Transaktionsanalyse nach Eric
                Berne — ist das Fundament für alles andere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WERTE ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-16">
          Unsere Werte
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-divider">
          {WERTE.map((w) => (
            <div
              key={w.titel}
              className="group bg-paper hover:bg-surface transition-colors duration-300 p-8 md:p-10"
            >
              <h3
                className="font-display font-light text-primary mb-5 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)" }}
              >
                {w.titel}
              </h3>
              <div className="h-px bg-primary mb-5 opacity-20 w-8 group-hover:w-14 transition-all duration-300" />
              <p className="font-sans text-sm text-muted leading-[1.85]">
                {w.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WISSENSCHAFTLICHE BASIS ────────────────────── */}
      <section className="border-y border-divider bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-14">
            Wissenschaftliche Grundlage
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-divider">
            {QUELLEN.map((q) => (
              <div key={q.quelle} className="bg-surface p-7 md:p-8">
                <div
                  className="font-display font-light text-ink mb-2 leading-tight"
                  style={{ fontSize: "1.2rem" }}
                >
                  {q.quelle}
                </div>
                <div className="font-sans text-[10px] tracking-wide text-primary uppercase mb-4">
                  {q.autor}
                </div>
                <div className="h-px bg-primary mb-4" style={{ opacity: 0.2, width: "24px" }} />
                <p className="font-sans text-xs text-muted leading-[1.8]">
                  {q.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GRÜNDER ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-20 items-start">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
              Gründer
            </p>
            <div
              className="font-display font-light text-ink leading-tight mb-2"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
            >
              Heinrich
              <br />
              Majer
            </div>
            <div className="font-sans text-[10px] tracking-widest text-primary uppercase mt-3">
              Vorstand nach §26 BGB · Berlin
            </div>
          </div>
          <div className="mt-10 md:mt-0 border-l border-divider pl-8 md:pl-10 space-y-5">
            <p className="font-sans text-[15px] text-muted leading-[1.85]">
              Die Idee hinter MAJER entstand aus einer einfachen Beobachtung:
              Digitale Bildung in Deutschland erklärt entweder Gefahren oder
              Werkzeuge — aber niemand fragt zuerst, wer der Mensch ist, der
              damit umgehen soll.
            </p>
            <p className="font-sans text-[15px] text-muted leading-[1.85]">
              MAJER füllt diese Lücke. Mit einem Konzept, das skalierbar,
              unabhängig und radikal ehrlich ist.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-primary text-paper">
        <div className="max-w-5xl mx-auto px-6 py-16 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] text-paper/50 uppercase mb-5">
              Mitmachen
            </p>
            <h2
              className="font-display font-light text-paper leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.015em" }}
            >
              Du willst Teil von MAJER werden?
            </h2>
          </div>
          <div className="mt-8 md:mt-0 shrink-0">
            <Link
              href="/mitmachen"
              className="inline-flex items-center gap-2 bg-paper text-primary font-sans text-sm px-7 py-3.5 rounded-sm hover:bg-paper/90 transition-colors duration-200"
            >
              Mitglied, Partner oder Förderer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
