import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartPieMultiColorBottomLegend: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];
  const legendData: PetData[] = [{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }];

  return (
    <div style={{ height: '275px', width: '300px' }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={data}
        height={275}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        legendData={legendData}
        legendPosition="bottom"
        name="chart3"
        padding={{
          bottom: 65,
          left: 20,
          right: 20,
          top: 20
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={300}
      />
    </div>
  );
};
