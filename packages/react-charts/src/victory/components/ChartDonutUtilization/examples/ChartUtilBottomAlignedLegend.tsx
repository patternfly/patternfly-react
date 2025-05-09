import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilBottomAlignedLegend: React.FunctionComponent = () => {
  const data: UsageData = { x: 'Storage capacity', y: 45 };
  const legendData: UsageData[] = [{ name: `Storage capacity: 45%` }, { name: 'Unused' }];

  return (
    <div style={{ height: '275px', width: '300px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        height={275}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={legendData}
        legendPosition="bottom"
        name="chart5"
        padding={{
          bottom: 65, // Adjusted to accommodate legend
          left: 20,
          right: 20,
          top: 20
        }}
        subTitle="of 100 GBps"
        title="45%"
        thresholds={[{ value: 60 }, { value: 90 }]}
        width={300}
      />
    </div>
  );
};
