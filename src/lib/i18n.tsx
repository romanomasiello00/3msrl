import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LOCALES = ["en", "it", "es"] as const;
export type Locale = (typeof LOCALES)[number];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.story": "Story",
  "nav.expression": "Expression",
  "nav.tequila1": "Tequila 1",
  "nav.tequila2": "Tequila 2",
  "nav.contact": "Contact",
  "nav.shop": "Shop",

  "shop.eyebrow": "The Collection",
  "shop.title": "Three expressions, one light",
  "shop.intro":
    "Every bottle of 3 M S.r.l. begins with the same blue agave and the same slow gesture. What changes is time. Allocations are limited, write to us to reserve yours.",
  "shop.available": "Available",
  "shop.comingSoon": "Coming soon",
  "shop.reserve": "Reserve",
  "shop.discover": "Discover the expression",
  "shop.notify": "Notify me",
  "shop.photoSoon": "Photography coming soon",
  "shop.nose": "Nose",
  "shop.palate": "Palate",
  "shop.finish": "Finish",
  "shop.ageing": "Rest",
  "shop.abv": "Strength",
  "shop.format": "Format",
  "shop.agave": "Agave",
  "shop.back": "← Back to the collection",
  "shop.other": "The other expressions",
  "shop.noPurchase":
    "3 M S.r.l. is not sold online. Every request is handled personally by us.",

  "shop.form.intro":
    "Leave us your details and we'll reply personally with availability and delivery.",
  "shop.form.subject": "Allocation request",
  "shop.form.name": "Name",
  "shop.form.email": "Email",
  "shop.form.expression": "Expression",
  "shop.form.quantity": "Bottles",
  "shop.form.message": "Message",
  "shop.form.submit": "Send request",
  "shop.form.success": "Grazie.",
  "shop.form.successBody":
    "We've opened your email client with the request prefilled. Send it and we'll be in touch shortly.",
  "shop.form.close": "Close",
  "shop.form.note": "No payment, Allocation request only, 18+",

  "badge.origin": "A house of tequila, born in Puglia",
  "hero.title": "Where the golden soul of Mexico meets the timeless light of Puglia.",
  "hero.subtitle":
    "3 M S.r.l. is born where two sun-blessed lands meet. A house of tequila brands, crafted with precision and rooted in place.",

  "home.story.eyebrow": "Heritage",
  "home.story.title": "Three friends, two lands",
  "home.story.body":
    "Luigi, Romano and Luigi Pio have always shared the same land, Puglia, and the same craft passed down through generations. From those roots grew a larger passion: tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia.",
  "home.story.cta": "Read the story",

  "home.brands.eyebrow": "Our Brands",
  "home.brands.title": "Two tequilas, one house",
  "home.brands.body":
    "3 M S.r.l. is building a portfolio of tequila brands, each with its own character. The first expressions are coming soon.",

  "story.eyebrow": "The Story",
  "story.title": "Three friends, two lands",
  "story.p1":
    "Luigi Marinaro, Romano Masiello and Luigi Pio Marinaro have always shared the same land: Puglia. And the same craft, passed down through generations, the making of wine, food and spirits, which here is culture before it is work.",
  "story.p2":
    "From those roots grew a larger passion: the world of spirits, and tequila above all. Those who know fermentation, time and the patience of the land recognise in agave the same language as olive trees and vines.",
  "story.p3":
    "So, in recent years, they set out on a new adventure: to create a tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia. 3 M S.r.l. is made in Mexico, in the heart of the blue agave. It is in Puglia that it finds its Mediterranean home.",
  "story.founders": "The founders",
  "story.founders.title": "Three friends, two lands",
  "story.lm.role": "CO-FOUNDER",
  "story.rm.role": "CO-FOUNDER",
  "story.gm.role": "CO-FOUNDER",
  "story.lm.bio":
    "Entrepreneur with decades of experience in operational and administrative business management. Co-owner of SIMED S.r.l. and F.lli Marinaro, both based in Cerignola. Luigi Marinaro is the company's sole director and is responsible for administration and finance.",
  "story.rm.bio":
    "After returning to Cerignola following five years in the Netherlands as an Investment Analyst and Data Analyst at various financial institutions, Romano Masiello oversees the project's operations and financial planning.",
  "story.gm.bio":
    "Entrepreneur with decades of experience in operational and commercial business management. Co-owner of SIMED S.r.l. and F.lli Marinaro, both based in Cerignola. Luigi Pio Marinaro oversees the commercial and strategic side of the business.",

  "expression.eyebrow": "The Expression",
  "expression.title": "Tequila Reposado",
  "expression.intro":
    "100% blue agave, slow-cooked, copper-pot distilled and rested in oak barrels until it finds its balance. A reposado that speaks softly.",
  "expression.nose": "Nose",
  "expression.nose.body": "Cooked agave, vanilla, orange peel and a breath of Mediterranean scrub.",
  "expression.palate": "Palate",
  "expression.palate.body": "Round and warm: honey, sweet oak, white pepper.",
  "expression.finish": "Finish",
  "expression.finish.body": "Long, soft, luminous as a golden hour.",
  "expression.specs": "40% VOL, 750 ML, REPOSADO, 100% BLUE AGAVE",

  "contact.eyebrow": "Contact",
  "contact.title": "Write to us",
  "contact.intro":
    "For enquiries about the brand, distribution, hospitality or press, leave us a note.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.subject": "Subject",
  "contact.category": "Reason",
  "contact.category.info": "General enquiry",
  "contact.category.distribution": "Distribution",
  "contact.category.press": "Press",
  "contact.category.hospitality": "Hospitality",
  "contact.message": "Message",
  "contact.submit": "Send message",
  "contact.sending": "Sending…",
  "contact.success": "Grazie. Your message has reached us.",
  "contact.error": "Something went wrong. Please try again.",

  "footer.tagline": "A tribute to the lands that sustain us. Please enjoy our craft responsibly.",
  "footer.nav": "Navigation",
  "footer.connect": "Connect",
  "footer.legal.privacy": "Privacy",
  "footer.legal.terms": "Terms",
  "footer.rights": "© 2026 3 M S.r.l.",
  "footer.responsible": "18+, Drink responsibly",

  "age.title": "A moment, please.",
  "age.body": "You must be of legal drinking age in your country to enter 3 M S.r.l..",
  "age.question": "Are you of legal drinking age?",
  "age.yes": "Yes, enter",
  "age.no": "No",
  "age.rejected":
    "We appreciate your honesty. Please return once you have reached the legal drinking age in your country.",
  "age.disclaimer": "3 M S.r.l. reminds you to enjoy responsibly.",

  "brandPage.eyebrow": "3 M S.r.l.",
  "brandPage.body": "We're crafting something new. This brand will be unveiled soon.",

  "legal.eyebrow": "Legal",
  "legal.privacy.title": "Privacy",
  "legal.privacy.p1":
    "3 M S.r.l. respects your privacy. This page is a placeholder for the full privacy notice, which will be published shortly.",
  "legal.privacy.p2":
    "Any personal data submitted via the contact form is used only to respond to your enquiry and is never shared with third parties.",
  "legal.terms.title": "Terms",
  "legal.terms.p1":
    "3 M S.r.l. is intended for adults of legal drinking age. By entering this site you confirm that you have reached the legal drinking age in your country.",
  "legal.terms.p2": "Please enjoy 3 M S.r.l. responsibly.",

  "notFound.body": "This page hasn't found its home yet.",
  "notFound.home": "← Return home",
};

const it: Dict = {
  "nav.story": "Storia",
  "nav.expression": "Espressione",
  "nav.tequila1": "Tequila 1",
  "nav.tequila2": "Tequila 2",
  "nav.contact": "Contatti",
  "nav.shop": "Shop",

  "shop.eyebrow": "La Collezione",
  "shop.title": "Tre espressioni, una sola luce",
  "shop.intro":
    "Ogni bottiglia di 3 M S.r.l. nasce dalla stessa agave blu e dallo stesso gesto lento. Ciò che cambia è il tempo. Le allocazioni sono limitate: scrivici per riservare la tua.",
  "shop.available": "Disponibile",
  "shop.comingSoon": "In arrivo",
  "shop.reserve": "Riserva",
  "shop.discover": "Scopri l'espressione",
  "shop.notify": "Avvisami",
  "shop.photoSoon": "Fotografia in arrivo",
  "shop.nose": "Naso",
  "shop.palate": "Palato",
  "shop.finish": "Finale",
  "shop.ageing": "Riposo",
  "shop.abv": "Gradazione",
  "shop.format": "Formato",
  "shop.agave": "Agave",
  "shop.back": "← Torna alla collezione",
  "shop.other": "Le altre espressioni",
  "shop.noPurchase":
    "3 M S.r.l. non vende online. Ogni richiesta viene seguita personalmente da noi.",

  "shop.form.intro":
    "Lascia i tuoi dati: ti risponderemo personalmente con disponibilità e modalità di consegna.",
  "shop.form.subject": "Richiesta di allocazione",
  "shop.form.name": "Nome",
  "shop.form.email": "Email",
  "shop.form.expression": "Espressione",
  "shop.form.quantity": "Bottiglie",
  "shop.form.message": "Messaggio",
  "shop.form.submit": "Invia richiesta",
  "shop.form.success": "Grazie.",
  "shop.form.successBody":
    "Abbiamo aperto la tua email con la richiesta già compilata. Inviala e ti risponderemo presto.",
  "shop.form.close": "Chiudi",
  "shop.form.note": "Nessun pagamento, Solo richiesta di allocazione, 18+",

  "badge.origin": "Una casa di tequila, nata in Puglia",
  "hero.title": "Dove l'anima dorata del Messico incontra la luce eterna della Puglia.",
  "hero.subtitle":
    "3 M S.r.l. nasce dove due terre baciate dal sole si incontrano. Una casa di marchi di tequila, fatta con precisione e radicata nel luogo.",

  "home.story.eyebrow": "Origini",
  "home.story.title": "Tre amici, due terre",
  "home.story.body":
    "Luigi, Romano e Luigi Pio condividono da sempre la stessa terra, la Puglia, e lo stesso mestiere tramandato di generazione in generazione. Da queste radici è nata una passione più grande: la tequila, fedele alla tradizione messicana, con lo sguardo rivolto alla Puglia.",
  "home.story.cta": "Leggi la storia",

  "home.brands.eyebrow": "I Nostri Marchi",
  "home.brands.title": "Due tequila, una casa",
  "home.brands.body":
    "3 M S.r.l. sta costruendo un portfolio di marchi di tequila, ognuno con il proprio carattere. Le prime espressioni arrivano presto.",

  "story.eyebrow": "La Storia",
  "story.title": "Tre amici, due terre",
  "story.p1":
    "Luigi Marinaro, Romano Masiello e Luigi Pio Marinaro condividono da sempre la stessa terra: la Puglia. E lo stesso mestiere, tramandato di generazione in generazione, la produzione di vino, cibo e distillati, che qui è cultura prima ancora che lavoro.",
  "story.p2":
    "Da queste radici è nata una passione più grande: il mondo dei distillati, e la tequila su tutti. Chi conosce la fermentazione, il tempo e la pazienza della terra riconosce nell'agave la stessa lingua degli ulivi e delle vigne.",
  "story.p3":
    "Così, negli ultimi anni, hanno intrapreso una nuova avventura: creare una tequila il più possibile fedele alla tradizione messicana, ma con uno sguardo rivolto alla Puglia. 3 M S.r.l. è prodotta in Messico, nel cuore dell'agave blu. È in Puglia che trova la sua casa mediterranea.",
  "story.founders": "I fondatori",
  "story.founders.title": "Tre amici, due terre",
  "story.lm.role": "CO-FOUNDER",
  "story.rm.role": "CO-FOUNDER",
  "story.gm.role": "CO-FOUNDER",
  "story.lm.bio":
    "Imprenditore con esperienza decennale nella gestione operativa e amministrativa aziendale. Co-Titolare della SIMED S.r.l. e della F.lli Marinaro, situate a Cerignola. Luigi Marinaro è l’Amministratore unico della società, nonché responsabile della parte amministrativa e finanziaria.",
  "story.rm.bio":
    "Ri-trasferitosi a Cerignola dopo un’esperienza quinquennale in Olanda come Analista d’Investimenti e Data Analyst presso svarie istituzioni finanziarie, Romano Masiello si occupa della gestione operativa e planning finanziario del progetto.",
  "story.gm.bio":
    "Imprenditore con esperienza pluri-decennale nella gestione aziendale operativa e commerciale. Co-Titolare della SIMED S.r.l. e della F.lli Marinaro, situate a Cerignola. Luigi Pio Marinaro si occupa della componente commerciale e strategica.",

  "expression.eyebrow": "L'espressione",
  "expression.title": "Tequila Reposado",
  "expression.intro":
    "100% agave blu, cottura lenta, distillata in alambicco di rame e riposata in botti di rovere fino a trovare il proprio equilibrio. Un reposado che parla piano.",
  "expression.nose": "Naso",
  "expression.nose.body": "Agave cotta, vaniglia, scorza d'arancia e un respiro di macchia mediterranea.",
  "expression.palate": "Palato",
  "expression.palate.body": "Rotondo e caldo: miele, rovere dolce, pepe bianco.",
  "expression.finish": "Finale",
  "expression.finish.body": "Lungo, morbido, luminoso come l'ora dorata.",
  "expression.specs": "40% VOL, 750 ML, REPOSADO, 100% AGAVE BLU",

  "contact.eyebrow": "Contatti",
  "contact.title": "Scrivici",
  "contact.intro":
    "Per informazioni sul marchio, distribuzione, hospitality o stampa, lascia un messaggio.",
  "contact.name": "Nome",
  "contact.email": "Email",
  "contact.subject": "Oggetto",
  "contact.category": "Motivo",
  "contact.category.info": "Informazioni",
  "contact.category.distribution": "Distribuzione",
  "contact.category.press": "Stampa",
  "contact.category.hospitality": "Hospitality",
  "contact.message": "Messaggio",
  "contact.submit": "Invia messaggio",
  "contact.sending": "Invio in corso…",
  "contact.success": "Grazie. Il tuo messaggio è arrivato.",
  "contact.error": "Qualcosa è andato storto. Riprova.",

  "footer.tagline": "Un tributo alle terre che ci sostengono. Bevi con responsabilità.",
  "footer.nav": "Navigazione",
  "footer.connect": "Contatti",
  "footer.legal.privacy": "Privacy",
  "footer.legal.terms": "Termini",
  "footer.rights": "© 2026 3 M S.r.l.",
  "footer.responsible": "18+, Bevi responsabilmente",

  "age.title": "Un momento, per favore.",
  "age.body":
    "Devi aver raggiunto l'età legale per il consumo di alcolici nel tuo paese per entrare in 3 M S.r.l..",
  "age.question": "Hai raggiunto l'età legale?",
  "age.yes": "Sì, entra",
  "age.no": "No",
  "age.rejected":
    "Ti ringraziamo per la sincerità. Torna quando avrai raggiunto l'età legale per il consumo di alcolici.",
  "age.disclaimer": "3 M S.r.l. ti ricorda di bere responsabilmente.",

  "brandPage.eyebrow": "3 M S.r.l.",
  "brandPage.body": "Stiamo creando qualcosa di nuovo. Questo marchio sarà svelato presto.",

  "legal.eyebrow": "Note legali",
  "legal.privacy.title": "Privacy",
  "legal.privacy.p1":
    "3 M S.r.l. rispetta la tua privacy. Questa pagina è un segnaposto per l'informativa completa, che sarà pubblicata a breve.",
  "legal.privacy.p2":
    "I dati personali inviati tramite il modulo di contatto sono usati solo per rispondere alla tua richiesta e non vengono mai condivisi con terzi.",
  "legal.terms.title": "Termini",
  "legal.terms.p1":
    "3 M S.r.l. è destinato ad adulti in età legale per il consumo di alcolici. Entrando in questo sito confermi di aver raggiunto l'età legale nel tuo paese.",
  "legal.terms.p2": "Bevi 3 M S.r.l. con responsabilità.",

  "notFound.body": "Questa pagina non ha ancora trovato la sua casa.",
  "notFound.home": "← Torna alla home",
};

const es: Dict = {
  "nav.story": "Historia",
  "nav.expression": "Expresión",
  "nav.tequila1": "Tequila 1",
  "nav.tequila2": "Tequila 2",
  "nav.contact": "Contacto",
  "nav.shop": "Tienda",

  "shop.eyebrow": "La Colección",
  "shop.title": "Tres expresiones, una sola luz",
  "shop.intro":
    "Cada botella de 3 M S.r.l. nace del mismo agave azul y del mismo gesto lento. Lo que cambia es el tiempo. Las asignaciones son limitadas: escríbenos para reservar la tuya.",
  "shop.available": "Disponible",
  "shop.comingSoon": "Próximamente",
  "shop.reserve": "Reservar",
  "shop.discover": "Descubre la expresión",
  "shop.notify": "Avísame",
  "shop.photoSoon": "Fotografía próximamente",
  "shop.nose": "Nariz",
  "shop.palate": "Paladar",
  "shop.finish": "Final",
  "shop.ageing": "Reposo",
  "shop.abv": "Graduación",
  "shop.format": "Formato",
  "shop.agave": "Agave",
  "shop.back": "← Volver a la colección",
  "shop.other": "Las otras expresiones",
  "shop.noPurchase":
    "3 M S.r.l. no se vende en línea. Cada solicitud la atendemos personalmente.",

  "shop.form.intro":
    "Déjanos tus datos y te responderemos personalmente con la disponibilidad y la entrega.",
  "shop.form.subject": "Solicitud de asignación",
  "shop.form.name": "Nombre",
  "shop.form.email": "Correo electrónico",
  "shop.form.expression": "Expresión",
  "shop.form.quantity": "Botellas",
  "shop.form.message": "Mensaje",
  "shop.form.submit": "Enviar solicitud",
  "shop.form.success": "Gracias.",
  "shop.form.successBody":
    "Hemos abierto tu correo con la solicitud ya rellenada. Envíala y te responderemos pronto.",
  "shop.form.close": "Cerrar",
  "shop.form.note": "Sin pago, solo solicitud de asignación, +18",

  "badge.origin": "Una casa de tequila, nacida en Puglia",
  "hero.title": "Donde el alma dorada de México se encuentra con la luz eterna de Puglia.",
  "hero.subtitle":
    "3 M S.r.l. nace donde se encuentran dos tierras bendecidas por el sol. Una casa de marcas de tequila, elaborada con precisión y arraigada en el lugar.",

  "home.story.eyebrow": "Orígenes",
  "home.story.title": "Tres amigos, dos tierras",
  "home.story.body":
    "Luigi, Romano y Luigi Pio comparten desde siempre la misma tierra, Puglia, y el mismo oficio transmitido de generación en generación. De esas raíces surgió una pasión más grande: un tequila lo más fiel posible a la tradición mexicana, con la mirada puesta en Puglia.",
  "home.story.cta": "Lee la historia",

  "home.brands.eyebrow": "Nuestras Marcas",
  "home.brands.title": "Dos tequilas, una casa",
  "home.brands.body":
    "3 M S.r.l. está construyendo un portafolio de marcas de tequila, cada una con su propio carácter. Las primeras expresiones llegan pronto.",

  "story.eyebrow": "La Historia",
  "story.title": "Tres amigos, dos tierras",
  "story.p1":
    "Luigi Marinaro, Romano Masiello y Luigi Pio Marinaro comparten desde siempre la misma tierra: Puglia. Y el mismo oficio, transmitido de generación en generación, la elaboración de vino, comida y destilados, que aquí es cultura antes que trabajo.",
  "story.p2":
    "De esas raíces surgió una pasión más grande: el mundo de los destilados, y el tequila sobre todo. Quien conoce la fermentación, el tiempo y la paciencia de la tierra reconoce en el agave el mismo lenguaje que los olivos y las viñas.",
  "story.p3":
    "Así, en los últimos años, emprendieron una nueva aventura: crear un tequila lo más fiel posible a la tradición mexicana, pero con la mirada puesta en Puglia. 3 M S.r.l. se elabora en México, en el corazón del agave azul. Es en Puglia donde encuentra su hogar mediterráneo.",
  "story.founders": "Los fundadores",
  "story.founders.title": "Tres amigos, dos tierras",
  "story.lm.role": "COFUNDADOR",
  "story.rm.role": "COFUNDADOR",
  "story.gm.role": "COFUNDADOR",
  "story.lm.bio":
    "Empresario con décadas de experiencia en la gestión operativa y administrativa de empresas. Copropietario de SIMED S.r.l. y F.lli Marinaro, ambas con sede en Cerignola. Luigi Marinaro es el administrador único de la sociedad y responsable de la administración y las finanzas.",
  "story.rm.bio":
    "Tras regresar a Cerignola después de cinco años en los Países Bajos como Analista de Inversiones y Analista de Datos en diversas instituciones financieras, Romano Masiello se encarga de las operaciones y la planificación financiera del proyecto.",
  "story.gm.bio":
    "Empresario con décadas de experiencia en la gestión operativa y comercial de empresas. Copropietario de SIMED S.r.l. y F.lli Marinaro, ambas con sede en Cerignola. Luigi Pio Marinaro se ocupa de la parte comercial y estratégica del negocio.",

  "expression.eyebrow": "La Expresión",
  "expression.title": "Tequila Reposado",
  "expression.intro":
    "100% agave azul, cocción lenta, destilado en alambique de cobre y reposado en barricas de roble hasta encontrar su equilibrio. Un reposado que habla bajito.",
  "expression.nose": "Nariz",
  "expression.nose.body":
    "Agave cocido, vainilla, piel de naranja y un soplo de monte mediterráneo.",
  "expression.palate": "Paladar",
  "expression.palate.body": "Redondo y cálido: miel, roble dulce, pimienta blanca.",
  "expression.finish": "Final",
  "expression.finish.body": "Largo, suave, luminoso como la hora dorada.",
  "expression.specs": "40% VOL, 750 ML, REPOSADO, 100% AGAVE AZUL",

  "contact.eyebrow": "Contacto",
  "contact.title": "Escríbenos",
  "contact.intro":
    "Para consultas sobre la marca, distribución, hostelería o prensa, déjanos un mensaje.",
  "contact.name": "Nombre",
  "contact.email": "Correo electrónico",
  "contact.subject": "Asunto",
  "contact.category": "Motivo",
  "contact.category.info": "Consulta general",
  "contact.category.distribution": "Distribución",
  "contact.category.press": "Prensa",
  "contact.category.hospitality": "Hostelería",
  "contact.message": "Mensaje",
  "contact.submit": "Enviar mensaje",
  "contact.sending": "Enviando…",
  "contact.success": "Gracias. Tu mensaje ha llegado.",
  "contact.error": "Algo salió mal. Inténtalo de nuevo.",

  "footer.tagline":
    "Un tributo a las tierras que nos sostienen. Disfruta de nuestro oficio con responsabilidad.",
  "footer.nav": "Navegación",
  "footer.connect": "Contacto",
  "footer.legal.privacy": "Privacidad",
  "footer.legal.terms": "Términos",
  "footer.rights": "© 2026 3 M S.r.l.",
  "footer.responsible": "+18, Bebe con responsabilidad",

  "age.title": "Un momento, por favor.",
  "age.body":
    "Debes tener la edad legal para consumir alcohol en tu país para entrar en 3 M S.r.l..",
  "age.question": "¿Tienes la edad legal para consumir alcohol?",
  "age.yes": "Sí, entrar",
  "age.no": "No",
  "age.rejected":
    "Agradecemos tu sinceridad. Vuelve cuando hayas alcanzado la edad legal para consumir alcohol en tu país.",
  "age.disclaimer": "3 M S.r.l. te recuerda disfrutar con responsabilidad.",

  "brandPage.eyebrow": "3 M S.r.l.",
  "brandPage.body": "Estamos creando algo nuevo. Esta marca se presentará pronto.",

  "legal.eyebrow": "Aviso legal",
  "legal.privacy.title": "Privacidad",
  "legal.privacy.p1":
    "3 M S.r.l. respeta tu privacidad. Esta página es un marcador de posición de la política de privacidad completa, que se publicará en breve.",
  "legal.privacy.p2":
    "Los datos personales enviados mediante el formulario de contacto se usan únicamente para responder a tu consulta y nunca se comparten con terceros.",
  "legal.terms.title": "Términos",
  "legal.terms.p1":
    "3 M S.r.l. está dirigido a adultos con edad legal para consumir alcohol. Al entrar en este sitio confirmas que has alcanzado la edad legal en tu país.",
  "legal.terms.p2": "Disfruta de 3 M S.r.l. con responsabilidad.",

  "notFound.body": "Esta página aún no ha encontrado su hogar.",
  "notFound.home": "← Volver al inicio",
};

const DICTS: Record<Locale, Dict> = { en, it, es };

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof en) => string;
}

const I18nContext = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "3m:locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const nav = navigator.language.slice(0, 2).toLowerCase();
      const initial = LOCALES.find((l) => l === stored) ?? LOCALES.find((l) => l === nav);
      if (initial) setLocaleState(initial);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* noop */
    }
  }, []);

  const t = useCallback(
    (key: keyof typeof en) => DICTS[locale][key] ?? DICTS.en[key] ?? String(key),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside I18nProvider");
  return ctx;
}
