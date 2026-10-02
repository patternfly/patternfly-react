import { createRef } from 'react';
import { act, render, screen } from '@testing-library/react';
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

describe('truncated headers', () => {
  let offsetWidth: jest.SpyInstance;
  let scrollWidth: jest.SpyInstance;

  beforeEach(() => {
    offsetWidth = jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(100);
    scrollWidth = jest.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('does not remeasure when unrelated props change', () => {
    const { rerender } = render(<Th data-testid="header">Heading</Th>);
    expect(screen.getByRole('columnheader')).toHaveAttribute('tabindex', '0');
    offsetWidth.mockClear();
    scrollWidth.mockClear();

    rerender(<Th data-testid="updated-header">Heading</Th>);

    expect(offsetWidth).not.toHaveBeenCalled();
    expect(scrollWidth).not.toHaveBeenCalled();
  });

  test('updates keyboard focusability when the label changes', () => {
    const { rerender } = render(<Th>Long heading</Th>);
    expect(screen.getByRole('columnheader')).toHaveAttribute('tabindex', '0');

    scrollWidth.mockReturnValue(100);
    rerender(<Th>Short</Th>);
    expect(screen.getByRole('columnheader')).toHaveAttribute('tabindex', '-1');
  });

  test('updates keyboard focusability when the cell is resized and cleans up the observer', () => {
    let onResize: ResizeObserverCallback;
    const observe = jest.fn();
    const unobserve = jest.fn();
    const previousObserver = window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation((callback) => {
      onResize = callback;
      return { observe, unobserve };
    });
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 0;
    });

    try {
      const { unmount } = render(<Th>Heading</Th>);
      const header = screen.getByRole('columnheader');
      expect(observe).toHaveBeenCalledWith(header);
      expect(header).toHaveAttribute('tabindex', '0');
      offsetWidth.mockReturnValue(300);
      act(() => onResize([{ target: header } as ResizeObserverEntry], {} as ResizeObserver));
      expect(header).toHaveAttribute('tabindex', '-1');
      unmount();
      expect(unobserve).toHaveBeenCalledWith(header);
    } finally {
      window.ResizeObserver = previousObserver;
    }
  });

  test('forwards object and callback refs to the header', () => {
    const objectRef = createRef<HTMLTableHeaderCellElement>();
    const callbackRef = jest.fn();
    const { rerender, unmount } = render(<Th ref={objectRef}>Heading</Th>);
    expect(objectRef.current).toBe(screen.getByRole('columnheader'));
    rerender(<Th ref={callbackRef}>Heading</Th>);
    expect(objectRef.current).toBeNull();
    expect(callbackRef).toHaveBeenCalledWith(screen.getByRole('columnheader'));
    unmount();
    expect(callbackRef).toHaveBeenLastCalledWith(null);
  });
});
