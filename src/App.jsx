import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Registro from './pages/Registro.jsx';
import Torneos from './pages/Torneos.jsx';
import Inscripcion from './pages/Inscripcion.jsx';
import Equipos from './pages/Equipos.jsx';
import Partidas from './pages/Partidas.jsx';
import Ranking from './pages/Ranking.jsx';

export default function App() {
  return (
    <>
      
      <header className="banner-header">
        <img
          src="/img/banner-header.png"
          alt=""
          className="banner-header-imagen"
        />

        <img
          src="/img/logo-esports.png"
          alt="eSports Arena Manager - Gestión de torneos competitivos"
          className="banner-logo"
        />
      </header>


      <nav className="navbar">
        <div className="container d-flex justify-content-center gap-4">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
          <Link className="nav-link" to="/torneos">
            Torneos
          </Link>
          <Link className="nav-link" to="/registro">
            Registro
          </Link>
          <Link className="nav-link" to="/inscripcion">
            Inscripción
          </Link>
          <Link className="nav-link" to="/equipos">
            Equipos
          </Link>
          <Link className="nav-link" to="/partidas">
            Partidas
          </Link>
          <Link className="nav-link" to="/ranking">
            Ranking
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/partidas" element={<Partidas />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>

      <footer className="text-center py-3">
        <p>eSports Arena Manager - Desarrollo FullStack II</p>
        <p>Proyecto académico 2026</p>
      </footer>
    </>
  );
}



