import type { IconName } from "@/components/icons";

/* ------------------------------------------------------------
   NEXO — contenido central de la landing
   ------------------------------------------------------------ */

export const SITE = {
  name: "NEXO Administración Integral",
  shortName: "NEXO",
  tagline: "Tu aliado en gestión empresarial",
  description:
    "NEXO Administración Integral — soluciones administrativas, operativas y de gestión para empresas del presente y del futuro, con enfoque digital y cripto.",
  url: "https://nexoadministracionintegral.com",
};

export const CONTACT = {
  wa1: "311 423 0341",
  wa2: "320 720 1137",
  wa1link: "https://wa.me/573114230341",
  wa2link: "https://wa.me/573207201137",
  email: "dirección.general@nexoadministracionintegral.com",
  emailHref: "mailto:dirección.general@nexoadministracionintegral.com",
  address:
    "Calle 6 Sur # 43 A 200, Ed. Lugo Of. 1304, El Poblado, Medellín, Antioquia",
  rep: "Lizeth Jazmín Urrego Bernal",
  nit: "NIT 1.036.637.677-5",
};

export const NAV_LINKS: [string, string][] = [
  ["Servicios", "#servicios"],
  ["Cripto", "#cripto"],
  ["Nosotros", "#nosotros"],
  ["Proceso", "#proceso"],
  ["Beneficios", "#beneficios"],
  ["Contacto", "#contacto"],
];

export type WallCard = {
  cat: string;
  title: string;
  bullets?: string[];
  desc?: string;
  viz: IconName;
};

/* tarjetas para el muro animado del hero */
export const CARDWALL: WallCard[] = [
  { cat: "Administración", title: "Administración Integral", bullets: ["Organización documental", "Control de procesos", "Reportes gerenciales"], viz: "bars" },
  { cat: "Facturación", title: "Facturación Electrónica", bullets: ["Cuentas por cobrar y pagar", "Registro de operaciones", "Reportes mensuales"], viz: "invoice" },
  { cat: "Vinculación", title: "Onboarding Empresarial", bullets: ["Revisión documental", "Expedientes digitales", "Validación jurídica"], viz: "check2" },
  { cat: "Finanzas", title: "Pagos y Dispersiones", bullets: ["Preparación de pagos", "Conciliaciones", "Flujos y reportes"], viz: "flow" },
  { cat: "Archivo", title: "Archivo Digital", bullets: ["Digitalización", "Políticas de archivo", "Custodia segura"], viz: "archive" },
  { cat: "Legal", title: "Cumplimiento Normativo", bullets: ["Control de obligaciones", "Certificaciones", "Soporte ante entidades"], viz: "shield" },
  { cat: "Entidades", title: "Soporte DIAN", bullets: ["Respuesta a la DIAN", "Envío de soportes", "Coordinación con asesores"], viz: "doc" },
  { cat: "Registral", title: "Cámara de Comercio", bullets: ["Creación de empresas", "Reformas y actas", "Renovaciones"], viz: "building" },
  { cat: "Contable", title: "Coordinación Contable", bullets: ["Entrega de documentos", "Cronogramas", "Reportes financieros"], viz: "scale" },
  { cat: "Cripto & Digital", title: "Sector Cripto", bullets: ["Trazabilidad de operaciones", "Pagos y dispersiones", "UIAF y DIAN"], viz: "coin" },
  { cat: "Indicadores", title: "Reportes Gerenciales", bullets: ["Indicadores clave", "Análisis de gestión", "Visión oportuna"], viz: "bars" },
  { cat: "Operación", title: "Control Operativo", bullets: ["Tareas", "Vencimientos", "Obligaciones"], viz: "check2" },
  { cat: "Confianza", title: "100% Trazabilidad", desc: "Cada operación documentada, respaldada y verificable.", viz: "flow" },
  { cat: "Seguridad", title: "Confidencialidad", bullets: ["Protección de datos", "Custodia segura", "Acceso controlado"], viz: "safe" },
  { cat: "Relación", title: "Aliado Estratégico", desc: "Gestionamos lo administrativo para que te enfoques en crecer.", viz: "link" },
  { cat: "Visión", title: "Empresas del Futuro", desc: "Administración moderna, digital y escalable.", viz: "globe" },
];

export type Service = { icon: IconName; title: string; desc: string };

export const SERVICES: Service[] = [
  { icon: "doc", title: "Administración Integral de Empresas", desc: "Gestión total o parcial de procesos administrativos: organización documental, reportes gerenciales, control de tareas y vencimientos." },
  { icon: "link", title: "Onboarding y Vinculación de Aliados", desc: "Procesos de vinculación y validación de clientes, aliados o proveedores con expedientes digitales y control de perfiles." },
  { icon: "flow", title: "Gestión de Dispersiones y Pagos", desc: "Control, trazabilidad y respaldo de tus operaciones financieras, conciliaciones y protocolos de aprobación." },
  { icon: "invoice", title: "Facturación y Control Operativo", desc: "Emisión de facturas electrónicas, cuentas por cobrar y pagar, y reportes mensuales de facturación." },
  { icon: "shield", title: "Atención ante Requerimientos", desc: "Respuesta ante la DIAN, bancos, proveedores o clientes, con soportes documentales y coordinación con asesores." },
  { icon: "archive", title: "Apoyo Documental y Archivo", desc: "Digitalización y control de documentos, políticas internas de archivo y custodia de documentación legal y financiera." },
  { icon: "check2", title: "Cumplimiento y Normatividad", desc: "Control de obligaciones periódicas, actualización de registros y certificaciones, y soporte ante entidades." },
  { icon: "chip", title: "Soporte al Sector Cripto y Digital", desc: "Trazabilidad de operaciones digitales, acompañamiento normativo y cumplimiento de políticas UIAF y DIAN." },
  { icon: "scale", title: "Coordinación Contable Aliada", desc: "En alianza con Consulting Group AE S.A.S.: entrega oportuna de documentos y cronogramas de reportes financieros." },
  { icon: "building", title: "Trámites ante Cámara de Comercio", desc: "Creación de empresas, reformas, actas, nombramientos y renovación de matrícula mercantil." },
  { icon: "spark", title: "Servicios Personalizados", desc: "Soluciones a la medida: contratos, correspondencia, agendas, procesos y estructuración organizacional." },
];

export const CRYPTO_POINTS = [
  { b: "Trazabilidad total", d: "Seguimiento y respaldo de cada operación digital de extremo a extremo." },
  { b: "Cumplimiento UIAF y DIAN", d: "Acompañamiento documental y normativo alineado a la regulación vigente." },
  { b: "Dispersiones en entornos cripto", d: "Coordinación de pagos y movimientos con protocolos de control claros." },
  { b: "Experiencia fintech", d: "Gestión real de empresas del ecosistema cripto, fintech y digital." },
];

export type Benefit = { icon: IconName; title: string; desc: string };

export const BENEFITS: Benefit[] = [
  { icon: "flow", title: "Menos carga administrativa", desc: "Optimizamos tus procesos para que te enfoques en crecer." },
  { icon: "chip", title: "Enfoque normativo y tecnológico", desc: "Asesoría integral apoyada en herramientas digitales." },
  { icon: "archive", title: "Trazabilidad y respaldo", desc: "Soporte documental total de cada gestión." },
  { icon: "link", title: "Comunicación directa", desc: "Atención personalizada y cercana en cada paso." },
  { icon: "shield", title: "Confidencialidad garantizada", desc: "Protegemos toda la información de tu empresa." },
  { icon: "spark", title: "Adaptabilidad total", desc: "Soluciones para empresas de todos los tamaños y sectores." },
];

export const KEYWORDS = [
  "Trazabilidad",
  "Cumplimiento",
  "DIAN",
  "UIAF",
  "Cripto",
  "Fintech",
  "Confidencialidad",
  "Transparencia",
  "Eficiencia",
  "Innovación",
  "Onboarding",
  "Facturación",
];

export const STATS = [
  { value: 11, suffix: "", label: "Áreas de servicio integral" },
  { value: 100, suffix: "%", label: "Trazabilidad de operaciones" },
  { value: 24, suffix: "/7", label: "Acompañamiento y soporte" },
  { value: 2, suffix: "", label: "Canales directos de atención" },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Escuchamos tu operación, identificamos cargas administrativas, riesgos y oportunidades de mejora.",
  },
  {
    num: "02",
    title: "Propuesta a la medida",
    desc: "Diseñamos un plan de gestión con alcance, entregables y cronograma claros — sin servicios que no necesitas.",
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Asumimos los procesos acordados: documentación, facturación, pagos, cumplimiento y comunicación con entidades.",
  },
  {
    num: "04",
    title: "Acompañamiento continuo",
    desc: "Reportes gerenciales periódicos, trazabilidad total y un canal directo para resolver cualquier requerimiento.",
  },
];

export const FAQS = [
  {
    q: "¿Qué tipo de empresas pueden trabajar con NEXO?",
    a: "Acompañamos tanto a compañías consolidadas como a nuevos emprendimientos, de cualquier tamaño y sector — incluido el ecosistema cripto, fintech y digital. La gestión puede ser total o parcial, según lo que necesites.",
  },
  {
    q: "¿Cómo manejan las empresas del sector cripto?",
    a: "Con trazabilidad de extremo a extremo: cada operación queda documentada, respaldada y verificable, con acompañamiento normativo alineado a las políticas de la UIAF y la DIAN, y protocolos claros para pagos y dispersiones.",
  },
  {
    q: "¿Qué pasa si la DIAN u otra entidad envía un requerimiento?",
    a: "Lo atendemos nosotros: preparamos la respuesta, reunimos los soportes documentales y coordinamos con los asesores contables y jurídicos para que el requerimiento se resuelva a tiempo y sin fricción.",
  },
  {
    q: "¿Ustedes llevan la contabilidad?",
    a: "Trabajamos en alianza con Consulting Group AE S.A.S. para la coordinación contable: garantizamos la entrega oportuna de documentos, cronogramas de reportes financieros y comunicación fluida entre tu empresa y el equipo contable.",
  },
  {
    q: "¿Cómo protegen la información de mi empresa?",
    a: "La confidencialidad es uno de nuestros pilares: custodia segura de la documentación, acceso controlado y políticas internas de protección de datos en cada gestión.",
  },
  {
    q: "¿Cómo empiezo a trabajar con ustedes?",
    a: "Escríbenos por WhatsApp o por el formulario de contacto. Hacemos un diagnóstico inicial sin costo, y a partir de ahí diseñamos una propuesta a la medida de tu operación.",
  },
];

export const ABOUT_PILLS = [
  "Confidencialidad",
  "Eficiencia",
  "Compromiso",
  "Transparencia",
  "Innovación",
];
