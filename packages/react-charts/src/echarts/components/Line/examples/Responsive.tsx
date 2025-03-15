import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Charts, ThemeColor } from '@patternfly/react-charts/echarts';
import { getResizeObserver } from '@patternfly/react-core';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register required components
echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);

export const Responsive: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && containerRef.current.clientWidth) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    let observer = () => {};
    observer = getResizeObserver(containerRef.current, handleResize);

    return () => {
      observer();
    };
  }, [containerRef, width]);

  return (
    <div ref={containerRef}>
      <Charts
        height={400}
        id="responsive-chart"
        nodeSelector="html"
        option={{
          legend: {
            top: 'bottom'
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
            text: 'This is a Line chart',
            type: 'line'
          }
        }}
        themeColor={ThemeColor.green}
        width={width}
      />
    </div>
  );
};
