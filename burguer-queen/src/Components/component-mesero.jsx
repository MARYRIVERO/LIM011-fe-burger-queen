import React, {useState} from 'react';
import Menu from './component-menu';
import ListaPedidoProducto from './component-listapedidoproducto';
import './component-menu.css'

const ComponentMesero = () => {

  const [arrayProductosOrden, setArrayProductosOrden] = useState([]);
    const agregarTarea = (objTarea, Id) => {
      // console.log('vista padre',objTarea); 

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
  const eliminarProducto  = (obj) => {

    const temp = arrayProductosOrden;
    console.log('Producto que queremos borrar', obj);
    const indice = arrayProductosOrden.indexOf(obj);
    console.log('indice del producto', obj);
     if ( indice >= 0) { setArrayProductosOrden(temp.splice(indice ,1) )}
     console.log(arrayProductosOrden);
};

    const total = () =>{
     if(arrayProductosOrden.length !== 0){
      let totalprecio = arrayProductosOrden.reduce((acum, obj) => acum + obj.precio * obj.cantidad);
      return totalprecio;
     }}
          
  return (
    <div className="contenedor"> 
      <div className="uno">
      <Menu agregar={agregarTarea}/>
      </div>
      <div className="dos">
        <ListaPedidoProducto array={arrayProductosOrden} eliminar={eliminarProducto} />
      </div>
      <div>  
        <p>Total S/. {total()} </p>
     </div>

 export default ComponentMesero;






