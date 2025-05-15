import { Chart, ChartAxis, ChartBoxPlot, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number[];
}

export const ChartBoxPlotRightAlignedLegend: React.FunctionComponent = () => {
  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
    { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
    { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
    { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
  ];

  const legendData = [{ name: 'Cats' }];
  return (
    <div style={{ height: '300px', width: '750px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        domain={{ y: [0, 12] }}
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        height={300}
        name="chart3"
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        themeColor={ChartThemeColor.blue}
        width={750}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartBoxPlot data={catsData} />
      </Chart>
    </div>
  );
};
