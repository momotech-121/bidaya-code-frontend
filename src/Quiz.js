// frontend/src/Quiz.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/quiz')
      .then(res => {
        setQuiz(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des quiz:', err);
        setError('Impossible de charger les quiz. Veuillez réessayer plus tard.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2>Quiz Interactifs</h2>
      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && quiz.length === 0 && !error && (
        <div className="alert alert-warning">Aucun quiz disponible.</div>
      )}
      <ul className="list-group">
        {quiz.map(q => (
          <li key={q._id} className="list-group-item">
            <h5>{q.question}</h5>
            <ul>
              {q.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <small className="text-muted">Réponse correcte: {q.correct}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;