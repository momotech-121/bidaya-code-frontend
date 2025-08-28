import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz')
      .then(res => setQuiz(res.data))
      .catch(err => console.error('Erreur:', err));
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const submitQuiz = () => {
    let score = 0;
    quiz.forEach(q => {
      if (answers[q._id] === q.correct) score++;
    });
    alert(`Score: ${score}/${quiz.length}`);
  };

  return (
    <div className="container my-5">
      <h2>Quiz Interactifs</h2>
      {quiz.map(q => (
        <div key={q._id} className="card mb-3">
          <div className="card-body">
            <h5>{q.question}</h5>
            {q.options.map(option => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question-${q._id}`}
                  value={option}
                  onChange={() => handleAnswer(q._id, option)}
                /> {option}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={submitQuiz}>Soumettre</button>
    </div>
  );
}

export default Quiz;