---
title: 'Flex'
cssPrefix: 'pf-l-flex'
section: 'layouts'
propComponents: ['Flex', 'FlexItem']
typescript: true
---

import { Flex, FlexItem } from '@patternfly/react-core';
import './flex.css';

## Examples
### Flex Basics
```js title=Basic
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

BasicFlexExample = () => (
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Nesting
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

NestingFlexExample = () => (
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
  </Flex>
);
```

```js title=Nested-with-items
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

NestedItemsFlexExample = () => (
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
  </Flex>
);
```

### Flex Spacing
```js title=Individually-spaced
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexSpacingExample = () => (
  <Flex>
    <FlexItem spacer={{ default: 'spacerNone' }}>Item - none</FlexItem>
    <FlexItem spacer={{ default: 'spacerXs' }}>Item - xs</FlexItem>
    <FlexItem spacer={{ default: 'spacerSm' }}>Item -sm</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }}>Item - md</FlexItem>
    <FlexItem spacer={{ default: 'spacerLg' }}>Item - lg</FlexItem>
    <FlexItem spacer={{ default: 'spacerXl' }}>Item - xl</FlexItem>
    <FlexItem spacer={{ default: 'spacer2xl' }}>Item - 2xl</FlexItem>
    <FlexItem spacer={{ default: 'spacer3xl' }}>Item - 3xl</FlexItem>
  </Flex>
);
```

```js title=Spacing-xl
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexSpacingXlExample = () => (
  <Flex spaceItems={{ modifier: 'spaceItemsXl' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Spacing-none
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexSpacingNoneExample = () => (
  <Flex spaceItems={{ default: 'spaceItemsNone' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

### Flex layout modifiers
```js title=Default-layout
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexLayoutModifiersExample = () => (
  <Flex className="example-border">
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Inline
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexInlineExample = () => (
  <Flex className="example-border" flex={{ default: 'inlineFlex' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Using-canGrow
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexUsingCanGrowExample = () => (
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
  </Flex>
);
```

```js title=Adjusting-width
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAdjustingWidthExample = () => (
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
  </Flex>
);
```

```js title=Specifying-column-widths
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexSpecifyingColumnWidthsExample = () => (
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
  </Flex>
);
```

### Column layout modifiers

```js title=Column-layout
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexColumnLayoutExample = () => (
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Stacking-elements
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexStackingElementsExample = () => (
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
  </Flex>
);
```

```js title=Nesting-elements-in-columns
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexNestingElementsInColumnsExample = () => (
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
  </Flex>
);
```

### Responsive layout modifiers

```js title=Switching-between-direction-column-and-row
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexSwitchingBetweenDirectionColumnAndRowExample = () => (
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
  </Flex>
);
```

```js title=Controlling-width-of-text
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

FlexControllingWidthOfTextExample = () => (
  <Flex direction={{ default: 'column', lg: 'row' }}>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.</FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
```

### Flex alignment

```js title=Aligning-right
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAligningRightExample = () => (
  <Flex className="example-border">
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Align-right-on-single-item
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAligningRightOnSingleItemExample = () => (
  <Flex className="example-border">
    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Align-right-on-multiple-groups
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignRightOnMultipleGroupsExample = () => (
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
  </Flex>
);
```

```js title=Align-adjacent-content
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignAdjacentContentExample = () => (
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
  </Flex>
);
```

```js title=Align-self-flex-end
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignSelfFlexEndExample = () => (
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
  </Flex>
);
```

```js title=Align-self-center
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignSelfCenterExample = () => (
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
  </Flex>
);
```

```js title=Align-self-baseline
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignSelfBaselineExample = () => (
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
  </Flex>
);
```

```js title=Align-self-stretch
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexAlignSelfStretchExample = () => (
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
  </Flex>
);
```

### Flex justification

```js title=Justify-content-flex-end
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexJustifyContentFlexEndExample = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentFlexEnd' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Justify-content-space-between
import React from 'react';
import { Flex, FlexItem, FlexModifiers  } from '@patternfly/react-core';

FlexJustifyContentSpaceBetweenExample = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentSpaceBetween' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```

```js title=Justify-content-flex-start
import React from 'react';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';

FlexJustifyContentFlexStartExample = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentFlexStart' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
```
