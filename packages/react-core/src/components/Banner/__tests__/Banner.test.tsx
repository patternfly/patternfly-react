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

test('Renders without any modifier class when color and status props are not passed', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass(styles.banner, { exact: true });
});

test('Renders with class name pf-m-red when "red" is passed to color prop', () => {
  render(<Banner color="red">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-red');
});

test('Renders with class name pf-m-orangered when "orangered" is passed to color prop', () => {
  render(<Banner color="orangered">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-orangered');
});

test('Renders with class name pf-m-orange when "orange" is passed to color prop', () => {
  render(<Banner color="orange">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-orange');
});

test('Renders with class name pf-m-yellow when "yellow" is passed to color prop', () => {
  render(<Banner color="yellow">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-yellow');
});

test('Renders with class name pf-m-green when "green" is passed to color prop', () => {
  render(<Banner color="green">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-green');
});

test('Renders with class name pf-m-teal when "teal" is passed to color prop', () => {
  render(<Banner color="teal">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-teal');
});

test('Renders with class name pf-m-blue when "blue" is passed to color prop', () => {
  render(<Banner color="blue">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-blue');
});

test('Renders with class name pf-m-purple when "purple" is passed to color prop', () => {
  render(<Banner color="purple">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-purple');
});

test('Renders with class name pf-m-success when "success" is passed to status prop', () => {
  render(<Banner status="success">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-success');
});

test('Renders with class name pf-m-warning when "warning" is passed to status prop', () => {
  render(<Banner status="warning">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-warning');
});

test('Renders with class name pf-m-danger when "danger" is passed to status prop', () => {
  render(<Banner status="danger">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-danger');
});

test('Renders with class name pf-m-info when "info" is passed to status prop', () => {
  render(<Banner status="info">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-info');
});

test('Renders with class name pf-m-custom when "custom" is passed to status prop', () => {
  render(<Banner status="custom">Test</Banner>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-custom');
});

test('Does not render pf-v6-screen-reader class by default', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('Test')).not.toContainHTML('<span class="pf-v6-screen-reader"></span>');
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
