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
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-c-avatar', { exact: true });
});

test('Renders with class name pf-m-light when "light" is passed as border prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" border="light" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-light');
});

test('Renders with class name pf-m-dark when "dark" is passed as border prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" border="dark" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-dark');
});

test('Renders with class name pf-m-xl when "xl" is passed as size prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" size="xl" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-xl');
});

test('Renders with class name pf-m-lg when "lg" is passed as size prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" size="lg" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-lg');
});

test('Renders with class name pf-m-md when "md" is passed as size prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" size="md" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-sm when "sm" is passed as size prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" size="sm" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('pf-m-sm');
});

test('Renders with custom class name when className prop is passed', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" className="test-class" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveClass('test-class');
});

test('Renders with passed src prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" src="test.png" />
    </div>
  );
  const image = screen.getByRole('img') as HTMLImageElement;
  expect(image.src).toMatch('test.png');
});

test('Renders with passed alt prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveProperty('alt', 'avatar');
});

test('Renders with passed aria-label prop', () => {
  render(
    <div data-testid="avatar">
      <Avatar alt="avatar" aria-label="Avatar test" />
    </div>
  );
  expect(screen.getByTestId('avatar').firstChild).toHaveAccessibleName('Avatar test');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Avatar alt="avatar" />);

  expect(asFragment()).toMatchSnapshot();
});
