import { useState } from 'react';
import { torneos } from '../data/datos.js';

const datosIniciales = {
  nombreEquipo: '',
  correoCapitan: '',
  torneo: '',
  cantidadJugadores: ''
};

export function validarInscripcion(datos) {
  const errores = {};

  if (datos.nombreEquipo.trim() === '') {
    errores.nombreEquipo = 'Debes ingresar el nombre del equipo.';
  }

  if (datos.correoCapitan.trim() === '') {
    errores.correoCapitan = 'Debes ingresar el correo del capitán.';
  } else if (!datos.correoCapitan.includes('@')) {
    errores.correoCapitan = 'Ingresa un correo válido.';
  }

  if (datos.torneo === '') {
    errores.torneo = 'Debes seleccionar un torneo.';
  }

  if (datos.cantidadJugadores === '') {
    errores.cantidadJugadores = 'Debes ingresar la cantidad de jugadores.';
  } else if (
    Number(datos.cantidadJugadores) < 1 ||
    Number(datos.cantidadJugadores) > 10
  ) {
    errores.cantidadJugadores = 'La cantidad debe estar entre 1 y 10.';
  }

  return errores;
}

export default function Inscripcion() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: value
    }));

    setErrores((anteriores) => ({
      ...anteriores,
      [name]: ''
    }));

    setMensaje('');
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    const erroresEncontrados = validarInscripcion(datos);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      return;
    }

    setMensaje('Inscripción enviada correctamente.');
    setDatos({ ...datosIniciales });
  }

  const torneosAbiertos = torneos.filter(
    (torneo) => torneo.estado === 'ABIERTO'
  );

  return (
    <main className="container py-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2>Inscripción a torneo</h2>

          <p>
            Completa los datos para solicitar la inscripción
            de tu equipo a un torneo.
          </p>

          <form onSubmit={manejarEnvio} noValidate>
            <div className="mb-3">
              <label htmlFor="nombreEquipo" className="form-label">
                Nombre del equipo:
              </label>

              <input
                id="nombreEquipo"
                name="nombreEquipo"
                type="text"
                className="form-control"
                placeholder="Ej: Team Phoenix"
                autoComplete="organization"
                value={datos.nombreEquipo}
                onChange={manejarCambio}
              />

              {errores.nombreEquipo && (
                <small className="text-danger">
                  {errores.nombreEquipo}
                </small>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="correoCapitan" className="form-label">
                Correo del capitán:
              </label>

              <input
                id="correoCapitan"
                name="correoCapitan"
                type="email"
                className="form-control"
                placeholder="Ej: capitan@correo.com"
                autoComplete="email"
                value={datos.correoCapitan}
                onChange={manejarCambio}
              />

              {errores.correoCapitan && (
                <small className="text-danger">
                  {errores.correoCapitan}
                </small>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="torneo" className="form-label">
                Torneo:
              </label>

              <select
                id="torneo"
                name="torneo"
                className="form-select"
                value={datos.torneo}
                onChange={manejarCambio}
              >
                <option value="">Seleccione un torneo</option>

                {torneosAbiertos.map((torneo) => (
                  <option key={torneo.id} value={torneo.id}>
                    {torneo.nombre}
                  </option>
                ))}
              </select>

              {errores.torneo && (
                <small className="text-danger">
                  {errores.torneo}
                </small>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="cantidadJugadores" className="form-label">
                Cantidad de jugadores:
              </label>

              <input
                id="cantidadJugadores"
                name="cantidadJugadores"
                type="number"
                min="1"
                max="10"
                className="form-control"
                placeholder="Ej: 5"
                value={datos.cantidadJugadores}
                onChange={manejarCambio}
              />

              {errores.cantidadJugadores && (
                <small className="text-danger">
                  {errores.cantidadJugadores}
                </small>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar inscripción
            </button>

            {mensaje && (
              <div className="alert alert-success mt-3" role="status">
                {mensaje}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
