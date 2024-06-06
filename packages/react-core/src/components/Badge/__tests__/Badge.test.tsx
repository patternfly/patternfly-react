import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';
import styles from '@patternfly/react-styles/css/components/Badge/badge';

test('Renders without children', () => {
  render(
    <div data-testid="badge">
      <Badge />
    </div>
  );
  expect(screen.getByTestId('badge').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Badge>Test</Badge>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class name ${styles.badge}`, () => {
  render(<Badge>Test</Badge>);
  expect(screen.getByText('Test')).toHaveClass(styles.badge);
});

test(`Renders with class name ${styles.modifiers.unread} by default`, () => {
  render(<Badge>Test</Badge>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.unread);
});

test('Renders with class name pf-m-read when isRead prop is true', () => {
  render(<Badge isRead={true}>Test</Badge>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-read');
});

test(`Renders with class name ${styles.modifiers.disabled} when isDisabled prop is true`, () => {
  render(<Badge isDisabled>Test</Badge>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.disabled);
});

test('Does not render pf-v6-screen-reader class by default', () => {
  render(<Badge>Test</Badge>);
  expect(screen.getByText('Test')).not.toContainHTML('<span class="pf-v6-screen-reader"></span>');
});

test('Renders screenReaderText passed via prop', () => {
  render(<Badge screenReaderText="Custom screen reader text">Test</Badge>);
  expect(screen.getByText('Custom screen reader text')).toBeInTheDocument();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Badge className="custom-class">Test</Badge>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(<Badge aria-label="Test label">Test</Badge>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Badge>Test</Badge>);
  expect(asFragment()).toMatchSnapshot();
});
