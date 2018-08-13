import React from 'react';
import { shallow } from 'enzyme';

import { AreaChart, SingleAreaChart } from './index';

test('AreaChart renders properly', () => {
  expect(shallow(<AreaChart id="area-1" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});

test('SingleAreaChart renders properly', () => {
  expect(shallow(<SingleAreaChart id="area-2" data={{ columns: [['data', 42]] }} />).getElement()).toMatchSnapshot();
});
