import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from './Button';

test('Button text OK', () => {
    const { getByText, } = render(
        <Button className="Button" block>
            Iniciar
        </Button>
    );

    expect(getByText('Iniciar'));
});

test('Button click Ok', () => {
    const { getByText, } = render(
        <Button className="Button" block>
            Iniciar
        </Button>
    );

    fireEvent.click(getByText('Iniciar'));
})