import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../Title';

test('Renders without children', () => {
  render(
    <div data-testid="title">
      <Title headingLevel="h1" />
    </div>
  );
  expect(screen.getByTestId('title').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Title headingLevel="h1">Test</Title>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with the pf-c-title', () => {
  render(<Title headingLevel="h1">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-c-title');
});

test('Renders with only the class pf-c-title and the heading level modifier class pf-m-2xl by default', () => {
  render(<Title headingLevel="h1">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-c-title pf-m-2xl', { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(
    <Title headingLevel="h1" className="test-class">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('test-class');
});

test('Renders with class name pf-m-2xl by default when "h1" is passed as heading level', () => {
  render(<Title headingLevel="h1">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-2xl');
});

test('Renders with class name pf-m-xl by default when "h2" is passed as heading level', () => {
  render(<Title headingLevel="h2">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-xl');
});

test('Renders with class name pf-m-lg by default when "h3" is passed as heading level', () => {
  render(<Title headingLevel="h3">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-lg');
});

test('Renders with class name pf-m-md by default when "h4" is passed as heading level', () => {
  render(<Title headingLevel="h4">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-md by default when "h5" is passed as heading level', () => {
  render(<Title headingLevel="h5">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-md by default when "h6" is passed as heading level', () => {
  render(<Title headingLevel="h6">Test</Title>);
  expect(screen.getByRole('heading')).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-md when "md" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="md">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-md');
});

test('Renders with class name pf-m-lg when "lg" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="lg">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-lg');
});

test('Renders with class name pf-m-xl when "xl" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="xl">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-xl');
});

test('Renders with class name pf-m-2xl when "2xl" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="2xl">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-2xl');
});

test('Renders with class name pf-m-3xl when "3xl" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="3xl">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-3xl');
});

test('Renders with class name pf-m-4xl when "4xl" is passed as title size', () => {
  render(
    <Title headingLevel="h1" size="4xl">
      Test
    </Title>
  );
  expect(screen.getByRole('heading')).toHaveClass('pf-m-4xl');
});

test('Renders with tag name "h1" when "h1" is passed as heading level', () => {
  render(<Title headingLevel="h1">Test</Title>);
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders with tag name "h2" when "h2" is passed as heading level', () => {
  render(<Title headingLevel="h2">Test</Title>);
  expect(screen.getByRole('heading', { level: 2 })).toBeVisible();
});

test('Renders with tag name "h3" when "h3" is passed as heading level', () => {
  render(<Title headingLevel="h3">Test</Title>);
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders with tag name "h4" when "h4" is passed as heading level', () => {
  render(<Title headingLevel="h4">Test</Title>);
  expect(screen.getByRole('heading', { level: 4 })).toBeVisible();
});

test('Renders with tag name "h5" when "h5" is passed as heading level', () => {
  render(<Title headingLevel="h5">Test</Title>);
  expect(screen.getByRole('heading', { level: 5 })).toBeVisible();
});

test('Renders with tag name "h6" when "h6" is passed as heading level', () => {
  render(<Title headingLevel="h6">Test</Title>);
  expect(screen.getByRole('heading', { level: 6 })).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <Title data-ouia-component-id="ouia-id" headingLevel="h1">
      Test
    </Title>
  );
  expect(asFragment()).toMatchSnapshot();
});
