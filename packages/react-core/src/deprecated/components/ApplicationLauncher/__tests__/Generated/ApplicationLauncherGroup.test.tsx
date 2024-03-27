/**
 * This test was generated
 */
import { render } from '@testing-library/react';
import { ApplicationLauncherGroup } from '../../ApplicationLauncherGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ApplicationLauncherGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ApplicationLauncherGroup />);
  expect(asFragment()).toMatchSnapshot();
});
