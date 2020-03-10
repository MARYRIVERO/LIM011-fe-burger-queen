import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebaseconfig';

  function ComponentMenu() {
    const [menu, parts ] = useState([]);
      const [value, loading, error] = useCollection(
        firebase.firestore().collection('Menu'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    
    function Click(cat) { 
      const arrProducts = value.docs.map((elem) => {
        const obj = {
          Categoria: elem.data().categoria,
          Producto: elem.data().producto,
          Precio: elem.data().precio,
          id: elem.id,
        }
        return obj;
      });
      console.log(arrProducts);
      
    const result = arrProducts.filter((elem) => elem.categoria === cat);
    console.log(JSON.stringify(menu));
    parts(result)

  
     function Elements() {
    if (loading) {
      return 'Cargando...';
    }
    if (error) {
      return 'Hubo un error';
    }
  }
  return Elements;
};
  };
  export default ComponentMenu;