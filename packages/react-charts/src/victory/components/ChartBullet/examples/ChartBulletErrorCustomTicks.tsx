import { ChartAxis, ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';

interface ChartData {
  name: string;
  y?: number;
}

export const ChartBulletErrorCustomTicks: React.FunctionComponent = () => {
  const comparativeErrorMeasureData: ChartData[] = [{ name: 'Error', y: 120 }];
  const comparativeErrorMeasureLegendData: ChartData[] = [{ name: 'Error' }];
  const comparativeWarningMeasureData: ChartData[] = [{ name: 'Warning', y: 80 }];
  const comparativeWarningMeasureLegendData: ChartData[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: ChartData[] = [
    { name: 'Measure', y: 25 },
    { name: 'Measure', y: 75 }
  ];
  const primarySegmentedMeasureLegendData: ChartData[] = [{ name: 'Measure 1' }, { name: 'Measure 2' }];
  const qualitativeRangeData: ChartData[] = [
    { name: 'Range', y: 65 },
    { name: 'Range', y: 100 },
    { name: 'Range', y: 150 }
  ];
  const qualitativeRangeLegendData: ChartData[] = [{ name: 'Range 1' }, { name: 'Range 2' }];

  return (
    <div style={{ height: '200px', width: '600px' }}>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        axisComponent={<ChartAxis tickValues={[0, 75, 150]} />}
        comparativeErrorMeasureData={comparativeErrorMeasureData}
        comparativeErrorMeasureLegendData={comparativeErrorMeasureLegendData}
        comparativeWarningMeasureData={comparativeWarningMeasureData}
        comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
        constrainToVisibleArea
        height={200}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        legendItemsPerRow={3}
        name="chart5"
        padding={{
          bottom: 50,
          left: 150, // Adjusted to accommodate labels
          right: 50,
          top: 50
        }}
        primarySegmentedMeasureData={primarySegmentedMeasureData}
        primarySegmentedMeasureLegendData={primarySegmentedMeasureLegendData}
        qualitativeRangeData={qualitativeRangeData}
        qualitativeRangeLegendData={qualitativeRangeLegendData}
        themeColor={ChartThemeColor.green}
        subTitle="Measure details"
        title="Text label"
        width={600}
      />
    </div>
  );
};
