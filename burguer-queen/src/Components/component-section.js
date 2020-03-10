import React, { useState, useEffect } from 'react';
import firebase from '../firebaseconfig';
import './component-section.css'

const Section = () => {
  const [arr, setProducts] = useState([]);
  const [type, setType] = useState('desayuno');

  useEffect(() => {
      firebase.firestore().collection('Menu').where('categoria', '==', type).get()
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
        });
        setProducts(array);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  });

  return (
    <div className="Section">
      <h1>LISTA DE PRODUCTOS</h1>
      <div className="Section-main">
        <button type="button" className="Button" onClick={() => setType('desayuno')}>
          Desayuno
        </button>
        <button type="button" className="Button" onClick={() => setType('almuerzo y cena')}>
          Almuerzo y cena
        </button>
      </div>
      <div className="Product">
        {arr.map((product) => {
          return (
            <div className="prod" key={product.id}>
              <p className="name">{product.nombre}</p>
              <p>{product.producto}</p>
              <p className="price">
                S/.
                {product.precio}
              </p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;