---
id: Flex
cssPrefix: pf-v6-l-flex
section: layouts
propComponents: ['Flex', 'FlexItem']
---

import './flex.css';

## Flex basics

### Basic

```ts file="FlexBasic.tsx"

```

### Nesting

```ts file="FlexNesting.tsx"

```

### Nested with items

```ts file="FlexNestedItems.tsx"

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

```ts file="FlexIndividuallySpaced.tsx"

```

### Spacing xl

```ts file="FlexSpacingXl.tsx"

```

### Spacing none

```ts file="FlexSpacingNone.tsx"

```

### Flex gap spacing

### Row gap

```ts file="FlexRowGap.tsx"

```

### Column gap

```ts file="FlexColumnGap.tsx"

```

### Gap

```ts file="FlexGap.tsx"

```

### Flex layout modifiers

### Default layout

```ts file="FlexDefaultLayout.tsx"

```

### Inline

```ts file="FlexInline.tsx"

```

### Using canGrow

```ts file="FlexCanGrow.tsx"

```

### Adjusting width

```ts file="FlexAdjustingWidth.tsx"

```

### Specifying column widths

```ts file="FlexColumnWidths.tsx"

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

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex direction={{ default: 'column', lg: 'row' }}>
  <Flex>
    <FlexItem>Flex item</FlexItem>
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

### Controlling width of text

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex direction={{ default: 'column', lg: 'row' }}>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam
      dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
    </FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

## Flex alignment

### Aligning right

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Align right on single item

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>;
```

### Align right on multiple groups

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex align={{ default: 'alignRight' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex align={{ default: 'alignRight' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Align adjacent content

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Align self flex end

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfFlexEnd' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Align self center

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfCenter' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Align self baseline

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfBaseline' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
```

### Align self stretch

```js
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfStretch' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>;
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
