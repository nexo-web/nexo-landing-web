import { KEYWORDS } from "@/lib/content";

export default function Marquee() {
  const loop = [...KEYWORDS, ...KEYWORDS];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {loop.map((k, i) => (
          <span className="marquee__item" key={i}>
            <span>{k}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
