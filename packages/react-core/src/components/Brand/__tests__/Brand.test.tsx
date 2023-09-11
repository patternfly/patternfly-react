import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Brand } from '../Brand';
import '@testing-library/jest-dom';

test('simple brand', () => {
  render(<Brand alt="brand" />);
  expect(screen.getByAltText('brand')).toBeInTheDocument();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Brand alt="brand" className="custom-class" />);
  expect(screen.getByAltText('brand')).toHaveClass('custom-class');
});

test('Renders passed children', () => {
  render(
    <Brand alt="brand">
      <div>test</div>
    </Brand>
  );
  expect(screen.getByText('test')).toBeInTheDocument();
});

test('Renders as picture when children are present', () => {
  render(
    <Brand alt="brand">
      <div>test</div>
    </Brand>
  );
  expect(screen.getByText('test')?.parentElement?.tagName).toBe('PICTURE');
});

test('Renders as img when no children are present', () => {
  render(<Brand alt="brand" />);
  expect(screen.getByAltText('brand')?.tagName).toBe('IMG');
});

test('Renders with passed src prop', () => {
  render(<Brand alt="brand" src="test.png" />);
  const image = screen.getByRole('img') as HTMLImageElement;
  expect(image.src).toMatch('test.png');
});

test('styles get spread when there are children', () => {
  render(
    <Brand alt="brand" data-testid="brand" style={{ color: 'blue' }}>
      <div>test width</div>
    </Brand>
  );
  expect(screen.getByTestId('brand')).toHaveStyle(`color: blue`);
});

test('styles get spread when there are no children', () => {
  render(<Brand alt="brand no children" style={{ width: '30px' }} />);
  expect(screen.getByAltText('brand no children')).toHaveStyle(`width: 30px`);
});
