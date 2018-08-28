import React from 'react';
import { shallow } from 'enzyme';

import { BarChart, GroupedBarChart, StackedBarChart } from './index';

test('BarChart renders properly', () => {
  expect(shallow(<BarChart id="area-1" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});

test('GroupedBarChart renders properly', () => {
  expect(shallow(<GroupedBarChart id="area-2" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});

test('StackedBarChart renders properly', () => {
  expect(shallow(<StackedBarChart id="area-3" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});
