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

Object.values(['indeterminate', 'warning', 'success', 'error']).forEach((variant) => {
  test(`Renders with class ${styles.modifiers[variant]} when variant = ${variant}`, () => {
    render(
      <HelperTextItem variant={variant as 'default' | 'indeterminate' | 'warning' | 'success' | 'error'}>
        text
      </HelperTextItem>
    );
    expect(screen.getByText('text').parentElement).toHaveClass(styles.modifiers[variant]);
  });
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

test('Renders custom icon', () => {
  render(<HelperTextItem icon={<div>test</div>}>help test text</HelperTextItem>);
  expect(screen.getByText('test').parentElement).toHaveClass(styles.helperTextItemIcon);
});

test('Renders default icon when hasIcon = true and icon is not passed', () => {
  render(<HelperTextItem hasIcon>help test text</HelperTextItem>);
  expect(screen.getByText('help test text').parentElement?.querySelector('span')).toHaveClass(
    styles.helperTextItemIcon
  );
});

test('Renders custom icon when icon is passed and hasIcon = true', () => {
  render(
    <HelperTextItem hasIcon icon={<div>test</div>}>
      help test text
    </HelperTextItem>
  );
  expect(screen.getByText('test').parentElement).toHaveClass(styles.helperTextItemIcon);
});

test('Renders dynamic helper text', () => {
  render(<HelperTextItem isDynamic>help test text</HelperTextItem>);
  expect(screen.getByText('help test text').parentElement).toHaveClass(styles.modifiers.dynamic);
  expect(screen.getByText('help test text').querySelector('span')).toHaveClass('pf-v5-screen-reader');
});

test('Renders custom screenreader text when isDynamic = true and screenReaderText is passed', () => {
  render(
    <HelperTextItem isDynamic screenReaderText="sr test">
      help test text
    </HelperTextItem>
  );
  expect(screen.getByText('help test text').querySelector('span')).toHaveTextContent('sr test');
});
