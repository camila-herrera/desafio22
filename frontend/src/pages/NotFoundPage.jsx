import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="Notfound" style={{ textAlign: 'center', padding: '50px' }}>
      <img src='forky.jpeg'/>
      <p><strong>FELICIDADES ESTAS PERDIDO</strong></p>
      <p>Has click en el siguente boton para volver a la pagina inicial.</p>
      <Link to="/">
        <button className="btn btn-primary">Vuelve</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;