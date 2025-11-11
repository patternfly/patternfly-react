---
id: Area chart
section: components
subsection: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartGroup',
  'ChartThreshold',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---
import { createRef } from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThreshold, ChartThemeColor, ChartLegendTooltip, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend

```ts file = "ChartAreaRightAlignedLegend.tsx"

```

### Teal with bottom aligned legend and axis label

This demonstrates how to combine cursor and voronoi containers to display tooltips along with a cursor.

```ts file = "ChartAreaBottomLegend.tsx"

```

### Multi-color (unordered) bottom-left aligned legend and responsive container
```ts file = "ChartAreaMultiColorResponsive.tsx"

```

## Documentation
### Tips
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
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
