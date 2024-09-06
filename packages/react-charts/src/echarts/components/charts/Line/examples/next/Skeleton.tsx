import React from 'react';
import { PatternflyECharts, ThemeColor } from '@patternfly/react-charts/echarts';
import { Switch } from '@patternfly/react-core';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register required components
echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const Skeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch id="area-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <PatternflyECharts
        height={400}
        id="skeleton-chart"
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
        themeColor={isChecked ? ThemeColor.skeleton : ThemeColor.orange}
        width={825}
      />
    </>
  );
};
