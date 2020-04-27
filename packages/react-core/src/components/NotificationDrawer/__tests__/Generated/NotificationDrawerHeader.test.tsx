/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationDrawerHeader } from '../../NotificationDrawerHeader';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerHeader should match snapshot (auto-generated)', () => {
  const view = shallow(
    <NotificationDrawerHeader children={<div>ReactNode</div>} className={"''"} count={42} title={"'Notifications'"} />
  );
  expect(view).toMatchSnapshot();
});
