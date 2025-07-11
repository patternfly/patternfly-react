import { Switch } from '@patternfly/react-core';
import {
  Chart,
  ChartBar,
  ChartAxis,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
}

export const SkeletonsBarChart: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const legendData: PetData[] = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }];
  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 1 },
    { name: 'Dogs', x: '2017', y: 7 },
    { name: 'Dogs', x: '2018', y: 4 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 4 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 7 }
  ];

  const data4: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 5 }
  ];

  return (
    <>
      <Switch id="bar-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Bar chart example"
          containerComponent={
            <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
          }
          domain={{ y: [0, 9] }}
          domainPadding={{ x: [30, 25] }}
          legendData={legendData}
          legendOrientation="vertical"
          legendPosition="right"
          height={250}
          name="chart2"
          padding={{
            bottom: 50,
            left: 50,
            right: 200, // Adjusted to accommodate legend
            top: 50
          }}
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup offset={11}>
            <ChartBar data={data1} />
            <ChartBar data={data2} />
            <ChartBar data={data3} />
            <ChartBar data={data4} />
          </ChartGroup>
        </Chart>
      </div>
    </>
  );
};
