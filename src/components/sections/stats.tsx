"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data/content";

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const isNumeric = !Number.isNaN(numeric) && /\d/.test(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * numeric));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numeric]);

  return (
    <span ref={ref} className="text-gradient-gold">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-900/50">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span className="font-display text-4xl font-bold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-sm text-bone-300">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
