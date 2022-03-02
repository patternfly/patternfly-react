/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { LoginMainHeader } from '../../LoginMainHeader';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LoginMainHeader should match snapshot (auto-generated)', () => {
  const view = render(<LoginMainHeader children={<>ReactNode</>} className={"''"} title={"''"} subtitle={"''"} />);
  expect(view.container).toMatchSnapshot();
});
