import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import { PersonaProvider } from "@/components/PersonaProvider";
import { PersonaModal } from "@/components/PersonaModal";
import { Nav } from "@/components/Nav";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "MAJER — Digitale Bildung & Medienkompetenz",
  description:
    "MAJER ist ein gemeinnütziger Verein, der Jugendliche in drei Schritten begleitet: Selbstwahrnehmung, algorithmische Aufklärung, digitale Werkzeuge — in dieser Reihenfolge.",
  keywords: [
    "digitale Bildung",
    "Medienkompetenz",
    "Berlin",
    "Jugendliche",
    "Algorithmen",
    "KI",
    "Transaktionsanalyse",
  ],
  openGraph: {
    title: "MAJER — Digitale Bildung & Medienkompetenz",
    description:
      "Zuerst wer du bist. Dann wie die Welt funktioniert. Erst dann die Werkzeuge.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${crimsonPro.variable} ${dmSans.variable}`}>
      <body className="min-h-full bg-paper text-ink antialiased font-sans">
        <PersonaProvider>
          <Nav />
          <PersonaModal />
          <main>{children}</main>
        </PersonaProvider>
      </body>
    </html>
  );
}
