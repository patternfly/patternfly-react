import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsCustomVisibility: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 15 },
    { x: 'Dogs', y: 15 },
    { x: 'Birds', y: 15 },
    { x: 'Fish', y: 25 },
    { x: 'Rabbits', y: 30 }
  ];
  const legendData: PetData[] = [
    { name: 'Cats: 15' },
    { name: 'Dogs: 15' },
    { name: 'Birds: 15' },
    { name: 'Fish: 25' },
    { name: 'Rabbits: 30' }
  ];

  return (
    <div style={{ height: '230px', width: '350px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        hasPatterns={[true, true, false, false, false]}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart9"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20
        }}
        themeColor={ChartThemeColor.multiUnordered}
        width={350}
      />
    </div>
  );
};
