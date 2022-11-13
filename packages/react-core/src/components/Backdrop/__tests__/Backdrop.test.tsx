import React from 'react';
import { render, screen } from '@testing-library/react';
import { Backdrop } from '../Backdrop';

test('Renders without children', () => {
  render(
    <div data-testid="backdrop">
      <Backdrop />
    </div>
  );
  expect(screen.getByTestId('backdrop').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with the pf-c-backdrop', () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-backdrop');
});

test('Renders with only the class pf-c-backdrop by default', () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-backdrop', { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Backdrop className="test-class">Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<Backdrop aria-label="this is a simple backdrop">Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple backdrop');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Backdrop>Backdrop</Backdrop>);
  expect(asFragment()).toMatchSnapshot();
});
