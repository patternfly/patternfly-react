---
title: 'Scatter chart'
section: 'charts'
typescript: true
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartGroup',
  'ChartLine',
  'ChartScatter'
]
hideDarkMode: true
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLine, ChartScatter, ChartThemeColor } from '@patternfly/react-charts';
import { Button, Tooltip } from '@patternfly/react-core';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
```js title=Area-chart
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartScatter, ChartThemeColor } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

class ScatterAreaChart extends React.Component {
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

    this.series = [
    {
      datapoints: [
        { name: 'Cats', x: '2015', y: 3 },
        { name: 'Cats', x: '2016', y: 4 },
        { name: 'Cats', x: '2017', y: 8 },
        { name: 'Cats', x: '2018', y: 6 }
      ],
      legendItem: { name: 'Cats' }
    },
    {
      datapoints: [
        { name: 'Dogs', x: '2015', y: 2 },
        { name: 'Dogs', x: '2016', y: 3 },
        { name: 'Dogs', x: '2017', y: 4 },
        { name: 'Dogs', x: '2018', y: 5 },
        { name: 'Dogs', x: '2019', y: 6 }
      ],
      legendItem: { name: 'Dogs' }
    },
    {
      datapoints: [
        { name: 'Birds', x: '2015', y: 1 },
        { name: 'Birds', x: '2016', y: 2 },
        { name: 'Birds', x: '2017', y: 3 },
        { name: 'Birds', x: '2018', y: 2 },
        { name: 'Birds', x: '2019', y: 4 }
      ],
      legendItem: { name: 'Birds' }
    }];
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
        <p>This demonstrates how to add interactive data points to an area chart</p>
        <div style={{ height: '250px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={
              <ChartVoronoiContainer 
                labels={({ datum }) => datum.childName.includes('area-') ? `${datum.name}: ${datum.y}` : null} 
                constrainToVisibleArea 
              />
            }
            height={225}
            legendData={this.series.map(s => s.legendItem)}
            legendPosition="bottom-left"
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
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              {this.series.map((s, idx) => {
                return (
                  <ChartScatter data={s.datapoints} key={'scatter-' + idx} name={'scatter-' + idx} />
                );
              })}
            </ChartGroup>
            <ChartGroup>
              {this.series.map((s, idx) => {
                return (
                  <ChartArea 
                    interpolation="monotoneX"
                    key={'area-' + idx} name={'area-' + idx} data={s.datapoints} 
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

```js title=Line-chart
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartScatter, ChartThemeColor } from '@patternfly/react-charts';

class ScatterLineChart extends React.Component {
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

    this.series = [
    {
      datapoints: [
        { name: 'Cats', x: '2015', y: 1 },
        { name: 'Cats', x: '2016', y: 2 },
        { name: 'Cats', x: '2017', y: 5 },
        { name: 'Cats', x: '2018', y: 3 }
      ],
      legendItem: { name: 'Cats' }
    },
    {
      datapoints: [
        { name: 'Dogs', x: '2015', y: 2 },
        { name: 'Dogs', x: '2016', y: 1 },
        { name: 'Dogs', x: '2017', y: 7 },
        { name: 'Dogs', x: '2018', y: 4 }
      ],
      legendItem: { name: 'Dogs' },
      style: {
        data: {
          strokeDasharray: '3,3'
        }
      }
    },
    {
      datapoints: [
        { name: 'Birds', x: '2015', y: 3 },
        { name: 'Birds', x: '2016', y: 4 },
        { name: 'Birds', x: '2017', y: 9 },
        { name: 'Birds', x: '2018', y: 5 }
      ],
      legendItem: { name: 'Birds' }
    },
    {
      datapoints: [
        { name: 'Mice', x: '2015', y: 3 },
        { name: 'Mice', x: '2016', y: 3 },
        { name: 'Mice', x: '2017', y: 8 },
        { name: 'Mice', x: '2018', y: 7 }
      ],
      legendItem: { name: 'Birds' }
    }];
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
        <p>This demonstrates how to add interactive data points to a line chart</p>
        <div style={{ height: '275px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={
              <ChartVoronoiContainer 
                labels={({ datum }) => datum.childName.includes('line-') ? `${datum.name}: ${datum.y}` : null}  
                constrainToVisibleArea
              />
            }
            legendData={this.series.map(s => s.legendItem)}
            legendPosition="bottom-left"
            height={275}
            maxDomain={{y: 10}}
            minDomain={{y: 0}}
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            themeColor={ChartThemeColor.orange}
            width={width}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              {this.series.map((s, idx) => {
                return (
                    <ChartScatter
                      data={s.datapoints}
                      key={'scatter-' + idx}
                      name={'scatter-' + idx}
                    />
                );
              })}
            </ChartGroup>
            <ChartGroup>
              {this.series.map((s, idx) => {
                return (
                    <ChartLine
                      key={'line-' + idx}
                      name={'line-' + idx}
                      data={s.datapoints}
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

## Documentation

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
 - For `ChartLine` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
 - For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
