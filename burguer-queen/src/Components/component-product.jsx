import React from 'react';


const product = ({ document, agrega }) => {
    const { producto, precio, url } = document.data();
    return (
        <div data-testid="itemsproductos"className="card style prod" >
        <div data-testid= "clickProducto" key={document.id} onClick={() => {agrega(document.data(), document.id)}}>
            <img src={url} className="card-img img" alt="producto" />
            <div className="card-body"></div>
            <h5 data-testid='item'>{producto}</h5>
            <p data-testid='item'>S/.{precio}</p>
            </div>
            </div>
    )
};

export default product;
