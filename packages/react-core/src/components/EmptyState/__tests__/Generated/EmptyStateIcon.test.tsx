/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';
import { EmptyStateIcon } from '../../EmptyStateIcon';
// any missing imports can usually be resolved by adding them here
import { Spinner } from '../../../Spinner/Spinner';

it('EmptyStateIcon should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<EmptyStateIcon className={"''"} icon={UserIcon} />);
  expect(asFragment()).toMatchSnapshot();
});

it('EmptyStateIcon should match snapshot for variant container', () => {
  const { asFragment } = render(<EmptyStateIcon className={"''"} icon={Spinner} />);
  expect(asFragment()).toMatchSnapshot();
});
