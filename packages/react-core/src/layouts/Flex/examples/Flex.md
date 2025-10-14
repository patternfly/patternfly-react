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

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentFlexEnd' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Justify content space between

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentSpaceBetween' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Justify content flex start

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentFlexStart' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

## Flex item order

### First last ordering

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '2' }}>
    Item A
  </FlexItem>
  <FlexItem>Item B</FlexItem>
  <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '-1' }}>
    Item C
  </FlexItem>
</Flex>;
```

### Responsive first last ordering

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem spacer={{ lg: 'spacerNone' }} order={{ lg: '2' }}>
    Item A
  </FlexItem>
  <FlexItem spacer={{ md: 'spacerNone', lg: 'spacerMd' }} order={{ default: '-1', md: '1' }}>
    Item B
  </FlexItem>
  <FlexItem spacer={{ default: 'spacerMd' }} order={{ md: '-1' }}>
    Item C
  </FlexItem>
</Flex>;
```

### Ordering

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <Flex spacer={{ default: 'spacerNone' }} order={{ lg: '1' }} className="example-border">
    <FlexItem order={{ md: '2' }}>Set 1, Item A</FlexItem>
    <FlexItem order={{ md: '-1' }}>Set 1, Item B</FlexItem>
    <FlexItem order={{ xl: '1' }}>Set 1, Item C</FlexItem>
    <FlexItem spacer={{ xl: 'spacerNone' }} order={{ xl: '1' }}>
      Set 1, Item D
    </FlexItem>
  </Flex>
  <Flex spacer={{ lg: 'spacerMd' }} className="example-border">
    <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
      Set 2, Item A
    </FlexItem>
    <FlexItem order={{ default: '1' }}>Set 2, Item B</FlexItem>
    <FlexItem>Set 2, Item C</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '2' }}>
      Set 2, Item D
    </FlexItem>
  </Flex>
</Flex>;
```

### Responsive ordering

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <Flex spacer={{ default: 'spacerNone' }} order={{ default: '1' }} className="example-border">
    <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
      Set 1, Item A
    </FlexItem>
    <FlexItem order={{ default: '1' }}>Set 1, Item B</FlexItem>
    <FlexItem>Set 1, Item C</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }}>Set 1, Item D</FlexItem>
  </Flex>

  <Flex spacer={{ default: 'spacerMd' }} className="example-border">
    <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
      Set 2, Item A
    </FlexItem>
    <FlexItem order={{ lg: '1' }}>Set 2, Item B</FlexItem>
    <FlexItem>Set 2, Item C</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '2' }}>
      Set 2, Item D
    </FlexItem>
  </Flex>
</Flex>;
```

### Alternative components

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex component="ul">
  <FlexItem component="li">Flex item</FlexItem>
  <FlexItem component="li">Flex item</FlexItem>
  <FlexItem component="li">Flex item</FlexItem>
  <FlexItem component="li">Flex item</FlexItem>
  <FlexItem component="li">Flex item</FlexItem>
</Flex>;
```
