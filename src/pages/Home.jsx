
import { useEffect, useState } from 'react';

const perfiles = ['VISITANTE', 'JUGADOR', 'ORGANIZADOR', 'ADMINISTRADOR'];

export default function Home() {
  const [perfil, setPerfil] = useState(
    () => localStorage.getItem('perfil') || 'VISITANTE'
  );

  useEffect(() => {
    localStorage.setItem('perfil', perfil);
  }, [perfil]);

  return (
    <main className="container py-4">
      <section className="mb-4">
        <h2>Perfil de prueba</h2>
        <p>Selecciona un perfil para simular los diferentes roles del sistema.</p>

        <label htmlFor="perfil" className="form-label">Perfil:</label>
        <select
          id="perfil"
          className="form-select"
          value={perfil}
          onChange={(e) => setPerfil(e.target.value)}
        >
          {perfiles.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>

        <p className="mt-3">Perfil actual: {perfil}</p>
      </section>

      <section className="mb-4">
        <h2>Bienvenido</h2>
        <p>Consulta torneos, equipos, partidas y rankings dentro de eSports Arena Manager.</p>
        <img
          src="/img/banner-esports.png"
          alt="Banner de eSports Arena Manager"
          className="banner-principal img-fluid"
        />
      </section>

      <section>
        <h2>Conoce el mundo de los eSports</h2>
        <p>Los eSports reúnen jugadores y equipos en competencias organizadas de videojuegos.</p>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/IvA-cHSk9-k"
            title="Video relacionado con eSports"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
