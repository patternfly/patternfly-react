---
id: Card
section: components
---

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, BellIcon } from '@patternfly/react-icons';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import { Chart, ChartAxis, ChartGroup, ChartVoronoiContainer, ChartStack, ChartBar, ChartTooltip, ChartDonutThreshold, ChartDonutUtilization, ChartArea, ChartContainer, ChartLabel } from '@patternfly/react-charts/victory';
import chart_color_yellow_100 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_100';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import chart_color_red_orange_400 from '@patternfly/react-tokens/dist/esm/chart_color_red_orange_400';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import t_global_text_color_subtle from '@patternfly/react-tokens/dist/esm/t_global_text_color_subtle';
import flex from '@patternfly/react-styles/css/utilities/Flex/flex';
import text from '@patternfly/react-styles/css/utilities/Text/text';
import sizing from '@patternfly/react-styles/css/utilities/Sizing/sizing';
import accessibility from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

## Demos

### Horizontal card grid

The following demo shows how you may use a `<Grid>` within a card for scenarios that require multiple subsections.

```ts file="./examples/Card/CardHorizontalGrid.tsx"

```

### Horizontal split

The following demo shows how you may utilize `<Grid>` to split a card into two halves, one with an image, and one with text content.

```ts file="./examples/Card/CardHorizontalSplit.tsx"

```

### Details card

```ts file="./examples/Card/CardDetails.tsx"

```

### Aggregate status card

```ts file="./examples/Card/CardAggregateStatus.tsx"

```

### Status

```ts file="./examples/Card/CardStatus.tsx"

```

### Status Tabbed

```ts file="./examples/Card/CardStatusTabbed.tsx"

```

### Utilization card 1

```ts file="./examples/Card/CardUtilizationDemo1.tsx"

```

### Utilization card 2

```ts file="./examples/Card/CardUtilizationDemo2.tsx"

```

### Utilization card 3

```ts file="./examples/Card/CardUtilizationDemo3.tsx"

```

### Utilization card 4

```ts file="./examples/Card/CardUtilizationDemo4.tsx"

```

### Nested cards

```ts file="./examples/Card/CardNested.tsx"

```

### With accordion

```ts file="./examples/Card/CardWithAccordion.tsx"

```

### Trend card 1

```ts file="./examples/Card/CardTrendDemo1.tsx"

```

### Trend card 2

```ts file="./examples/Card/CardTrendDemo2.tsx"

```

### Log view

```ts file="./examples/Card/CardLogView.tsx"

```

### Events view

```ts file="./examples/Card/CardEventsView.tsx"

```
