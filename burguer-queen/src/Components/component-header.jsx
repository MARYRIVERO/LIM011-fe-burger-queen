import React from 'react';
import logo from './logo.png';
import './component-header.css';

const Logo = () =>
  <div data-testid= "imagen"  className="App">
    <header className="App-header">
      <img src= { logo } className="App-logo" alt="logo" />
    </header>
  </div>;

export default Logo;

