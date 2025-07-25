import { Switch } from '@patternfly/react-core';
import { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface Data {
  name?: string;
  x?: string;
  y?: number;
}

export const SkeletonsDonutUtilizationChart: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const legendData: Data[] = [{ name: `Storage capacity: 75%` }, { name: 'Unused' }];
  const data: Data = { x: 'GBps capacity', y: 35 };

  return (
    <>
      <Switch
        id="donut-utilization-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '230px', width: '435px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={data}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          legendData={legendData}
          legendOrientation="vertical"
          name="chart6"
          padding={{
            bottom: 20,
            left: 20,
            right: 225, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="of 100 GBps"
          title="35%"
          thresholds={[{ value: 60 }, { value: 90 }]}
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={435}
        />
      </div>
    </>
  );
};
