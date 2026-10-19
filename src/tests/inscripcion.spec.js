import { validarInscripcion } from '../pages/Inscripcion.jsx';
import { obtenerAccionTorneo } from '../pages/Torneos.jsx';

describe('Pruebas de Daniel - Torneos e Inscripcion', () => {
  const datosValidos = {
    nombreEquipo: 'Team Phoenix',
    correoCapitan: 'capitan@correo.com',
    torneo: '1',
    cantidadJugadores: '5'
  };

  it('Debe rechazar un correo sin @', () => {
    const errores = validarInscripcion({
      ...datosValidos,
      correoCapitan: 'correo-invalido'
    });

    expect(errores.correoCapitan).toBe('Ingresa un correo válido.');
  });

  it('Debe rechazar cantidades fuera del rango 1 a 10', () => {
    const errores = validarInscripcion({
      ...datosValidos,
      cantidadJugadores: '11'
    });

    expect(errores.cantidadJugadores).toBe(
      'La cantidad debe estar entre 1 y 10.'
    );
  });

  it('Debe aceptar una inscripción con datos válidos', () => {
    const errores = validarInscripcion(datosValidos);

    expect(Object.keys(errores).length).toBe(0);
  });

  it('Debe permitir inscribirse solo a jugadores en torneos abiertos', () => {
    const torneo = { estado: 'ABIERTO' };

    const accionJugador = obtenerAccionTorneo(torneo, 'JUGADOR');
    const accionVisitante = obtenerAccionTorneo(torneo, 'VISITANTE');

    expect(accionJugador.habilitado).toBeTrue();
    expect(accionJugador.texto).toBe('Inscribirse');

    expect(accionVisitante.habilitado).toBeFalse();
    expect(accionVisitante.texto).toBe('Solo jugadores');
  });
});
