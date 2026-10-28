import type { Locale } from "@/lib/i18n";

/**
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR BOTTLE PHOTOS LATER
 *  1. Drop the file into  src/assets/   (e.g. bottle-reposado.png)
 *  2. Add an import at the top of this file:
 *       import bottleReposado from "@/assets/bottle-reposado.png";
 *  3. Set it on the product below:   image: bottleReposado,
 *  The elegant placeholder disappears automatically. Nothing else to change.
 *  Best results: PNG with transparent background, portrait, ~1200x1800.
 * ─────────────────────────────────────────────────────────────
 */

export type ProductStatus = "available" | "coming-soon";

type Localized = Record<Locale, string>;

export interface Product {
  slug: string;
  name: string;
  subtitle: Localized;
  intro: Localized;
  nose: Localized;
  palate: Localized;
  finish: Localized;
  ageing: Localized;
  abv: string;
  format: string;
  agave: Localized;
  status: ProductStatus;
  /** Set this once you have the bottle photo. Leave undefined for the placeholder. */
  image?: string;
}

export const products: Product[] = [
  {
    slug: "blanco",
    name: "Blanco",
    subtitle: {
      en: "Unrested, Pure agave",
      it: "Non riposato, Agave pura",
      es: "Sin reposo, Agave puro",
    },
    intro: {
      en: "The first light. Bottled straight after distillation, Blanco is 3 M S.r.l. without a veil, the raw voice of the blue agave, bright and mineral.",
      it: "La prima luce. Imbottigliata subito dopo la distillazione, Blanco è 3 M S.r.l. senza velo, la voce nuda dell'agave blu, luminosa e minerale.",
      es: "La primera luz. Embotellado justo tras la destilación, Blanco es 3 M S.r.l. sin velo, la voz desnuda del agave azul, luminosa y mineral.",
    },
    nose: {
      en: "Cooked agave, lime zest, wet stone.",
      it: "Agave cotta, scorza di lime, pietra bagnata.",
      es: "Agave cocido, piel de lima, piedra mojada.",
    },
    palate: {
      en: "Crisp and clean: green pepper, citrus, a saline echo.",
      it: "Netta e pulita: pepe verde, agrumi, un'eco salina.",
      es: "Nítido y limpio: pimiento verde, cítricos, un eco salino.",
    },
    finish: {
      en: "Short, bright, mouth-watering.",
      it: "Corto, brillante, che invita.",
      es: "Corto, brillante, que invita a seguir.",
    },
    ageing: { en: "Unaged", it: "Non invecchiata", es: "Sin envejecer" },
    abv: "40% VOL",
    format: "700 ML",
    agave: {
      en: "100% Blue Weber agave",
      it: "100% agave Blue Weber",
      es: "100% agave Blue Weber",
    },
    status: "coming-soon",
  },
  {
    slug: "reposado",
    name: "Reposado",
    subtitle: {
      en: "Rested in oak, The signature",
      it: "Riposata in rovere, La firma",
      es: "Reposado en roble, La firma",
    },
    intro: {
      en: "The heart of 3 M S.r.l. Slow-cooked agave, copper-pot distilled, then rested in oak until it finds its balance. A reposado that speaks softly.",
      it: "Il cuore di 3 M S.r.l. Agave cotta lentamente, distillata in alambicco di rame, poi riposata in rovere finché non trova il suo equilibrio. Un reposado che parla piano.",
      es: "El corazón de 3 M S.r.l. Agave cocido lentamente, destilado en alambique de cobre y reposado en roble hasta encontrar su equilibrio. Un reposado que habla bajito.",
    },
    nose: {
      en: "Cooked agave, vanilla, orange peel and a breath of Mediterranean scrub.",
      it: "Agave cotta, vaniglia, scorza d'arancia e un soffio di macchia mediterranea.",
      es: "Agave cocido, vainilla, piel de naranja y un soplo de monte mediterráneo.",
    },
    palate: {
      en: "Round and warm: honey, sweet oak, white pepper.",
      it: "Rotonda e calda: miele, rovere dolce, pepe bianco.",
      es: "Redondo y cálido: miel, roble dulce, pimienta blanca.",
    },
    finish: {
      en: "Long, soft, luminous as a golden hour.",
      it: "Lungo, morbido, luminoso come un'ora dorata.",
      es: "Largo, suave, luminoso como una hora dorada.",
    },
    ageing: { en: "8 months in oak", it: "8 mesi in rovere", es: "8 meses en roble" },
    abv: "40% VOL",
    format: "700 ML",
    agave: {
      en: "100% Blue Weber agave",
      it: "100% agave Blue Weber",
      es: "100% agave Blue Weber",
    },
    status: "available",
  },
  {
    slug: "anejo",
    name: "Añejo",
    subtitle: {
      en: "Long rest, Limited release",
      it: "Lungo riposo, Edizione limitata",
      es: "Largo reposo, Edición limitada",
    },
    intro: {
      en: "Time made visible. A longer rest in oak deepens the colour and rounds every edge, 3 M S.r.l. at its most contemplative.",
      it: "Il tempo reso visibile. Un riposo più lungo in rovere approfondisce il colore e arrotonda ogni spigolo, 3 M S.r.l. nella sua forma più contemplativa.",
      es: "El tiempo hecho visible. Un reposo más largo en roble profundiza el color y redondea cada arista, 3 M S.r.l. en su forma más contemplativa.",
    },
    nose: {
      en: "Dried fig, toasted almond, cocoa and warm spice.",
      it: "Fico secco, mandorla tostata, cacao e spezie calde.",
      es: "Higo seco, almendra tostada, cacao y especias cálidas.",
    },
    palate: {
      en: "Velvet and depth: caramel, tobacco leaf, candied orange.",
      it: "Velluto e profondità: caramello, foglia di tabacco, arancia candita.",
      es: "Terciopelo y profundidad: caramelo, hoja de tabaco, naranja confitada.",
    },
    finish: {
      en: "Very long, resinous, quietly sweet.",
      it: "Molto lungo, resinoso, dolce sottovoce.",
      es: "Muy largo, resinoso, dulce en voz baja.",
    },
    ageing: { en: "18 months in oak", it: "18 mesi in rovere", es: "18 meses en roble" },
    abv: "40% VOL",
    format: "700 ML",
    agave: {
      en: "100% Blue Weber agave",
      it: "100% agave Blue Weber",
      es: "100% agave Blue Weber",
    },
    status: "coming-soon",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const RESERVE_EMAIL = "amministrazione@spiritsproject.it";
