import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressHelperText } from '../ProgressHelperText';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <ProgressHelperText />
    </div>
  );
  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ProgressHelperText>Test</ProgressHelperText>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class pf-c-progress__helper-text on the div containing the helper text component', () => {
  render(<ProgressHelperText>Test</ProgressHelperText>);

  expect(screen.getByText('Test')).toHaveClass('pf-c-progress__helper-text');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ProgressHelperText aria-label="Test label">Test</ProgressHelperText>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ProgressHelperText>test</ProgressHelperText>);
  expect(asFragment()).toMatchSnapshot();
});
