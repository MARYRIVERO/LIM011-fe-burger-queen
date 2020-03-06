import React from 'react';
import './component-section.css';
import FirestoreCollection from './component-list.js';

function ListDes () {
  console.log('Desayuno');
}

function Firebase() {
  return (
    <div>
    <FirestoreCollection />
    </div>
  )
}


function Section() {
  return (
    <div className="Section">
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button className="Button" onClick={Firebase}>Desayuno</button>
          <button className="Button" onClick={ListDes}> Almuerzo y Cena</button>
          </div>
      </main>
    </div>
  )
};

export default Section;
