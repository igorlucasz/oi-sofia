import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Hero, Quote } from "../components/sections/index.js";

function GalleryItem({ caption, w, ratio, rot, mt, mb, ty, src }) {
  const outerStyle = { width: w, flexShrink: 0 };
  if (mt) outerStyle.marginTop = mt;
  if (mb) outerStyle.marginBottom = mb;
  if (ty) outerStyle.transform = `translateY(${ty})`;

  return (
    <div style={outerStyle}>
      <div
        className={`w-full relative overflow-hidden rounded-sm ${src ? "" : "bg-parchment-300 ring-1 ring-gold-600/20"}`}
        style={{ aspectRatio: ratio, transform: `rotate(${rot})` }}
      >
        {src && (
          <Image
            src={src}
            alt=""
            fill
            unoptimized
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 90vw, 400px"
          />
        )}
      </div>
      {caption && (
        <p className="font-body italic text-[0.8rem] text-sepia-700 leading-snug text-center mt-2">
          {caption}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("sofia-auth") !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="animate-page-zoom-in">
      {/* vistarj — abre a página acima do hero, full-bleed */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1264/848" }}
      >
        <Image
          src="/images/vistarj.png"
          alt=""
          fill
          unoptimized
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      <Hero />

      <div className="relative">
        {/* Galeria contínua — memórias e fotos decorativas misturadas */}
        <section className="bg-parchment-100 pt-12 pb-20 overflow-hidden">
          <div className="px-5 mx-auto space-y-6" style={{ maxWidth: "500px" }}>
            {/* mem — retrato, direita */}
            <div className="flex justify-end">
              <GalleryItem
                caption="Aquela tarde boa."
                w="65%"
                ratio="3/4"
                rot="-1.5deg"
                mt="0rem"
              />
            </div>

            {/* folhas (2:3, grande) + mem quadrado */}
            <div className="flex items-end gap-3">
              <GalleryItem
                src="/images/folhas.png"
                w="50%"
                ratio="2/3"
                rot="2deg"
                mb="1rem"
              />
              <GalleryItem
                caption="Rindo sem motivo."
                w="42%"
                ratio="1/1"
                rot="-0.8deg"
              />
            </div>

            {/* mem — paisagem larga, direita */}
            <div className="flex justify-end pr-2">
              <GalleryItem
                caption="Sempre juntos."
                w="80%"
                ratio="16/9"
                rot="0.5deg"
              />
            </div>

            {/* dois mems retrato, escalonados */}
            <div className="flex items-start gap-3">
              <GalleryItem
                caption="Saudade disso."
                w="46%"
                ratio="3/4"
                rot="-1deg"
              />
              <GalleryItem
                caption="Momento favorito."
                w="44%"
                ratio="3/4"
                rot="1.5deg"
                mt="2rem"
              />
            </div>

            {/* bondinho — retrato solo, grande, levemente à esquerda */}
            <div className="flex justify-start pl-2">
              <GalleryItem
                src="/images/bondinho.png"
                w="68%"
                ratio="848/996"
                rot="-1.2deg"
              />
            </div>

            {/* mem — retrato, direita */}
            <div className="flex justify-end">
              <GalleryItem
                caption="Era perfeito."
                w="58%"
                ratio="3/4"
                rot="0.5deg"
              />
            </div>

            {/* jornal — retrato solo, grande, levemente à direita */}
            <div className="flex justify-end pr-2">
              <GalleryItem
                src="/images/jornal.png"
                w="70%"
                ratio="2/3"
                rot="-1.5deg"
              />
            </div>

            {/* mem — retrato isolado, offset esquerda */}
            <div className="flex pl-10">
              <GalleryItem caption="Só nós." w="52%" ratio="3/4" rot="-1deg" />
            </div>

            {/* castaoportal — paisagem larga, solo, maximizada */}
            <div className="flex justify-center">
              <GalleryItem
                src="/images/castaoportal.png"
                w="92%"
                ratio="3/2"
                rot="-0.8deg"
              />
            </div>

            {/* mem — retrato final, direita */}
            <div className="flex justify-end pr-4">
              <GalleryItem
                caption="Ficou na memória."
                w="52%"
                ratio="3/4"
                rot="1.5deg"
                mt="1rem"
              />
            </div>
          </div>
        </section>

      </div>

      <Quote />

      {/* Encerramento */}
      <section className="py-20 px-6 text-center bg-parchment-200">
        <p className="font-script text-[2.5rem] text-sepia-700 mb-4">
          Sofia Marques
        </p>
        <p className="font-sc text-label tracking-widest text-gold-600 uppercase">
          02 · 06 · 2007 — 02 · 06 · 2025
        </p>
      </section>
    </div>
  );
}
