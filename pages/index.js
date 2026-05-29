import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const CORRECT_DATE = "02/06/2007";

function applyMask(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export default function EntryPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    if (status !== "idle") setStatus("idle");
    const masked = applyMask(e.target.value);
    setValue(masked);
    if (masked.length === 10) {
      if (masked === CORRECT_DATE) {
        setStatus("success");
        setTimeout(() => {
          sessionStorage.setItem("sofia-auth", "true");
          router.push("/home");
        }, 1200);
      } else {
        setStatus("error");
      }
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* fundo copacabana */}
      <Image
        src="/images/copacabana.png"
        alt=""
        fill
        unoptimized
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "saturate(1.2)",
        }}
        sizes="100vw"
      />

      {/* overlay escuro leve para contraste */}
      <div className="absolute inset-0 bg-black/10" />

      {/* caixa glass */}
      <div
        className="relative z-10 flex flex-col items-center px-10 py-12 rounded-2xl animate-glass-place"
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(4px) saturate(150%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow:
            "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
          width: "300px",
        }}
      >
        <h1
          className="font-display font-bold uppercase text-white text-center mb-2 leading-tight"
          style={{
            fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)",
            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          Para Sofia
        </h1>

        <p className="font-body italic text-white/80 text-center mb-10">
          Digite a data de nascimento para continuar.
        </p>

        <input
          type="text"
          inputMode="numeric"
          placeholder="DD/MM/AAAA"
          value={value}
          onChange={handleChange}
          className={`w-full max-w-[280px] text-center font-sc tracking-widest bg-transparent border-b py-3 outline-none text-lg transition-colors duration-200 placeholder:text-white/40 ${
            status === "error"
              ? "border-red-400/80 text-red-200 animate-shake"
              : status === "success"
                ? "border-green-400/80 text-green-200 animate-success"
                : "border-white/60 text-white"
          }`}
        />

        <div className="mt-5 h-8">
          {status === "error" && (
            <p className="font-sc text-sm tracking-wider text-red-200/90 text-center">
              Não era pra você acessar isso aqui... 🤨
            </p>
          )}
          {status === "success" && (
            <p className="font-sc text-sm tracking-wider text-green-200/90 text-center">
              Oi, Sofia rs 😉
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
