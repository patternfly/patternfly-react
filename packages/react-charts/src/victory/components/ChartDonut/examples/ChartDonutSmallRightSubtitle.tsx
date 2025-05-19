import { ChartDonut } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartDonutSmallRightSubtitle: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '200px', width: '300px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        height={200}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={legendData}
        legendPosition="bottom"
        name="chart8"
        padding={{
          bottom: 70, // Adjusted to accommodate legend
          left: 20,
          right: 50, // Adjusted to accommodate subTitle
          top: 20
        }}
        subTitle="Pets"
        subTitlePosition="right"
        title="100"
        width={300}
      />
    </div>
  );
};
