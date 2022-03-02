/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { CardHeader } from '../../CardHeader';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('CardHeader should match snapshot (auto-generated)', () => {
  const view = render(<CardHeader children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
