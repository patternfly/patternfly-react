import {
  Chart,
  ChartAxis,
  ChartBoxPlot,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartThreshold,
  createContainer
} from '@patternfly/react-charts/victory';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';

interface Data {
  name: string;
  x: string;
  y: number[] | number;
}

export const ChartBoxPlotEmbeddedLegend: React.FunctionComponent = () => {
  const catsData: Data[] = [
    { name: 'Cats', x: '2015', y: [null] },
    { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
    { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
    { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
  ];

  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const limitData: Data[] = [
    { name: 'Limit', x: '2015', y: 12 },
    { name: 'Limit', x: '2016', y: 12 },
    { name: 'Limit', x: '2017', y: 12 },
    { name: 'Limit', x: '2018', y: 12 }
  ];
  const legendData = [
    {
      childName: 'limit',
      name: 'Limit',
      symbol: { fill: chart_color_orange_300.var, type: 'threshold' }
    },
    { childName: 'cats', name: 'Cats' },
    // Force extra space below for line wrapping
    {
      childName: 'cats',
      name: '',
      symbol: { fill: 'none' }
    },
    {
      childName: 'cats',
      name: '',
      symbol: { fill: 'none' }
    }
  ];
  const labelFormatter = (datum) => {
    // With box plot data, datum.y will also be an array
    if (datum && (datum._min || datum._median || datum._max || datum._q1 || datum._q3)) {
      return `Min: ${datum._min}, Max: ${datum._max}\nMedian: ${datum._median}\nQ1: ${datum._q1}, Q3: ${datum._q3}`;
    }
    const yVal = Array.isArray(datum.y) ? datum.y[0] : datum.y;
    return yVal !== null ? yVal : 'no data';
  };
  return (
    <div style={{ height: '350px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Embedded legend example chart title"
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => labelFormatter(datum)}
            labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x} />}
            mouseFollowTooltips
            voronoiDimension="x"
            voronoiPadding={50}
          />
        }
        domain={{ y: [0, 13] }}
        domainPadding={{ x: [30, 25] }}
        legendData={legendData}
        legendPosition="bottom"
        height={350}
        name="chart5"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.green}
        width={600}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartThreshold
          data={limitData}
          name="limit"
          style={{
            data: {
              stroke: chart_color_orange_300.var
            }
          }}
        />
        <ChartBoxPlot data={catsData} name="cats" />
      </Chart>
    </div>
  );
};
