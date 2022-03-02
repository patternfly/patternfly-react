/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Gallery } from '../../Gallery';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Gallery should match snapshot (auto-generated)', () => {
  const view = render(<Gallery children={<>ReactNode</>} className={"''"} hasGutter />);
  expect(view.container).toMatchSnapshot();
});
