import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';
import { useEffect, useState } from 'react';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilStaticRightLegend: React.FunctionComponent = () => {
  const [used, setUsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsed((prevUsed) => {
        const val = (prevUsed + 10) % 100;
        return val;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dataThreshold: UsageData[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];
  const dataUtil: UsageData = { x: 'Storage capacity', y: used };
  const legendData: UsageData[] = [
    { name: `Storage capacity: ${used}%` },
    { name: 'Warning threshold at 60%' },
    { name: 'Danger threshold at 90%' }
  ];

  return (
    <div style={{ height: '230px', width: '500px' }}>
      <ChartDonutThreshold
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart with static threshold example"
        constrainToVisibleArea
        data={dataThreshold}
        labels={({ datum }) => (datum.x ? datum.x : null)}
        name="chart11"
        padding={{
          bottom: 20,
          left: 20,
          right: 290, // Adjusted to accommodate legend
          top: 20
        }}
        width={500}
      >
        <ChartDonutUtilization
          data={dataUtil}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          legendData={legendData}
          legendOrientation="vertical"
          subTitle="of 100 GBps"
          title={`${used}%`}
          thresholds={[{ value: 60 }, { value: 90 }]}
        />
      </ChartDonutThreshold>
    </div>
  );
};
