import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '../Text';

test('Renders without children', () => {
  render(
    <div data-testid="test-content">
      <Text />
    </div>
  );
  expect(screen.getByTestId('test-content').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Text>Test</Text>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders without class name by default', () => {
  render(<Text>Test</Text>);
  expect(screen.getByText('Test')).not.toHaveClass();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Text className="custom-class">Test</Text>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "p" element by default', () => {
  render(<Text>Test</Text>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'P');
});

test('Renders as "h1" element when component="h1"', () => {
  render(<Text component="h1">Test</Text>);
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders as "h2" element when component="h2"', () => {
  render(<Text component="h2">Test</Text>);
  expect(screen.getByRole('heading', { level: 2 })).toBeVisible();
});

test('Renders as "h3" element when component="h3"', () => {
  render(<Text component="h3">Test</Text>);
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders as "h4" element when component="h4"', () => {
  render(<Text component="h4">Test</Text>);
  expect(screen.getByRole('heading', { level: 4 })).toBeVisible();
});

test('Renders as "h5" element when component="h5"', () => {
  render(<Text component="h5">Test</Text>);
  expect(screen.getByRole('heading', { level: 5 })).toBeVisible();
});

test('Renders as "h6" element when component="h6"', () => {
  render(<Text component="h6">Test</Text>);
  expect(screen.getByRole('heading', { level: 6 })).toBeVisible();
});

test('Renders as "a" element when component="a"', () => {
  render(<Text component="a">Test</Text>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'A');
});

test('Renders as "blockquote" element when component="blockquote"', () => {
  render(<Text component="blockquote">Test</Text>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'BLOCKQUOTE');
});

test('Renders as "pre" element when component="pre"', () => {
  render(<Text component="pre">Test</Text>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'PRE');
});

test('Renders without class name pf-m-visited by default', () => {
  render(<Text>Test</Text>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisited=true and component="a"', () => {
  render(
    <Text isVisitedLink={true} component="a">
      Test
    </Text>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with inherited element props spread to the component', () => {
  render(<Text aria-label="Test label">Test</Text>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Text ouiaId="ouia-id">Test</Text>);
  expect(asFragment()).toMatchSnapshot();
});
