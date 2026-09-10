import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { PageFooter } from '../PageFooter';

test('Renders children', () => {
  render(<PageFooter>Footer content</PageFooter>);
  expect(screen.getByRole('contentinfo')).toBeVisible();
});

test('Renders without children', () => {
  render(<PageFooter data-testid="footer" />);
  expect(screen.getByTestId('footer')).toBeVisible();
});

test(`Renders with class ${styles.pageFooter} by default`, () => {
  render(<PageFooter>Footer content</PageFooter>);
  expect(screen.getByRole('contentinfo')).toHaveClass(styles.pageFooter, { exact: true });
});

test('Renders as a footer by default', () => {
  render(<PageFooter>Footer content</PageFooter>);
  expect(screen.getByRole('contentinfo').tagName).toBe('FOOTER');
});

test('Renders as a custom component when component is passed', () => {
  render(<PageFooter component="div">Footer content</PageFooter>);
  expect(screen.getByText('Footer content').tagName).toBe('DIV');
});

test('Renders with custom classes when className is passed', () => {
  render(<PageFooter className="custom-class">Footer content</PageFooter>);
  expect(screen.getByRole('contentinfo')).toHaveClass('custom-class');
});

test('Renders with spread props', () => {
  render(<PageFooter id="custom-id">Footer content</PageFooter>);
  expect(screen.getByRole('contentinfo')).toHaveAttribute('id', 'custom-id');
});
