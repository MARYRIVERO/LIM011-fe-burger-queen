import React from 'react';

const ItemProducto = ({producto, precio}) => {
  console.log('vista primo', producto, precio)
  return(
     <section>
     <p>Vista del Pedido</p>
     <p>{producto}</p> 
     <p>{precio}</p>
     </section>

  )
}

export default ItemProducto;