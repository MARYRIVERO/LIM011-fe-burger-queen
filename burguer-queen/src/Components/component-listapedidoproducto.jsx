import React from 'react';
import ItemProduct from './component-itemproducto';

const ListaPedidoProducto = ({dataP, dataPr,el}) => {
  console.log('vista hermano', dataP, dataPr)
  return(
     <section  key={el}>
     <p>Vista del Pedido</p>
     <ItemProduct producto = {dataP} precio={dataPr}/>
     </section>

  )
}

export default ListaPedidoProducto;