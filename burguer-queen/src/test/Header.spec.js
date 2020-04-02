import React from 'react';
import { render } from '@testing-library/react'; 
import { BrowserRouter } from 'react-router-dom';
import Logo from '../Components/component-header';

  it('Deberia mostrar el logo de la Aplicacion', () => {
    const { getByTestId }= render(<BrowserRouter><Logo/></BrowserRouter>)
    const element= getByTestId('imagen');
    expect(element).toBeTruthy()
  })
