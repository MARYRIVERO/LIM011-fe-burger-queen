import React from 'react';
import ItemProduct from './component-itemproducto';

const ListaPedidoProducto = ({array}) => {
  console.log('vista hermano', array)
  return(
    
     <section>
     <p>Vista del Pedido</p>
     {
      array.length === 0 ?
      'Iniciar Pedido' :
      array.map(el => <ItemProduct dataProducto={el} key={el.id} />)
    }
     </section>

  )
}

export default ListaPedidoProducto;
