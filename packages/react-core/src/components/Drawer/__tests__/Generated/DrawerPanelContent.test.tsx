/**
 * This test was generated
 */
import { render } from '@testing-library/react';
import { DrawerPanelContent } from '../../DrawerPanelContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

jest.mock('../../../../helpers/GenerateId/GenerateId');

it('DrawerPanelContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<DrawerPanelContent className={"''"} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
