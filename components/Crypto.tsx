import { CRYPTO_POINTS } from "@/lib/content";
import { ArrowIcon, CheckIcon } from "@/components/icons";

const NODES = [
  { x: "12%", y: "18%", d: "0s" },
  { x: "88%", y: "24%", d: "-1.5s" },
  { x: "16%", y: "82%", d: "-3s" },
  { x: "84%", y: "80%", d: "-4.5s" },
];

const SPARK = [42, 58, 50, 72, 64, 84, 76, 92];

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
              {NODES.map((n, i) => (
                <span
                  key={i}
                  className="crypto__node"
                  style={{ left: n.x, top: n.y, animationDelay: n.d }}
                ></span>
              ))}
              <div className="otc">
                <div className="otc__head">
                  <span className="otc__brand">
                    <i className="otc__live"></i> Mesa OTC
                  </span>
                  <span className="otc__tag">Cripto · Fintech</span>
                </div>
                <div className="otc__swap">
                  <span className="otc__coin">
                    <span className="otc__sym">₿</span> BTC
                  </span>
                  <span className="otc__go">
                    <ArrowIcon />
                  </span>
                  <span className="otc__coin otc__coin--alt">
                    <span className="otc__sym">₮</span> USDT
                  </span>
                </div>
                <div className="otc__meta">
                  <div>
                    <small>Estado</small>
                    <b>Custodia</b>
                  </div>
                  <div>
                    <small>Confirm.</small>
                    <b>6 / 6</b>
                  </div>
                  <div>
                    <small>Traza</small>
                    <b>100%</b>
                  </div>
                </div>
                <div className="otc__spark">
                  {SPARK.map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, animationDelay: `${-i * 0.32}s` }}></i>
                  ))}
                </div>
                <div className="otc__chips">
                  <span>UIAF</span>
                  <span>On-chain</span>
                  <span>Auditable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
