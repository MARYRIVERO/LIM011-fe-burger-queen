import React from 'react';
import TestRenderer from 'react-test-renderer'; 
import ComponentMesero from '../Components/component-mesero';
import Menu from '../Components/component-menu';
import ListaPedidoProducto from '../Components/component-listapedidoproducto';

describe('todo junto', () => {

it('Deberia pintar los productos', () => {
const testRenderer = TestRenderer.create(<ComponentMesero />);
const testInstance = testRenderer.root;

// expect(testInstance.findByType(Menu));

});

it('Deberia pintar los productos', () => {
  const testRenderer = TestRenderer.create(<ComponentMesero />);
  const testInstance = testRenderer.root;
  console.log(testInstance);

  // expect(testInstance).toBe();
  
});
})


// expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);








// import React from 'react';
// import { render, wait } from '@testing-library/react';
// import ComponentMesero from '../Components/component-mesero';

  
//   it('Deberia pintar pantalla menu y lista de pedido', (done) => {
    
//     const mesero  = render( <ComponentMesero /> );
  
//     wait(() => mesero.getAllByTestId('itemsproductos')).then(() => {
//      const itemspintados = mesero.getAllByTestId('itemsproductos').length;
//     //  console.log(totalproductospintados);
//     expect(itemspintados).toEqual(4);

//     const inputnombre = mesero.getByPlaceholderText('Ejemplo: Mary');
//     expect(inputnombre.value).toBe('');
      
//     done();
//   });
// });
