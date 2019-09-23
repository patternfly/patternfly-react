---
title: 'Area'
section: 'charts'
typescript: true
propComponents:
  [
    'Chart',
    'ChartAreaProps',
    'ChartAxis',
    'ChartGroup',
    'ChartLegend',
    'ChartThreshold',
    'ChartVoronoiContainer',
  ]
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLegend, ChartThreshold, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer } from '@patternfly/react-charts';
import '@patternfly/patternfly/patternfly-charts.css';
import './chart-area.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

## Tutorial

PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, 
along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React 
based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

In this tutorial, we will build an area chart together - starting with a simple chart, adding multiple datasets, 
tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart 
components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/area-chart)

## Simple area chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

<div>
  <div className="area-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Area chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={200}
      maxDomain={{y: 9}}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={800}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid/>
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: '2015', y: 3 },
            { name: 'Cats', x: '2016', y: 4 },
            { name: 'Cats', x: '2017', y: 8 },
            { name: 'Cats', x: '2018', y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="basis"
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Cyan area chart with bottom aligned legend and axis label
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

<div>
  <div className="area-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Area chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      legendPosition="bottom"
      height={250}
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50,
      }}
      maxDomain={{y: 9}}
      themeColor={ChartThemeColor.cyan}
      width={650}
    >
      <ChartAxis label="Years"/>
      <ChartAxis dependentAxis showGrid/>
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: '2015', y: 3 },
            { name: 'Cats', x: '2016', y: 4 },
            { name: 'Cats', x: '2017', y: 8 },
            { name: 'Cats', x: '2018', y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="basis"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="basis"
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color (unorderd) chart with bottom-left aligned legend and responsive container
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode

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
        <div className="area-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
            containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
            legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
            legendPosition="bottom-left"
            height={225}
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
              <ChartArea
                data={[
                  { name: 'Cats', x: '2015', y: 3 },
                  { name: 'Cats', x: '2016', y: 4 },
                  { name: 'Cats', x: '2017', y: 8 },
                  { name: 'Cats', x: '2018', y: 6 }
                ]}
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 3 },
                  { name: 'Dogs', x: '2017', y: 4 },
                  { name: 'Dogs', x: '2018', y: 5 },
                  { name: 'Dogs', x: '2019', y: 6 }
                ]}
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: '2015', y: 1 },
                  { name: 'Birds', x: '2016', y: 2 },
                  { name: 'Birds', x: '2017', y: 3 },
                  { name: 'Birds', x: '2018', y: 2 },
                  { name: 'Birds', x: '2019', y: 4 }
                ]}
                interpolation="basis"
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

## Multi-color chart with threshold indicators and responsive container

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
  ChartThemeVariant
} from '@patternfly/react-charts';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    const itemsPerRow = width > 650 ? 4 : 2;

    return (
      <div ref={this.containerRef}>
        <div className="area-chart-threshold-bottom-responsive">
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
                    symbol: { fill: ChartThemeColor.blue, type: 'threshold' }
                  },
                  {
                    name: 'Birds Threshold',
                    symbol: { fill: ChartThemeColor.orange, type: 'threshold' }
                  }
                ]}
                itemsPerRow={itemsPerRow}
              />
            }
            height={250}
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
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: 1, y: 2 },
                  { name: 'Birds', x: 2, y: 3 },
                  { name: 'Birds', x: 3, y: 4 },
                  { name: 'Birds', x: 4, y: 5 },
                  { name: 'Birds', x: 5, y: 6 }
                ]}
                interpolation="basis"
              />
              <ChartThreshold
                data={[
                  { name: 'Cats Threshold', x: 0, y: 4 },
                  { name: 'Cats Threshold', x: 3, y: 4 },
                  { name: 'Cats Threshold', x: 3, y: 6 },
                  { name: 'Cats Threshold', x: 5, y: 6 }
                ]}
                themeColor={ChartThemeColor.blue}
                themeVariant={ChartThemeVariant.light}
              />
              <ChartThreshold
                data={[
                  { name: 'Birds Threshold', x: 0, y: 2 },
                  { name: 'Birds Threshold', x: 2, y: 2 },
                  { name: 'Birds Threshold', x: 2, y: 3 },
                  { name: 'Birds Threshold', x: 5, y: 3 }
                ]}
                themeColor={ChartThemeColor.orange}
                themeVariant={ChartThemeVariant.light}
              />
            </ChartGroup>
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
 - For `ChartGroup` props, see <a href="https://formidable.com/open-source/victory/docs/victory-group" target="_blank">VictoryGroup</a>
 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartVoronoiContainer` props, see <a href="https://formidable.com/open-source/victory/docs/victory-voronoi-container" target="_blank">VictoryVoronoiContainer</a>
 