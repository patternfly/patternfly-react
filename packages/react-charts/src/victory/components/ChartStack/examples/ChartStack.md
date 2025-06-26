---
id: Stack chart
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartBar',
  'ChartStack',
  'ChartTooltip'
]
hideDarkMode: true
---

import { createRef } from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend
```ts file = "ChartStackBasicRightLegend.tsx"

```

### Horizontal with bottom aligned legend
```ts file = "ChartStackHorizontalBottomLegend.tsx"

```

### Multi-color (ordered) horizontal with bottom aligned legend

This demonstrates an alternate way of applying tooltips using data labels.

```ts file = "ChartStackMultiColorOrdered.tsx"

```

### Monthly data with responsive container
```js
import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

class MonthlyResponsiveStack extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
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
            name="chart4"
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

### Multi-color (unordered) responsive container

This demonstrates monthly data with a bottom aligned legend and responsiveness for mobile.

```js
import { Chart, ChartArea, ChartAxis, ChartStack, ChartLegendTooltip, ChartThemeColor, createContainer } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
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
    
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [{ childName: 'cats', name: 'Cats' }, { childName: 'dogs', name: 'Dogs' }, { childName: 'birds', name: 'Birds' }];
    
    return (
      <div ref={this.containerRef}>
        <div style={{ height: '225px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={
              <CursorVoronoiContainer
                cursorDimension="x"
                labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
                labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x}/>}
                mouseFollowTooltips
                voronoiDimension="x"
                voronoiPadding={50}
              />
            }
            legendData={legendData}
            legendPosition="bottom-left"
            height={225}
            name="chart5"
            padding={{
              bottom: 75, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50,
            }}
            maxDomain={{y: 30}}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartStack>
              <ChartArea
                data={[
                  { x: 'Sunday', y: 6 },
                  { x: 'Monday', y: 2 },
                  { x: 'Tuesday', y: 8 },
                  { x: 'Wednesday', y: 15 },
                  { x: 'Thursday', y: 6 },
                  { x: 'Friday', y: 2 },
                  { x: 'Saturday', y: 0 }
                ]}
                interpolation="monotoneX"
                name="cats"
              />
             <ChartArea
               data={[
                  { x: 'Sunday', y: 4 },
                  { x: 'Monday', y: 5 },
                  { x: 'Tuesday', y: 7 },
                  { x: 'Wednesday', y: 6 },
                  { x: 'Thursday', y: 10 },
                  { x: 'Friday', y: 3 },
                  { x: 'Saturday', y: 5 }
                ]}
                interpolation="monotoneX"
                name="dogs"
              />
              <ChartArea
                data={[
                  { x: 'Sunday', y: 8 },
                  { x: 'Monday', y: 18 },
                  { x: 'Tuesday', y: 14 },
                  { x: 'Wednesday', y: 8 },
                  { x: 'Thursday', y: 6 },
                  { x: 'Friday', y: 8 },
                  { x: 'Saturday', y: 12 }
                ]}
                interpolation="monotoneX"
                name="birds"
              />
            </ChartStack>
          </Chart>
        </div>
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- Themes are inherited, so a default theme may override `themeColor` for a child component
- The `theme` and `themeColor` props should be applied at the most top level component

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
