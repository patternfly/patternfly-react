import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Brand } from '../Brand';
import '@testing-library/jest-dom';

test('simple brand', () => {
  render(<Brand alt="brand" />);
  expect(screen.getByAltText('brand')).toBeInTheDocument();
});

test('passing children creates picture brand', () => {
  render(
    <Brand alt="brand">
      <div>test</div>
    </Brand>
  );
  expect(screen.getByText('test')).toBeInTheDocument();
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
