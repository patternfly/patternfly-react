/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from '../../Drawer';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Drawer should match snapshot (auto-generated)', () => {
  const view = render(<Drawer className={"''"} children={<div>ReactNode</div>} isExpanded={false} isInline={false} />);
  expect(view.container).toMatchSnapshot();
});
