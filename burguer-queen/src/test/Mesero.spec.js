
import React from 'react';
import { render, wait, fireEvent, act } from '@testing-library/react';
import ComponentMesero from '../Components/component-mesero';
jest.mock('../Components/compo.js');


describe('Componente Mesero', () => {  
  it('Deberia acceder a elementos dentro de los componetes', (done) => {
    
    const mesero  = render( <ComponentMesero /> );

    wait(() => mesero.getAllByTestId('clickProducto')).then(() => {

      const btnProducto = mesero.getAllByTestId('clickProducto')[0];

    act(() => {
      fireEvent.click(btnProducto);
      })

    expect(mesero.getAllByTestId('items')).toBeTruthy();
    expect(mesero.getAllByTestId('clickCantidad').length).toBe(1);

    const btnEnviar = mesero.getByText('Enviar');
    act(() => {
      fireEvent.click(btnEnviar);
      })

    wait(() => mesero.getByText('Enviar')).then(() => {
    expect(mesero.queryAllByTestId('items').length).toBe(0);
  
    done();
    });
});
});

it('Deberia aumentar la cantidad de productos', (done) => {
    
  const mesero  = render( <ComponentMesero /> );
  wait(() => mesero.getAllByTestId('clickProducto')).then(() => {
  const btnProducto = mesero.getAllByTestId('clickProducto')[0];

  act(() => {
    fireEvent.click(btnProducto);
    })
  wait(() =>  mesero.getAllByTestId('clickCantidad')).then(() => {
  const btnCantidad = mesero.getAllByTestId( 'clickCantidad');


  act(() => {
    fireEvent.click(btnCantidad);
    })

  expect(btnCantidad.defaulValue).toBe(2);
  done();
});
});
});
});
