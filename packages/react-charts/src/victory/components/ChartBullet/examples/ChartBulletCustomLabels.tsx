import { ChartAxis, ChartBullet } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletCustomLabels: React.FunctionComponent = () => {
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
        axisComponent={
          <ChartAxis
            tickValues={[0, 25, 50, 75, 100]}
            tickFormat={(val) => {
              switch (val) {
                case 0:
                  return 'New';
                case 25:
                  return 'Beginner';
                case 50:
                  return 'Intermediate';
                case 75:
                  return 'Advanced';
                case 100:
                  return 'Expert';
              }
            }}
          />
        }
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        constrainToVisibleArea
        height={150}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart12"
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        qualitativeRangeData={qualitativeRangeData}
        width={600}
      />
    </div>
  );
};
