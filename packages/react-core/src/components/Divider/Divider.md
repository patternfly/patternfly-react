---
title: 'Divider'
section: components
cssPrefix: 'pf-c-divider'
typescript: true 
propComponents: ['Divider']
---
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

```js title=Using-hr-(default)
import React from 'react';
import { Divider } from '@patternfly/react-core';

DividerHr = () => (
  <Divider/>
);
```

```js title=Using-li
import React from 'react';
import { Divider } from '@patternfly/react-core/dist';

DividerLi = () => (
  <ul>
    <li>List item one</li>
    <Divider component="li"/>
    <li>List item two</li>
  </ul>
);
```

```js title=Using-div
import React from 'react';
import { Divider } from '@patternfly/react-core';

DividerDiv = () => (
  <Divider component="div"/>
);
```

```js title=Inset-medium
import React from 'react';
import { Divider } from '@patternfly/react-core';

DividerInsetMedium = () => (
  <Divider inset={{default: 'insetMd'}}/>
);
```

```js title=Inset-at-various-breakpoints
import React from 'react';
import { Divider } from '@patternfly/react-core';

DividerInsetVarious = () => (
  <Divider inset={{
          default: 'insetMd',
          md: 'insetNone',
          lg: 'inset3xl',
          xl: 'insetLg'
        }}
      />
);
```

```js title=Vertical-in-flex-layout
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVertical = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical/>
    <FlexItem>second item</FlexItem>
  </Flex>
);
```

```js title=Vertical,-inset-medium-in-flex-layout
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVerticalInsetMd = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical inset={{default: 'insetMd'}}/>
    <FlexItem>second item</FlexItem>
  </Flex>
);
```

```js title=Vertical,-inset-at-various-breakpoints
import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVerticalInsetVarious = () => (
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
);
```
