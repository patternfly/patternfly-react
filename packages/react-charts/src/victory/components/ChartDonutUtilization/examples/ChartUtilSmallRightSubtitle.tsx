import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilSmallRightSubtitle: React.FunctionComponent = () => {
  const data: UsageData = { x: 'Storage capacity', y: 45 };
  const legendData: UsageData[] = [{ name: `Storage capacity: 45%` }, { name: 'Unused' }];

  return (
    <div style={{ height: '200px', width: '350px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        height={200}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={legendData}
        legendPosition="bottom"
        name="chart9"
        padding={{
          bottom: 45, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        subTitle="of 100 GBps"
        subTitlePosition="right"
        title="45%"
        thresholds={[{ value: 60 }, { value: 90 }]}
        width={350}
      />
    </div>
  );
};
