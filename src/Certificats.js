// frontend/src/Certificats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Certificats() {
  const [certificats, setCertificats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(true);
      axios.get('/api/certificate', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          setCertificats(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Erreur lors du chargement des certificats:', err);
          setError('Impossible de charger les certificats. Veuillez réessayer plus tard.');
          setLoading(false);
        });
    } else {
      setError('Veuillez vous connecter pour voir vos certificats.');
      setLoading(false);
    }
  }, []);

  return (
    <div className="container my-5">
      <h2>Vos Certificats</h2>
      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && certificats.length === 0 && !error && (
        <div className="alert alert-warning">Aucun certificat disponible.</div>
      )}
      <ul className="list-group">
        {certificats.map(c => (
          <li key={c._id} className="list-group-item">
            <h5>Certificat: {c.titre}</h5>
            <p>Date: {new Date(c.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificats;