import React from 'react';


const product = ({ document, agrega }) => {
    const { producto, precio, url } = document;
    return (
        <div className="card style prod" >
        <div data-testid= "clickProducto" key={document.id} onClick={() => {agrega(document, document.id)}}>
            <img src={url} class="card-img img" alt="producto" />
            <div class="card-body"></div>
            <h5 data-testid='item'>{producto}</h5>
            <p data-testid='item'>S/.{precio}</p>
            </div>
            </div>
    )
};

export default product;
