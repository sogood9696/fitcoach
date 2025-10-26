export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section className="card">
        <h2 className="font-semibold mb-2">Resumen</h2>
        <p className="muted">Aquí verás progreso, adherencia y PRs.</p>
      </section>
      <section className="card">
        <h2 className="font-semibold mb-2">Nutrición</h2>
        <p className="muted">Plan semanal, registro de comidas y lista de compras.</p>
      </section>
    </div>
  );
}
