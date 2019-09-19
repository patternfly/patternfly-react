---
title: 'Stack'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartArea', 'ChartBar', 'ChartLegend', 'ChartStack', 'ChartTooltip']
---

import { Chart, ChartArea, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';
import './chart-stack.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

## Tutorial

PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, 
along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React 
based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

In this tutorial, we will build a bar chart together - starting with a simple chart, adding multiple datasets, 
tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart 
components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/stack-chart)

## Simple stack chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartStack } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-right">
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
</div>
```

## Gold, horizontal stacked bar chart with bottom aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
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
</div>
```

## Multi-color (ordered), horizontal stacked bar chart with bottom-left aligned legend
This demonstrates an alternate way of applying tooltips using data labels
```js
import React from 'react';
import { Chart, ChartAxis, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
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
```

## Monthly stacked bar chart with bottom aligned legend and responsive container
This demonstrates monthly data and responsiveness for mobile
```js
import React from 'react';
import { Chart, ChartAxis, ChartStack, ChartTooltip } from '@patternfly/react-charts';

class ResponsiveStack extends React.Component {
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

    this.renderChartBars = () => {
      let socketBars = this.bars.map(tick => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Sockets',
          label: `${tick.x} Sockets: ${tick.y}`
        };
      });

      let coresBars = this.bars.map(tick => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Cores',
          label: `${tick.x} Cores: ${tick.y}`
        };
      });

      let nodesBars = this.bars.map(tick => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Nodes',
          label: `${tick.x} Nodes: ${tick.y}`
        };
      });

      return [
        <ChartBar 
          data={socketBars} 
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />,
        <ChartBar 
          data={coresBars} 
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />,
        <ChartBar 
          data={nodesBars} 
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />,
      ];
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
        <div>
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
              { this.renderChartBars() }
            </ChartStack>
          </Chart>
        </div>
      </div>
    )
  }
}
```

## Multi-color (unorderd), stacked area chart with bottom-left aligned legend and responsive container
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

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
    
    return (
      <div ref={this.containerRef}>
        <div className="stack-area-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
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
                interpolation="basis"
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
                interpolation="basis"
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
                interpolation="basis"
              />
            </ChartStack>
          </Chart>
        </div>
      </div>
    );
  }
}
```

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>
- `ChartLegend` may be used as a standalone component, instead of using `legendData` and `legendPosition`

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see <a href="https://formidable.com/open-source/victory/docs/victory-chart" target="_blank">VictoryChart</a>
 - For `ChartArea` props, see <a href="https://formidable.com/open-source/victory/docs/victory-area" target="_blank">VictoryArea</a>
 - For `ChartAxis` props, see <a href="https://formidable.com/open-source/victory/docs/victory-axis" target="_blank">VictoryAxis</a>
 - For `ChartBar` props, see <a href="https://formidable.com/open-source/victory/docs/victory-bar" target="_blank">VictoryBar</a>
 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartStack` props, see <a href="https://formidable.com/open-source/victory/docs/victory-stack" target="_blank">VictoryStack</a>
 - For `ChartTooltip` props, see <a href="https://formidable.com/open-source/victory/docs/victory-tooltip" target="_blank">VictoryTooltip</a>
