import * as React from 'react';
import { shallow } from 'enzyme';
import { Splitter } from '../Splitter';

test('simple splitter', () => {
  const view = shallow(<Splitter />);
  expect(view).toMatchSnapshot();
});

test('vertical splitter', () => {
  const view = shallow(<Splitter orientation="vertical"/>);
  expect(view).toMatchSnapshot();
});

