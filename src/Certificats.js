import React from 'react';

function Certificats() {
  const userId = "12345"; // À remplacer par l’ID utilisateur connecté
  const handleDownload = () => {
    window.open(`https://bidaya-code-backend-8o3o15x3i-momotech-121s-projects.vercel.app/api/certificate/${userId}`);
  };

  return (
    <div className="container my-5">
      <h2>Vos Certificats</h2>
      <button className="btn btn-primary" onClick={handleDownload}>Télécharger Certificat</button>
    </div>
  );
}

export default Certificats;