import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from '../Banner';
import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('@patternfly/react-icons/dist/esm/icons/check-circle-icon', () => () => 'Check circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon', () => () => 'Exclamation circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon', () => () =>
  'Exclamation triangle icon mock'
);
jest.mock('@patternfly/react-icons/dist/esm/icons/info-circle-icon', () => () => 'Info circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/bell-icon', () => () => 'Bell icon mock');

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

test('Renders pf-u-screen-reader class by default for screenReaderText', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('default banner')).toHaveClass('pf-u-screen-reader', { exact: true });
});

test('Renders screenReaderText as "default banner" by default', () => {
  render(<Banner>Test</Banner>);
  expect(screen.getByText('default banner')).toBeInTheDocument();
});

test('Renders screenReaderText as "success banner" when variant="success"', () => {
  render(<Banner variant="success">Test</Banner>);
  expect(screen.getByText('success banner')).toBeInTheDocument();
});

test('Renders custom screenReaderText passed via prop', () => {
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

test('Renders with the bell icon when variant is not passed and hasStatusIcon is passed', () => {
  render(<Banner hasStatusIcon>Default banner</Banner>);

  expect(screen.getByText('Bell icon mock')).toBeVisible();
});

test('Renders with the bell icon when variant = "default" and hasStatusIcon is passed', () => {
  render(
    <Banner variant="default" hasStatusIcon>
      Default banner
    </Banner>
  );

  expect(screen.getByText('Bell icon mock')).toBeVisible();
});

test('Renders with the info circle icon when variant = "info" and hasStatusIcon is passed', () => {
  render(
    <Banner variant="info" hasStatusIcon>
      Info banner
    </Banner>
  );

  expect(screen.getByText('Info circle icon mock')).toBeVisible();
});

test('Renders with the exclamation circle icon when variant = "danger" and hasStatusIcon is passed', () => {
  render(
    <Banner variant="danger" hasStatusIcon>
      Danger banner
    </Banner>
  );

  expect(screen.getByText('Exclamation circle icon mock')).toBeVisible();
});

test('Renders with the check circle icon when variant = "success" and hasStatusIcon is passed', () => {
  render(
    <Banner variant="success" hasStatusIcon>
      Success banner
    </Banner>
  );

  expect(screen.getByText('Check circle icon mock')).toBeVisible();
});

test('Renders with the exclamation triangle icon when variant = "warning" and hasStatusIcon is passed', () => {
  render(
    <Banner variant="warning" hasStatusIcon>
      Warning banner
    </Banner>
  );

  expect(screen.getByText('Exclamation triangle icon mock')).toBeVisible();
});
