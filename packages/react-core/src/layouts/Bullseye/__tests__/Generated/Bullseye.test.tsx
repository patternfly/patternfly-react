/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Bullseye } from '../../Bullseye';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Bullseye should match snapshot (auto-generated)', () => {
  const view = render(<Bullseye children={<>ReactNode</>} className={"''"} component={'div'} />);
  expect(view.container).toMatchSnapshot();
});
