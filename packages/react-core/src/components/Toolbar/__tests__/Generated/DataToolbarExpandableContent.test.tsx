/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarExpandableContent } from '../../ToolbarExpandableContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarExpandableContent should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ToolbarExpandableContent
      className={'string'}
      isExpanded={false}
      expandableContentRef={{ current: document.createElement('div') }}
      chipContainerRef={{ current: document.createElement('div') }}
      clearAllFilters={() => undefined as void}
      clearFiltersButtonText={"'Clear all filters'"}
      showClearFiltersButton={true}
    />
  );
  expect(view).toMatchSnapshot();
});
