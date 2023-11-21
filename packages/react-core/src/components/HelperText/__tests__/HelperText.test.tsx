import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HelperText } from '../HelperText';

import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<HelperText />);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <HelperText />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders default classes', () => {
  render(<HelperText>text</HelperText>);
  expect(screen.getByText('text')).toHaveClass(styles.helperText);
});

test('Renders id when id is passed', () => {
  render(<HelperText id="helper-id">text </HelperText>);
  expect(screen.getByText('text')).toHaveAttribute('id', 'helper-id');
});

test('Renders aria-live when isLiveRegion is passed', () => {
  render(<HelperText isLiveRegion>text </HelperText>);
  expect(screen.getByText('text')).toHaveAttribute('aria-live', 'polite');
});

test('Does not render aria-live by default', () => {
  render(<HelperText>text </HelperText>);
  expect(screen.getByText('text')).not.toHaveAttribute('aria-live');
});

test('Spreads additional props when passed', () => {
  render(<HelperText dir="rtl">text </HelperText>);
  expect(screen.getByText('text')).toHaveAttribute('dir', 'rtl');
});

test('Renders custom className', () => {
  render(<HelperText className="custom">text </HelperText>);
  expect(screen.getByText('text')).toHaveClass('custom');
});

test('Renders with element passed to component prop', () => {
  render(<HelperText component="ul">text</HelperText>);
  expect(screen.getByText('text').tagName).toBe('UL');
});

test('Renders with div by default when no component prop is passed', () => {
  render(<HelperText>text</HelperText>);
  expect(screen.getByText('text').tagName).toBe('DIV');
});

test('Renders aria-label and role when component = ul', () => {
  render(
    <HelperText component="ul" aria-label="helper">
      text
    </HelperText>
  );
  expect(screen.getByText('text')).toHaveAttribute('aria-label', 'helper');
  expect(screen.getByText('text')).toHaveAttribute('role', 'list');
});

test('Does not render aria-label and role when component != ul', () => {
  render(<HelperText aria-label="helper">text</HelperText>);
  expect(screen.getByText('text')).not.toHaveAttribute('aria-label', 'helper');
  expect(screen.getByText('text')).not.toHaveAttribute('role', 'list');
});
