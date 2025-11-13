import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompassNavHome } from '../CompassNavHome';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with default aria-label', () => {
  render(<CompassNavHome />);
  expect(screen.getByRole('button', { name: 'Home' })).toBeVisible();
});

test('Renders with custom aria-label when provided', () => {
  render(<CompassNavHome aria-label="Custom home" />);
  expect(screen.getByRole('button', { name: 'Custom home' })).toBeVisible();
});

test('Renders with default tooltip content', () => {
  render(<CompassNavHome />);
  expect(screen.getByRole('button', { name: 'Home' })).toBeVisible();
});

test('Renders with custom tooltip content when provided', () => {
  render(<CompassNavHome tooltipContent="Custom tooltip" />);
  expect(screen.getByRole('button', { name: 'Home' })).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  const { container } = render(<CompassNavHome className="custom-class" />);
  expect(container.firstChild).toHaveClass('custom-class');
});

test(`Renders with default class`, () => {
  const { container } = render(<CompassNavHome />);
  expect(container.firstChild).toHaveClass(styles.compassNav + '-home');
});

test('Calls onClick handler when button is clicked', async () => {
  const onClick = jest.fn();
  const user = userEvent.setup();
  render(<CompassNavHome onClick={onClick} />);

  await user.click(screen.getByRole('button', { name: 'Home' }));
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Renders button with plain variant and circle shape', () => {
  render(<CompassNavHome />);
  const button = screen.getByRole('button', { name: 'Home' });
  expect(button).toHaveClass('pf-m-plain');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassNavHome />);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with custom props', () => {
  const { asFragment } = render(
    <CompassNavHome aria-label="Custom home" tooltipContent="Go home" className="custom-class" />
  );
  expect(asFragment()).toMatchSnapshot();
});
