import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartThreshold,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';

interface PetData {
  name?: string;
  symbol?: { fill: string; type: string };
  x?: string;
  y?: number;
}

export const ChartThemeCustomStrokeColor: React.FunctionComponent = () => {
  const legendData: PetData[] = [
    { name: 'Cats' },
    { name: 'Birds' },
    { name: 'Mice' },
    { name: 'Cats Threshold', symbol: { fill: chart_color_blue_300.var, type: 'threshold' } }
  ];

  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 1 },
    { name: 'Cats', x: '2016', y: 2 },
    { name: 'Cats', x: '2017', y: 5 },
    { name: 'Cats', x: '2018', y: 3 }
  ];

  const data2: PetData[] = [
    { name: 'Birds', x: '2015', y: 3 },
    { name: 'Birds', x: '2016', y: 4 },
    { name: 'Birds', x: '2017', y: 9 },
    { name: 'Birds', x: '2018', y: 5 }
  ];

  const data3: PetData[] = [
    { name: 'Mice', x: '2015', y: 3 },
    { name: 'Mice', x: '2016', y: 3 },
    { name: 'Mice', x: '2017', y: 8 },
    { name: 'Mice', x: '2018', y: 7 }
  ];

  const data4: PetData[] = [
    { name: 'Cats Threshold', x: '2015', y: 5 },
    { name: 'Cats Threshold', x: '2016', y: 5 },
    { name: 'Cats Threshold', x: '2016', y: 6 },
    { name: 'Cats Threshold', x: '2017', y: 6 },
    { name: 'Cats Threshold', x: '2018', y: 6 }
  ];

  return (
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Line chart example"
        containerComponent={
          <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
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
        themeColor={ChartThemeColor.multiUnordered}
        width={450}
      >
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
        <ChartGroup>
          <ChartLine data={data1} />
          <ChartLine data={data2} />
          <ChartLine data={data3} />
          <ChartThreshold
            data={data4}
            style={{
              data: {
                stroke: chart_color_blue_300.var
              }
            }}
          />
        </ChartGroup>
      </Chart>
    </div>
  );
};
