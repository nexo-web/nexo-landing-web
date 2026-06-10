"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // resalta el enlace de la sección visible
  useEffect(() => {
    const sections = NAV_LINKS.map(([, href]) =>
      document.querySelector<HTMLElement>(href)
    ).filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive("#" + en.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // bloquea el scroll con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="nav__in">
          <a className="brand" href="#top" aria-label="NEXO — inicio">
            <Image
              className="brand__mark"
              src="/nexo-mark.png"
              alt=""
              width={42}
              height={42}
              priority
            />
            <span className="brand__txt">
              <span className="brand__name">NEXO</span>
              <span className="brand__sub">ADMINISTRACIÓN INTEGRAL</span>
            </span>
          </a>
          <div className="nav__links">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} className={active === href ? "active" : ""}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav__cta">
            <a className="btn btn--ghost" href="#contacto">
              Hablemos
            </a>
            <button
              className="nav__burger"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={"mobile-menu" + (open ? " open" : "")} aria-hidden={!open} inert={!open}>
        <button className="mm-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
          ×
        </button>
        {NAV_LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="btn btn--gold" href="#contacto" onClick={() => setOpen(false)}>
          Solicitar propuesta <ArrowIcon />
        </a>
      </div>
    </>
  );
}
