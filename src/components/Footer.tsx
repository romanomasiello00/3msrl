import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-navy/10 bg-crema">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6 max-w-md">
            <BrandLogo
              className="w-64 md:w-80 h-auto"
              loading="lazy"
              wordmark="Spirits Project"
              alt="Spirits Project Puglia"
            />
            <p className="font-signature max-w-[30ch] text-[17px] leading-normal text-navy/85">
              {t("footer.tagline")}
            </p>
            <p className="font-signature star-prefix text-[16px] font-medium text-gold-ink">
              {t("badge.origin")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <div className="space-y-4">
              <p className="section-label">{t("footer.nav")}</p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/shop"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("nav.shop")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/story"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("nav.story")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tequila-1"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("nav.tequila1")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tequila-2"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("nav.tequila2")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="section-label">{t("footer.connect")}</p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/contact"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/privacy"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("footer.legal.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/terms"
                    className="font-signature signature-link text-[16.5px] text-navy/90"
                  >
                    {t("footer.legal.terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-navy/10 gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-navy/40">
            {t("footer.rights")}
          </span>
          <div className="ornate ornate-sm badge-label px-5 py-1.5 text-center text-[15px]">
            {t("footer.responsible")}
          </div>
        </div>
      </div>
    </footer>
  );
}
