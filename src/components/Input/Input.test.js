/* Modules */
import React from 'react';
import { render } from 'react-testing-library';

/* Component */
import Input from './Input';

test('Input text OK', () => {
    const { getByText, } = render(
        <Input
            name="cpnj"
            label="CNPJ / Empresa"
        />
    );

    expect(getByText('CNPJ / Empresa'));
});
