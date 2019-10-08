---
title: 'Threshold'
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
import './chart-threshold.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Multi-color, area chart with threshold indicators and responsive container

## Examples
```js
import React from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartLegend,
  ChartGroup,
  ChartThreshold,
  ChartThemeColor
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
        <div className="threshold-chart-threshold-bottom-responsive">
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
              />
              <ChartThreshold
                data={[
                  { name: 'Birds Threshold', x: 0, y: 2 },
                  { name: 'Birds Threshold', x: 2, y: 2 },
                  { name: 'Birds Threshold', x: 2, y: 3 },
                  { name: 'Birds Threshold', x: 5, y: 3 }
                ]}
                themeColor={ChartThemeColor.orange}
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
