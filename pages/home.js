import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Hero, Quote } from '../components/sections/index.js';
import { Button } from '../components/ui/index.js';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('sofia-auth') !== 'true') {
      router.push('/');
    }
  }, [router]);

  const memorias = [
    'Aquela tarde boa.',
    'Rindo sem motivo.',
    'Sempre juntos.',
    'Saudade disso.',
    'Momento favorito.',
    'Era perfeito.',
    'Só nós.',
    'Ficou na memória.',
  ];

  return (
    <>
      <Hero />

      {/* Seção de Memórias */}
      <section>
        <div className="text-center px-6 pt-20 pb-10">
          <p className="font-sc text-label tracking-widest text-gold-600 uppercase mb-3">
            Memórias
          </p>
          <h2
            className="font-display font-bold uppercase text-sepia-800 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 1.4rem + 2vw, 2.75rem)' }}
          >
            Momentos nossos.
          </h2>
        </div>
        <div className="px-4 max-w-screen-sm mx-auto pb-4">
          <div className="grid grid-cols-2 gap-3">
            {memorias.map((legenda, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-full aspect-square bg-parchment-300 rounded-sm ring-1 ring-gold-600/20" />
                <p className="font-body italic text-[0.8rem] text-sepia-700 leading-snug text-center">
                  {legenda}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Quote />

      {/* Bloco C — Encerramento */}
      <section className="py-20 px-6 text-center bg-parchment-200">
        <p className="font-script text-[2.5rem] text-sepia-700 mb-4">
          Sofia Marques
        </p>
        <p className="font-sc text-label tracking-widest text-gold-600 uppercase mb-12">
          02 · 06 · 2007 — 02 · 06 · 2025
        </p>
        <Button variant="outline" href="/mensagens">
          Ver o que escrevemos pra você
        </Button>
      </section>
    </>
  );
}
