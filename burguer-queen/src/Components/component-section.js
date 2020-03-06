import React from 'react';
import './component-section.css';
import FirestoreCollection from './component-list.js';

<<<<<<< HEAD
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
=======
const ListDes = () => console.log('Desayuno');

const List = () => console.log('Almuerzo y cena');

const Section = () => 
>>>>>>> 4aa8da83d122eb49391fa5cbb8c155fce46fc0fc
    <div className="Section">
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button className="Button" onClick={Firebase}>Desayuno</button>
          <button className="Button" onClick={ListDes}> Almuerzo y Cena</button>
          </div>
      </main>
    </div>;

export default Section;
