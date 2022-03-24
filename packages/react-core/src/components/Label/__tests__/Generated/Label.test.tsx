/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Label } from '../../Label';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Label should match snapshot (auto-generated)', () => {
  const view = render(<Label children={<div>ReactNode</div>} className={"''"} isCompact={false} />);
  expect(view.container).toMatchSnapshot();
});
