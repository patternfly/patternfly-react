---
id: Patterns
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartDonut',
  'ChartDonutThreshold',
  'ChartDonutUtilization',
  'ChartGroup',
  'ChartLegend',
  'ChartLegendTooltip',
  'ChartPie',
  'ChartScatter',
  'ChartStack',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { cloneElement, createRef } from 'react';
import { useEffect, useRef, useState } from 'react';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartPie,
  ChartScatter,
  ChartStack,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic pie chart
```js
import { ChartPie } from '@patternfly/react-charts/victory';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    hasPatterns
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart1"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    width={350}
  />
</div>
```

### Bar chart
```js
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom"
    hasPatterns
    height={275}
    name="chart2"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.purple}
    width={450}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartGroup offset={11}>
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
      <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
      <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
      <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
    </ChartGroup>
  </Chart>
</div>
```

### Stack chart
```js
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '250px', width: '600px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Stack chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendOrientation="vertical"
    legendPosition="right"
    hasPatterns
    height={250}
    name="chart3"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.green}
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
```

### Donut chart
```js
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    hasPatterns
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart4"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    subTitle="Pets"
    title="100"
    themeColor={ChartThemeColor.yellow}
    width={350}
  />
</div>
```

### Donut utilization chart

This demonstrates how to hide a pattern for the static, unused portion of the donut utilization chart.

```js
import { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '300px' }}>
  <ChartDonutUtilization 
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 45 }}
    hasPatterns
    height={275}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
    legendPosition="bottom"
    name="chart5"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    subTitle="of 100 GBps"
    title="45%"
    themeColor={ChartThemeColor.green}
    thresholds={[{ value: 60 }, { value: 90 }]}
    width={300}
  />
</div>
```

### Donut utilization chart with thresholds

This demonstrates how to apply patterns to thresholds.

```js
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '675px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    hasPatterns
    height={275}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart6"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    width={675}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
      legendPosition="bottom"
      subTitle="of 100 GBps"
      title="45%"
      themeColor={ChartThemeColor.orange}
    />
  </ChartDonutThreshold>
</div>
```

### Interactive legend with pie chart

This demonstrates how to add an interactive legend to a pie chart using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```ts file = "PatternsInteractivePieChart.tsx"

```

### Interactive legend with area chart

This demonstrates how to add an interactive legend using events such as `onMouseOver`, `onMouseOut`, and `onClick`.

```ts file = "PatternsInteractiveAreaChart.tsx"

```

### Custom pattern visibility

This demonstrates how to omit patterns from pie chart segments.

```ts file = "PatternsCustomVisibility.tsx"

```

### Custom color scale

This demonstrates how to apply a custom color scale to patterns.

```ts file = "PatternsCustomColorScale.tsx"

```

### Custom pattern defs

This demonstrates how to create custom patterns.

```ts file = "PatternsCustomDefs.tsx"

```

### All patterns
```ts file = "PatternsAll.tsx"

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
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
