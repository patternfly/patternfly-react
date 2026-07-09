import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

test('simple spinner', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});

test('uses default aria-label of "Contents" when none is provided', () => {
  render(<Spinner />);
  expect(screen.getByRole('progressbar')).toHaveAccessibleName('Contents');
});

test('uses a custom aria-label when one is provided', () => {
  render(<Spinner aria-label="Loading users" />);
  expect(screen.getByRole('progressbar')).toHaveAccessibleName('Loading users');
});

test('keeps the default aria-label when aria-labelledby is provided', () => {
  render(
    <>
      <span id="spinner-label">Loading reports</span>
      <Spinner aria-labelledby="spinner-label" />
    </>
  );

  const spinner = screen.getByRole('progressbar');
  expect(spinner).toHaveAttribute('aria-label', 'Contents');
  expect(spinner).toHaveAttribute('aria-labelledby', 'spinner-label');
  expect(spinner).toHaveAccessibleName('Loading reports');
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
