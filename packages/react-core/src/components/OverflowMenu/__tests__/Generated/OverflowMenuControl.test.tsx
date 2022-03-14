/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { OverflowMenuControl } from '../../OverflowMenuControl';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('OverflowMenuControl should match snapshot (auto-generated)', () => {
  const view = render(<OverflowMenuControl children={'any'} className={'string'} hasAdditionalOptions={true} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});
