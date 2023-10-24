import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionList } from '../DescriptionList';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionList />);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionList}`, () => {
  render(<DescriptionList aria-label="list" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.descriptionList);
});

test('Renders custom className', () => {
  render(<DescriptionList aria-label="list" className="custom" />);
  expect(screen.getByLabelText('list')).toHaveClass('custom');
});

Object.values(['1Col', '2Col', '3Col']).forEach((_col) => {
  const col = _col as '1Col' | '2Col' | '3Col';
  test(`Renders ${col} on all breakpoints`, () => {
    render(
      <DescriptionList
        aria-label="list"
        columnModifier={{ default: col, sm: col, md: col, lg: col, xl: col, '2xl': col }}
      />
    );
    expect(screen.getByLabelText('list')).toHaveClass(
      styles.modifiers[col],
      styles.modifiers[`${col}OnSm`],
      styles.modifiers[`${col}OnMd`],
      styles.modifiers[`${col}OnLg`],
      styles.modifiers[`${col}OnXl`],
      styles.modifiers[`${col}On_2xl`]
    );
  });
});

test(`Renders ${styles.modifiers.horizontal} when isHorizontal = true`, () => {
  render(<DescriptionList aria-label="list" isHorizontal />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.horizontal);
});

test(`Renders ${styles.modifiers.compact} when isCompact = true`, () => {
  render(<DescriptionList aria-label="list" isCompact />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.compact);
});

test(`Renders ${styles.modifiers.horizontal} and ${styles.modifiers.fluid} when isFluid = true`, () => {
  render(<DescriptionList aria-label="list" isFluid />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.fluid, styles.modifiers.horizontal);
});

Object.values(['horizontal', 'vertical']).forEach((_align) => {
  const align = _align as 'horizontal' | 'vertical';
  test(`Renders ${align} on all breakpoints`, () => {
    render(
      <DescriptionList
        aria-label="list"
        orientation={{
          sm: align,
          md: align,
          lg: align,
          xl: align,
          '2xl': align
        }}
      />
    );
    expect(screen.getByLabelText('list')).toHaveClass(
      styles.modifiers[`${align}OnSm`],
      styles.modifiers[`${align}OnMd`],
      styles.modifiers[`${align}OnLg`],
      styles.modifiers[`${align}OnXl`],
      styles.modifiers[`${align}On_2xl`]
    );
  });
});

test(`Renders ${styles.modifiers.autoColumnWidths} when isAutoColumnWidths = true`, () => {
  render(<DescriptionList aria-label="list" isAutoColumnWidths />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.autoColumnWidths);
});

test(`Renders ${styles.modifiers.inlineGrid} when isInlineGrid = true`, () => {
  render(<DescriptionList aria-label="list" isInlineGrid />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.inlineGrid);
});

test(`Renders ${styles.modifiers.autoFit} when isAutoFit = true`, () => {
  render(<DescriptionList aria-label="list" isAutoFit />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.autoFit);
});

test(`Renders ${styles.modifiers.fillColumns} when isFillColumns = true`, () => {
  render(<DescriptionList aria-label="list" isFillColumns />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.fillColumns);
});

test(`Renders ${styles.modifiers.displayLg} when displaySize = lg`, () => {
  render(<DescriptionList aria-label="list" displaySize="lg" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.displayLg);
});

test(`Renders ${styles.modifiers.display_2xl} when displaySize = 2xl`, () => {
  render(<DescriptionList aria-label="list" displaySize="2xl" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.display_2xl);
});
