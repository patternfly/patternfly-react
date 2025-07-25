import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useEffect, useRef, useState } from 'react';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsAll: React.FunctionComponent = () => {
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

  useEffect(() => {
    observer.current = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer.current();
    };
  }, []);

  const height = getHeight(260);

  const data: PetData[] = [
    { x: 'Cats', y: 6 },
    { x: 'Dogs', y: 6 },
    { x: 'Birds', y: 6 },
    { x: 'Fish', y: 6 },
    { x: 'Rabbits', y: 6 },
    { x: 'Squirels', y: 6 },
    { x: 'Chipmunks', y: 6 },
    { x: 'Bats', y: 6 },
    { x: 'Ducks', y: 6 },
    { x: 'Geese', y: 6 },
    { x: 'Bobcats', y: 6 },
    { x: 'Foxes', y: 6 },
    { x: 'Coyotes', y: 6 },
    { x: 'Deer', y: 6 },
    { x: 'Bears', y: 10 }
  ];

  const legendData: PetData[] = [
    { name: 'Cats: 6' },
    { name: 'Dogs: 6' },
    { name: 'Birds: 6' },
    { name: 'Fish: 6' },
    { name: 'Rabbits: 6' },
    { name: 'Squirels: 6' },
    { name: 'Chipmunks: 6' },
    { name: 'Bats: 6' },
    { name: 'Ducks: 6' },
    { name: 'Geese: 6' },
    { name: 'Bobcat: 6' },
    { name: 'Foxes: 6' },
    { name: 'Coyotes: 6' },
    { name: 'Deer: 6' },
    { name: 'Bears: 6' }
  ];

  return (
    <div ref={containerRef} style={{ height: height + 'px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        hasPatterns
        height={height}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendAllowWrap={handleLegendAllowWrap}
        legendPosition="bottom"
        name="chart12"
        padding={{
          bottom: getHeight(50), // This must be adjusted to maintain the aspec ratio
          left: 20,
          right: 20,
          top: 20
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={width}
      />
    </div>
  );
};
