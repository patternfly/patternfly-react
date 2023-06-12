import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from '@patternfly/react-styles/css/components/Hint/hint';

import { HintTitle } from '../HintTitle';

test('renders without children', () => {
  render(<HintTitle data-testid="HintTitle"></HintTitle>);

  expect(screen.getByTestId('HintTitle')).toBeVisible();
});

test('renders children', () => {
  render(<HintTitle>{<button>Test Me</button>}</HintTitle>);

  expect(screen.getByRole('button', { name: 'Test Me' })).toBeVisible();
});

test(`renders with class ${styles.hintTitle}`, () => {
  render(<HintTitle>Hint Body Test</HintTitle>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass(styles.hintTitle);
});

test('renders with custom class names provided via prop', () => {
  render(<HintTitle className="custom-classname">Hint Body Test</HintTitle>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass('custom-classname');
});

test('renders with inherited element props spread to the component', () => {
  render(<HintTitle aria-label="labelling-id">Test</HintTitle>);

  expect(screen.getByText('Test')).toHaveAccessibleName('labelling-id');
});

test('matches snapshot', () => {
  const { asFragment } = render(<HintTitle>{<button>Test</button>}</HintTitle>);

  expect(asFragment()).toMatchSnapshot();
});
