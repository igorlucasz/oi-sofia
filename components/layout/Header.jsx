import { useState, useEffect } from 'react';

export default function Header() {
  const [mounted,    setMounted]    = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    function onScroll() { setIsScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrolledCls = mounted && isScrolled
    ? 'bg-parchment-100/95 backdrop-blur-sm shadow-warm-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 h-16 md:h-20 transition-all duration-300 ${scrolledCls}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-full flex items-center">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="#8B6A1A" strokeWidth="1" />
            <path d="M14 7 L21 14 L14 21 L7 14 Z" stroke="#8B6A1A" strokeWidth="0.75" />
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

      </div>
    </header>
  );
}
