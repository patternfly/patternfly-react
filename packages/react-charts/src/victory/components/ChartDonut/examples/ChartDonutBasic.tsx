import { ChartDonut } from '@patternfly/react-charts/victory';

interface PetData {
  x: string;
  y: number;
}

export const ChartDonutBasic: React.FunctionComponent = () => {
  const data: PetData[] = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 }
  ];

  return (
    <div style={{ height: '230px', width: '230px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea
        data={data}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        name="chart1"
        subTitle="Pets"
        title="100"
      />
    </div>
  );
};
