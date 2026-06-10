"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/content";
import { ArrowIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const nombre = String(data.get("nombre") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const txt = `Hola NEXO, soy ${nombre}${empresa ? " de " + empresa : ""}. ${mensaje}`;
    setSent(true);
    // abre WhatsApp con el mensaje listo como canal principal de seguimiento
    setTimeout(() => {
      window.open(`${CONTACT.wa1link}?text=${encodeURIComponent(txt)}`, "_blank");
    }, 600);
  };

  return (
    <section className="section section--alt" id="contacto">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: "clamp(36px,4vw,52px)" }}>
          <span className="eyebrow">Contacto</span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            Hablemos de tu <span className="gold-text">próxima gestión</span>
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            Cuéntanos qué necesitas y diseñamos una propuesta a la medida. Respuesta directa y
            personalizada.
          </p>
        </div>
        <div className="contact__grid">
          <form className="form reveal" data-d="1" onSubmit={submit}>
            <div className="form__row">
              <div className="field">
                <label htmlFor="f-nombre">Nombre</label>
                <input id="f-nombre" name="nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="field">
                <label htmlFor="f-empresa">Empresa</label>
                <input
                  id="f-empresa"
                  name="empresa"
                  type="text"
                  placeholder="Tu empresa (opcional)"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="f-email">Correo</label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder="tucorreo@empresa.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="f-tel">WhatsApp</label>
                <input id="f-tel" name="tel" type="tel" placeholder="300 000 0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-mensaje">¿En qué te ayudamos?</label>
              <textarea
                id="f-mensaje"
                name="mensaje"
                placeholder="Describe brevemente lo que necesitas…"
                required
              ></textarea>
            </div>
            <button className="btn btn--gold btn--lg" type="submit" style={{ justifySelf: "start" }}>
              Enviar y abrir WhatsApp <ArrowIcon />
            </button>
            <p className="form__note">
              Al enviar abriremos WhatsApp con tu mensaje listo para confirmar.
            </p>
            {sent && (
              <div className="form__ok">
                ✓ ¡Gracias! Abrimos WhatsApp para continuar la conversación.
              </div>
            )}
          </form>

          <div className="contact__side reveal" data-d="2">
            <a className="cc" href={CONTACT.wa1link} target="_blank" rel="noopener noreferrer">
              <span className="cc__ic">
                <WhatsAppIcon />
              </span>
              <span>
                <small>WhatsApp</small>
                <b>{CONTACT.wa1}</b>
              </span>
            </a>
            <a className="cc" href={CONTACT.wa2link} target="_blank" rel="noopener noreferrer">
              <span className="cc__ic">
                <WhatsAppIcon />
              </span>
              <span>
                <small>WhatsApp alterno</small>
                <b>{CONTACT.wa2}</b>
              </span>
            </a>
            <a className="cc" href={CONTACT.emailHref}>
              <span className="cc__ic">
                <MailIcon />
              </span>
              <span>
                <small>Correo</small>
                <b>{CONTACT.email}</b>
              </span>
            </a>
            <div className="cc">
              <span className="cc__ic">
                <PinIcon />
              </span>
              <span>
                <small>Dirección</small>
                <b>{CONTACT.address}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
