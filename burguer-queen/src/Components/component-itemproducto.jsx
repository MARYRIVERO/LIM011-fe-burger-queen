import React from "react";

const ItemProducto = ({ dataProducto }) => {
  console.log('vista primo', dataProducto)
  return (
    <section className="itemproducto">
       
          <input type="number" min="1" max="100"
          defaultValue={dataProducto.cantidad}
          onClick={(e) => {
            const p = e.target.value;
            dataProducto.cantidad = (dataProducto.id, p);
          }}
        />
          <p>{dataProducto.producto}</p>
          <p>{dataProducto.precio}</p>
          <p> S/. {dataProducto.precio * dataProducto.cantidad}</p>

    </section>
  )
}

export default ItemProducto;