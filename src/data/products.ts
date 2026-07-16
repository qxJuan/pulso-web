// ============================================================
// EDITA ESTO: precios y garantía reales por modelo.
// `originalPrice` = precio antes del descuento, `price` = precio actual.
// Cuando termine la promo de julio, cambia `originalPrice: null` para
// que desaparezca el tachado y el badge de descuento.
// ============================================================

export interface Spec {
  icon: string;
  text: string;
}

export interface Product {
  slug: string;
  badge?: string;
  name: string;
  tagline: string;
  originalPrice: number | null;
  price: number;
  warrantyText: string;
  description: string;
  specs: Spec[];
  benefits: string[];
  idealFor: string[];
  waMessage: string;
}

export const products: Product[] = [
  {
    slug: 'pro-3',
    badge: 'El más nuevo',
    name: 'Pro 3',
    tagline: 'Nueva experiencia premium y más avanzada.',
    originalPrice: 125000,
    price: 100000,
    warrantyText: '1 mes de garantía',
    description:
      'El modelo insignia de PULSO. Pensado para quien vive entre idiomas, ciudades y reuniones — con el sonido curado que define a la marca.',
    specs: [
      { icon: 'traduccion', text: 'Traducción en tiempo real (+40 idiomas)' },
      { icon: 'touch', text: 'Estuche 100% táctil' },
      { icon: 'microfono', text: 'Micrófono de alta claridad' },
      { icon: 'bateria', text: 'Batería superior para todo el día' },
      { icon: 'almohadillas', text: '4 pares de puntas incluidas' },
    ],
    benefits: [
      'Habla y que te entiendan, sin apps intermedias',
      'Sonido curado PULSO en llamadas y música',
      'Batería para un día completo de uso real',
    ],
    idealFor: [
      'Trabaja con clientes o proveedores en otros idiomas',
      'Viaja seguido y quiere resolver sin traductor externo',
      'Quiere el sonido y la batería más altos de la colección',
    ],
    waMessage: 'Hola PULSO, me interesan los PulsoPods Pro 3. ¿Me cuentan más?',
  },
  {
    slug: 'pro-2',
    badge: 'Clásico',
    name: 'Pro 2',
    tagline: 'El equilibrio entre sonido curado y precio justo.',
    originalPrice: 105000,
    price: 80000,
    warrantyText: '1 mes de garantía',
    description:
      'El punto medio de la colección: mismo sonido curado PULSO, diseño ergonómico probado, sin la traducción en tiempo real del Pro 3.',
    specs: [
      { icon: 'audio', text: 'Sonido curado PULSO' },
      { icon: 'ajuste', text: 'Diseño ergonómico probado' },
      { icon: 'almohadillas', text: '3 pares de puntas incluidas' },
    ],
    benefits: [
      'Ajuste seguro que no se cae con el movimiento',
      'Sonido parejo para música y llamadas todo el día',
      'Mejor relación sonido/precio de la colección',
    ],
    idealFor: [
      'Uso diario: transporte, trabajo, ejercicio',
      'Quiere sonido PULSO sin pagar el modelo insignia',
      'No necesita traducción en tiempo real',
    ],
    waMessage: 'Hola PULSO, me interesan los PulsoPods Pro 2. ¿Me cuentan más?',
  },
  {
    slug: 'serie-4',
    badge: 'El más vendido',
    name: 'Serie 4',
    tagline: 'Los esenciales PULSO, sin vueltas.',
    originalPrice: 105000,
    price: 85000,
    warrantyText: '1 mes de garantía',
    description:
      'La entrada a PULSO. Emparejamiento inmediato y el sonido curado de siempre, para quien quiere lo esencial bien hecho.',
    specs: [
      { icon: 'audio', text: 'Los esenciales PULSO' },
      { icon: 'conexion', text: 'Emparejamiento inmediato' },
      { icon: 'almohadillas', text: '3 pares de puntas incluidas' },
    ],
    benefits: [
      'Listos para usar apenas los sacas de la caja',
      'Sonido curado PULSO en su versión más accesible',
      'Ligeros para uso de todo el día',
    ],
    idealFor: [
      'Primera vez comprando PulsoPods',
      'Busca lo esencial sin pagar de más',
      'Regalo o segundo par para la casa/oficina',
    ],
    waMessage: 'Hola PULSO, me interesan los PulsoPods Serie 4. ¿Me cuentan más?',
  },
];

export const imageVariants = ['case-open', 'case-closed', 'earbud', 'wearing'] as const;
export type ImageVariant = (typeof imageVariants)[number];

export function productImage(slug: string, variant: ImageVariant): string {
  return `/images/products/${slug}-${variant}.png`;
}

// Recorte sin fondo (Adobe cutout) — disponible para case-open/case-closed/earbud.
// "wearing" no tiene versión recortada (es foto de modelo, no de producto solo).
export function productImageCutout(slug: string, variant: ImageVariant): string {
  if (variant === 'wearing') return productImage(slug, variant);
  return `/images/products/${slug}-${variant}-cutout.png`;
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CO')}`;
}

export function discountPercent(product: Product): number | null {
  if (!product.originalPrice) return null;
  return Math.round((1 - product.price / product.originalPrice) * 100);
}
