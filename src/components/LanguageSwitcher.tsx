import { LOCALES, useTranslation } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation();
  return (
    <div
      className={
        "ornate ornate-label inline-flex items-center p-1.5 text-[12px] tracking-[0.14em] " +
        className
      }
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={
            "min-h-7 px-3 transition-[background-color,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
            (locale === l ? "bg-navy text-crema" : "text-navy/60 hover:text-navy")
          }
          aria-pressed={locale === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
