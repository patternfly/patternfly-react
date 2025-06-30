import { Switch } from '@patternfly/react-core';
import { ChartBullet, ChartLegend, ChartThemeColor } from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface Data {
  name?: string;
  y?: number;
}

export const ChartBulletSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const comparativeWarningMeasureData: Data[] = [{ name: 'Warning', y: 88 }];
  const comparativeWarningMeasureLegendData: Data[] = [{ name: 'Warning' }];
  const primarySegmentedMeasureData: Data[] = [
    { name: 'Measure', y: 25 },
    { name: 'Measure', y: 60 }
  ];
  const primarySegmentedMeasureLegendData: Data[] = [{ name: 'Measure' }, { name: 'Measure' }];
  const qualitativeRangeData: Data[] = [
    { name: 'Range', y: 50 },
    { name: 'Range', y: 75 }
  ];
  const qualitativeRangeLegendData: Data[] = [{ name: 'Range' }, { name: 'Range' }];

  return (
    <>
      <Switch id="bullet-skeleton-switch" label="Enable skeleton" isChecked={isChecked} onChange={handleChange} />
      <div style={{ height: '200px', width: '600px' }}>
        <ChartBullet
          ariaDesc="Storage capacity"
          ariaTitle="Bullet chart example"
          comparativeWarningMeasureData={comparativeWarningMeasureData}
          comparativeWarningMeasureLegendData={comparativeWarningMeasureLegendData}
          constrainToVisibleArea
          height={200}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          legendComponent={<ChartLegend gutter={isChecked ? 50 : undefined} />}
          maxDomain={{ y: 100 }}
          name="chart4"
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
          subTitle="Details"
          title="Text label"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={600}
        />
      </div>
    </>
  );
};
