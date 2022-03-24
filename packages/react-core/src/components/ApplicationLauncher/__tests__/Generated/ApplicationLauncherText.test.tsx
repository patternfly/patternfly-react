/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ApplicationLauncherText } from '../../ApplicationLauncherText';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ApplicationLauncherText should match snapshot (auto-generated)', () => {
  const view = render(<ApplicationLauncherText children={<div>ReactNode</div>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
