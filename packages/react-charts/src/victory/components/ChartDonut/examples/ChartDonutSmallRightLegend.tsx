import { ChartDonut } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartDonutSmallRightLegend: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '150px', width: '275px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        height={150}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart6"
        padding={{
          bottom: 20,
          left: 20,
          right: 145, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="Pets"
        title="100"
        width={275}
      />
    </div>
  );
};
