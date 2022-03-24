/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { CardBody } from '../../CardBody';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('CardBody should match snapshot (auto-generated)', () => {
  const view = render(<CardBody children={<>ReactNode</>} className={"''"} component={'div'} isFilled={true} />);
  expect(view.container).toMatchSnapshot();
});
