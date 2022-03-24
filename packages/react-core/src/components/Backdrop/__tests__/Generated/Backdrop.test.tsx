/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Backdrop } from '../../Backdrop';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Backdrop should match snapshot (auto-generated)', () => {
  const view = render(<Backdrop children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
