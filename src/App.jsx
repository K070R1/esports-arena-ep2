import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Registro from './pages/Registro.jsx';
import Torneos from './pages/Torneos.jsx';
import Inscripcion from './pages/Inscripcion.jsx';

export default function App() {
  return (
    <>
      <header className="text-center py-3">
        <h1>eSports Arena Manager</h1>
        <p>Gestión de torneos competitivos</p>
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
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>

      <footer className="text-center py-3">
        <p>eSports Arena Manager - Desarrollo FullStack II</p>
        <p>Proyecto académico 2026</p>
      </footer>
    </>
  );
}



