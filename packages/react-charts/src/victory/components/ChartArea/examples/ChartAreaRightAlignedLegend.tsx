import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const ChartAreaRightAlignedLegend: React.FunctionComponent = () => {
  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];

  const dogsData: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 3 },
    { name: 'Dogs', x: '2017', y: 4 },
    { name: 'Dogs', x: '2018', y: 5 },
    { name: 'Dogs', x: '2019', y: 6 }
  ];

  const birdsData: PetData[] = [
    { name: 'Birds', x: '2015', y: 1 },
    { name: 'Birds', x: '2016', y: 2 },
    { name: 'Birds', x: '2017', y: 3 },
    { name: 'Birds', x: '2018', y: 2 },
    { name: 'Birds', x: '2019', y: 4 }
  ];

  const legendData = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];

  return (
    <div style={{ height: '200px', width: '800px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Area chart example"
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
          <ChartArea data={catsData} interpolation="monotoneX" />
          <ChartArea data={dogsData} interpolation="monotoneX" />
          <ChartArea data={birdsData} interpolation="monotoneX" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
