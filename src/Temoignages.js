import React from 'react';

function Temoignages() {
  const temoignages = [
    { name: "Jean Dupont", text: "BIDAYA CODE m’a aidé à maîtriser Python rapidement !" },
    { name: "Marie Martin", text: "Les quiz interactifs sont parfaits pour apprendre." }
  ];

  return (
    <div className="container my-5">
      <h2>Témoignages</h2>
      <div className="row">
        {temoignages.map((t, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{t.name}</h5>
                <p className="card-text">{t.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temoignages;