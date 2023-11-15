import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListItem } from '../DataListItem';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(
    <DataListItem key="item-id-1" aria-labelledby="item-1">
      test
    </DataListItem>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListItem}`, () => {
  render(<DataListItem aria-labelledby="item-1">test</DataListItem>);
  expect(screen.getByRole('listitem')).toHaveClass(styles.dataListItem, { exact: true });
});

test('Renders with custom class name', () => {
  render(
    <DataListItem className="data-list-item-custom" aria-labelledby="item-1">
      test
    </DataListItem>
  );
  expect(screen.getByRole('listitem')).toHaveClass('data-list-item-custom');
});

test('Renders with spread props', () => {
  render(
    <DataListItem dir="rtl" aria-labelledby="item-1">
      test
    </DataListItem>
  );
  expect(screen.getByRole('listitem')).toHaveAttribute('dir', 'rtl');
});

test(`Renders class ${styles.modifiers.expanded} when isExpanded is passed`, () => {
  render(
    <DataListItem aria-labelledby="item-1" isExpanded>
      test
    </DataListItem>
  );
  expect(screen.getByRole('listitem')).toHaveClass(styles.modifiers.expanded);
});
