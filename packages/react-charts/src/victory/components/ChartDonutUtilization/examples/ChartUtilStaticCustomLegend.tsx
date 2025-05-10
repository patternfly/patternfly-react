import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilStaticCustomLegend: React.FunctionComponent = () => {
  const [used, setUsed] = React.useState(0);

  React.useEffect(() => {
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
    <div style={{ height: '350px', width: '230px' }}>
      <ChartDonutThreshold
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart with static threshold example"
        constrainToVisibleArea
        data={dataThreshold}
        height={350}
        labels={({ datum }) => (datum.x ? datum.x : null)}
        name="chart13"
        padding={{
          bottom: 125, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        width={230}
      >
        <ChartDonutUtilization
          data={dataUtil}
          labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
          legendData={legendData}
          legendOrientation="vertical"
          legendPosition="bottom"
          subTitle="of 100 GBps"
          title={`${used}%`}
          themeColor={ChartThemeColor.green}
          thresholds={[{ value: 60 }, { value: 90 }]}
        />
      </ChartDonutThreshold>
    </div>
  );
};
