import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import Product from '../Components/component-product';


it('Deberia pintar los productos', () => {
    const fnagregar = jest.fn();
    const objProducto = {
        producto: 'Cafe',
        precio: '5',
    }

    const productos  = render( <Product document={objProducto} agrega={ fnagregar }/> );
    const element = productos.getByTestId('clickProducto');
    const listaDeNodos = productos.getAllByTestId('item');
    fireEvent.click(element);


    expect(fnagregar).toHaveBeenCalled();
    expect(getNodeText(listaDeNodos[0])).toBe('Cafe');
    expect(getNodeText(listaDeNodos[1])).toBe('S/.5');

});



    