import { render, screen } from '@testing-library/react';
import { CompassHeader } from '../CompassHeader';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-header">
      <CompassHeader />
    </div>
  );
  expect(screen.getByTestId('test-header').firstChild).toBeVisible();
});

test('Renders logo content when provided', () => {
  render(<CompassHeader logo={<div>Logo content</div>} />);
  expect(screen.getByText('Logo content')).toBeVisible();
});

test('Renders nav content when provided', () => {
  render(<CompassHeader nav={<div>Nav content</div>} />);
  expect(screen.getByText('Nav content')).toBeVisible();
});

test('Renders profile content when provided', () => {
  render(<CompassHeader profile={<div>Profile content</div>} />);
  expect(screen.getByText('Profile content')).toBeVisible();
});

test('Renders all content when all props are provided', () => {
  render(<CompassHeader logo={<div>Logo</div>} nav={<div>Nav</div>} profile={<div>Profile</div>} />);
  expect(screen.getByText('Logo')).toBeVisible();
  expect(screen.getByText('Nav')).toBeVisible();
  expect(screen.getByText('Profile')).toBeVisible();
});

test(`Renders logo with ${styles.compass}__logo class`, () => {
  render(<CompassHeader logo={<div>Logo</div>} />);
  expect(screen.getByText('Logo').parentElement).toHaveClass(`${styles.compass}__logo`);
});

test(`Renders nav with ${styles.compassNav} class`, () => {
  render(<CompassHeader nav={<div>Nav</div>} />);
  expect(screen.getByText('Nav').parentElement).toHaveClass(styles.compassNav);
});

test(`Renders profile with ${styles.compassProfile} class`, () => {
  render(<CompassHeader profile={<div>Profile</div>} />);
  expect(screen.getByText('Profile').parentElement).toHaveClass(styles.compassProfile);
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassHeader logo={<div>Logo</div>} nav={<div>Nav</div>} profile={<div>Profile</div>} />
  );
  expect(asFragment()).toMatchSnapshot();
});
