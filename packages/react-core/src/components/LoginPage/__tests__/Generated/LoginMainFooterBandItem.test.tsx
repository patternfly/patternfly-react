/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { LoginMainFooterBandItem } from '../../LoginMainFooterBandItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LoginMainFooterBandItem should match snapshot (auto-generated)', () => {
  const view = render(<LoginMainFooterBandItem children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
