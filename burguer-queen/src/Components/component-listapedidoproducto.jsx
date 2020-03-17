import React from 'react';
import ItemProduct from './component-itemproducto';
import './component-menu.css';

const ListaPedidoProducto = ({array}) => {
  console.log('vista hermano', array)
  return(
     <section>
       <div className="lista">
       <p>Vista del Pedido</p>
       <form>
        <label> Nombre <input type="text" /> </label> <br/>
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
<<<<<<< HEAD
=======


// import React from 'react';
// import '../css/App.css';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const { useState } = React;

// export const AddOrder = ({
//   products, cantidad, total, deleteRow, order,
// }) => {
//   const [name, setName] = useState('');
//   const [mesa, setMesa] = useState('');

//   const functionName = (e) => {
//     setName(e.target.value);
//   };
//   const functionMesa = (e) => {
//     setMesa(e.target.value);
//   };
//   const addOrder = (name, mesa, product, date, estado, total) => firebase
//     .firestore()
//     .collection('order')
//     .add({
//       name,
//       mesa,
//       product,
//       date,
//       estado,
//       total,
//     });

//   const validateOrder = () => {
//     return products.length > 0 && name.length > 0 && mesa.length > 0;
//   };

//   const disableSubmitButton = !validateOrder();

//   return (
//     <div className="Order">
//       <h2>PEDIDO</h2>
//       {/* <p>{Date(Date.now()).toString()}</p> */}
//       <div>
//         <label>
//           Cliente:
//           {' '}
//           <input placeholder="Nombre" value={name} onChange={functionName} />
//         </label>
//         <br />
//         <label>
//           N° Mesa:
//           {' '}
//           <input placeholder="N° de Mesa" value={mesa} onChange={functionMesa} />
//         </label>
//       </div>
//       <table className="">
//         <thead>
//           <tr>
//             <th colSpan="5">DETALLE DE PEDIDO</th>
//           </tr>
//           <tr>
//             <td>CANT.</td>
//             <td>DESCRIPCIÓN</td>
//             <td>PU</td>
//             <td>SUBTOTAL</td>
//             <td>BORRAR</td>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>
//                 <input
//                   type="number"
//                   min="1"
//                   max="100"
//                   defaultValue={product.cantidad}
//                   onClick={(e) => {
//                     const p = e.target.value;
//                     cantidad(product.id, p);
//                   }}
//                 />
//               </td>
//               <td>{product.nombre}</td>
//               <td>
//                 S/.
//                 {product.precio}
//               </td>
//               <td>
//                 S/.
//                 {product.precio * product.cantidad}
//               </td>
//               <td>
//                 <i
//                   className="fa fa-minus-circle"
//                   aria-hidden="true"
//                   onClick={() => {
//                     deleteRow(product);
//                   }}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//       <p className="Total">
//         Total = S/.
//         {total()}
//       </p>
//       <button
//         type="button"
//         className="Send"
//         onClick={() => {
//           if (!disableSubmitButton) {
//             addOrder(name, mesa, products, new Date(), 'pendiente', total())
//               .then(() => {
//                 order([]);
//                 setName('');
//                 setMesa('');
//               });
//           }
//         }}
//         disabled={disableSubmitButton}
//       >
//         Enviar
//       </button>
//     </div>
//   );
// };
>>>>>>> cc39cd3fd9b9fd5f2dc0a222655b4a2ff895eb8e
