import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsDonutChart: React.FunctionComponent = () => {
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  return (
    <div style={{ height: '230px', width: '350px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        hasPatterns
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart4"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="Pets"
        title="100"
        themeColor={ChartThemeColor.yellow}
        width={350}
      />
    </div>
  );
};
