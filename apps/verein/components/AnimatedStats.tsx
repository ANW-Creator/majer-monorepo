"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  wert: number;
  einheit: string;
  note: string;
  /** Optional prefix shown before the number */
  prefix?: string;
}

interface Props {
  stats: Stat[];
}

function Counter({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 60;
    const step = Math.ceil(target / steps);
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value.toLocaleString("de-DE")}</span>;
}

export function AnimatedStats({ stats }: Props) {
  return (
    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-paper/10">
      {stats.map((s) => (
        <div
          key={s.einheit}
          className="py-20 md:px-12 first:md:pl-0 last:md:pr-0"
        >
          <div
            className="font-display font-light leading-none text-paper mb-3"
            style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
          >
            {s.prefix}
            <Counter target={s.wert} />
          </div>
          <div className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-paper/60 mb-2">
            {s.einheit}
          </div>
          <div className="font-sans text-xs text-paper/35 leading-relaxed">
            {s.note}
          </div>
        </div>
      ))}
    </div>
  );
}
