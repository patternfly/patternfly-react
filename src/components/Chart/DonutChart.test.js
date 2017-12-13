/* eslint-env jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { DonutChart } from './index';

const renderer = new ShallowRenderer();

test('DonutChart renders properly', () => {
  expect(
    renderer.render(
      <DonutChart id="area-1" data={{ columns: [['data', 42]] }} />,
    ),
  ).toMatchSnapshot();
});
