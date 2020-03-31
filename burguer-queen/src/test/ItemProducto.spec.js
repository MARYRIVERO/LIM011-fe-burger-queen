import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import ItemProducto from '../Components/component-itemproducto';


it('Deberia pintar los productos', () => {
    const fnEliminar = jest.fn();
    const fnCantidad = jest.fn();
    const objProducto = {
        producto: 'Cafe',
        precio: '5',
        cantidad: '2',
    }

    const itemProductos  = render( <ItemProducto dataProducto={objProducto} eliminarProducto={ fnEliminar } cantidadproducto={fnCantidad}/> );
    const btnCantidad = itemProductos.getByTestId('clickCantidad');
    const listaDeNodos = itemProductos.getAllByTestId('items');
    const btnElimimar = itemProductos.getByTestId('clickEliminar');


    fireEvent.click(btnCantidad);
    expect(fnCantidad).toHaveBeenCalled();

    expect(getNodeText(listaDeNodos[0])).toBe('Cafe');
    expect(getNodeText(listaDeNodos[1])).toBe('5');
    expect(getNodeText(listaDeNodos[2])).toBe('S/.10');


    fireEvent.click(btnElimimar);
    expect(fnEliminar).toHaveBeenCalled();

});
 