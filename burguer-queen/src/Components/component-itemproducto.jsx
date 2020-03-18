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
<<<<<<< HEAD


=======
      <input type="button" value ="Eliminar" />
>>>>>>> 013e15b85ab7fa43e99c809bb338b4aad624ce29
    </section>
  )
}

export default ItemProducto; 
