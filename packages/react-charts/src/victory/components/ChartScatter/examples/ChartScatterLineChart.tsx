import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useEffect, useRef, useState } from 'react';

export const ChartScatterLineChart: React.FunctionComponent = () => {
  const containerRef = useRef(null);
  const observer = useRef(() => {});
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };
  const series = [
    {
      datapoints: [
        { name: 'Cats', x: '2015', y: 1 },
        { name: 'Cats', x: '2016', y: 2 },
        { name: 'Cats', x: '2017', y: 5 },
        { name: 'Cats', x: '2018', y: 3 }
      ],
      legendItem: { name: 'Cats' }
    },
    {
      datapoints: [
        { name: 'Dogs', x: '2015', y: 2 },
        { name: 'Dogs', x: '2016', y: 1 },
        { name: 'Dogs', x: '2017', y: 7 },
        { name: 'Dogs', x: '2018', y: 4 }
      ],
      legendItem: { name: 'Dogs' },
      style: {
        data: {
          strokeDasharray: '3,3'
        }
      }
    },
    {
      datapoints: [
        { name: 'Birds', x: '2015', y: 3 },
        { name: 'Birds', x: '2016', y: 4 },
        { name: 'Birds', x: '2017', y: 9 },
        { name: 'Birds', x: '2018', y: 5 }
      ],
      legendItem: { name: 'Birds' }
    },
    {
      datapoints: [
        { name: 'Mice', x: '2015', y: 3 },
        { name: 'Mice', x: '2016', y: 3 },
        { name: 'Mice', x: '2017', y: 8 },
        { name: 'Mice', x: '2018', y: 7 }
      ],
      legendItem: { name: 'Mice' }
    }
  ];

  useEffect(() => {
    observer.current = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer.current();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div style={{ height: '275px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Line chart example"
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => (datum.childName.includes('line-') ? `${datum.name}: ${datum.y}` : null)}
              constrainToVisibleArea
            />
          }
          legendData={series.map((s) => s.legendItem)}
          legendPosition="bottom-left"
          height={275}
          maxDomain={{ y: 10 }}
          minDomain={{ y: 0 }}
          name="chart2"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.orange}
          width={width}
        >
          <ChartAxis tickValues={[2, 3, 4]} />
          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
          <ChartGroup>
            {series.map((s, idx) => (
              <ChartScatter data={s.datapoints} key={'scatter-' + idx} name={'scatter-' + idx} />
            ))}
          </ChartGroup>
          <ChartGroup>
            {series.map((s, idx) => (
              <ChartLine key={'line-' + idx} name={'line-' + idx} data={s.datapoints} />
            ))}
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};
