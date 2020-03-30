import React, {useState, useEffect}  from 'react';
import ItemProduct from './component-itemproducto';
import '../css/component-menu.css';

const ListaPedidoProducto = ({ array, eliminar, cantidad, buscar}) => {

  const [name, setName] = useState('');
  const [mesa, setMesa] = useState('');

  const functionName = (e) => {
    setName(e.target.value);
  };
  const functionMesa = (e) => {
    setMesa(e.target.value);
  };

  useEffect(() => {
    buscar(name, mesa)
  });
  
  return (
    <section>
      <div>
        <h1 className="text-center text-white">DETALLES DE PEDIDO</h1>
        <form className="text-center p m-2 p-3 mb-2 bg-success text-white rounded-pill">
          <label className="mr-2"> Nombre <input className="form-control" type="text"  onChange={functionName } placeholder='Ejemplo: Mary'/> </label>
          <label> N° de Mesa <input  className="form-control" type="text"  onChange={functionMesa} placeholder='1'/> </label>
        </form>
<table class="table table-sm ">
  <thead>
    <tr>
      <th scope="col">Cantidad</th>
      <th scope="col ">Nombre del Producto</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col mr-8 ">Precio Total</th>
      <th scope="col"> Eliminar</th>
    </tr>
  </thead>
 </table>
        
      </div>
      {
        array.length === 0 ?
          'Iniciar Pedido' :
          array.map((el, index) => 
          <ItemProduct dataProducto={el} key={index} eliminarProducto={eliminar} cantidadproducto={cantidad} />)
      }
      
    </section>
  )
}

export default ListaPedidoProducto;

