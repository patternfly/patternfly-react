import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartThemeColor,
  ChartLegendTooltip,
  createContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  x: string;
  y: number;
}

export const ChartAreaBottomLegend: React.FunctionComponent = () => {
  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const legendData = [
    { childName: 'cats', name: 'Cats' },
    { childName: 'dogs', name: 'Dogs' },
    { childName: 'birds', name: 'Birds' }
  ];

  const catsData: PetData[] = [
    { x: '2015', y: 3 },
    { x: '2016', y: 4 },
    { x: '2017', y: 8 },
    { x: '2018', y: 6 }
  ];

  const dogsData: PetData[] = [
    { x: '2015', y: 2 },
    { x: '2016', y: 3 },
    { x: '2017', y: 4 },
    { x: '2018', y: 5 },
    { x: '2019', y: 6 }
  ];

  const birdsData: PetData[] = [
    { x: '2015', y: 1 },
    { x: '2016', y: 2 },
    { x: '2017', y: 3 },
    { x: '2018', y: 2 },
    { x: '2019', y: 4 }
  ];

  return (
    <div style={{ height: '250px', width: '650px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Area chart example"
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => `${datum.y}`}
            labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x} />}
            mouseFollowTooltips
            voronoiDimension="x"
            voronoiPadding={50}
          />
        }
        legendData={legendData}
        legendPosition="bottom"
        height={250}
        name="chart2"
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        maxDomain={{ y: 9 }}
        themeColor={ChartThemeColor.teal}
        width={650}
      >
        <ChartAxis label="Years" fixAxisLabelHeight />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup>
          <ChartArea data={catsData} interpolation="monotoneX" name="cats" />
          <ChartArea data={dogsData} interpolation="monotoneX" name="dogs" />
          <ChartArea data={birdsData} interpolation="monotoneX" name="birds" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
