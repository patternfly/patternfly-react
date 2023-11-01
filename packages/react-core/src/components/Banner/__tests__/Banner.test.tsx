import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from '../Banner';
import styles from '@patternfly/react-styles/css/components/Banner/banner';

test('Renders without children', () => {
  render(
    <div data-testid="banner">
      <Banner />
    </div>
  );
  expect(screen.getByTestId('banner').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class name ${styles.banner}`, () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass(styles.banner);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Banner className="custom-class">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders without any modifier class when variant prop is not passed', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass(styles.banner, { exact: true });
});

test('Renders with class name pf-m-green when "green" is passed to variant prop', () => {
  render(<Banner variant="green">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-green');
});

test('Renders with class name pf-m-red when "red" is passed to variant prop', () => {
  render(<Banner variant="red">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-red');
});

test('Renders with class name pf-m-gold when "gold" is passed to variant prop', () => {
  render(<Banner variant="gold">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-gold');
});

test('Renders with class name pf-m-blue when "blue" is passed to variant prop', () => {
  render(<Banner variant="blue">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-blue');
});

test('Does not render pf-v5-screen-reader class by default', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).not.toContainHTML('<span class="pf-v5-screen-reader"></span>');
});

test('Renders screenReaderText passed via prop', () => {
  render(<Banner screenReaderText="Custom screen reader text">Test</Banner>);
  expect(screen.getByText('Custom screen reader text')).toBeInTheDocument();
});

test('Renders without pf-m-sticky by default', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-sticky');
});

test('Renders with class name pf-m-sticky when isSticky prop is passed', () => {
  render(<Banner isSticky>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-sticky');
});

test('Renders with inherited element props spread to the component', () => {
  render(<Banner aria-label="Test label">Test</Banner>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Banner>Test</Banner>);
  expect(asFragment()).toMatchSnapshot();
});
