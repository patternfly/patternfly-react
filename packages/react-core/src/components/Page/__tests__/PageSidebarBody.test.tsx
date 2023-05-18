import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageSidebarBody } from '../PageSidebarBody';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <PageSidebarBody />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class pf-v5-c-page__sidebar-body by default', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-v5-c-page__sidebar-body');
});

test('Renders with custom class', () => {
  render(<PageSidebarBody className="tester">Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('tester');
});

test('Renders without pf-m-page-insets by default', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass('pf-m-page-insets');
});

test('Renders with pf-m-page-insets when usePageInsets is passed', () => {
  render(<PageSidebarBody usePageInsets>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-m-page-insets');
});

test('Renders without pf-m-fill by default', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass('pf-m-fill');
});

test('Renders with pf-m-fill when isFilled={true} is passed', () => {
  render(<PageSidebarBody isFilled={true}>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-m-fill');
});

test('Renders without pf-m-no-fill by default', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass('pf-m-no-fill');
});

test('Renders with pf-m-no-fill when isFilled={false} is passed', () => {
  render(<PageSidebarBody isFilled={false}>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-m-no-fill');
});

test('Renders with additional props', () => {
  render(<PageSidebarBody id="tester">Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveAttribute('id', 'tester');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(asFragment()).toMatchSnapshot();
});
