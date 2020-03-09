import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';

function FirestoreCollection(props) {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )
   return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map(doc => (
              console.log(doc.data().categoria)
              // <React.Fragment key={doc.id}>
              //   {JSON.stringify(doc.data())},{' '}
              // </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  )
};

export default FirestoreCollection;