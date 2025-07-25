import {
  ChartArea,
  ChartContainer,
  ChartGroup,
  ChartLabel,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number;
}

export const SparklineBasic: React.FunctionComponent = () => {
  const data: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 }
  ];

  return (
    <div style={{ marginLeft: '50px', marginTop: '50px', height: '135px' }}>
      <div style={{ height: '100px', width: '400px' }}>
        <ChartGroup
          ariaDesc="Average number of pets"
          ariaTitle="Sparkline chart example"
          containerComponent={
            <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
          }
          height={100}
          maxDomain={{ y: 9 }}
          name="chart1"
          padding={0}
          width={400}
        >
          <ChartArea data={data} />
        </ChartGroup>
      </div>
      <ChartContainer title="CPU utilization">
        <ChartLabel text="CPU utilization" dy={15} />
      </ChartContainer>
    </div>
  );
};
