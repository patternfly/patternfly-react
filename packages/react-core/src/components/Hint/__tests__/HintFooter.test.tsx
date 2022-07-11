import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HintFooter } from "../HintFooter";

test('renders without children', () => {
  render(<HintFooter data-testid="HintFooter"></HintFooter>);
  
  expect(screen.getByTestId('HintFooter')).toBeVisible();
});

test('renders children', () => {
  render(<HintFooter>{<button>Test Me</button>}</HintFooter>);

  expect(screen.getByRole('button', { name: 'Test Me' })).toBeVisible();
});

test('renders with class pf-c-hint__footer', () => {
  render(<HintFooter>Hint Body Test</HintFooter>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass('pf-c-hint__footer');
});

test('renders with custom class names provided via prop', () => {
  render(<HintFooter className="custom-classname">Hint Body Test</HintFooter>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass('custom-classname');
});

test('renders with inherited element props spread to the component', () => {
  render(
    <HintFooter aria-label="labelling-id">Test</HintFooter>
  );

  expect(screen.getByText('Test')).toHaveAccessibleName('labelling-id');
});

test('matches snapshot', () => {
  const { asFragment } = render(<HintFooter>{<button>Test</button>}</HintFooter>);

  expect(asFragment()).toMatchSnapshot();
});
