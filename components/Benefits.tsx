"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BENEFITS } from "@/lib/content";
import { PlusIcon, ICONS } from "@/components/icons";

function BenefitCard({ b, i }: { b: (typeof BENEFITS)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const Icon = ICONS[b.icon];

  const toggleTap = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      setOpen((o) => !o);
    }
  };

  return (
    <motion.article
      className="ben reveal"
      data-d={(i % 3) + 1}
      data-open={open ? "" : undefined}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={toggleTap}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <header className="ben__head">
        <div className="ben__ic">
          <Icon />
        </div>
        <span className="ben__plus" aria-hidden>
          <PlusIcon />
        </span>
      </header>
      <h3>{b.title}</h3>
      <motion.div
        className="ben__reveal"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.34, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p>{b.desc}</p>
      </motion.div>
    </motion.article>
  );
}

export default function Benefits() {
  return (
    <section className="section section--alt" id="beneficios">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Por qué NEXO</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Beneficios de trabajar <span className="gold-text">con nosotros</span>
          </h2>
        </div>
        <div className="ben-grid">
          {BENEFITS.map((b, i) => (
            <BenefitCard b={b} i={i} key={b.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
