import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from '@patternfly/react-styles/css/components/Hint/hint';

import { HintBody } from '../HintBody';

test('renders without children', () => {
  render(<HintBody data-testid="HintBody"></HintBody>);

  expect(screen.getByTestId('HintBody')).toBeVisible();
});

test('renders children', () => {
  render(<HintBody>{<button>Test Me</button>}</HintBody>);

  expect(screen.getByRole('button', { name: 'Test Me' })).toBeVisible();
});

test(`renders with class ${styles.hintBody}`, () => {
  render(<HintBody>Hint Body Test</HintBody>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass(styles.hintBody);
});

test('renders with custom class names provided via prop', () => {
  render(<HintBody className="custom-classname">Hint Body Test</HintBody>);

  const body = screen.getByText('Hint Body Test');

  expect(body).toHaveClass('custom-classname');
});

test('renders with inherited element props spread to the component', () => {
  render(<HintBody aria-label="labelling-id">Test</HintBody>);

  expect(screen.getByText('Test')).toHaveAccessibleName('labelling-id');
});

test('matches snapshot', () => {
  const { asFragment } = render(<HintBody>{<button>Test</button>}</HintBody>);

  expect(asFragment()).toMatchSnapshot();
});
