import React  from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

const ListaPedidoProducto = ({ array, nuevoArray }) => {

const estadoArray = array;
  const eliminarProducto  = (obj) => {
   console.log("antes", estadoArray)
   const indice= estadoArray.indexOf(obj);
   if ( indice >= 0)  estadoArray.splice(indice ,1);
nuevoArray(estadoArray);
    console.log("despues", estadoArray)
  };

  return (
    <section>
      <div className="lista">
        <p>Vista del Pedido</p>
        <form>
          <label> Nombre <input type="text" /> </label> <br />
          <label> N° de Mesa <input type="text" /> </label>
        </form>
      </div>
      {
        estadoArray.length === 0 ?
          'Iniciar Pedido' :
          estadoArray.map((el, index) => <ItemProduct dataProducto={el} key={index} eliminar={eliminarProducto}   />)
      }
    </section>
  )
}

export default ListaPedidoProducto;


//     const agregarTarea = (objTarea, Id) => {
//       console.log('vista padre',objTarea); 

//       let arrayId = arrayProductosOrden.filter(el => el.id === Id)
//       console.log(arrayId);
//       if(arrayId.length === 0){ 
//          const obj = {
//               cantidad: 1,
//               producto: objTarea.producto,
//               precio: objTarea.precio,
//               id: Id,
//            }
//       const newArr =  arrayProductosOrden.concat([ obj ]);
//       setArrayProductosOrden(newArr);
//   }
// }