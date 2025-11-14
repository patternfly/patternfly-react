---
id: Donut utilization chart
section: components
subsection: charts
propComponents: [
  'ChartDonutThreshold',
  'ChartDonutUtilization'
]
hideDarkMode: true
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';
import {  useEffect, useState } from 'react';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Donut utilization examples
### Basic
```ts file = "ChartUtilBasic.tsx"

```

### Right aligned legend
```ts file = "ChartUtilRightAlignedLegend.tsx"

```

### Inverted with right aligned legend
```ts file = "ChartUtilInvertedRightLegend.tsx"

```

### Right aligned vertical legend
```ts file = "ChartUtilRightVerticalLegend.tsx"

```

### Bottom aligned legend
```ts file = "ChartUtilBottomAlignedLegend.tsx"

```

### Small
```ts file = "ChartUtilSmall.tsx"

```

### Small with right aligned legend
```ts file = "ChartUtilSmallRightLegend.tsx"

```

### Small with bottom aligned subtitle

This is a small donut utilization chart with bottom aligned legend and right aligned subtitle.

```ts file = "ChartUtilSmallBottomSubtitle.tsx"

```

### Small with right aligned subtitle
```ts file = "ChartUtilSmallRightSubtitle.tsx"

```

## Donut utilization threshold examples
### Static thresholds
```ts file = "ChartUtilStatic.tsx"

```

### Static thresholds with right aligned legend
```ts file = "ChartUtilStaticRightLegend.tsx"

```

### Inverted static thresholds with right aligned legend
```ts file = "ChartUtilInvertedStatic.tsx"

```

### Static thresholds with custom legend
```ts file = "ChartUtilStaticCustomLegend.tsx"

```

### Static thresholds with bottom aligned legend
```ts file = "ChartUtilStaticBottomLegend.tsx"

```

### Small with static thresholds
```ts file = "ChartUtilSmallStatic.tsx"

```

### Small with static thresholds and right aligned legend
```ts file = "ChartUtilSmallStaticRightLegend.tsx"

```

### Small with subtitle

This is a small donut utilization chart with static thresholds with right aligned legend and bottom aligned subtitle.

```ts file = "ChartUtilSmallSubtitle.tsx"

```

### Small with thresholds and right aligned subtitle
```ts file = "ChartUtilSmallRightAlignedSubtitle.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
