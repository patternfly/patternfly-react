/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerListItem } from '../../NotificationDrawerListItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerListItem should match snapshot (auto-generated)', () => {
  const view = render(
    <NotificationDrawerListItem
      children={<div>ReactNode</div>}
      className={"''"}
      isHoverable={true}
      isRead={false}
      tabIndex={0}
      variant={'default'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
