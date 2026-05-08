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

test('Does not render with additional content by default', () => {
  render(<Th />);

  expect(screen.getByRole('columnheader')).toBeEmptyDOMElement();
});

test('Render with additional content when additionalContent is passed in', () => {
  render(<Th additionalContent={<div>Extra</div>}>Test</Th>);

  expect(screen.getByRole('columnheader')).toHaveTextContent('Extra');
});

test('Additional content renders after children when additionalContent is passed in', () => {
  render(
    <Th additionalContent={<div>Extra</div>}>
      <div>Test</div>
    </Th>
  );

  const th = screen.getByRole('columnheader');
  const thChildren = th.children;

  expect(thChildren.item(0)?.textContent).toEqual('Test');
  expect(thChildren.item(1)?.textContent).toEqual('Extra');
});

test('Renders checkbox without indeterminate state by default', () => {
  render(<Th select={{ onSelect: jest.fn(), isSelected: false }} aria-label="Select all" />);

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
  expect(checkbox).not.toBeChecked();
  expect(checkbox.indeterminate).toBe(false);
});

test('Renders checkbox with indeterminate state when isIndeterminate is true', () => {
  render(<Th select={{ onSelect: jest.fn(), isSelected: false, isIndeterminate: true }} aria-label="Select all" />);

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
  expect(checkbox.indeterminate).toBe(true);
});

test('Renders checked checkbox when isSelected is true and isIndeterminate is false', () => {
  render(<Th select={{ onSelect: jest.fn(), isSelected: true, isIndeterminate: false }} aria-label="Select all" />);

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
  expect(checkbox).toBeChecked();
  expect(checkbox.indeterminate).toBe(false);
});
