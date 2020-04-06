import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../RutaCss/logoReina.svg';
import '../RutaCss/estilo.css';

const Encabezado = ({ocultar}) => {
  if (ocultar) {
return(
  <div data-testid="imagen">
    <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <Link className="btn btn-success float-right m-5 btn-lg border border-light" to="/chef"> Ver Pedidos </Link>
    </header>
  </div>
)} 
return(
     <div data-testid="imagen">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
    </div>
)}

export default Encabezado;

  // "homepage": "https://MARYRIVERO.github.io/LIM011-fe-burger-queen",
      // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",