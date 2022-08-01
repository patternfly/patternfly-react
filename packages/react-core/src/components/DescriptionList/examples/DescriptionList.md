---
id: 'Description list'
section: components
cssPrefix: 'pf-c-description-list'
propComponents:
  [
    'DescriptionList',
    'DescriptionListDescription',
    'DescriptionListGroup',
    'DescriptionListTerm',
    'DescriptionListTermHelpText',
    'DescriptionListTermHelpTextButton',
    'Popover',
    'Card'
  ]
---

import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Popover, Checkbox, Card } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BookIcon from '@patternfly/react-icons/dist/esm/icons/book-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';
import FlagIcon from '@patternfly/react-icons/dist/esm/icons/flag-icon';

## Examples

### Basic

```ts file='./DescriptionListBasic.tsx'
```

### Term help text

```ts file='./DescriptionListWithTermHelpText.tsx'
```

### Default 2 col

```ts file='./DescriptionListDefaultTwoCol.tsx'
```

### Default 3 col on lg

```ts file='./DescriptionListDefaultThreeColLg.tsx'
```

### Horizontal

```ts file='./DescriptionListHorizontal.tsx'
```

### Horizontal using custom term width modifier

```ts file='./DescriptionListHorizontalCustomTermWidth.tsx'
```

### Horizontal 2 col

```ts file='./DescriptionListHorizontalTwoCol.tsx'
```

### Horizontal 3 col on lg

```ts file='./DescriptionListHorizontalThreeColLg.tsx'
```

### Compact

```ts file='./DescriptionListCompact.tsx'
```

### Compact horizontal

```ts file='./DescriptionListCompactHorizontal.tsx'
```

### Fluid horizontal

```ts file='./DescriptionListFluidHorizontal.tsx'
```

### Column fill

```ts file='./DescriptionListColumnFill.tsx'
```

### Display size

```ts file='./DescriptionListWithDisplaySize.tsx'
```

## Responsive column definitions

### Default responsive columns

```ts file='./DescriptionListDefaultResponsiveColumns.tsx'
```

### Horizontal responsive columns

```ts file='./DescriptionListHorizontalResponsiveColumns.tsx'
```

### Responsive horizontal, vertical group layout

```ts file='./DescriptionListResponsiveHoriVertGroup.tsx'
```

## Auto-column-width

### Default auto column width

```ts file='./DescriptionListDefaultAutoColumn.tsx'
```

### Horizontal auto column width

```ts file='./DescriptionListHorizontalAutoColumn.tsx'
```

## Inline grid

### Default inline grid

```ts file='./DescriptionListDefaultInlineGrid.tsx'
```

## Card variants

A [card component](/components/card) can be used in place of a description list group.

### Description list with card

```ts file='./DescriptionListWithCard.tsx'
```

### Description list with display size and card

```ts file='./DescriptionListDisplaySizeAndCard.tsx'
```

### Display size with card, three column on large breakpoint

```ts file='./DescriptionListDisplaySizeAndCardThreeColumn.tsx'
```

### Display size with card, horizontal, modified term width

```ts file='./DescriptionListDisplaySizeAndCardHorizontalTermWidth.tsx'
```

## Auto fit

### Auto-fit basic

```ts file='./DescriptionListAutoFitBasic.tsx'
```

### Auto-fit, min width modified grid template columns

```ts file='./DescriptionListAutoFitMinWidthModified.tsx'
```

### Auto-fit, min width modified, responsive grid template columns

```ts file='./DescriptionListAutoFitMinWidthResponsive.tsx'
```

## With icons

### Icons on terms

```ts file='./DescriptionListIconsOnTerms.tsx'
```
