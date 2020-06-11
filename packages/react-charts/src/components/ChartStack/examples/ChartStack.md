---
title: 'Stack chart'
section: 'charts'
typescript: true
propComponents: [
  'Chart',
  'ChartArea',
  'ChartBar',
  'ChartStack',
  'ChartTooltip'
]
hideDarkMode: true
---

import { Chart, ChartArea, ChartBar, ChartStack, ChartLegendTooltip, ChartThemeColor, ChartTooltip, createContainer } from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a stack chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/stack-chart)

## Examples
```js title=Basic-with-right-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartVoronoiContainer } from '@patternfly/react-charts';

BasicRightAlignedLegend = (
  <div style={{ height: '250px', width: '600px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
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
)
```

```js title=Horizontal-with-bottom-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

Horizontal = (
  <div style={{ height: '275px', width: '450px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50, 
        top: 50
      }}
      themeColor={ChartThemeColor.gold}
      width={450}
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
)
```

```js title=Multi--color-(ordered)-horizontal-with-bottom-aligned-legend
import React from 'react';
import { Chart, ChartBar, ChartAxis, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';

MultiColorHorizontal = (
  <div>
    <p>This demonstrates an alternate way of applying tooltips using data labels</p>
    <div style={{ height: '275px', width: '450px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Stack chart example"
        domainPadding={{ x: [30, 25] }}
        legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
        legendPosition="bottom-left"
        height={275}
        padding={{
          bottom: 75, // Adjusted to accommodate legend
          left: 50,
          right: 50, 
          top: 50
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={450}
      >
        <ChartAxis />
        <ChartAxis dependentAxis showGrid />
        <ChartStack horizontal>
          <ChartBar 
            data={[
              { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, 
              { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, 
              { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, 
              { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
            ]} 
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, 
              { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, 
              { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, 
              { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, 
              { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, 
              { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, 
              { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
          <ChartBar 
            data={[
              { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, 
              { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, 
              { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, 
              { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
            ]}
            labelComponent={<ChartTooltip constrainToVisibleArea />}
          />
        </ChartStack>
      </Chart>
    </div>
  </div>
)
```

```js title=Monthly-data-with-responsive-container
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip } from '@patternfly/react-charts';

class MonthlyResponsiveStack extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render(){
    const { width } = this.state;
    return (
      <div ref={this.containerRef}>
        <p>This demonstrates monthly data with a bottom aligned legend and responsiveness for mobile</p>
        <div style={{ height: '225px' }}>
          <Chart
            ariaDesc="Stack Chart with monthly metric data"
            ariaTitle="Monthly Stack Chart"
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Sockets' }, { name: 'Cores' }, { name: 'Nodes' }]}
            legendPosition="bottom"
            height={275}
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

```js title=Multi--color-(unordered)-responsive-container
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartStack, ChartLegendTooltip, ChartThemeColor, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("cursor", "voronoi");
    const legendData = [{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }];

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
                  { name: 'Cats', x: 'Sunday', y: 6 },
                  { name: 'Cats', x: 'Monday', y: 2 },
                  { name: 'Cats', x: 'Tuesday', y: 8 },
                  { name: 'Cats', x: 'Wednesday', y: 15 },
                  { name: 'Cats', x: 'Thursday', y: 6 },
                  { name: 'Cats', x: 'Friday', y: 2 },
                  { name: 'Cats', x: 'Saturday', y: 0 }
                ]}
                interpolation="monotoneX"
              />
             <ChartArea
               data={[
                  { name: 'Birds', x: 'Sunday', y: 4 },
                  { name: 'Birds', x: 'Monday', y: 5 },
                  { name: 'Birds', x: 'Tuesday', y: 7 },
                  { name: 'Birds', x: 'Wednesday', y: 6 },
                  { name: 'Birds', x: 'Thursday', y: 10 },
                  { name: 'Birds', x: 'Friday', y: 3 },
                  { name: 'Birds', x: 'Saturday', y: 5 }
                ]}
                interpolation="monotoneX"
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: 'Sunday', y: 8 },
                  { name: 'Dogs', x: 'Monday', y: 18 },
                  { name: 'Dogs', x: 'Tuesday', y: 14 },
                  { name: 'Dogs', x: 'Wednesday', y: 8 },
                  { name: 'Dogs', x: 'Thursday', y: 6 },
                  { name: 'Dogs', x: 'Friday', y: 8 },
                  { name: 'Dogs', x: 'Saturday', y: 12 }
                ]}
                interpolation="monotoneX"
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
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
 - For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
 - For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
