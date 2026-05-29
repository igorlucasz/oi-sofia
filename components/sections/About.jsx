import { ImageFrame, OrnamentalDivider } from "../ui/index.js";

export default function About() {
  return (
    <section id="sobre" className="bg-parchment-100 py-28 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto items-center">

        {/* Coluna esquerda — texto */}
        <div>
          <OrnamentalDivider variant="diamond" className="mb-6 max-w-[120px]" />

          <p className="font-sc text-label tracking-widest text-gold-600 uppercase mb-6">
            Sobre a Sofia
          </p>

          <div className="flex flex-col gap-5">
            <p className="font-body italic text-body-lg text-sepia-700 leading-relaxed">
              Nascida para deixar a vida mais bonita,
              Sofia carrega em cada gesto a leveza
              de quem sabe encontrar beleza no ordinário.
            </p>
            <p className="font-body italic text-body-lg text-sepia-700 leading-relaxed">
              Cada memória que ela cria fica.
            </p>
            <p className="font-body italic text-body-lg text-sepia-700 leading-relaxed">
              Cada emoção que ela desperta permanece.
            </p>
          </div>

          <OrnamentalDivider variant="dots" className="mt-10 max-w-[80px]" />
        </div>

        {/* Coluna direita — foto */}
        <ImageFrame aspectRatio="portrait" className="w-full max-w-xs mx-auto" />

      </div>
    </section>
  );
}
