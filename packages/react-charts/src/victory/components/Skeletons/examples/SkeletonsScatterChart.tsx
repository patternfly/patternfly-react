import { Switch } from '@patternfly/react-core';
import {
  Chart,
  ChartVoronoiContainer,
  ChartGroup,
  ChartAxis,
  ChartScatter,
  ChartThemeColor
} from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
}

export const SkeletonsScatterChart: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const data: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 4 }
  ];

  return (
    <>
      <Switch id="scatter-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Scatter chart example"
          containerComponent={
            <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
          }
          height={275}
          maxDomain={{ y: 8 }}
          minDomain={{ y: 0 }}
          name="chart10"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={450}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid tickValues={[2, 4, 6]} />
          <ChartGroup>
            <ChartScatter data={data} />
          </ChartGroup>
        </Chart>
      </div>
    </>
  );
};
