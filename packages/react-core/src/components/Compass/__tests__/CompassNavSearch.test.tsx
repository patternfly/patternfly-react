import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompassNavSearch } from '../CompassNavSearch';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with default aria-label', () => {
  render(<CompassNavSearch />);
  expect(screen.getByRole('button', { name: 'Search' })).toBeVisible();
});

test('Renders with custom aria-label when provided', () => {
  render(<CompassNavSearch aria-label="Custom search" />);
  expect(screen.getByRole('button', { name: 'Custom search' })).toBeVisible();
});

test('Renders with default tooltip content', async () => {
  const user = userEvent.setup();

  render(<CompassNavSearch />);

  const button = screen.getByRole('button');

  user.hover(button);

  await screen.findByRole('tooltip');

  expect(screen.getByRole('tooltip')).toHaveTextContent('Search');
});

test('Renders with custom tooltip content when provided', async () => {
  const user = userEvent.setup();

  render(<CompassNavSearch tooltipContent="Custom tooltip" />);

  const button = screen.getByRole('button');

  user.hover(button);

  await screen.findByRole('tooltip');

  expect(screen.getByRole('tooltip')).toHaveTextContent('Custom tooltip');
});

test('Renders with custom class name when className prop is provided', () => {
  const { container } = render(<CompassNavSearch className="custom-class" />);

  expect(container.firstChild).toHaveClass('custom-class');
});

test(`Renders with default class`, () => {
  const { container } = render(<CompassNavSearch />);

  expect(container.firstChild).toHaveClass(styles.compassNav + '-search', { exact: true });
});

test('Calls onClick handler when button is clicked', async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  render(<CompassNavSearch onClick={onClick} />);

  await user.click(screen.getByRole('button', { name: 'Search' }));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Renders button with plain variant and circle shape', () => {
  render(<CompassNavSearch />);

  const button = screen.getByRole('button', { name: 'Search' });

  expect(button).toHaveClass('pf-m-plain');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassNavSearch />);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with custom props', () => {
  const { asFragment } = render(
    <CompassNavSearch aria-label="Custom search" tooltipContent="Search content" className="custom-class" />
  );

  expect(asFragment()).toMatchSnapshot();
});
