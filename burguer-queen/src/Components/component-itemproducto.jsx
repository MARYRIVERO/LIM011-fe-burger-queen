import React, { useState } from "react";

const ItemProducto = ({ dataProducto }) => {
  const [cantidad, setCantidad] = useState(dataProducto.cantidad);
  console.log('vista primo', dataProducto)
  return (
    <section className="itemproducto">

      <input type="number" min="1" max="100"
        defaultValue={dataProducto.cantidad}
        onClick={(e) => {
          const p = e.target.value;
          setCantidad(p);
        }}
      />
      <p>{dataProducto.producto}</p>
      <p>{dataProducto.precio}</p>
      <p> S/. {dataProducto.precio * cantidad}</p>
      <input type="button" value ="Eliminar" />
    </section>
  )
}

export default ItemProducto; 
