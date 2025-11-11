---
id: Bar chart
section: components
subsection: charts
propComponents: ['Chart', 'ChartAxis', 'ChartBar', 'ChartGroup', 'ChartLabel', 'ChartVoronoiContainer']
hideDarkMode: true
---

import { Chart, ChartAxis, ChartBar, ChartGroup, ChartLabel, ChartThemeColor, ChartTooltip, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import { VictoryZoomContainer } from 'victory-zoom-container';
import t_global_color_status_danger_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_danger_100';
import t_global_color_status_info_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_info_100';
import t_global_color_status_warning_100 from '@patternfly/react-tokens/dist/esm/t_global_color_status_warning_100';

## Introduction

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples

### Basic with right aligned legend

```ts file = "ChartBarRightAlignedLegend.tsx"

```

### Purple with bottom aligned legend

This demonstrates an alternate way of applying tooltips using data labels.

```ts file = "ChartBarBottomLegend.tsx"
```

### Multi-color (ordered) with bottom-left aligned legend

This demonstrates zoom for both the x and y axis.

```ts file = "ChartBarMultiColorOrdered.tsx"

```

### Single with right aligned legend

```ts file = "ChartBarSingleLegend.tsx"
```

### Alerts timeline

A gnatt-like chart using `y` and `y0` data properties for alert start/end dates

```ts file = "ChartBarAlertsTimeline.tsx"

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
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
