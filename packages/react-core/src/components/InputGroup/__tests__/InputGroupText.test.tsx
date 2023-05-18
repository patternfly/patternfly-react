import React from 'react';

import { render, screen } from '@testing-library/react';

import { InputGroupText } from '../InputGroupText';

describe('InputGroupText', () => {
  test('renders', () => {
    render(
      <InputGroupText className="inpt-grp-text" id="email-npt-grp">
        @
      </InputGroupText>
    );
    expect(screen.getByText('@')).toBeInTheDocument();
  });
});
