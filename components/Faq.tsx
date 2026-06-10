"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";
import { PlusIcon } from "@/components/icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Preguntas frecuentes</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Resolvemos tus <span className="gold-text">dudas</span>
          </h2>
        </div>
        <div className="faq reveal" data-d="2">
          {FAQS.map((f, i) => (
            <div className={"faq__item" + (open === i ? " open" : "")} key={f.q}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <PlusIcon />
              </button>
              <div className="faq__a">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
