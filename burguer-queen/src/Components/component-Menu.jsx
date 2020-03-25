import React from 'react';
import './component-Menu.css';

function Menu() {
  return (
    <div className="Menu">
      
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button
            type="button"
            className="Btn Desayuno"
            onClick={(event) => {
            event.preventDefault();
            console.log('desayuno');
            }}
          >
              Desayuno
          </button>
       
          <button
            type="button"
            className="Btn Almuerzo"
            onClick={(event) => {
            event.preventDefault();
            Menu('almuerzo y cena');
            }}
          > 
            Almuerzo y cena
          </button>
                 
          <button
            type="button"
            className="Btn Acompañamiento"
            onClick={(event) => {
            event.preventDefault();
            Menu('Acompañammientos');
            }}
          > 
            Acompañamientos
          </button>
                 
          <button
            type="button"
            className="Btn bebidas"
            onClick={(event) => {
            event.preventDefault();
            Menu('bebidas');
            }}
          > 
           Bebidas
          </button>
        </div>
        </main>
    </div>
);
}
export default Menu;
