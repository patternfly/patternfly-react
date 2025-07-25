---
id: Tooltips
section: charts
propComponents: ['ChartTooltip']
hideDarkMode: true
---

import { useRef, useState, useEffect } from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartContainer,
  ChartCursorFlyout,
  ChartCursorTooltip,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLegendTooltipContent,
  ChartLegendTooltipLabel,
  ChartLine,
  ChartPie,
  ChartPoint,
  ChartStack,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer,
  getCustomTheme
} from '@patternfly/react-charts/victory';

<!-- Workaround for documentation-framework issue https://github.com/patternfly/patternfly-react/issues/11455
import './chart-tooltip.css';
-->

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Voronoi container

This demonstrates how to use a voronoi container to display tooltips.

```ts file = "ChartTooltipVoronoi.tsx"

```

### Combined cursor and voronoi containers

This demonstrates how to combine cursor and voronoi containers to display tooltips along with a vertical cursor.

```ts file = "ChartTooltipCombinedCursorVoronoi.tsx"

```

### Embedded legend

This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedLegend.tsx"

```

### Embedded HTML

This demonstrates how to embed HTML within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedHtml.tsx"

```

### Embedded legend with custom font size

This demonstrates how to embed a legend within a tooltip, but with a custom font size. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedCustomFontSize.tsx"

```

### Data label

This demonstrates an alternate way of applying tooltips using data labels.

```ts file = "ChartTooltipDataLabel.tsx"

```

### Fixed tooltip
This demonstrates how to adjust the tooltip position and label radius
```ts file = "ChartTooltipFixed.tsx"

```

### Legend

This demonstrates an approach for applying tooltips to a legend using a custom legend label component.

```ts file = "ChartTooltipLegend.tsx"

```

### Left aligned

This demonstrates how to customize tooltip label alignment using theme properties.

```ts file = "ChartTooltipLeftAligned.tsx"

```

### CSS overflow

This demonstrates an alternate way of applying tooltips using CSS overflow instead of <code>constrainToVisibleArea</code>.

```ts file = "ChartTooltipCssOverflow.tsx"

```

### Wrapped chart

This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component.

```ts file = "ChartTooltipWrappedChart.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
