import Image from "next/image";
import { CRYPTO_POINTS } from "@/lib/content";
import { CheckIcon } from "@/components/icons";

const NODES = [
  { x: "18%", y: "22%", d: "0s" },
  { x: "78%", y: "30%", d: "-1.5s" },
  { x: "30%", y: "72%", d: "-3s" },
  { x: "70%", y: "70%", d: "-4.5s" },
  { x: "50%", y: "14%", d: "-2.2s" },
  { x: "86%", y: "56%", d: "-3.8s" },
];

export default function Crypto() {
  return (
    <section className="section section--alt" id="cripto">
      <div className="wrap">
        <div className="crypto__panel reveal">
          <div className="crypto__grid">
            <div>
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
            <div className="crypto__viz" aria-hidden>
              <div className="crypto__viz-grid"></div>
              <Image
                className="crypto__viz-logo"
                src="/nexo-mark.png"
                alt=""
                width={220}
                height={220}
              />
              {NODES.map((n, i) => (
                <span
                  key={i}
                  className="crypto__node"
                  style={{ left: n.x, top: n.y, animationDelay: n.d }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
