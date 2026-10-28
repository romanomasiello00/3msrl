import { useTranslation, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation();
  const opts: Locale[] = ["en", "it"];
  return (
    <div
      className={
        "inline-flex items-center rounded-full border border-navy/20 bg-crema p-1 text-[10px] font-medium uppercase tracking-[0.15em] " +
        className
      }
      role="group"
      aria-label="Language"
    >
      {opts.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={
            "min-h-8 rounded-full px-3 transition-[background-color,color,transform] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
            (locale === l ? "bg-navy text-crema" : "text-navy/60 hover:bg-navy/8 hover:text-navy")
          }
          aria-pressed={locale === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
