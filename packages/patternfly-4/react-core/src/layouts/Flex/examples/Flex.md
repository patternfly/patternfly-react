---
title: 'Flex'
cssPrefix: 'pf-l-flex'
section: 'layouts'
propComponents: ['Flex']
typescript: true
---

import { Flex, FlexItem } from '@patternfly/react-core';
import './flex.scss';

# Flex Basics

## Basic flex
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Flex nesting
```js
import React from 'react';
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
</Flex>
```

## Nested flex and items
```js
import React from 'react';
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
</Flex>
```

# Flex Spacing

## Individually spaced items (spacer=xs,sm,md,lg,xl,2xl,3xl)
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem breakpointMods={[{modifier: "spacer-none"}]}>Item - none</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-xs"}]}>Item - xs</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-sm"}]}>Item -sm</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-md"}]}>Item - md</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-lg"}]}>Item - lg</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-xl"}]}>Item - xl</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-2xl"}]}>Item - 2xl</FlexItem>
  <FlexItem breakpointMods={[{modifier: "spacer-3xl"}]}>Item - 3xl</FlexItem>
</Flex>
```

## Flex with modified spacing (spaceItems=xl)
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "space-items-xl"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Flex with modified spacing (spaceItems=none)
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "space-items-none"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

# Flex layout modifiers

## Default flex layout
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Inline flex
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "inline-flex"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Adjusting width with grow (first group has prop canGrow and will occupy remaining available space)
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "grow"}]}>
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
```

## Adjusting width with flex-1
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Specifying column widths with flex-1, 2, and 3
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "flex-2"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "flex-3"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

# Column layout modifiers

## Flex column layout
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "column"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Stacking flex elements
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "column"}]}>
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
```

## Nesting flex elements in columns
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

# Responsive layout modifiers

## Switching between flex-direction column and row at large breakpoint
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "column"}, {modifier: "row", breakpoint: "lg"}]}>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Controlling width of large text-filled flex item with flex-1
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "column"}, {modifier: "row", breakpoint: "lg"}]}>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

# Flex alignment

## Aligning right, including when wrapped
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem breakpointMods={[{modifier: "align-right"}]}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Align right on single item
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem breakpointMods={[{modifier: "align-right"}]}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Align right on multiple groups
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "align-right"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "align-right"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Using flex-1 to align adjacent content
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "flex-1"}]}>
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
```

## Aligning nested columns with align-self-flex-end
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}, {modifier: "align-self-flex-end"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Aligning nested columns with align-self-center
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}, {modifier: "align-self-center"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Aligning nested columns with align-self-baseline
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}, {modifier: "align-self-baseline"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

## Aligning nested columns with align-self-stretch
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <Flex breakpointMods={[{modifier: "column"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
  <Flex breakpointMods={[{modifier: "column"}, {modifier: "align-self-stretch"}]}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
</Flex>
```

# Flex justification

## Justify content with justify-content-flex-end
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-flex-end"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Justify content with justify-content-space-between
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-space-between"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

## Justify content with justify-content-flex-start
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-flex-start"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```
