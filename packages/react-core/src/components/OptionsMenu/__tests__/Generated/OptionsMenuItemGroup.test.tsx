/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { OptionsMenuItemGroup } from '../../OptionsMenuItemGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('OptionsMenuItemGroup should match snapshot (auto-generated)', () => {
  const view = render(
    <OptionsMenuItemGroup
      children={<>ReactNode</>}
      className={"''"}
      ariaLabel={"''"}
      groupTitle={''}
      hasSeparator={false}
    />
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
