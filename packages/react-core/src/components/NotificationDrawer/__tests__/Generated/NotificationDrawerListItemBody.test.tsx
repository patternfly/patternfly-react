/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationDrawerListItemBody } from '../../NotificationDrawerListItemBody';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerListItemBody should match snapshot (auto-generated)', () => {
  const view = shallow(
    <NotificationDrawerListItemBody children={<div>ReactNode</div>} className={"''"} timestamp={<div>ReactNode</div>} />
  );
  expect(view).toMatchSnapshot();
});
