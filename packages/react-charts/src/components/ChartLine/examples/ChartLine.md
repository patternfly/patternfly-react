---
title: 'Line chart'
section: 'charts'
typescript: true
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartGroup',
  'ChartLine',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a line chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/line-chart)

## Examples
```js title=Basic-with-right-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';

BasicRightAligned = (
  <div style={{ height: '250px', width: '600px' }}>
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
)
```

```js title=Green-with-bottom-aligned-legend
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';

class BottomAlignedLegend extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("cursor", "voronoi");

    return (
      <div>
        <p>This demonstrates how to combine cursor and voronoi containers to display tooltips along with a cursor</p>
        <div style={{ height: '275px', width: '450px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={
              <CursorVoronoiContainer
                constrainToVisibleArea
                cursorDimension="x"
                labels={({ datum }) => `${datum.name}: ${datum.y}`}
                mouseFollowTooltips
                voronoiDimension="x"
                voronoiPadding={50}
              />
            }
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
    );
  }
}
```

```js title=Multi--color-(unordered)-with-responsive-container
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
        <p>This demonstrates zoom for the x axis only</p>
        <div style={{ height: '275px' }}>
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

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
 - For `ChartLine` props, see [Victoryline](https://formidable.com/open-source/victory/docs/victory-line)
 - For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
 - For `VictoryZoomContainer` props, see [VictoryZoomContainerline](https://formidable.com/open-source/victory/docs/victory-zoom-container)
