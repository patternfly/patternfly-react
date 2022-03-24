/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Split } from '../../Split';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Split should match snapshot (auto-generated)', () => {
  const view = render(<Split hasGutter children={<>ReactNode</>} className={"''"} component={'div'} />);
  expect(view.container).toMatchSnapshot();
});
