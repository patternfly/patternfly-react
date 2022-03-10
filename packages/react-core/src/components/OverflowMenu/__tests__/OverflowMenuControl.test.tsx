import * as React from 'react';

import { render, screen } from '@testing-library/react';

import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuControl } from '../OverflowMenuControl';
import { OverflowMenuContext } from '../OverflowMenuContext';

describe('OverflowMenuControl', () => {
  test('basic', () => {
    render(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: true }}>
        <OverflowMenuControl data-testid="test-id" />
      </OverflowMenuContext.Provider>
    );
    expect(screen.getByTestId('test-id').className).toContain(styles.overflowMenuControl);
  });

  test('Additional Options', () => {
    render(<OverflowMenuControl hasAdditionalOptions data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});
