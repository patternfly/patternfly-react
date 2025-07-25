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
import { useEffect, useRef, useState } from 'react';

export const PatternsInteractiveAreaChart: React.FunctionComponent = () => {
  const containerRef = useRef(null);
  const observer = useRef(() => {});
  const [hiddenSeries, setHiddenSeries] = useState(new Set());
  const [width, setWidth] = useState(0);

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
  const getChartNames = () => {
    const result = [];
    series.map((_, index) => {
      // Each group of chart names are hidden / shown together
      result.push([`area-${index}`, `scatter-${index}`]);
    });
    return result;
  };

  // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend
  const getEvents = () =>
    getInteractiveLegendEvents({
      chartNames: getChartNames(),
      isHidden,
      legendName: 'chart8-ChartLegend',
      onLegendClick: handleLegendClick
    });

  // Returns legend data styled per hiddenSeries
  const getLegendData = () =>
    series.map((s, index) => ({
      childName: `area-${index}`, // Sync tooltip legend with the series associated with given chart name
      ...s.legendItem, // name property
      ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles
    }));

  // Hide each data series individually
  const handleLegendClick = (props) => {
    if (!hiddenSeries.delete(props.index)) {
      hiddenSeries.add(props.index);
    }
    setHiddenSeries(new Set(hiddenSeries));
  };

  // Set chart width per current window size
  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  // Returns true if data series is hidden
  const isHidden = (index) => hiddenSeries.has(index);

  const isDataAvailable = () => hiddenSeries.size !== series.length;

  // Note: Container order is important
  const CursorVoronoiContainer = createContainer('voronoi', 'cursor');

  const cursorVoronoiContainer = (
    <CursorVoronoiContainer
      cursorDimension="x"
      labels={({ datum }) => (datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null)}
      labelComponent={<ChartLegendTooltip legendData={getLegendData()} title={(datum) => datum.x} />}
      mouseFollowTooltips
      voronoiDimension="x"
      voronoiPadding={50}
    />
  );

  useEffect(() => {
    observer.current = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer.current();
    };
  }, []);

  // Tips:
  // 1. Omitting hidden components will reassign color scale, use null data instead or custom colors
  // 2. Set domain or tick axis labels to account for when all data series are hidden
  // 3. Omit tooltip for ChartScatter component by checking childName prop
  // 4. Omit tooltip when all data series are hidden
  // 5. Clone original container to ensure tooltip events are not lost when data series are hidden / shown
  const container = cloneElement(cursorVoronoiContainer, {
    disable: !isDataAvailable()
  });

  return (
    <div ref={containerRef}>
      <div className="area-chart-legend-bottom-responsive">
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={container}
          events={getEvents()}
          hasPatterns
          height={225}
          legendComponent={<ChartLegend name={'chart8-ChartLegend'} data={getLegendData()} />}
          legendPosition="bottom-left"
          name="chart8"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          maxDomain={{ y: 9 }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            {series.map((s, index) => (
              <ChartScatter
                data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null }]}
                key={'scatter-' + index}
                name={'scatter-' + index}
                size={({ active }) => (active ? 5 : 3)}
              />
            ))}
          </ChartGroup>
          <ChartGroup>
            {series.map((s, index) => (
              <ChartArea
                data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null }]}
                interpolation="monotoneX"
                key={'area-' + index}
                name={'area-' + index}
              />
            ))}
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};
