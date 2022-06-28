import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HintTitle } from "../HintTitle";

describe('HintTitle', () => {
  it('renders without children', () => {
    render(<HintTitle data-testid="HintTitle"></HintTitle>);
    
    expect(screen.getByTestId('HintTitle')).toBeVisible();
  });

  it('renders children', () => {
    render(<HintTitle>{<button>Test Me</button>}</HintTitle>);

    expect(screen.getByRole('button', { name: 'Test Me' })).toBeVisible();
  });

  it('renders with class pf-c-hint__title', () => {
    render(<HintTitle>Hint Body Test</HintTitle>);

    const body = screen.getByText('Hint Body Test');

    expect(body).toHaveClass('pf-c-hint__title');
  });

  it('renders with custom class names provided via prop', () => {
    render(<HintTitle className="custom-classname">Hint Body Test</HintTitle>);

    const body = screen.getByText('Hint Body Test');

    expect(body).toHaveClass('custom-classname');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<HintTitle>{<button>Test</button>}</HintTitle>);

    expect(asFragment()).toMatchSnapshot();
  });
});