"use client";

import { useEffect } from "react";

/* Observa todos los elementos .reveal y les añade .in al entrar en viewport.
   Las clases base son visibles por defecto; body.motion-on activa el estado
   oculto inicial, así que sin JS o con reduced-motion todo se ve. */
export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
