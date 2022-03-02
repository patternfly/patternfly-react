/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Progress } from '../../Progress';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Progress should match snapshot (auto-generated)', () => {
  const view = render(
    <Progress
      className={"''"}
      size={null}
      measureLocation={'outside'}
      variant={'danger'}
      title={"''"}
      label={null}
      value={0}
      id={"''"}
      min={0}
      max={100}
      valueText={'null'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
