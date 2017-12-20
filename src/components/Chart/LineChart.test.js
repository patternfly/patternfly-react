/* eslint-env jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { LineChart, SingleLineChart, SparklineChart } from './index';

const renderer = new ShallowRenderer();

test('LineChart renders properly', () => {
  expect(
    renderer.render(
      <LineChart id="area-1" data={{ columns: [['data', 42]] }} />
    )
  ).toMatchSnapshot();
});

test('SingleLineChart renders properly', () => {
  expect(
    renderer.render(
      <SingleLineChart id="area-2" data={{ columns: [['data', 42]] }} />
    )
  ).toMatchSnapshot();
});

test('SparklineChart renders properly', () => {
  expect(
    renderer.render(
      <SparklineChart id="area-3" data={{ columns: [['data', 42]] }} />
    )
  ).toMatchSnapshot();
});
