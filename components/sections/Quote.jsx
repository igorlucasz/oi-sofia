import { OrnamentalDivider } from "../ui/index.js";

export default function Quote() {
  return (
    <section className="bg-parchment-200 py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">

        <span
          className="font-display text-gold-500 block mb-[-1.5rem]"
          style={{ fontSize: "5rem", lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </span>

        <blockquote
          className="font-body italic text-sepia-800 leading-[1.6] mb-8"
          style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem)" }}
        >
          Há lugares que não saem da gente.
          Ficam. Como um verso bonito
          que a alma reconhece.
        </blockquote>

        <OrnamentalDivider variant="line" className="max-w-[120px] mx-auto mb-8" />

        <p className="font-script text-[2rem] text-sepia-700">
          Sofia Marques
        </p>

      </div>
    </section>
  );
}
