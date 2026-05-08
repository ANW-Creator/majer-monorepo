"use client";

import { usePersona } from "@/components/PersonaProvider";
import { PERSONAS, type Persona } from "@/lib/persona";

export function PersonaModal() {
  const { showModal, setPersona, closeModal } = usePersona();

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4"
      onClick={closeModal}
    >
      <div
        className="bg-paper max-w-lg w-full rounded-sm shadow-2xl p-8 border border-divider"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo wordmark */}
        <div className="mb-6 text-center">
          <span className="font-display text-3xl font-light tracking-widest text-primary uppercase">
            MAJER
          </span>
          <div className="majer-rule mt-2" />
        </div>

        <p className="text-center text-muted font-sans text-sm mb-8 leading-relaxed">
          Wer bist du? Wir passen unsere Inhalte an — damit du das Richtige
          zur richtigen Zeit siehst.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {(Object.entries(PERSONAS) as [Persona, (typeof PERSONAS)[Persona]][]).map(
            ([key, p]) => (
              <button
                key={key}
                onClick={() => setPersona(key)}
                className="group flex flex-col items-start p-4 border border-divider rounded-sm hover:border-primary transition-colors text-left"
              >
                <span
                  className="text-sm font-medium mb-1"
                  style={{ color: p.accent }}
                >
                  {p.label}
                </span>
                <span className="text-xs text-muted leading-snug font-sans">
                  {p.description}
                </span>
              </button>
            )
          )}
        </div>

        <button
          onClick={closeModal}
          className="mt-6 w-full text-center text-xs text-muted font-sans hover:text-ink transition-colors"
        >
          Überspringen
        </button>
      </div>
    </div>
  );
}
