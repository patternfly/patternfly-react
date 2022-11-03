import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressHelperText } from '../ProgressHelperText';

jest.mock('../../HelperText');

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

  expect(screen.getByTestId('helper-text-children-container').parentElement).toHaveClass('pf-c-progress__helper-text');
});

test('Passes a variant of undefined to the helper text item when a progressVariant is not passed', () => {
  render(<ProgressHelperText>Test</ProgressHelperText>);

  expect(screen.getByText('variant: undefined')).toBeVisible();
});

test('Passes a variant of "success" to the helper text item when the progressVariant is "success"', () => {
  render(<ProgressHelperText progressVariant="success">Test</ProgressHelperText>);

  expect(screen.getByText('variant: success')).toBeVisible();
});

test('Passes a variant of "warning" to the helper text item when the progressVariant is "warning"', () => {
  render(<ProgressHelperText progressVariant="warning">Test</ProgressHelperText>);

  expect(screen.getByText('variant: warning')).toBeVisible();
});

test('Passes a variant of "error" to the helper text item when the progressVariant is "danger"', () => {
  render(<ProgressHelperText progressVariant="danger">Test</ProgressHelperText>);

  expect(screen.getByText('variant: error')).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ProgressHelperText>test</ProgressHelperText>);
  expect(asFragment()).toMatchSnapshot();
});
