import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartVoronoiContainer,
  getCustomTheme
} from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  symbol?: { type: string };
  x?: string;
  y?: number;
}

export const ChartTooltipLeftAligned: React.FunctionComponent = () => {
  // Victory theme properties only
  const themeProps = {
    voronoi: {
      style: {
        labels: {
          textAnchor: 'start' // Align tooltip labels left
        }
      }
    }
  };

  // Applies theme color and variant to base theme
  const myCustomTheme = getCustomTheme(ChartThemeColor.default, themeProps);

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
    <div style={{ height: '250px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Left aligned example chart title"
        containerComponent={
          <ChartVoronoiContainer
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            constrainToVisibleArea
            voronoiDimension="x"
          />
        }
        legendData={legendData}
        legendOrientation="vertical"
        legendPosition="right"
        height={250}
        maxDomain={{ y: 10 }}
        minDomain={{ y: 0 }}
        name="chart8"
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        theme={myCustomTheme}
        width={600}
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
