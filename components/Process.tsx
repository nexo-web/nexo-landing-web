import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Cómo trabajamos</span>
          <h2 className="h-section reveal" data-d="1" style={{ marginTop: 20 }}>
            Un proceso claro, <span className="gold-text">de principio a fin</span>
          </h2>
          <p className="lead reveal" data-d="2">
            Sin letra pequeña: sabes qué hacemos, cuándo lo hacemos y cómo queda documentado cada
            paso.
          </p>
        </div>
        <div className="steps">
          {PROCESS_STEPS.map((s, i) => (
            <article className="step reveal" data-d={i + 1} key={s.num}>
              <span className="step__line"></span>
              <span className="step__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
