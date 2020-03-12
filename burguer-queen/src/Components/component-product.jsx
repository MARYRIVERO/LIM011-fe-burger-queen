import React from 'react';

 const product = ({document}) => {
 const {producto, precio} = document.data();
return(
<div className="prod" key={document.id}>
<p>{producto}</p>
<p className="price">
S/.
{precio}
</p>
</div>
)};
export default product;