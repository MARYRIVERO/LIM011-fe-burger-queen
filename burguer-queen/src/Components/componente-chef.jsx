import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase/firebaseconfig';
import Pedido from './componente-pedido';

const ComponenteChef = () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Orden'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )
  return (
    <main>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {value && (
        <section >
          <h1 >DETALLES DE PEDIDO</h1>
          <aside className="container">
            <div className="row">
              {value.docs
                .map(doc =>
                  <Pedido documento={doc} key={doc.id} />
                )}
            </div>
          </aside>
        </section>
      )}
    </main>
  )
};

export default ComponenteChef;