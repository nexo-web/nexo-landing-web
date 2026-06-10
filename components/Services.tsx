"use client";

import type { MouseEvent } from "react";
import { SERVICES } from "@/lib/content";
import { ArrowIcon, ICONS } from "@/components/icons";

/* el brillo sigue al cursor dentro de cada tarjeta */
function track(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
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
            Gestión total o parcial, adaptada a cada sector. Elige lo que necesitas: nosotros
            integramos el resto.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <article
                className="svc reveal"
                data-d={(i % 3) + 1}
                key={s.title}
                onMouseMove={track}
              >
                <span className="svc__num">
                  {String(i + 1).padStart(2, "0")} / {SERVICES.length}
                </span>
                <div className="svc__icon">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a className="svc__more" href="#contacto">
                  Conocer más <ArrowIcon />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
