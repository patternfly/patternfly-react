import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartStack,
  ChartLegendTooltip,
  ChartThemeColor,
  createContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useEffect, useRef, useState } from 'react';

interface Data {
  x: string;
  y: number;
}

export const ChartStackMultiColorUnordered: React.FunctionComponent = () => {
  const containerRef = useRef(null);
  const observer = useRef(() => {});
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    observer.current = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer.current();
    };
  }, []);

  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const legendData = [
    { childName: 'cats', name: 'Cats' },
    { childName: 'dogs', name: 'Dogs' },
    { childName: 'birds', name: 'Birds' }
  ];
  const data1: Data[] = [
    { x: 'Sunday', y: 6 },
    { x: 'Monday', y: 2 },
    { x: 'Tuesday', y: 8 },
    { x: 'Wednesday', y: 15 },
    { x: 'Thursday', y: 6 },
    { x: 'Friday', y: 2 },
    { x: 'Saturday', y: 0 }
  ];
  const data2: Data[] = [
    { x: 'Sunday', y: 4 },
    { x: 'Monday', y: 5 },
    { x: 'Tuesday', y: 7 },
    { x: 'Wednesday', y: 6 },
    { x: 'Thursday', y: 10 },
    { x: 'Friday', y: 3 },
    { x: 'Saturday', y: 5 }
  ];
  const data3: Data[] = [
    { x: 'Sunday', y: 8 },
    { x: 'Monday', y: 18 },
    { x: 'Tuesday', y: 14 },
    { x: 'Wednesday', y: 8 },
    { x: 'Thursday', y: 6 },
    { x: 'Friday', y: 8 },
    { x: 'Saturday', y: 12 }
  ];

  return (
    <div ref={containerRef}>
      <div style={{ height: '225px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
              labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x} />}
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          legendData={legendData}
          legendPosition="bottom-left"
          height={225}
          name="chart5"
          padding={{
            bottom: 75, // Adjusted to accomodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          maxDomain={{ y: 30 }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartStack>
            <ChartArea data={data1} interpolation="monotoneX" name="cats" />
            <ChartArea data={data2} interpolation="monotoneX" name="dogs" />
            <ChartArea data={data3} interpolation="monotoneX" name="birds" />
          </ChartStack>
        </Chart>
      </div>
    </div>
  );
};
