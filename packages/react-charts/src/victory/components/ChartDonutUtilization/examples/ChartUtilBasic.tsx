import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x: string;
  y: number;
}

export const ChartUtilBasic: React.FunctionComponent = () => {
  const data: UsageData = { x: 'GBps capacity', y: 75 };

  return (
    <div style={{ height: '230px', width: '230px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        name="chart1"
        subTitle="of 100 GBps"
        title="75%"
      />
    </div>
  );
};
