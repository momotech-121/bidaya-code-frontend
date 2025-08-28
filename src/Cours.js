import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cours() {
  const [cours, setCours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/cours')
      .then(res => {
        setCours(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des cours:', err);
        setError('Impossible de charger les cours. Veuillez réessayer plus tard.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2>Liste des Cours</h2>
      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && cours.length === 0 && !error && (
        <div className="alert alert-warning">Aucun cours disponible.</div>
      )}
      <ul className="list-group">
        {cours.map(c => (
          <li key={c._id} className="list-group-item">
            <h5>{c.titre}</h5>
            <p>{c.contenu}</p>
            <small className="text-muted">Catégorie: {c.categorie}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cours;