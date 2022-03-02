/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../../Checkbox';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Checkbox should match snapshot (auto-generated)', () => {
  const view = render(
    <Checkbox
      className={"''"}
      isValid={true}
      isDisabled={false}
      isChecked={false}
      checked={true}
      onChange={() => {}}
      label={<div>ReactNode</div>}
      id={'string'}
      aria-label={'string'}
      description={<div>ReactNode</div>}
    />
  );
  expect(view.container).toMatchSnapshot();
});
