import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lernpfade — MAJER",
  description: "30 modulare Lernpfade zu digitaler Kompetenz — CC BY-SA 4.0.",
};

export default function Lernpfade() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-sans text-xs tracking-widest text-muted uppercase mb-4">
        Curriculum
      </p>
      <h1 className="font-display text-5xl font-light text-ink mb-4 leading-tight">
        Lernpfade
      </h1>
      <div className="majer-rule max-w-[3rem] mb-6" />
      <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed mb-8">
        30 modulare Lernpfade zu Selbstwahrnehmung, algorithmischer Aufklärung
        und digitalen Werkzeugen — offen lizenziert unter CC BY-SA 4.0.
      </p>
      <div className="inline-flex items-center gap-2 border border-divider rounded-sm px-4 py-2 font-sans text-sm text-muted">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        Lernpfade werden gerade aufgebaut — bald verfügbar
      </div>
    </section>
  );
}
