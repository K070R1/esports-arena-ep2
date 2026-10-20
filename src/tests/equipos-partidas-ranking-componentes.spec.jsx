import React from 'react';
import {
  render,
  screen,
  cleanup
} from '@testing-library/react';

import Equipos from '../pages/Equipos.jsx';
import Partidas from '../pages/Partidas.jsx';
import Ranking from '../pages/Ranking.jsx';

describe('Pruebas de componentes Equipos, Partidas y Ranking', () => {

  afterEach(() => {
    cleanup();
  });

  it('Debe mostrar los tres equipos registrados', () => {
    render(<Equipos />);

    expect(screen.getByText('Team Phoenix')).toBeTruthy();
    expect(screen.getByText('Dragons Gaming')).toBeTruthy();
    expect(screen.getByText('Rocket Kings')).toBeTruthy();
  });

  it('Debe mostrar el capitán y estado de los equipos', () => {
    render(<Equipos />);

    expect(screen.getByText('Capitán: Shadow')).toBeTruthy();
    expect(screen.getByText('Capitán: Drako')).toBeTruthy();

    const equipoInactivo = screen.getByText('INACTIVO');

    expect(equipoInactivo.classList.contains('text-danger'))
      .toBeTrue();
  });

  it('Debe mostrar las tres partidas registradas', () => {
    render(<Partidas />);

    expect(screen.getByText('Equipo local: Team Phoenix'))
      .toBeTruthy();

    expect(screen.getByText('Equipo visitante: Night Wolves'))
      .toBeTruthy();

    expect(screen.getByText('Equipo local: Rocket Kings'))
      .toBeTruthy();
  });

  it('Debe mostrar los estados de las partidas', () => {
    render(<Partidas />);

    expect(screen.getByText('PROGRAMADA')).toBeTruthy();
    expect(screen.getByText('EN CURSO')).toBeTruthy();
    expect(screen.getByText('FINALIZADA')).toBeTruthy();
  });

  it('Debe mostrar el ranking ordenado por posición', () => {
    render(<Ranking />);

    const posiciones = screen.getAllByRole('heading', {
      level: 3
    });

    expect(posiciones.length).toBe(3);

    expect(posiciones[0].textContent)
      .toContain('#1 - Team Phoenix');

    expect(posiciones[1].textContent)
      .toContain('#2 - Dragons Gaming');

    expect(posiciones[2].textContent)
      .toContain('#3 - Rocket Kings');
  });

  it('Debe mostrar las estadísticas de los equipos', () => {
    render(<Ranking />);

    expect(screen.getByText('Puntos: 15')).toBeTruthy();
    expect(screen.getByText('Victorias: 5')).toBeTruthy();
    expect(screen.getByText('Derrotas: 1')).toBeTruthy();
  });

});
