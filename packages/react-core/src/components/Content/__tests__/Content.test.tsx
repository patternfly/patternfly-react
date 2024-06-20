import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '../Content';

test('Renders without children', () => {
  render(
    <div data-testid="test-content">
      <Content />
    </div>
  );
  expect(screen.getByTestId('test-content').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Content className="custom-class">Test</Content>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "div" element by default', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DIV');
});

test('Renders as "h1" element when component="h1"', () => {
  render(<Content component="h1">Test</Content>);
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders as "h2" element when component="h2"', () => {
  render(<Content component="h2">Test</Content>);
  expect(screen.getByRole('heading', { level: 2 })).toBeVisible();
});

test('Renders as "h3" element when component="h3"', () => {
  render(<Content component="h3">Test</Content>);
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders as "h4" element when component="h4"', () => {
  render(<Content component="h4">Test</Content>);
  expect(screen.getByRole('heading', { level: 4 })).toBeVisible();
});

test('Renders as "h5" element when component="h5"', () => {
  render(<Content component="h5">Test</Content>);
  expect(screen.getByRole('heading', { level: 5 })).toBeVisible();
});

test('Renders as "h6" element when component="h6"', () => {
  render(<Content component="h6">Test</Content>);
  expect(screen.getByRole('heading', { level: 6 })).toBeVisible();
});

test('Renders as "a" element when component="a"', () => {
  render(<Content component="a">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'A');
});

test('Renders as "blockquote" element when component="blockquote"', () => {
  render(<Content component="blockquote">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'BLOCKQUOTE');
});

test('Renders as "pre" element when component="pre"', () => {
  render(<Content component="pre">Test</Content>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'PRE');
});

test('Renders without class name pf-m-visited by default', () => {
  render(<Content>Test</Content>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisited=true and component="a"', () => {
  render(
    <Content isVisitedLink={true} component="a">
      Test
    </Content>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with inherited element props spread to the component', () => {
  render(<Content aria-label="Test label">Test</Content>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Content ouiaId="ouia-id">Test</Content>);
  expect(asFragment()).toMatchSnapshot();
});
