import { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilRightVerticalLegend: React.FunctionComponent = () => {
  const [spacer, setSpacer] = React.useState('');
  const [used, setUsed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setUsed((prevUsed) => {
        const val = (prevUsed + 10) % 100;
        setSpacer(val < 10 ? ' ' : '');
        return val;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data: UsageData = { x: 'Storage capacity', y: used };
  const legendData: UsageData[] = [{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }];

  return (
    <div style={{ height: '300px', width: '230px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        height={300}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="bottom"
        name="chart4"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        subTitle="of 100 GBps"
        title={`${used}%`}
        themeColor={ChartThemeColor.green}
        thresholds={[{ value: 60 }, { value: 90 }]}
        width={230}
      />
    </div>
  );
};
