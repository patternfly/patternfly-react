---
id: Legends
section: components
subsection: charts
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

import { cloneElement, useEffect, useRef, useState } from 'react';
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

```ts file = "ChartLegendTooltips.tsx"

```

### Legend links

This demonstrates an approach for applying links to a legend using a custom label component. These links are keyboard navigable.

```ts file = "ChartLegendLinks.tsx"

```

### Legend layout

This demonstrates an approach for applying a different legend layout and styles using a custom label component.

```ts file = "ChartLegendLayout.tsx"

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
