import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react';

import Inscripcion from '../pages/Inscripcion.jsx';

describe('Pruebas del componente Inscripcion', () => {

  afterEach(() => {
    cleanup();
  });

  it('Debe mostrar los cuatro campos del formulario', () => {
    render(<Inscripcion />);

    expect(screen.getByLabelText('Nombre del equipo:')).toBeTruthy();
    expect(screen.getByLabelText('Correo del capitán:')).toBeTruthy();
    expect(screen.getByLabelText('Torneo:')).toBeTruthy();
    expect(screen.getByLabelText('Cantidad de jugadores:')).toBeTruthy();
  });

  it('Debe mostrar solamente los torneos abiertos', () => {
    render(<Inscripcion />);

    const selector = screen.getByLabelText('Torneo:');

    const opciones = Array.from(selector.options)
      .map((opcion) => opcion.textContent);

    expect(opciones).toContain('Valorant Masters');
    expect(opciones).not.toContain('League Championship');
    expect(opciones).not.toContain('Rocket League Cup');
  });

  it('Debe mostrar errores cuando el formulario está vacío', () => {
    render(<Inscripcion />);

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar inscripción'
      })
    );

    expect(
      screen.getByText('Debes ingresar el nombre del equipo.')
    ).toBeTruthy();

    expect(
      screen.getByText('Debes ingresar el correo del capitán.')
    ).toBeTruthy();

    expect(
      screen.getByText('Debes seleccionar un torneo.')
    ).toBeTruthy();

    expect(
      screen.getByText('Debes ingresar la cantidad de jugadores.')
    ).toBeTruthy();
  });

  it('Debe mostrar un error cuando el correo es inválido', () => {
    render(<Inscripcion />);

    fireEvent.change(
      screen.getByLabelText('Correo del capitán:'),
      { target: { value: 'correo-invalido' } }
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar inscripción'
      })
    );

    expect(
      screen.getByText('Ingresa un correo válido.')
    ).toBeTruthy();
  });

  it('Debe confirmar una inscripción con datos válidos', () => {
    render(<Inscripcion />);

    fireEvent.change(
      screen.getByLabelText('Nombre del equipo:'),
      { target: { value: 'Team Phoenix' } }
    );

    fireEvent.change(
      screen.getByLabelText('Correo del capitán:'),
      { target: { value: 'capitan@correo.com' } }
    );

    fireEvent.change(
      screen.getByLabelText('Torneo:'),
      { target: { value: '1' } }
    );

    fireEvent.change(
      screen.getByLabelText('Cantidad de jugadores:'),
      { target: { value: '5' } }
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar inscripción'
      })
    );

    expect(screen.getByRole('status').textContent)
      .toContain('Inscripción enviada correctamente.');

    expect(screen.getByLabelText('Nombre del equipo:').value)
      .toBe('');

    expect(screen.getByLabelText('Correo del capitán:').value)
      .toBe('');
  });

});
