import { ChartBullet } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletPrimaryDot: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 88 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primaryDotMeasureData: ChartData[] = [
    { name: 'Measure', y: 25 },
    { name: 'Measure', y: 60 }
  ];
  const primaryDotMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 50 },
    { name: 'Range', y: 75 }
  ];
  const qualitativeRangeLegendData: ChartData[] = [{ name: 'Range 1' }, { name: 'Range 2' }];

  return (
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
        constrainToVisibleArea
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 100 }}
        name="chart4"
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 50
        }}
        primaryDotMeasureData={primaryDotMeasureData}
        primaryDotMeasureLegendData={primaryDotMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  );
};
