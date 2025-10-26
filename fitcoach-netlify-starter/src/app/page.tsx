import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-16">
      <div className="wrapper">
        <h1 className="text-4xl font-semibold">FitCoach</h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          Sustituye tu Excel por una app moderna e interactiva.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="card">
            <h2 className="font-semibold mb-2">Entrenadores</h2>
            <p className="muted">Crea programas, planes, y supervisa progreso.</p>
          </div>
          <div className="card">
            <h2 className="font-semibold mb-2">Clientes</h2>
            <p className="muted">Registra entrenos, fotos, medidas y comidas.</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/login" className="btn">Entrar</Link>
          <Link href="/app" className="btn">Demo</Link>
        </div>
      </div>
    </main>
  );
}
