import { Button, ImageFrame, CircularBadge } from "../ui/index.js";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-parchment-100 relative overflow-hidden pt-32 pb-24 px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 max-w-screen-xl mx-auto">

        {/* Coluna esquerda — texto */}
        <div className="flex flex-col justify-center">

          {/* Ornamento */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mb-8">
            <path d="M12 1 L23 12 L12 23 L1 12 Z" stroke="#A88830" strokeWidth="1" />
            <path d="M12 5 L19 12 L12 19 L5 12 Z" stroke="#A88830" strokeWidth="0.75" />
          </svg>

          <h1
            className="font-display font-bold uppercase text-sepia-800 tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.5rem, 3rem + 4vw, 7rem)", lineHeight: "0.93" }}
          >
            <span className="block">Momentos</span>
            <span className="block">Que Ficam</span>
            <span className="block">Para Sempre.</span>
          </h1>

          <div className="w-10 h-px bg-gold-500 my-8" />

          <p className="font-body italic text-body-lg text-sepia-700 max-w-xs leading-relaxed">
            Uma celebração de tudo que você é
            e de tudo que ainda está por vir.
          </p>

          <Button variant="ghost" href="#galeria" className="mt-10">
            Ver a Galeria
          </Button>
        </div>

        {/* Coluna direita — colagem de fotos */}
        <div className="relative hidden lg:block">

          {/* Imagem grande — topo */}
          <ImageFrame aspectRatio="landscape" className="w-full" />

          {/* Retrato sobreposto */}
          <ImageFrame
            aspectRatio="portrait"
            className="w-[55%] absolute top-[28%] left-[8%] shadow-warm-lg z-10"
          />

          {/* Badge circular */}
          <div className="absolute bottom-[10%] right-[4%] z-20">
            <CircularBadge
              topText="A Beleza do Tempo"
              bottomText="A Arte de Sentir"
              size={110}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
