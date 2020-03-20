import React, {useState, useEffect}  from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

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
      <div className="lista">
        <p>Vista del Pedido</p>
        <form>
          <label> Nombre <input type="text"  onChange={functionName }/> </label> <br />
          <label> N° de Mesa <input type="text"  onChange={functionMesa} /> </label>
        </form>
      </div>
      {
        array.length === 0 ?
          'Iniciar Pedido' :
          array.map((el, index) => <ItemProduct dataProducto={el} key={index} eliminarProducto={eliminar} cantidadproducto={cantidad} />)
      }
      
    </section>
  )
}

export default ListaPedidoProducto;
