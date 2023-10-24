import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListToggle } from '../DataListToggle';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('DataListAction renders to match snapshot', () => {
  const { asFragment } = render(<DataListToggle id="ex-toggle2" />);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListToggle}`, () => {
  render(<DataListToggle id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement).toHaveClass(styles.dataListToggle);
});

test(`Renders with default class ${styles.dataListItemControl}`, () => {
  render(<DataListToggle id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass(styles.dataListItemControl);
});

test(`Renders with custom class when className is passed`, () => {
  render(<DataListToggle className="custom" id="ex-toggle2" />);
  expect(screen.getByRole('button').parentElement?.parentElement).toHaveClass('custom');
});

test('Renders with aria label', () => {
  render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" />);

  expect(screen.getByRole('button')).not.toHaveAttribute('aria-labelledby');
  expect(screen.getByRole('button')).toHaveAccessibleName('Toggle details for');
});

test('Renders with aria-expanded when isExpanded = true', () => {
  render(<DataListToggle isExpanded id="ex-toggle2" />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});
