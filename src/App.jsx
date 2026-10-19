import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <>
      <header className="text-center py-3">
        <h1>eSports Arena Manager</h1>
        <p>Gestión de torneos competitivos</p>
      </header>

      <nav className="navbar navbar-expand">
        <div className="container justify-content-center">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="text-center py-3">
        <p>eSports Arena Manager - Desarrollo FullStack II</p>
        <p>Proyecto académico 2026</p>
      </footer>
    </>
  );
}


