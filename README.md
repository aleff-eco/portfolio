# devaleff.com

Portafolio de Aleff Espinosa Córdova. Next.js 16 (App Router), React 19 y Tailwind CSS 4; desplegado en Vercel.

## Desarrollo

```bash
pnpm install
pnpm dev
```

| Comando | Qué hace |
|---|---|
| `pnpm dev` | servidor local en http://localhost:3000 |
| `pnpm build` | build de producción |
| `pnpm lint` | ESLint con `eslint-config-next` |

## Contenido

- Textos en español e inglés, proyectos, clientes y trayectoria en `src/content/site.js`.
- `/` sirve la versión en español y `/en` la versión en inglés.
- Testimonios en `why.testimonials` de cada idioma: `{ text, who, role, logo }`.
- Las estrellas de GitHub se consultan al compilar y se refrescan cada 24 h (`src/lib/github.js`).
- Imágenes en `public/projects` y `public/experience`.
- Colores y estilos en `src/app/globals.css` (`:root` y `:root.dark`).

## SEO

- Metadatos y datos estructurados en `src/lib/seo.js`.
- Banner para compartir generado con `next/og` en `src/lib/og.jsx`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e íconos se generan desde `src/app`.
