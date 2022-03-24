/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Login } from '../../Login';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Login should match snapshot (auto-generated)', () => {
  const view = render(<Login children={<>ReactNode</>} className={"''"} footer={null} header={null} />);
  expect(view.container).toMatchSnapshot();
});
