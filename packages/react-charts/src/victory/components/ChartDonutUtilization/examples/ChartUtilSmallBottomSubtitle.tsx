import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilSmallBottomSubtitle: React.FunctionComponent = () => {
  const data: UsageData = { x: 'Storage capacity', y: 45 };
  const legendData: UsageData[] = [{ name: `Storage capacity: 45%` }, { name: 'Unused' }];

  return (
    <div style={{ height: '185px', width: '350px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        height={185}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={legendData}
        legendOrientation="vertical"
        name="chart8"
        padding={{
          bottom: 25, // Adjusted to accommodate subTitle
          left: 20,
          right: 195, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="of 100 GBps"
        subTitlePosition="bottom"
        title="45%"
        thresholds={[{ value: 60 }, { value: 90 }]}
        width={350}
      />
    </div>
  );
};
