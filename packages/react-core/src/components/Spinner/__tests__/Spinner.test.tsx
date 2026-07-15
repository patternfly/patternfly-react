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

test('Renders with accessible name via aria-labelledby when passed', () => {
  render(
    <>
      <span id="spinner-label">Loading reports</span>
      <Spinner aria-labelledby="spinner-label" />
    </>
  );

  expect(screen.getByRole('progressbar')).toHaveAccessibleName('Loading reports');
});

test('Renders with aria-label even when aria-labelledby is passed', () => {
  render(<Spinner aria-labelledby="external-label" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Contents');
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
