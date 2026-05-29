import { SITE } from "../../data/site.js";

export default function Footer() {
  return (
    <footer className="bg-sepia-900 py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap gap-4">

        <p className="font-sc text-label tracking-widest text-gold-600/70">
          © Sofia Marques {SITE.year}
        </p>

        <nav className="flex items-center gap-1 font-sc text-label tracking-wider">
          <a href={SITE.social.instagram} className="text-parchment-300/60 hover:text-gold-400 transition-colors duration-200">
            INSTAGRAM
          </a>
          <span aria-hidden className="text-parchment-300/40 px-1">·</span>
          <a href={SITE.social.pinterest} className="text-parchment-300/60 hover:text-gold-400 transition-colors duration-200">
            PINTEREST
          </a>
          <span aria-hidden className="text-parchment-300/40 px-1">·</span>
          <a href={`mailto:${SITE.social.email}`} className="text-parchment-300/60 hover:text-gold-400 transition-colors duration-200">
            EMAIL
          </a>
        </nav>

        <p className="font-body italic text-caption text-parchment-400/50">
          Desenvolvido com alma
        </p>

      </div>
    </footer>
  );
}
