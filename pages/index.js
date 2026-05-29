import { Button, OrnamentalDivider, CircularBadge } from "../components/ui/index.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment-100 flex flex-col items-center justify-center gap-10 p-12">

      <CircularBadge size={140} />

      <OrnamentalDivider variant="diamond" className="max-w-xs" />
      <OrnamentalDivider variant="dots"    className="max-w-xs" />
      <OrnamentalDivider variant="line"    className="max-w-xs" />

      <Button variant="ghost" href="#">Ver Portfólio</Button>
      <Button variant="outline" onClick={() => {}}>Entrar em Contato</Button>

    </main>
  );
}
