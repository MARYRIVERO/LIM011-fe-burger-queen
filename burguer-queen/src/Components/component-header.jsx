import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../RutaCss/logoReina.svg';
import '../RutaCss/estilo.css';

const Encabezado = () =>
  <div data-testid= "imagen">
    <header className="App-header">
      <img src= {logo} className="App-logo img-fluid" alt="logo"/>
      <BrowserRouter>
        <Link className="btn btn-success float-right m-5 btn-lg border border-light" to='/chefs'> Ver Pedidos</Link>
      </BrowserRouter>
    </header>
  </div>;

export default Encabezado;