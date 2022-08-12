import * as React from 'react';
import {render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';

test('renders simple avatar', () => {
  render(<Avatar alt="avatar" data-testid="avatar" src="test.png" border="light" />);
  expect(screen.getByTestId('avatar')).toBeVisible();
});

test('renders with class name pf-m-light when "light" is passed as border prop', () => {
  render(<Avatar alt="avatar" data-testid="avatar" src="test.png" border="light" />);
  expect(screen.getByTestId('avatar')).toHaveClass('pf-m-light');
});

test('renders with class name pf-m-lg when "lg" is passed as size prop', () => {
  render(<Avatar alt="avatar" data-testid="avatar" src="test.png" size='lg' />);
  expect(screen.getByTestId('avatar')).toHaveClass('pf-m-lg');
});


