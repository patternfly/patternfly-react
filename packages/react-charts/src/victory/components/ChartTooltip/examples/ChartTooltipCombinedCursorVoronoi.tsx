import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  createContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  symbol?: { type: string };
  x?: string;
  y?: number;
}

export const ChartTooltipCombinedCursorVoronoi: React.FunctionComponent = () => {
  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const legendData: PetData[] = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];

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
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 7 }
  ];

  return (
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Line chart example chart title"
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
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
        name="chart2"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        themeColor={ChartThemeColor.orange}
        width={450}
      >
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
        <ChartGroup>
          <ChartLine data={data1} />
          <ChartLine
            data={data2}
            style={{
              data: {
                strokeDasharray: '3,3'
              }
            }}
          />
          <ChartLine data={data3} />
          <ChartLine data={data4} />
        </ChartGroup>
      </Chart>
    </div>
  );
};
