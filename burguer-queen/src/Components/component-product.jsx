import React from 'react';


 const product = ({document, agregar}) => {
 const {producto, precio} = document.data();
return(
<div className="prod" key={document.id} onClick={() => {agregar(document.data())}}>
<p>{producto}</p>
<p className="price">
S/.
{precio}
</p>
</div>
)};

export default product;
