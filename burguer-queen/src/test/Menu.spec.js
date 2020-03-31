import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Menu from '../Components/component-menu';



it('Deberia contar los productos que se muestran al hacer clic', (done) => {

    const fnagregar = jest.fn();

    const containerMenu  = render( <Menu agregar={ fnagregar }/> );

    
    wait(() => containerMenu.getByText('Hamburguesas') ).then(() => {
    
    const antes = containerMenu.getAllByAltText('producto').length;
    
       
    const button = containerMenu.getByText('Acompañamientos');

    // disparando el evento de click del button
   
    fireEvent.click(button);

    wait(() => containerMenu.getAllByAltText('producto')).then(() => {

    const despues = containerMenu.getAllByAltText('producto').length
   // console.log(antes);
   // console.log(despues);
        expect(antes).not.toEqual(despues);
     done();
    })
   })
    });





// it('Deberia limpiar el input al dar click al button', () => {
//   // creando prop 

//   // renderizando el componente
//   const { getByText, getByPlaceholderText } = render(
//     <FormAgregarTarea agregarTarea={ (data) => { console.log(data) } }/>
//   );

//   // obteniendo el input por su placeholder
//   const input = getByPlaceholderText('agrega una tarea');

//   // obteniendo el button por su texto
//   const button = getByText('Agregar');
  
//   // valor del input al renderizar el componente
//   expect(input.value).toBe('');

//   // asignando valor al input
//   act(() => {
//     fireEvent.change(input, { target: { value: 'hacer los tests' } })
//   })

//   // verificando que el valor del input fur modificado
//   expect(input.value).toBe('hacer los tests');

//   // disparando el evento de click del button
//   act(() => {
//     fireEvent.click(button);
//   })
  
//   // despues de dar click al button
//   expect(input.value).toBe('');
// });
