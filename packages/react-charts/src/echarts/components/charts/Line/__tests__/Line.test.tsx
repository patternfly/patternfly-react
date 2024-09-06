import React from 'react';
import { setupJestCanvasMock } from 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import { PatternflyECharts } from '../../PatternflyECharts';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register required components
echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);

beforeEach(() => {
  jest.resetAllMocks();
  jest.mock('echarts');
  setupJestCanvasMock();
});

const props: any = {
  height: 400,
  id: 'line-chart',
  option: {
    xAxis: {
      type: 'category',
      data: ['2015', '2016', '2017', '2018']
    },
    yAxis: {
      axisLabel: {
        formatter: (value) => (value !== 0 ? `${value}` : '')
      },
      splitNumber: 3,
      type: 'value'
    },
    series: [
      {
        data: [1, 2, 5, 3],
        name: 'Cats',
        type: 'line'
      },
      {
        data: [2, 1, 7, 4],
        name: 'Dogs',
        lineStyle: {
          type: 'dashed'
        },
        type: 'line'
      },
      {
        data: [3, 4, 9, 5],
        name: 'Birds',
        type: 'line'
      },
      {
        data: [3, 3, 8, 7],
        name: 'Mice',
        type: 'line'
      }
    ],
    title: {
      text: 'This is a Line chart'
    }
  },
  width: 800
};

// Remove dynamic _echarts_instance_ ID
const removeInstanceID = (fragment) => {
  fragment.getElementById('line-chart').removeAttribute('_echarts_instance_');
  return fragment;
};

test('renders component', () => {
  const { asFragment } = render(<PatternflyECharts {...props} />);
  expect(removeInstanceID(asFragment())).toMatchSnapshot();
});

test('renders title', async () => {
  render(<PatternflyECharts {...props} />);

  const title = await screen.findByText(props.option.title.text);
  expect(title).toMatchSnapshot();
});

test('renders height and width', async () => {
  const { asFragment } = render(<PatternflyECharts {...props} />);

  const svg = asFragment().querySelector('svg');
  expect(svg).toHaveAttribute('height', `${props.height}`);
  expect(svg).toHaveAttribute('width', `${props.width}`);
});
