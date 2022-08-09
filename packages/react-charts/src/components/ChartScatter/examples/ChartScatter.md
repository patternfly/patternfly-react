---
id: Scatter chart
section: charts
propComponents: [
'Chart',
'ChartArea',
'ChartAxis',
'ChartGroup',
'ChartLine',
'ChartScatter',
'ChartVoronoiContainer'
]
hideDarkMode: true
---

import {
Chart,
ChartArea,
ChartAxis,
ChartGroup,
ChartLine,
ChartScatter,
ChartThemeColor,
ChartVoronoiContainer,
getResizeObserver
} from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartScatter, ChartVoronoiContainer } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Scatter chart example"
    containerComponent={
      <ChartVoronoiContainer
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        constrainToVisibleArea
      />
    }
    height={275}
    maxDomain={{y: 8}}
    minDomain={{y: 0}}
    name="chart1"
    width={450}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid tickValues={[2, 4, 6]} />
    <ChartGroup>
      <ChartScatter 
        data={[
          { name: 'Cats', x: '2015', y: 1 },
          { name: 'Cats', x: '2016', y: 2 },
          { name: 'Cats', x: '2017', y: 5 },
          { name: 'Cats', x: '2018', y: 4 }
        ]}
      />
    </ChartGroup>
  </Chart>
</div>
```

### Line chart

This demonstrates how to add interactive data points to a line chart.

```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartScatter, ChartThemeColor, ChartVoronoiContainer, getResizeObserver } from '@patternfly/react-charts';

class ScatterLineChart extends React.Component {
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
      legendItem: { name: 'Mice' }
    }];
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
      <div ref={this.containerRef}>
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
            name="chart2"
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

### Area chart

This demonstrates how to add interactive data points to an area chart.

```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartScatter, ChartThemeColor, ChartVoronoiContainer, getResizeObserver } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

class ScatterAreaChart extends React.Component {
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
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  render() {
    const { width } = this.state;

    return (
      <div ref={this.containerRef}>
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
            name="chart3"
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
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
