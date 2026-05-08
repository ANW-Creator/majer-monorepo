"use client";

import { motion } from "framer-motion";
import { type Pillar } from "@/lib/curriculum";

interface Props {
  pillar: Pillar;
  /** Show more questions on hover (for homepage teaser) */
  compact?: boolean;
}

export function PillarCard({ pillar, compact = false }: Props) {
  const visibleFragen = compact ? pillar.fragen.slice(0, 3) : pillar.fragen.slice(0, 5);

  return (
    <motion.div
      className="group relative overflow-hidden cursor-default"
      style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
      whileHover={{
        rotateX: -3,
        rotateY: 4,
        translateZ: 10,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card surface */}
      <div className="h-full bg-surface border border-divider group-hover:border-primary/20 group-hover:shadow-xl transition-all duration-300 p-8 md:p-10 flex flex-col gap-0">
        {/* Decorative background number */}
        <span
          className="absolute font-display font-light text-primary pointer-events-none select-none"
          style={{
            fontSize: "clamp(80px, 12vw, 130px)",
            lineHeight: 1,
            opacity: 0.07,
            top: "-8px",
            right: "8px",
          }}
          aria-hidden="true"
        >
          {pillar.nummer}
        </span>

        {/* Pillar number label */}
        <span className="font-sans text-[10px] tracking-[0.3em] text-primary uppercase block mb-6">
          Level {pillar.nummer}
        </span>

        {/* Title */}
        <h3
          className="font-display font-light text-ink leading-tight mb-3"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
        >
          {pillar.titel}
        </h3>

        {/* Subtitle */}
        <p className="font-sans text-xs text-muted italic leading-relaxed mb-6">
          {pillar.untertitel}
        </p>

        {/* Expanding rule */}
        <div className="h-px bg-primary mb-6 opacity-20 w-8 group-hover:w-16 group-hover:opacity-40 transition-all duration-300" />

        {/* Sample questions */}
        <ul className="flex flex-col gap-3 flex-1">
          {visibleFragen.map((f) => (
            <li key={f.nummer} className="flex items-start gap-3">
              <span className="font-sans text-[10px] text-primary/40 shrink-0 tabular-nums pt-px">
                {f.nummer}
              </span>
              <span className="font-sans text-xs text-muted leading-snug">
                {f.frage}
              </span>
            </li>
          ))}
          {!compact && (
            <li className="font-sans text-[10px] text-muted/50 italic mt-1">
              + {pillar.gesamtFragen - visibleFragen.length} weitere Fragen…
            </li>
          )}
        </ul>

        {/* Basis tag */}
        <div className="mt-8 pt-6 border-t border-divider">
          <div className="font-sans text-[10px] tracking-wide text-muted/60 leading-relaxed">
            {pillar.basis}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
