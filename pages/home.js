import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GoldDivider, GoldOrnament, PalmSide } from "../components/vintage-ornaments.jsx";

const PH_A = "https://placehold.co/600x600/e8d5b0/8B6914?text=%F0%9F%93%B8";
const PH_B = "https://placehold.co/600x600/c9a86c/6b4e0e?text=%F0%9F%93%B8";

const polaroids = [
  { rot: -6, caption: "um momento especial", photos: [PH_A, PH_B] },
  { rot: 5,  caption: "para sempre",         photos: [PH_A, PH_B] },
  { rot: -3, caption: "memórias",            photos: [PH_A, PH_B] },
  { rot: 7,  caption: "risos sem fim",       photos: [PH_A, PH_B] },
  { rot: -8, caption: "domingo lento",       photos: [PH_A, PH_B] },
  { rot: 4,  caption: "ouro do dia",         photos: [PH_A, PH_B] },
  { rot: -5, caption: "entre nós",           photos: [PH_A, PH_B] },
  { rot: 6,  caption: "doce instante",       photos: [PH_A, PH_B] },
  { rot: -2, caption: "luz de tarde",        photos: [PH_A, PH_B] },
  { rot: 3,  caption: "guardado aqui",       photos: [PH_A, PH_B] },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("sofia-auth") !== "true") {
      router.push("/");
    }
  }, [router]);

  // ── Preview auto-cycle ────────────────────────────────────────────────────
  const [previewIdx, setPreviewIdx] = useState(() => polaroids.map(() => 0));

  useEffect(() => {
    // Stagger each polaroid's cycle by 800ms so they don't all flip together
    const cleanups = polaroids.map((p, i) => {
      let intervalId;
      const timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          setPreviewIdx(prev => {
            const next = [...prev];
            next[i] = (next[i] + 1) % p.photos.length;
            return next;
          });
        }, 12000);
      }, i * 800);
      return () => { clearTimeout(timeoutId); clearInterval(intervalId); };
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  // ── Modal ─────────────────────────────────────────────────────────────────
  const [modal, setModal] = useState(null); // { pIdx, phIdx } | null

  const openModal  = (pIdx) => setModal({ pIdx, phIdx: previewIdx[pIdx] });
  const closeModal = () => setModal(null);

  const goNext = () =>
    setModal(m => m && { ...m, phIdx: (m.phIdx + 1) % polaroids[m.pIdx].photos.length });
  const goPrev = () =>
    setModal(m => m && {
      ...m,
      phIdx: (m.phIdx - 1 + polaroids[m.pIdx].photos.length) % polaroids[m.pIdx].photos.length,
    });

  // Scroll lock while modal is open
  useEffect(() => {
    if (!modal) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [!!modal]);

  // Keyboard navigation
  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => {
      if (e.key === "Escape")      closeModal();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  // ── Drag / swipe (modal) ──────────────────────────────────────────────────
  const drag = useRef({ startX: 0, active: false });
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (x) => { drag.current = { startX: x, active: true }; setIsDragging(true); };
  const onDragMove  = (x) => { if (drag.current.active) setDragOffset(x - drag.current.startX); };
  const onDragEnd   = ()  => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const delta = dragOffset;
    setDragOffset(0);
    setIsDragging(false);
    if (Math.abs(delta) > 50) delta < 0 ? goNext() : goPrev();
  };

  const photos = modal ? polaroids[modal.pIdx].photos : [];

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
                className="mx-auto w-[150px] cursor-pointer"
                style={{ transform: `rotate(${p.rot}deg) translateY(${i % 3 === 0 ? "8px" : "0"})` }}
                onClick={() => openModal(i)}
              >
                <div className="polaroid transition-transform duration-150 hover:scale-105 active:scale-95">
                  {/* Crossfade: todas as fotos empilhadas, só a atual com opacity 1 */}
                  <div className="relative h-[130px] w-full overflow-hidden">
                    {p.photos.map((src, j) => (
                      <img
                        key={j}
                        src={src}
                        alt="memória"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          opacity: j === previewIdx[i] ? 1 : 0,
                          transition: "opacity 0.7s ease",
                        }}
                        draggable={false}
                      />
                    ))}
                  </div>
                  <div className="mt-2 text-center font-script text-[1.1rem] leading-none text-[color:var(--ink)]">
                    {p.caption}
                  </div>
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

      {/* ── MODAL ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Wrapper gives relative context for the floating close button */}
          <div className="relative animate-modal-in" onClick={(e) => e.stopPropagation()}>

            {/* Close button — floats above the polaroid frame */}
            <button
              className="absolute -top-9 right-0 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors text-lg"
              onClick={closeModal}
            >
              ✕
            </button>

          <div
            className="w-[85vw] max-w-[320px]"
            style={{
              background: "#fdfaf3",
              padding: "10px 10px 42px 10px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(139,105,20,0.12)",
            }}
          >
            {/* ── Image area (relative + overflow-hidden keeps arrows + fade inside) */}
            <div
              className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
              style={{ aspectRatio: "1/1", touchAction: "pan-y" }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseMove={(e) => onDragMove(e.clientX)}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
              onTouchEnd={onDragEnd}
            >
              {/* Slide: cada foto ocupa 100% do container e se posiciona
                  pelo seu índice relativo ao atual. % é relativo à própria
                  largura da img (= container), então 1 passo = 1 tela. */}
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`foto ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    transform: `translateX(calc(${(i - modal.phIdx) * 100}% + ${dragOffset}px))`,
                    transition: isDragging ? "none" : "transform 0.32s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  draggable={false}
                />
              ))}

              {/* Arrows — inset-y-0 so they stay inside overflow-hidden, never bleed into white area */}
              {photos.length > 1 && (
                <>
                  <button
                    className="absolute left-0 inset-y-0 flex items-center pl-2 pr-6 text-white text-4xl leading-none opacity-60 hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(to right, rgba(0,0,0,0.30), transparent)" }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-0 inset-y-0 flex items-center pr-2 pl-6 text-white text-4xl leading-none opacity-60 hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(to left, rgba(0,0,0,0.30), transparent)" }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="mt-3 text-center font-script text-[1.15rem] leading-none text-[color:var(--ink)]">
              {polaroids[modal.pIdx].caption}
            </div>

            {/* Dot indicators */}
            {photos.length > 1 && (
              <div className="flex justify-center gap-2 mt-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModal(m => m && { ...m, phIdx: i })}
                    className="w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      background: i === modal.phIdx
                        ? "oklch(0.512 0.108 70)"
                        : "oklch(0.512 0.108 70 / 0.25)",
                      transform: i === modal.phIdx ? "scale(1.3)" : "scale(1)",
                    }}
                    aria-label={`foto ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          </div>{/* /wrapper */}
        </div>
      )}
    </>
  );
}
