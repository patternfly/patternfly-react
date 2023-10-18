import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HelperText } from '../HelperText';
import { HelperTextItem } from '../HelperTextItem';

import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';

test('Renders to match snapshot', () => {
  const { asFragment } = render(
    <HelperText>
      <HelperTextItem>help test text</HelperTextItem>
      <HelperTextItem>help test text 2</HelperTextItem>
      <HelperTextItem>help test text 3</HelperTextItem>
    </HelperText>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('HelperText renders custom className', () => {
  render(
    <HelperText className="custom" data-testid="helper">
      <HelperTextItem>help test text 1</HelperTextItem>
    </HelperText>
  );
  expect(screen.getByTestId('helper')).toHaveClass('custom');
});

Object.values(['indeterminate', 'warning', 'success', 'error']).forEach((variant) => {
  test(`Renders ${styles.modifiers[variant]} when variant = ${variant}`, () => {
    render(
      <HelperTextItem variant={variant as 'default' | 'indeterminate' | 'warning' | 'success' | 'error'}>
        text
      </HelperTextItem>
    );
    expect(screen.getByText('text').parentElement).toHaveClass(styles.modifiers[variant]);
  });
});

test('HelperTextItem renders custom className', () => {
  render(
    <HelperText>
      <HelperTextItem className="custom">help test text 1</HelperTextItem>
    </HelperText>
  );
  expect(screen.getByText('help test text 1').parentElement).toHaveClass('custom');
});

test('Renders as ul when component = ul', () => {
  render(
    <HelperText component="ul" aria-label="helper">
      <HelperTextItem component="li">help test text 1</HelperTextItem>
      <HelperTextItem component="li">help test text 2</HelperTextItem>
    </HelperText>
  );
  expect(screen.getByLabelText('helper').tagName).toBe('UL');
  expect(screen.getByText('help test text 1').parentElement?.tagName).toBe('LI');
});

test('Renders custom icon', () => {
  render(
    <HelperText>
      <HelperTextItem icon={<div>test</div>}>help test text</HelperTextItem>
    </HelperText>
  );
  expect(screen.getByText('test').parentElement).toHaveClass(styles.helperTextItemIcon);
});

test('Renders dynamic helper text', () => {
  render(
    <HelperText>
      <HelperTextItem isDynamic>help test text</HelperTextItem>
    </HelperText>
  );
  expect(screen.getByText('help test text').parentElement).toHaveClass(styles.modifiers.dynamic);
});
