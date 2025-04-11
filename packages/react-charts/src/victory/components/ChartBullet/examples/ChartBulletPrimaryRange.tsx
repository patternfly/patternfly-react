import { ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';
interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletPrimaryRange: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 80 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: ChartData[] = [
    { name: 'Measure', y: 75 },
    { name: 'Measure', y: 135 }
  ];
  const primarySegmentedMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 85 },
    { name: 'Range', y: 125 }
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
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        height={200}
        maxDomain={{ y: 125 }}
        minDomain={{ y: 50 }}
        name="chart6"
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 75,
          top: 50
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        themeColor={ChartThemeColor.yellow}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  );
};
