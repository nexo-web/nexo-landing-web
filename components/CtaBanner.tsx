import { CONTACT } from "@/lib/content";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";

export default function CtaBanner() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-banner reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Empecemos hoy
          </span>
          <h2 className="h-section" style={{ marginTop: 18 }}>
            ¿Listo para delegar tu administración
            <br />
            <span className="gold-text">y enfocarte en crecer?</span>
          </h2>
          <p
            className="lead"
            style={{ marginTop: 20, marginInline: "auto", textAlign: "center" }}
          >
            Diagnóstico inicial sin costo. Cuéntanos cómo opera tu empresa y te mostramos cuánta
            carga administrativa podemos quitarte de encima.
          </p>
          <div className="hero__cta">
            <a className="btn btn--gold btn--lg" href="#contacto">
              Solicitar propuesta <ArrowIcon />
            </a>
            <a
              className="btn btn--wa btn--lg"
              href={CONTACT.wa1link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
