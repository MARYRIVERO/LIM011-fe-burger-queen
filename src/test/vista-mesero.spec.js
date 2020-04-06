import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ComponenteVistaMesero from '../Components/componente-vista-mesero';
import { render } from '@testing-library/react';

it('',async() => {
    const router = render(<BrowserRouter><ComponenteVistaMesero/></BrowserRouter >);
    const rutas = router.queryByTestId('');
    expect(rutas).toBe(null);
  
} )
