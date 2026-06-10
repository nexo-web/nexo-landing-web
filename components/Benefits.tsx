import { BENEFITS } from "@/lib/content";
import { ICONS } from "@/components/icons";

export default function Benefits() {
  return (
    <section className="section section--alt" id="beneficios">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Por qué NEXO</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Beneficios de trabajar <span className="gold-text">con nosotros</span>
          </h2>
        </div>
        <div className="ben-grid">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <article className="ben reveal" data-d={(i % 3) + 1} key={b.title}>
                <div className="ben__ic">
                  <Icon />
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
