import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { GENERAL_CONTACT, TEAM, telHref, type Contact } from "@/lib/contacts";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, 3 M S.r.l." },
      {
        name: "description",
        content: "Write to 3 M S.r.l. for general enquiries, distribution, press or hospitality.",
      },
      { property: "og:title", content: "Contact, 3 M S.r.l." },
      {
        property: "og:description",
        content:
          "Write to 3 M S.r.l. for enquiries about the brand, distribution, hospitality or press.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const ICON = { size: 18, strokeWidth: 1.25 } as const;

interface LineProps {
  href: string;
  icon: ReactNode;
  className?: string;
  children: string;
}

/* One tappable email or phone line: gold line icon, Fraunces italic text, double rule on hover. */
function ContactLine({ href, icon, className = "", children }: LineProps) {
  return (
    <a
      href={href}
      className={`group font-signature inline-flex items-center gap-3 text-navy transition-colors hover:text-gold-ink ${className}`}
    >
      <span aria-hidden="true" className="shrink-0 text-gold">
        {icon}
      </span>
      <span className="signature-link [overflow-wrap:anywhere]">{children}</span>
    </a>
  );
}

function PersonCard({ person }: { person: Contact }) {
  const { t } = useTranslation();
  return (
    <div className="group/card flex flex-col items-center gap-6 rounded-md border border-navy/10 bg-soft-white/50 p-6 text-center transition-colors hover:border-gold/60 sm:flex-row sm:gap-8 sm:p-8 sm:text-left">
      <div className="size-24 shrink-0 overflow-hidden rounded-full border border-navy/15 bg-white transition-colors group-hover/card:border-gold">
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-2xl text-navy">{person.name}</h2>
        <p className="font-signature star-prefix mb-5 mt-2 text-[15px] font-medium text-gold-ink">
          {t(person.role)}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {person.email && (
            <ContactLine
              href={`mailto:${person.email}`}
              icon={<Mail {...ICON} />}
              className="text-[16px]"
            >
              {person.email}
            </ContactLine>
          )}
          {person.phone && (
            <ContactLine
              href={telHref(person.phone)}
              icon={<Phone {...ICON} />}
              className="text-[17px]"
            >
              {person.phone}
            </ContactLine>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const { t } = useTranslation();
  const people = TEAM.filter((p) => p.email || p.phone);

  return (
    <section className="px-6 pb-32 pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <p className="section-label mb-6">{t("contact.eyebrow")}</p>
          <h1 className="mb-6 font-script text-5xl text-navy md:text-6xl">{t("contact.title")}</h1>
          <p className="leading-relaxed text-navy/70">{t("contact.intro")}</p>
        </div>

        <div className="ornate ornate-stars mx-auto w-fit max-w-full px-4 py-9 text-center sm:px-11">
          <p className="font-signature star-prefix mb-3 text-[17px] font-medium text-gold-ink">
            {t("contact.general")}
          </p>
          <ContactLine
            href={`mailto:${GENERAL_CONTACT.email}`}
            icon={<Mail {...ICON} />}
            className="text-[17px] sm:text-[22px] md:text-[24px]"
          >
            {GENERAL_CONTACT.email}
          </ContactLine>
          {GENERAL_CONTACT.phone && (
            <div className="mt-3">
              <ContactLine
                href={telHref(GENERAL_CONTACT.phone)}
                icon={<Phone {...ICON} />}
                className="text-[18px] md:text-[20px]"
              >
                {GENERAL_CONTACT.phone}
              </ContactLine>
            </div>
          )}
        </div>

        {people.length > 0 && (
          <>
            <p className="font-signature star-prefix mb-10 mt-20 text-center text-[17px] font-medium text-gold-ink">
              {t("contact.direct")}
            </p>
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              {people.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
