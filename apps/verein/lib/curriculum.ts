export type Frage = {
  nummer: string;
  frage: string;
};

export type Pillar = {
  nummer: "01" | "02" | "03";
  titel: string;
  untertitel: string;
  beschreibung: string;
  basis: string;
  outcomes: string[];
  fragen: Frage[];
  gesamtFragen: number;
};

export const PILLARS: Pillar[] = [
  {
    nummer: "01",
    titel: "Selbst kennen",
    untertitel: "Wer bist du, bevor du ein Werkzeug in die Hand nimmst?",
    beschreibung:
      "Psychologische Selbststeuerung, Impulskontrolle und die Grundlage bewussten Handelns — auf Basis der Transaktionsanalyse nach Eric Berne.",
    basis: "Transaktionsanalyse · Eric Berne · Stoische Prinzipien · Kant",
    outcomes: [
      "Erkennst deine automatischen Reaktionen",
      "Kannst die 3-Sekunden-Pause anwenden",
      "Verstehst, wie Dopamin-Schleifen entstehen",
      "Unterscheidest Reaktion von Entscheidung",
    ],
    fragen: [
      { nummer: "#001", frage: "Was ist Transaktionsanalyse — und wie hilft sie im digitalen Alltag?" },
      { nummer: "#002", frage: "Was sind die drei Ich-Zustände nach Eric Berne?" },
      { nummer: "#003", frage: "Wie erkenne ich meinen eigenen Ich-Zustand in einem Moment?" },
      { nummer: "#004", frage: "Was ist die 3-Sekunden-Pause — und wie übt man sie?" },
      { nummer: "#005", frage: "Warum wirken Nachrichten anders auf uns als direkte Gespräche?" },
      { nummer: "#006", frage: "Was passiert in meinem Gehirn, wenn ich einen Like bekomme?" },
      { nummer: "#007", frage: "Ist FOMO (Fear of Missing Out) ein echtes Gefühl oder ein Algorithmus-Produkt?" },
      { nummer: "#008", frage: "Wie hängen Schlafmangel und schlechte Entscheidungen zusammen?" },
      { nummer: "#009", frage: "Was ist der Unterschied zwischen Reaktion und Entscheidung?" },
      { nummer: "#010", frage: "Selbstvergleich auf Instagram — wie erkenne ich es, wie steige ich aus?" },
    ],
    gesamtFragen: 333,
  },
  {
    nummer: "02",
    titel: "Digitale Welt verstehen",
    untertitel: "Wie verdient TikTok Geld mit deiner Aufmerksamkeit?",
    beschreibung:
      "Algorithmen, Geschäftsmodelle, Surveillance Capitalism und Filterblasen — erklärt ohne Moral, mit Mechanik.",
    basis: "Shoshana Zuboff · ICILS 2023 · Pew Research · Filter Bubble Theory",
    outcomes: [
      "Kannst erklären, wie TikTok Geld verdient",
      "Erkennst Filter Bubbles in deinem Feed",
      "Verstehst was Surveillance Capitalism bedeutet",
      "Kannst KI-Halluzinationen von Fakten unterscheiden",
    ],
    fragen: [
      { nummer: "#011", frage: "Wie verdient TikTok Geld — und was hat dein Feed damit zu tun?" },
      { nummer: "#012", frage: "Wie funktioniert ein Empfehlungsalgorithmus konkret?" },
      { nummer: "#013", frage: "Was ist eine Filterblase — und wie entsteht sie?" },
      { nummer: "#014", frage: "Woran erkenne ich, dass ich in einer Filterblase bin?" },
      { nummer: "#015", frage: "Warum halluzinieren KI-Modelle — und wann passiert es?" },
      { nummer: "#016", frage: "Wie erkenne ich ein KI-generiertes Bild von einem echten Foto?" },
      { nummer: "#017", frage: "Was kostet das kostenlose Scrollen wirklich?" },
      { nummer: "#018", frage: "Was ist Surveillance Capitalism — in einem Satz erklärt?" },
      { nummer: "#019", frage: "Wie funktioniert Google-Werbung technisch?" },
      { nummer: "#020", frage: "Wie nutzt YouTube meine Daten — was weiß die Plattform über mich?" },
    ],
    gesamtFragen: 333,
  },
  {
    nummer: "03",
    titel: "Werkzeuge nutzen",
    untertitel: "Erst wenn du weißt, wer du bist und wie die Welt funktioniert.",
    beschreibung:
      "KI-Tools, Automatisierung, Prompt Engineering und digitale Produkte — gebaut mit Verstand und Zweck.",
    basis: "Prompt Engineering · No-Code Tools · KI-Ethik · Automatisierungslogik",
    outcomes: [
      "Kannst eine App-Idee ohne Programmierung bauen",
      "Weißt, wann KI hilft und wann nicht",
      "Kannst einen effektiven Prompt formulieren",
      "Verstehst, wie Webhooks und Automatisierungen funktionieren",
    ],
    fragen: [
      { nummer: "#021", frage: "Kann man eine App in einem Tag bauen — ohne programmieren zu können?" },
      { nummer: "#022", frage: "Was ist Prompt Engineering — und warum ist es eine Schlüsselkompetenz?" },
      { nummer: "#023", frage: "Wie prüfe ich, ob eine KI-Antwort vertrauenswürdig ist?" },
      { nummer: "#024", frage: "Was ist Automatisierung — und wo sind ihre Grenzen?" },
      { nummer: "#025", frage: "Was ist ein Webhook — erklärt in drei Sätzen?" },
      { nummer: "#026", frage: "Wie mache ich aus einem Problem eine App-Idee?" },
      { nummer: "#027", frage: "Was ist der Unterschied zwischen Programmieren und Vibe Coding?" },
      { nummer: "#028", frage: "Wie baue ich einen einfachen Chatbot — ohne eine Zeile Code?" },
      { nummer: "#029", frage: "Wann sollte ich KI nutzen — und wann lieber nicht?" },
      { nummer: "#030", frage: "Was macht einen guten Prompt aus?" },
    ],
    gesamtFragen: 333,
  },
];
