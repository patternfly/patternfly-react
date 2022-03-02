/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerGroup } from '../../NotificationDrawerGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerGroup should match snapshot (auto-generated)', () => {
  const view = render(
    <NotificationDrawerGroup
      children={<div>ReactNode</div>}
      className={"''"}
      count={42}
      isExpanded={true}
      isRead={false}
      onExpand={(event: any, value: boolean) => undefined as void}
      title={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
