"use client";

import { useEffect } from "react";

/* Parallax suave del muro del Hero: el plano de tarjetas de fondo se desplaza
   levemente siguiendo el cursor, dando sensación de profundidad. El cálculo se
   throttlea con requestAnimationFrame y se resetea al salir del Hero. */
export default function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const plane = document.querySelector<HTMLElement>(".cardwall__plane");
    if (!hero || !plane) return;

    const MAX = 26; // desplazamiento máximo en px
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        plane.style.setProperty("--px", `${(-nx * MAX).toFixed(1)}px`);
        plane.style.setProperty("--py", `${(-ny * MAX).toFixed(1)}px`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      plane.style.setProperty("--px", "0px");
      plane.style.setProperty("--py", "0px");
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
