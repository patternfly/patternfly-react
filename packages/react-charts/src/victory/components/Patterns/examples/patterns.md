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
```ts file = "PatternsBasicPieChart.tsx"

```

### Bar chart
```ts file = "PatternsBarChart.tsx"

```

### Stack chart
```ts file = "PatternsStackChart.tsx"

```

### Donut chart
```ts file = "PatternsDonutChart.tsx"

```

### Donut utilization chart

This demonstrates how to hide a pattern for the static, unused portion of the donut utilization chart.

```ts file = "PatternsDonutUtilizationChart.tsx"

```

### Donut utilization chart with thresholds

This demonstrates how to apply patterns to thresholds.

```ts file = "PatternsDonutUtilizationThreshold.tsx"

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
