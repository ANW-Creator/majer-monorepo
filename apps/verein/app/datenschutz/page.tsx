import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — MAJER",
};

export default function Datenschutz() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-4xl font-light text-ink mb-8">
        Datenschutzerklärung
      </h1>

      <div className="font-sans text-sm text-muted leading-loose space-y-6">
        <div>
          <h2 className="font-medium text-ink mb-2">1. Verantwortlicher</h2>
          <p>
            MAJER Digitale Bildung & Medienkompetenz e.V. i.G., vertreten durch
            Heinrich Majer, Marlow, Mecklenburg-Vorpommern.
            Kontakt: vorstand@digitale-bildung-berlin.de
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">
            2. Reichweitenmessung (Plausible Analytics)
          </h2>
          <p>
            Wir nutzen Plausible Analytics, ein datenschutzfreundliches
            Analysetool, das keine Cookies setzt und keine personenbezogenen
            Daten speichert. Es werden keine Querverweise zwischen
            Websitebesuchen erstellt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse). Anbieter: Plausible Insights OÜ,
            Mustamäe tee 3a, 10615 Tallinn, Estland.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">3. Hosting</h2>
          <p>
            Diese Website wird auf Servern von Hostinger (EU-Region) gehostet.
            Mit Hostinger besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß
            Art. 28 DSGVO.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">4. Cookies</h2>
          <p>
            Diese Website setzt ausschließlich technisch notwendige Cookies zur
            Speicherung deiner Persona-Auswahl (lokale Präferenz). Es werden
            keine Tracking-Cookies gesetzt.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">5. Deine Rechte</h2>
          <p>
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            und Einschränkung der Verarbeitung deiner personenbezogenen Daten.
            Beschwerden richten sich an: LfDI Mecklenburg-Vorpommern oder
            BlnBDI Berlin.
          </p>
        </div>

        <p className="text-xs text-muted/60 pt-4">
          Stand: Mai 2026 · Diese Datenschutzerklärung wird laufend aktualisiert.
        </p>
      </div>
    </section>
  );
}
