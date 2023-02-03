import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextContent } from '../TextContent';

test('Renders without children', () => {
  render(
    <div data-testid="test-content">
      <TextContent />
    </div>
  );
  expect(screen.getByTestId('test-content').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<TextContent>Test</TextContent>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class name pf-c-content', () => {
  render(<TextContent>Test</TextContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-content', { exact: true });
});

test('Renders with custom class name when className prop is provided', () => {
  render(<TextContent className="custom-class">Test</TextContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders without class name pf-m-visited by default', () => {
  render(<TextContent>Test</TextContent>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisited=true', () => {
  render(<TextContent isVisited={true}>Test</TextContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with inherited element props spread to the component', () => {
  render(<TextContent aria-label="Test label">Test</TextContent>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<TextContent>Test</TextContent>);
  expect(asFragment()).toMatchSnapshot();
});
