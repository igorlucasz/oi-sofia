import { useState } from 'react';
import { useRouter } from 'next/router';

const CORRECT_DATE = '02/06/2007';

function applyMask(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export default function EntryPage() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    if (status !== 'idle') setStatus('idle');
    const masked = applyMask(e.target.value);
    setValue(masked);
    if (masked.length === 10) {
      if (masked === CORRECT_DATE) {
        setStatus('success');
        setTimeout(() => {
          sessionStorage.setItem('sofia-auth', 'true');
          router.push('/home');
        }, 1200);
      } else {
        setStatus('error');
      }
    }
  }

  return (
    <main className="min-h-screen bg-parchment-100 flex flex-col items-center justify-center px-6">

      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-8">
        <path d="M24 2 L46 24 L24 46 L2 24 Z" stroke="#A88830" strokeWidth="1.2" />
        <path d="M24 10 L38 24 L24 38 L10 24 Z" stroke="#A88830" strokeWidth="0.8" />
      </svg>

      <h1
        className="font-display font-bold uppercase text-sepia-800 text-center mb-2 leading-tight"
        style={{ fontSize: 'clamp(2rem, 1.5rem + 2.5vw, 3.5rem)' }}
      >
        Para Sofia
      </h1>

      <p className="font-body italic text-sepia-600 text-center mb-10">
        Digite a data de nascimento dela para continuar.
      </p>

      <input
        type="text"
        inputMode="numeric"
        placeholder="DD/MM/AAAA"
        value={value}
        onChange={handleChange}
        className={`w-full max-w-[280px] text-center font-sc tracking-widest bg-transparent border-b py-3 outline-none text-lg placeholder:text-parchment-400 transition-colors duration-200 ${
          status === 'error'
            ? 'border-red-700/70 text-red-800 animate-shake'
            : status === 'success'
            ? 'border-green-700/60 text-green-800 animate-success'
            : 'border-gold-600 text-sepia-800'
        }`}
      />

      <div className="mt-5 h-6">
        {status === 'error' && (
          <p className="font-sc text-label tracking-wider text-red-800/70 text-center">
            Não era pra você acessar isso aqui... 🤨
          </p>
        )}
        {status === 'success' && (
          <p className="font-sc text-label tracking-wider text-green-800/80 text-center">
            Oi, Sofia rs
          </p>
        )}
      </div>

    </main>
  );
}
