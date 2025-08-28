import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cours() {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cours')
      .then(res => setCours(res.data))
      .catch(err => console.error('Erreur:', err));
  }, []);

  return (
    <div className="container my-5">
      <h2>Liste des Cours</h2>
      <ul className="list-group">
        {cours.map(c => (
          <li key={c._id} className="list-group-item">{c.titre} ({c.categorie})</li>
        ))}
      </ul>
    </div>
  );
}

export default Cours;