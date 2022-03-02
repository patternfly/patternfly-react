/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { NotificationDrawerListItemHeader } from '../../NotificationDrawerListItemHeader';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationDrawerListItemHeader should match snapshot (auto-generated)', () => {
  const view = render(
    <NotificationDrawerListItemHeader
      children={<div>ReactNode</div>}
      className={"''"}
      icon={null}
      srTitle={'string'}
      title={'string'}
      variant={'default'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
