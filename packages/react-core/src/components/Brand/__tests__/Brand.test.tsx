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

test('Renders with custom class name when className prop and children are provided', () => {
  render(
    <Brand alt="brand" className="custom-class">
      <div>test</div>
    </Brand>
  );
  expect(screen.getByText('test')?.parentElement).toHaveClass('custom-class');
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

test('Has correct src with passed src prop', () => {
  render(<Brand alt="brand" src="test.png" />);
  const image = screen.getByRole('img') as HTMLImageElement;
  expect(image.src).toMatch('test.png');
});

test('Has correct alt text with passed alt prop', () => {
  render(<Brand alt="brand" src="test.png" />);

  expect(screen.getByAltText('brand')).toBeTruthy();
});

test('Has correct src with passed children', () => {
  render(
    <Brand alt="brand" src="test.png">
      <div>test width</div>
    </Brand>
  );
  const image = screen.getByRole('img') as HTMLImageElement;
  expect(image.src).toMatch('test.png');
});

test('Has correct alt text with passed children', () => {
  render(
    <Brand alt="brand" src="test.png">
      <div>test width</div>
    </Brand>
  );
  expect(screen.getByAltText('brand')).toBeTruthy();
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

test('width styles are present when passed', () => {
  render(
    <Brand
      alt="brand with widths"
      widths={{
        default: '100px',
        sm: '25px',
        md: '50px',
        lg: '100px',
        xl: '125px',
        '2xl': '150px'
      }}
    />
  );
  expect(screen.getByAltText('brand with widths')).toHaveAttribute(
    'style',
    '--pf-v6-c-brand--Width: 100px; --pf-v6-c-brand--Width-on-sm: 25px; --pf-v6-c-brand--Width-on-md: 50px; --pf-v6-c-brand--Width-on-lg: 100px; --pf-v6-c-brand--Width-on-xl: 125px; --pf-v6-c-brand--Width-on-2xl: 150px;'
  );
});
