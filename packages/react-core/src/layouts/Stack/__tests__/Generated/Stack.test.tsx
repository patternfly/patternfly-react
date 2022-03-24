/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Stack } from '../../Stack';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Stack should match snapshot (auto-generated)', () => {
  const view = render(<Stack hasGutter children={<>ReactNode</>} className={"''"} component={'div'} />);
  expect(view.container).toMatchSnapshot();
});
