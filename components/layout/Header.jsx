import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NAV_LINKS, SITE } from "../../data/site.js";

export default function Header() {
  const router   = useRouter();
  // mounted flag prevents SSR/client hydration mismatch on scroll-based class
  const [mounted,    setMounted]    = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledCls = mounted && isScrolled
    ? "bg-parchment-100/95 backdrop-blur-sm shadow-warm-sm"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 md:h-20 transition-all duration-300 ${scrolledCls}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            {/* outer diamond */}
            <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="#8B6A1A" strokeWidth="1" />
            {/* inner diamond */}
            <path d="M14 7 L21 14 L14 21 L7 14 Z" stroke="#8B6A1A" strokeWidth="0.75" />
            {/* center dot */}
            <circle cx="14" cy="14" r="2" fill="#8B6A1A" />
          </svg>

          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-sepia-800 uppercase">
              Sofia
            </span>
            <span className="font-sc text-[0.55rem] tracking-[0.25em] text-gold-600 uppercase">
              Marques
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = router.asPath === href;
            return (
              <a
                key={href}
                href={href}
                className={[
                  "font-sc text-caption tracking-wide transition-colors duration-200",
                  isActive
                    ? "text-gold-600 underline underline-offset-4 decoration-gold-400"
                    : "text-sepia-800 hover:text-gold-600",
                ].join(" ")}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger — TODO: mobile menu */}
        <button
          className="md:hidden flex flex-col justify-center gap-1 p-2"
          aria-label="Abrir menu"
        >
          <span className="block w-5 h-px bg-sepia-800" />
          <span className="block w-5 h-px bg-sepia-800" />
          <span className="block w-5 h-px bg-sepia-800" />
        </button>

      </div>
    </header>
  );
}
