import React from 'react';


const product = ({ document, agrega }) => {
    const { producto, precio } = document.data();
    return (
        <div className="prod" key={document.id} onClick={() => { agrega(document.data(), document.id) }}>
            <p>{producto}</p>
            <p className="price">
                S/.{precio}
            </p>
        </div>
    )
};

export default product;
