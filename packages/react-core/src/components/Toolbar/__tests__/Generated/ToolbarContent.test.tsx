/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarContent } from '../../ToolbarContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarContent should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ToolbarContent
      className={'string'}
      children={<div>ReactNode</div>}
      isExpanded={false}
      clearAllFilters={() => undefined as void}
      showClearFiltersButton={false}
      clearFiltersButtonText={'string'}
      toolbarId={'string'}
    />
  );
  expect(view).toMatchSnapshot();
});
