/* eslint-disable camelcase */
import React from 'react';
import { getComputedStyleValue, getCustomTheme, PatternflyECharts, ThemeColor } from '@patternfly/react-charts/echarts';

import * as echarts from 'echarts/core';
import { SankeyChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';

// Register required components
echarts.use([SankeyChart, SVGRenderer, TitleComponent, TooltipComponent]);

export const Theme: React.FunctionComponent = () => {
  const data = [
    {
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      name: 'a1'
    },
    {
      name: 'a2'
    },
    {
      name: 'b1'
    },
    {
      name: 'c'
    }
  ];

  const links = [
    {
      source: 'a',
      target: 'a1',
      value: 5
    },
    {
      source: 'a',
      target: 'a2',
      value: 3
    },
    {
      source: 'b',
      target: 'b1',
      value: 8
    },
    {
      source: 'a',
      target: 'b1',
      value: 3
    },
    {
      source: 'b1',
      target: 'a1',
      value: 1
    },
    {
      source: 'b1',
      target: 'c',
      value: 2
    }
  ];

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
    <PatternflyECharts
      height={400}
      id="theme-chart"
      nodeSelector="html"
      option={{
        series: [{ data, links, type: 'sankey' }],
        title: {
          left: 'center',
          text: 'This is a Sankey chart'
        },
        tooltip: {
          destinationLabel: 'Destination',
          sourceLabel: 'Source',
          valueFormatter: (value) => `${value} GiB`
        }
      }}
      theme={myCustomTheme}
      width={825}
    />
  );
};
