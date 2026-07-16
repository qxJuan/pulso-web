# PULSO — Landing Web

Landing de una sola vista para PULSO. Stack: **Astro 5 + Tailwind 3**.
Objetivo único: llevar visitantes a WhatsApp Business con contexto de producto.

---

## 1. Correr en local

Requisitos: **Node.js 18+** instalado.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` en el navegador.

## 2. Compilar para producción

```bash
npm run build
```

El sitio estático queda en `/dist`. Súbelo a **Vercel**, **Cloudflare Pages** o **Netlify** (arrastrando el folder).

---

## 3. Antes de publicar — checklist

Todo lo que necesitas cambiar está marcado con comentarios en el código.

- [ ] **WhatsApp:** En `src/pages/index.astro`, línea ~7, reemplaza `WHATSAPP_NUMBER = '57XXXXXXXXXX'` con tu número real (código de país + número, sin `+` ni espacios).
- [ ] **Testimonios:** En la sección `CONFIANZA`, reemplaza los 3 `<blockquote>` con capturas reales de WhatsApp / TikTok. Sube las imágenes a `/public/testimonios/` y cambia por `<img src="/testimonios/xxx.png" alt="..." />`.
- [ ] **Instagram / TikTok:** En el footer, actualiza los handles reales (`@pulso.co` es placeholder).
- [ ] **Bullets de producto:** En la sección `MODELOS`, revisa que las 3–4 características de cada modelo coincidan con lo que quieras destacar. Todos los precios están intencionalmente omitidos.
- [ ] **Favicon:** `/public/favicon.svg` ya viene con el isotipo de 3 puntos. Si quieres uno más elaborado, reemplázalo.
- [ ] **Meta / SEO:** En `src/layouts/Layout.astro` puedes editar el `title` y `description` por defecto.

---

## 4. Estructura

```
pulso-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro       ← <head>, fuentes, meta
│   ├── pages/
│   │   └── index.astro        ← Landing completa
│   └── styles/
│       └── global.css         ← Tokens, animaciones, componentes
├── astro.config.mjs
├── tailwind.config.mjs        ← Paleta PULSO + fuentes
├── tsconfig.json
└── package.json
```

Cuando quieras dividir `index.astro` en componentes (`Hero.astro`, `Products.astro`, etc.), muévelos a `src/components/` — Astro los importa igual.

---

## 5. Sistema de diseño (embedded)

Ya está codificado en `tailwind.config.mjs` y `global.css`:

| Token | Valor | Uso |
|-------|-------|-----|
| `carbono` | `#0D0D0D` | Texto principal, fondos oscuros, CTAs |
| `grafito` | `#3D3D3D` | Texto secundario, eyebrows |
| `crema` | `#F5F0E8` | Fondo base |
| `crema-soft` | `#EFE9DF` | Fondos alternos (sección Confianza) |
| `hairline` | `rgba(13,13,13,0.12)` | Divisores finos |

**Fuentes** (cargadas desde Google Fonts):
- `font-display` → Sora 600 (wordmark, titulares)
- `font-body` → DM Sans 400 (párrafos, botones)
- `font-mono` → DM Mono (eyebrows, labels, especs)

---

## 6. Próximos pasos sugeridos

1. Registrar dominio: intenta `pulso.co` primero. Alternativas: `pulsopods.co`, `pulso.com.co`.
2. Configurar en Vercel + apuntar DNS.
3. Añadir Google Analytics 4 o Plausible (una línea en `Layout.astro`).
4. Meta Pixel para retargeting de tus ads de Cartagena.
5. Agregar Open Graph image (`/public/og-image.png`, 1200×630px) para que compartir el link en WhatsApp se vea bien.

---

Cualquier cambio, ábrelo en Claude Code y pide lo que necesites.
