import React from 'react';
import { shallow } from 'enzyme';

import { LineChart, SingleLineChart, SparklineChart } from './index';

test('LineChart renders properly', () => {
  expect(shallow(<LineChart id="area-1" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});

test('SingleLineChart renders properly', () => {
  expect(shallow(<SingleLineChart id="area-2" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});

test('SparklineChart renders properly', () => {
  expect(shallow(<SparklineChart id="area-3" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});
