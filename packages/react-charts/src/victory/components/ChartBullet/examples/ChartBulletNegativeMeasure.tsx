import { ChartBullet } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
  y0?: number;
}

export const ChartBulletNegativeMeasure: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 60 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: ChartData[] = [{ name: 'Measure', y: -15 }];
  const primarySegmentedMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 25, y0: -25 },
    { name: 'Range', y: 50 }
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
        maxDomain={{ y: 75 }}
        minDomain={{ y: -25 }}
        name="chart7"
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 65
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  );
};
