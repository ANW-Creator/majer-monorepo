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
    beitrag: "ab 5 €/Monat",
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
    beitrag: "ab 10 €/Monat",
    farbe: "#1a3d4d",
    punkte: [
      "Alles aus Fördermitglied",
      "Mitwirkung an Inhalten & Workshops",
      "Stimmrecht auf Mitgliederversammlung",
      "Zugang zu internen Arbeitsgruppen",
    ],
  },
  {
    art: "Kooperation",
    beitrag: "Individuelle Vereinbarung",
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
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="font-sans text-xs tracking-widest text-muted uppercase mb-4">
          Gemeinschaft
        </p>
        <h1 className="font-display text-5xl font-light text-ink mb-4 leading-tight">
          Mitmachen
        </h1>
        <div className="majer-rule max-w-[3rem] mb-6" />
        <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed">
          MAJER lebt von Menschen, die verstehen, dass digitale Bildung mehr
          ist als Tool-Training. Werde Teil davon — als Mitglied,
          Kooperationspartner oder Fördergeber.
        </p>
      </section>

      {/* Status-Hinweis */}
      <section className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 font-sans text-sm text-amber-900">
          <strong>Hinweis:</strong> MAJER befindet sich aktuell in der
          Vereinsgründung (e.V. i.G.). Mitgliedsanträge werden bereits
          entgegengenommen. Spendenquittungen können erst nach offizieller
          Gemeinnützigkeitsanerkennung ausgestellt werden.
        </div>
      </section>

      {/* Mitgliedsarten */}
      <section className="bg-surface border-y border-divider py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-light text-ink mb-12">
            Mitgliedsarten
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {MITGLIED_ARTEN.map((m) => (
              <div
                key={m.art}
                className="bg-paper border border-divider rounded-sm p-6 flex flex-col gap-4"
              >
                <div>
                  <div
                    className="font-sans text-xs tracking-widest uppercase mb-1"
                    style={{ color: m.farbe }}
                  >
                    {m.art}
                  </div>
                  <div className="font-display text-2xl font-light text-ink">
                    {m.beitrag}
                  </div>
                </div>
                <div className="majer-rule" />
                <ul className="flex flex-col gap-2">
                  {m.punkte.map((p) => (
                    <li
                      key={p}
                      className="font-sans text-xs text-muted flex items-start gap-2"
                    >
                      <span className="mt-0.5 shrink-0" style={{ color: m.farbe }}>
                        ↗
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt-CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-light text-ink mb-6">
            Interesse?
          </h2>
          <p className="font-sans text-muted leading-relaxed mb-6">
            Schreib uns eine E-Mail. Wir melden uns innerhalb von 2 Werktagen.
          </p>
          <a
            href="mailto:vorstand@digitale-bildung-berlin.de"
            className="inline-flex items-center gap-2 bg-primary text-paper font-sans text-sm px-6 py-3 rounded-sm hover:bg-primary-light transition-colors"
          >
            vorstand@digitale-bildung-berlin.de
          </a>
          <p className="font-sans text-xs text-muted mt-4">
            Oder direkt auf Instagram:{" "}
            <a
              href="https://instagram.com/majer.bildung"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink transition-colors"
            >
              @majer.bildung
            </a>
          </p>
        </div>
      </section>

      {/* Warum jetzt */}
      <section className="bg-primary text-paper py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-light mb-6">
              Warum jetzt?
            </h2>
            <p className="font-sans text-paper/80 leading-relaxed mb-4">
              Oktober 2026 ist der Stichtag für den Berliner Landesjugendplan —
              unsere erste große Förderchance. Dafür brauchen wir einen
              dokumentierten Workshop, eine Schulkooperation und eine aktive
              Mitgliederstruktur.
            </p>
            <p className="font-sans text-paper/80 leading-relaxed">
              Wer jetzt dabei ist, baut MAJER mit auf — und ist Teil von etwas,
              das in Berlin noch nicht existiert.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
