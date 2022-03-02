/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Flex } from '../../Flex';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Flex should match snapshot (auto-generated)', () => {
  const view = render(<Flex children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
