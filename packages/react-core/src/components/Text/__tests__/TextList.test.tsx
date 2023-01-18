import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextList } from '../TextList';

test('Renders without children', () => {
  render(
    <div data-testid="test-list">
      <TextList />
    </div>
  );
  expect(screen.getByTestId('test-list').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<TextList>Test</TextList>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders without class name by default', () => {
  render(<TextList>Test</TextList>);
  expect(screen.getByText('Test')).not.toHaveClass();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<TextList className="custom-class">Test</TextList>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "ul" element by default', () => {
  render(<TextList>Test</TextList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'UL');
});

test('Renders as "ol" element when component="ol"', () => {
  render(<TextList component="ol">Test</TextList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'OL');
});

test('Renders as "dl" element when component="dl"', () => {
  render(<TextList component="dl">Test</TextList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DL');
});

test('Renders with plain modifier class when isPlain is set to true', () => {
  render(<TextList isPlain>Test</TextList>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-plain');
});

test('Renders with inherited element props spread to the component', () => {
  render(<TextList aria-label="Test label">Test</TextList>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<TextList>Test</TextList>);
  expect(asFragment()).toMatchSnapshot();
});
