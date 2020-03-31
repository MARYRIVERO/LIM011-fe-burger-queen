import React, { useState } from "react";

const ItemProducto = ({ dataProducto, eliminarProducto, cantidadproducto }) => {
  const { cantidad, producto, precio } = dataProducto;

  const [Cantidad, setCantidad] = useState(cantidad);
  //  console.log('vista primo', dataProducto)


  return (
    <section className="row justify-content-between  ">
      <input data-testid= "clickCantidad" className="col-sm-1 ml-3 form-control tamaño" type="number" min="1" max="100"
        defaultValue={cantidad}
        onClick={(e) => {
          const p = e.target.value;
          cantidadproducto(dataProducto.id, p);
          setCantidad(p);
        }}
      />
      <h6 data-testid= "items" className="col-sm-5 text-white">{producto}</h6>
      <h6 data-testid= "items" className="col-sm-2 text-white">{precio}</h6>
      <h6 data-testid= "items" className="col-sm-2 text-white">S/.{precio * Cantidad}</h6>

      <button data-testid= "clickEliminar" type = " button "
        onClick = { () => {
          const  idElimina  =  dataProducto ;
          eliminarProducto ( idElimina ) ;
        } }
      > borrar</button>
    </section>
  )
}

export default ItemProducto; 


 