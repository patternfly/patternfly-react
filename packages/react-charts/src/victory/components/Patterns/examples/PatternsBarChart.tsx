import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsBarChart: React.FunctionComponent = () => {
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
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        containerComponent={
          <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
        }
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendPosition="bottom"
        hasPatterns
        height={275}
        name="chart2"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.purple}
        width={450}
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
  );
};
