/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { OverflowMenu } from '../../OverflowMenu';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('OverflowMenu should match snapshot (auto-generated)', () => {
  const view = render(<OverflowMenu children={'any'} className={'string'} breakpoint={'md'} />);
  expect(view.container).toMatchSnapshot();
});
