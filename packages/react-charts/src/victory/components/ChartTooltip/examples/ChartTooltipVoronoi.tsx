import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
}

export const ChartTooltipVoronoi: React.FunctionComponent = () => {
  const legendData: PetData[] = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];

  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 3 },
    { name: 'Dogs', x: '2017', y: 4 },
    { name: 'Dogs', x: '2018', y: 5 },
    { name: 'Dogs', x: '2019', y: 6 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 1 },
    { name: 'Birds', x: '2016', y: 2 },
    { name: 'Birds', x: '2017', y: 3 },
    { name: 'Birds', x: '2018', y: 2 },
    { name: 'Birds', x: '2019', y: 4 }
  ];

  return (
    <div style={{ height: '200px', width: '800px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Area chart example chart title"
        containerComponent={
          <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
        }
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        height={200}
        maxDomain={{ y: 9 }}
        name="chart1"
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        width={800}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup>
          <ChartArea data={data1} interpolation="monotoneX" />
          <ChartArea data={data2} interpolation="monotoneX" />
          <ChartArea data={data3} interpolation="monotoneX" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
