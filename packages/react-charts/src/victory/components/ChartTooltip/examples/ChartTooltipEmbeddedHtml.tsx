import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartCursorTooltip,
  ChartGroup,
  ChartPoint,
  ChartThemeColor,
  createContainer
} from '@patternfly/react-charts/victory';

interface PetData {
  name?: string;
  x?: string;
  y?: number | null;
}

export const ChartTooltipEmbeddedHtml: React.FunctionComponent = () => {
  const baseStyles = {
    color: '#f0f0f0',
    fontFamily:
      '"Red Hat Text", "RedHatText", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif',
    fontSize: '14px'
  };

  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const legendData: PetData[] = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];

  const data1: PetData[] = [
    { name: 'Cats', x: '2015', y: 3 },
    { name: 'Cats', x: '2016', y: 4 },
    { name: 'Cats', x: '2017', y: 8 },
    { name: 'Cats', x: '2018', y: 6 },
    { name: 'Cats', x: '2019', y: null }
  ];

  const data2: PetData[] = [
    { name: 'Dogs', x: '2015', y: 2 },
    { name: 'Dogs', x: '2016', y: 3 },
    { name: 'Dogs', x: '2017', y: 4 },
    { name: 'Dogs', x: '2018', y: 5 },
    { name: 'Dogs', x: '2019', y: 6 }
  ];

  const data3: PetData[] = [
    { name: 'Birds', x: '2015', y: 1 },
    { name: 'Birds', x: '2016', y: 2 },
    { name: 'Birds', x: '2017', y: 3 },
    { name: 'Birds', x: '2018', y: 2 },
    { name: 'Birds', x: '2019', y: 4 }
  ];

  // Custom HTML component to create a legend layout
  const HtmlLegendContent = ({ datum, legendData, text, theme, title, x, y, ..._rest }) => (
    <g>
      <foreignObject height="100%" width="100%" x={x - 40} y={y - 45}>
        <table>
          <thead>
            <tr>
              <th colSpan={2} style={{ ...baseStyles, fontWeight: 700 }}>
                {title(datum)}
              </th>
            </tr>
          </thead>
          <tbody>
            {text.map((val, index) => (
              <tr key={`tbody-tr-${index}`} style={baseStyles}>
                <th width="20px">
                  <svg height="9.74" width="9.74">
                    <g>
                      <rect
                        role="presentation"
                        shapeRendering="auto"
                        width="9.74"
                        height="9.74"
                        style={{ fill: theme.legend.colorScale[index] }}
                      >
                        {
                          <ChartPoint
                            x={0}
                            y={0}
                            symbol={legendData[index].symbol ? legendData[index].symbol.type : 'square'}
                            size={5.6}
                          />
                        }
                      </rect>
                    </g>
                  </svg>
                </th>
                <td width="55px">{legendData[index].name}</td>
                <td style={{ textAlign: 'right' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </foreignObject>
    </g>
  );

  return (
    <div style={{ height: '225px', width: '650px' }}>
      <Chart
        ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
        ariaTitle="Embedded html example chart title"
        containerComponent={
          <CursorVoronoiContainer
            cursorDimension="x"
            labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
            labelComponent={
              <ChartCursorTooltip
                // The offset and flyout component are not necessary here, but included for completeness
                // centerOffset={{x: ({ center, flyoutWidth, width, offset = flyoutWidth / 2 + 10 }) => width > center.x + flyoutWidth + 10 ? offset : -offset}}
                // flyoutComponent={<ChartCursorFlyout />}
                flyoutHeight={110}
                flyoutWidth={({ datum }) => (datum.y === null ? 160 : 125)}
                labelComponent={<HtmlLegendContent legendData={legendData} title={(datum) => datum.x} />}
              />
            }
            mouseFollowTooltips
            voronoiDimension="x"
            voronoiPadding={50}
          />
        }
        legendData={legendData}
        legendPosition="bottom-left"
        height={225}
        name="chart4"
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50
        }}
        maxDomain={{ y: 9 }}
        themeColor={ChartThemeColor.multiUnordered}
        width={650}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartGroup>
          <ChartArea data={data1} interpolation="monotoneX" />
          <ChartArea data={data2} interpolation="monotoneX" />
          <ChartArea data={data3} interpolation="monotoneX" />
        </ChartGroup>
      </Chart>
    </div>
  );
};
