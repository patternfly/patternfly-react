/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarChipGroupContent } from '../../ToolbarChipGroupContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarChipGroupContent should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ToolbarChipGroupContent
      className={'string'}
      isExpanded={true}
      chipGroupContentRef={{ current: document.createElement('div') }}
      clearAllFilters={() => undefined as void}
      showClearFiltersButton={true}
      clearFiltersButtonText={"'Clear all filters'"}
      numberOfFilters={42}
      collapseListedFiltersBreakpoint={'lg'}
    />
  );
  expect(view).toMatchSnapshot();
});
