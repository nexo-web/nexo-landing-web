"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { PROCESS_STEPS } from "@/lib/content";

function StepCard({
  s,
  i,
  total,
  progress,
  reduce,
}: {
  s: (typeof PROCESS_STEPS)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  /* las tarjetas anteriores se encogen un poco al ser cubiertas */
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="step-pin">
      <motion.article
        className="step-card"
        style={{
          scale: reduce ? 1 : scale,
          top: `calc(13vh + ${i * 26}px)`,
        }}
      >
        <span className="step-card__num">{s.num}</span>
        <div className="step-card__body">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
        <span className="step-card__index">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </motion.article>
    </div>
  );
}

export default function Process() {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="section" id="proceso">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Cómo trabajamos</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Un proceso claro, <span className="gold-text">de principio a fin</span>
          </h2>
          <p className="lead reveal" data-d="2">
            Sin letra pequeña: sabes qué hacemos, cuándo lo hacemos y cómo queda documentado cada
            paso.
          </p>
        </div>
      </div>
      <div className="step-stack" ref={container}>
        {PROCESS_STEPS.map((s, i) => (
          <StepCard
            key={s.num}
            s={s}
            i={i}
            total={PROCESS_STEPS.length}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
