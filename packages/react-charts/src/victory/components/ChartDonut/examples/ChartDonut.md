---
id: Donut chart
section: components
subsection: charts
propComponents: [
  'ChartDonut'
]
hideDarkMode: true
---

import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts/victory';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic
```ts file = "ChartDonutBasic.tsx"

```

### Right aligned legend
```ts file = "ChartDonutRightAlignedLegend.tsx"

```

### Multi-color (ordered) with right aligned legend
```ts file = "ChartDonutMultiColor.tsx"

```

### Bottom aligned legend
```ts file = "ChartDonutBottomAlignedLegend.tsx"

```

### Small
```ts file = "ChartDonutSmall.tsx"

```

### Small with right aligned legend
```ts file = "ChartDonutSmallRightLegend.tsx"

```

### Small with bottom aligned subtitle
```ts file = "ChartDonutSmallBottomSubtitle.tsx"

```

### Small with right aligned subtitle
```ts file = "ChartDonutSmallRightSubtitle.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
