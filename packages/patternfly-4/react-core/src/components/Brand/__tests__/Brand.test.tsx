import * as React from 'react';
import { shallow } from 'enzyme';
import { Brand } from '../Brand';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Brand should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Brand
      className={"''"}
			src={"''"}
			alt={"string"}
    />);
  expect(view).toMatchSnapshot();
});

test('simple brand', () => {
  const view = shallow(<Brand alt="brand" />);
  expect(view).toMatchSnapshot();
});