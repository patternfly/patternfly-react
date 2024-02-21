import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from '../Divider';
import styles from '@patternfly/react-styles/css/components/Divider/divider';

test(`Renders with only the class name ${styles.divider} by default`, () => {
  render(<Divider />);
  expect(screen.getByRole('separator')).toHaveClass(styles.divider, { exact: true });
});

test('Renders with horizontal rule by default', () => {
  render(<Divider />);
  expect(screen.getByRole('separator')).toContainHTML('<hr class="pf-v6-c-divider" />');
});

test('Renders with element passed to component prop', () => {
  render(<Divider component="li" />);
  expect(screen.getByRole('separator')?.tagName).toBe('LI');
});

test('Test default orientation (vertical divider)', () => {
  render(<Divider orientation={{ default: 'vertical' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-vertical');
});

test('Test sm orientation', () => {
  render(<Divider orientation={{ sm: 'horizontal' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-horizontal-on-sm');
});

test('Test md orientation', () => {
  render(<Divider orientation={{ md: 'vertical' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-vertical-on-md');
});

test('Test lg orientation', () => {
  render(<Divider orientation={{ lg: 'horizontal' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-horizontal-on-lg');
});

test('Test xl orientation', () => {
  render(<Divider orientation={{ xl: 'vertical' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-vertical-on-xl');
});

test('Test 2xl orientation', () => {
  render(<Divider orientation={{ '2xl': 'horizontal' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-horizontal-on-2xl');
});

test('Test default inset', () => {
  render(<Divider inset={{ default: 'insetNone' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-none');
});

test(`Test all insets`, () => {
  const insetValues = Object.values([
    'insetNone',
    'insetXs',
    'insetSm',
    'insetMd',
    'insetLg',
    'insetXl',
    'inset2xl',
    'inset3xl'
  ] as ['insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl']);

  insetValues.forEach((insetValue) => {
    render(
      <Divider
        inset={{
          default: insetValue,
          sm: insetValue,
          md: insetValue,
          lg: insetValue,
          xl: insetValue,
          '2xl': insetValue
        }}
      />
    );
  });
  const modifiers = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

  modifiers.forEach((modifier, index) => {
    const smClass = `pf-m-inset-${modifier}-on-sm`;
    const mdClass = `pf-m-inset-${modifier}-on-md`;
    const lgClass = `pf-m-inset-${modifier}-on-lg`;
    const xlClass = `pf-m-inset-${modifier}-on-xl`;
    const xl2Class = `pf-m-inset-${modifier}-on-2xl`;

    expect(screen.getAllByRole('separator')[index]).toHaveClass(smClass, mdClass, lgClass, xlClass, xl2Class);
  });
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Divider />);
  expect(asFragment()).toMatchSnapshot();
});
