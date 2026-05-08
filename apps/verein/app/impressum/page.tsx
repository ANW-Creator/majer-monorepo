import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — MAJER",
};

export default function Impressum() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-4xl font-light text-ink mb-8">
        Impressum
      </h1>

      <div className="font-sans text-sm text-ink leading-loose space-y-6">
        <div>
          <p className="font-medium mb-1">Angaben gemäß §5 TMG</p>
          <p>MAJER Digitale Bildung & Medienkompetenz e.V. i.G.</p>
          <p>Vertreten durch: Heinrich Majer (Vorstand nach §26 BGB)</p>
          <p>Marlow, Mecklenburg-Vorpommern</p>
        </div>

        <div>
          <p className="font-medium mb-1">Kontakt</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:vorstand@digitale-bildung-berlin.de"
              className="underline hover:text-primary transition-colors"
            >
              vorstand@digitale-bildung-berlin.de
            </a>
          </p>
        </div>

        <div>
          <p className="font-medium mb-1">Hinweis zur Vereinsgründung</p>
          <p>
            Der Verein befindet sich in Gründung (i.G.). Die Eintragung in das
            Vereinsregister ist beantragt. Eine Registernummer liegt noch nicht
            vor.
          </p>
        </div>

        <div>
          <p className="font-medium mb-1">
            Verantwortlich für Inhalte nach §18 Abs. 2 MStV
          </p>
          <p>Heinrich Majer, Marlow, Mecklenburg-Vorpommern</p>
        </div>
      </div>
    </section>
  );
}
