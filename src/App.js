import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">BIDAYA CODE</Link>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cours">Cours</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/quiz">Quiz</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certificats">Certificats</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/partenariats">Partenariats</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/temoignages">Témoignages</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/certificats" element={<Certificats />} />
        <Route path="/partenariats" element={<Partenariats />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-light text-center py-3">
        <p>&copy; 2025 BIDAYA CODE. Tous droits réservés.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/confidentialite">Politique de Confidentialité</a></li>
          <li className="list-inline-item"><a href="/conditions">Conditions d'Utilisation</a></li>
        </ul>
      </footer>
    </Router>
  );
}

function Home() {
  return (
    <main className="container text-center my-5">
      <h1>Bienvenue sur BIDAYA CODE</h1>
      <p>Plateforme d'apprentissage en informatique et au-delà.</p>
    </main>
  );
}

function Cours() { return <h2 className="container my-5">Liste des Cours</h2>; }
function Quiz() { return <h2 className="container my-5">Quiz Interactifs</h2>; }
function Certificats() { return <h2 className="container my-5">Vos Certificats</h2>; }
function Partenariats() { return <h2 className="container my-5">Nos Partenaires</h2>; }
function Temoignages() { return <h2 className="container my-5">Témoignages</h2>; }
function Contact() { return <h2 className="container my-5">Contactez-nous</h2>; }

export default App;