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

export default function UeberUns() {
  return (
    <>
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="font-sans text-xs tracking-widest text-muted uppercase mb-4">
          Wer wir sind
        </p>
        <h1 className="font-display text-5xl font-light text-ink mb-4 leading-tight">
          Über MAJER
        </h1>
        <div className="majer-rule max-w-[3rem] mb-6" />
        <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed">
          MAJER Digitale Bildung & Medienkompetenz e.V. ist ein gemeinnütziger
          Verein in Gründung mit Sitz in Marlow (Mecklenburg-Vorpommern) und
          Tätigkeitsschwerpunkt Berlin.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-surface border-y border-divider py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-light text-ink mb-6">
              Unsere Mission
            </h2>
            <p className="font-sans text-muted leading-relaxed mb-4">
              Wir begleiten Jugendliche und junge Erwachsene in einer Welt, die
              von Algorithmen, Aufmerksamkeitsökonomie und Künstlicher
              Intelligenz geprägt wird — nicht indem wir warnen, sondern indem
              wir erklären.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-4">
              Unser Ansatz ist einzigartig: Wir beginnen nicht mit Tools, nicht
              mit Gesellschaftsanalyse, nicht mit Verboten. Wir beginnen beim
              Menschen. Mit der Frage: <em>Wer bist du, bevor du ein Werkzeug
              in die Hand nimmst?</em>
            </p>
            <p className="font-sans text-muted leading-relaxed">
              Die Antwort auf diese Frage — verankert in der Transaktionsanalyse
              nach Eric Berne — ist das Fundament für alles andere.
            </p>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-light text-ink mb-12">
          Unsere Werte
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {WERTE.map((w) => (
            <div key={w.titel} className="flex flex-col gap-3">
              <h3 className="font-display text-xl font-light text-primary">
                {w.titel}
              </h3>
              <div className="majer-rule max-w-[2rem]" />
              <p className="font-sans text-sm text-muted leading-relaxed">
                {w.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wissenschaftliche Basis */}
      <section className="bg-surface border-y border-divider py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-light text-ink mb-8">
            Wissenschaftliche Grundlage
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((q) => (
              <div
                key={q.quelle}
                className="border border-divider p-5 rounded-sm"
              >
                <div className="font-display text-lg font-light text-ink mb-1">
                  {q.quelle}
                </div>
                <div className="font-sans text-xs text-muted mb-3">
                  {q.autor}
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  {q.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gründer */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-light text-ink mb-8">
          Gründer
        </h2>
        <div className="max-w-xl">
          <div className="font-display text-2xl font-light text-ink mb-1">
            Heinrich Majer
          </div>
          <div className="font-sans text-xs text-muted mb-4">
            Vorstand nach §26 BGB · Berlin
          </div>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            Die Idee hinter MAJER entstand aus einer einfachen Beobachtung:
            Digitale Bildung in Deutschland erklärt entweder Gefahren oder
            Werkzeuge — aber niemand fragt zuerst, wer der Mensch ist, der
            damit umgehen soll.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed">
            MAJER füllt diese Lücke. Mit einem Konzept, das skalierbar,
            unabhängig und radikal ehrlich ist.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-paper py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-light mb-1">
              Du willst Teil von MAJER werden?
            </p>
            <p className="font-sans text-sm text-paper/70">
              Als Mitglied, Kooperationspartner oder Förder­geber.
            </p>
          </div>
          <Link
            href="/mitmachen"
            className="shrink-0 inline-flex items-center gap-2 bg-paper text-primary font-sans text-sm px-6 py-3 rounded-sm hover:bg-paper/90 transition-colors"
          >
            Mitmachen
          </Link>
        </div>
      </section>
    </>
  );
}
