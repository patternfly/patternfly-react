/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerList } from '../../NotificationDrawerList';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerList should match snapshot (auto-generated)', () => {
  const view = render(<NotificationDrawerList children={<div>ReactNode</div>} className={"''"} hidden={false} />);
  expect(view.container).toMatchSnapshot();
});
