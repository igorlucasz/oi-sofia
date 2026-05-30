import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GoldDivider, GoldOrnament, PalmSide } from "../components/vintage-ornaments.jsx";

const polaroids = [
  { rot: -6, caption: "um momento especial" },
  { rot: 5,  caption: "para sempre" },
  { rot: -3, caption: "memórias" },
  { rot: 7,  caption: "risos sem fim" },
  { rot: -8, caption: "domingo lento" },
  { rot: 4,  caption: "ouro do dia" },
  { rot: -5, caption: "entre nós" },
  { rot: 6,  caption: "doce instante" },
  { rot: -2, caption: "luz de tarde" },
  { rot: 3,  caption: "guardado aqui" },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("sofia-auth") !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Sofia Marques — 19 anos</title>
        <meta name="description" content="Memórias construídas ao longo de 19 anos. Feliz aniversário, Sofia Marques." />
        <meta property="og:title" content="Sofia Marques — 19 anos" />
        <meta property="og:description" content="Memórias construídas ao longo de 19 anos." />
      </Head>

      <div className="bg-linen relative min-h-screen w-full overflow-x-hidden">
        <PalmSide side="left" />
        <PalmSide side="right" />

        {/* HEADER */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-6 pb-3">
          <span className="font-serif-display text-[15px] tracking-[0.18em] text-[color:var(--ink)]">
            Sofia Marques
          </span>
        </header>

        {/* HERO */}
        <section className="relative z-10 px-6 pt-8 pb-10 text-center">
          <GoldOrnament className="mx-auto text-[color:var(--gold)]" width={90} />

          <h1 className="mt-6 font-serif-display text-[2.5rem] leading-[1.05] font-semibold uppercase tracking-[0.04em] text-[color:var(--ink)] text-shadow-soft">
            Memórias
            <br />
            construídas
            <br />
            ao longo de
            <br />
            <span className="text-[2.9rem] tracking-tight">19 anos!</span>
          </h1>

          <p className="mt-6 text-[1.35rem] text-[color:var(--ink)]">
            <em className="font-serif-body italic">Feliz Aniversário</em>{" "}
            <span className="not-italic">🥳🥳🥳</span>
          </p>

          <GoldDivider className="mx-auto mt-10 w-[260px] text-[color:var(--gold)]" />
        </section>

        {/* POLAROID GALLERY */}
        <section className="relative z-10 px-5 pb-16">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8">
            {polaroids.map((p, i) => (
              <div
                key={i}
                className="polaroid mx-auto w-[150px]"
                style={{
                  transform: `rotate(${p.rot}deg) translateY(${i % 3 === 0 ? "8px" : "0"})`,
                }}
              >
                <img
                  src={`https://placehold.co/300x300/e8d5b0/8B6914?text=%F0%9F%93%B8`}
                  alt="memória"
                  className="block h-[130px] w-full object-cover"
                  loading="lazy"
                />
                <div className="mt-2 text-center font-script text-[1.1rem] leading-none text-[color:var(--ink)]">
                  {p.caption}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUB-FOOTER */}
        <section className="relative z-10 px-8 py-14 text-center">
          <GoldOrnament className="mx-auto text-[color:var(--gold)]" width={70} />

          <blockquote className="mt-6 font-serif-display text-[1.35rem] italic leading-snug text-[color:var(--ink)]">
            "Tem que tá vendo isso ai né..."
          </blockquote>

          <div className="mt-4 font-script-fine text-[1.6rem] text-[color:var(--ink)]">
            — Sofia Marques
          </div>

          <button
            onClick={() => router.push("/mensagens")}
            className="btn-press mt-10 inline-block border border-[color:var(--gold)] bg-[color:var(--ivory)]/40 px-7 py-3 font-serif-display text-[0.78rem] uppercase tracking-vintage text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ivory)]/70"
          >
            Mais uma surpresa
          </button>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 flex items-center justify-between bg-[#2e1a0e] px-6 py-5">
          <span className="font-serif-display text-[0.7rem] tracking-[0.1em] text-[#c9a96e]">
            © Sofia Marques 2026
          </span>
          <span className="font-serif-display text-[0.7rem] tracking-[0.1em] text-[#c9a96e]/70">
            Feito por Igor Lucas rsrs
          </span>
        </footer>
      </div>
    </>
  );
}
