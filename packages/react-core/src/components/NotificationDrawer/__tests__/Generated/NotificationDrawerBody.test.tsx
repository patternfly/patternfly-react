/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerBody } from '../../NotificationDrawerBody';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerBody should match snapshot (auto-generated)', () => {
  const view = render(<NotificationDrawerBody children={<div>ReactNode</div>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
