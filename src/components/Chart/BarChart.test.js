/* eslint-env jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { BarChart, GroupedBarChart, StackedBarChart } from './index';

const renderer = new ShallowRenderer();

test('BarChart renders properly', () => {
  expect(
    renderer.render(
      <BarChart id="area-1" data={{ columns: [['data', 42]] }} />,
    ),
  ).toMatchSnapshot();
});

test('GroupedBarChart renders properly', () => {
  expect(
    renderer.render(
      <GroupedBarChart id="area-2" data={{ columns: [['data', 42]] }} />,
    ),
  ).toMatchSnapshot();
});

test('StackedBarChart renders properly', () => {
  expect(
    renderer.render(
      <StackedBarChart id="area-3" data={{ columns: [['data', 42]] }} />,
    ),
  ).toMatchSnapshot();
});
