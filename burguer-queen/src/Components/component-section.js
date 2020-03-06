import React from 'react';
import './component-section.css';

const ListDes = () => console.log('Desayuno');

const List = () => console.log('Almuerzo y cena');

const Section = () => 
    <div className="Section">
      <main>
          <h1>Lista de Productos</h1>
          <div className="Section-main" >
          <button className="Button" onClick={ListDes}>Desayuno</button>
          <button className="Button" onClick={List}> Almuerzo y Cena</button>
          </div>
      </main>
    </div>;

export default Section;
