/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from '../../NavItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NavItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <NavItem
      children={<>ReactNode</>}
      className={"''"}
      to={"''"}
      isActive={false}
      groupId={null}
      itemId={null}
      preventDefault={false}
      onClick={null}
      component={'a'}
    />
  );
  expect(view).toMatchSnapshot();
});
