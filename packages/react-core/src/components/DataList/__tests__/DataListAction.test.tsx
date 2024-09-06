import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
    <DataListAction aria-label="Actions" data-testid="actions" aria-labelledby="ex-action" id="ex-action">
      test
    </DataListAction>
  );
  expect(screen.getByTestId('actions')).toHaveClass(styles.dataListItemAction, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <DataListAction
      aria-label="Actions"
      data-testid="actions"
      aria-labelledby="ex-action"
      id="ex-action"
      className="test-class"
    >
      test
    </DataListAction>
  );
  expect(screen.getByTestId('actions')).toHaveClass('test-class');
});

test(`Renders with spread props`, () => {
  render(
    <DataListAction dir="rtl" data-testid="actions" aria-label="Actions" aria-labelledby="ex-action" id="ex-action">
      test
    </DataListAction>
  );
  expect(screen.getByTestId('actions')).toHaveAttribute('dir', 'rtl');
});

['hidden', 'visible'].forEach((vis) => {
  const visMod = vis as 'hidden' | 'visible';
  test(`Has visibility - ${vis} for every breakpoint`, () => {
    render(
      <DataListAction
        visibility={{ default: visMod, sm: visMod, md: visMod, lg: visMod, xl: visMod, '2xl': visMod }}
        aria-labelledby="check-action-item2 check-action-action2"
        id="check-action-action2"
        aria-label="Actions"
        data-testid="actions"
      >
        test
      </DataListAction>
    );

    if (visMod === 'hidden') {
      expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}`]);
    }
    expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}OnSm`]);
    expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}OnMd`]);
    expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}OnLg`]);
    expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}OnXl`]);
    expect(screen.getByTestId('actions')).toHaveClass(styles.modifiers[`${visMod}On_2xl`]);
  });
});
