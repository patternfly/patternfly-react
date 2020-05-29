---
title: 'Area chart'
section: 'charts'
typescript: true
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartGroup',
  'ChartThreshold',
  'ChartVoronoiContainer',
]
hideDarkMode: true
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThreshold, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build an area chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/area-chart)

## Examples
```js title=Basic-with-right-aligned-legend
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

BasicRightAlignedLegend = (
  <div style={{ height: '200px', width: '800px' }}>
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
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="monotoneX"
        />
      </ChartGroup>
    </Chart>
  </div>
)
```

```js title=Cyan-with-bottom-aligned-legend-and-axis-label
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

class BottomAlignedLegend extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("cursor", "voronoi");

    return (
      <div>
        <p>This demonstrates how to combine cursor and voronoi containers to display tooltips along with a cursor</p>
        <div style={{ height: '250px', width: '650px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Area chart example"
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
                interpolation="monotoneX"
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 3 },
                  { name: 'Dogs', x: '2017', y: 4 },
                  { name: 'Dogs', x: '2018', y: 5 },
                  { name: 'Dogs', x: '2019', y: 6 }
                ]}
                interpolation="monotoneX"
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: '2015', y: 1 },
                  { name: 'Birds', x: '2016', y: 2 },
                  { name: 'Birds', x: '2017', y: 3 },
                  { name: 'Birds', x: '2018', y: 2 },
                  { name: 'Birds', x: '2019', y: 4 }
                ]}
                interpolation="monotoneX"
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
```

```js title=Multi--color-(unordered)-bottom--left-aligned-legend-and-responsive-container
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

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
      <div ref={this.containerRef} style={{ height: '225px' }}>
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
              interpolation="monotoneX"
            />
            <ChartArea
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 3 },
                { name: 'Dogs', x: '2017', y: 4 },
                { name: 'Dogs', x: '2018', y: 5 },
                { name: 'Dogs', x: '2019', y: 6 }
              ]}
              interpolation="monotoneX"
            />
            <ChartArea
              data={[
                { name: 'Birds', x: '2015', y: 1 },
                { name: 'Birds', x: '2016', y: 2 },
                { name: 'Birds', x: '2017', y: 3 },
                { name: 'Birds', x: '2018', y: 2 },
                { name: 'Birds', x: '2019', y: 4 }
              ]}
              interpolation="monotoneX"
            />
          </ChartGroup>
        </Chart>
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
 - For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
 - For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
