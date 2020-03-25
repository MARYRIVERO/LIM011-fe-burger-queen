import React from 'react';
import './component-Menu.css';

const Desayuno = () => console.log('Desayuno');

const Almuerzo = () => console.log('Almuerzo');

const Bebidas = () => console.log(' Bebidas');

const Acompañamiento = () => console.log('Acompañamiento');

const Menu = () => 
    <div className="Menu">
      <main>
          <h1>Listado de Productos</h1>
          <div className="Section-main" >
          <button className="Button" onClick={ Desayuno } >Desayuno</button>
          <button className="Button" onClick={ Almuerzo } >Almuerzo y Cena</button>
          <button className="Button" onClick={ Bebidas } >Desayuno</button>
          <button className="Button" onClick={ Acompañamiento } >Almuerzo y Cena</button>
          </div>
      </main>
    </div>;

export default Menu;
