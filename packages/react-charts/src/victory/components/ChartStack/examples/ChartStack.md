---
id: Stack chart
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartBar',
  'ChartStack',
  'ChartTooltip'
]
hideDarkMode: true
---

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { useEffect, useRef, useState } from 'react';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend
```ts file = "ChartStackBasicRightLegend.tsx"

```

### Horizontal with bottom aligned legend
```ts file = "ChartStackBottomLegend.tsx"

```

### Multi-color (ordered) horizontal with bottom aligned legend

This demonstrates an alternate way of applying tooltips using data labels.

```ts file = "ChartStackMultiColorOrdered.tsx"

```

### Monthly data with responsive container
```ts file = "ChartStackMonthlyResponsive.tsx"

```

### Multi-color (unordered) responsive container

This demonstrates monthly data with a bottom aligned legend and responsiveness for mobile.

```ts file = "ChartStackMultiColorUnordered.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- Themes are inherited, so a default theme may override `themeColor` for a child component
- The `theme` and `themeColor` props should be applied at the most top level component

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
