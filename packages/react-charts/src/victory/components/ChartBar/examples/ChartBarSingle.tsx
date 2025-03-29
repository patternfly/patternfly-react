import { Chart, ChartBar, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const ChartBarSingle: React.FunctionComponent = () => {
  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const legendData = [{ name: 'Cats' }];
  return (
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
        name="chart4"
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        width={600}
      >
        <ChartBar data={catsData} />
      </Chart>
    </div>
  );
};
