import React, { useState } from "react";

const ItemProducto = ({ dataProducto, eliminarProducto, cantidadproducto }) => {
  const { cantidad, producto, precio } = dataProducto;

  const [Cantidad, setCantidad] = useState(cantidad);
  console.log('vista primo', dataProducto)


  return (
    <section className="itemproducto">

      <input type="number" min="1" max="100"
        defaultValue={cantidad}
        onClick={(e) => {
          const p = e.target.value;
          cantidadproducto(dataProducto.id, p);
          setCantidad(p);
        }}
      />
      <p>{producto}</p>
      <p>{precio}</p>
      <p> S/. {precio * Cantidad}</p>

      <input type="button" value="Eliminar"
        onClick={() => {
            const idElimina= dataProducto;
            eliminarProducto(idElimina);
        }}
      />
    </section>
  )
}

export default ItemProducto; 
