import type { Metadata } from "next";
import { Sora, Manrope, Space_Mono } from "next/font/google";
import { CONTACT, SITE } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "NEXO · Administración Integral",
    template: "%s · NEXO",
  },
  description: SITE.description,
  keywords: [
    "administración integral",
    "gestión empresarial",
    "facturación electrónica",
    "cumplimiento normativo",
    "DIAN",
    "UIAF",
    "cripto",
    "fintech",
    "Medellín",
  ],
  icons: { icon: "/nexo-mark.png", apple: "/nexo-mark.png" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.url,
    siteName: SITE.name,
    title: "NEXO · Administración Integral",
    description: SITE.description,
    images: [{ url: "/nexo-logo-full.jpeg", width: 500, height: 500 }],
  },
  twitter: {
    card: "summary",
    title: "NEXO · Administración Integral",
    description: SITE.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/nexo-mark.png`,
  telephone: "+57 311 423 0341",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 6 Sur # 43 A 200, Ed. Lugo Of. 1304, El Poblado",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  founder: CONTACT.rep,
  areaServed: "Colombia",
};

/* Habilita las animaciones de entrada solo cuando hay un timeline vivo y
   el usuario no prefiere movimiento reducido (evita contenido oculto en
   render estático, impresión o lectores). */
const motionGate = `
try {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) document.body.classList.add("motion-on");
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
