/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownToggleAction } from '../../DropdownToggleAction';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DropdownToggleAction should match snapshot (auto-generated)', () => {
  const view = render(
    <DropdownToggleAction
      className={"''"}
      isDisabled={false}
      onClick={() => {}}
      children={<div>ReactNode</div>}
      id={'string'}
      aria-label={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
