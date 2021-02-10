---
id: Divider
section: components
cssPrefix: pf-c-divider
propComponents: ['Divider']
---

## Examples
### Using hr
```js
import React from 'react';
import { Divider } from '@patternfly/react-core';

<Divider />
```

### Using li
```js
import React from 'react';
import { Divider } from '@patternfly/react-core/dist';

<ul>
  <li>List item one</li>
  <Divider component="li"/>
  <li>List item two</li>
</ul>
```

### Using div
```js
import React from 'react';
import { Divider } from '@patternfly/react-core';

<Divider component="div"/>
```

### Inset medium
```js
import React from 'react';
import { Divider } from '@patternfly/react-core';

<Divider inset={{default: 'insetMd'}}/>
```

### Inset at various breakpoints
```js
import React from 'react';
import { Divider } from '@patternfly/react-core';

<Divider
  inset={{
    default: 'insetMd',
    md: 'insetNone',
    lg: 'inset3xl',
    xl: 'insetLg'
  }}
/>
```

### Vertical in flex layout
```js
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem>first item</FlexItem>
  <Divider isVertical/>
  <FlexItem>second item</FlexItem>
</Flex>
```

### Vertical, inset medium in flex layout
```js
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem>first item</FlexItem>
  <Divider isVertical inset={{default: 'insetMd'}}/>
  <FlexItem>second item</FlexItem>
</Flex>
```

### Vertical, inset at various breakpoints
```js
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

<Flex>
  <FlexItem>first item</FlexItem>
  <Divider isVertical
    inset={{
      default: 'insetMd',
      md: 'insetNone',
      lg: 'insetSm',
      xl: 'insetXs'
    }}
  />
  <FlexItem>first item</FlexItem>
</Flex>
```
