import React from 'react';
import { PatternflyECharts } from '@patternfly/react-charts/echarts';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register required components
echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const Basic: React.FunctionComponent = () => (
  <PatternflyECharts
    height={400}
    id="basic-chart"
    nodeSelector="html"
    option={{
      grid: {
        right: '100'
      },
      legend: {
        left: 'right',
        orient: 'vertical',
        top: 'middle'
      },
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
        left: 'center',
        text: 'This is a Line chart'
      }
    }}
    width={825}
  />
);
