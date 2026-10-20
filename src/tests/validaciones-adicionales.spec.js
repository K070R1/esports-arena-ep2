import { validarRegistro } from '../pages/Registro.jsx';
import { validarInscripcion } from '../pages/Inscripcion.jsx';
import { obtenerAccionTorneo } from '../pages/Torneos.jsx';

describe('Validaciones adicionales del sistema', () => {

  const registroValido = {
    nombre: 'Alexis',
    nickname: 'Jugador123',
    email: 'jugador@correo.com',
    password: '12345678',
    confirmarPassword: '12345678'
  };

  const inscripcionValida = {
    nombreEquipo: 'Team Phoenix',
    correoCapitan: 'capitan@correo.com',
    torneo: '1',
    cantidadJugadores: '5'
  };

  it('Debe rechazar un nombre de usuario vacío', () => {
    const errores = validarRegistro({
      ...registroValido,
      nombre: ''
    });

    expect(errores.nombre).toBeDefined();
  });

  it('Debe rechazar un nickname vacío', () => {
    const errores = validarRegistro({
      ...registroValido,
      nickname: ''
    });

    expect(errores.nickname).toBeDefined();
  });

  it('Debe rechazar contraseñas diferentes', () => {
    const errores = validarRegistro({
      ...registroValido,
      confirmarPassword: '87654321'
    });

    expect(errores.confirmarPassword).toBeDefined();
  });

  it('Debe rechazar un nombre de equipo vacío', () => {
    const errores = validarInscripcion({
      ...inscripcionValida,
      nombreEquipo: ''
    });

    expect(errores.nombreEquipo).toBe(
      'Debes ingresar el nombre del equipo.'
    );
  });

  it('Debe rechazar un correo de capitán vacío', () => {
    const errores = validarInscripcion({
      ...inscripcionValida,
      correoCapitan: ''
    });

    expect(errores.correoCapitan).toBe(
      'Debes ingresar el correo del capitán.'
    );
  });

  it('Debe rechazar una inscripción sin torneo', () => {
    const errores = validarInscripcion({
      ...inscripcionValida,
      torneo: ''
    });

    expect(errores.torneo).toBe(
      'Debes seleccionar un torneo.'
    );
  });

  it('Debe rechazar una cantidad de jugadores vacía', () => {
    const errores = validarInscripcion({
      ...inscripcionValida,
      cantidadJugadores: ''
    });

    expect(errores.cantidadJugadores).toBe(
      'Debes ingresar la cantidad de jugadores.'
    );
  });

  it('Debe rechazar una cantidad de jugadores menor a 1', () => {
    const errores = validarInscripcion({
      ...inscripcionValida,
      cantidadJugadores: '0'
    });

    expect(errores.cantidadJugadores).toBe(
      'La cantidad debe estar entre 1 y 10.'
    );
  });

  it('Debe bloquear inscripciones en torneos en curso', () => {
    const accion = obtenerAccionTorneo(
      { estado: 'EN CURSO' },
      'JUGADOR'
    );

    expect(accion.habilitado).toBeFalse();
    expect(accion.texto).toBe('Inscripciones cerradas');
  });

  it('Debe permitir ver resultados de torneos finalizados', () => {
    const accion = obtenerAccionTorneo(
      { estado: 'FINALIZADO' },
      'VISITANTE'
    );

    expect(accion.habilitado).toBeTrue();
    expect(accion.texto).toBe('Ver resultados');
  });

});
