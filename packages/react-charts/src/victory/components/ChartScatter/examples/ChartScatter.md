---
id: Scatter chart
section: charts
propComponents: [
'Chart',
'ChartArea',
'ChartAxis',
'ChartGroup',
'ChartLine',
'ChartScatter',
'ChartVoronoiContainer'
]
hideDarkMode: true
---

import {
Chart,
ChartArea,
ChartAxis,
ChartGroup,
ChartLine,
ChartScatter,
ChartThemeColor,
ChartVoronoiContainer,
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useEffect, useRef, useState } from 'react';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic
```ts file = "ChartScatterBasic.tsx"

```

### Line chart

This demonstrates how to add interactive data points to a line chart.

```ts file = "ChartScatterLineChart.tsx"

```

### Area chart

This demonstrates how to add interactive data points to an area chart.

```ts file = "ChartScatterAreaChart.tsx"

```

## Documentation

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLine` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
