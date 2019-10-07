---
title: 'Line'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartAxis', 'ChartGroup', 'ChartLegend', 'ChartLine', 'ChartVoronoiContainer']
---

import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';
import './chart-line.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a line chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/line-chart)

```js title=Simple-line-chart-with-right-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="line-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Line chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      maxDomain={{y: 10}}
      minDomain={{y: 0}}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={600}
    >
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: '2015', y: 1 },
            { name: 'Cats', x: '2016', y: 2 },
            { name: 'Cats', x: '2017', y: 5 },
            { name: 'Cats', x: '2018', y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 1 },
            { name: 'Dogs', x: '2017', y: 7 },
            { name: 'Dogs', x: '2018', y: 4 }
          ]}
          style={{
            data: {
              strokeDasharray: '3,3'
            }
          }}
        />
        <ChartLine
          data={[
            { name: 'Birds', x: '2015', y: 3 },
            { name: 'Birds', x: '2016', y: 4 },
            { name: 'Birds', x: '2017', y: 9 },
            { name: 'Birds', x: '2018', y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Mice', x: '2015', y: 3 },
            { name: 'Mice', x: '2016', y: 3 },
            { name: 'Mice', x: '2017', y: 8 },
            { name: 'Mice', x: '2018', y: 7 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

```js title=Green-line-chart-with-right-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="line-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Line chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      maxDomain={{y: 10}}
      minDomain={{y: 0}}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      themeColor={ChartThemeColor.green}
      width={450}
    >
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: '2015', y: 1 },
            { name: 'Cats', x: '2016', y: 2 },
            { name: 'Cats', x: '2017', y: 5 },
            { name: 'Cats', x: '2018', y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 1 },
            { name: 'Dogs', x: '2017', y: 7 },
            { name: 'Dogs', x: '2018', y: 4 }
          ]}
          style={{
            data: {
              strokeDasharray: '3,3'
            }
          }}
        />
        <ChartLine
          data={[
            { name: 'Birds', x: '2015', y: 3 },
            { name: 'Birds', x: '2016', y: 4 },
            { name: 'Birds', x: '2017', y: 9 },
            { name: 'Birds', x: '2018', y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Mice', x: '2015', y: 3 },
            { name: 'Mice', x: '2016', y: 3 },
            { name: 'Mice', x: '2017', y: 8 },
            { name: 'Mice', x: '2018', y: 7 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color (unorderd) line chart with bottom-left aligned legend and responsive container
This demonstrates zoom for the x axis only
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';

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
        <div className="line-chart-legend-bottom-responsive">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
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
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
           >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Cats', x: '2015', y: 1 },
                  { name: 'Cats', x: '2016', y: 2 },
                  { name: 'Cats', x: '2017', y: 5 },
                  { name: 'Cats', x: '2018', y: 3 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 1 },
                  { name: 'Dogs', x: '2017', y: 7 },
                  { name: 'Dogs', x: '2018', y: 4 }
                ]}
                style={{
                  data: {
                    strokeDasharray: '3,3'
                  }
                }}
              />
              <ChartLine
                data={[
                  { name: 'Birds', x: '2015', y: 3 },
                  { name: 'Birds', x: '2016', y: 4 },
                  { name: 'Birds', x: '2017', y: 9 },
                  { name: 'Birds', x: '2018', y: 5 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Mice', x: '2015', y: 3 },
                  { name: 'Mice', x: '2016', y: 3 },
                  { name: 'Mice', x: '2017', y: 8 },
                  { name: 'Mice', x: '2018', y: 7 }
                ]}
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
- Use `ChartGroup` to apply color scales and other properties to multiple components
- Themes are inherited, so a default theme may override `themeColor` for a child component
- The `theme` and `themeColor` props should be applied at the most top level component

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see <a href="https://formidable.com/open-source/victory/docs/victory-chart" target="_blank">VictoryChart</a>
 - For `ChartAxis` props, see <a href="https://formidable.com/open-source/victory/docs/victory-axis" target="_blank">VictoryAxis</a>
 - For `ChartGroup` props, see <a href="https://formidable.com/open-source/victory/docs/victory-group" target="_blank">VictoryGroup</a>
 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartLine` props, see <a href="https://formidable.com/open-source/victory/docs/victory-line" target="_blank">Victoryline</a>
 - For `ChartVoronoiContainer` props, see <a href="https://formidable.com/open-source/victory/docs/victory-voronoi-container" target="_blank">VictoryVoronoiContainer</a>
 - For `VictoryZoomContainer` props, see <a href="https://formidable.com/open-source/victory/docs/victory-zoom-container" target="_blank">VictoryZoomContainer</a>
