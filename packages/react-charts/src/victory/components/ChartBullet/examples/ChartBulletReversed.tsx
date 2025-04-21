import { ChartBullet } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletReversed: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: -88 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: ChartData[] = [
    { name: 'Measure', y: -60 },
    { name: 'Measure', y: -25 }
  ];
  const primarySegmentedMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: -50 },
    { name: 'Range', y: -75 }
  ];
  const qualitativeRangeLegendData: ChartData[] = [{ name: 'Range 1' }, { name: 'Range 2' }];

  return (
    <div style={{ height: '200px', width: '700px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
        constrainToVisibleArea
        invert
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendPosition="right"
        legendOrientation="vertical"
        maxDomain={{ y: 0 }}
        minDomain={{ y: -100 }}
        name="chart8"
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 150, // Adjusted to accommodate legend
          top: 80
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        subTitle="Measure details"
        title="Text label"
        width={700}
      />
    </div>
  );
};
