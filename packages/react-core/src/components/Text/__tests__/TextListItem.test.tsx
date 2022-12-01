import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextListItem } from '../TextListItem';

test('Renders without children', () => {
  render(
    <div data-testid="test-list-item">
      <TextListItem />
    </div>
  );
  expect(screen.getByTestId('test-list-item').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<TextListItem>Test</TextListItem>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders without class name by default', () => {
  render(<TextListItem>Test</TextListItem>);
  expect(screen.getByText('Test')).not.toHaveClass();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<TextListItem className="custom-class">Test</TextListItem>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "li" element by default', () => {
  render(<TextListItem>Test</TextListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'LI');
});

test('Renders as "dt" element when component="dt"', () => {
  render(<TextListItem component="dt">Test</TextListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DT');
});

test('Renders as "dd" element when component="dd"', () => {
  render(<TextListItem component="dd">Test</TextListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DD');
});

test('Renders with inherited element props spread to the component', () => {
  render(<TextListItem aria-label="Test label">Test</TextListItem>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<TextListItem>Test</TextListItem>);
  expect(asFragment()).toMatchSnapshot();
});
