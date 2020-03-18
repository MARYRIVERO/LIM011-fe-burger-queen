import React, {useState} from 'react';
import Menu from './component-menu';
import ListaPedidoProducto from './component-listapedidoproducto';
import './component-menu.css'

const ComponentMesero = () => {

  const [arrayProductosOrden, setArrayProductosOrden] = useState([]);
    const agregarTarea = (objTarea, Id) => {
      console.log('vista padre',objTarea); 

      let arrayId = arrayProductosOrden.filter(el => el.id === Id)
      console.log(arrayId);
      if(arrayId.length === 0){ 
         const obj = {
              cantidad: 1,
              producto: objTarea.producto,
              precio: objTarea.precio,
              id: Id,
           }
      const newArr =  arrayProductosOrden.concat([ obj ]);
      setArrayProductosOrden(newArr);
  }
}
  return (
    <div className="contenedor"> 
      <div className="uno">
      <Menu agregar={agregarTarea}/>
      </div>
      <div className="dos">
        <ListaPedidoProducto array = {arrayProductosOrden}/>
      </div>
     </div>
   )
   };

 export default ComponentMesero;






