import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBoxBrand } from '../AboutModalBoxBrand';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('AboutModalBoxBrand should match snapshot (auto-generated)', () => {
  const view = shallow(
    <AboutModalBoxBrand
      className={"''"}
			src={"''"}
			alt={"string"}
    />);
  expect(view).toMatchSnapshot();
});

test('test About Modal Brand', () => {
  const view = shallow(<AboutModalBoxBrand src="testimage.." alt="brand" />);
  expect(view).toMatchSnapshot();
});