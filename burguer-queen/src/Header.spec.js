/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react'; 
import Logo from '../src/Components/component-header';

describe('Header', () => {
  it('Deberia mostrar el logo de la Aplicacion', () => {
    const { getByTestId } = render(<Logo/>)
    const element = getByTestId('imagen');
    expect(element).toBeTruthy()
  })
})


// test('beber La Croix lleva a conseguir info de sed', () => {
//   beberPocoLaCroix();
//   expect(infoSed()).toBeTruthy();
// });

// describe('Registro de nuevo usuario', () => {
//   it('debería registrar un usuario nuevo', () => {
//     createUser('prueba-de-red@gmail.com, abc123').then((user) => {
//       expect(user.email).toBe('prueba-de-red');
//     });
//   });
// });

// describe('ordenadorAZ', () => {
//   it('debería ser una función', () => {
//     expect(typeof ordenadorAZ).toBe('function');
//   });
//   it('debería ordenar alfabéticamente de A-Z', () => {
//     expect(ordenadorAZ(potterPrueba, 'ordenar-az')[0].name).toEqual('Argus Filch');
//   });
//   it('debería ordenar alfabéticamente de Z-A', () => {
//     expect(ordenadorAZ(potterPrueba, 'ordenar-za')[0].name.reverse).toEqual();
//   });
// });