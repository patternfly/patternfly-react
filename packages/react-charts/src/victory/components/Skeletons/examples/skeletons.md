---
id: Skeletons
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBoxPlot',
  'ChartBullet',
  'ChartDonut',
  'ChartDonutThreshold',
  'ChartDonutUtilization',
  'ChartLegend',
  'ChartLine',
  'ChartGroup',
  'ChartPie',
  'ChartScatter',
  'ChartStack',
  'ChartThreshold',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { useState } from 'react';
import { Chart, ChartArea, ChartAxis, ChartBar, ChartBoxPlot, ChartBullet, ChartDonut, ChartDonutThreshold, ChartDonutUtilization, ChartLegend, ChartLine, ChartGroup, ChartPie, ChartScatter, ChartStack, ChartThemeColor, ChartThreshold, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Area chart
```ts file = "SkeletonsAreaChart.tsx"

```

### Bar chart
```ts file = "SkeletonsBarChart.tsx"

```

### Box plot chart
```ts file = "SkeletonsBoxPlotChart.tsx"

```

### Bullet chart
```ts file = "SkeletonsBulletChart.tsx"

```

### Donut chart
```ts file = "SkeletonsDonutChart.tsx"

```

### Donut utilization chart
```ts file = "SkeletonsDonutUtilizationChart.tsx"

```

### Donut utilization threshold
```ts file = "SkeletonsDonutUtilizationThreshold.tsx"

```

### Line chart
```ts file = "SkeletonsLineChart.tsx"

```

### Pie chart
```ts file = "SkeletonsPieChart.tsx"

```

### Scatter chart
```ts file = "SkeletonsScatterChart.tsx"

```

### Stack chart
```ts file = "SkeletonsStackChart.tsx"

```

### Threshold chart
```ts file = "SkeletonsThresholdChart.tsx"

```

## Documentation
### Tips
- It's best for skeletons not to include interactions such as tooltips, cursors, interactive legends, etc.
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartBoxPlot` props, see [VictoryBoxPlot](https://formidable.com/open-source/victory/docs/victory-box-plot)
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartLine` props, see [Victoryline](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
