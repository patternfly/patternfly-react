/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ToolbarLabelGroupContent } from '../../ToolbarLabelGroupContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarLabelGroupContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ToolbarLabelGroupContent
      className={'string'}
      isExpanded={true}
      labelGroupContentRef={{ current: document.createElement('div') }}
      clearAllFilters={() => undefined as void}
      showClearFiltersButton={true}
      clearFiltersButtonText={"'Clear all filters'"}
      numberOfFilters={42}
      collapseListedFiltersBreakpoint={'lg'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
