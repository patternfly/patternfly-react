/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ToolbarItem } from '../../ToolbarItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarItem should match snapshot (auto-generated)', () => {
  const view = render(
    <ToolbarItem
      className={'string'}
      variant={'bulk-select'}
      id={'string'}
      children={<div>ReactNode</div>}
    />
  );
  expect(view.container).toMatchSnapshot();
});
