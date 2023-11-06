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
  expect(screen.getByTestId('test')).toHaveClass(styles.dataListItemRow, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <DataListItemRow className="custom" data-testid="test">
      test
    </DataListItemRow>
  );
  expect(screen.getByTestId('test')).toHaveClass('custom');
});

test(`Renders with spread props`, () => {
  render(
    <DataListItemRow dir="rtl" data-testid="test">
      test
    </DataListItemRow>
  );
  expect(screen.getByTestId('test')).toHaveAttribute('dir', 'rtl');
});

['nowrap', 'truncate', 'breakWord'].forEach((wrap) => {
  test(`Renders with class ${styles.modifiers[wrap]} when wrapModifier = ${wrap} is pased`, () => {
    render(
      <DataListItemRow data-testid="test" wrapModifier={wrap as 'nowrap' | 'truncate' | 'breakWord'}>
        test
      </DataListItemRow>
    );
    expect(screen.getByTestId('test')).toHaveClass(styles.modifiers[wrap]);
  });
});
