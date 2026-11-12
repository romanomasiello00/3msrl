import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/tequila-1")({
  head: () => ({
    meta: [
      { title: "Tequila 1, Spirits Project" },
      { name: "description", content: "A new tequila brand from Spirits Project, coming soon." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Tequila 1, Spirits Project" },
      { property: "og:url", content: "/tequila-1" },
    ],
    links: [{ rel: "canonical", href: "/tequila-1" }],
  }),
  component: BrandPlaceholder,
});

function BrandPlaceholder() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 pb-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow font-brand mb-6">{t("brandPage.eyebrow")}</p>
        <h1 className="font-script text-5xl md:text-6xl text-navy mb-6">
          {t("nav.tequila1")}
        </h1>
        <div className="ornate ornate-stars inline-block mb-8 max-w-full px-6 py-7">
          <span className="badge-label">{t("shop.comingSoon")}</span>
        </div>
        <p className="text-navy/70 leading-relaxed">{t("brandPage.body")}</p>
      </div>
    </section>
  );
}
