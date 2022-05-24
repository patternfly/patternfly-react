---
id: Threshold chart
section: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartGroup',
  'ChartThreshold',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLegend,
  ChartThreshold,
  ChartThemeColor,
  ChartVoronoiContainer,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';


## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library,
  along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Multi-color (unordered) with responsive container
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

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
 - For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
 - For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
 - For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
