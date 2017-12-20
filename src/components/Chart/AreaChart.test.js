/* eslint-env jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { AreaChart, SingleAreaChart } from './index';

const renderer = new ShallowRenderer();

test('AreaChart renders properly', () => {
  expect(
    renderer.render(
      <AreaChart id="area-1" data={{ columns: [['data', 42]] }} />
    )
  ).toMatchSnapshot();
});

test('SingleAreaChart renders properly', () => {
  expect(
    renderer.render(
      <SingleAreaChart id="area-2" data={{ columns: [['data', 42]] }} />
    )
  ).toMatchSnapshot();
});
