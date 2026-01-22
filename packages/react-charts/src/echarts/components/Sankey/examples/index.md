---
id: Sankey chart
section: components
subsection: charts
propComponents: [
  {
    component: 'Charts',
    source: 'ECharts-docs'
  },
  {
    component: 'ChartsOptionProps',
    source: 'ECharts-docs'
  },
  {
    component: 'TooltipOptionProps',
    source: 'ECharts-docs'
  }
]
beta: true
---

import { FunctionComponent, useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { SankeyChart } from 'echarts/charts';
import { TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { getComputedStyleValue, getCustomTheme, Charts, ThemeColor } from '@patternfly/react-charts/echarts';

import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Apache ECharts](https://echarts.apache.org/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic

```ts file="./Basic.tsx"

```

### Multi-color (unordered) with responsive container

```ts file="./Responsive.tsx"

```

### Teal color with responsive container and toolbox

This demonstrates how to import `ToolboxComponent` for use with ECharts

```ts file="./Toolbox.tsx"

```

### Custom theme
This demonstrates how to create a color scale via a custom theme, which may be applied to multiple charts.

```ts file="./Theme.tsx"

```

### Skeleton

```ts file="./Skeleton.tsx"

```
