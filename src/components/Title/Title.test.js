import React from 'react';
import { render, } from 'react-testing-library';

import Title from './Title';

test('Title h1 text OK', () => {
    const { getByText, } = render(
        <h1 className="Title -center -bold">
            Cotação de seguros
        </h1>
    );

    expect(getByText('Cotação de seguros'));
});

test('Title h2 text OK', () => {
    const { getByText, } = render(
        <h2 className="Title -center -bold">
            Solução inovadora da líder de mercado
        </h2>
    );

    expect(getByText('Solução inovadora da líder de mercado'));
});