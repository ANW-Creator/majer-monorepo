"use client";

import { usePersona } from "@/components/PersonaProvider";
import { PERSONAS, type Persona } from "@/lib/persona";

export function PersonaModal() {
  const { showModal, setPersona, closeModal } = usePersona();

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-sm px-4"
      onClick={closeModal}
    >
      <div
        className="bg-paper max-w-md w-full shadow-2xl border border-divider overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: "2px" }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-divider">
          <div className="flex items-baseline gap-3 mb-3">
            <span
              className="font-display font-light tracking-[0.25em] text-primary uppercase"
              style={{ fontSize: "1.35rem" }}
            >
              MAJER
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-muted uppercase">
              Digitale Bildung
            </span>
          </div>
          <p className="font-sans text-[13px] text-muted leading-[1.7]">
            Wer bist du? Wir passen die Inhalte an — damit du das Richtige zur
            richtigen Zeit siehst.
          </p>
        </div>

        {/* Persona cards */}
        <div className="p-5 grid grid-cols-2 gap-2">
          {(
            Object.entries(PERSONAS) as [Persona, (typeof PERSONAS)[Persona]][]
          ).map(([key, p]) => (
            <button
              key={key}
              onClick={() => setPersona(key)}
              className="group flex flex-col items-start p-5 border border-divider hover:border-primary/30 bg-surface hover:bg-paper transition-all duration-200 text-left rounded-sm"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mb-3"
                style={{ backgroundColor: p.accent }}
              />
              <span
                className="font-sans text-[11px] font-medium mb-1 uppercase tracking-wide"
                style={{ color: p.accent }}
              >
                {p.label}
              </span>
              <span className="font-sans text-[11px] text-muted leading-snug">
                {p.description}
              </span>
            </button>
          ))}
        </div>

        {/* Skip */}
        <div className="px-5 pb-5">
          <button
            onClick={closeModal}
            className="w-full py-2.5 text-center font-sans text-[11px] text-muted hover:text-ink transition-colors border border-transparent hover:border-divider rounded-sm duration-150"
          >
            Überspringen
          </button>
        </div>
      </div>
    </div>
  );
}
