/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { CardTitle } from '../../CardTitle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('CardTitle should match snapshot (auto-generated)', () => {
  const view = shallow(<CardTitle children={<>ReactNode</>} className={"''"} />);
  expect(view).toMatchSnapshot();
});
