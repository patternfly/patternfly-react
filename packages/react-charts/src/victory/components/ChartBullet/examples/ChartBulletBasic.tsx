import { ChartBullet } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y: number;
}

export const ChartBulletBasic: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 88 }];
  const primarySegmentedMeasureData: ChartData[] = [{ name: 'Measure', y: 60 }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 50 },
    { name: 'Range', y: 75 }
  ];

  return (
    <div style={{ height: '150px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        constrainToVisibleArea
        height={150}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart1"
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        qualitativeRangeData={qualitativeRangeData}
        width={600}
      />
    </div>
  );
};
