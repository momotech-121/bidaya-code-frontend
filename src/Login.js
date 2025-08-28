import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://bidaya-code-backend-8o3o15x3i-momotech-121s-projects.vercel.app/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setMessage('Connexion réussie');
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Se connecter</button>
        {message && <p className="mt-3">{message}</p>}
      </form>
    </div>
  );
}

export default Login;