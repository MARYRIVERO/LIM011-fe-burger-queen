import React from 'react';
import { render, wait } from '@testing-library/react';
import ComponentMesero from '../Components/component-mesero';

  
  it('Deberia pintar pantalla menu y lista de pedido', (done) => {
    
    const mesero  = render( <ComponentMesero /> );
  
    wait(() => mesero.getAllByTestId('itemsproductos')).then(() => {
     const itemspintados = mesero.getAllByTestId('itemsproductos').length;
    //  console.log(totalproductospintados);
    expect(itemspintados).toEqual(4);

    const inputnombre = mesero.getByPlaceholderText('Ejemplo: Mary');
    expect(inputnombre.value).toBe('');
      
    done();
  });
});
