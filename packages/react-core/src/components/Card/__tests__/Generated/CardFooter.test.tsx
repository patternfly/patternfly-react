/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { CardFooter } from '../../CardFooter';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('CardFooter should match snapshot (auto-generated)', () => {
  const view = render(<CardFooter children={<>ReactNode</>} className={"''"} component={'div'} />);
  expect(view.container).toMatchSnapshot();
});
