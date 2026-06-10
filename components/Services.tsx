"use client";

import { useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/content";
import { ArrowIcon, PlusIcon, ICONS } from "@/components/icons";

/* el brillo sigue al cursor dentro de cada tarjeta */
function track(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function ServiceCard({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const Icon = ICONS[s.icon];

  /* desktop: hover. móvil (sin hover): tap. teclado: focus-within. */
  const toggleTap = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      setOpen((o) => !o);
    }
  };

  return (
    <motion.article
      className="svc reveal"
      data-d={(i % 3) + 1}
      data-open={open ? "" : undefined}
      onMouseMove={track}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={toggleTap}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <header className="svc__head">
        <div className="svc__icon">
          <Icon />
        </div>
        <span className="svc__plus" aria-hidden>
          <PlusIcon />
        </span>
      </header>
      <span className="svc__num">
        {String(i + 1).padStart(2, "0")} / {SERVICES.length}
      </span>
      <h3>{s.title}</h3>
      <motion.div
        className="svc__reveal"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.34, ease: [0.2, 0.8, 0.2, 1] }
        }
        style={{ overflow: "hidden" }}
      >
        <p>{s.desc}</p>
        <a className="svc__more" href="#contacto" tabIndex={open ? 0 : -1}>
          Conocer más <ArrowIcon />
        </a>
      </motion.div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Nuestros servicios</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Once áreas clave para que tu empresa{" "}
            <span className="gold-text">opere sin fricción</span>
          </h2>
          <p className="lead reveal" data-d="2">
            Gestión total o parcial, adaptada a cada sector. Pasa el cursor —o toca— cada
            tarjeta para ver el detalle.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard s={s} i={i} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
