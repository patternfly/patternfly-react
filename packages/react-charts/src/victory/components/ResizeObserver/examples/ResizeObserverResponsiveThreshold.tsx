import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartLegend,
  ChartGroup,
  ChartThreshold,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import { useEffect, useRef, useState } from 'react';

interface PetData {
  name?: string;
  symbol?: { fill: string; type: string };
  x?: number;
  y?: number;
}

export const ResizeObserverResponsiveThreshold: React.FunctionComponent = () => {
  const containerRef = useRef(null);
  const observer = useRef(() => {});
  const [extraHeight, setExtraHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  const handleLegendAllowWrap = (newExtraHeight) => {
    if (newExtraHeight !== extraHeight) {
      setExtraHeight(newExtraHeight);
    }
  };

  const getHeight = (baseHeight) => baseHeight + extraHeight;

  const getPadding = () => ({
    bottom: 100 + extraHeight, // Adjusted to accomodate legend
    left: 50,
    right: 50,
    top: 50
  });

  useEffect(() => {
    observer.current = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer.current();
    };
  }, []);

  const height = getHeight(250);
  const data1: PetData[] = [
    { name: 'Cats' },
    {
      name: 'Cats Threshold',
      symbol: { fill: chart_color_blue_300.var, type: 'threshold' }
    },
    { name: 'Birds' },
    {
      name: 'Birds Threshold',
      symbol: { fill: chart_color_orange_300.var, type: 'threshold' }
    }
  ];

  const data2: PetData[] = [
    { name: 'Cats', x: 1, y: 3 },
    { name: 'Cats', x: 2, y: 4 },
    { name: 'Cats', x: 3, y: 8 },
    { name: 'Cats', x: 4, y: 6 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: 1, y: 2 },
    { name: 'Birds', x: 2, y: 3 },
    { name: 'Birds', x: 3, y: 4 },
    { name: 'Birds', x: 4, y: 5 },
    { name: 'Birds', x: 5, y: 6 }
  ];

  const data4: PetData[] = [
    { name: 'Cats Threshold', x: 0, y: 4 },
    { name: 'Cats Threshold', x: 3, y: 4 },
    { name: 'Cats Threshold', x: 3, y: 6 },
    { name: 'Cats Threshold', x: 5, y: 6 }
  ];

  const data5: PetData[] = [
    { name: 'Birds Threshold', x: 0, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 3 },
    { name: 'Birds Threshold', x: 5, y: 3 }
  ];

  return (
    <div ref={containerRef}>
      <div style={{ height: height + 'px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={
            <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
          }
          legendAllowWrap={handleLegendAllowWrap}
          legendPosition="bottom-left"
          legendComponent={<ChartLegend data={data1} />}
          height={height}
          name="chart2"
          padding={getPadding()}
          maxDomain={{ y: 9 }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            <ChartArea data={data2} interpolation="monotoneX" />
            <ChartArea data={data3} interpolation="monotoneX" />
          </ChartGroup>
          <ChartThreshold
            data={data4}
            style={{
              data: {
                stroke: chart_color_blue_300.var
              }
            }}
          />
          <ChartThreshold
            data={data5}
            style={{
              data: {
                stroke: chart_color_orange_300.var
              }
            }}
          />
        </Chart>
      </div>
    </div>
  );
};
