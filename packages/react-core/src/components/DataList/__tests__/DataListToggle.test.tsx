import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListToggle } from '../DataListToggle';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DataListToggle id="ex-toggle2" />);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListToggle}`, () => {
  render(<DataListToggle id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement).toHaveClass(styles.dataListToggle);
});

test(`Renders with default class ${styles.dataListItemControl}`, () => {
  render(<DataListToggle id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass(styles.dataListItemControl, {
    exact: true
  });
});

test(`Renders with custom class when className is passed`, () => {
  render(<DataListToggle className="custom" id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass('custom');
});

test(`Renders with spread props`, () => {
  render(<DataListToggle dir="rtl" id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement?.parentElement).toHaveAttribute('dir', 'rtl');
});

test(`Renders with spread buttonProps`, () => {
  render(<DataListToggle buttonProps={{ isDisabled: true }} id="ex-toggle2" />);
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});

test('Renders aria-labelledby by default when no custom aria-label is passed', () => {
  render(<DataListToggle rowid="row" id="ex-toggle2" />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-labelledby', 'row ex-toggle2');
});

test('Does not render aria-labelledby when custom aria-label is passed', () => {
  render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" />);

  expect(screen.getByRole('button')).not.toHaveAttribute('aria-labelledby');
  expect(screen.getByRole('button')).toHaveAccessibleName('Toggle details for');
});

test(`Renders with ariaControls when ariaControls is passed`, () => {
  render(<DataListToggle aria-controls="control" id="ex-toggle2" />);
  expect(screen.getByRole('button')).toHaveAttribute('aria-controls', 'control');
});

test('Renders with aria-expanded when isExpanded = true', () => {
  render(<DataListToggle isExpanded id="ex-toggle2" />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});
