import React from 'react';
import { render } from '@testing-library/react'; 
import {App} from '..App';
import Header from '../component-header'

describe('Header', () => {
  it('Deberia mostrar el logo y la imagen de la Aplicacion', () => {
    const title = () => <h1>BURGUER QUEEN</h1>
    const { debug } = render(<Header />)
    debug()
  })
})


test('renders learn react link', () => {
     const { getByText } = render(<App />);
     const linkElement = getByText(Header);     
     expect(linkElement).toBeInTheDocument();
   });