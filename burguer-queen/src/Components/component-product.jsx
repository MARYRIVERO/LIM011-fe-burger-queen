import React from 'react';

const product = ({docu}) => {
    console.log(docu.categoria);
   const {producto, precio} = docu;
 return(
<div className="prod" key={docu.id}>
<p>{producto}</p>
<p className="price">
S/.
{precio}
</p>
</div>
 )};
 export default product;