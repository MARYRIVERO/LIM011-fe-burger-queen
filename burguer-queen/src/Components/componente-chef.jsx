import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase/firebaseconfig';

const ComponenteChef = () => {
  // eslint-disable-next-line
  const [type, setType] = useState('pendiente');
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
              {value.docs.filter(doc => doc.data().estado === type)
                .map(doc =>
                  <div className="col-sm-6 border border-success">
                    <h2>{doc.data().estado}</h2>
                    <div className="row">
                      <p className="col-sm-2"> <span>Cliente:</span> {doc.data().nombre} </p>
                      <p className="col-sm-2"> <span>N° de Mesa: </span> {doc.data().mesa} </p>
                      <p className="col-sm-2"> <span>Hora de Pedido: </span> {doc.data().fecha.toDate().getHours()} : {doc.data().fecha.toDate().getMinutes()} </p>
                      <tbody className="col-sm-4">
                        {doc.data().producto.map((p) => {
                          console.log(p);
                          return (
                            <div>
                              <p>Nombre {p.producto}</p>
                              <p>{p.cantidad}</p>
                            </div>
                          )
                        })};
                     </tbody>
                      <p className="col-sm-2"> <span>Total Pedido </span> {doc.data().totalp} </p>
                    </div>
                  </div>
                )}
            </div>
          </aside>
        </section>
      )}
    </main>
  )
};

export default ComponenteChef;