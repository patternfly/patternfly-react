/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DrawerPanelContent } from '../../DrawerPanelContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DrawerPanelContent should match snapshot (auto-generated)', () => {
  const view = render(<DrawerPanelContent className={"''"} children={<div>ReactNode</div>} hasNoPadding={false} />);
  expect(view.container).toMatchSnapshot();
});
