import { Chart, ChartAxis, ChartGroup, ChartScatter, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const ChartScatterBasic: React.FunctionComponent = () => {
  const data: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 4 }
  ];

  return (
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
        name="chart1"
        width={450}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid tickValues={[2, 4, 6]} />
        <ChartGroup>
          <ChartScatter data={data} />
        </ChartGroup>
      </Chart>
    </div>
  );
};
