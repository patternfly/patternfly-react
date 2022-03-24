/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawer } from '../../NotificationDrawer';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawer should match snapshot (auto-generated)', () => {
  const view = render(<NotificationDrawer children={<div>ReactNode</div>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
