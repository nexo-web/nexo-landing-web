import Image from "next/image";
import { ABOUT_PILLS } from "@/lib/content";

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
        <div className="about__panel reveal" data-d="2">
          <div className="about__media">
            <div className="medallion">
              <div className="medallion__glow"></div>
              <div className="medallion__halo"></div>
              <div className="medallion__ring"></div>
              <Image
                className="medallion__logo"
                src="/nexo-mark.png"
                alt="NEXO"
                width={260}
                height={260}
              />
            </div>
          </div>
          <div className="statcard">
            <b>11</b>
            <small>áreas de servicio integral</small>
          </div>
        </div>
      </div>
    </section>
  );
}
