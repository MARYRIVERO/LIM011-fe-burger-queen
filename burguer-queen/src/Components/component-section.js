import React from 'react';
import './component-section.css'

function Boton() {
  return (
    <div className="Section">
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button
            type="button"
            className="Btn Desayuno"
            onClick={(event) => {
            event.preventDefault();
            Boton('desayuno');
            }}
          >
              Desayuno
          </button>
       
          <button
            type="button"
            className="Btn Almuerzo y Cena"
            onClick={(event) => {
            event.preventDefault();
            Boton('almuerzo y cena');
            }}
          > 
            Almuerzo y cena
          </button>
        </div>
        </main>
    </div>
);
}
export default Boton;
