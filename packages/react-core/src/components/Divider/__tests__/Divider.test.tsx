import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from '../Divider';

test('Renders with only the class pf-v5-c-divider by default', () => {
  render(<Divider data-testid="divider" />);
  expect(screen.getByTestId('divider')).toHaveClass('pf-v5-c-divider', { exact: true });
});

test('Renders with horizontal rule by default', () => {
  render(<Divider />);
  expect(screen.getByRole('separator')).toContainHTML('<hr class="pf-v5-c-divider" />');
});

test('Renders with vertical divider', () => {
  render(<Divider orientation={{ default: 'vertical' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-vertical');
});

test('Renders with li', () => {
  render(<Divider component="li" />);
  expect(screen.getByRole('separator')).toContainHTML('<li class="pf-v5-c-divider" role="separator" />');
});

test('Renders with div', () => {
  render(<Divider component="div" />);
  expect(screen.getByRole('separator')).toContainHTML('<div class="pf-v5-c-divider" role="separator" />');
});

test('Test default orientation', () => {
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

test('Test sm inset', () => {
  render(<Divider inset={{ sm: 'insetSm' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-sm-on-sm');
});

test('Test md inset', () => {
  render(<Divider inset={{ md: 'insetMd' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-md-on-md');
});

test('Test lg inset', () => {
  render(<Divider inset={{ lg: 'insetLg' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-lg-on-lg');
});

test('Test xl inset', () => {
  render(<Divider inset={{ xl: 'insetXl' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-xl-on-xl');
});

test('Test 2xl inset', () => {
  render(<Divider inset={{ '2xl': 'inset2xl' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-2xl-on-2xl');
});

test('Test 3xl on 2xl inset', () => {
  render(<Divider inset={{ '2xl': 'inset3xl' }} />);
  expect(screen.getByRole('separator')).toHaveClass('pf-m-inset-3xl-on-2xl');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Divider />);
  expect(asFragment()).toMatchSnapshot();
});
