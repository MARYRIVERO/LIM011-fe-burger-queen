import React, { useState } from 'react';
import Menu from './component-menu';
import ListaPedidoProducto from './component-listapedidoproducto';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './component-menu.css';

const ComponentMesero = () => {
  let [,setState]=useState(); 

  const [arrayNombre, setArrayNombre] = useState([]);
  const [arrayMesa, setArrayMesa] = useState([]);

  const [arrayProductosOrden, setArrayProductosOrden] = useState([]);
    const agregarTarea = (objTarea, Id) => {
      // console.log('vista padre',objTarea); 

      let arrayId = arrayProductosOrden.filter(el => el.id === Id)
      console.log(arrayId);
      if(arrayId.length === 0){ 
         const obj = {
              cantidad: 1,
              producto: objTarea.producto,
              precio: objTarea.precio,
              id: Id,
           }
      const newArr =  arrayProductosOrden.concat([ obj ]);
      setArrayProductosOrden(newArr);
  }
}

  const buscaNombreyMesa = (nombre, mesa) => {
    setArrayNombre(nombre);
    setArrayMesa(mesa);
}

  function eliminarProducto(obj) {
    const temp = arrayProductosOrden;
    console.log('Producto que queremos borrar', obj);
    const indice = temp.indexOf(obj);
    console.log('indice del producto', obj);
    
     if ( indice >= 0) {
       temp.splice(indice ,1) 

      }
      setArrayProductosOrden(temp)
     console.log(arrayProductosOrden);
     setState({}); 
};

  const incrementar = (productoId, cant) => {
   const arrNew = arrayProductosOrden.map((element) => {
    console.log('antes', element);
     if (productoId === element.id) {
      return {
          ...element,
          cantidad: cant,
        };
      }
      console.log('despues', element);
       return element;
     });
     setArrayProductosOrden(arrNew);
    };

    const total = () =>{
      let totalprecio = 0;
     if(arrayProductosOrden.length !== 0){
      totalprecio = arrayProductosOrden.reduce((acum, obj) => acum + obj.precio * obj.cantidad, 0)
      console.log('precio total', totalprecio);
      }
      return totalprecio
    }

    const enviarOrden = (nombre, mesa, producto, fecha, estado, totalp) => 
     firebase
    .firestore()
    .collection('order')
    .add({
      nombre,
      mesa,
      producto,
      fecha,
      estado,
      totalp,
    })
  ;
              
  return (
    <div className="contenedor"> 
      <div className="uno">
      <Menu agregar={agregarTarea}/>
      </div>
      <div className="dos">
        <ListaPedidoProducto array={arrayProductosOrden} eliminar={eliminarProducto}  cantidad= {incrementar} buscar={buscaNombreyMesa}/>
      </div>
      <div>  
      <p>Total S/. {total()}</p>
     </div>
     <div>
     <button type="button" onClick={() => {
            enviarOrden(arrayNombre, arrayMesa, arrayProductosOrden, new Date(), 'pendiente', total())
              .then(() => {
                setArrayProductosOrden([]);
                setArrayNombre('');
                setArrayMesa('');
              });
          }
        }
      >
        Enviar
      </button>
     </div>
     </div>
  )
};

 export default ComponentMesero;

