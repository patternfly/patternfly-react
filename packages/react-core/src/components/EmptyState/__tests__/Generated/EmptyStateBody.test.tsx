/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyStateBody } from '../../EmptyStateBody';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('EmptyStateBody should match snapshot (auto-generated)', () => {
  const view = shallow(<EmptyStateBody children={<div>ReactNode</div>} className={"''"} />);
  expect(view).toMatchSnapshot();
});
