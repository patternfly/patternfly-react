/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardNavItem } from '../../WizardNavItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('WizardNavItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <WizardNavItem
      children={<>ReactNode</>}
      content={''}
      isCurrent={false}
      isDisabled={false}
      step={42}
      onNavItemClick={() => undefined}
      navItemComponent={'button'}
      href={'null'}
    />
  );
  expect(view).toMatchSnapshot();
});
