import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useState, useRef, useEffect } from 'react';

export const ChartScatterAreaChart: React.FunctionComponent = () => {
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
        { name: 'Cats', x: '2015', y: 3 },
        { name: 'Cats', x: '2016', y: 4 },
        { name: 'Cats', x: '2017', y: 8 },
        { name: 'Cats', x: '2018', y: 6 }
      ],
      legendItem: { name: 'Cats' }
    },
    {
      datapoints: [
        { name: 'Dogs', x: '2015', y: 2 },
        { name: 'Dogs', x: '2016', y: 3 },
        { name: 'Dogs', x: '2017', y: 4 },
        { name: 'Dogs', x: '2018', y: 5 },
        { name: 'Dogs', x: '2019', y: 6 }
      ],
      legendItem: { name: 'Dogs' }
    },
    {
      datapoints: [
        { name: 'Birds', x: '2015', y: 1 },
        { name: 'Birds', x: '2016', y: 2 },
        { name: 'Birds', x: '2017', y: 3 },
        { name: 'Birds', x: '2018', y: 2 },
        { name: 'Birds', x: '2019', y: 4 }
      ],
      legendItem: { name: 'Birds' }
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
      <div style={{ height: '250px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => (datum.childName.includes('area-') ? `${datum.name}: ${datum.y}` : null)}
              constrainToVisibleArea
            />
          }
          height={225}
          legendData={series.map((s) => s.legendItem)}
          legendPosition="bottom-left"
          name="chart3"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          maxDomain={{ y: 9 }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            {series.map((s, idx) => (
              <ChartScatter data={s.datapoints} key={'scatter-' + idx} name={'scatter-' + idx} />
            ))}
          </ChartGroup>
          <ChartGroup>
            {series.map((s, idx) => (
              <ChartArea interpolation="monotoneX" key={'area-' + idx} name={'area-' + idx} data={s.datapoints} />
            ))}
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};
