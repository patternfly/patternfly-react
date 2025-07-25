---
id: Colors for charts
section: charts
hideDarkMode: true
---

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartGroup,
  ChartLegend,
  ChartLine,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer,
  getCustomTheme
} from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Green

This demonstrates how to apply basic theme colors.

```ts file = "ChartThemeGreen.tsx"

```

### Multi-color (ordered)

This demonstrates how to apply theme colors for ordered charts like bar, donut, pie, and stack.

```ts file = "ChartThemeMultiColorOrdered.tsx"

```

### Multi color (unordered)

This demonstrates how to apply theme colors for unordered charts like area, line, and sparkline.

```ts file = "ChartThemeMultiColorUnordered.tsx"

```

### Custom color scale

This demonstrates an alternate way of applying a custom color scale and fill colors to individual charts.

```ts file = "ChartThemeCustomColorScale.tsx"

```

### Custom stroke color

This demonstrates an alternate way of applying custom stroke and fill colors to a threshold chart.

```ts file = "ChartThemeCustomStrokeColor.tsx"

```

### Custom theme

This demonstrates custom theme properties, which may be applied across multiple charts.

```ts file = "ChartThemeCustomTheme.tsx"

```

## Documentation

### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the components used in the examples above, Victory pass-thru props are also documented here:

- For theme props, see [VictoryTheme](https://formidable.com/open-source/victory/docs/victory-theme)
