import { STATS } from "@/lib/content";
import CountUp from "@/components/CountUp";

export default function Stats() {
  return (
    <section className="section" style={{ paddingBlock: "clamp(56px, 8vw, 96px)" }}>
      <div className="wrap">
        <div className="stats">
          {STATS.map((s, i) => (
            <div className="stat reveal" data-d={i + 1} key={s.label}>
              <CountUp value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
