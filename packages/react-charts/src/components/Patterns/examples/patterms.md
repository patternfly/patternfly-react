---
id: Patterns
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartDonut',
  'ChartDonutThreshold',
  'ChartDonutUtilization',
  'ChartGroup',
  'ChartLegend',
  'ChartLegendTooltip',
  'ChartPie',
  'ChartScatter',
  'ChartStack',
  'ChartVoronoiContainer'
]
hideDarkMode: true
beta: true
---

import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartPie,
  ChartScatter,
  ChartStack,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic pie chart
```js
import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    hasPatterns
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
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
    width={350}
  />
</div>
```

### Bar chart
```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom"
    hasPatterns
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

### Stack chart
```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div style={{ height: '250px', width: '600px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Stack chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendOrientation="vertical"
    legendPosition="right"
    hasPatterns
    height={250}
    name="chart3"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.green}
    width={600}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartStack>
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
      <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
      <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
      <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
    </ChartStack>
  </Chart>
</div>
```

### Donut chart
```js
import React from 'react';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    hasPatterns
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart4"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    subTitle="Pets"
    title="100"
    themeColor={ChartThemeColor.gold}
    width={350}
  />
</div>
```

### Donut utilization chart

This demonstrates how to hide a pattern for the static, unused portion of the donut utilization chart.

```js
import React from 'react';
import { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '300px' }}>
  <ChartDonutUtilization 
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 45 }}
    hasPatterns
    height={275}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
    legendPosition="bottom"
    name="chart5"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    subTitle="of 100 GBps"
    title="45%"
    themeColor={ChartThemeColor.green}
    thresholds={[{ value: 60 }, { value: 90 }]}
    width={300}
  />
</div>
```

### Donut utilization chart with thresholds

This demonstrates how to apply patterns to thresholds.

```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '675px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    hasPatterns
    height={275}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart6"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    width={675}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
      legendPosition="bottom"
      subTitle="of 100 GBps"
      title="45%"
      themeColor={ChartThemeColor.orange}
    />
  </ChartDonutThreshold>
</div>
```

### Interactive legend with pie chart

This demonstrates how to add an interactive legend to a pie chart using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```js
import React from 'react';
import { 
  Chart,
  ChartLegend,
  ChartThemeColor,
  ChartPie,
  getInteractiveLegendEvents, 
  getInteractiveLegendItemStyles 
} from '@patternfly/react-charts';

class InteractivePieLegendChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenSeries: new Set(),
      width: 0
    };
    this.series = [{
      datapoints: { x: 'Cats', y: 25 },
      legendItem: { name: 'Cats: 35' }
    }, {
      datapoints: { x: 'Dogs', y: 25 },
      legendItem: { name: 'Dogs: 25' }
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
      legendName: 'chart7-ChartLegend',
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
      <div style={{ height: '275px', width: '500px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          events={this.getEvents()}
          hasPatterns
          height={275}
          legendComponent={<ChartLegend name={'chart7-ChartLegend'} data={this.getLegendData()} />}
          legendPosition="bottom"
          name="chart7"
          padding={{
            bottom: 65,
            left: 20,
            right: 20,
            top: 20
          }}
          showAxis={false}
          themeColor={ChartThemeColor.multiUnordered}
          width={500}
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

### Interactive legend with area chart

This demonstrates how to add an interactive legend using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```js
import React from 'react';
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
  getResizeObserver
} from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

class InteractiveLegendChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      hiddenSeries: new Set(),
      width: 0
    };
    this.series = [{
      datapoints: [
        { x: '2015', y: 3 },
        { x: '2016', y: 4 },
        { x: '2017', y: 8 },
        { x: '2018', y: 6 }
      ],
      legendItem: { name: 'Cats' }
    }, {
      datapoints: [
        { x: '2015', y: 2 },
        { x: '2016', y: 3 },
        { x: '2017', y: 4 },
        { x: '2018', y: 5 },
        { x: '2019', y: 6 }
      ],
      legendItem: { name: 'Dogs' }
    }, {
      datapoints: [
        { x: '2015', y: 1 },
        { x: '2016', y: 2 },
        { x: '2017', y: 3 },
        { x: '2018', y: 2 },
        { x: '2019', y: 4 }
      ],
      legendItem: { name: 'Birds' }
    }];

    // Returns groups of chart names associated with each data series
    this.getChartNames = () => {
      const result = [];
      this.series.map((_, index) => {
        // Each group of chart names are hidden / shown together
        result.push([`area-${index}`, `scatter-${index}`]);
      });
      return result;
    };

    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend
    this.getEvents = () => getInteractiveLegendEvents({
      chartNames: this.getChartNames(),
      isHidden: this.isHidden,
      legendName: 'chart8-ChartLegend',
      onLegendClick: this.handleLegendClick
    });

    // Returns legend data styled per hiddenSeries
    this.getLegendData = () => {
      const { hiddenSeries } = this.state;
      return this.series.map((s, index) => {
        return {
          childName: `area-${index}`, // Sync tooltip legend with the series associated with given chart name
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

    // Set chart width per current window size
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };

    // Returns true if data series is hidden
    this.isHidden = (index) => {
      const { hiddenSeries } = this.state; // Skip if already hidden                
      return hiddenSeries.has(index);
    };

    this.isDataAvailable = () => {
      const { hiddenSeries } = this.state;
      return hiddenSeries.size !== this.series.length;
    };

    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");

    this.cursorVoronoiContainer = (
      <CursorVoronoiContainer
        cursorDimension="x"
        labels={({ datum }) => datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null}
        labelComponent={<ChartLegendTooltip legendData={this.getLegendData()} title={(datum) => datum.x}/>}
        mouseFollowTooltips
        voronoiDimension="x"
        voronoiPadding={50}
      />
    );
  };

  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  // Tips:
  // 1. Omitting hidden components will reassign color scale, use null data instead or custom colors
  // 2. Set domain or tick axis labels to account for when all data series are hidden
  // 3. Omit tooltip for ChartScatter component by checking childName prop
  // 4. Omit tooltip when all data series are hidden
  // 5. Clone original container to ensure tooltip events are not lost when data series are hidden / shown
  render() {
    const { hiddenSeries, width } = this.state;

    const container = React.cloneElement(
      this.cursorVoronoiContainer, 
      {
        disable: !this.isDataAvailable()
      }
    );

    return (
      <div ref={this.containerRef}>
        <div className="area-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={container}
            events={this.getEvents()}
            hasPatterns
            height={225}
            legendComponent={<ChartLegend name={'chart8-ChartLegend'} data={this.getLegendData()} />}
            legendPosition="bottom-left"
            name="chart8"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50,
            }}
            maxDomain={{y: 9}}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
          >
            <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              {this.series.map((s, index) => {
                return (
                  <ChartScatter
                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}
                    key={'scatter-' + index}
                    name={'scatter-' + index}
                    size={({ active }) => (active ? 5 : 3)}
                  />
                );
              })}
            </ChartGroup>
            <ChartGroup>
              {this.series.map((s, index) => {
                return (
                  <ChartArea
                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}
                    interpolation="monotoneX"
                    key={'area-' + index}
                    name={'area-' + index}
                  />
                );
              })}
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

### Custom pattern visibility

This demonstrates how to omit patterns from pie chart segments.

```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 15 }, { x: 'Dogs', y: 15 }, { x: 'Birds', y: 15 }, { x: 'Fish', y: 25 }, { x: 'Rabbits', y: 30 }]}
    hasPatterns={[ true, true, false, false, false ]}
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 15' }, { name: 'Dogs: 15' }, { name: 'Birds: 15' }, { name: 'Fish: 25' }, { name: 'Rabbits: 30' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart9"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    themeColor={ChartThemeColor.multiUnordered}
    width={350}
  />
</div>
```

### Custom color scale

This demonstrates how to apply a custom color scale to patterns.

```js
import React from 'react';
import { ChartPie } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    colorScale={[chart_color_blue_300.var, chart_color_gold_300.var, chart_color_green_300.var]}
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    hasPatterns={[ true, true, false ]}
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart10"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    width={350}
  />
</div>
```

### Custom pattern defs

This demonstrates how to create custom patterns.

```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';

<div style={{ height: '230px', width: '350px' }}>
  <svg aria-hidden height="0" width="0" style={{display: 'block'}}>
    <defs>
      <pattern id="pattern1" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="10" height="10" x="0" y="0">
        <path d="M 0 0 L 5 10 L 10 0" stroke={chart_color_blue_300.value} strokeWidth="2" fill="none"></path>
      </pattern>
      <pattern id="pattern2" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" width="10" height="10" x="0" y="0">
        <path d="M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7" stroke={chart_color_green_300.value} strokeWidth="2" fill="none"></path>
      </pattern>
    </defs>
  </svg>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart11"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    patternScale={[ 'url("#pattern1")', 'url("#pattern2")', null ]}
    themeColor={ChartThemeColor.multiUnordered}
    width={350}
  />
</div>
```

### All patterns
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '325px', width: '600px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[
      { x: 'Cats', y: 6 },
      { x: 'Dogs', y: 6 },
      { x: 'Birds', y: 6 },
      { x: 'Fish', y: 6 },
      { x: 'Rabbits', y: 6 },
      { x: 'Squirels', y: 6 },
      { x: 'Chipmunks', y: 6 },
      { x: 'Bats', y: 6 },
      { x: 'Ducks', y: 6 },
      { x: 'Geese', y: 6 },
      { x: 'Bobcats', y: 6 },
      { x: 'Foxes', y: 6 },
      { x: 'Coyotes', y: 6 },
      { x: 'Deer', y: 6 },
      { x: 'Bears', y: 10 }
    ]}
    hasPatterns
    height={325}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[
      { name: 'Cats: 6' },
      { name: 'Dogs: 6' },
      { name: 'Birds: 6' },
      { name: 'Fish: 6' },
      { name: 'Rabbits: 6' },
      { name: 'Squirels: 6' },
      { name: 'Chipmunks: 6' },
      { name: 'Bats: 6' },
      { name: 'Ducks: 6' },
      { name: 'Geese: 6' },
      { name: 'Bobcat: 6' },
      { name: 'Foxes: 6' },
      { name: 'Coyotes: 6' },
      { name: 'Deer: 6' },
      { name: 'Bears: 6' },
    ]}
    legendAllowWrap
    legendPosition="bottom"
    name="chart12"
    padding={{
      bottom: 110,
      left: 20,
      right: 20,
      top: 20
    }}
    themeColor={ChartThemeColor.multiOrdered}
    width={600}
  />
</div>
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
