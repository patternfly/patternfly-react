import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLine,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  x?: string;
  y?: number;
  symbol?: { type: string };
}

export const ChartLegendLinks: React.FunctionComponent = () => {
  // Custom legend label component
  const LegendLabel = ({ _datum, ...rest }) => (
    <a href="#" aria-label={`Learn more about ${rest.text}`}>
      <ChartLabel {...rest} />
    </a>
  );

  // Custom legend component
  const getLegend = (legendData) => <ChartLegend data={legendData} labelComponent={<LegendLabel />} />;

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
    <div
      role="article"
      aria-describedby="withLinks-desc"
      aria-labelledby="withLinks-title"
      style={{ height: '275px', width: '450px' }}
    >
      <Chart
        ariaDesc="Average number of pets per year"
        ariaTitle="Line chart example"
        containerComponent={
          <ChartVoronoiContainer
            containerId="withLinks"
            role="figure"
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            constrainToVisibleArea
          />
        }
        legendComponent={getLegend([{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }])}
        legendData={legendData}
        legendPosition="bottom"
        height={275}
        maxDomain={{ y: 10 }}
        minDomain={{ y: 0 }}
        name="chart8"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        width={450}
      >
        <ChartAxis tickValues={[2, 3, 4]} tickLabelComponent={<ChartLabel ariaLabel="X axis - the year polled" />} />
        <ChartAxis
          dependentAxis
          showGrid
          tickValues={[2, 5, 8]}
          tickLabelComponent={<ChartLabel ariaLabel="Y axis - average number of pets" />}
        />
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
