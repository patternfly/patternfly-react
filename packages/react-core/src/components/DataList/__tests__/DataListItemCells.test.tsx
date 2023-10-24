import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListItemCells } from '../DataListItemCells';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Cells renders to match snapshot', () => {
  const { asFragment } = render(<DataListItemCells dataListCells={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListItemContent}`, () => {
  render(<DataListItemCells dataListCells="test" />);
  expect(screen.getByText('test')).toHaveClass(styles.dataListItemContent);
});

test(`Renders with custom class when className is passed`, () => {
  render(<DataListItemCells className="custom" dataListCells="test" />);
  expect(screen.getByText('test')).toHaveClass('custom');
});
