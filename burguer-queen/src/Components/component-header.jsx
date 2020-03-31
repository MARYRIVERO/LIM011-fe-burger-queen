import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../css/logoReina.svg';
import '../css/component-header.css';

const Logo = () =>
  <div data-testid= "imagen"  className="App">
    <header className="App-header">
      <img src= {logo} className="App-logo img-fluid" alt="logo"/>

      <BrowserRouter>
      <Link className="btn btn-success float-right m-5 btn-lg border border-light" to='/Chefs'> Ver Pedidos</Link>
      </BrowserRouter>
    </header>
  </div>;

export default Logo;
