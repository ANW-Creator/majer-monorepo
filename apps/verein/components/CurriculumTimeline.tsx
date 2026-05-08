"use client";

import { motion } from "framer-motion";

const STEPS = [
  { id: "01", label: "Selbst­kenntnis" },
  { id: "02", label: "Welt­verständnis" },
  { id: "03", label: "Werkzeug­kompetenz" },
];

export function CurriculumTimeline() {
  return (
    <div className="flex items-start min-w-[580px] md:min-w-0">
      {/* Start dot */}
      <motion.div
        className="flex flex-col items-center gap-3 shrink-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0 }}
      >
        <div className="w-3 h-3 rounded-full bg-divider border-2 border-muted/40 mt-2.5" />
        <span className="font-sans text-[10px] text-muted/60 text-center max-w-[56px] leading-tight">
          Mensch
        </span>
      </motion.div>

      {STEPS.map((step, i) => (
        <>
          {/* Connecting line */}
          <div key={`line-${step.id}`} className="flex-1 mt-4 mx-3 overflow-hidden h-px">
            <motion.div
              className={`h-full ${i === STEPS.length - 1 ? "bg-primary" : "bg-primary/30"}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Step node */}
          <motion.div
            key={step.id}
            className="flex flex-col items-center gap-3 shrink-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.35 + i * 0.4 }}
          >
            <div className="w-9 h-9 rounded-full bg-primary/8 border border-primary/25 flex items-center justify-center">
              <span className="font-sans text-[10px] text-primary font-medium">{step.id}</span>
            </div>
            <span className="font-sans text-[10px] text-primary text-center max-w-[72px] leading-tight font-medium">
              {step.label}
            </span>
          </motion.div>
        </>
      ))}

      {/* Final line to end */}
      <div className="flex-1 mt-4 mx-3 overflow-hidden h-px">
        <motion.div
          className="h-full bg-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 1.35, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* End dot */}
      <motion.div
        className="flex flex-col items-center gap-3 shrink-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 1.55 }}
      >
        <div className="w-3 h-3 rounded-full bg-primary mt-2.5" />
        <span className="font-sans text-[10px] text-primary text-center max-w-[72px] leading-tight font-medium">
          Digitale Mündigkeit
        </span>
      </motion.div>
    </div>
  );
}
