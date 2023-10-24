import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListItemRow } from '../DataListItemRow';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Item row renders to match snapshot', () => {
  const { asFragment } = render(<DataListItemRow>test</DataListItemRow>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListItemRow}`, () => {
  render(<DataListItemRow data-testid="test">test</DataListItemRow>);
  expect(screen.getByTestId('test')).toHaveClass(styles.dataListItemRow);
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <DataListItemRow className="custom" data-testid="test">
      test
    </DataListItemRow>
  );
  expect(screen.getByTestId('test')).toHaveClass('custom');
});
