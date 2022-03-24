/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerGroupList } from '../../NotificationDrawerGroupList';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerGroupList should match snapshot (auto-generated)', () => {
  const view = render(<NotificationDrawerGroupList children={<div>ReactNode</div>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
