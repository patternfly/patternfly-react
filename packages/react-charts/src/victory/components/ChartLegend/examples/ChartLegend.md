---
id: Legends
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBullet',
  'ChartDonut',
  'ChartGroup',
  'ChartLabel',
  'ChartLegend',
  'ChartLegendTooltip',
  'ChartLine',
  'ChartPie',
  'ChartScatter',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { cloneElement, createRef, useEffect, useRef, useState } from 'react';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartContainer,
  ChartDonut,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLine,
  ChartPie,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend
```ts file = "ChartLegendBasicRightLegend.tsx"

```

### Bottom aligned legend
```ts file = "ChartLegendBottomAlignedLegend.tsx"

```

### Responsive bottom-left aligned legend

This demonstrates a responsive legend which wraps when items are wider than its container.

```ts file = "ChartLegendResponsiveBottomLeft.tsx"

```

### Standalone legend

This demonstrates a standalone legend vs. using the `legendData` property.

```ts file = "ChartLegendStandalone.tsx"

```

### Interactive legend

This demonstrates how to add an interactive legend using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```ts file = "ChartLegendInteractive.tsx"

```

### Interactive legend with pie chart

This demonstrates how to add an interactive legend to a pie chart using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```ts file = "ChartLegendInteractivePieChart.tsx"

```

### Legend tooltips

This demonstrates an approach for applying tooltips to a legend using a custom label component. These tooltips are keyboard navigable.

```js
import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';

class TooltipPieChart extends React.Component {
  constructor(props) {
    super(props);
    
    // Custom legend label component
    // Note: Tooltip wraps children with a div tag, so we use a reference to ChartLabel instead
    this.LegendLabel = ({datum, ...rest}) => {
      const ref = createRef();
      return (
        <g ref={ref}>
          <ChartLabel {...rest} />
          <Tooltip content={datum.name} enableFlip triggerRef={ref} />
        </g>
      );
    }

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div style={{ height: '275px', width: '300px' }}>
        <ChartPie
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={275}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendComponent={this.getLegend([
            { name: 'Cats: 35' }, 
            { name: 'Dogs: 55' }, 
            { name: 'Birds: 10' }
          ])}
          legendPosition="bottom"
          name="chart7"
          padding={{
            bottom: 65,
            left: 20,
            right: 20,
            top: 20
          }}
          themeColor={ChartThemeColor.multiOrdered}
          width={300}
        />
      </div>
    );
  }
}
```

### Legend links

This demonstrates an approach for applying links to a legend using a custom label component. These links are keyboard navigable.

```js
import { Chart, ChartAxis, ChartGroup, ChartLabel, ChartLegend, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

class LegendLinkPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label component
    this.LegendLabel = ({datum, ...rest}) => (
      <a href="#" aria-label={`Learn more about ${rest.text}`}>
        <ChartLabel {...rest} />
      </a>
    );

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div role="article" aria-describedby="withLinks-desc" aria-labelledby="withLinks-title" style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets per year"
          ariaTitle="Line chart example"
          containerComponent={<ChartVoronoiContainer containerId="withLinks" role="figure" labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          legendComponent={this.getLegend([
            { name: 'Cats' }, 
            { name: 'Dogs' }, 
            { name: 'Birds' },
            { name: 'Mice'}
          ])}
          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          legendPosition="bottom"
          height={275}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
          name="chart8"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50, 
            top: 50
          }}
          width={450}
        >
          <ChartAxis tickValues={[2, 3, 4]} tickLabelComponent={<ChartLabel ariaLabel="X axis - the year polled" />} />
          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} tickLabelComponent={<ChartLabel ariaLabel="Y axis - average number of pets" />} />
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
    );
  }
}
```

### Legend layout

This demonstrates an approach for applying a different legend layout and styles using a custom label component.

```js
import { ChartLabel, ChartLegend, ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';

class LegendLayoutPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label component
    this.LegendLabel = ({values, ...rest}) => (
      <ChartLabel
        {...rest}
        style={[{ fontWeight: 700 }, {}]}
        text={[values[rest.index], rest.text]}
      />
    );

    // Custom legend component
    this.getLegend = (legendData, values) => (
      <ChartLegend
        data={legendData}
        gutter={25}
        itemsPerRow={2}
        labelComponent={<this.LegendLabel dy={10} lineHeight={1.5} values={values} />}
        rowGutter={20}
      />
    );
  }

  render() {
    return (
      <div style={{ height: '230px', width: '375px' }}>
        <ChartDonut
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={230}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendComponent={this.getLegend([
            { name: 'Cats' }, 
            { name: 'Dogs' }, 
            { name: 'Birds' }
          ], [ 35, 55, 10 ])}
          legendOrientation="vertical"
          legendPosition="right"
          name="chart9"
          padding={{
            bottom: 20,
            left: 20,
            right: 140, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="Pets"
          title="100"
          themeColor={ChartThemeColor.multiOrdered}
          width={375}
        />
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLabel` props, see [VictoryLabel](https://formidable.com/open-source/victory/docs/victory-label)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartLine` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
