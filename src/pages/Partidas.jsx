import { partidas } from '../data/datos.js';

// Componente reutilizable para mostrar una partida
function TarjetaPartida({ partida }) {
  const clasesEstado = {
    PROGRAMADA: 'text-primary',
    'EN CURSO': 'text-warning',
    FINALIZADA: 'text-success'
  };

  return (
    <article className="h-100">
      <h3>{partida.torneo}</h3>

      <p>Equipo local: {partida.equipoLocal}</p>

      <p>Equipo visitante: {partida.equipoVisitante}</p>

      <p>Fecha: {partida.fecha}</p>

      <p>
        Estado:{' '}
        <span className={clasesEstado[partida.estado] || ''}>
          {partida.estado}
        </span>
      </p>
    </article>
  );
}

// Página principal de partidas
export default function Partidas() {
  return (
    <main className="container py-4">
      <section>
        <h2>Partidas</h2>

        <p>
          Revisa las partidas programadas y sus resultados.
        </p>

        <div className="row g-3">
          {partidas.map((partida) => (
            <div
              className="col-12 col-md-6 col-xl-4"
              key={partida.id}
            >
              <TarjetaPartida partida={partida} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
