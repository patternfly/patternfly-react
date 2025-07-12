import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLegendTooltip,
  ChartLegend,
  ChartLine,
  ChartLegendTooltipContent,
  ChartLegendTooltipLabel,
  ChartThemeColor,
  createContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  childName?: string;
  name?: string;
  symbol?: { type: string };
  x?: string;
  y?: number | null;
}

export const ChartTooltipEmbeddedLegendFont: React.FunctionComponent = () => {
  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const legendData: PetData[] = [
    { childName: 'cats', name: 'Cats' },
    { childName: 'dogs', name: 'Dogs', symbol: { type: 'dash' } },
    { childName: 'birds', name: 'Birds' },
    { childName: 'mice', name: 'Mice' }
  ];

  const legend = <ChartLegend style={{ labels: { fontSize: 20 } }} />;
  const legendTooltipLabel = <ChartLegendTooltipLabel style={{ fontSize: 20 }} />;
  const legendTooltipContent = (
    <ChartLegendTooltipContent legendComponent={legend} titleComponent={legendTooltipLabel} />
  );

  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 1 },
    { name: 'Dogs', x: '2017', y: 7 },
    { name: 'Dogs', x: '2018', y: 4 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 3 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 5 }
  ];

  const data4: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: null },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 7 }
  ];

  return (
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Embeded legend with custom font size example chart title"
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
            labelComponent={
              <ChartLegendTooltip
                labelComponent={legendTooltipContent}
                legendData={legendData}
                title={(datum) => datum.x}
              />
            }
            mouseFollowTooltips
            voronoiDimension="x"
            voronoiPadding={50}
          />
        }
        legendData={legendData}
        legendPosition="bottom"
        height={275}
        maxDomain={{ y: 10 }}
        minDomain={{ y: 0 }}
        name="chart5"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.yellow}
        width={450}
      >
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
        <ChartGroup>
          <ChartLine data={data1} name="cats" />
          <ChartLine
            data={data2}
            name="dogs"
            style={{
              data: {
                strokeDasharray: '3,3'
              }
            }}
          />
          <ChartLine data={data3} name="birds" />
          <ChartLine data={data4} name="mice" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
