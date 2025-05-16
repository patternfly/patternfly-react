import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilSmallRightAlignedSubtitle: React.FunctionComponent = () => {
  const dataThreshold: UsageData[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];
  const dataUtil: UsageData = { x: 'Storage capacity', y: 45 };
  const legendData: UsageData[] = [
    { name: `Storage capacity: 45%` },
    { name: 'Warning threshold at 60%' },
    { name: 'Danger threshold at 90%' }
  ];

  return (
    <div style={{ height: '225px', width: '675px' }}>
      <ChartDonutThreshold
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart with static threshold example"
        constrainToVisibleArea
        data={dataThreshold}
        height={225}
        labels={({ datum }) => (datum.x ? datum.x : null)}
        name="chart18"
        padding={{
          bottom: 60, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        subTitlePosition="right"
        width={675}
      >
        <ChartDonutUtilization
          data={dataUtil}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          legendData={legendData}
          legendPosition="bottom"
          subTitle="of 100 GBps"
          title="45%"
          thresholds={[{ value: 60 }, { value: 90 }]}
        />
      </ChartDonutThreshold>
    </div>
  );
};
