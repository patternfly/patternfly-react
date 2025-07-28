import { ChartDonut, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts/victory';

interface PetData {
  x: string;
  y: number;
}

export const ChartTooltipFixed: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  return (
    <div style={{ height: '150px', width: '150px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        height={150}
        labelComponent={<ChartTooltip center={{ x: 75, y: 0 }} />}
        labelRadius={46}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        name="chart5"
        subTitle="Pets"
        title="100"
        themeColor={ChartThemeColor.teal}
        width={150}
      />
    </div>
  );
};
