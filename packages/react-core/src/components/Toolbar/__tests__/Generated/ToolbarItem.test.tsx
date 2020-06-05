/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarItem } from '../../ToolbarItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ToolbarItem
      className={'string'}
      variant={'bulk-select'}
      id={'string'}
      children={<div>ReactNode</div>}
    />
  );
  expect(view).toMatchSnapshot();
});
