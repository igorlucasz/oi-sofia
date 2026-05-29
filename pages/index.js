import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/index.js';

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
    setStatus('idle');
    setValue(applyMask(e.target.value));
  }

  function handleSubmit() {
    if (value === CORRECT_DATE) {
      setStatus('success');
      setTimeout(() => {
        sessionStorage.setItem('sofia-auth', 'true');
        router.push('/home');
      }, 700);
    } else {
      setStatus('error');
      setValue('');
      setTimeout(() => setStatus('idle'), 500);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length > 0) handleSubmit();
  }

  return (
    <main className="min-h-screen bg-parchment-100 flex flex-col items-center justify-center px-6">

      {/* Ornamento SVG losango duplo */}
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
        onKeyDown={handleKeyDown}
        className={`w-full max-w-[280px] text-center font-sc tracking-widest bg-transparent border-b py-3 outline-none text-lg placeholder:text-parchment-400 ${
          status === 'error'
            ? 'border-red-700/70 text-red-800 animate-shake'
            : status === 'success'
            ? 'border-green-700/60 text-green-800 animate-success'
            : 'border-gold-600 text-sepia-800'
        }`}
      />

      <Button
        variant="outline"
        onClick={handleSubmit}
        className={`mt-8 ${value.length === 0 ? 'opacity-40 pointer-events-none' : ''}`}
      >
        Entrar
      </Button>

      {status === 'error' && (
        <p className="font-sc text-label tracking-wider text-red-800/70 text-center mt-4">
          Data incorreta. Tente novamente.
        </p>
      )}

    </main>
  );
}
