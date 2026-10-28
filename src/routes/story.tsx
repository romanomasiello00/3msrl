import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import storyHands from "@/assets/story-hands.jpg";
import storyPuglia from "@/assets/story-puglia.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story — 3 M S.r.l." },
      {
        name: "description",
        content:
          "Three friends, two lands. Luigi Marinaro, Romano Masiello and Luigi Pio Marinaro on how 3 M S.r.l. was born between Puglia and Mexico.",
      },
      { property: "og:title", content: "The Story — 3 M S.r.l." },
      {
        property: "og:description",
        content:
          "Three friends, two lands. How 3 M S.r.l. was born between Puglia and Mexico.",
      },
      { property: "og:url", content: "/story" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "The Story — 3 M S.r.l.",
          description:
            "Three friends from Puglia and their love for Mexico led to 3 M S.r.l., a tequila with a Mexican soul and a Pugliese spirit.",
          mainEntity: {
            "@type": "Organization",
            name: "3 M S.r.l.",
            slogan: "Where the golden soul of Mexico meets the timeless light of Puglia.",
            founder: [
              { "@type": "Person", name: "Luigi Marinaro" },
              { "@type": "Person", name: "Romano Masiello" },
              { "@type": "Person", name: "Luigi Pio Marinaro" },
            ],
          },
        }),
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useTranslation();

  const founders = [
    {
      name: "Luigi Marinaro",
      image: "/email/luigi-ritratto.png",
      role: t("story.lm.role"),
      bio: t("story.lm.bio"),
    },
    {
      name: "Romano Masiello",
      image: "/email/romano-ritratto.png",
      role: t("story.rm.role"),
      bio: t("story.rm.bio"),
    },
    {
      name: "Luigi Pio Marinaro",
      image: "/email/luigi-pio-marinaro-ritratto.png",
      role: t("story.gm.role"),
      bio: t("story.gm.bio"),
    },
  ];

  return (
    <>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">{t("story.eyebrow")}</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[1.05] text-balance mb-10">
            {t("story.title")}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5">
            <img src={storyHands} alt="Hands and blue agave" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5 md:mt-16">
            <img src={storyPuglia} alt="Puglian olive grove at sunset" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-navy/80 font-display font-normal">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-gold">
            {t("story.p1")}
          </p>
          <p>{t("story.p2")}</p>
          <p>{t("story.p3")}</p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="px-6 py-2 border border-gold/40 rounded-full">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-ink">
              Hecho en México · Imported to Puglia
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">{t("story.founders")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy italic">
              {t("story.founders.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {founders.map((f) => (
              <div
                key={f.name}
                className="group flex flex-col items-center text-center p-8 border border-navy/10 rounded-md hover:border-gold/60 transition-colors bg-soft-white/50"
              >
                <div className="size-28 shrink-0 overflow-hidden rounded-full border border-navy/15 bg-white mb-6 group-hover:border-gold transition-colors">
                  <img
                    src={f.image}
                    alt={`Portrait of ${f.name}`}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow mb-3">{f.role}</p>
                <h3 className="font-display text-2xl text-navy mb-3">{f.name}</h3>
                <p className="text-sm leading-relaxed text-navy/70">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
