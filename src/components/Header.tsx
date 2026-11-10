import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_LEFT = [
  { to: "/tequila-1", label: "nav.tequila1" },
  { to: "/tequila-2", label: "nav.tequila2" },
  { to: "/shop", label: "nav.shop" },
] as const;

const NAV_RIGHT = [
  { to: "/story", label: "nav.story" },
  { to: "/contact", label: "nav.contact" },
] as const;

type NavItem = (typeof NAV_LEFT)[number] | (typeof NAV_RIGHT)[number];

interface NavPillProps {
  item: NavItem;
  className?: string;
  onClick?: () => void;
}

/* Capsule link; styles live in styles.css (.nav-pill). The router adds `is-active`
   while the route (or a child route, e.g. /shop/<slug>) is current. */
function NavPill({ item, className = "", onClick }: NavPillProps) {
  const { t } = useTranslation();
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`nav-pill ${className}`}
      activeProps={{ className: "is-active" }}
    >
      <span className="nav-pill-star" aria-hidden="true">
        ✦
      </span>
      <span className="nav-pill-label">{t(item.label)}</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setScrollY(y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Grow the logo as the user scrolls, capped for balance.
  // Base 1x -> up to 1.35x between 0 and 240px of scroll.
  const logoScale = Math.min(1.35, 1 + (Math.min(scrollY, 240) / 240) * 0.35);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (scrolled ? "bg-crema/85 backdrop-blur-md border-b border-navy/5" : "bg-crema/0")
      }
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8">
        {/* Left nav (desktop) */}
        <div className="hidden md:flex gap-2 flex-1 justify-start">
          {NAV_LEFT.map((item) => (
            <NavPill key={item.to} item={item} />
          ))}
        </div>

        {/* Center wordmark */}
        <Link to="/" className="flex items-center group" aria-label="3 M S.r.l. home">
          <BrandLogo
            variant="compact"
            className="w-40 md:w-48 h-auto origin-center transition-transform duration-300 ease-out group-hover:opacity-90"
            style={{ transform: `scale(${logoScale})` }}
          />
        </Link>

        {/* Right nav (desktop) */}
        <div className="hidden md:flex gap-2 flex-1 justify-end items-center">
          {NAV_RIGHT.map((item) => (
            <NavPill key={item.to} item={item} />
          ))}
          <LanguageSwitcher className="ml-3" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex-1 flex justify-end"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={
                "block h-px w-6 bg-navy transition-transform " +
                (open ? "translate-y-[3px] rotate-45" : "")
              }
            />
            <span
              className={
                "block h-px w-6 bg-navy transition-transform " +
                (open ? "-translate-y-[3px] -rotate-45" : "")
              }
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy/5 bg-crema/95 backdrop-blur-md">
          <div className="px-6 py-8 flex flex-col gap-3 items-center">
            {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
              <NavPill
                key={item.to}
                item={item}
                className="block w-full max-w-xs text-center"
                onClick={() => setOpen(false)}
              />
            ))}
            <LanguageSwitcher expanded className="mt-4 w-full max-w-xs" />
          </div>
        </div>
      )}
    </header>
  );
}
