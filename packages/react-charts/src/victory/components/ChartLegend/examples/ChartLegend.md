---
id: Legends
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBullet',
  'ChartDonut',
  'ChartGroup',
  'ChartLabel',
  'ChartLegend',
  'ChartLegendTooltip',
  'ChartLine',
  'ChartPie',
  'ChartScatter',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { cloneElement, createRef, useEffect, useRef, useState } from 'react';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartContainer,
  ChartDonut,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLine,
  ChartPie,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend
```js
import { ChartDonut } from '@patternfly/react-charts/victory';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart1"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    subTitle="Pets"
    title="100"
    width={350}
  />
</div>
```

### Bottom aligned legend
```js
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom"
    height={275}
    name="chart2"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.purple}
    width={450}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartGroup offset={11}>
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
      <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
      <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
      <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
    </ChartGroup>
  </Chart>
</div>
```

### Responsive bottom-left aligned legend

This demonstrates a responsive legend which wraps when items are wider than its container.

```js
import { ChartBullet } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

class BulletChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.observer = () => {};
    this.state = {
      extraHeight: 0,
      width: 0
    };
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
    this.handleLegendAllowWrap = (extraHeight) => {
      if (extraHeight !== this.state.extraHeight) {
        this.setState({ extraHeight });
      }
    }
    this.getHeight = (baseHeight) => {
      const { extraHeight } = this.state;
      return baseHeight + extraHeight;
    };
  }

  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  render() {
    const { width } = this.state;
    const height = this.getHeight(200);
    return (
      <div ref={this.containerRef} style={{ height: height + "px" }}>
        <ChartBullet
          ariaDesc="Storage capacity"
          ariaTitle="Bullet chart example"
          comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
          constrainToVisibleArea
          height={height}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          legendAllowWrap={this.handleLegendAllowWrap}
          legendPosition="bottom-left"
          maxDomain={{y: 100}}
          name="chart3"
          padding={{
            bottom: 50,
            left: 50,
            right: 50,
            top: 100 // Adjusted to accommodate labels
          }}
          primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
          primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
          qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
          qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
          subTitle="Measure details"
          title="Text label"
          titlePosition="top-left"
          width={width}
        />
      </div>
    );
  }
}
```

### Standalone legend

This demonstrates a standalone legend vs. using the `legendData` property.

```js
import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Line chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    height={275}
    maxDomain={{y: 10}}
    minDomain={{y: 0}}
    name="chart4"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.green}
    width={450}
  >
    <ChartAxis tickValues={[2, 3, 4]} />
    <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
    <ChartGroup>
      <ChartLine
        data={[
          { name: 'Cats', x: '2015', y: 1 },
          { name: 'Cats', x: '2016', y: 2 },
          { name: 'Cats', x: '2017', y: 5 },
          { name: 'Cats', x: '2018', y: 3 }
        ]}
      />
      <ChartLine
        data={[
          { name: 'Dogs', x: '2015', y: 2 },
          { name: 'Dogs', x: '2016', y: 1 },
          { name: 'Dogs', x: '2017', y: 7 },
          { name: 'Dogs', x: '2018', y: 4 }
        ]}
        style={{
          data: {
            strokeDasharray: '3,3'
          }
        }}
      />
      <ChartLine
        data={[
          { name: 'Birds', x: '2015', y: 3 },
          { name: 'Birds', x: '2016', y: 4 },
          { name: 'Birds', x: '2017', y: 9 },
          { name: 'Birds', x: '2018', y: 5 }
        ]}
      />
      <ChartLine
        data={[
          { name: 'Mice', x: '2015', y: 3 },
          { name: 'Mice', x: '2016', y: 3 },
          { name: 'Mice', x: '2017', y: 8 },
          { name: 'Mice', x: '2018', y: 7 }
        ]}
      />
    </ChartGroup>
    <ChartLegend 
      data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      x={80}
      y={235}
    />
  </Chart>
</div>
```

### Interactive legend

This demonstrates how to add an interactive legend using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```js
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
  getInteractiveLegendItemStyles,
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

const InteractiveLegendChart = () => {
  const containerRef = useRef(null);
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
  const CursorVoronoiContainer = createContainer("voronoi", "cursor");
  const container = (
    <CursorVoronoiContainer
      cursorDimension="x"
      labels={({ datum }) => datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null}
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
```

### Interactive legend with pie chart

This demonstrates how to add an interactive legend to a pie chart using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```js
import { 
  Chart,
  ChartLegend,
  ChartThemeColor,
  ChartPie,
  getInteractiveLegendEvents, 
  getInteractiveLegendItemStyles 
} from '@patternfly/react-charts/victory';

class InteractivePieLegendChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenSeries: new Set(),
      width: 0
    };
    this.series = [{
      datapoints: { x: 'Cats', y: 35 },
      legendItem: { name: 'Cats: 35' }
    }, {
      datapoints: { x: 'Dogs', y: 55 },
      legendItem: { name: 'Dogs: 55' }
    }, {
      datapoints: { x: 'Birds', y: 10 },
      legendItem: { name: 'Birds: 10' }
    }];

    // Returns groups of chart names associated with each data series
    this.getChartNames = () => {
      const result = [];
      this.series.map((_, index) => {
        // Provide names for each series hidden / shown -- use the same name for a pie chart
        result.push(['pie']);
      });
      return result;
    };

    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend
    this.getEvents = () => getInteractiveLegendEvents({
      chartNames: this.getChartNames(),
      isHidden: this.isHidden,
      legendName: 'chart6-ChartLegend',
      onLegendClick: this.handleLegendClick
    });

    // Returns legend data styled per hiddenSeries
    this.getLegendData = () => {
      const { hiddenSeries } = this.state;
      return this.series.map((s, index) => {
        return {
          ...s.legendItem, // name property
          ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles
        };
      });
    };

    // Hide each data series individually
    this.handleLegendClick = (props) => {
      if (!this.state.hiddenSeries.delete(props.index)) {
        this.state.hiddenSeries.add(props.index);
      }
      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });
    };

    // Returns true if data series is hidden
    this.isHidden = (index) => {
      const { hiddenSeries } = this.state; // Skip if already hidden                
      return hiddenSeries.has(index);
    };
  };

  render() {
    const { hiddenSeries, width } = this.state;

    const data = [];
    this.series.map((s, index) => {
      data.push(!hiddenSeries.has(index) ? s.datapoints : { y: null });
    });

    return (
      <div style={{ height: '275px', width: '300px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          events={this.getEvents()}
          height={275}
          legendComponent={<ChartLegend name={'chart6-ChartLegend'} data={this.getLegendData()} />}
          legendPosition="bottom"
          name="chart6"
          padding={{
            bottom: 65,
            left: 20,
            right: 20,
            top: 20
          }}
          showAxis={false}
          themeColor={ChartThemeColor.multiUnordered}
          width={300}
        >
          <ChartPie
            constrainToVisibleArea
            data={data}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            name="pie"
          />
        </Chart>
      </div>
    );
  }
}
```

### Legend tooltips

This demonstrates an approach for applying tooltips to a legend using a custom label component. These tooltips are keyboard navigable.

```js
import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';

class TooltipPieChart extends React.Component {
  constructor(props) {
    super(props);
    
    // Custom legend label component
    // Note: Tooltip wraps children with a div tag, so we use a reference to ChartLabel instead
    this.LegendLabel = ({datum, ...rest}) => {
      const ref = createRef();
      return (
        <g ref={ref}>
          <ChartLabel {...rest} />
          <Tooltip content={datum.name} enableFlip triggerRef={ref} />
        </g>
      );
    }

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div style={{ height: '275px', width: '300px' }}>
        <ChartPie
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={275}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendComponent={this.getLegend([
            { name: 'Cats: 35' }, 
            { name: 'Dogs: 55' }, 
            { name: 'Birds: 10' }
          ])}
          legendPosition="bottom"
          name="chart7"
          padding={{
            bottom: 65,
            left: 20,
            right: 20,
            top: 20
          }}
          themeColor={ChartThemeColor.multiOrdered}
          width={300}
        />
      </div>
    );
  }
}
```

### Legend links

This demonstrates an approach for applying links to a legend using a custom label component. These links are keyboard navigable.

```js
import { Chart, ChartAxis, ChartGroup, ChartLabel, ChartLegend, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

class LegendLinkPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label component
    this.LegendLabel = ({datum, ...rest}) => (
      <a href="#" aria-label={`Learn more about ${rest.text}`}>
        <ChartLabel {...rest} />
      </a>
    );

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div role="article" aria-describedby="withLinks-desc" aria-labelledby="withLinks-title" style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets per year"
          ariaTitle="Line chart example"
          containerComponent={<ChartVoronoiContainer containerId="withLinks" role="figure" labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          legendComponent={this.getLegend([
            { name: 'Cats' }, 
            { name: 'Dogs' }, 
            { name: 'Birds' },
            { name: 'Mice'}
          ])}
          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          legendPosition="bottom"
          height={275}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
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
          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} tickLabelComponent={<ChartLabel ariaLabel="Y axis - average number of pets" />} />
          <ChartGroup>
            <ChartLine
              data={[
                { name: 'Cats', x: '2015', y: 1 },
                { name: 'Cats', x: '2016', y: 2 },
                { name: 'Cats', x: '2017', y: 5 },
                { name: 'Cats', x: '2018', y: 3 }
              ]}
            />
            <ChartLine
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 1 },
                { name: 'Dogs', x: '2017', y: 7 },
                { name: 'Dogs', x: '2018', y: 4 }
              ]}
              style={{
                data: {
                  strokeDasharray: '3,3'
                }
              }}
            />
            <ChartLine
              data={[
                { name: 'Birds', x: '2015', y: 3 },
                { name: 'Birds', x: '2016', y: 4 },
                { name: 'Birds', x: '2017', y: 9 },
                { name: 'Birds', x: '2018', y: 5 }
              ]}
            />
            <ChartLine
              data={[
                { name: 'Mice', x: '2015', y: 3 },
                { name: 'Mice', x: '2016', y: 3 },
                { name: 'Mice', x: '2017', y: 8 },
                { name: 'Mice', x: '2018', y: 7 }
              ]}
            />
          </ChartGroup>
        </Chart>
      </div>
    );
  }
}
```

### Legend layout

This demonstrates an approach for applying a different legend layout and styles using a custom label component.

```js
import { ChartLabel, ChartLegend, ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';

class LegendLayoutPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label component
    this.LegendLabel = ({values, ...rest}) => (
      <ChartLabel
        {...rest}
        style={[{ fontWeight: 700 }, {}]}
        text={[values[rest.index], rest.text]}
      />
    );

    // Custom legend component
    this.getLegend = (legendData, values) => (
      <ChartLegend
        data={legendData}
        gutter={25}
        itemsPerRow={2}
        labelComponent={<this.LegendLabel dy={10} lineHeight={1.5} values={values} />}
        rowGutter={20}
      />
    );
  }

  render() {
    return (
      <div style={{ height: '230px', width: '375px' }}>
        <ChartDonut
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={230}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendComponent={this.getLegend([
            { name: 'Cats' }, 
            { name: 'Dogs' }, 
            { name: 'Birds' }
          ], [ 35, 55, 10 ])}
          legendOrientation="vertical"
          legendPosition="right"
          name="chart9"
          padding={{
            bottom: 20,
            left: 20,
            right: 140, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="Pets"
          title="100"
          themeColor={ChartThemeColor.multiOrdered}
          width={375}
        />
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLabel` props, see [VictoryLabel](https://formidable.com/open-source/victory/docs/victory-label)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartLine` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
