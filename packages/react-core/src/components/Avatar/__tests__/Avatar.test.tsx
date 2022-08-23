import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';

test('Renders simple avatar', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toBeVisible();
});

test('Renders without any modifier class when border and size props are not passed', () => {
  render(<Avatar alt="avatar" />);
  expect(screen.getByRole('img')).toHaveClass('pf-c-avatar', { exact: true });
});

test('Renders with class name pf-m-light when "light" is passed as border prop', () => {
  render(<Avatar alt="avatar" border="light" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-light');
});

test('Renders with class name pf-m-dark when "dark" is passed as border prop', () => {
  render(<Avatar alt="avatar" border="dark" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-dark');
});

test('Renders with class name pf-m-xl when "xl" is passed as size prop', () => {
  render(<Avatar alt="avatar" size="xl" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-xl');
});

test('Renders with class name pf-m-lg when "lg" is passed as size prop', () => {
  render(<Avatar alt="avatar" size="lg" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-lg');
});

test('Renders with class name pf-m-md when "md" is passed as size prop', () => {
  render(<Avatar alt="avatar" size="md" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-sm when "sm" is passed as size prop', () => {
  render(<Avatar alt="avatar" size="sm" />);
  expect(screen.getByRole('img')).toHaveClass('pf-m-sm');
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Avatar alt="avatar" className="test-class" />);
  expect(screen.getByRole('img')).toHaveClass('test-class');
});

test('Renders with passed src prop', () => {
  render(<Avatar alt="avatar" src="test.png" />);
  const image = screen.getByRole('img') as HTMLImageElement;
  expect(image.src).toMatch('test.png');
});

test('Renders with passed alt prop', () => {
  render(<Avatar alt="avatar" />);
  expect(screen.getByRole('img')).toHaveProperty('alt', 'avatar');
});

test('Renders with passed aria-label prop', () => {
  render(<Avatar alt="avatar" aria-label="Avatar test" />);
  expect(screen.getByRole('img')).toHaveAccessibleName('Avatar test');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Avatar alt="avatar" aria-label="Avatar test" src="test.png" className="test-class" />);

  expect(asFragment()).toMatchSnapshot();
});
