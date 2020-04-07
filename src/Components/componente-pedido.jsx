import React from 'react';


const Pedido = ({ documento }) => {
   const { estado, nombre, mesa, fecha, producto, totalp} = documento.data();
   return (
         <div className="col-sm-6 border border-success" key={documento.id}>
           <h2>{estado}</h2>
             <div className="row">
                <p className="col-sm-2"> <span>Cliente:</span> {nombre} </p>
                <p className="col-sm-2"> <span>N° de Mesa: </span> {mesa} </p>
                <p data-testid="horaPedido" className="col-sm-2"> <span>Hora de Pedido: </span> {fecha.toDate().getHours()} : {fecha.toDate().getMinutes()} </p>
                <div className="col-sm-4">
                   {producto.map((p) => {
                    // console.log(p);
                    return (
                     <div>
                     <p>Nombre {p.producto}</p>
                     <p>{p.cantidad}</p>
                     </div>
                          )
                        })}
                     </div>
                      <p className="col-sm-2"> <span>Total Pedido </span> {totalp} </p>
                    </div>
                  </div>
   )};

export default Pedido;