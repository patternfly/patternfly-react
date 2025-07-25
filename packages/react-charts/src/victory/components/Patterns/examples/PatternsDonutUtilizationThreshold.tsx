import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

interface Data {
  x?: string;
  y?: number;
  name?: string;
}

export const PatternsDonutUtilizationThreshold: React.FunctionComponent = () => {
  const data1: Data[] = [
    { x: 'Warning at 60%', y: 60 },
    { x: 'Danger at 90%', y: 90 }
  ];
  const data2: Data = { x: 'Storage capacity', y: 45 };
  const legendData: Data[] = [
    { name: `Storage capacity: 45%` },
    { name: 'Warning threshold at 60%' },
    { name: 'Danger threshold at 90%' }
  ];

  return (
    <div style={{ height: '275px', width: '675px' }}>
      <ChartDonutThreshold
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart with static threshold example"
        constrainToVisibleArea
        data={data1}
        hasPatterns
        height={275}
        labels={({ datum }) => (datum.x ? datum.x : null)}
        name="chart6"
        padding={{
          bottom: 65, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        width={675}
      >
        <ChartDonutUtilization
          data={data2}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          legendData={legendData}
          legendPosition="bottom"
          subTitle="of 100 GBps"
          title="45%"
          themeColor={ChartThemeColor.orange}
        />
      </ChartDonutThreshold>
    </div>
  );
};
