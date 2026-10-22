import { ranking } from '../data/datos.js';

// Componente reutilizable para cada equipo del ranking
function TarjetaRanking({ equipo }) {
  return (
    <article className="h-100">
      <h3>
        #{equipo.posicion} - {equipo.equipo}
      </h3>

      <p>Puntos: {equipo.puntos}</p>

      <p>Victorias: {equipo.victorias}</p>

      <p>Derrotas: {equipo.derrotas}</p>
    </article>
  );
}

// Página principal del ranking
export default function Ranking() {
  const equiposOrdenados = [...ranking].sort(
    (a, b) => a.posicion - b.posicion
  );

  return (
    <main className="container-fluid pagina-ranking py-4">
      <section>
        <h2>Ranking</h2>

        <p>
          Revisa la clasificación de los equipos participantes.
        </p>

        <div className="row g-3">
          {equiposOrdenados.map((equipo) => (
            <div
              className="col-12 col-md-6 col-xl-4"
              key={equipo.posicion}
            >
              <TarjetaRanking equipo={equipo} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
