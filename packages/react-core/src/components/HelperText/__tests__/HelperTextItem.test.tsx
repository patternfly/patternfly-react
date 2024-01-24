import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HelperTextItem } from '../HelperTextItem';

import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<HelperTextItem>help test text</HelperTextItem>);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <HelperTextItem />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders default classes', () => {
  render(<HelperTextItem>help test text 1</HelperTextItem>);
  expect(screen.getByText('help test text 1')).toHaveClass(styles.helperTextItemText);
  expect(screen.getByText('help test text 1').parentElement).toHaveClass(styles.helperTextItem);
});

test('Renders custom className', () => {
  render(<HelperTextItem className="custom">help test text 1</HelperTextItem>);
  expect(screen.getByText('help test text 1').parentElement).toHaveClass('custom');
});

test('Does not render screen reader text by default', () => {
  render(<HelperTextItem>help test text 1</HelperTextItem>);

  expect(screen.queryByText('status', { exact: false })).not.toBeInTheDocument();
});

Object.values(['indeterminate', 'warning', 'success', 'error']).forEach((variant) => {
  test(`Renders with class ${styles.modifiers[variant]} when variant = ${variant}`, () => {
    render(
      <HelperTextItem variant={variant as 'default' | 'indeterminate' | 'warning' | 'success' | 'error'}>
        text
      </HelperTextItem>
    );
    expect(screen.getByText('text').parentElement).toHaveClass(styles.modifiers[variant]);
  });

  test(`Renders default screenreader text when variant = ${variant}`, () => {
    render(
      <HelperTextItem variant={variant as 'default' | 'indeterminate' | 'warning' | 'success' | 'error'}>
        text
      </HelperTextItem>
    );
    expect(screen.getByText(`: ${variant} status;`)).toBeInTheDocument();
  });
});

test('Renders custom screen reader text', () => {
  render(
    <HelperTextItem variant="error" screenReaderText="danger">
      help test text 1
    </HelperTextItem>
  );

  expect(screen.queryByText(': error status;')).not.toBeInTheDocument();
  expect(screen.getByText(': danger;')).toBeInTheDocument();
});

test('Renders id when id is passed', () => {
  render(<HelperTextItem id="text-item">help test text 1</HelperTextItem>);
  expect(screen.getByText('help test text 1').parentElement).toHaveAttribute('id', 'text-item');
});

test('Renders as div by default when component is not passed', () => {
  render(<HelperTextItem>help test text 1</HelperTextItem>);
  expect(screen.getByText('help test text 1').parentElement?.tagName).toBe('DIV');
});

test('Renders with element passed to component prop', () => {
  render(<HelperTextItem component="li">help test text 1</HelperTextItem>);
  expect(screen.getByText('help test text 1').parentElement?.tagName).toBe('LI');
});

test('Does not render an icon by default', () => {
  render(<HelperTextItem>help test text</HelperTextItem>);
  expect(screen.queryByText('help test text')?.previousSibling).not.toBeInTheDocument();
});

test('Renders a default icon when variant is passed and icon is not passed', () => {
  render(<HelperTextItem variant="success">help test text</HelperTextItem>);
  expect(screen.getByText('help test text').previousSibling).toHaveClass(styles.helperTextItemIcon);
});

test('Renders custom icon when icon prop is passed', () => {
  render(<HelperTextItem icon={<div>icon content</div>}>help test text</HelperTextItem>);
  expect(screen.getByText('icon content').parentElement).toHaveClass(styles.helperTextItemIcon);
});

test('Renders custom icon instead of variant icon when icon and variant are passed', () => {
  render(
    <HelperTextItem icon={<div>icon content</div>} variant="success">
      help test text
    </HelperTextItem>
  );
  expect(screen.getByText('icon content').parentElement).toHaveClass(styles.helperTextItemIcon);
});
