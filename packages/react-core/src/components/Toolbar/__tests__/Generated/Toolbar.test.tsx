/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Toolbar } from '../../Toolbar';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Toolbar should match snapshot (auto-generated)', () => {
  const view = render(
    <Toolbar
      clearAllFilters={() => undefined as void}
      clearFiltersButtonText={'string'}
      collapseListedFiltersBreakpoint={'md'}
      isExpanded={true}
      toggleIsExpanded={() => undefined as void}
      className={'string'}
      children={<div>ReactNode</div>}
      id={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
