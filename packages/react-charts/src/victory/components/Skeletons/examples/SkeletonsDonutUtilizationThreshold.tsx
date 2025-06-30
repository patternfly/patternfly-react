import { Switch } from '@patternfly/react-core';
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';
import { useState } from 'react';

interface Data {
  x: string;
  y: number;
}

export const SkeletonsDonutUtilizationThreshold: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  const data1: Data[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];
  const data2: Data = { x: 'Storage capacity', y: 45 };

  return (
    <>
      <Switch
        id="donut-utilization-threshold-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '230px', width: '230px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={data1}
          labels={({ datum }) => (datum.x ? datum.x : null)}
          name="chart7"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
        >
          <ChartDonutUtilization
            data={data2}
            labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
            subTitle="of 100 GBps"
            title="45%"
          />
        </ChartDonutThreshold>
      </div>
    </>
  );
};
