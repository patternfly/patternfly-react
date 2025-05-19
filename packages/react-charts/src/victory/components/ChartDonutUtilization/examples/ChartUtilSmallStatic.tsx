import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x: string;
  y: number;
}

export const ChartUtilSmallStatic: React.FunctionComponent = () => {
  const dataThreshold: UsageData[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];
  const dataUtil: UsageData = { x: 'Storage capacity', y: 45 };

  return (
    <div style={{ height: '185px', width: '185px' }}>
      <ChartDonutThreshold
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart with static threshold example"
        constrainToVisibleArea
        data={dataThreshold}
        height={185}
        labels={({ datum }) => (datum.x ? datum.x : null)}
        name="chart15"
        width={185}
      >
        <ChartDonutUtilization
          data={dataUtil}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          subTitle="of 100 GBps"
          title="45%"
        />
      </ChartDonutThreshold>
    </div>
  );
};
