---
id: Resize observer
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBullet',
  'ChartGroup',
  'ChartLegend',
  'ChartStack',
  'ChartThemeColor',
  'ChartThreshold',
  'ChartTooltip',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartGroup,
  ChartLegend,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Charts scale within the parent container by default, so the `width` and `height` props do not actually determine the
width and height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number
of pixels will depend on the size of the container the chart is rendered into. In order to maintain the aspect ratio,
the parent container may be set to the same height and/or width.

## Examples
### Responsive bullet chart with wrapping legend

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. The `legendAllowWrap` prop is used to automatically wrap legend items.

```js
import React from 'react';
import { ChartBullet, getResizeObserver } from '@patternfly/react-charts';

class BulletChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
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
    return (
      <div ref={this.containerRef} style={{ height: '250px' }}>
        <ChartBullet
          ariaDesc="Storage capacity"
          ariaTitle="Bullet chart example"
          comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
          constrainToVisibleArea
          height={250}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          legendAllowWrap
          legendPosition="bottom-left"
          maxDomain={{y: 100}}
          name="chart1"
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

### Responsive threshold chart with wrapping legend

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. In this example, `itemsPerRow` is used to wrap legend items manually.

```js
import React from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartLegend,
  ChartGroup,
  ChartThreshold,
  ChartThemeColor,
  ChartVoronoiContainer,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
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
    const itemsPerRow = width > 650 ? 4 : 2;

    return (
      <div ref={this.containerRef}>
        <div style={{ height: '250px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={
              <ChartVoronoiContainer
                labels={({ datum }) => `${datum.name}: ${datum.y}`}
                constrainToVisibleArea
              />
            }
            legendPosition="bottom-left"
            legendComponent={
              <ChartLegend
                data={[
                  { name: 'Cats' },
                  { name: 'Birds' },
                  {
                    name: 'Cats Threshold',
                    symbol: { fill: chart_color_blue_300.var, type: 'threshold' }
                  },
                  {
                    name: 'Birds Threshold',
                    symbol: { fill: chart_color_orange_300.var, type: 'threshold' }
                  }
                ]}
                itemsPerRow={itemsPerRow}
              />
            }
            height={250}
            name="chart2"
            padding={{
              bottom: 100, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            maxDomain={{ y: 9 }}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 3 },
                  { name: 'Cats', x: 2, y: 4 },
                  { name: 'Cats', x: 3, y: 8 },
                  { name: 'Cats', x: 4, y: 6 }
                ]}
                interpolation="monotoneX"
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: 1, y: 2 },
                  { name: 'Birds', x: 2, y: 3 },
                  { name: 'Birds', x: 3, y: 4 },
                  { name: 'Birds', x: 4, y: 5 },
                  { name: 'Birds', x: 5, y: 6 }
                ]}
                interpolation="monotoneX"
              />
            </ChartGroup>
            <ChartThreshold
              data={[
                { name: 'Cats Threshold', x: 0, y: 4 },
                { name: 'Cats Threshold', x: 3, y: 4 },
                { name: 'Cats Threshold', x: 3, y: 6 },
                { name: 'Cats Threshold', x: 5, y: 6 }
              ]}
              style={{
                data: {
                  stroke: chart_color_blue_300.var
                }
              }}
            />
            <ChartThreshold
              data={[
                { name: 'Birds Threshold', x: 0, y: 2 },
                { name: 'Birds Threshold', x: 2, y: 2 },
                { name: 'Birds Threshold', x: 2, y: 3 },
                { name: 'Birds Threshold', x: 5, y: 3 }
              ]}
              style={{
                data: {
                  stroke: chart_color_orange_300.var
                }
              }}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
```

### Responsive stack chart with reducible axis tick labels

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. In this example, `fixLabelOverlap` is used to dynamically adjust the number of axis tick labels.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip, getResizeObserver } from '@patternfly/react-charts';

class MonthlyResponsiveStack extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };

    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };

    this.bars = [];
    for(let i = 1; i < 32; i++){
      this.bars.push({ x: `Aug. ${i}`, y: Math.floor(Math.random() * 6) + 1 });
    };

    this.renderSocketBars = () => {
      let socketBars = this.bars.map((tick, index) => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Sockets',
          label: `${tick.x} Sockets: ${tick.y}`
        };
      });
      return <ChartBar data={socketBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.renderCoresBars = () => {
      let coresBars = this.bars.map((tick, index) => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Cores',
          label: `${tick.x} Cores: ${tick.y}`
        };
      });
      return <ChartBar data={coresBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.renderNodesBars = () => {
      let nodesBars = this.bars.map((tick, index) => {
        return {
          key: index,
          x: tick.x,
          y: tick.y,
          name: 'Nodes',
          label: `${tick.x} Nodes: ${tick.y}`
        };
      });
      return <ChartBar data={nodesBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.getTickValues = (offset = 2) => {
      let tickValues = [];
      for(let i = 1; i < 32; i++){
        if (i % offset == 0){
          tickValues.push(`Aug. ${i}`);
        }
      }
      return tickValues;
    }
  }

  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  render(){
    const { width } = this.state;
    return (
      <div ref={this.containerRef}>
        <div style={{ height: '225px' }}>
          <Chart
            ariaDesc="Stack Chart with monthly metric data"
            ariaTitle="Monthly Stack Chart"
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Sockets' }, { name: 'Cores' }, { name: 'Nodes' }]}
            legendPosition="bottom"
            height={225}
            name="chart3"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50, 
              top: 50
            }}
            width={width}
          >
            <ChartAxis tickValues = {this.getTickValues()} fixLabelOverlap />
            <ChartAxis dependentAxis showGrid />
            <ChartStack domainPadding={{x: [10, 2]}}>
              { this.renderSocketBars() }
              { this.renderCoresBars() }
              { this.renderNodesBars() }
            </ChartStack>
          </Chart>
        </div>
      </div>
    )
  }
}
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
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartLine` props, see [Victoryline](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
- For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
