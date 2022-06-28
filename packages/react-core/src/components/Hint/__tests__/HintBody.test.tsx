import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HintBody } from "../HintBody";

describe('HintBody', () => {
  it('renders without children', () => {
    render(<HintBody data-testid="HintBody"></HintBody>);
    
    expect(screen.getByTestId('HintBody')).toBeVisible();
  });

  it('renders children', () => {
    render(<HintBody>{<button>Test Me</button>}</HintBody>);

    expect(screen.getByRole('button', { name: 'Test Me' })).toBeVisible();
  });

  it('renders with class pf-c-hint__body', () => {
    render(<HintBody>Hint Body Test</HintBody>);

    const body = screen.getByText('Hint Body Test');

    expect(body).toHaveClass('pf-c-hint__body');
  });

  it('renders with custom class names provided via prop', () => {
    render(<HintBody className="custom-classname">Hint Body Test</HintBody>);

    const body = screen.getByText('Hint Body Test');

    expect(body).toHaveClass('custom-classname');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<HintBody>{<button>Test</button>}</HintBody>);

    expect(asFragment()).toMatchSnapshot();
  });
});