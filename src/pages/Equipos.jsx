import { equipos } from '../data/datos.js';

// Componente reutilizable que recibe información mediante props
function TarjetaEquipo({ equipo }) {
  return (
    <article className="h-100">
      <h3>{equipo.nombre}</h3>

      <p>Juego: {equipo.juego}</p>

      <p>Capitán: {equipo.capitan}</p>

      <p>
        Estado:{' '}
        <span
          className={
            equipo.estado === 'ACTIVO'
              ? 'text-success'
              : 'text-danger'
          }
        >
          {equipo.estado}
        </span>
      </p>
    </article>
  );
}

// Página principal de equipos
export default function Equipos() {
  return (
    <main className="container py-4">
      <section>
        <h2>Equipos</h2>

        <p>
          Revisa los equipos registrados en eSports Arena Manager.
        </p>

        <div className="row g-3">
          {equipos.map((equipo) => (
            <div
              className="col-12 col-md-6 col-xl-4"
              key={equipo.id}
            >
              <TarjetaEquipo equipo={equipo} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
