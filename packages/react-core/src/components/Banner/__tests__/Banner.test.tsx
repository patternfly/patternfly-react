import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from '../Banner';

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

test('Renders with class name pf-c-banner', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-banner');
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Banner className="custom-class">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders without any modifier class when variant prop is not passed', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-banner', { exact: true });
});

test('Renders with class name pf-m-success when "success" is passed to variant prop', () => {
  render(<Banner variant="success">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-success');
});

test('Renders with class name pf-m-danger when "danger" is passed to variant prop', () => {
  render(<Banner variant="danger">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-danger');
});

test('Renders with class name pf-m-warning when "warning" is passed to variant prop', () => {
  render(<Banner variant="warning">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-warning');
});

test('Renders with class name pf-m-info when "info" is passed to variant prop', () => {
  render(<Banner variant="info">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-info');
});

test('Does not render pf-u-screen-reader class by default', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).not.toContainHTML('<span class="pf-u-screen-reader"></span>');
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
