import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';
import Product from './component-product';
import ListaProduct from './component-listaproducto';
import './component-menu.css'

function Section() {
  const [type, setType] = useState('desayuno');
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  
  const [ arrOrder, setArrOrder ] = useState([]);
  const agregarTarea = (objTarea) => {
    const newArr =  arrOrder.concat([objTarea]);
    console.log(objTarea);
    setArrOrder(newArr);
    return(
        <ListaProduct document= {arrOrder} />
    )}
    
   

   return (
      <section>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span> Loading...</span>}
        {value && (
      <section className="Section">
        <h1 className="Lista">LISTA DE PRODUCTOS</h1>
          <div className="Section-main">
          <button type="button" className="Button" onClick={() => setType('desayuno')}>
          Desayuno
          </button>
          <button type="button" className="Button" onClick={() => setType('hamburguesa')}>
           Hamburguesas
          </button>
          <button type="button" className="Button" onClick={() => setType('acompañamientos')}>
          Acompañamientos
          </button>
          <button type="button" className="Button" onClick={() => setType('bebida')}>
          Bebidas
          </button>
           </div>
          <div className="p">
            {value.docs.filter(doc => doc.data().categoria === type)
            .map(doc => 
            <Product document= {doc} key={doc.id} agregar= {agregarTarea}/>
            )}
          </div>
    </section>
    )}
</section>
  )
};

export default Section;

