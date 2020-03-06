import React from 'react';
import './component-section.css';

function ListDes () {
  console.log('Desayuno');
}
function List () {
  console.log('Almuerzo y cena');
}

function Section() {
  return (
    <div className="Section">
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button className="Button" onClick={ListDes}>Desayuno</button>
          <button className="Button" onClick={List}> Almuerzo y Cena</button>
          </div>
      </main>
    </div>
  );
}

export default Section;
