import React from "react";

const ItemProducto = ({dataProducto}) => {
  console.log('vista primo', dataProducto)
return(
  <section>
  <p>{dataProducto.producto}</p>
  <p>{dataProducto.precio}</p>

  </section>
)
}

export default ItemProducto;