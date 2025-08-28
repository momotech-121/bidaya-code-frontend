import React from 'react';

function Partenariats() {
  const partenaires = [
    { name: "Entreprise A", logo: "https://via.placeholder.com/150?text=Logo+A" },
    { name: "Entreprise B", logo: "https://via.placeholder.com/150?text=Logo+B" }
  ];

  return (
    <div className="container my-5">
      <h2>Nos Partenaires</h2>
      <div className="row">
        {partenaires.map((p, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center">
              <img src={p.logo} alt={p.name} className="card-img-top mx-auto" style={{ maxWidth: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partenariats;