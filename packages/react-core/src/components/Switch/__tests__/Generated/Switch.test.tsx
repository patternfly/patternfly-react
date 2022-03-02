/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '../../Switch';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Switch should match snapshot (auto-generated)', () => {
  const view = render(
    <Switch
      id={"''"}
      className={"''"}
      label={"''"}
      labelOff={"''"}
      isChecked={true}
      isDisabled={false}
      onChange={() => undefined as any}
      aria-label={"''"}
    />
  );
  expect(view.container).toMatchSnapshot();
});
