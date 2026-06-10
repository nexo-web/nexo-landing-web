import { CRYPTO_POINTS } from "@/lib/content";
import { CheckIcon } from "@/components/icons";

export default function Crypto() {
  return (
    <section className="section section--alt" id="cripto">
      <div className="wrap">
        <div className="crypto__panel reveal">
          <div className="crypto__inner">
            <span className="eyebrow">Sector cripto &amp; digital</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Experiencia real en el{" "}
              <span className="gold-text">ecosistema cripto y fintech</span>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Gestionamos empresas del sector con trazabilidad, cumplimiento y acompañamiento
              documental de principio a fin.
            </p>
            <div className="crypto__list">
              {CRYPTO_POINTS.map((p) => (
                <div className="crypto__li" key={p.b}>
                  <span className="tick">
                    <CheckIcon />
                  </span>
                  <p>
                    <b>{p.b}.</b> {p.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="tags">
              <span className="tag">UIAF</span>
              <span className="tag">DIAN</span>
              <span className="tag">TRAZABILIDAD</span>
              <span className="tag">DISPERSIONES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
