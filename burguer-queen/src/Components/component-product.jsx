import React from 'react';


const Producto = ({ document, agrega }) => {
   const { producto, precio, url } = document.data();
      return (
        <section data-testid="itemsproductos"className="card style prod" >
          <div data-testid= "clickProducto" key={document.id} onClick={() => {agrega(document.data(), document.id)}}>
             <img src={url} className="card-img img" alt="producto" />
             <h5 data-testid='item'>{producto}</h5>
             <p data-testid='item'>S/.{precio}</p>
           </div>
        </section>
    )
};

export default Producto;
