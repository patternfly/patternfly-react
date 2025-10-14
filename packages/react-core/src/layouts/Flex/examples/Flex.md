---
id: Flex
cssPrefix: pf-v6-l-flex
section: layouts
propComponents: ['Flex', 'FlexItem']
---

import './flex.css';

## Flex basics

### Basic

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Nesting

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Nested with items

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <Flex>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Spacing

The flex layout provides two ways of spacing its direct children.

- [Spacing system](#flex-spacing)
  - The spacing system applies a margin between the flex layout's direct children to create space between items along the main axis only. The benefit of the spacing system is that it allows for variable spacing between direct children. Use the spacing system when individual flex items along the main axis require a different spacer than sibling items.
- [Gap spacing](#flex-gap-spacing)
  - Gap spacing uses flex `gap` to space the flex layout's direct children, and can be applied to space rows (`row-gap`), columns (`column-gap`), or both (`gap`). The benefit of gap spacing is that item wrapping is improved and improved item spacing that works better with CSS flex's logical layout properties. E.g., spacing in RTL layouts that rely on logical properties is improved. Use the gap system when all direct children should use the same spacer for rows, columns, or both.
  - **Note** using `gap` along the main axis will override any other spacing applied using the spacing system.

### Flex spacing

### Individually spaced

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem spacer={{ default: 'spacerNone' }}>Item - none</FlexItem>
  <FlexItem spacer={{ default: 'spacerXs' }}>Item - xs</FlexItem>
  <FlexItem spacer={{ default: 'spacerSm' }}>Item -sm</FlexItem>
  <FlexItem spacer={{ default: 'spacerMd' }}>Item - md</FlexItem>
  <FlexItem spacer={{ default: 'spacerLg' }}>Item - lg</FlexItem>
  <FlexItem spacer={{ default: 'spacerXl' }}>Item - xl</FlexItem>
  <FlexItem spacer={{ default: 'spacer2xl' }}>Item - 2xl</FlexItem>
  <FlexItem spacer={{ default: 'spacer3xl' }}>Item - 3xl</FlexItem>
</Flex>;
```

### Spacing xl

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex spaceItems={{ default: 'spaceItemsXl' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Spacing none

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex spaceItems={{ default: 'spaceItemsNone' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Flex gap spacing

### Row gap

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex rowGap={{ default: 'rowGap2xl' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Column gap

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex columnGap={{ default: 'columnGap2xl' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Gap

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex gap={{ default: 'gap2xl' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Flex layout modifiers

### Default layout

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Inline

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" display={{ default: 'inlineFlex' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Using canGrow

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex grow={{ default: 'grow' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Adjusting width

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Specifying column widths

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex flex={{ default: 'flex_2' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex flex={{ default: 'flex_3' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

## Column layout modifiers

### Column layout

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex direction={{ default: 'column' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Stacking elements

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex direction={{ default: 'column' }}>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Nesting elements in columns

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

## Responsive layout modifiers

### Switching between direction column and row

```ts file="FlexSwitchingColumnRow.tsx"

```

### Controlling width of text

```ts file="FlexControlTextWidth.tsx"

```

## Flex alignment

### Aligning right

```ts file="FlexAligningRight.tsx"

```

### Align right on single item

```ts file="FlexAlignRightSingleItem.tsx"

```

### Align right on multiple groups

```ts file="FlexAlignRightMultipleGroups.tsx"

```

### Align adjacent content

```ts file="FlexAlignAdjacentContent.tsx"

```

### Align self flex end

```ts file="FlexAlignSelfFlexEnd.tsx"

```

### Align self center

```ts file="FlexAlignSelfCenter.tsx"

```

### Align self baseline

```ts file="FlexAlignSelfBaseline.tsx"

```

### Align self stretch

```ts file="FlexAlignSelfStretch.tsx"

```

## Flex justification

### Justify content flex end

```ts file="FlexJustifyContentEnd.tsx"

```

### Justify content space between

```ts file="FlexJustifyContentSpaceBetween.tsx"

```

### Justify content flex start

```ts file="FlexJustifyContentFlexStart.tsx"

```

## Flex item order

### First last ordering

```ts file="FlexFirstLastOrder.tsx"

```

### Responsive first last ordering

```ts file="FlexResponsiveFirstLastOrder.tsx"

```

### Ordering

```ts file="FlexOrdering.tsx"

```

### Responsive ordering

```ts file="FlexResponsiveOrdering.tsx"

```

### Alternative components

```ts file="FlexAlternative.tsx"

```
