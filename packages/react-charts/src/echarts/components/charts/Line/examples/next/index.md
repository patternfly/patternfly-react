---
id: Line chart
section: charts
propComponents: [
  'PatternflyEChartș',
  'EChartsOptionPropș',
  'TooltipOptionPropș'
]
beta: true
---

import * as echarts from 'echarts';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { getComputedStyleValue, getCustomTheme, PatternflyECharts, ThemeColor } from '@patternfly/react-charts/echarts';

import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Apache ECharts](https://echarts.apache.org/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend 

```ts file="./Basic.tsx"

```

### Green with responsive container and bottom aligned legend
```ts file="./Responsive.tsx"

```

### Custom theme
This demonstrates how to create a color scale via a custom theme, which may be applied to multiple charts.

```ts file="./Theme.tsx"

```

### Skeleton

```ts file="./Skeleton.tsx"

```
