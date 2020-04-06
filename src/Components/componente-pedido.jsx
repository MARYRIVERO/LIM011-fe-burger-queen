import React from 'react';
import '../RutaCss/estilo.css';

const Pedido = ({ documento }) => {
  const { estado, nombre, mesa, fecha, producto, totalp } = documento.data();
  return (
    <div className="col-sm-6 border border-success" key={documento.id}>
      <h2 className="text-white">{estado}</h2>
      <div className="row">
        <p className="col-sm-2 datos"> <span className="textos">Cliente:</span> {nombre} </p>
        <p className="col-sm-2 datos"> <span className="textos">Mesa: </span><br></br>{mesa} </p>
        <p data-testid="horaPedido" className="col-sm-2 datos"> <span className="textos">Hora de Pedido: </span> {fecha.toDate().getHours()} : {fecha.toDate().getMinutes()} </p>
        <div className="col-sm-4">
          <p><span className="textos">Productos a Preparar</span></p>
          {producto.map((p) => {
            // console.log(p);
            return (
              <div>
                <p className="datos">{p.cantidad} <span>{p.producto}</span></p>
              </div>
            )
          })}
        </div>
        <p className="col-sm-2 datos"> <span className="textos">Total Pedido </span> {totalp} </p>
      </div>
    </div>
  )
};

export default Pedido;