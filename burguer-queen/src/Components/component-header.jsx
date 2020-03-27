import React from 'react';
import logo from './logoReina.svg';
// import fondo from './logo.svg';
import './component-header.css';

const Logo = () =>
  <div data-testid= "imagen"  className="App">
    <header className="App-header">
      <img src= {logo} className="App-logo img-fluid" alt="logo"/> 
    </header>
  </div>;

export default Logo;

// style=  {{background: "url("+fondo+")" }}