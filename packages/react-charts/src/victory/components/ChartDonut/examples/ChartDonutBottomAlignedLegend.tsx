import { ChartDonut } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartDonutBottomAlignedLegend: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '275px', width: '300px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        donutOrientation="top"
        height={275}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={legendData}
        legendPosition="bottom"
        legendWidth={225}
        name="chart4"
        padding={{
          bottom: 65, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        subTitle="Pets"
        title="100"
        width={300}
      />
    </div>
  );
};
