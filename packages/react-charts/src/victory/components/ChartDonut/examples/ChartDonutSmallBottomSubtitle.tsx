import { ChartDonut } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartDonutSmallBottomSubtitle: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '165px', width: '275px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        height={165}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart7"
        padding={{
          bottom: 25, // Adjusted to accommodate subTitle
          left: 20,
          right: 145, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="Pets"
        subTitlePosition="bottom"
        title="100"
        width={275}
      />
    </div>
  );
};
