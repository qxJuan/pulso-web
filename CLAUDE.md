# PULSO — sitio web

Claude: lee esto antes de trabajar en este repositorio.

## Quién es Juan

Dueño de PULSO. No es programador: explícale las cosas en español, claro y sin tecnicismos.
Antes de cambios grandes, muéstrale primero qué vas a hacer y por qué.

## Qué es PULSO

Marca de audífonos inalámbricos (PulsoPods) que vende por WhatsApp desde Cartagena,
con envíos a toda Colombia (24–72 h). Tono: premium, tecnológico, cercano y sin exagerar.
Se diferencia de las réplicas "AAA" por su línea propia, el control de calidad y la garantía real.

| Modelo | Etiqueta | Precio (promo) | Antes | Diferencial |
|---|---|---|---|---|
| Pro 3 | El más nuevo | $100.000 | $125.000 | Traducción en tiempo real (+40 idiomas), estuche táctil |
| Serie 4 | El más vendido | $85.000 | $105.000 | Lo esencial, emparejamiento inmediato |
| Pro 2 | Clásico | $80.000 | $105.000 | Sonido curado y diseño ergonómico |

Todos tienen 1 mes de garantía por defectos de fábrica.

## Dónde está cada cosa

- `src/data/products.ts`: catálogo, precios, specs y mensajes de WhatsApp. Un precio se cambia solo aquí.
- `src/data/config.ts`: número de WhatsApp.
- `src/pages/index.astro`: la página completa (secciones, preguntas frecuentes).
- `src/components/`: catálogo, modal de producto, carrito y pasos de compra.
- `public/images/products/`: fotos de producto (`-cutout` = sin fondo).
- `public/brand/`: logos e isologo.

## Cómo se trabaja aquí

- Stack: Astro 5 + Tailwind 3. Para correrlo: `npm install` y luego `npm run dev` (puerto 4321).
- Antes de dar algo por terminado, ejecuta `npm run build` y revisa la página a 375 px (móvil) y a 1440 px (escritorio).
  La mayoría de los arreglos pasados fueron solapes de texto e imagen en las tarjetas.
- Commits en español, describiendo el cambio visible.
- No publiques ni cambies dominio o servidor sin que Juan lo apruebe.

## Plan en curso

Habrá un rediseño total (nuevo diseño, nuevo servidor, mismo dominio).
Orden: referencias → sistema de marca → maqueta visual aprobada → construcción → publicación.
No empieces a programar el rediseño sin una maqueta aprobada por Juan.

## Fuera de este repositorio

- Campañas de Meta Ads: en Notion, Pulso → Meta Ads (ficha de cuenta, método del reporte y bitácora).
