import React from 'react';


const product = ({ document, agrega }) => {
    const { producto, precio, url } = document.data();
    return (
        <div className="card style prod" >
        <div key={document.id} onClick={() => { agrega(document.data(), document.id) }}>
            <img src={url} class="card-img img" alt="producto" />
            <div class="card-body"></div>
            <h5>{producto}</h5>
            <p> S/.{precio} </p>
            </div>
            </div>
    )
};

export default product;
