import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Torneos from '../pages/Torneos.jsx';

describe('Pruebas del componente Torneos', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('Debe mostrar los tres torneos disponibles', () => {
    render(
      <MemoryRouter>
        <Torneos />
      </MemoryRouter>
    );

    expect(screen.getByText('Valorant Masters')).toBeTruthy();
    expect(screen.getByText('League Championship')).toBeTruthy();
    expect(screen.getByText('Rocket League Cup')).toBeTruthy();
  });

  it('Debe bloquear la inscripción de visitantes', () => {
    localStorage.setItem('perfil', 'VISITANTE');

    render(
      <MemoryRouter>
        <Torneos />
      </MemoryRouter>
    );

    const boton = screen.getByRole('button', {
      name: 'Solo jugadores'
    });

    expect(boton.disabled).toBeTrue();
  });

  it('Debe habilitar la inscripción de jugadores', () => {
    localStorage.setItem('perfil', 'JUGADOR');

    render(
      <MemoryRouter>
        <Torneos />
      </MemoryRouter>
    );

    const boton = screen.getByRole('button', {
      name: 'Inscribirse'
    });

    expect(boton.disabled).toBeFalse();
  });

  
    it('Debe navegar a inscripción al hacer clic como jugador', () => {
    localStorage.setItem('perfil', 'JUGADOR');

    render(
        <MemoryRouter initialEntries={['/torneos']}>
        <Routes>
            <Route path="/torneos" element={<Torneos />} />
            <Route
            path="/inscripcion"
            element={<h2>Página de inscripción</h2>}
            />
        </Routes>
        </MemoryRouter>
    );

    const boton = screen.getByRole('button', {
        name: 'Inscribirse'
    });

    fireEvent.click(boton);

    expect(
        screen.getByText('Página de inscripción')
    ).toBeTruthy();
    });


});
