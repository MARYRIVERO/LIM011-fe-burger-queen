import React  from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

const ListaPedidoProducto = ({ array, eliminar}) => {


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
        array.length === 0 ?
          'Iniciar Pedido' :
          array.map((el, index) => <ItemProduct dataProducto={el} key={index} eliminarProducto={eliminar} />)
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