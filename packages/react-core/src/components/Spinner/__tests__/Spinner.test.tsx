import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

test('simple spinner', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});

test('uses default aria-label of "Contents" when none is provided', () => {
  render(<Spinner />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Contents');
});

test('uses a custom aria-label when one is provided', () => {
  render(<Spinner aria-label="Loading users" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Loading users');
});

test('renders aria-labelledBy when provided', () => {
  render(<Spinner aria-labelledBy="external-label" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-labelledBy', 'external-label');
});

test('small spinner', () => {
  const { asFragment } = render(<Spinner size="sm" />);
  expect(asFragment()).toMatchSnapshot();
});

test('medium spinner', () => {
  const { asFragment } = render(<Spinner size="md" />);
  expect(asFragment()).toMatchSnapshot();
});

test('large spinner', () => {
  const { asFragment } = render(<Spinner size="lg" />);
  expect(asFragment()).toMatchSnapshot();
});

test('extra large spinner', () => {
  const { asFragment } = render(<Spinner size="xl" />);
  expect(asFragment()).toMatchSnapshot();
});
