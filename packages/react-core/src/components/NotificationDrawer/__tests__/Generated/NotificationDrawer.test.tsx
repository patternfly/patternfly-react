/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationDrawer } from '../../NotificationDrawer';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawer should match snapshot (auto-generated)', () => {
  const view = shallow(<NotificationDrawer children={<div>ReactNode</div>} className={"''"} />);
  expect(view).toMatchSnapshot();
});
