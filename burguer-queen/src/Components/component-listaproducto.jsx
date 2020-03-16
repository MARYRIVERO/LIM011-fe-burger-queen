import React from 'react';

const ListaPedidoProducto = ({dataP, dataPr,el}) => {
  console.log('vista hermano', dataP, dataPr)
  return(
     <section  key={el}>
     <p>Vista del Pedido</p>
     <p>{dataPr}</p>
     <p>{dataP}</p>
     </section>

  )
}

export default ListaPedidoProducto;
