// frontend/src/Profil.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profil() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/profil', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setUser(res.data))
        .catch(err => setError('Erreur lors du chargement du profil'));
    } else {
      setError('Veuillez vous connecter');
    }
  }, []);

  return (
    <div className="container my-5">
      <h2>Profil Utilisateur</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {user && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Email: {user.email}</h5>
            <p>Progression: {JSON.stringify(user.progression)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;