import { Switch } from '@patternfly/react-core';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLegend,
  ChartThemeColor,
  ChartThreshold,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import { useState } from 'react';

interface PetData {
  name?: string;
  symbol?: { fill: string | undefined; type: string };
  x?: number;
  y?: number;
}

export const SkeletonsThresholdChart: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const data1: PetData[] = [
    { name: 'Cats' },
    { name: 'Birds' },
    {
      name: 'Threshold',
      symbol: { fill: isChecked ? undefined : chart_color_blue_300.var, type: 'threshold' }
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
    { name: 'Cats Threshold', x: 0, y: 5 },
    { name: 'Cats Threshold', x: 3, y: 5 },
    { name: 'Cats Threshold', x: 3, y: 7 },
    { name: 'Cats Threshold', x: 5, y: 7 }
  ];

  return (
    <>
      <Switch id="threshold-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <div style={{ height: '250px', width: '800px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={
            <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
          }
          legendPosition="bottom-left"
          legendComponent={<ChartLegend data={data1} gutter={isChecked ? 50 : undefined} />}
          height={250}
          padding={{
            bottom: 100, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          maxDomain={{ y: 9 }}
          name="chart12"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={800}
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
                stroke: isChecked ? undefined : chart_color_blue_300.var
              }
            }}
          />
        </Chart>
      </div>
    </>
  );
};
