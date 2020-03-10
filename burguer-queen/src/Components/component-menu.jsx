import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';
import './component-menu.css'

function Section() {
  const [type, setType] = useState('desayuno');
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )
   return (
      <section>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
      <main>
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
      {' '}
          <div className="p">
            {value.docs.filter(doc => doc.data().categoria === type)
            .map(doc => (
              <div className="prod" key={doc.data().id}>
                <p>{doc.data().producto}</p>
                <p className="price">
                S/.
                {doc.data().precio}
               </p>
              </div>
            ))}
          </div>
    </section>
    </main>
    )}
</section>
  )
};

export default Section;