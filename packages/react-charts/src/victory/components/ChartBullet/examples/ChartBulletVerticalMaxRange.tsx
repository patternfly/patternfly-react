import { ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletVerticalMaxRange: React.FunctionComponent = () => {
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 100 }];
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
    <div style={{ height: '500px', width: '500px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
        constrainToVisibleArea
        height={500}
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        maxDomain={{ y: 125 }}
        minDomain={{ y: 50 }}
        name="chart11"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 400,
          right: 50,
          top: 50 // Adjusted to accommodate primary segmented measure tooltip
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        subTitle="Measure details"
        title="Text label"
        themeColor={ChartThemeColor.yellow}
        width={500}
      />
    </div>
  );
};
