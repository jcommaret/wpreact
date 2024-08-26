
import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <h2>Page non trouvée</h2>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </p>
    </div>
  );
}

export default NoMatch;
