---
title: 'Flex'
cssPrefix: 'pf-l-flex'
section: 'layouts'
propComponents: ['Flex']
typescript: true
---

import { Flex, FlexItem } from '@patternfly/react-core';
import './flex.css';

### Flex Basics

## Examples
```js title=Basic
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

```js title=Nesting
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

```js title=Nested-with-items
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

### Flex Spacing
```js title=Individually-spaced
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

```js title=Spacing-xl
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

```js title=Spacin-none
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

### Flex layout modifiers

```js title=Default-layout
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

```js title=Inline
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

```js title=Using-canGrow
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

```js title=Adjusting-width
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

```js title=Specifying-column-widths
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

### Column layout modifiers

```js title=Column-layout
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex breakpointMods={[{modifier: "column"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

```js title=Stacking-elements
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

```js title=Nesting-elements-in-columns
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

### Responsive layout modifiers

```js title=Switching-between-direction-column-and-row
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

```js title=Controlling-width-of-text
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

### Flex alignment

```js title=Aligning-right
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

```js title=Align-right-on-single-item
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem breakpointMods={[{modifier: "align-right"}]}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

```js title=Align-right-on-multiple-groups
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

```js title=Align-adjacent-content
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

```js title=Align-self-flex-end
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

```js title=Align-self-center
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

```js title=Align-self-baseline
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

```js title=Align-self-stretch
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

### Flex justification

```js title=Justify-content-flex-end
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-flex-end"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

```js title=Justify-content-space-between
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-space-between"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

```js title=Justify-content-flex-start
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" breakpointMods={[{modifier: "justify-content-flex-start"}]}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```
