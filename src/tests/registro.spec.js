import { validarRegistro } from '../pages/Registro.jsx';

describe('Validaciones de Registro', () => {

  it('Debe rechazar un correo inválido', () => {
    const datos = {
      nombre: 'Alexis',
      nickname: 'Jugador123',
      email: 'correo-invalido',
      password: '12345678',
      confirmarPassword: '12345678'
    };

    const errores = validarRegistro(datos);

    expect(errores.email).toBe('Ingresa un correo válido.');
  });

  it('Debe rechazar una contraseña menor a 8 caracteres', () => {
    const datos = {
      nombre: 'Alexis',
      nickname: 'Jugador123',
      email: 'jugador@correo.com',
      password: '12345',
      confirmarPassword: '12345'
    };

    const errores = validarRegistro(datos);

    expect(errores.password).toBe(
      'La contraseña debe tener mínimo 8 caracteres.'
    );
  });

  it('Debe aceptar un formulario con datos correctos', () => {
    const datos = {
      nombre: 'Alexis',
      nickname: 'Jugador123',
      email: 'jugador@correo.com',
      password: '12345678',
      confirmarPassword: '12345678'
    };

    const errores = validarRegistro(datos);

    expect(Object.keys(errores).length).toBe(0);
  });

});
