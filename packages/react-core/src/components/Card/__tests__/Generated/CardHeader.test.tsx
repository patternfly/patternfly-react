/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { CardTitle } from '../../CardTitle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('CardTitle should match snapshot (auto-generated)', () => {
  const view = render(<CardTitle children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
