/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarFilter } from '../../ToolbarFilter';
// any missing imports can usually be resolved by adding them here
import { ToolbarChip } from '../..';
import { ToolbarContext } from '../../ToolbarUtils';

it('ToolbarFilter should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ToolbarContext.Provider
      value={{
        updateNumberFilters: () => {}
      }}
    >
      <ToolbarFilter
        chips={[]}
        deleteChip={(category: string, chip: ToolbarChip | string) => undefined as void}
        children={<div>ReactNode</div>}
        categoryName={'string'}
        showToolbarItem={true}
      />
    </ToolbarContext.Provider>
  );
  expect(view).toMatchSnapshot();
});
