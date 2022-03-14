/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ToolbarGroup } from '../../ToolbarGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarGroup should match snapshot (auto-generated)', () => {
  const view = render(
    <ToolbarGroup
      className={'string'}
      variant={'filter-group'}
      children={<div>ReactNode</div>}
      innerRef={{ current: document.createElement('div') }}
    />
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
