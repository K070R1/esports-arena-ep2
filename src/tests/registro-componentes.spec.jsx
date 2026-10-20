import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react';

import Registro from '../pages/Registro.jsx';

describe('Pruebas del componente Registro', () => {

  afterEach(() => {
    cleanup();
  });

  it('Debe mostrar los cinco campos del formulario', () => {
    render(<Registro />);

    expect(screen.getByLabelText('Nombre:')).toBeTruthy();
    expect(screen.getByLabelText('Nickname:')).toBeTruthy();
    expect(screen.getByLabelText('Correo electrónico:')).toBeTruthy();
    expect(screen.getByLabelText('Contraseña:')).toBeTruthy();
    expect(screen.getByLabelText('Confirmar contraseña:')).toBeTruthy();
  });

  it('Debe mostrar errores al enviar el formulario vacío', () => {
    render(<Registro />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Crear cuenta' })
    );

    expect(screen.getByText('Debes ingresar tu nombre.')).toBeTruthy();
    expect(screen.getByText('Debes ingresar un nickname.')).toBeTruthy();
    expect(screen.getByText('Debes ingresar tu correo.')).toBeTruthy();
    expect(
      screen.getByText('La contraseña debe tener mínimo 8 caracteres.')
    ).toBeTruthy();
  });

  it('Debe mostrar error cuando las contraseñas no coinciden', () => {
    render(<Registro />);

    fireEvent.change(screen.getByLabelText('Contraseña:'), {
      target: { value: '12345678' }
    });

    fireEvent.change(screen.getByLabelText('Confirmar contraseña:'), {
      target: { value: '87654321' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Crear cuenta' })
    );

    expect(
      screen.getByText('Las contraseñas no coinciden.')
    ).toBeTruthy();
  });

  it('Debe mostrar confirmación al registrar datos válidos', () => {
    render(<Registro />);

    fireEvent.change(screen.getByLabelText('Nombre:'), {
      target: { value: 'Alexis' }
    });

    fireEvent.change(screen.getByLabelText('Nickname:'), {
      target: { value: 'Jugador123' }
    });

    fireEvent.change(screen.getByLabelText('Correo electrónico:'), {
      target: { value: 'jugador@correo.com' }
    });

    fireEvent.change(screen.getByLabelText('Contraseña:'), {
      target: { value: '12345678' }
    });

    fireEvent.change(screen.getByLabelText('Confirmar contraseña:'), {
      target: { value: '12345678' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Crear cuenta' })
    );

    expect(
      screen.getByRole('status').textContent
    ).toContain('Cuenta creada correctamente.');

    expect(screen.getByLabelText('Nombre:').value).toBe('');
  });

});
