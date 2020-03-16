import React, {useState} from 'react';
import Menu from './component-menu';
import ListaPedidoProducto from './component-listaproducto';

const ComponentMesero = () => {

  const [tarea, setTarea] = useState([]);
    const agregarTarea = (objTarea, id) => {
      console.log('vista padre',objTarea); 

      let arrayId = [];
      arrayId.push(id);    
      console.log('hola', arrayId);  


      const obj = {
        cantidad: 1,
        producto: objTarea.producto,
        precio: objTarea.precio,
        id: id,
      }
      const newArr =  tarea.concat([ obj ]);
      setTarea(newArr);
  }
  return (
    <div> 
      <Menu agregar={agregarTarea}/>
      <div className='izquierda'>
      {
        tarea.length === 0 ?
         'Iniciar Pedido' :
         tarea.map(el => <ListaPedidoProducto dataP={el.precio} dataPr={el.producto} key={el} />)
      }
    </div>
    </div>
   )
   };

 export default ComponentMesero;