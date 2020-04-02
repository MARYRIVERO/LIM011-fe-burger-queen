import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';


it('', async () => {
    const app= render( < App / > );
    const element= app.getByTestId('imagen');
    expect(element).toBeTruthy()
})
