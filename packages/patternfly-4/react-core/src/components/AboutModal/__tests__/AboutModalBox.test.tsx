import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalBox } from '../AboutModalBox';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('AboutModalBox should match snapshot (auto-generated)', () => {
  const view = shallow(
    <AboutModalBox
      children={<div>ReactNode</div>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('AboutModalBox Test', () => {
  const view = shallow(
    <AboutModalBox aria-labelledby="id" aria-describedby="id2">
      This is a AboutModalBox
    </AboutModalBox>
  );
  expect(view).toMatchSnapshot();
});