import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';
import Product from './component-product';
import './component-menu.css'
import ListaProducto from './component-listaproducto';

function Menu() {
  const [type, setType] = useState('desayuno');
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

    const [tarea, setTarea] = useState([]);
    const agregarTarea = (objTarea) => {
      console.log('vista padre',objTarea);
      const newArr =  tarea.concat([ objTarea ]);
      setTarea(newArr);
  }
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
    <div className='izquierda'>
      {
        tarea.length === 0 ?

         'Iniciar hay pedido' :
         tarea.map(el =>
          
           <ListaProducto dataP={el.precio} dataPr={el.producto} key={el.producto} />)
        
      }
    </div>
    </section>

    )}
</section>
  )
};

export default Menu;
