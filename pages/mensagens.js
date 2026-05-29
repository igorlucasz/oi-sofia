import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MENSAGENS } from '../data/mensagens.js';
import { OrnamentalDivider } from '../components/ui/index.js';

export default function Mensagens() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('sofia-auth') !== 'true') {
      router.push('/');
    }
  }, [router]);

  return (
    <main className="bg-parchment-100 min-h-screen">

      <button
        onClick={() => router.push('/home')}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 font-body italic text-sepia-600 bg-parchment-100/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-warm-sm ring-1 ring-gold-600/20 hover:ring-gold-600/50 transition-all duration-200"
        style={{ fontSize: '0.95rem' }}
      >
        <span className="text-gold-500">←</span> início
      </button>

      {/* Cabeçalho */}
      <div className="text-center pt-28 pb-16 px-6">
        <OrnamentalDivider variant="diamond" className="max-w-[80px] mx-auto mb-8" />
        <p className="font-sc text-label tracking-widest text-gold-600 uppercase mb-4">
          Com carinho
        </p>
        <h1
          className="font-display font-bold uppercase text-sepia-800 leading-tight"
          style={{ fontSize: 'clamp(2rem, 1.5rem + 2.5vw, 3rem)' }}
        >
          O que escrevemos<br />para você.
        </h1>
      </div>

      {/* Grade de mensagens */}
      <div className="px-4 pb-24 max-w-screen-sm mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {MENSAGENS.map(({ id, nome, src, mensagem }) => (
            <div key={id} className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-parchment-300 ring-1 ring-gold-600/40 overflow-hidden flex-shrink-0 relative">
                {src && (
                  <Image src={src} alt={nome} fill unoptimized style={{ objectFit: 'cover' }} />
                )}
              </div>
              <p className="font-sc text-[0.65rem] tracking-wider text-gold-600 uppercase">
                {nome}
              </p>
              <p className="font-body italic text-body-sm text-sepia-700 leading-relaxed">
                {mensagem}
              </p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
