/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownToggleCheckbox } from '../../DropdownToggleCheckbox';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DropdownToggleCheckbox should match snapshot (auto-generated)', () => {
  const view = render(
    <DropdownToggleCheckbox
      className={"''"}
      isValid={true}
      isDisabled={false}
      isChecked={true}
      checked={true}
      onChange={() => undefined as any}
      children={<div>ReactNode</div>}
      id={'string'}
      aria-label={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
