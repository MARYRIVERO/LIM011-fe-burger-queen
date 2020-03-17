import React from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

const ListaPedidoProducto = ({ array }) => {
  console.log('vista hermano', array)
  return (
    <section>
      <div className="lista">
        <p>Vista del Pedido</p>
        <form>
          <label> Nombre <input type="text" /> </label> <br />
          <label> N° de Mesa <input type="text" /> </label>
        </form>
      </div>
      {
        array.length === 0 ?
          'Iniciar Pedido' :
          array.map(el => <ItemProduct dataProducto={el} key={el.id} />)
      }
    </section>
  )
}

export default ListaPedidoProducto;
