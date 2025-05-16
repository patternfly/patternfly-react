import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x: string;
  y: number;
}

export const ChartUtilSmall: React.FunctionComponent = () => {
  const data: UsageData = { x: 'Storage capacity', y: 75 };
  return (
    <div style={{ height: '175px', width: '175px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        height={175}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        name="chart6"
        subTitle="of 100 GBps"
        title="75%"
        width={175}
      />
    </div>
  );
};
