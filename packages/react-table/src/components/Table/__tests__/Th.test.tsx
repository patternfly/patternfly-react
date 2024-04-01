import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Th } from '../Th';

test('Does not render with aria-label by default', () => {
  render(<Th />);
  expect(screen.getByRole('columnheader')).not.toHaveAccessibleName();
});

test('Renders with aria-label when passed in', () => {
  render(<Th aria-label="Test" />);
  expect(screen.getByRole('columnheader')).toHaveAccessibleName('Test');
});

test('Does not render with screen reader text by default', () => {
  render(<Th />);

  expect(screen.getByRole('columnheader')).toBeEmptyDOMElement();
});

test('Does not render with screen reader text when children are passed in', () => {
  render(<Th screenReaderText="Test">Heading label</Th>);

  expect(screen.getByRole('columnheader')).not.toHaveTextContent('Test');
});

test('Renders with screen reader text when screenReaderText is passed in', () => {
  render(<Th screenReaderText="Test" />);

  expect(screen.getByRole('columnheader')).toHaveTextContent('Test');
});
