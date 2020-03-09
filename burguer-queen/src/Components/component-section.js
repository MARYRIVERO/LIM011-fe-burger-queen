import React, { useState } from 'react';
import './component-section.css';
 import FirestoreCollection from './component-list.js';


// function Section() {
//   // Declaración de una variable de estado que llamaremos "count"
//   const [count, setCount] = useState(true);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(false)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Section;


function Section() {
  const [cualquiercosa, cosa] = useState(true);
  return (
    <span>
      {cualquiercosa
        ? <FirestoreCollection />
        : 'bueno'}
        <button onClick={() => cosa(true)}>Almuerzo</button>
        <button onClick={() => cosa(false)}> Desayuno</button>
    </span>
  )};
  export default Section;