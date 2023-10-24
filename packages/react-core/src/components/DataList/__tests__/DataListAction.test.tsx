import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListAction } from '../DataListAction';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(
    <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action">
      test
    </DataListAction>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListItemAction}`, () => {
  render(
    <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action" className="test-class">
      test
    </DataListAction>
  );
  expect(screen.getByText('test')).toHaveClass(styles.dataListItemAction);
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action" className="test-class">
      test
    </DataListAction>
  );
  expect(screen.getByText('test')).toHaveClass('test-class');
});

test('Renders button with visibliity breakpoint set', () => {
  render(
    <DataListAction
      visibility={{ default: 'hidden', lg: 'visible' }}
      aria-labelledby="check-action-item2 check-action-action2"
      id="check-action-action2"
      aria-label="Actions"
    >
      test
    </DataListAction>
  );

  expect(screen.getByText('test')).toHaveClass('pf-m-hidden');
  expect(screen.getByText('test')).toHaveClass('pf-m-visible-on-lg');
});

test('Does not render button with hidden breakpoint set', () => {
  render(
    <DataListAction
      visibility={{ '2xl': 'hidden' }}
      aria-labelledby="check-action-item2 check-action-action2"
      id="check-action-action2"
      aria-label="Actions"
    >
      test
    </DataListAction>
  );

  expect(screen.getByText('test')).toHaveClass('pf-m-hidden-on-2xl');
});
