/* eslint-disable camelcase */
import { FunctionComponent } from 'react';
import { getComputedStyleValue, getCustomTheme, Charts, ThemeColor } from '@patternfly/react-charts/echarts';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';

// Register required components
echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);

export const Theme: FunctionComponent = () => {
  const myCustomTheme = getCustomTheme(ThemeColor.default, {
    color: [
      getComputedStyleValue(chart_color_purple_300),
      getComputedStyleValue(chart_color_blue_300),
      getComputedStyleValue(chart_color_green_300),
      getComputedStyleValue(chart_color_teal_300),
      getComputedStyleValue(chart_color_yellow_300)
    ]
  });

  return (
    <Charts
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
            symbol: 'rect',
            type: 'line'
          },
          {
            data: [2, 1, 7, 4],
            name: 'Dogs',
            lineStyle: {
              type: 'dashed'
            },
            symbol: 'arrow',
            type: 'line'
          },
          {
            data: [3, 4, 9, 5],
            name: 'Birds',
            symbol: 'circle',
            type: 'line'
          },
          {
            data: [3, 3, 8, 7],
            name: 'Mice',
            symbol: 'emptyCircle',
            type: 'line'
          }
        ],
        title: {
          left: 'center',
          text: 'This is a Line chart'
        }
      }}
      theme={myCustomTheme}
      width={825}
    />
  );
};
