import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { torneos } from '../data/datos.js';

export function obtenerAccionTorneo(torneo, perfil) {
  if (torneo.estado === 'ABIERTO') {
    return perfil === 'JUGADOR'
      ? { texto: 'Inscribirse', habilitado: true }
      : { texto: 'Solo jugadores', habilitado: false };
  }

  if (torneo.estado === 'EN CURSO') {
    return { texto: 'Inscripciones cerradas', habilitado: false };
  }

  return { texto: 'Ver resultados', habilitado: true };
}

function TarjetaTorneo({ torneo, perfil }) {
  const navegar = useNavigate();
  const accion = obtenerAccionTorneo(torneo, perfil);

  const clasesEstado = {
    ABIERTO: 'estado-abierto',
    'EN CURSO': 'estado-curso',
    FINALIZADO: 'estado-finalizado'
  };

  function manejarAccion() {
    if (torneo.estado === 'ABIERTO' && perfil === 'JUGADOR') {
      navegar('/inscripcion');
    }

    // La vista de resultados se integrará
    // cuando esté disponible la página correspondiente.
  }

  return (
    <article className="h-100">
      <h3>{torneo.nombre}</h3>

      <p>Juego: {torneo.juego}</p>
      <p>Modalidad: {torneo.modalidad}</p>
      <p>Cupos: {torneo.cupos}</p>

      <p className={clasesEstado[torneo.estado] || ''}>
        Estado: {torneo.estado}
      </p>

      <button
        type="button"
        disabled={!accion.habilitado}
        onClick={manejarAccion}
      >
        {accion.texto}
      </button>
    </article>
  );
}

export default function Torneos() {
  const [perfil, setPerfil] = useState(
    () => localStorage.getItem('perfil') || 'VISITANTE'
  );

  useEffect(() => {
    function actualizarPerfil() {
      setPerfil(localStorage.getItem('perfil') || 'VISITANTE');
    }

    window.addEventListener('storage', actualizarPerfil);
    window.addEventListener('focus', actualizarPerfil);

    return () => {
      window.removeEventListener('storage', actualizarPerfil);
      window.removeEventListener('focus', actualizarPerfil);
    };
  }, []);

  return (
    <main className="container py-4">
      <section>
        <h2>Torneos disponibles</h2>

        <p>
          Aquí podrás revisar los torneos disponibles,
          su modalidad, fechas, cupos y estado actual.
        </p>

        <div className="row g-3">
          {torneos.map((torneo) => (
            <div className="col-12 col-md-6 col-xl-4" key={torneo.id}>
              <TarjetaTorneo torneo={torneo} perfil={perfil} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
