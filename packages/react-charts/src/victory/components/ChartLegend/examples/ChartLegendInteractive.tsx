import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartScatter,
  ChartThemeColor,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

export const ChartLegendInteractive: React.FunctionComponent = () => {
  const containerRef = React.useRef(null);
  const [hiddenSeries, setHiddenSeries] = React.useState(new Set());
  const [width, setWidth] = React.useState(0);

  const series = [
    {
      datapoints: [
        { x: '2015', y: 3 },
        { x: '2016', y: 4 },
        { x: '2017', y: 8 },
        { x: '2018', y: 6 }
      ],
      legendItem: { name: 'Cats' }
    },
    {
      datapoints: [
        { x: '2015', y: 2 },
        { x: '2016', y: 3 },
        { x: '2017', y: 4 },
        { x: '2018', y: 5 },
        { x: '2019', y: 6 }
      ],
      legendItem: { name: 'Dogs' }
    },
    {
      datapoints: [
        { x: '2015', y: 1 },
        { x: '2016', y: 2 },
        { x: '2017', y: 3 },
        { x: '2018', y: 2 },
        { x: '2019', y: 4 }
      ],
      legendItem: { name: 'Birds' }
    }
  ];

  // Returns groups of chart names associated with each data series
  const getChartNames = () => series.map((_, index) => [`area-${index}`, `scatter-${index}`]);

  // Handles legend click to toggle visibility of data series
  const handleLegendClick = (props) => {
    setHiddenSeries((prev) => {
      const newHidden = new Set(prev);
      if (!newHidden.delete(props.index)) {
        newHidden.add(props.index);
      }
      return newHidden;
    });
  };

  // Returns legend data styled per hiddenSeries
  const getLegendData = () =>
    series.map((s, index) => ({
      childName: `area-${index}`,
      ...s.legendItem,
      ...getInteractiveLegendItemStyles(hiddenSeries.has(index))
    }));

  // Returns true if data series is hidden
  const isHidden = (index) => hiddenSeries.has(index);

  // Checks if any data series is visible
  const isDataAvailable = () => hiddenSeries.size !== series.length;

  // Set chart width per current window size
  useEffect(() => {
    const observer = getResizeObserver(containerRef.current, () => {
      if (containerRef.current?.clientWidth) {
        setWidth(containerRef.current.clientWidth);
      }
    });
    return () => observer();
  }, []);

  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');
  const container = (
    <CursorVoronoiContainer
      cursorDimension="x"
      labels={({ datum }) => (datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null)}
      labelComponent={<ChartLegendTooltip legendData={getLegendData()} title={(datum) => datum.x} />}
      mouseFollowTooltips
      voronoiDimension="x"
      voronoiPadding={50}
      disable={!isDataAvailable()}
    />
  );

  return (
    <div ref={containerRef}>
      <div className="area-chart-legend-bottom-responsive">
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={container}
          events={getInteractiveLegendEvents({
            chartNames: getChartNames(),
            isHidden,
            legendName: 'chart5-ChartLegend',
            onLegendClick: handleLegendClick
          })}
          height={225}
          legendComponent={<ChartLegend name={'chart5-ChartLegend'} data={getLegendData()} />}
          legendPosition="bottom-left"
          name="chart5"
          padding={{ bottom: 75, left: 50, right: 50, top: 50 }}
          maxDomain={{ y: 9 }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            {series.map((s, index) => (
              <ChartScatter
                key={`scatter-${index}`}
                name={`scatter-${index}`}
                data={!isHidden(index) ? s.datapoints : [{ y: null }]}
                size={({ active }) => (active ? 5 : 3)}
              />
            ))}
          </ChartGroup>
          <ChartGroup>
            {series.map((s, index) => (
              <ChartArea
                key={`area-${index}`}
                name={`area-${index}`}
                data={!isHidden(index) ? s.datapoints : [{ y: null }]}
                interpolation="monotoneX"
              />
            ))}
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};
