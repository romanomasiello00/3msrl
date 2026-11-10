import { useEffect, useRef, useState } from "react";
import { LOCALES, useTranslation, type Locale } from "@/lib/i18n";

/* Native names: each language names itself, so no translation needed. */
const NAMES: Record<Locale, string> = { en: "English", it: "Italiano", es: "Español" };

interface Props {
  className?: string;
  /** Mobile menu: render already open, current language on top, no toggle. */
  expanded?: boolean;
}

export function LanguageSwitcher({ className = "", expanded = false }: Props) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpen = expanded || open;
  const others = LOCALES.filter((l) => l !== locale);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  // ponytail: desktop wrapper has a fixed box so the pill can grow over the page
  // instead of pushing the header taller; 124px fits the longest native name.
  const wrapCls = expanded ? "relative" : "relative h-[38px] w-[124px]";
  const pillCls =
    "lang-pill " +
    (expanded ? "relative w-full" : "absolute top-0 right-0 w-full") +
    (isOpen ? " is-open" : "");

  return (
    <div ref={rootRef} className={`${wrapCls} ${className}`}>
      <div className={pillCls}>
        {expanded ? (
          <span className="lang-pill-trigger" aria-current="true" lang={locale}>
            {NAMES[locale]}
          </span>
        ) : (
          <button
            type="button"
            className="lang-pill-trigger"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`Language: ${NAMES[locale]}`}
            lang={locale}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{NAMES[locale]}</span>
            <svg
              className="lang-pill-chevron"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <path d="M1 3.5l4 4 4-4" />
            </svg>
          </button>
        )}
        <div className="lang-pill-more">
          <div role="listbox" aria-label="Language" aria-hidden={!isOpen}>
            {others.map((l) => (
              <button
                key={l}
                type="button"
                role="option"
                aria-selected={false}
                lang={l}
                tabIndex={isOpen ? 0 : -1}
                className="lang-pill-item"
                onClick={() => choose(l)}
              >
                {NAMES[l]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
