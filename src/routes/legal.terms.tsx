import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms, 3 M S.r.l." },
      { name: "description", content: "Terms of use for the 3 M S.r.l. site, including legal drinking age and responsible enjoyment." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Terms of Use, 3 M S.r.l." },
      { property: "og:description", content: "Conditions for using the 3 M S.r.l. site: legal drinking age, content use and responsible enjoyment." },
      { property: "og:url", content: "/legal/terms" },
    ],
    links: [{ rel: "canonical", href: "/legal/terms" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
      <p className="eyebrow mb-6">{t("legal.eyebrow")}</p>
      <h1 className="font-script text-5xl text-navy mb-10">{t("legal.terms.title")}</h1>
      <div className="space-y-6 text-navy/80 leading-relaxed">
        <p>{t("legal.terms.p1")}</p>
        <p>{t("legal.terms.p2")}</p>
      </div>
    </section>
  );
}
