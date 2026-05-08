import Link from "next/link";

const DREI_SCHRITTE = [
  {
    nummer: "01",
    titel: "Selbst kennen",
    text: "Wer bist du, bevor du ein Werkzeug in die Hand nimmst? Impulssteuerung, innere Antreiber, die 3-Sekunden-Pause — auf Basis der Transaktionsanalyse.",
  },
  {
    nummer: "02",
    titel: "Digitale Welt verstehen",
    text: "Wie verdient TikTok Geld mit deiner Aufmerksamkeit? Wie entstehen Filterblasen? Wir erklären die Mechanik — nicht die Moral.",
  },
  {
    nummer: "03",
    titel: "Werkzeuge nutzen",
    text: "Erst wenn du weißt, wer du bist und wie die Welt funktioniert, macht es Sinn, Werkzeuge zu bauen. KI, Automatisierung, digitale Produkte.",
  },
];

const ZAHLEN = [
  { wert: "30", einheit: "Lernpfade", note: "CC BY-SA 4.0 — frei nutzbar" },
  { wert: "1000", einheit: "Fragen", note: "Curriculum in Aufbau" },
  {
    wert: "4",
    einheit: "Zielgruppen",
    note: "Schüler:in · Student:in · Lehrer:in · Förderer:in",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <p className="font-sans text-sm tracking-widest text-muted uppercase mb-6">
            Gemeinnütziger Verein · Berlin
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight text-ink mb-4">
            Zuerst wer du bist.
            <br />
            Dann wie die Welt
            <br />
            funktioniert.
            <br />
            <em className="text-primary">Erst dann die Werkzeuge.</em>
          </h1>
          <div className="majer-rule my-6 max-w-xs" />
          <p className="font-sans text-lg text-muted leading-relaxed max-w-xl">
            MAJER ist das einzige deutschsprachige Bildungsangebot, das
            psychologische Selbststeuerung, algorithmische Aufklärung und
            digitale Kompetenz in einer klaren Reihenfolge verbindet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lernpfade"
              className="inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-6 py-3 rounded-sm hover:bg-primary-light transition-colors"
            >
              Lernpfade entdecken
            </Link>
            <Link
              href="/mitmachen"
              className="inline-flex items-center gap-2 border border-primary text-primary font-sans text-sm px-6 py-3 rounded-sm hover:bg-primary hover:text-paper transition-colors"
            >
              Mitglied werden
            </Link>
          </div>
        </div>
      </section>

      {/* Drei Schritte */}
      <section className="bg-surface border-y border-divider py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-light text-ink mb-12">
            Das Konzept
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {DREI_SCHRITTE.map((schritt) => (
              <div key={schritt.nummer} className="flex flex-col gap-3">
                <span className="font-sans text-xs tracking-widest text-muted uppercase">
                  Schritt {schritt.nummer}
                </span>
                <h3 className="font-display text-2xl font-light text-primary">
                  {schritt.titel}
                </h3>
                <div className="majer-rule max-w-[3rem]" />
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {schritt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum die Reihenfolge zählt */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-light text-ink mb-6">
            Warum die Reihenfolge zählt
          </h2>
          <p className="font-sans text-muted leading-relaxed mb-4">
            Klicksafe warnt vor Gefahren. Chaos macht Schule baut Tools. JFF
            analysiert Gesellschaft. Alle machen wichtige Arbeit — aber alle
            beginnen in der Mitte.
          </p>
          <p className="font-sans text-muted leading-relaxed mb-4">
            Wer sich nicht selbst steuern kann, wird durch bessere Werkzeuge
            nicht freier — nur impulsiver. Und wer nicht versteht, wie
            Algorithmen Geld verdienen, kann ihre Auswirkungen nicht einordnen.
          </p>
          <p className="font-sans text-muted leading-relaxed">
            MAJER beginnt beim Menschen. Das ist der Unterschied.
          </p>
        </div>
      </section>

      {/* Zahlen */}
      <section className="bg-primary text-paper py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {ZAHLEN.map((z) => (
              <div key={z.einheit}>
                <div className="font-display text-5xl font-light mb-1">
                  {z.wert}
                </div>
                <div className="font-sans text-sm font-medium mb-1 text-paper/90">
                  {z.einheit}
                </div>
                <div className="font-sans text-xs text-paper/60">{z.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP-Zitat */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <blockquote className="max-w-3xl">
          <div className="majer-rule max-w-[2rem] mb-6" />
          <p className="font-display text-2xl md:text-3xl font-light text-ink leading-relaxed italic">
            „PISA 2022: Deutschland auf Platz 25 von 37 OECD-Ländern bei
            digitaler Kompetenz. 42 % der Schüler in Berliner
            Brennpunktbezirken ohne digitale Grundkompetenzen."
          </p>
          <footer className="mt-4 font-sans text-xs text-muted">
            Berliner Bildungsbericht 2023 · PISA 2022 · ICILS 2023
          </footer>
        </blockquote>
      </section>

      {/* CTA-Banner */}
      <section className="bg-surface border-t border-divider py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-light text-ink mb-2">
              Zusammen bauen wir digitale Mündigkeit.
            </h2>
            <p className="font-sans text-sm text-muted">
              Als Mitglied, Kooperationspartner oder Förderer.
            </p>
          </div>
          <Link
            href="/mitmachen"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-6 py-3 rounded-sm hover:bg-primary-light transition-colors"
          >
            Mitmachen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-divider py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-xs text-muted">
          <span>
            MAJER Digitale Bildung & Medienkompetenz e.V. i.G. · Berlin
          </span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-ink transition-colors">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-ink transition-colors"
            >
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
