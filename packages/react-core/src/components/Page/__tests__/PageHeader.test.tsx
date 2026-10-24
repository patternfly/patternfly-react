import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { PageHeader } from '../PageHeader';

test('Renders children', () => {
  render(<PageHeader>Header content</PageHeader>);
  expect(screen.getByText('Header content')).toBeVisible();
});

test(`Renders with class ${styles.pageHeader} by default`, () => {
  render(<PageHeader>Header content</PageHeader>);
  expect(screen.getByText('Header content')).toHaveClass(styles.pageHeader, { exact: true });
});

test('Renders as a div by default', () => {
  render(<PageHeader>Header content</PageHeader>);
  expect(screen.getByText('Header content').tagName).toBe('HEADER');
});

test('Renders as a custom component when component is passed', () => {
  render(<PageHeader component="div">Header content</PageHeader>);
  expect(screen.getByText('Header content').tagName).toBe('DIV');
});

test('Renders with custom classes when className is passed', () => {
  render(<PageHeader className="custom-class">Header content</PageHeader>);
  expect(screen.getByText('Header content')).toHaveClass('custom-class');
});

test('Renders with spread props', () => {
  render(<PageHeader id="custom-id">Header content</PageHeader>);
  expect(screen.getByText('Header content')).toHaveAttribute('id', 'custom-id');
});
