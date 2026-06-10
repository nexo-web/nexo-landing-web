import { ABOUT_PILLS } from "@/lib/content";
import { BarsIcon, CoinIcon, FlowIcon, PinIcon, ShieldIcon } from "@/components/icons";

export default function About() {
  return (
    <section className="section section--alt" id="nosotros">
      <div className="wrap about">
        <div className="about__copy">
          <span className="eyebrow reveal">Quiénes somos</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            La estructura que tu empresa
            <br />
            <span className="gold-text">no tiene que construir</span>
          </h2>
          <p className="reveal" data-d="2">
            <b style={{ color: "var(--color-ink)" }}>NEXO Administración Integral</b> no es un
            proveedor más: es el área administrativa que tu negocio necesita sin tener que
            montarla desde cero. Acompañamos por igual a compañías consolidadas y a
            emprendimientos que recién despegan, con un dominio particular del ecosistema
            digital y cripto.
          </p>
          <p className="reveal" data-d="3">
            Operamos bajo una premisa clara: <b style={{ color: "var(--color-ink)" }}>orden,
            respaldo y cero improvisación</b>. Cada documento queda organizado y cada operación
            trazada, para que decidas sobre información precisa y no sobre suposiciones. Y cuando
            el terreno lo exige, sumamos el respaldo contable de nuestra alianza con{" "}
            <b style={{ color: "var(--color-ink)" }}>Consulting Group AE S.A.S.</b>
          </p>
          <div className="about__pills">
            {ABOUT_PILLS.map((p, i) => (
              <span className="pill reveal" data-d={i + 1} key={p}>
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
