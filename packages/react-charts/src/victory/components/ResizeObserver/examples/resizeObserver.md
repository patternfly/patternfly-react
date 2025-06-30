---
id: Resize observer
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBullet',
  'ChartGroup',
  'ChartLegend',
  'ChartStack',
  'ChartThreshold',
  'ChartTooltip',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { useEffect, useRef, useState } from 'react';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartGroup,
  ChartLegend,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import '@patternfly/patternfly/patternfly-charts.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Charts scale within the parent container by default, so the `width` and `height` props do not actually determine the
width and height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number
of pixels will depend on the size of the container the chart is rendered into. In order to maintain the aspect ratio,
the parent container may be set to the same height and/or width.

## Examples
### Responsive bullet chart with wrapping legend

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. The `legendAllowWrap` prop is used to automatically wrap legend items.

```ts file = "ResizeObserverResponsiveBullet.tsx"

```

### Responsive threshold chart with wrapping legend

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. In this example, `itemsPerRow` is used to wrap legend items manually.

```ts file = "ResizeObserverResponsiveThreshold.tsx"

```

### Responsive stack chart with reducible axis tick labels

This demonstrates how to use a `ResizeObserver` to update the chart's width, while its height remains fixed. In this example, `fixLabelOverlap` is used to dynamically adjust the number of axis tick labels.

```ts file = "ResizeObserverResponsiveStack.tsx"

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
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
- For `ChartLine` props, see [Victoryline](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
- For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
