import { ABOUT_PILLS } from "@/lib/content";
import { BarsIcon, CoinIcon, FlowIcon, PinIcon, ShieldIcon } from "@/components/icons";

export default function About() {
  return (
    <section className="section section--alt" id="nosotros">
      <div className="wrap about">
        <div className="about__copy">
          <span className="eyebrow reveal">Quiénes somos</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Un aliado estratégico
            <br />
            en cada proceso interno
          </h2>
          <p className="reveal" data-d="2">
            <b style={{ color: "var(--color-ink)" }}>NEXO Administración Integral</b> ofrece
            servicios administrativos, operativos y de gestión, diseñados para apoyar tanto a
            compañías consolidadas como a nuevos emprendimientos.
          </p>
          <p className="reveal" data-d="3">
            Acompañamos a nuestros clientes en sus procesos internos para que se enfoquen en
            crecer, mientras nosotros nos ocupamos de la administración, la documentación, la
            comunicación con entidades y la trazabilidad de cada operación — con eficiencia,
            transparencia y cumplimiento normativo.
          </p>
          <div className="about__pills reveal" data-d="4">
            {ABOUT_PILLS.map((p) => (
              <span className="pill" key={p}>
                <b>+</b> {p}
              </span>
            ))}
          </div>
        </div>
        <div className="about__bento">
          <article className="bento reveal" data-d="1">
            <span className="bento__ic">
              <BarsIcon />
            </span>
            <b className="bento__num">11</b>
            <span className="bento__lbl">áreas de servicio integral</span>
          </article>
          <article className="bento reveal" data-d="2">
            <span className="bento__ic">
              <FlowIcon />
            </span>
            <b className="bento__num">100%</b>
            <span className="bento__lbl">Trazabilidad de operaciones</span>
          </article>
          <article className="bento bento--wide reveal" data-d="3">
            <span className="bento__ic">
              <ShieldIcon />
            </span>
            <b className="bento__big">UIAF · DIAN</b>
            <span className="bento__lbl">Cumplimiento normativo y soporte ante entidades</span>
          </article>
          <article className="bento reveal" data-d="4">
            <span className="bento__ic">
              <CoinIcon />
            </span>
            <b className="bento__big">Cripto &amp; Fintech</b>
            <span className="bento__lbl">Experiencia real en el sector</span>
          </article>
          <article className="bento reveal" data-d="5">
            <span className="bento__ic">
              <PinIcon />
            </span>
            <b className="bento__big">Medellín, CO</b>
            <span className="bento__lbl">El Poblado · Antioquia</span>
          </article>
        </div>
      </div>
    </section>
  );
}
