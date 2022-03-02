/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { FormSelect } from '../../FormSelect';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('FormSelect should match snapshot (auto-generated)', () => {
  const view = render(
    <FormSelect
      children={<div>ReactNode</div>}
      className={"''"}
      value={''}
      validated={'default'}
      isDisabled={false}
      isRequired={false}
      onBlur={(): any => undefined}
      onFocus={(): any => undefined}
      onChange={(): any => undefined}
      aria-label={'string'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
