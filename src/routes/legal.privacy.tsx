import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy, 3 M S.r.l." },
      { name: "description", content: "How 3 M S.r.l. handles the personal data you share through the site and contact form." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Privacy Notice, 3 M S.r.l." },
      { property: "og:description", content: "How 3 M S.r.l. collects, uses and protects personal data submitted through this site." },
      { property: "og:url", content: "/legal/privacy" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
      <p className="eyebrow mb-6">{t("legal.eyebrow")}</p>
      <h1 className="font-script text-5xl text-navy mb-10">{t("legal.privacy.title")}</h1>
      <div className="space-y-6 text-navy/80 leading-relaxed">
        <p>{t("legal.privacy.p1")}</p>
        <p>{t("legal.privacy.p2")}</p>
      </div>
    </section>
  );
}
