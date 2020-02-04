/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarFilter } from '../../DataToolbarFilter';
// any missing imports can usually be resolved by adding them here
import {  } from '../..';

it('DataToolbarFilter should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DataToolbarFilter
      chips={[]}
			deleteChip={(category: string, chip: DataToolbarChip | string) => undefined as void}
			children={<div>ReactNode</div>}
			categoryName={"string"}
			showToolbarItem={true}
    />);
  expect(view).toMatchSnapshot();
});
