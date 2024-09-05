/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DataListCheck } from '../../DataListCheck';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DataListCheck should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListCheck
      id="test"
      className={"''"}
      isValid={true}
      isDisabled={false}
      isChecked={false}
      checked={false}
      onChange={(event: React.FormEvent<HTMLInputElement>, checked: boolean) => {}}
      aria-labelledby={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
