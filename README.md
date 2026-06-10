# NEXO · Administración Integral — Landing

Landing page de **NEXO Administración Integral** (Medellín, Colombia): soluciones
administrativas, operativas y de gestión con enfoque digital y cripto.

Construida con **Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript**.
Página 100% estática, lista para desplegar en Vercel o cualquier hosting de Node.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Producción

```bash
npm run build
npm run start
```

## Estructura

- `app/` — layout (fuentes, SEO, JSON-LD), página principal y estilos globales
- `components/` — secciones de la landing (Hero con muro de tarjetas animado,
  servicios, sector cripto, proceso, beneficios, FAQ, contacto…)
- `lib/content.ts` — todo el contenido editable (textos, servicios, contacto, FAQs)
- `public/` — logo y assets de marca

## Personalización rápida

- **Textos y datos de contacto**: edita `lib/content.ts` (un solo archivo).
- **Colores dorados / tipografías**: tokens en `app/globals.css` bajo `@theme`.
- **Accesibilidad**: las animaciones respetan `prefers-reduced-motion` y el
  contenido es visible sin JavaScript.
