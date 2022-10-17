import React from 'react';
import { render, screen } from '@testing-library/react';
import { AlertActionLink } from '../AlertActionLink';

jest.mock('../../Button');

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <AlertActionLink />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<AlertActionLink>Test</AlertActionLink>);

  expect(screen.getByRole('button')).toBeVisible();
});

test('Renders with custom class names provided via prop', () => {
  render(<AlertActionLink className="custom-class">Test</AlertActionLink>);

  expect(screen.getByRole('button')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(<AlertActionLink aria-label="Test label">Test</AlertActionLink>);

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Renders a Button with variant: ButtonVariant.link', () => {
  render(<AlertActionLink>Test</AlertActionLink>);

  expect(screen.getByText('variant: link')).toBeVisible();
});

test('Renders a Button with isInline: true', () => {
  render(<AlertActionLink>Test</AlertActionLink>);

  expect(screen.getByText('isInline: true')).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<AlertActionLink>Test</AlertActionLink>);
  expect(asFragment()).toMatchSnapshot();
});
