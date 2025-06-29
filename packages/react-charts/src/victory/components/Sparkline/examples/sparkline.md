---
id: Sparkline chart
section: charts
propComponents: [
  'ChartArea',
  'ChartContainer',
  'ChartGroup',
  'ChartLabel',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import { useEffect } from 'react';

<!-- Workaround for documentation-framework issue https://github.com/patternfly/patternfly-react/issues/11455
import './sparkline.css';
-->

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic
```ts file = "SparklineBasic.tsx"

```

### Green

This demonstrates an alternate way of applying tooltips using CSS overflow

```ts file = "SparklineGreen.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- Use `ChartGroup` in place of `Chart` when an axis and labels are not desired
- Themes are inherited, so a default theme may override `themeColor` for a child component
- The `theme` and `themeColor` props should be applied at the most top level component

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartLabel` props, see [VictoryLabel](https://formidable.com/open-source/victory/docs/victory-label)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
