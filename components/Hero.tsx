import Image from "next/image";
import { CARDWALL, type WallCard } from "@/lib/content";
import { ArrowIcon, CheckIcon, ICONS } from "@/components/icons";

/* titular con entrada palabra por palabra */
function Headline({ text, gold }: { text: string; gold?: number[] }) {
  const words = text.split(" ");
  return (
    <h1 className="h-display">
      {words.map((w, i) => (
        <span className="reveal-word" key={i}>
          <span
            style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            className={gold?.includes(i) ? "gold-text" : ""}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}

function BgCard({ card }: { card: WallCard }) {
  const Viz = ICONS[card.viz];
  return (
    <article className="bgcard">
      <span className="bgcard__viz">
        <Viz />
      </span>
      <div className="bgcard__head">
        <Image className="bgcard__mark" src="/nexo-mark.png" alt="" width={25} height={25} />
        <span className="bgcard__brand">
          NEXO<i>ADMINISTRACIÓN INTEGRAL</i>
        </span>
      </div>
      <span className="bgcard__cat">{card.cat}</span>
      <h4 className="bgcard__title">{card.title}</h4>
      {card.desc && <p className="bgcard__desc">{card.desc}</p>}
      {card.bullets && (
        <ul className="bgcard__bullets">
          {card.bullets.map((b) => (
            <li key={b}>
              <i>
                <CheckIcon />
              </i>
              {b}
            </li>
          ))}
        </ul>
      )}
      <span className="bgcard__arrow">
        <ArrowIcon />
      </span>
    </article>
  );
}

function CardWall() {
  const per = 4;
  const rows: WallCard[][] = [];
  for (let i = 0; i < CARDWALL.length; i += per) rows.push(CARDWALL.slice(i, i + per));
  const doubled = [...rows, ...rows];
  return (
    <div className="cardwall" aria-hidden>
      <div className="cardwall__plane">
        <div className="cardwall__track">
          {doubled.map((row, ri) => (
            <div className="cardwall__row" key={ri}>
              {row.map((c, ci) => (
                <BgCard card={c} key={ci} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cardwall__scrim"></div>
    </div>
  );
}

function Dashboard() {
  const bars = [52, 78, 40, 96, 66, 84];
  const tasks = ["Facturación electrónica", "Cumplimiento normativo", "Dispersiones y pagos"];
  return (
    <div className="dash">
      <div className="dash__head">
        <Image src="/nexo-mark.png" alt="" width={32} height={32} />
        <span>
          Panel de control<i>NEXO · EN TIEMPO REAL</i>
        </span>
        <span className="dash__live">● Activo</span>
      </div>
      <div className="dash__hero">
        <b>100%</b>
        <span>
          Trazabilidad de
          <br />
          tus operaciones
        </span>
      </div>
      <div className="dash__bars">
        {bars.map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${-i * 0.35}s` }}></i>
        ))}
      </div>
      <div className="dash__kpis">
        <div>
          <b>11</b>
          <span>ÁREAS</span>
        </div>
        <div>
          <b>24/7</b>
          <span>SOPORTE</span>
        </div>
        <div>
          <b>UIAF</b>
          <span>CUMPLE</span>
        </div>
      </div>
      <div className="dash__tasks">
        {tasks.map((t) => (
          <div className="dash__task" key={t}>
            <i>
              <CheckIcon />
            </i>
            {t}
            <em>Al día</em>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__bg">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <CardWall />
      </div>
      <div className="wrap hero__content">
        <div className="hero__grid">
          <div>
            <span className="eyebrow">NEXO · Administración Integral</span>
            <Headline text="Tu aliado en gestión empresarial" gold={[3, 4]} />
            <p className="lead hero__sub">
              Nos ocupamos de la administración, la documentación y la trazabilidad de tus
              operaciones para que tú te enfoques en crecer — con enfoque digital y cripto.
            </p>
            <div className="hero__cta">
              <a className="btn btn--gold btn--lg" href="#contacto">
                Solicitar propuesta <ArrowIcon />
              </a>
              <a className="btn btn--ghost btn--lg" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero__trust">
              <span className="tag">UIAF</span>
              <span className="tag">DIAN</span>
              <span className="tag">CRIPTO · FINTECH</span>
              <span className="tag">CÁMARA DE COMERCIO</span>
            </div>
          </div>
          <Dashboard />
        </div>
      </div>
      <div className="scrollcue">
        <span>Scroll</span>
        <span className="scrollcue__bar"></span>
      </div>
    </header>
  );
}
