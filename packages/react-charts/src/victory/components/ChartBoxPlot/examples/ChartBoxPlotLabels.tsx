import { Chart, ChartAxis, ChartBoxPlot, ChartThemeColor } from '@patternfly/react-charts/victory';

interface PetData {
  name: string;
  x: string;
  y: number[];
}

export const ChartBoxPlotLabels: React.FunctionComponent = () => {
  const catsData: PetData[] = [
    { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
    { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
    { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
    { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
  ];
  const legendData = [{ name: 'Cats' }];
  return (
    <div style={{ height: '300px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        domain={{ y: [0, 12] }}
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendPosition="bottom"
        height={300}
        name="chart2"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.yellow}
        width={600}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartBoxPlot
          data={catsData}
          labelOrientation={{
            min: 'right',
            max: 'right'
          }}
          maxLabels
          minLabels
        />
      </Chart>
    </div>
  );
};
