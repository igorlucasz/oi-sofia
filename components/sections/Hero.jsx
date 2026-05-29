export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-parchment-100 overflow-hidden pt-28 pb-20 px-6 text-center flex flex-col items-center justify-center"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="mb-8"
      >
        <path
          d="M12 1 L23 12 L12 23 L1 12 Z"
          stroke="#A88830"
          strokeWidth="1"
        />
        <path
          d="M12 5 L19 12 L12 19 L5 12 Z"
          stroke="#A88830"
          strokeWidth="0.75"
        />
      </svg>

      <h1
        className="font-display font-bold uppercase text-sepia-800 tracking-[-0.02em]"
        style={{
          fontSize: "clamp(3.5rem, 3rem + 4vw, 7rem)",
          lineHeight: "0.93",
        }}
      >
        <span className="block">18 Anos</span>
        <span className="block">da Sofia.</span>
      </h1>

      <div className="w-10 h-px bg-gold-500 my-8 mx-auto" />

      <p className="font-body italic text-body-lg text-sepia-700 max-w-xs leading-relaxed">
        Feliz aniversário! 🥳🥳🥳
      </p>
    </section>
  );
}
