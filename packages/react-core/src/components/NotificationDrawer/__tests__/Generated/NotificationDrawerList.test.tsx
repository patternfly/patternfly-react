/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationDrawerList } from '../../NotificationDrawerList';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerList should match snapshot (auto-generated)', () => {
  const view = shallow(<NotificationDrawerList children={<div>ReactNode</div>} className={"''"} hidden={false} />);
  expect(view).toMatchSnapshot();
});
