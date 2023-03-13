/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { EmptyStateActions } from '../../EmptyStateActions';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('EmptyStateActions should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<EmptyStateActions children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
