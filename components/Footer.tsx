import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <a className="brand" href="#top">
              <Image
                className="brand__mark"
                src="/nexo-mark.png"
                alt="NEXO"
                width={42}
                height={42}
              />
              <span className="brand__txt">
                <span className="brand__name">NEXO</span>
                <span className="brand__sub">ADMINISTRACIÓN INTEGRAL</span>
              </span>
            </a>
            <p className="footer__tag">
              Tu aliado confiable en gestión administrativa, documental y empresarial.
            </p>
          </div>
          <div>
            <h5>Navegación</h5>
            <div className="footer__list">
              {NAV_LINKS.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5>Contacto</h5>
            <div className="footer__list">
              <a href={CONTACT.wa1link} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT.wa1}
              </a>
              <a href={CONTACT.wa2link} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT.wa2}
              </a>
              <a href={CONTACT.emailHref}>Correo</a>
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} NEXO Administración Integral · {CONTACT.rep} ·{" "}
            {CONTACT.nit}
          </span>
          <span>Medellín, Colombia</span>
        </div>
      </div>
    </footer>
  );
}
