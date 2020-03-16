import React from 'react';

const ListaPedidoProducto = ({dataP, dataPr}) => {
  console.log('vista hermano', dataP, dataPr)
  return(
     <section>
     <p>Vista del Pedido</p>
     <p>{dataPr}</p>
     <p>{dataP}</p>
     </section>

  )
}

export default ListaPedidoProducto;