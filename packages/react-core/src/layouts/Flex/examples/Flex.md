---
id: Flex
cssPrefix: pf-l-flex
section: layouts
propComponents: ['Flex', 'FlexItem']
---

import './flex.css';

## Flex Basics
### Basic
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

### Nesting
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

### Nested with items
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

### Flex Spacing
### Individually spaced
```js
import React from 'react';
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
</Flex>
```

### Spacing xl
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex spaceItems={{ modifier: 'spaceItemsXl' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Spacing none
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex spaceItems={{ default: 'spaceItemsNone' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Flex layout modifiers
### Default layout
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

### Inline
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" flex={{ default: 'inlineFlex' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Using canGrow
```js
import React from 'react';
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
</Flex>
```

### Adjusting width
```js
import React from 'react';
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
</Flex>
```

### Specifying column widths
```js
import React from 'react';
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
</Flex>
```

## Column layout modifiers

### Column layout
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex direction={{ default: 'column' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Stacking elements
```js
import React from 'react';
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
</Flex>
```

### Nesting elements in columns
```js
import React from 'react';
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
</Flex>
```

## Responsive layout modifiers

### Switching between direction column and row
```js
import React from 'react';
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
</Flex>
```

### Controlling width of text
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

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
```

## Flex alignment

### Aligning right
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Align right on single item
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border">
  <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Align right on multiple groups
```js
import React from 'react';
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
</Flex>
```

### Align adjacent content
```js
import React from 'react';
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
</Flex>
```

### Align self flex end
```js
import React from 'react';
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
</Flex>
```

### Align self center
```js
import React from 'react';
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
</Flex>
```

### Align self baseline
```js
import React from 'react';
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
</Flex>
```

### Align self stretch
```js
import React from 'react';
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
</Flex>
```

## Flex justification

### Justify content flex end
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentFlexEnd' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Justify content space between
```js
import React from 'react';
import { Flex, FlexItem  } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentSpaceBetween' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```

### Justify content flex start
```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

<Flex className="example-border" justifyContent={{ default: 'justifyContentFlexStart' }}>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
  <FlexItem>Flex item</FlexItem>
</Flex>
```
